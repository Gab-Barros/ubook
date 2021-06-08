<template>
  <div id="app">
    <HeaderInicial />
    <Inicio />
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
input,
button,
span,
p {
  padding: 0px;
  margin: 0px;
}
</style>
