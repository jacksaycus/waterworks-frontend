// module.exports = {
//   configureWebpack: {
//     resolve: {
//       alias: {
//         'vue$': 'vue/dist/vue.esm.js'
//       }
//     }
//   }
//   ,
//   lintOnSave: false
// }
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  // api 요청시 proxy 설정(Cross-Origin Resource Sharing 문제 해결)
  devServer: {
    // '/api_xai'로 요청시 target으로 넘기며 '/api_xai'를 '/', 그리고 Origin을 변경함
    proxy: {
      '/api_xai': {
        // target: 'http://220.123.184.52:8081',
        target: 'http://localhost:8081',
        changeOrigin: true,
        pathRewrite: {
          '^/api_xai': '/'
        }
      }
    }
  },
  /** 웹 팩 설정*/
  // terser 플러그인 설정(prod mode 인 경우 console.log 제외)
  /** 웹 팩 설정*/
  configureWebpack: {
    optimization: {
      minimize: true,
      minimizer: isProd ? [
        new TerserPlugin({
          terserOptions: {
            ecma: 6,
            compress: { drop_console: true },
            output: { comments: false, beautify: false }
          }
        })
      ] : []
    }
  },
}
