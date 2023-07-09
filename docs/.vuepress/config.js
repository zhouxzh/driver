module.exports = {
    title: '第一个网页的标题',
    description: '第一个网页的说明',
    theme:'reco',
    base:'/driver/',
    locales:{
        '/':{
            lang:'zh-CN'
        }
    },
    themeConfig:{
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
                title:'学习中心',
                path:'/',
                collaspable:false,
                children:[
                    {title:'学前必读', path:'/'}
                ]
            },
            {
                title:'基础学习',
                path:'/driver-note/chapter01',
                collaspable:false,
                children:[
                    {title:'第一章', path:'/driver-note/chapter01'},
                    {title:'第二章', path:'/driver-note/chapter02'},
                    {title:'第三章', path:'/driver-note/chapter03'}
                ]
            }
        ],
        subSidebar:'auto'
    }
}