import { CodeTabs } from "/home/zhong/Documents/driver/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.74_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuep_9415854289ac3b2e28d209e0484e526f/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/home/zhong/Documents/driver/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.74_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuep_9415854289ac3b2e28d209e0484e526f/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/home/zhong/Documents/driver/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.74_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuep_9415854289ac3b2e28d209e0484e526f/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
