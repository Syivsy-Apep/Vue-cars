// vue.config.js
const path =  require('path');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin; // 打包分析
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/site/vue-demo/' : '/',  // 公共路径
    indexPath: 'index.html' , // 相对于打包路径index.html的路径
    outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
    assetsDir: 'static', // 相对于outputDir的静态资源(js、css、img、fonts)目录
    lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
    runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
    productionSourceMap: !IS_PROD, // 生产环境的 source map
    parallel: require("os").cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
    pwa: {}, // 向 PWA 插件传递选项。
    chainWebpack: config => {
    //   const svgRule = config.module.rule('svg');
    //   svgRule.uses.clear();
    //   svgRule
    //   .use("svg-sprite-loader")
    //   .loader("svg-sprite-loader")
    //   .options({
    //       symboId:"icon-[name]",
    //       include:['./src/icons']
    //   })
        config.resolve.alias // 添加别名
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'))
            .set('@views', resolve('src/views'))
            // .set('@store', resolve('src/store'));
        // 打包分析, 打包之后自动生成一个名叫report.html文件(可忽视)
        if (IS_PROD) {
            config.plugin("webpack-report").use(BundleAnalyzerPlugin, [
                {
                    analyzerMode: "static"
                }
            ]);
        }
    },
    css: {
        extract: IS_PROD,
        // requireModuleExtension: false,// 去掉文件名中的 .module
        loaderOptions: {
            scss:{
                prependData:`@import "@/styles/main.scss";`
            }
        }
    },
    devServer: {
            // overlay: { // 让浏览器 overlay 同时显示警告和错误
            //   warnings: true,
            //   errors: true
            // },
            // host: "0.0.0.0",
            // port: 8080, // 端口号
            // https: false, // https:{type:Boolean}
            // open: true, //配置自动启动浏览器
            // hotOnly: true, // 热更新
            // proxy: {
            //     '/devApi': {
            //         target: "http://www.web-jshtml.cn/productapi/token", //API服务器的地址  http://www.web-jshtml.cn/api
            //         changeOrigin: true,
            //         pathRewrite: {
            //             '^/devApi': ''
            //         }
            //     }
            // },
        }
}
