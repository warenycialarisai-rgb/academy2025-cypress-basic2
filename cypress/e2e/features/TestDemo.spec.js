/* ==== Test Created with Cypress Studio ==== */
it('login_fallido', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://www.saucedemo.com/');
  cy.get('[data-test="username"]').clear('L');
  cy.get('[data-test="username"]').type('Larisa Warenycia');
  cy.get('[data-test="password"]').clear('c');
  cy.get('[data-test="password"]').type('contraseña123');
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  /* ==== End Cypress Studio ==== */
});