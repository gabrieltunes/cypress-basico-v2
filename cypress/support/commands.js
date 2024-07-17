Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Gabriel')
    cy.get('#lastName').type('Antunes')
    cy.get('#email').type('gabriel@gmail.com')
    cy.get('#open-text-area').type('estou testando fazendo o exercicio comentario')
    cy.get('button[type="submit"]').click()
  })