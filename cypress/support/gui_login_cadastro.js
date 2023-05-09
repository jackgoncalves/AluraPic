

//  *********** COMANDOS PERSONALIZADOS DE LOGIN ***********

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


//  ********  COMANDO PERSONALIZADOS DE CADASTRO ***********

Cypress.Commands.add('VerificaMensagemValidacao', ()=>{

    cy.contains('a', 'Register now').click()
    cy.contains('button', 'Register').click()

    cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
    cy.contains('button', 'Register').click()

    cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
    cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
    cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
    cy.get('ap-vmessage').should('have.length', 4)
})

Cypress.Commands.add('MensagemEmailInvalido', ()=>{

    cy.contains('a', 'Register now').click()
    cy.get('input[placeholder="email"]').type('jack.com')
    cy.contains('button', 'Register').click()
    cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')
})

Cypress.Commands.add('VerificaMensagemSenha', ()=>{

    cy.contains('a', 'Register now').click()
    cy.get('input[placeholder="password"]').type('jk123')
    cy.contains('button', 'Register').click()
    cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')
})

Cypress.Commands.add('CadastroUsuario', ()=>{

    cy.contains('a', 'Register now').click()
    cy.get('input[placeholder="email"]').type('jacks1@gmail.com')
    cy.get('input[placeholder="full name"]').type('jack gonca')
    cy.get('input[placeholder="user name"]').type('jack1234')
    cy.get('input[placeholder="password"]').type('12345678')

    // cy.contains('button', 'Register').click()
})

// Cypress.Commands.add('CadastroVariosUsuario', ()=>{

//     cy.contains('a', 'Register now').click()
//     cy.get('input[placeholder="email"]').type(usuario.email)
//     cy.get('input[placeholder="full name"]').type(usuario.fullname)
//     cy.get('input[placeholder="user name"]').type(usuario.userName)
//     cy.get('input[placeholder="password"]').type(usuario.passowd)

//     // cy.contains('button', 'Register').click()
// })