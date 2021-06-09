import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modal: null,
    contatos: [],
  },
  mutations: {
    ATIVAR_MODAL(state, payload) {
      state.modal = payload;
    },
    ADD_CONTATO(state, payload) {
      state.contatos.push(payload);
    },
  },
  actions: {
    salvarContato(context, payload) {
      context.commit("ADD_CONTATO", payload);
      context.commit("ATIVAR_MODAL", false);
    },
  },
  modules: {},
});
