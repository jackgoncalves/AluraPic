/// <reference types="cypress" />

describe('Executando testes na tela de Login', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home')
        cy.url().should('eq', 'https://alura-fotos.herokuapp.com/#/home')
    })

    it('Efetuando login com usuário válido', () => {
        cy.loginValido(Cypress.env('userName'), Cypress.env('password'))
    })

    it('Efetuando login com usuário inválido', () => {
        cy.loginInvalido('jack', '123')

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })

    })

})

