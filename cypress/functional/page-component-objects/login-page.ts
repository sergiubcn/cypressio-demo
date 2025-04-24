import { UIElements } from "../../types";

const loginPageElements: UIElements = {
  errorMessageContainer: () => cy.get("[data-test=error]"),
  loginButton: () => cy.get("[data-test=login-button]"),
  loginForm: () => cy.get("[data-test=login-container]"),
  passwordTextField: () => cy.get("[data-test=password]"),
  usernameTextField: () => cy.get("[data-test=username]"),
};

export const loginPage = () => ({
  /**
   * Retrieves the error message container element if it exists.
   * @returns The error message container element.
   */
  getErrorMessageContainer: () => loginPageElements.errorMessageContainer(),
  /**
   * Retrieves the login form element.
   * @returns The login form element.
   */
  getLoginForm: () => loginPageElements.loginForm(),
  /**
   * Loads the root page. If the user is unauthenticated this is the Login page.
   */
  loadPage: () => {
    cy.visit("/");
  },
  /**
   * Attempts log the user into the account.
   * @param password The account password.
   * @param username The account username.
   */
  login: (password: string, username: string) => {
    loginPageElements.usernameTextField().type(username);
    loginPageElements.passwordTextField().type(password);
    loginPageElements.loginButton().click();
  },
});
