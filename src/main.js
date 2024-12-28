import Vue from "vue";
import App from "./app.vue";

import AOS from "aos";
import "aos/dist/aos.css";
import { BIconLockFill, BIconPersonFill, BootstrapVue } from "bootstrap-vue";
import VTooltip from "v-tooltip";
import VueParallaxJs from "vue-parallax-js";
import VueScrollTo from "vue-scrollto";
import "./assets/styles/main.scss";
import router from "./helpers/router";

var VueCookie = require("vue-cookie");

Vue.use(VTooltip);
Vue.use(VueScrollTo);
Vue.use(VueCookie);
Vue.use(VueParallaxJs);
Vue.use(BootstrapVue);
Vue.component("BIconPersonFill", BIconPersonFill);
Vue.component("BIconLockFill", BIconLockFill);

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
