"use strict";
import Vue from "vue";
import VueRouter from "vue-router";
import guestRoutes from "../dashboards/home/guestRoutes";

Vue.use(VueRouter);

const routes = [...guestRoutes];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
