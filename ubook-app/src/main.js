import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import ModalCriar from "@/components/ModalCriar.vue";

Vue.config.productionTip = false;

Vue.component("ModalCriar", ModalCriar);

new Vue({
  store,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
