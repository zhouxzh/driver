import { Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "/home/zhong/Documents/driver/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.71_markdown-it@14.1.0_mathjax-full@3.2.2_sass-embedded@1.8_bd9f7b8d99045ade4a23980a71586c9d/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "/home/zhong/Documents/driver/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.74_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-_98d54206f4aa4bb32bb1f090c3e81eb1/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"

import "/home/zhong/Documents/driver/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.74_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19_@t_d2890f67ec4779ca8f9364961404c63a/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "/home/zhong/Documents/driver/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.74_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19_@t_d2890f67ec4779ca8f9364961404c63a/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "/home/zhong/Documents/driver/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.74_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19_@t_d2890f67ec4779ca8f9364961404c63a/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "/home/zhong/Documents/driver/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.71_markdown-it@14.1.0_mathjax-full@3.2.2_sass-embedded@1.8_bd9f7b8d99045ade4a23980a71586c9d/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);


  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
