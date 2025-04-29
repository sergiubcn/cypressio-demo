import { UIElements } from "../../types";

const sidebarNavElements: UIElements = {
  logoutLink: () => cy.get("[data-test=logout-sidebar-link]"),
  sidebarNavContainer: () => cy.get("nav.bm-item-list"),
};

export const sidebarNav = () => ({
  /**
   * Logs the user out.
   */
  logout: () => {
    sidebarNavElements
      .sidebarNavContainer()
      .within(() => sidebarNavElements.logoutLink().click());
  },
});
