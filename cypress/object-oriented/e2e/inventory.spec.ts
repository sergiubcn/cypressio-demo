import Header from "../page-component-objects/header";
import InventoryPage from "../page-component-objects/inventory-page";
import LoginPage from "../page-component-objects/login-page";
import { validItemName } from "../../data/item-data";

// Test generated with Cypress Studio.
// Code refactored using Cursor.
describe("Inventory", () => {
  it("Should add item to cart and view cart", () => {
    const loginPage = new LoginPage();
    loginPage.loadPage();
    loginPage.login("secret_sauce", "standard_user");

    const inventoryPage = new InventoryPage();
    inventoryPage.addItemToCart(validItemName);

    const header = new Header();
    header.loadCart();
  });
});
