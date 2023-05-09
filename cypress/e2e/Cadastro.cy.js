/// <reference types="cypress" />

describe('Executando testes na tela de cadastro', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://alura-fotos.herokuapp.com/#/home')
  })

  it('Verifica mensagem validação dos campos', () => {
    cy.contains('a', 'Register now').click()
    cy.contains('button', 'Register').click()

    cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
    cy.contains('button', 'Register').click()

    cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
    cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
    cy.contains('ap-vmessage', 'Password is required!').should('be.visible')

    cy.get('ap-vmessage').should('have.length', 4)

  })

  it('Verifica mensagem de e-mail inválido', () => {
    cy.contains('a', 'Register now').click()

    cy.get('input[placeholder="email"]').type('jack.com')
    cy.contains('button', 'Register').click()
    cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')

  })

  it('Verifica mensagem de senha com menos de 8 caracteres', () => {
    cy.contains('a', 'Register now').click()

    cy.get('input[placeholder="password"]').type('jk123')
    cy.contains('button', 'Register').click()
    cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')

  })

  it('Cadastro de um novo usário', () => {
    cy.contains('a', 'Register now').click()

    cy.get('input[placeholder="email"]').type('jacks1@gmail.com')
    cy.get('input[placeholder="full name""]').type('jack gonca')
    cy.get('input[placeholder="user name""]').type('jack1234')
    cy.get('input[placeholder="password"]').type('12345678')

    // cy.contains('button', 'Register').click()

  })

  const usuarios = require('../fixtures/usuarios.json')
  usuarios.forEach((usuario) => {
    it.only(`Criando vários usuários ${usuario.userName}`, () => {

      cy.contains('a', 'Register now').click()

      cy.get('input[placeholder="email"]').type(usuario.email)
      cy.get('input[placeholder="full name"]').type(usuario.fullname)
      cy.get('input[placeholder="user name"]').type(usuario.userName)
      cy.get('input[placeholder="password"]').type(usuario.passowd)

      // cy.contains('button', 'Register').click()

    })

  })


})
