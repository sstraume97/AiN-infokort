import {
  getConfig2
} from "./chunk-Y5SYFPW2.js";
import {
  __name,
  select_default
} from "./chunk-5STBZGF5.js";

// ../../node_modules/mermaid/dist/chunks/mermaid.core/chunk-EXTU4WIE.mjs
var selectSvgElement = /* @__PURE__ */ __name((id) => {
  const { securityLevel } = getConfig2();
  let root = select_default("body");
  if (securityLevel === "sandbox") {
    const sandboxElement = select_default(`#i${id}`);
    const doc = sandboxElement.node()?.contentDocument ?? document;
    root = select_default(doc.body);
  }
  const svg = root.select(`#${id}`);
  return svg;
}, "selectSvgElement");

export {
  selectSvgElement
};
