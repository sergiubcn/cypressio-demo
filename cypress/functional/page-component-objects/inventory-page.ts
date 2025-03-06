import { UIElements } from "../../types";

const inventoryPageElements: UIElements = {
  addToCartButton: (itemName: string) =>
    cy.get(`[data-test=add-to-cart-${itemName}]`),
  removeItemFromCartButton: (itemName: string) =>
    cy.get(`[data-test=remove-${itemName}]`),
};

export const inventoryPage = () => ({
  /**
   * Adds an item to cart and waits for the button change.
   * @param itemName The item's name.
   */
  addItemToCart: (itemName: string) => {
    inventoryPageElements.addToCartButton(itemName).click();
    inventoryPageElements
      .removeItemFromCartButton(itemName)
      .should("be.visible");
  },
  /**
   * Loads the Inventory page.
   */
  loadPage: () => {
    cy.visit("/inventory.html");
  },
});
