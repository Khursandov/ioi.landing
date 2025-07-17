import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white px-6 py-10" }, _attrs))}><div class="container mx-auto text-gray-900"><h3 class="text-5xl font-bold text-[#002C9B]">Schedule</h3><div class="mt-6 w-full"><div class="grid grid-cols-2 text-sm font-medium text-[#002C9B] md:text-lg"><div class="bg-[#4A98FE] p-3">20 April 2025</div><div class="bg-[#4A98FE] p-3">Call for tasks deadline</div><div class="bg-[#D2E4FF] p-3">25 April 2025</div><div class="bg-[#D2E4FF] p-3">Registration Open</div><div class="bg-[#4A98FE] p-3">5 May 2025</div><div class="bg-[#4A98FE] p-3">Registration deadline</div><div class="bg-[#D2E4FF] p-3">10 May 2025</div><div class="bg-[#D2E4FF] p-3"> APIO 2025 Tasks Translation &amp; Practice Session </div><div class="bg-[#4A98FE] p-3">14 May 2025</div><div class="bg-[#4A98FE] p-3"> End of tasks translation submissions and Practice Session </div><div class="bg-[#D2E4FF] p-3">17 - 18 May 2025</div><div class="bg-[#D2E4FF] p-3">APIO 2025 Uzbekistan</div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/schedule.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const schedule = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { schedule as default };
//# sourceMappingURL=schedule-CgP2-XgD.mjs.map
