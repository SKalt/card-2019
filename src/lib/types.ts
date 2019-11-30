export type Rgba = [number, number, number, number];
export type Rgb = [number, number, number];

export type AllowedXTransition = 0 | 1 | 2 | -1 | -2;
export type AllowedYTransition = 0 | 1;
export type TransitionMatrix = [number, number, number];
/* probabilities of      ^x -1,   ^x +1,   ^y +1 */
export interface Transition {
  x: AllowedXTransition;
  y: 0 | 1;
}
interface Rect {
  width: number;
  height: number;
}
export type BitArray = Array<0 | 1>;
export interface ImageBitArray extends Rect {
  bitArray: BitArray;
}
export interface ImageDataLike extends Rect {
  data: number[];
}
