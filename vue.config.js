/*
 * @Author: nieloong@aliyun.com
 * @Date: 2020-05-14 17:42:35
 * @LastEditors: Loong Nie
 * @LastEditTime: 2020-05-15 11:05:28
 * @FilePath: \vuecli3loong\vue.config.js
 * @Descripttion:
 * @version:
 */
const path = require("path");
const resolve = function(dir) {
  return path.join(__dirname, dir);
};
module.exports = {
  // 基本路径 baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  // 输出文件目录
  outputDir: "dist",
  lintOnSave: true, // 是否开启eslint保存检测
  productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@a", resolve("src/assets"))
      .set("@v", resolve("src/views")); /* 别名配置 */
    config.optimization.runtimeChunk("single");
  },
  devServer: {
    open: false,
    host: "0.0.0.0",
    port: 8089,
    https: false,
    hotOnly: false,
    overlay: {
      warning: false,
      error: true
    },
    // proxy: {
    //   "/api": {
    //     target: "http://192.168.1.126:8080/",
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {
    //       "^/api": ""
    //     }
    //   }
    // },
    before: () => {}
  },
  // 第三方插件配置
  pluginOptions: {}
};
