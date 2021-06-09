<!--
  Desenvolvido com 🧡 por Gabriel Barros.
-->

<template>
  <div id="app">
    <component :is="headerAtivo"></component>
    <component :is="paginaAtiva"></component>
    <component :is="$store.state.modal"></component>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import HeaderInicial from "@/components/HeaderInicial.vue";
import HeaderContatos from "@/components/HeaderContatos.vue";
import Inicio from "@/views/Inicio.vue";
import Contatos from "@/views/Contatos.vue";

export default {
  name: "App",
  components: {
    HeaderInicial,
    HeaderContatos,
    Inicio,
    Contatos,
  },
  computed: {
    ...mapGetters(["arrayContatos"]),
    // caso houver contatos na array contatos, o header é um, caso não, é outro.
    headerAtivo() {
      if (this.$store.state.contatos.length > 0) {
        return "HeaderContatos";
      } else {
        return "HeaderInicial";
      }
    },

    // mesma lógica do header.
    paginaAtiva() {
      if (this.$store.state.contatos.length > 0) {
        return "Contatos";
      } else {
        return "Inicio";
      }
    },
  },
  watch: {
    // fica de olho na array contatos. sempre que a mesma é alterada, armazena as alterações no localStorage.
    arrayContatos() {
      window.localStorage.arrayContatos = JSON.stringify(this.arrayContatos);
    },
  },
  created() {
    // puxa os dados do localStorage sempre que a instância é criada.
    if (window.localStorage.arrayContatos) {
      this.$store.state.contatos = JSON.parse(
        window.localStorage.arrayContatos
      );
      // 'desliga' o highlight caso o usuario atualize a pagina
      this.$store.state.contatos.forEach(
        (contato) => (contato.highlight = false)
      );
    }
  },
};
</script>

<style>
.btn {
  background: #dbff90;
  width: 144px;
  height: 40px;
  border: none;
  outline: none;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 16%);
  border-radius: 20px;
  font-family: Arial, sans-serif;
  font-size: 0.75rem;
  color: #fa7268;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
}

.btn-cancelar {
  background: none;
  border: none;
  font-size: 0.875rem;
  color: #fa7268;
  font-weight: 500;
  cursor: pointer;
  padding: 10px 15px;
  font-size: 0.75rem;
  font-family: Arial, sans-serif;
  font-weight: bold;
  width: 80px;
  outline: none;
  border-radius: 15px;
}

.btn-salvar,
.btn-excluir {
  border: none;
  font-size: 0.875rem;
  color: #f8f9fd;
  background: #fa7268;
  font-weight: 500;
  cursor: pointer;
  padding: 10px 15px;
  font-family: Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: bold;
  width: 80px;
  outline: none;
  border-radius: 15px;
}

.cross {
  font-size: 1.5rem;
  margin-right: 5px;
}
* {
  box-sizing: border-box;
}

body {
  background: #f8f9fd;
  font-family: Arial, sans-serif;
}

body,
h1,
h2,
button,
span,
p {
  padding: 0px;
  margin: 0px;
}
</style>
