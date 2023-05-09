/// <reference types="cypress" />

describe('Executando testes na tela de cadastro', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://alura-fotos.herokuapp.com/#/home')
  })

  it('Verifica mensagem validação dos campos', () => {
    cy.VerificaMensagemValidacao()

  })

  it('Verifica mensagem de e-mail inválido', () => {
    cy.MensagemEmailInvalido()

  })

  it('Verifica mensagem de senha com menos de 8 caracteres', () => {
    cy.VerificaMensagemSenha()

  })

  it('Cadastro de um novo usário', () => {
    cy.CadastroUsuario()

  })

  const usuarios = require('../fixtures/usuarios.json')
  usuarios.forEach((usuario) => {
    it(`Criando vários usuários ${usuario.userName}`, () => {
      // cy.CadastroVariosUsuario()
      cy.contains('a', 'Register now').click()
      cy.get('input[placeholder="email"]').type(usuario.email)
      cy.get('input[placeholder="full name"]').type(usuario.fullname)
      cy.get('input[placeholder="user name"]').type(usuario.userName)
      cy.get('input[placeholder="password"]').type(usuario.passowd)

      // cy.contains('button', 'Register').click()

    })

  })

})
