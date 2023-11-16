describe('template spec', () => {
  it('Test Case 21: Add review on product', () => {
    cy.visit('https://www.automationexercise.com/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get('.title').should('be.visible');
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get('.active > a').should('be.visible');
    cy.get('#name').clear('nelli');
    cy.get('#name').type('nelli');
    cy.get('#email').clear('nelli3004@gmail.com');
    cy.get('#email').type('3004@gmail.com');
    cy.get('#review').click();
    cy.get('#button-review').click();
    /* ==== End Cypress Studio ==== */
  })
})