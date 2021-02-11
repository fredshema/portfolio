import Vue from "vue";
import App from "./app.vue";

import AOS from "aos";
import "aos/dist/aos.css";
import VueParallaxJs from "vue-parallax-js";
import VueScrollTo from "vue-scrollto";
import VTooltip from "v-tooltip";
import VueRouter from "vue-router";

var VueCookie = require("vue-cookie");

Vue.use(VTooltip);
Vue.use(VueScrollTo);
Vue.use(VueRouter);
Vue.use(VueCookie);
Vue.use(VueParallaxJs);

const routes = [{ path: "/" }];

const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
