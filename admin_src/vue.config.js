const CompressionPlugin = require('compression-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'

const assetsCDN = {
    externals: {
        'vue': 'Vue',
        'vuex': 'Vuex',
        'vue-router': 'VueRouter',
        'ant-design-vue': 'antd',
        'moment': 'moment',
        'lodash': '_',
        'axios': 'axios',
        'js-md5': 'md5',
        'nprogress': 'NProgress'
    },
    css: [
        'https://cdn.jsdelivr.net/npm/ant-design-vue@1.5.3/dist/antd.min.css',
        'https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.css'
    ],
    js: [
        'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
        'https://cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.min.js',
        'https://cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js',
        'https://cdn.jsdelivr.net/npm/moment@2.24.0/min/moment.min.js',
        'https://cdn.jsdelivr.net/npm/ant-design-vue@1.5.3/dist/antd.min.js',
        'https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js',
        'https://cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js',
        'https://cdn.jsdelivr.net/npm/js-md5@0.7.3/src/md5.min.js',
        'https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.min.js'
    ]
}

const webpackPlugins = []

if (isProd) {
    webpackPlugins.push(new CompressionPlugin({
        filename: '[path].gz[query]',
        test: /\.(js|css)$/,
        threshold: 10240,
        deleteOriginalAssets: false,
    }))
}

module.exports = {
    publicPath: '/admin/',
    assetsDir: 'static',
    outputDir: '../admin',
    lintOnSave: false,

    configureWebpack: {
        externals: isProd ? assetsCDN.externals : {},
        plugins: webpackPlugins
    },

    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'xuanyu CMS'
                args[0].cdn = {}
                args[0].cdn.css = assetsCDN.css
                if (isProd) args[0].cdn.js = assetsCDN.js
                return args
            })
    },

    css: {
        loaderOptions: {
            sass: {
                prependData: `@import '@/assets/style/vars.scss';`
            }
        }
    },

    devServer: {
        host: '0.0.0.0',
        port: 9999,
        watchOptions: {
            ignored: /node_modules|dist|.git|.idea/,
            poll: true
        }
    },
    productionSourceMap: false
}
