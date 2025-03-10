import { header } from "../page-component-objects/header";
import { loginPage } from "../page-component-objects/login-page";
import { lockedOutUser, validUser } from "../../data/user-data";

describe("Authentication", () => {
  it("Should allow the user to log in", () => {
    const loginPg = loginPage();
    loginPg.loadPage();
    loginPg.login(Cypress.env("VALID_USER_PASSWORD"), validUser);

    const hd = header();
    hd.getCartLinkFromHeader().should("be.visible");
  });

  it("Should not allow locked out user to log in", () => {
    const loginPg = loginPage();
    loginPg.loadPage();
    loginPg.login(Cypress.env("VALID_USER_PASSWORD"), lockedOutUser);
    loginPg.getErrorMessageContainer().should("be.visible");
  });
});
