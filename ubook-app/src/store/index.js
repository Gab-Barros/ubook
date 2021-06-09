import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modal: false,
    contatos: [],
    index: null,
  },
  mutations: {
    ATIVAR_MODAL(state, payload) {
      state.modal = payload;
    },
    ADD_CONTATO(state, payload) {
      state.contatos.push(payload);
    },
    SALVAR_INDEX(state, payload) {
      state.index = payload;
    },
    REMOVER_CONTATO(state) {
      state.contatos.splice(state.index, 1);
    },
  },
  actions: {
    salvarContato(context, payload) {
      context.commit("ADD_CONTATO", payload);
      context.commit("ATIVAR_MODAL", false);
    },
    confirmarExcluir(context, payload) {
      context.commit("ATIVAR_MODAL", "ModalExcluir");
      context.commit("SALVAR_INDEX", payload);
    },
    excluirContato(context) {
      context.commit("REMOVER_CONTATO");
      context.commit("ATIVAR_MODAL", false);
    },
    editarContato(context, payload) {
      context.commit("ATIVAR_MODAL", "ModalEditar");
      context.commit("SALVAR_INDEX", payload);
    },
    salvarEdicao(context, payload) {
      context.commit("REMOVER_CONTATO");
      context.commit("ADD_CONTATO", payload);
      context.commit("ATIVAR_MODAL", false);
    },
  },
  modules: {},
});
