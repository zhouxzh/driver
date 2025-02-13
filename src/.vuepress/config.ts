import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/driver/",

  lang: "zh-CN",
  title: "驱动电路",
  description: "SiC与GaN驱动电路",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
