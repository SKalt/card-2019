import {
  Transition,
  TransitionMatrix,
  AllowedXTransition,
  AllowedYTransition,
  Rgb,
  ImageBitArray
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

export function asBitArray(img: ImageData): ImageBitArray {
  const bitArray: Array<1 | 0> = [];
  const { width, height, data } = img;
  for (let i: number = 3; i < data.length; i += 4) {
    bitArray.push(img.data[i] === 0 ? 0 : 1);
  }
  return { bitArray, width, height };
}

const pixelIndex = (i: number, j: number, width: number) => width * j + i;
const rgbaIndex = (i: number, j: number, width: number) =>
  4 * pixelIndex(i, j, width);
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
  container,
  x = 0,
  y = 0,
  matrix,
  color,
  bitArray
}: {
  container: HTMLElement;
  x: number;
  y: number;
  matrix: TransitionMatrix;
  color: Rgb;
  bitArray: ImageBitArray;
}) => {
  const img = colorBitArrayAsImageData(color, bitArray);
  const { width, height } = img;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  container.append(canvas);
  const ctx = canvas.getContext("2d");
  const state = {
    x,
    y
  };
  const transition = () => {
    const { x, y } = getTransition(matrix, Math.random(), Math.random());
    state.x += x;
    state.y += y;
    drawWrap(ctx, img, { ...state, width, height });
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
    ctx.putImageData(imgdata, x - srcX, y - srcY, srcX, srcY, width, height);
  };
  // ctx.putImageData(imgdata, 0, 0, _width)
  putQuadrant(0, 0, _x, _y)(_width, _height); // \, upper-left
  putQuadrant(_x + 1, _y + 1, _width - 1, _height - 1)(0, 0); // *, bottom-right
  putQuadrant(0, _y + 1, _x, _height)(_width, 0); // y, bottom-left
  putQuadrant(_x, 0, _width, _y)(0, _height); // _x, top-right
}

export const cursor = (
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
  i: number,
  j: number,
  onColor: Rgb,
  offColor: Rgb = [82, 147, 209]
) => {
  console.log({ width, height });
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  const img = new ImageData(width, height);
  const index = rgbaIndex(i, j, width);
  console.log({ index });
  let on = true;
  const setPixel = (on: boolean = true) => {
    [...(on ? onColor : offColor), 255].forEach((value, _i) => {
      img.data[index + _i] = value;
    });
    ctx.putImageData(img, 0, 0);
  };
  const blink = () => {
    on = !on;
    setPixel(on);
  };
  return blink;
};
