import CodeDemo from "/home/zhong/Documents/driver/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.71_markdown-it@14.1.0_sass-embedded@1.83.4_vuepress_9f82fdddc94056256919004e1ff635d0/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/home/zhong/Documents/driver/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.71_markdown-it@14.1.0_sass-embedded@1.83.4_vuepress_9f82fdddc94056256919004e1ff635d0/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
