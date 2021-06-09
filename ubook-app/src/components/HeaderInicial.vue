<template>
  <header>
    <div>
      <img src="../assets/ubook-logo.svg" alt="logotipo ubook" />
    </div>
    <form>
      <input type="text" placeholder="Buscar contato..." />
      <input type="submit" id="lupa" value="Buscar Contato" @click.prevent />
    </form>
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
  padding: 20px;
  align-items: center;
}
header div {
  flex: 1;
}

header form {
  flex: 3;
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
  overflow: hidden;
  right: 15px;
  text-indent: -1000px;
  cursor: pointer;
}
</style>
