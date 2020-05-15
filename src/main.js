/*
 * @Author: nieloong@aliyun.com
 * @Date: 2020-05-14 15:21:13
 * @LastEditors: Loong Nie
 * @LastEditTime: 2020-05-15 22:15:52
 * @FilePath: \vuecli3loong\src\main.js
 * @Descripttion:
 * @version:
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@p/element.js";

import "element-ui/lib/theme-chalk/index.css";
import "@a/scss/index.scss"; // global css

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
