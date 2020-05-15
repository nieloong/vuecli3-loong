/*
 * @Author: nieloong@aliyun.com
 * @Date: 2020-05-14 15:21:13
 * @LastEditors: Loong Nie
 * @LastEditTime: 2020-05-15 10:50:43
 * @FilePath: \vuecli3loong\src\router\index.js
 * @Descripttion:
 * @version:
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    // redirect: '/database',
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
