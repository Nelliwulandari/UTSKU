describe('template spec', () => {
  it('Test Case 14: Place Order: Register while Checkout', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force: true});
    cy.get('u').click();
    cy.get('#cart_items > :nth-child(1)').should('be.visible');
    cy.get('.col-sm-6 > .btn').click();
    cy.get('.modal-body > :nth-child(2) > a > u').click();
    cy.get('[data-qa="signup-name"]').clear('nelli');
    cy.get('[data-qa="signup-name"]').type('nel');
    cy.get('[data-qa="signup-email"]').clear();
    cy.get('[data-qa="signup-email"]').type('nelsa@gmail.com');
    cy.get('[data-qa="signup-email"]').clear('nelli3004@gmail.com');
    cy.get('[data-qa="signup-email"]').type('nelli3004@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').clear('nelli');
    cy.get('[data-qa="password"]').type('nelli');
    cy.get('[data-qa="days"]').select('30');
    cy.get('[data-qa="months"]').select('4');
    cy.get('[data-qa="years"]').select('2002');
    cy.get('form > :nth-child(7)').click();
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').clear('Nelli');
    cy.get('[data-qa="first_name"]').type('Nelli W');
    cy.get('[data-qa="last_name"]').clear();
    cy.get('[data-qa="last_name"]').type('Wulandari');
    cy.get('[data-qa="company"]').clear('Indonesia');
    cy.get('[data-qa="company"]').type('Indonesia');
    cy.get('[data-qa="address"]').clear('Probolinggo');
    cy.get('[data-qa="address"]').type('Probolinggo');
    cy.get('[data-qa="country"]').select('Singapore');
    cy.get('[data-qa="state"]').clear('indo');
    cy.get('[data-qa="state"]').type('indo');
    cy.get('[data-qa="city"]').clear('Probolinggo');
    cy.get('[data-qa="city"]').type('Probolinggo');
    cy.get('[data-qa="zipcode"]').clear('142311');
    cy.get('[data-qa="zipcode"]').type('142311');
    cy.get('[data-qa="mobile_number"]').clear('0');
    cy.get('[data-qa="mobile_number"]').type('082153684613');
    cy.get('[data-qa="address2"]').clear('Probolinggo');
    cy.get('[data-qa="address2"]').type('Probolinggo');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get(':nth-child(10) > a').should('have.text', ' Logged in as nel');
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get('#address_delivery').should('be.visible');
    cy.get(':nth-child(4) > .heading').should('have.text', 'Review Your Order');
    cy.get('.form-control').click();
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').clear('nelli');
    cy.get('[data-qa="name-on-card"]').type('nelli w');
    cy.get('[data-qa="card-number"]').clear('16');
    cy.get('[data-qa="card-number"]').type('12345678');
    cy.get('[data-qa="cvc"]').clear('6');
    cy.get('[data-qa="cvc"]').type('619');
    cy.get('[data-qa="expiry-month"]').clear('0');
    cy.get('[data-qa="expiry-month"]').type('04');
    cy.get('[data-qa="expiry-year"]').clear();
    cy.get('[data-qa="expiry-year"]').type('2002');
    cy.get('[data-qa="pay-button"]').click();
    cy.get(':nth-child(5) > a').click();
    cy.get('b').should('have.text', 'Account Deleted!');
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
})