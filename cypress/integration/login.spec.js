import loginPage from '../pageObjects/loginPage';

describe('Login functionality', function() {
  it('admin user can log into account', function() {
    cy.visit(loginPage.path());
    cy.get(loginPage.loginButton()).should('be.visible');
  });
})
