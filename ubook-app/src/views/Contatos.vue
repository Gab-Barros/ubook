<template>
  <section class="contatos-container">
    <table>
      <tr class="headers">
        <th>Contatos</th>
        <th>E-mail</th>
        <th>Telefone</th>
      </tr>
      <tr
        v-for="(contato, index) in $store.state.contatos"
        :key="index"
        class="contato"
        :class="{ vermelho: contato.highlight }"
      >
        <td>
          <span :style="{ background: contato.bgColor }" class="icone-nome">{{
            contato.nome.charAt(0).toUpperCase()
          }}</span
          >{{ contato.nome }}
        </td>
        <td>{{ contato.email }}</td>
        <td class="telefone">
          {{ contato.telefone }}
          <div class="configs">
            <span class="editar" @click="editarContato(index)">editar</span>
            <span class="remover" @click="excluirContato(index)">remover</span>
          </div>
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  name: "Contatos",
  methods: {
    excluirContato(index) {
      this.$store.dispatch("confirmarExcluir", index);
    },
    editarContato(index) {
      this.$store.dispatch("editarContato", index);
    },
  },
};
</script>

<style scoped>
.contatos-container {
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

.headers {
  border: 1px solid #c0c3d2;
}

th {
  text-align: left;
  padding: 10px 30px;
  font-size: 0.875rem;
  font-weight: normal;
  color: #9198af;
}

td {
  padding: 10px 30px;
}

.contato {
  border: 1px solid #c0c3d2;
  transition: background 0.3s;
}

.contato:hover {
  background: #8ec1e6;
}

.telefone {
  position: relative;
}

.configs {
  display: flex;
  position: absolute;
  gap: 20px;
  right: 10px;
  top: 10px;
}

.editar {
  width: 20px;
  height: 20px;
  background-image: url("../assets/editar.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  text-indent: -1000px;
  overflow: hidden;
  cursor: pointer;
}

.remover {
  width: 20px;
  height: 20px;
  background-image: url("../assets/deletar.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  text-indent: -1000px;
  overflow: hidden;
  cursor: pointer;
  padding: 10px;
}

.vermelho {
  background: #8ec1e6;
}

.icone-nome {
  display: inline-block;
  border-radius: 50%;
  margin-right: 10px;
  position: relative;
  text-align: center;
  width: 25px;
  height: 25px;
  padding: 4px;
}
</style>
