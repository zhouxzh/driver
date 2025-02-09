import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "书籍章节",
      icon: "book",
      prefix: "/book/",
      collapsible: true,
      children: [
        "chapter01.md",
        "chapter02.md",
        "chapter03.md",
        "chapter04.md",
        "chapter05.md", 
        "chapter06.md",
        "chapter07.md",
        "chapter08.md",
        "chapter09.md",
        "chapter10.md",
        "chapter11.md"
      ]
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],
});
