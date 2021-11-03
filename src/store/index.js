import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modal: false, // estado que indica qual modal estará aberta
    contatos: [], // array de contatos
    index: null, // armazena o index do contato quando o usuario clica nos icones editar ou excluir, para que seja excluido ou editado o contato correto.
  },
  mutations: {
    ATIVAR_MODAL(state, payload) {
      // aqui o payload vai ser o nome do componente (ModalExcluir, ModalEditar ou ModalCriar)
      state.modal = payload;
    },
    ADD_CONTATO(state, payload) {
      // aqui o payload vai ser os dados do contato, junto com o bgColor e highlight true.
      state.contatos.push(payload);
    },
    SALVAR_INDEX(state, payload) {
      // sempre que o usuario clica nos icones editar ou excluir, o index é armazenado para que caso
      state.index = payload; // o usuario confirme a exclusão ou edição, seja editado ou excluido o contato certo.
    },
    REMOVER_CONTATO(state) {
      state.contatos.splice(state.index, 1);
    },
  },
  actions: {
    salvarContato(context, payload) {
      context.commit("ADD_CONTATO", payload); // adiciona o contato
      context.commit("ATIVAR_MODAL", false); // fecha a modal
    },
    confirmarExcluir(context, payload) {
      context.commit("ATIVAR_MODAL", "ModalExcluir"); // habilita a modal excluir
      context.commit("SALVAR_INDEX", payload); // armazena o index
    },
    excluirContato(context) {
      context.commit("REMOVER_CONTATO"); // remove o contato
      context.commit("ATIVAR_MODAL", false); // fecha a modal
    },
    editarContato(context, payload) {
      context.commit("ATIVAR_MODAL", "ModalEditar"); // ativa a modal de edição
      context.commit("SALVAR_INDEX", payload); // armazena o index
    },
    salvarEdicao(context, payload) {
      context.commit("REMOVER_CONTATO"); // remove o contato
      context.commit("ADD_CONTATO", payload); // adiciona o contato
      context.commit("ATIVAR_MODAL", false); // fecha a modal
    },
  },
  getters: {
    arrayContatos: (state) => state.contatos,
    // existe uma watch propertie no App.vue em cima desse getter (arrayContatos)
  }, // para que as alterações sejam salvas no localStorage.
  modules: {},
});
