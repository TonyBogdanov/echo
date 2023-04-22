module.exports = {
    base: '/echo/',

    title: 'Echo',
    description: 'Opinionated Vue framework & toolbox.',

    plugins: [
        'vuepress-plugin-tabs',
    ],

    themeConfig: {
        nav: [
            { link: '/introduction', text: 'Guide' },
            { link: 'https://www.npmjs.com/package/echo-ui', text: 'NPM' },
            { link: 'https://github.com/tonybogdanov/echo', text: 'GitHub' },
        ],
        sidebar: [
            { title: 'Introduction', path: '/introduction' },
            { title: 'Installation', path: '/installation' },
        ],
    },

    chainWebpack: ( config, isServer ) => {
        config.resolve.alias.set( 'vue', 'vue/dist/vue.common.js' )
    },
};
