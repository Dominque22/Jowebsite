import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


Vue.config.productionTip = false;


var vm = new Vue({
  router,
  store,
  render: h => h(APP)
}).$mount("#app");


//this.$store.getters.test;
//this.$store.commit("setTest", "test");