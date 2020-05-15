/*
 * @Author: nieloong@aliyun.com
 * @Date: 2020-05-14 15:21:13
 * @LastEditors: Loong Nie
 * @LastEditTime: 2020-05-15 22:25:11
 * @FilePath: \vuecli3loong\babel.config.js
 * @Descripttion:
 * @version:
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk"
      }
    ]
  ]
};
