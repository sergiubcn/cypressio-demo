import { CypressUIElement, UIElements } from "../../types";

const headerElements: UIElements = {
  cartLink: () => cy.get("[data-test=shopping-cart-link]"),
  headerContainer: () => cy.get("[data-test=header-container]"),
};

export const getCartLinkFromHeader = (): CypressUIElement =>
  headerElements.headerContainer().within(() => headerElements.cartLink());
