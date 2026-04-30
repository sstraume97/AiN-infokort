import {
  StateDB,
  stateDiagram_default,
  stateRenderer_v3_unified_default,
  styles_default
} from "./chunk-EKIYDQFE.js";
import "./chunk-KQJB562F.js";
import "./chunk-E3N6IKYL.js";
import "./chunk-G3UB2FCD.js";
import "./chunk-26Z3ROKD.js";
import "./chunk-MB5QTPH3.js";
import "./chunk-ZKZTPX7U.js";
import "./chunk-XAOA2AE3.js";
import "./chunk-5QVKPIE5.js";
import "./chunk-WWKCZ7RG.js";
import "./chunk-VGAWTWDZ.js";
import "./chunk-HTCZ7P7B.js";
import "./chunk-Y5SYFPW2.js";
import "./chunk-ELR33PE3.js";
import {
  __name
} from "./chunk-5STBZGF5.js";
import "./chunk-WPLOTFGW.js";

// ../../node_modules/mermaid/dist/chunks/mermaid.core/stateDiagram-v2-4FDKWEC3.mjs
var diagram = {
  parser: stateDiagram_default,
  get db() {
    return new StateDB(2);
  },
  renderer: stateRenderer_v3_unified_default,
  styles: styles_default,
  init: /* @__PURE__ */ __name((cnf) => {
    if (!cnf.state) {
      cnf.state = {};
    }
    cnf.state.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
  }, "init")
};
export {
  diagram
};
