import {
  package_default
} from "./chunk-KHFIOR5Y.js";
import {
  parse
} from "./chunk-5HHVXMLS.js";
import {
  selectSvgElement
} from "./chunk-UIHGHBLU.js";
import "./chunk-A5UNPJNI.js";
import "./chunk-JOVIPWUH.js";
import "./chunk-MHSWEHVO.js";
import "./chunk-MYS4CNP3.js";
import "./chunk-LHQHP3B4.js";
import "./chunk-D6DRJAFA.js";
import "./chunk-W76A7R2H.js";
import "./chunk-MUA3HMCU.js";
import "./chunk-FGVOLWT6.js";
import "./chunk-BHVL6ICI.js";
import {
  configureSvgSize
} from "./chunk-Y5SYFPW2.js";
import "./chunk-ELR33PE3.js";
import {
  __name,
  log
} from "./chunk-5STBZGF5.js";
import "./chunk-WPLOTFGW.js";

// ../../node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-HS3SLOUP.mjs
var parser = {
  parse: /* @__PURE__ */ __name(async (input) => {
    const ast = await parse("info", input);
    log.debug(ast);
  }, "parse")
};
var DEFAULT_INFO_DB = {
  version: package_default.version + (true ? "" : "-tiny")
};
var getVersion = /* @__PURE__ */ __name(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};
var draw = /* @__PURE__ */ __name((text, id, version) => {
  log.debug("rendering info diagram\n" + text);
  const svg = selectSvgElement(id);
  configureSvgSize(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
}, "draw");
var renderer = { draw };
var diagram = {
  parser,
  db,
  renderer
};
export {
  diagram
};
