describe('Test Skenario', () => {
  it('Test Case 4 Logout', () => {
    cy.visit('https://www.automationexercise.com/');

    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').clear('nelsayg@gmail.com');
    cy.get('[data-qa="login-email"]').type('nelsayg@gmail.com');
    cy.get('[data-qa="login-password"]').clear('nelli');
    cy.get('[data-qa="login-password"]').type('nelsa');
    cy.get('[data-qa="login-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    /* ==== End Cypress Studio ==== */

  })
})