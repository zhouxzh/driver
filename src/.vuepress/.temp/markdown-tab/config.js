import { CodeTabs } from "E:/Github/driver/node_modules/.pnpm/@vuepress+plugin-markdown-t_9415854289ac3b2e28d209e0484e526f/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "E:/Github/driver/node_modules/.pnpm/@vuepress+plugin-markdown-t_9415854289ac3b2e28d209e0484e526f/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "E:/Github/driver/node_modules/.pnpm/@vuepress+plugin-markdown-t_9415854289ac3b2e28d209e0484e526f/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
