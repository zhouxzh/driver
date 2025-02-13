import { hasGlobalComponent } from "E:/Github/driver/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.7_d2890f67ec4779ca8f9364961404c63a/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "E:/Github/driver/node_modules/.pnpm/@vueuse+core@12.5.0/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "E:/Github/driver/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0_9802b356bc69189eeb7447366bd15ca6/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
