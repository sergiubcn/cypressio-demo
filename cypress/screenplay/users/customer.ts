import { CypressUIElement } from "../../types";
import { getCartLinkFromHeader } from "../page-component-objects/header";
import {
  getLoginPageErrorMessage,
  loadLoginPageAndAuthenticate,
} from "../interactions/authentication-interactions";

/**
 * Represents the interactions & interrogations available to a regular customer user.
 * Implement similar classes for other user roles/ types.
 */
export default class Customer {
  constructor() {}

  /**
   * Retrieves the cart link from the header.
   * @returns The header cart link element.
   */
  getCartLinkFromHeader(): CypressUIElement {
    return getCartLinkFromHeader();
  }

  /**
   * Retrieves the error message container element from the Login page. This expects a failed login state.
   * @returns The error message container element.
   */
  getLoginPageErrorMessage(): CypressUIElement {
    return getLoginPageErrorMessage();
  }

  /**
   * Loads the Login page and attempts to authenticate the user. This expects an unauthenticated starting state.
   * @param password The account's password.
   * @param username The account's username.
   */
  loadLoginPageAndAuthenticate(password: string, username: string): void {
    loadLoginPageAndAuthenticate(password, username);
  }
}
