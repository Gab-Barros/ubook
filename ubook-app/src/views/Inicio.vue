<template>
  <main>
    <div class="painel-inicial">
      <div>
        <img src="../assets/addcontato.svg" alt="logo inicial add contato" />
      </div>
      <div>
        <p>Nenhum contato foi adicionado ainda</p>
        <button class="btn"><span class="cross">+</span>criar contato</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Inicio",
};
</script>

<style scoped>
main {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.painel-inicial {
  padding: 100px 0px;
}

.painel-inicial div:first-child {
  text-align: center;
}

.btn {
  margin: 15px auto;
}

.painel-inicial p {
  color: #2a2d3b;
  font-size: 1rem;
  margin-top: 20px;
}
</style>
