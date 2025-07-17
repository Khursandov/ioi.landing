import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useI18n } from './server.mjs';
import { u as useSeoMeta } from './index-_9eDr4hh.mjs';
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
import 'vue-router';
import 'vue-sonner';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    const images = [
      "/images/hero/1.png",
      "/images/hero/2.png",
      "/images/hero/3.png"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative mt-6 flex w-full items-center justify-center bg-white text-center text-white md:h-[400px]" }, _attrs))}><div class="absolute inset-0 flex"><!--[-->`);
      ssrRenderList(images, (image, index) => {
        _push(`<div class="h-full w-1/3 bg-cover bg-center" style="${ssrRenderStyle(`background-image: url(${image})`)}"></div>`);
      });
      _push(`<!--]--></div><div class="absolute inset-0 bg-[#0015FF69] bg-opacity-60"></div><h1 class="relative text-2xl font-bold md:text-5xl"> 19th Asia-Pacific Informatics Olympiad (APIO) <br> May 17-18, 2025, Uzbekistan </h1></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Home/Hero.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Flags",
  __ssrInlineRender: true,
  setup(__props) {
    const flags = [
      {
        name: "Armenia",
        image: "/images/flags/armenia.png"
      },
      {
        name: "Hong Kong SAR, China",
        image: "/images/flags/hong-kong.png"
      },
      {
        name: "Kazakhstan",
        image: "/images/flags/kazakhstan.png"
      },
      {
        name: "Australia",
        image: "/images/flags/Australia.png"
      },
      {
        name: "India",
        image: "/images/flags/India.png"
      },
      {
        name: "Korea",
        image: "/images/flags/Korea.png"
      },
      {
        name: "Azerbaijan",
        image: "/images/flags/Azerbaijan.png"
      },
      {
        name: "Indonesia",
        image: "/images/flags/Indonesia.png"
      },
      {
        name: "Kyrgzstan",
        image: "/images/flags/Kyrgzstan.png"
      },
      {
        name: "Bangladesh",
        image: "/images/flags/Bangladesh.png"
      },
      {
        name: "Iran",
        image: "/images/flags/Iran.png"
      },
      {
        name: "Macao SAR, China",
        image: "/images/flags/MacaoSAR,China.png"
      },
      {
        name: "China",
        image: "/images/flags/China.png"
      },
      {
        name: "Israel",
        image: "/images/flags/Israel.png"
      },
      {
        name: "Malaysia",
        image: "/images/flags/Malaysia.png"
      },
      {
        name: "Egypt",
        image: "/images/flags/Egypt.png"
      },
      {
        name: "Japan",
        image: "/images/flags/Japan.png"
      },
      {
        name: "Mongolia",
        image: "/images/flags/Mongolia.png"
      },
      {
        name: "Georgia",
        image: "/images/flags/Georgia.png"
      },
      {
        name: "Jordan",
        image: "/images/flags/Jordan.png"
      },
      {
        name: "New Zealand",
        image: "/images/flags/NewZealand.png"
      },
      {
        name: "Pakistan",
        image: "/images/flags/Pakistan.png"
      },
      {
        name: "Phillipines",
        image: "/images/flags/Phillipines.png"
      },
      {
        name: "Russia",
        image: "/images/flags/Russia.png"
      },
      {
        name: "Palestine",
        image: "/images/flags/Palestine.png"
      },
      {
        name: "Sri Lanka",
        image: "/images/flags/SriLanka.png"
      },
      {
        name: "Saudi Arabia",
        image: "/images/flags/SaudiArabia.png"
      },
      {
        name: "Singapore",
        image: "/images/flags/Singapore.png"
      },
      {
        name: "Tajikstan",
        image: "/images/flags/Tajikstan.png"
      },
      {
        name: "Syria",
        image: "/images/flags/Syria.png"
      },
      {
        name: "Turkmenistan",
        image: "/images/flags/Turkmenistan.png"
      },
      {
        name: "Turkiye",
        image: "/images/flags/Turkiye.png"
      },
      {
        name: "Vietnam",
        image: "/images/flags/Vietnam.png"
      },
      {
        name: "Uzbekistan",
        image: "/images/flags/Uzbekistan.png"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 px-6 py-10 text-center" }, _attrs))}><h2 class="text-4xl font-bold text-[#002C9B] md:text-3xl"> APIO COUNTRIES OR REGIONS </h2><div class="container mx-auto mt-10 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-4"><!--[-->`);
      ssrRenderList(flags, (i) => {
        _push(`<div class="flex items-center space-x-4"><img${ssrRenderAttr("src", i.image)}${ssrRenderAttr("alt", i.name)} class="size-16 rounded-full"><span class="text-xl text-[#2C2C2C]">${ssrInterpolate(i.name)}</span></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Home/Flags.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/images/hosts/mit.png");
const _imports_1 = publicAssetsURL("/images/hosts/dig-logo.png");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 px-6 py-10 text-center" }, _attrs))}><div class="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 md:grid-cols-2"><div class="mb-auto"><h3 class="text-4xl font-bold text-[#002C9B]">HOSTED BY</h3><img${ssrRenderAttr("src", _imports_0)} alt="Ministry of Digital Technologies" class="mx-auto mt-10 h-auto max-w-[20em]"></div><div class="mb-auto"><h3 class="text-4xl font-bold text-[#002C9B]">ORGANIZED BY</h3><img${ssrRenderAttr("src", _imports_1)} alt="Digital Education Development Center" class="mx-auto mt-10 h-auto max-w-[19em]"></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Home/Hosts.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: t("Apio2025"),
      ogTitle: t("meta.main.title"),
      twitterTitle: t("meta.main.title"),
      description: t("Apio2025"),
      ogDescription: t("meta.main.description"),
      twitterDescription: t("meta.main.description"),
      ogImage: "/image-files/big-content.png",
      ogImageUrl: "/image-files/big-content.png",
      twitterImage: "/image-files/big-content.png"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHomeHero = _sfc_main$3;
      const _component_SectionHomeFlags = _sfc_main$2;
      const _component_SectionHomeHosts = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionHomeHero, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionHomeFlags, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionHomeHosts, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-nTlTNQB4.mjs.map
