Cypress.Commands.add('loginValido', (nome,senha) =>{
    cy.get('input[placeholder="user name"]').type(nome)
    cy.get('input[placeholder="password"]').type(senha, {log: false})

    cy.contains('button', 'login').click()
    cy.contains('a', 'Logout').should('be.visible')
})

Cypress.Commands.add('loginInvalido', (nome,senha) =>{
    cy.get('input[placeholder="user name"]').type(nome)
    cy.get('input[placeholder="password"]').type(senha)

    cy.contains('button', 'login').click()
})