<template>
  <div id="app">
    <HeaderInicial />
    <Inicio />
    <component :is="$store.state.modal"></component>
  </div>
</template>

<script>
import HeaderInicial from "@/components/HeaderInicial.vue";
import Inicio from "@/views/Inicio.vue";

export default {
  name: "App",
  components: {
    HeaderInicial,
    Inicio,
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

.btn-salvar {
  background: none;
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
