import CodeDemo from "E:/Github/driver/node_modules/.pnpm/vuepress-plugin-md-enhance@_9f82fdddc94056256919004e1ff635d0/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "E:/Github/driver/node_modules/.pnpm/vuepress-plugin-md-enhance@_9f82fdddc94056256919004e1ff635d0/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
