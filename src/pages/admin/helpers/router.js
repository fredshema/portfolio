"use strict";
import Vue from "vue";
import VueRouter from "vue-router";
import { authGuard } from "../../../helpers/routeGuard";

import app from "../app.vue";
import appView from "../pages/app-dashboard-view.vue";
import login from "../pages/login/login.vue";
import Blogs from "../pages/blogs/blogs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/admin",
    component: app,
    children: [
      {
        path: "",
        redirect: "/admin/login",
      },
      {
        path: "login",
        name: "login",
        component: login,
      },
      {
        path: "app",
        component: appView,
        children: [
          {
            path: "",
            redirect: { name: "blogs" },
          },
          {
            path: "blog",
            name: "blogs",
            component: Blogs,
          },
        ],
        beforeEnter: authGuard,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
