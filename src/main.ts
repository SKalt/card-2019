import {
  imageOf,
  asBitArray,
  layer,
  cursor,
  getImageData,
  getDecodedMessage,
  writeMessage
} from "./lib";
import snow from "./img/snow.png";

async function main() {
  const messageArea: HTMLElement = document.querySelector(
    ".holiday-card--mesage_dynamic"
  );
  const message = getDecodedMessage();
  if (message) messageArea.textContent = message;
  else {
    writeMessage(messageArea);
  }

  const container: HTMLElement = document.querySelector(
    ".holiday-card--picture .background_animation"
  );

  imageOf(snow).then(img => {
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
    const cursorCanvas: HTMLCanvasElement = document.querySelector(
      ".holiday-card--picture .foreground_animation canvas"
    );
    setInterval(() => {
      layers.forEach((draw, index) => {
        draw();
      });
    }, 300);
    setInterval(
      cursor(cursorCanvas, width, height, 229, 167, [150, 227, 252]),
      750
    );
  });
}
main();
