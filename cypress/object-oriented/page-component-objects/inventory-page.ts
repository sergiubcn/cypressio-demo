/**
 * Represents the available elements and actions on the Inventory page.
 */
export default class InventoryPage {
  constructor() {}

  private addToCartButton(productName: string) {
    return `[data-test=add-to-cart-${productName}]`;
  }

  /**
   * Adds the backpack item to the shopping cart.
   * @param productName The name of the product to add to the cart.
   */
  addItemToCart(productName: string) {
    cy.get(this.addToCartButton(productName)).click();
  }
}
