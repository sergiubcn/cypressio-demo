import { CypressUIElement, UIElements } from "../../types";

const loginPageElements: UIElements = {
  errorMessageContainer: () => cy.get("[data-test=error]"),
  loginButton: () => cy.get("[data-test=login-button]"),
  passwordTextField: () => cy.get("[data-test=password]"),
  usernameTextField: () => cy.get("[data-test=username]"),
};

export const getErrorMessageContainer = (): CypressUIElement =>
  loginPageElements.errorMessageContainer();

export const login = (password: string, username: string): void => {
  loginPageElements.usernameTextField().type(username);
  loginPageElements.passwordTextField().type(password);
  loginPageElements.loginButton().click();
};
