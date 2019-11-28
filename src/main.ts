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
  const canvas: HTMLCanvasElement = document.querySelector(
    "canvas.holiday-card--picture_animation"
  );

  imageOf(snow).then(img => {
    console.log(`main--snow, ${img.width}, h ${img.height}`);
    canvas.width = img.width;
    canvas.height = img.height;
    const imgData = getImageData(img);
    const bitArray = asBitArray(imgData);
    const otherImgData = colorBitArrayAsImageData([255, 255, 255], bitArray);
    const ctx = canvas.getContext("2d");
    const layers = [
      // layer({}) // rearmost must come first
      // layer({})(ctx)
      layer({ matrix: [0.3, 0.3, 0.7], bitArray, color: [255, 255, 255] })
    ];

    setInterval(() => {
      ctx.fillStyle = "#0e121d";
      ctx.fillRect(0, 0, img.width, img.height);
      layers.forEach((draw, index) => {
        console.log(index, draw(ctx));
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
