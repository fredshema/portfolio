"use strict";
import Vue from "vue";
import VueRouter from "vue-router";
import { authGuard } from "./routeGuard";

import { Login } from "../pages";
import adminRoutes from "../dashboards/admin/admin-routes";
import guestRoutes from "../dashboards/home/guestRoutes";

Vue.use(VueRouter);

const pagesRoutes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      guest: true,
    },
  },
];

const routes = [...pagesRoutes, ...guestRoutes, ...adminRoutes];

const router = new VueRouter({
  mode: "history",
  routes,
});
router.beforeEach((to, from, next) => {
  authGuard(to, from, next);
});

export default router;
