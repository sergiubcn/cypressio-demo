import Customer from "../users/customer";
import { lockedOutUser, validUser } from "../../data/user-data";

describe("Authentication", () => {
  it("Should allow the user to log in", () => {
    const ctmr = new Customer();
    ctmr.loadLoginPageAndAuthenticate(
      Cypress.env("VALID_USER_PASSWORD"),
      validUser,
    );
    ctmr.getCartLinkFromHeader().should("be.visible");
  });

  it("Should not allow locked out user to log in", () => {
    const ctmr = new Customer();
    ctmr.loadLoginPageAndAuthenticate(
      Cypress.env("VALID_USER_PASSWORD"),
      lockedOutUser,
    );
    ctmr.getLoginPageErrorMessage().should("be.visible");
  });
});
