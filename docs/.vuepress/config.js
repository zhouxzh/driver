module.exports = {
    title: '第一个网页的标题',
    description: '第一个网页的说明',
    theme:'reco',
    base:'/backend-blog/',
    locals:{
        '/':{
            lang:'zh-CN'
        }
    },
    themeConfig:{
        nav:[
            {text:'首页', link:'/'},
            {text:'作者链接',
                items:[
                    {text:'作者Github', link:'https://github.com/DarentTheYang'},
                    {text:'作者Gitee', link:'https://gitee.com/litchivon'}
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
                path:'/backend-note/chapter01',
                collaspable:false,
                children:[
                    {title:'第一章', path:'/backend-note/chapter01'},
                    {title:'第二章', path:'/backend-note/chapter02'}
                ]
            }
        ],
        subSidebar:'auto'
    }
}