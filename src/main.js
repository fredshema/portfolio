import Vue from "vue";
import App from "./app.vue";

import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/styles/main.scss";
import VueParallaxJs from "vue-parallax-js";
import VueScrollTo from "vue-scrollto";
import VTooltip from "v-tooltip";
import { BootstrapVue, BIconPersonFill, BIconLockFill } from "bootstrap-vue";
import router from "./helpers/router";
import "./helpers/http";
import { domain, clientId } from "../auth_config.json";
import { Auth0Plugin } from "./helpers/auth0";

var VueCookie = require("vue-cookie");

Vue.use(VTooltip);
Vue.use(VueScrollTo);
Vue.use(VueCookie);
Vue.use(VueParallaxJs);
Vue.use(BootstrapVue);
Vue.component("BIconPersonFill", BIconPersonFill);
Vue.component("BIconLockFill", BIconLockFill);

Vue.config.productionTip = false;

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  },
});
new Vue({
  created() {
    AOS.init();
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
