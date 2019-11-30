// import the main image
// import the snow layer
// import the 1-px cursor
import {
  Transition,
  TransitionMatrix,
  AllowedXTransition,
  AllowedYTransition,
  Rgb,
  Rgba,
  ImageBitArray,
  ImageDataLike
} from "./";

export function getImageData(img: HTMLImageElement): ImageData {
  const canvas = document.createElement("canvas");
  const { width, height } = img;
  canvas.width = width || 0;
  canvas.height = height || 0;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  return ctx.getImageData(0, 0, width, height);
}

export async function imageOf(url: string): Promise<HTMLImageElement> {
  const result: Promise<HTMLImageElement> = new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = url;
  });
  return result;
}

// define a layer
// define a layer transition
export function getTransition(
  matrix: TransitionMatrix,
  randomX: number,
  randomY: number
): Transition {
  let x: AllowedXTransition =
    matrix[0] >= randomX ? (matrix[1] + matrix[0] >= randomX ? 1 : -1) : 0;
  let y: AllowedYTransition = matrix[2] >= randomY ? 1 : 0;
  return { x, y };
}

// export function wrap(
//   { x, y }: Transition,
//   { data, width, height }: ImageDataLike
// ): ImageDataLike {
//   let result: number[] = [];
//   const wrapDimension = (added: number, max: number) => {
//     return (index: number) => (max + (index + added)) % max;
//   };

//   const wrapX = wrapDimension(x, width);
//   const wrapY = wrapDimension(y, height);
//   for (let i = 0; i <= width; i++) {
//     for (let j = 0; j <= height; j++) {
//       let originalStart = width * j + i;
//       let wrappedStart = width * wrapY(j) + wrapX(i);
//       for (let k = 0; k <= 4; k++) {
//         result[wrappedStart + k] = data[originalStart + k];
//       }
//     }
//   }
//   return { data: result, width, height };
// }

export function asBitArray(img: ImageData): ImageBitArray {
  const bitArray: Array<1 | 0> = [];
  const { width, height, data } = img;
  for (let i: number = 3; i < data.length; i += 4) {
    bitArray.push(img.data[i] === 0 ? 0 : 1);
  }
  return { bitArray, width, height };
}

export function colorBitArrayAsImageData(
  color: Rgb,
  { bitArray, width, height }: ImageBitArray
): ImageData {
  const data = new Uint8ClampedArray(width * height * 4);
  bitArray.forEach((bit, i) => {
    let rgba = bit === 1 ? [...color, 255] : [0, 0, 0, 0];

    let index = i * 4;
    for (let j = 0; +j <= 4; j++) {
      data[index + j] = rgba[j];
    }
  });
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  const img = ctx.createImageData(width, height);
  img.data.set(data);
  return img;
}

export const layer = ({
  matrix,
  color,
  bitArray
}: {
  matrix: TransitionMatrix;
  color: Rgb;
  bitArray: ImageBitArray;
}) => {
  const img = colorBitArrayAsImageData(color, bitArray);
  const { data, width, height } = img;
  const state = {
    x: 0,
    y: 0
  };
  const transition = (ctx: CanvasRenderingContext2D) => {
    const { x, y } = getTransition(matrix, Math.random(), Math.random());
    state.x += x;
    state.y += y;
    return { ...state, ...drawWrap(ctx, img, { ...state, width, height }) };
  };
  return transition;
};

function drawWrap(
  ctx: CanvasRenderingContext2D,
  imgdata: ImageData,
  {
    x,
    y,
    width,
    height
  }: { x: number; y: number; width: number; height: number }
) {
  let remainder = (i: number, total: number) => {
    let a = (total + i) % total;
    return [a, total - a];
  };
  let [_x, _width] = remainder(x, width); // the width of x overflowing
  let [_y, _height] = remainder(y, height); // width of y overflowing
  /*       _x  _width
          ... .......
         +---+---+---+
    _y : | \ | x | x |
         +---+---+---+
       : | y | * | * |
_height: +---+---+---+
       : | y | * | * |
         +---+---+---+

*/
  const putQuadrant = (x: number, y: number, width: number, height: number) => (
    srcX: number,
    srcY: number
  ) => {
    // ctx.beginPath();
    // ctx.rect(x, y, width, height);
    // ctx.stroke();
    // ctx.rect()
    // console.log({ x, y, dx, dy, width, height });
    ctx.putImageData(imgdata, x - srcX, y - srcY, srcX, srcY, width, height);
  };
  ctx.strokeStyle = "white";
  // ctx.putImageData(imgdata, 0, 0, _width)
  putQuadrant(0, 0, _x, _y)(_width, _height); // \, upper-left
  ctx.strokeStyle = "red";
  putQuadrant(_x + 1, _y + 1, _width - 1, _height - 1)(0, 0); // *, bottom-right
  ctx.strokeStyle = "green";
  putQuadrant(0, _y + 1, _x, _height)(_width, 0); // y, bottom-left
  ctx.strokeStyle = "blue";
  putQuadrant(_x, 0, _width, _y)(0, _height); // _x, top-right
  return { _x, _y, _width, _height };
}
