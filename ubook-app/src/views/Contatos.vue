<template>
  <section class="contatos-container">
    <ul>
      <li v-for="(contato, index) in $store.state.contatos" :key="index">
        <span
          >{{ contato.nome }}
          {{ contato.email }}
          {{ contato.telefone }}
          <button @click="removerContato(index)">Remover</button></span
        >
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Contatos",
  methods: {
    removerContato(index) {
      this.$store.commit("REMOVER_CONTATO", index);
    },
  },
};
</script>

<style></style>
