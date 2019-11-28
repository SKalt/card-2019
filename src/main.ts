import {
  imageOf,
  asBitArray,
  layer,
  colorBitArrayAsImageData,
  getImageData
} from "./lib";
import snow from "./img/snow.png";

async function main() {
  const canvas: HTMLCanvasElement = document.querySelector(
    "canvas.holiday-card--picture_animation"
  );

  // imageOf(snow).then(img => {
  //   document.querySelectorAll(".holiday-card--picture_animation").forEach(e => {
  //     e.style.height = img.height;
  //     setTimeout(() => {
  //       alert("transform");
  //       e.style.transform = `translate(10px, 10px)`;
  //     }, 5000);
  //   });

  // canvas.width = img.width;
  // canvas.height = img.height;
  // const ctx = canvas.getContext("2d");
  // const imgData = getImageData(img);
  // const bitArray = asBitArray(getImageData(img));
  // const otherImgData = colorBitArrayAsImageData([255, 255, 255], bitArray);
  // console.log({ otherImgData, bitArray });
  // ctx.putImageData(otherImgData, 0, 0);
  // layer({ ctx, matrix: [0.3, 0.3, 0.7], bitArray, color: [255, 255, 255] })();
  // });
}

// const worker = new Worker("worker.js");
// worker.onmessage = function(event) {
//   console.log(event.data);
// };
// main();
function main2() {
  const foreground = document.querySelector(
    ".holiday-card--picture_foreground"
  );
  const backgrounds = [
    ...document.querySelectorAll(".holiday-card--picture_animation")
  ];
  foreground.onload = () => {
    let height = window.getComputedStyle(foreground).height;
    backgrounds.forEach(e => (e.style.height = height));
  };
  document
    .querySelectorAll(".holiday-card--picture_animation")
    .forEach(e => {});
  //     e.style.height = img.height;
}

main2();
