import {
  compressToEncodedURIComponent as compress,
  decompressFromEncodedURIComponent as decompress
} from "lz-string";

export function getDecodedMessage(): string {
  let encoded = location.hash.slice(1);
  return location.hash ? decompress(encoded) : "";
}

export function writeMessage(el: HTMLElement): void {
  el.contentEditable = "true";
  el.setAttribute("style", "min-height: 100px");
  el.addEventListener("keyup", () => {
    const path = `${location.origin}#${compress(el.innerText)}`;
    history.replaceState({ path }, "", path);
  });
}
