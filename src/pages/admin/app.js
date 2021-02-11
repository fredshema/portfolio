import Vue from "vue";
import App from "./app.vue";

import AOS from "aos";
import "aos/dist/aos.css";
import router from "./helpers/router";
import { BootstrapVue, BIconPersonFill, BIconLockFill } from "bootstrap-vue";
import "./styles/main.scss";
import { domain, clientId } from "../../../auth_config.json";
import { Auth0Plugin } from "../../helpers/auth0";
import "../../helpers/http";

Vue.use(BootstrapVue);
Vue.component("BIconPersonFill", BIconPersonFill);
Vue.component("BIconLockFill", BIconLockFill);

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

Vue.config.productionTip = false;

new Vue({
  created() {
    document.title = "Admin";
    AOS.init();
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
