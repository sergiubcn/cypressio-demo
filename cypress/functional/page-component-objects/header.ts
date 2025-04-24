import { UIElements } from "../../types";

const headerElements: UIElements = {
  cartBadge: () => cy.get("[data-test=shopping-cart-badge]"),
  cartLink: () => cy.get("[data-test=shopping-cart-link]"),
  headerContainer: () => cy.get("[data-test=header-container]"),
  menuButton: () => cy.get("#react-burger-menu-btn"),
};

export const header = () => ({
  /**
   * Retrieves the mini-cart badge from the header.
   * @returns The header cart badge element.
   */
  getCartBadge: () =>
    headerElements.headerContainer().within(() => headerElements.cartBadge()),
  /**
   * Retrieves the cart link from the header.
   * @returns The header cart link element.
   */
  getCartLinkFromHeader: () =>
    headerElements.headerContainer().within(() => headerElements.cartLink()),
  /**
   * Opens the sidebar navigation menu.
   */
  openSidebarNav: () => {
    headerElements.headerContainer().within(() => headerElements.menuButton().click());
  },
});
