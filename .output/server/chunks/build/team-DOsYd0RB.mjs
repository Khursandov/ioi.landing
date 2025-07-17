import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = publicAssetsURL("/images/team/azamat.jpg");
const _imports_1 = publicAssetsURL("/images/team/Mukhlisa.png");
const _imports_2 = publicAssetsURL("/images/team/Erkin.png");
const _imports_3 = publicAssetsURL("/images/team/Asadullo.png");
const _imports_4 = publicAssetsURL("/images/team/Bakhodir.png");
const _imports_5 = publicAssetsURL("/images/team/Akmal.png");
const _imports_6 = publicAssetsURL("/images/team/Rafael.png");
const _imports_7 = publicAssetsURL("/images/team/Dilshodbek.png");
const _imports_8 = publicAssetsURL("/images/team/Davlatbek.png");
const _imports_9 = publicAssetsURL("/images/team/Dilyorbek.png");
const _imports_10 = publicAssetsURL("/images/team/Adizbek.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white px-6 py-10" }, _attrs))}><div class="container mx-auto text-center text-gray-900"><h2 class="text-2xl font-bold text-[#002C9B] md:text-3xl"> Organizing Committee </h2><div class="mt-8 grid grid-cols-3 items-center gap-4"><div class="col-span-3"><img${ssrRenderAttr("src", _imports_0)} alt="Azamat Seydaliev" class="mx-auto size-32 rounded-full"><p class="mt-2 font-semibold">Azamat Seydaliev</p><p class="text-sm text-gray-600"> IOI International Committee member <br> Chief specialist <br> Digital Education Development Center </p></div><div><img${ssrRenderAttr("src", _imports_1)} alt="Erkin Qurbonov" class="mx-auto size-32 rounded-full"><p class="mt-2 font-semibold">Mukhlisa Khudayberganova</p><p class="text-sm text-gray-600"> Head of the department <br> Digital Education Development Center </p></div><div><img${ssrRenderAttr("src", _imports_2)} alt="Erkin Qurbonov" class="mx-auto size-32 rounded-full"><p class="mt-2 font-semibold">Erkin Qurbonov</p><p class="text-sm text-gray-600">Head of Department</p><p class="text-sm text-gray-600"> Ministry of Digital Technologies of the Republic of Uzbekistan </p></div><div><img${ssrRenderAttr("src", _imports_3)} alt="Mukhlisa Khudayberganova" class="mx-auto size-32 rounded-full"><p class="mt-2 font-semibold">Asadullo Ganiyev</p><p class="text-sm text-gray-600"> Master\u2019s Computer Science student <br> Universit\xE4t des Saarlandes </p></div></div><h2 class="mt-12 text-2xl font-bold text-[#002C9B] md:text-3xl"> Scientific Committee </h2><div class="mt-8 grid grid-cols-3 items-center gap-4"><div class="col-span-3"><img${ssrRenderAttr("src", _imports_4)} alt="Azamat Seydaliev" class="mx-auto size-32 rounded-full"><p class="mt-2 font-semibold">Bakhodir Ashirmatov</p><p class="text-sm text-gray-600"> Senior Machine Learning Engineer <br> Google </p></div><div><img${ssrRenderAttr("src", _imports_5)} alt="Erkin Qurbonov" class="mx-auto size-32 rounded-full"><p class="mt-2 font-semibold">Akmal Ashirmatov</p><p class="text-sm text-gray-600"> Master\u2019s Computer Science student <br> ETH Zurich </p></div><div><img${ssrRenderAttr("src", _imports_6)} alt="Erkin Qurbonov" class="mx-auto size-32 rounded-full"><p class="mt-2 font-semibold">Rafael Ashrapov</p><p class="text-sm text-gray-600">Moscow State University</p></div><div><img${ssrRenderAttr("src", _imports_7)} alt="Mukhlisa Khudayberganova" class="mx-auto size-32 rounded-full"><p class="mt-2 font-semibold">Dilshodbek Khujaev</p><p class="text-sm text-gray-600"> IOI Bronze medalist <br> Carnegie Mellon University in Qatar </p></div></div><h2 class="mt-12 text-2xl font-bold text-[#002C9B] md:text-3xl"> Technical Committee </h2><div class="mt-8 grid grid-cols-3 items-center gap-4"><div><img${ssrRenderAttr("src", _imports_8)} alt="Erkin Qurbonov" class="mx-auto size-32 rounded-full"><p class="mt-2 font-semibold">Davlatbek Mirakilov</p><p class="text-sm text-gray-600"> IOI International Technical Committee member </p></div><div><img${ssrRenderAttr("src", _imports_9)} alt="Erkin Qurbonov" class="mx-auto size-32 rounded-full"><p class="mt-2 font-semibold">Dilyorbek Valijanov</p><p class="text-sm text-gray-600"> IOI Bronze medalist <br> Saarland University </p></div><div><img${ssrRenderAttr("src", _imports_10)} alt="Mukhlisa Khudayberganova" class="mx-auto size-32 rounded-full"><p class="mt-2 font-semibold">Adizbek Ergashev</p><p class="text-sm text-gray-600"> PhD Student <br> Tashkent University of Information Technologies </p></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/team.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const team = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { team as default };
//# sourceMappingURL=team-DOsYd0RB.mjs.map
