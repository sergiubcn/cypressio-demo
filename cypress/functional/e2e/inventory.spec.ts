import { header } from "../page-component-objects/header";
import { inventoryPage } from "../page-component-objects/inventory-page";
import { loginPage } from "../page-component-objects/login-page";
import { validItemName } from "../../data/item-data";
import { validUser } from "../../data/user-data";

describe("Inventory actions", () => {
  before(() => {
    // Ideally we should programmatically authenticate unless we test that exact functionality.
    const loginPg = loginPage();
    loginPg.loadPage();
    loginPg.login(Cypress.env("VALID_USER_PASSWORD"), validUser);
  });

  it("Should allow the user to add an item to cart", () => {
    const invPg = inventoryPage();
    invPg.addItemToCart(validItemName);

    const hd = header();
    hd.getCartBadge().contains("1").should("be.visible");
  });
});
