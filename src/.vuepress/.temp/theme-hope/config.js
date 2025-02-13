import { Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "E:/Github/driver/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_bd9f7b8d99045ade4a23980a71586c9d/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "E:/Github/driver/node_modules/.pnpm/@vuepress+plugin-catalog@2._98d54206f4aa4bb32bb1f090c3e81eb1/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { GlobalEncrypt, LocalEncrypt } from "E:/Github/driver/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_bd9f7b8d99045ade4a23980a71586c9d/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "E:/Github/driver/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_bd9f7b8d99045ade4a23980a71586c9d/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "E:/Github/driver/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.7_d2890f67ec4779ca8f9364961404c63a/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "E:/Github/driver/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.7_d2890f67ec4779ca8f9364961404c63a/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "E:/Github/driver/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.7_d2890f67ec4779ca8f9364961404c63a/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "E:/Github/driver/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_bd9f7b8d99045ade4a23980a71586c9d/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

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

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
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
