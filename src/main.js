import Vue from "vue";
import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'

import App from "./App.vue";
import router from "./router/routes";
import BlackDashboard from "./plugins/blackDashboard";

Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
