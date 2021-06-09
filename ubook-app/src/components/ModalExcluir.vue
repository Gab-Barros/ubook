<template>
  <section class="modal-container" @mousedown="cliqueFora">
    <div class="modal" :class="{ active: $store.state.modal }">
      <p>Excluir contato</p>
      <span>Deseja realmente excluir o contato?</span>
      <div class="btns">
        <button class="btn-cancelar" @click.prevent="fecharModal">
          Cancelar
        </button>
        <button class="btn-excluir" @click.prevent="excluirContato">
          Excluir
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ModalExcluir",
  methods: {
    fecharModal() {
      this.$store.commit("ATIVAR_MODAL", false);
    },
    cliqueFora(e) {
      e.target === e.currentTarget ? this.fecharModal() : undefined;
    },
    excluirContato() {
      this.$store.dispatch("excluirContato");
    },
  },
};
</script>

<style scoped>
.modal-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.btns {
  display: flex;
  justify-content: flex-end;
  padding: 35px 0px 10px 0px;
  gap: 10px;
}

.btns:before {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: #c0c3d2;
  position: absolute;
  left: 0;
  bottom: 60px;
  margin: 10px 0;
}

.modal {
  background: #f8f9fd;
  width: 400px;
  color: #2a2d3b;
  padding: 10px 20px;
  position: relative;
  border-radius: 8px;
}

.modal.active {
  animation: fade 0.5s forwards;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.modal p {
  padding: 10px 0px;
}

.modal p:after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: #c0c3d2;
  position: absolute;
  left: 0;
  margin: 10px 0;
}

span {
  display: block;
  padding: 30px 0px 50px 0px;
}
</style>
