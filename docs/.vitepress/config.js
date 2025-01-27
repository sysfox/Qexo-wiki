module.exports = {
    title: 'Qexo',
    base: '/qexo/',
    description: '一个快速、强大、漂亮的在线 多博客程序 管理器',
    head: [
        ['link', { rel: 'icon', href: '//unpkg.com/qexo-static@1.4.0/assets/img/brand/favicon.ico' }],
        ['script', {},`!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"JvwJATuEYs3V2Qun",ck:"JvwJATuEYs3V2Qun",autoTrack:true,hashMode:true});`]
    ],
    lastUpdated: true,
    markdown: {
        lineNumbers: true
    }, 
    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Qexo/Qexo' }
        ],
        sidebar: [
            {
                text: '上手',
                items: [
                    { text: '快速开始', link: '/start' },
                    { text: '部署程序', link: '/start/build' },
                    { text: '如何更新', link: '/start/update' },
                    { text: '常见问题', link: '/start/questions' },
                ]
            },
            {
                text: '配置',
                items: [
                    { text: '博客程序配置', link: '/configs/provider' },
                    { text: 'Vercel配置', link: '/configs/vercel' },
                    { text: '图床配置', link: '/configs/upload' },
                    { text: '统计配置', link: '/configs/statistic' },
                    { text: '推送配置', link: '/configs/onepush' }
                ]
            },
            {
                text: '拓展',
                items: [
                    { text: '接入友链', link: '/exts/flinks' },
                    { text: '接入说说', link: '/exts/talks' },
                    { text: '自定字段', link: '/exts/custom' },
                    { text: '访客统计', link: '/exts/statistic' }
                ]
            },
            {
                text: '实践',
                items: [
                    { text: 'SM.MS图床', link: '/practice/smms' },
                    { text: '使用短链接', link: '/practice/abbrlink'}
                ]
            },
            {
                text: '开发',
                items: [
                    { text: 'API文档', link: '/dev/api' },
                    { text: '鸣谢', link: '/dev/thanks' }
                ]
            }
        ],
        nav: [{text: '快速上手', link: '/start.html'}, {
            text: '对外API',
            link: '/dev/api'
        }, {text: 'Github', link: 'https://github.com/Qexo/Qexo', target: '_blank'}]
    }
}