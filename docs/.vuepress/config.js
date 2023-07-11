module.exports = {
    title: '摸鱼科技工作室',
    description: '摸鱼科技工作室网站',
    theme:'reco',
    head:[
        [
            'link',{rel:'icon', href:'logo.png'}
        ]
    ],
    base:'/driver/',
    locales:{
        '/':{
            lang:'zh-CN'
        }
    },
    themeConfig:{
        logo: '/logo.png',
        nav:[
            {text:'首页', link:'/'},
            {text:'作者Github',
                items:[
                    {text:'zhouxzh', link:'https://github.com/zhouxzh'},
                    {text:'DarentTheYang', link:'https://github.com/DarentTheYang'},
                    {text:'DNFfafa', link:'https://github.com/DNFfafa'}
                ]
            }
        ],
        sidebar:[
            {
                title:' SiC MOSFET驱动电路及应用',
                // path:'/',
                collaspable:false,
                children:[
                    {title:'0 绪论', path:'/'},
                    {title:'1 宽禁带半导体', path:'/driver-note/chapter01.md'},
                    {title:'2 器件结构', path:'/driver-note/chapter02.md'},
                    {title:'3 电气特性', path:'/driver-note/chapter03.md'},
                    {title:'4 热原理', path:'/driver-note/chapter04.md'},
                    {title:'5 驱动电路', path:'/driver-note/chapter05.md'},
                    {title:'6 开关特性', path:'/driver-note/chapter06.md'},
                    {title:'7 并联与串联', path:'/driver-note/chapter07.md'},
                    {title:'8 基本电路', path:'/driver-note/chapter08.md'},
                    {title:'9 信号测试', path:'/driver-note/chapter09.md'},
                    {title:'10 逆变器设计', path:'/driver-note/chapter10.md'},
                    {title:'11 可靠性', path:'/driver-note/chapter11.md'},
                ],
            },
        ],
        subSidebar:'auto'
    },
    plugins: [
        [
          'vuepress-plugin-mathjax',
          {
            target: 'svg',
            macros: {
              '*': '\\times',
            },
          },
        ],
      ],
    
}