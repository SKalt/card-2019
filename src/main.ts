import snow from "./img/snow.png";
import { imageOf, asBitArray, getImageData } from ".";

async function main() {
  imageOf(snow).then(img => asBitArray(getImageData(img)));
}

main();
