import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/portfolio",
  // "/book/",
  {
    text: "教材",
    icon: "lightbulb",
    prefix: "/book/",
    children: [
      'README.md',
      'chapter01.md',
      'chapter02.md',
      'chapter03.md',
      'chapter04.md',
      'chapter05.md',
      'chapter06.md',
      'chapter07.md',
      'chapter08.md',
      'chapter09.md',
      'chapter10.md',
      'chapter11.md',
      // {
      //   text: "Bar",
      //   icon: "lightbulb",
      //   prefix: "bar/",
      //   children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      // },
      // {
      //   text: "Foo",
      //   icon: "lightbulb",
      //   prefix: "foo/",
      //   children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      // },
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
