import comp from "E:/Github/driver/docs/.vuepress/.temp/pages/book/chapter06.html.vue"
const data = JSON.parse("{\"path\":\"/book/chapter06.html\",\"title\":\"开关特性\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"时间\",\"slug\":\"时间\",\"link\":\"#时间\",\"children\":[]}],\"git\":{\"updatedTime\":1739158039000,\"contributors\":[{\"name\":\"Xianzhong Zhou\",\"username\":\"Xianzhong Zhou\",\"email\":\"zhouxzh@gdut.edu.cn\",\"commits\":4,\"url\":\"https://github.com/Xianzhong Zhou\"}]},\"filePathRelative\":\"book/chapter06.md\"}")
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
