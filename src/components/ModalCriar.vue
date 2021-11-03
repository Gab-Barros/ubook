<template>
  <section
    class="modal-container"
    @mousedown="cliqueFora"
    @keydown.enter="salvarContato"
  >
    <!--adiciona a classe active para o fade apenas se a modal existir-->
    <div class="modal" :class="{ active: $store.state.modal }">
      <p>Criar novo contato</p>
      <form>
        <label for="nome">Nome</label>
        <input type="text" name="nome" id="nome" v-model="contato.nome" />
        <label for="email">E-mail</label>
        <input type="email" name="email" id="email" v-model="contato.email" />
        <label for="telefone">Telefone</label>
        <input
          type="text"
          name="telefone"
          id="telefone"
          v-model="contato.telefone"
        />
        <div class="btns">
          <button class="btn-cancelar" @click.prevent="fecharModal">
            Cancelar
          </button>

          <!--Botão de salvar contato é habilitado apenas se o usuario preencher o nome E (email OU telefone)-->
          <button
            v-if="contato.nome && (contato.email || contato.telefone)"
            class="btn-salvar"
            @click.prevent="salvarContato"
          >
            Salvar
          </button>
          <button
            v-else
            class="btn-salvar btn-salvar-disabled"
            @click.prevent="salvarContato"
            disabled
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ModalCriar",
  data() {
    return {
      contato: {
        // o objeto contato vai com a prop highlight como true para dar o background inicial quando o contato é criado.
        // gera uma cor aletoria para o background do icone e atribui a prop bgColor
        highlight: true,
        bgColor: `hsl(${Math.floor(Math.random() * (360 - 0 + 1)) +
          0}, 70%, 70%)`,
      },
    };
  },
  computed: {
    ...mapState(["contatos"]),
  },
  methods: {
    fecharModal() {
      this.$store.commit("ATIVAR_MODAL", false);
    },
    cliqueFora(e) {
      // verifica se o usuario clicou fora da modal e fecha em caso de afirmativo.
      e.target === e.currentTarget ? this.fecharModal() : undefined;
    },
    salvarContato() {
      this.$store.dispatch("salvarContato", this.contato);
      // depois de adicionar o contato, remove a classe highlight depois de 5 segundos.
      this.contatos.forEach((contato) => {
        setTimeout(() => {
          contato.highlight = false;
        }, 5000);
      });
      //organiza automaticamente a array em ordem alfabética. toUpperCase() para comparar case-insensitive.
      this.contatos.sort((a, b) =>
        a.nome.toUpperCase() > b.nome.toUpperCase()
          ? 1
          : b.nome.toUpperCase() > a.nome.toUpperCase()
          ? -1
          : 0
      );
    },
  },
};
</script>

<style scoped>
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

.btn-salvar.btn-salvar-disabled {
  opacity: 0.32;
}

.modal {
  background: #f8f9fd;
  width: 400px;
  color: #2a2d3b;
  padding: 10px 20px;
  position: relative;
  border-radius: 8px;
}

.modal.active {
  animation: fade 0.3s ease;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
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
