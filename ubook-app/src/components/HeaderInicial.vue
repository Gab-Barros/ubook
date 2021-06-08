<template>
  <header>
    <div>
      <img src="../assets/ubook-logo.svg" alt="logotipo ubook" />
    </div>
    <input type="text" placeholder="busca" />
  </header>
</template>

<script>
export default {
  name: "HeaderInicial",
};
</script>

<style scoped>
header {
  display: flex;
  margin: 20px;
}
header div {
  flex: 1;
}

header input {
  flex: 3;
  background: #e4e7f4;
}
</style>
