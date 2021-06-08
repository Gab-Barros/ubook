<template>
  <section class="modal-container">
    <div class="modal">
      <p>Criar novo contato</p>
      <form>
        <label for="nome">Nome</label>
        <input type="text" name="nome" id="nome" />
        <label for="email">E-mail</label>
        <input type="email" name="email" id="email" />
        <label for="telefone">Telefone</label>
        <input type="text" name="telefone" id="telefone" />
        <div class="btns">
          <button class="btn-cancelar" @click.prevent>Cancelar</button>
          <button class="btn-salvar" @click.prevent>Salvar</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "ModalCriar",
};
</script>

<style>
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

label,
input {
  display: block;
}

input {
  width: 100%;
  height: 30px;
  border: 1px solid #c0c3d2;
  border-radius: 4px;
  outline: none;
  padding: 10px;
}

label {
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 0.875rem;
}

#telefone {
  max-width: 180px;
}
</style>
