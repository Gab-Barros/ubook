const vm = new Vue({
  el: '#app',
  data: {
    contatoDados: { nome: '', email: '', tel: '' },
    busca: '',
    contatos: [],
    editarModal: false,
    modal: false,
    modalExcluir: false,
  },
  methods: {
    fecharModal(event) {
      if (event.target === event.currentTarget) {
        this.modalExcluir = false
        this.limparCampo()
      }
    },
    // fecha a modal ao clicar fora da modal

    limparCampo() {
      this.modal = false
      this.editarModal = false
      this.contatoDados.nome = ''
      this.contatoDados.email = ''
      this.contatoDados.tel = ''
    },
    // Limpa os campos dos formulários e fecha a modal

    cadastrar() {
      const nome = this.contatoDados.nome
      const email = this.contatoDados.email
      const tel = this.contatoDados.tel
      const bgColor = `hsl(${Math.floor(Math.random() * (360 - 0 + 1)) + 0}, 70%, 70%)`
      this.contatos.push({ nome, email, tel, bgColor })
      this.limparCampo()
      this.alterarCorLista()
    },
    // faz o cadastro executando um push na array contatos. gera uma cor aleatoria para o background do ícone.

    alterarCorLista() {
      setTimeout(() => {
        const lista = document.querySelectorAll('.listaContato')
        lista[lista.length - 1].classList.add('ativo')
      }, 50)
    },
    //adiciona uma classe ao último item da lista para o highlight de 10s

    remover(index) {
      this.modalExcluir = true;
      setTimeout(() => {
        const btn = document.getElementById('excluir')
        btn.addEventListener('click', () => {
          this.contatos.splice(index, 1)
          this.modalExcluir = false
        })
      }, 50)
    },
    // remove o item da lista baseado no index

    editar(index) {
      this.modal = true;
      this.editarModal = true;
      this.contatoDados.nome = this.contatos[index].nome
      this.contatoDados.email = this.contatos[index].email
      this.contatoDados.tel = this.contatos[index].tel
      setTimeout(() => {
        const btn = document.getElementById('salvarAlteracao')
        btn.addEventListener('click', () => {
          this.contatos[index].nome = this.contatoDados.nome
          this.contatos[index].email = this.contatoDados.email
          this.contatos[index].tel = this.contatoDados.tel
          window.localStorage.contatos = JSON.stringify(this.contatos)
          this.limparCampo()
          this.editarModal = false
        })
      }, 50)
    },
    // edita o item da lista baseado no index. altera o localStorage.

    buscar() {
      const index = this.contatos.findIndex((contato) => {
        if (contato.nome === this.busca) return true
      })
      if (index >= 0) this.editar(index)
      else window.alert('contato não existe')
    }
  },
  // executa a busca segundo os dados do input e abre a tela de edição de contatos

  watch: {
    contatos() {
      window.localStorage.contatos = JSON.stringify(this.contatos)
    }
  },
  // altera o localStorage quando a propriedade contatos for modificada

  computed: {
    habilitado() {
      if (this.contatoDados.nome.length || this.contatoDados.email.length || this.contatoDados.tel.length) return true
    },
    // verifica se os campos input do cadastro estão preenchidos para habilitar o botão

    agendaVazia() {
      if (!this.contatos.length) return true
    }
  },
  // verifica se a array contatos está vazia

  created() {
    if (window.localStorage.contatos) {
      this.contatos = JSON.parse(window.localStorage.contatos)
    }
  }
  // puxa os dados do localStorage quando a instancia vue é criada
})
