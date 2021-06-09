import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import ModalCriar from "@/components/ModalCriar.vue";
import ModalExcluir from "@/components/ModalExcluir.vue";
import ModalEditar from "@/components/ModalEditar.vue";

Vue.config.productionTip = false;

Vue.component("ModalCriar", ModalCriar);
Vue.component("ModalExcluir", ModalExcluir);
Vue.component("ModalEditar", ModalEditar);

new Vue({
  store,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
