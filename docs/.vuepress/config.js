import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'VuePress',
  description: 'My first VuePress Site',

  base: '/driver/', // 替换为你的仓库名（如项目部署在 username.github.io 根目录则设为 '/')

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '教程',
        link: '/book/',
      }
    ],

        // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [
      // SidebarItem
      {
        text: '教程',
        prefix: '/book/',
        link: '/book/',
        children: [
          // SidebarItem
          // {
          //   text: 'github',
          //   link: 'https://github.com',
          //   children: [],
          // },
          // 字符串 - 页面文件路径
          // 'bar.md', // 解析为 `/foo/bar.md`
          // '/ray.md', // 解析为 `/ray.md`
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
        ],
      },
      // 字符串 - 页面文件路径
      // '/bar/README.md',
    ],

  }),

  bundler: viteBundler(),
})
