/// <reference types="cypress" />

describe('Buscando informações das fotos através da API', ()=>{
    it('Buscar informações do usuário', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos?page=1'
        }).then((resposta)=>{
            console.log(resposta)
            expect(resposta.status).to.equal(200)
            expect(resposta.statusText).to.equal("OK")
            expect(resposta.body).is.not.empty
            expect(resposta.body[0]).to.have.property('description')
            expect(resposta.body[0].description).to.equal('Farol iluminado')
            expect(resposta.body[0].description).to.include('Farol iluminado')
        })
    })

    it('Efetuar Login do usuário', ()=>{
        cy.request({
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',
            body: Cypress.env()
        }).then((resposta)=>{
            console.log(resposta)
            expect(resposta.status).to.equal(200)
            expect(resposta.body).is.not.empty
            expect(resposta.body).to.have.property('id')
            expect(resposta.body.id).to.equal(1)
            expect(resposta.body).to.have.property('email')
            expect(resposta.body.email).to.equal('flavio@alurapic.com.br')
            
        })
    })
})