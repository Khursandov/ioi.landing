import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _imports_0 = publicAssetsURL("/images/ranking.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center bg-blue-50" }, _attrs))}><div class="mt-10 text-center"><img${ssrRenderAttr("src", _imports_0)} alt="Announcement" class="mx-auto h-auto max-w-full"><div class="my-4" style="${ssrRenderStyle({ "margin": "40px 0" })}"><h2 class="my-5 text-5xl font-bold text-[#345CFE]" style="${ssrRenderStyle({ "color": "#345cfe" })}"> To be announced soon ... </h2></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ranking.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ranking = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ranking as default };
//# sourceMappingURL=ranking-CDL3FjYM.mjs.map
