export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/zhong/Documents/driver/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"项目主页","i":"house"} }],
  ["/portfolio.html", { loader: () => import(/* webpackChunkName: "portfolio.html" */"/home/zhong/Documents/driver/src/.vuepress/.temp/pages/portfolio.html.js"), meta: {"t":"档案主页","i":"house"} }],
  ["/book/", { loader: () => import(/* webpackChunkName: "book_index.html" */"/home/zhong/Documents/driver/src/.vuepress/.temp/pages/book/index.html.js"), meta: {"t":"绪论"} }],
  ["/book/chapter01.html", { loader: () => import(/* webpackChunkName: "book_chapter01.html" */"/home/zhong/Documents/driver/src/.vuepress/.temp/pages/book/chapter01.html.js"), meta: {"t":"第1章 宽禁带半导体"} }],
  ["/book/chapter02.html", { loader: () => import(/* webpackChunkName: "book_chapter02.html" */"/home/zhong/Documents/driver/src/.vuepress/.temp/pages/book/chapter02.html.js"), meta: {"t":"第2章 器件结构"} }],
  ["/book/chapter03.html", { loader: () => import(/* webpackChunkName: "book_chapter03.html" */"/home/zhong/Documents/driver/src/.vuepress/.temp/pages/book/chapter03.html.js"), meta: {"t":"第3章 电气特性"} }],
  ["/book/chapter04.html", { loader: () => import(/* webpackChunkName: "book_chapter04.html" */"/home/zhong/Documents/driver/src/.vuepress/.temp/pages/book/chapter04.html.js"), meta: {"t":"第4章 热原理"} }],
  ["/book/chapter05.html", { loader: () => import(/* webpackChunkName: "book_chapter05.html" */"/home/zhong/Documents/driver/src/.vuepress/.temp/pages/book/chapter05.html.js"), meta: {"t":"第5章 驱动电路"} }],
  ["/book/chapter06.html", { loader: () => import(/* webpackChunkName: "book_chapter06.html" */"/home/zhong/Documents/driver/src/.vuepress/.temp/pages/book/chapter06.html.js"), meta: {"t":"第6章 开关特性"} }],
  ["/book/chapter07.html", { loader: () => import(/* webpackChunkName: "book_chapter07.html" */"/home/zhong/Documents/driver/src/.vuepress/.temp/pages/book/chapter07.html.js"), meta: {"t":"第7章 并联与串联"} }],
  ["/book/chapter08.html", { loader: () => import(/* webpackChunkName: "book_chapter08.html" */"/home/zhong/Documents/driver/src/.vuepress/.temp/pages/book/chapter08.html.js"), meta: {"t":"第8章 基本电路"} }],
  ["/book/chapter09.html", { loader: () => import(/* webpackChunkName: "book_chapter09.html" */"/home/zhong/Documents/driver/src/.vuepress/.temp/pages/book/chapter09.html.js"), meta: {"t":"第9章 信号测试"} }],
  ["/book/chapter10.html", { loader: () => import(/* webpackChunkName: "book_chapter10.html" */"/home/zhong/Documents/driver/src/.vuepress/.temp/pages/book/chapter10.html.js"), meta: {"t":"第10章 逆变器设计"} }],
  ["/book/chapter11.html", { loader: () => import(/* webpackChunkName: "book_chapter11.html" */"/home/zhong/Documents/driver/src/.vuepress/.temp/pages/book/chapter11.html.js"), meta: {"t":"第11章 可靠性"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/zhong/Documents/driver/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
]);
