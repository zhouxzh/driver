import comp from "E:/Github/driver/docs/.vuepress/.temp/pages/book/index.html.vue"
const data = JSON.parse("{\"path\":\"/book/\",\"title\":\"绪论\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"绪论\",\"author\":\"周贤中\",\"date\":\"2023-07-09\"},\"headers\":[{\"level\":2,\"title\":\"SiC MOSFET的发展历史\",\"slug\":\"sic-mosfet的发展历史\",\"link\":\"#sic-mosfet的发展历史\",\"children\":[]},{\"level\":2,\"title\":\"SiC MOSFET的特点\",\"slug\":\"sic-mosfet的特点\",\"link\":\"#sic-mosfet的特点\",\"children\":[]},{\"level\":2,\"title\":\"SiC MOSFET的应用场景\",\"slug\":\"sic-mosfet的应用场景\",\"link\":\"#sic-mosfet的应用场景\",\"children\":[]}],\"git\":{\"updatedTime\":1739158039000,\"contributors\":[{\"name\":\"DarentTheYang\",\"username\":\"DarentTheYang\",\"email\":\"3339825@qq.com\",\"commits\":2,\"url\":\"https://github.com/DarentTheYang\"},{\"name\":\"Xianzhong Zhou\",\"username\":\"Xianzhong Zhou\",\"email\":\"zhouxzh@gdut.edu.cn\",\"commits\":6,\"url\":\"https://github.com/Xianzhong Zhou\"}]},\"filePathRelative\":\"book/README.md\"}")
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
