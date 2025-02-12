import comp from "E:/Github/driver/docs/.vuepress/.temp/pages/book/chapter02.html.vue"
const data = JSON.parse("{\"path\":\"/book/chapter02.html\",\"title\":\"第2章 器件结构\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"第2章 器件结构\",\"author\":\"周贤中\",\"date\":\"2023-07-09\"},\"headers\":[{\"level\":2,\"title\":\"SiC SBD\",\"slug\":\"sic-sbd\",\"link\":\"#sic-sbd\",\"children\":[{\"level\":3,\"title\":\"器件结构\",\"slug\":\"器件结构\",\"link\":\"#器件结构\",\"children\":[]},{\"level\":3,\"title\":\"正向导通特性\",\"slug\":\"正向导通特性\",\"link\":\"#正向导通特性\",\"children\":[]},{\"level\":3,\"title\":\"反向导通特性\",\"slug\":\"反向导通特性\",\"link\":\"#反向导通特性\",\"children\":[]}]},{\"level\":2,\"title\":\"SiC MOSFET\",\"slug\":\"sic-mosfet\",\"link\":\"#sic-mosfet\",\"children\":[]}],\"git\":{\"updatedTime\":1739158039000,\"contributors\":[{\"name\":\"DarentTheYang\",\"username\":\"DarentTheYang\",\"email\":\"3339825@qq.com\",\"commits\":2,\"url\":\"https://github.com/DarentTheYang\"},{\"name\":\"Xianzhong Zhou\",\"username\":\"Xianzhong Zhou\",\"email\":\"zhouxzh@gdut.edu.cn\",\"commits\":5,\"url\":\"https://github.com/Xianzhong Zhou\"}]},\"filePathRelative\":\"book/chapter02.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
