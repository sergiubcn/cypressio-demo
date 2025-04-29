import { header } from "../page-component-objects/header";
import { loginPage } from "../page-component-objects/login-page";
import { lockedOutUser, validUser } from "../../data/user-data";
import { sidebarNav } from "../page-component-objects/sidebar-nav";

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

// Part of the CursorAI proof of concept.
// The test was written from scratch with CursorAI, NOT by CursorAI.
describe("Log out", () => {
  it("Should allow the user to log out", () => {
    const loginPg = loginPage();
    loginPg.loadPage();
    loginPg.login(Cypress.env("VALID_USER_PASSWORD"), validUser);

    const hd = header();
    hd.openSidebarNav();

    const sn = sidebarNav();
    sn.logout();

    loginPg.getLoginForm().should("be.visible");
  });
});
