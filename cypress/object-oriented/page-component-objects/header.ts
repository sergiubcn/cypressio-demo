/**
 * Represents the available elements and actions in the header.
 */
export default class Header {
  private cartLink: string = "[data-test=shopping-cart-link]";
  private headerContainer: string = "[data-test=header-container]";

  constructor() {}

  /**
   * Retrieves the cart link from the header.
   * @returns The header cart link element.
   */
  getCartLinkFromHeader() {
    return cy.get(this.headerContainer).within(() => cy.get(this.cartLink));
  }
}
