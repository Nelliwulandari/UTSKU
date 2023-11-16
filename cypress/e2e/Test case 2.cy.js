describe('Test Skenario', () => {
    it('Test Case 2: Login User with correct email and password', () => {
        cy.visit('https://www.automationexercise.com/')

        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

        cy.get('[data-qa="signup-name"]').type('nelli');
        cy.get('[data-qa="signup-email"]').type('nelsa3004@gmail.com');
        cy.get('[data-qa="signup-button"]').click();
        cy.get('#id_gender1').check();
        cy.get('[data-qa="password"]').type('nelli');
        cy.get('[data-qa="days"]').select('30');
        cy.get('[data-qa="months"]').select('4');
        cy.get('[data-qa="years"]').select('2002');
        cy.get('#newsletter').check();
        cy.get('[data-qa="first_name"]').click();
        cy.get('#optin').check();
        cy.get('[data-qa="first_name"]').type('Nelli');
        cy.get('[data-qa="first_name"]').type('Nelli W');
        cy.get('[data-qa="last_name"]').type('Wulandari');
        cy.get('[data-qa="company"]').type('Indonesia');
        cy.get('[data-qa="address"]').type('Probolinggo');
        cy.get('[data-qa="address2"]').type('Probolinggo');
        cy.get('.login-form > form').click();
        cy.get('[data-qa="company"]').type('Zelixir');
        cy.get('[data-qa="country"]').select('Singapore');
        cy.get('[data-qa="state"]').click();
        cy.get('[data-qa="state"]').click();
        cy.get('[data-qa="state"]').type('indo');
        cy.get('[data-qa="city"]').type('probolinggo');
        cy.get('[data-qa="zipcode"]').type('142311');
        cy.get('[data-qa="mobile_number"]').clear('0');
        cy.get('[data-qa="mobile_number"]').type('082153684613');
        cy.get('[data-qa="create-account"]').click();
        cy.get('[data-qa="continue-button"]').click();
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

        // /* ==== Generated with Cypress Studio ==== */
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('[data-qa="login-email"]').type('nelsa@gmail.com');
        cy.get('[data-qa="login-password"]').type('nelli');
        cy.get('[data-qa="login-button"]').click();
        // cy.get('.shop-menu > .nav > :nth-child(5)').click();
        // cy.get('[data-qa="continue-button"]').click();
        /* ==== End Cypress Studio ==== */
    });
});