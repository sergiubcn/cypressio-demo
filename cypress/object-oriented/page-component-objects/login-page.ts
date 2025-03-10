/**
 * Represents the available elements and actions on the Login page.
 */
export default class LoginPage {
  private errorMessageContainer: string = "[data-test=error]";
  private loginButton: string = "[data-test=login-button]";
  private passwordTextField: string = "[data-test=password]";
  private usernameTextField: string = "[data-test=username]";

  constructor() {}

  /**
   * Retrieves the error message container if it exists.
   * @returns The error message container HTML element.
   */
  getErrorMessageContainer() {
    return cy.get(this.errorMessageContainer);
  }

  /**
   * Loads the root page. If the user is not authenticated then this is the Login page.
   */
  loadPage() {
    cy.visit("/");
  }

  /**
   * Attempts to log the user into the account.
   * @param password The account's password.
   * @param username The account's username.
   */
  login(password: string, username: string) {
    cy.get(this.usernameTextField).type(username);
    cy.get(this.passwordTextField).type(password);
    cy.get(this.loginButton).click();
  }
}
