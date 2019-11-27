// import the main image
// import the snow layer
// import the 1-px cursor
import {
  compressToEncodedURIComponent as compress,
  decompressFromEncodedURIComponent as decompress
} from "lz-string";

type Rgba = [number, number, number, number];
type Rgb = [number, number, number];

type AllowedXTransition = 0 | 1 | 2 | -1 | -2;
type AllowedYTransition = 0 | 1;
type TransitionMatrix = [number, number, number];
/* probabilities of      ^x -1,   ^x +1,   ^y +1 */
interface Transition {
  x: AllowedXTransition;
  y: 0 | 1;
}
type BitArray = Array<0 | 1>;
interface ImageBitArray {
  width: number;
  height: number;
  bitArray: BitArray;
}

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
    matrix[0] >= randomX ? (matrix[1] >= randomX ? 1 : -1) : 0;
  let y: AllowedYTransition = matrix[2] >= randomY ? 1 : 0;
  return { x, y };
}

export function getDecodedMessage(): string {
  return location.hash ? decompress(location.hash.slice(1)) : "";
}

export function writeMessage(el: HTMLElement): void {
  el.addEventListener("keypress", () => {
    const path = `${location.origin}#${compress(el.innerText)}`;
    history.pushState({ path }, "", path);
  });
}

function wrap({ x, y }: Transition, { data, width, height }: ImageData) {
  let result: number[] = [];
  const wrapDimension = (added: number, max: number) => {
    return (index: number) => (max + (index + added)) % max;
  };

  const wrapX = wrapDimension(x, width);
  const wrapY = wrapDimension(y, height);
  for (let i = 0; i <= width; i++) {
    for (let j = 0; j <= height; j++) {
      let originalStart = width * j + i;
      let wrappedStart = width * wrapY(j) + wrapX(i);
      for (let k = 0; k <= 4; k++) {
        result[wrappedStart + k] = data[originalStart + k];
      }
    }
  }
  return result;
}

export function asBitArray(img: ImageData): ImageBitArray {
  const bitArray: Array<1 | 0> = [];
  const { width, height, data } = img;
  for (let i: number = 3; i < data.length; i += 4) {
    bitArray.push(img.data[i] === 0 ? 0 : 1);
  }
  return { bitArray, width, height };
}

function colorBitArrayAsImageData(
  color: Rgb,
  { bitArray, width, height }: ImageBitArray
) {
  const result = new Uint8Array(
    bitArray
      .map(bit => (bit == 1 ? [...color, 1] : [0, 0, 0, 0]))
      .reduce((result: number[], color: Rgba) => result.concat(color), [])
  );
  return { result };
}
