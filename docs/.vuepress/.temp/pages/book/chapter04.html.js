import comp from "E:/Github/driver/docs/.vuepress/.temp/pages/book/chapter04.html.vue"
const data = JSON.parse("{\"path\":\"/book/chapter04.html\",\"title\":\"第4章 热原理\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"时间\",\"slug\":\"时间\",\"link\":\"#时间\",\"children\":[]}],\"git\":{\"updatedTime\":1739158039000,\"contributors\":[{\"name\":\"DarentTheYang\",\"username\":\"DarentTheYang\",\"email\":\"3339825@qq.com\",\"commits\":1,\"url\":\"https://github.com/DarentTheYang\"},{\"name\":\"Xianzhong Zhou\",\"username\":\"Xianzhong Zhou\",\"email\":\"zhouxzh@gdut.edu.cn\",\"commits\":4,\"url\":\"https://github.com/Xianzhong Zhou\"}]},\"filePathRelative\":\"book/chapter04.md\"}")
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
