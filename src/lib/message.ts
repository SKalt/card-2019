import {
  compressToEncodedURIComponent as compress,
  decompressFromEncodedURIComponent as decompress
} from "lz-string";

export function getDecodedMessage(): string {
  return location.hash ? decompress(location.hash.slice(1)) : "";
}

export function writeMessage(el: HTMLElement): void {
  el.addEventListener("keypress", () => {
    const path = `${location.origin}#${compress(el.innerText)}`;
    history.pushState({ path }, "", path);
  });
}
