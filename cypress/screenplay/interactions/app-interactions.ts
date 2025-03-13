export const loadPage = (path: string = "/"): void => {
  cy.visit(path);
};
