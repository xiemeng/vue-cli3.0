const vuxLoader = require('vux-loader')
module.exports = {
  // 选项...
  baseUrl:'./',    //部署应用时的基本 URL。
  outputDir:'dist',//更改打包后的文件名
	assetsDir:'static',//放置生成的静态资源 (js、css、img、fonts) 的目录。
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html'
    },
  },
  productionSourceMap:false,//去除 source map
//configureWebpack:Object | Function   //
	css: {
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      }
    }
  },
  lintOnSave: false,//是否开启eslint
  devServer: {   //开启一个代理服务
    proxy: {
      '/api': {
        target: '"http://192.168.0.205:5678"',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  },
  pluginOptions: {   //这是一个不进行任何 schema 验证的对象，因此它可以用来传递任何第三方插件选项
    foo: {
      // 插件可以作为 `options.pluginOptions.foo` 访问这些选项。
    }
  }
}