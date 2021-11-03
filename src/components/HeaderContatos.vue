<template>
  <header>
    <div>
      <img src="../assets/ubook-logo.svg" alt="logotipo ubook" />
    </div>
    <div>
      <button class="btn" @click="ativarModal">criar contato</button>
    </div>
    <form>
      <input
        type="text"
        placeholder="Buscar contato..."
        v-model="busca"
        @keydown.enter="buscar"
      />
      <input
        type="submit"
        id="lupa"
        value="Buscar Contato"
        @click.prevent="buscar"
      />
    </form>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HeaderContato",
  data() {
    return {
      busca: "",
    };
  },
  computed: {
    ...mapState(["contatos"]),
  },
  methods: {
    ativarModal() {
      this.$store.commit("ATIVAR_MODAL", "ModalCriar");
    },
    buscar() {
      // Faz a busca do nome e retorna o index. Busca case-insensitive devido ao .toUpperCase()
      const index = this.contatos.findIndex((contato) => {
        if (contato.nome.toUpperCase() === this.busca.toUpperCase()) {
          return true;
        } else {
          return false;
        }
      });

      // Se achar o index (ou seja, index maior ou igual a zero), abre a tela de edição de contato.
      // caso contrário, dá um alerta de contato não encontrado.
      index >= 0
        ? this.$store.dispatch("editarContato", index)
        : window.alert("Contato não encontrado");
    },
  },
};
</script>

<style scoped>
.btn {
  height: 32px;
}

header {
  display: flex;
  padding: 20px;
  align-items: center;
}
header div:nth-of-type(1) {
  flex: 1;
}

header div:nth-of-type(2) {
  flex: 1;
}

header form {
  flex: 4;
  position: relative;
  display: flex;
}

header input {
  background: #e4e7f4;
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 1rem;
  flex: 1;
}

#lupa {
  width: 10px;
  height: 10px;
  background-image: url("../assets/icone-logo.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: absolute;
  top: 8px;
  right: 15px;
  text-indent: -1000px;
  overflow: hidden;
  cursor: pointer;
}
</style>
