// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />

beforeEach(() => {
    cy.visit('./src/index.html')
  })

describe('Central de Atendimento ao Cliente TAT', function() {
    it('verifica o título da aplicação', function() {      
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it.only('preenche os campos obrigatórios e envia o formulário', function() {      
        cy.get('input[id="firstName"]').type('Gabriel')
        cy.get('input[id="lastName"]').type('Antunes')
        cy.get('input[id="email"]').type('gabriel@gmail.com')
        cy.get('textarea[id="open-text-area"]').type('estou testando fazendo o exercicio comenfjsuid fdhsauifhsua cfhsuhdfusa dhauidhfjdsjif fhsdhfusdhfusdfd'
            , {delay : 0})
        cy.contains('button', 'Enviar').click()
        cy.get('span[class="success"]').should('be.visible')

    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {      
        cy.get('input[id="firstName"]').type('Gabriel')
        cy.get('input[id="lastName"]').type('Antunes')
        cy.get('input[id="email"]').type('gabrielgmail.com')
        cy.get('textarea[id="open-text-area"]').type('estou testando fazendo o exercicio comenfjsuid fdhsauifhsua cfhsuhdfusa dhauidhfjdsjif fhsdhfusdhfusdfd'
            , {delay : 0})
        cy.contains('button', 'Enviar').click()
        cy.get('span[class="error"]').should('be.visible')

    })

    it('mantem o campo de telefone vazio ao digitar valor não númerico', function() {      
        cy.get('input[id="phone"]').type('ABC').should('have.value', '')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {      
        cy.get('input[id="firstName"]').type('Gabriel')
        cy.get('input[id="lastName"]').type('Antunes')
        cy.get('input[id="email"]').type('gabriel@gmail.com')
        cy.get('input[id="phone-checkbox"]').check();
        cy.get('textarea[id="open-text-area"]').type('estou testando fazendo o exercicio comenf'
            , {delay : 0})
        cy.contains('button', 'Enviar').click()
        cy.get('span[class="error"]').should('be.visible')

    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {      
        cy.get('input[id="firstName"]').type('Gabriel').should('have.value', 'Gabriel').clear().should('have.value', '')

        cy.get('input[id="lastName"]').type('Antunes').should('have.value', 'Antunes').clear().should('have.value', '')

        cy.get('input[id="email"]').type('gabriel@gmail.com').should('have.value', 'gabriel@gmail.com').clear().should('have.value', '')

        cy.get('input[id="phone"]').type('51911111').should('have.value', '51911111').clear().should('have.value', '')

    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {      
        cy.contains('button', 'Enviar').click()
        cy.get('span[class="error"]').should('be.visible')
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {      
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')

    })

    it('seleciona um produto (YouTube) por seu texto', function() {      
        cy.get('#product').select('YouTube').should('have.value', 'youtube')
    })

    it('seleciona um produto (Mentoria) por seu valor (value)', function() {      
        cy.get('#product').select('mentoria').should('have.value', 'mentoria')
    })

    it('seleciona um produto (Blog) por seu índice', function() {      
        cy.get('#product').select(1).should('have.value', 'blog')
    })

    it('marca o tipo de atendimento "Feedback"', function() {      
        cy.get('input[type="radio"][value="feedback"]').check().should('be.checked')
    })

    it('marca cada tipo de atendimento"', function() {      
        cy.get('input[type="radio"]').should('have.length', 3)
        .each(function($radio){
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
        })
        
    })

    it('marca ambos checkboxes, depois desmarca o último', function() {      
        cy.get('input[type="checkbox"]')
        .check()
        .should('be.checked')
        .last()
        .uncheck()
        .should('not.be.checked')
    })


    it('seleciona um arquivo da pasta fixtures', function() {      
        cy.get('input[type="file"]')
        .selectFile('cypress/fixtures/example.json')
        .should(function($input){
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })

    it('seleciona um arquivo simulando um drag-and-drop', function() {      
        cy.get('input[type="file"]')
        .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
        .should(function($input){
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })

    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function() { 
        cy.fixture('example.json').as('exampleFile')     
        cy.get('input[type="file"]')
        .selectFile('@exampleFile')
        .should(function($input){
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function() {      
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
    })

    it('acessa a página da política de privacidade removendo o target e então clicando no link', function() {      
        cy.get('#privacy a').invoke('removeAttr', 'target').click()
    })


  })

