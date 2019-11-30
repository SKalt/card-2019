import {
  imageOf,
  asBitArray,
  layer,
  colorBitArrayAsImageData,
  getImageData
} from "./lib";
import snow from "./img/snow.png";

export function imagedata_to_image(imagedata) {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = imagedata.width;
  canvas.height = imagedata.height;
  ctx.putImageData(imagedata, 0, 0);

  var image = new Image();
  image.src = canvas.toDataURL();
  return image;
}
async function main() {
  const container: HTMLElement = document.querySelector(
    ".holiday-card--picture_animation"
  );

  imageOf(snow).then(img => {
    console.log(`main--snow, ${img.width}, h ${img.height}`);
    const { width, height } = img;
    const imgData = getImageData(img);
    const bitArray = asBitArray(imgData);
    const layers = [
      layer({
        container,
        x: 0,
        y: 0,
        matrix: [0.7, 0.7, 0.17],
        color: [24, 32, 62],
        bitArray
      }),
      layer({
        container,
        x: 100,
        y: 100,
        matrix: [0.15, 0.15, 0.35],
        bitArray,
        color: [96, 107, 145]
      }),
      layer({
        container,
        x: 75,
        y: 15,
        matrix: [0.3, 0.3, 0.7],
        bitArray,
        color: [170, 179, 211]
      })
    ];

    setInterval(() => {
      layers.forEach((draw, index) => {
        draw();
      });
    }, 300);
  });
}
main();

// const worker = new Worker("worker.js");
// worker.onmessage = function(event) {
//   console.log(event.data);
// };
// main();
// function main2() {
//   const foreground = document.querySelector(
//     ".holiday-card--picture_foreground"
//   );
//   const backgrounds = [
//     ...document.querySelectorAll(".holiday-card--picture_animation")
//   ];
//   foreground.onload = () => {
//     let height = window.getComputedStyle(foreground).height;
//     backgrounds.forEach(e => (e.style.height = height));
//   };
//   document
//     .querySelectorAll(".holiday-card--picture_animation")
//     .forEach(e => {});
//   //     e.style.height = img.height;
// }

// main2();
