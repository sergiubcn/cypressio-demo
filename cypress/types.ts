export type UIElements = Record<
  string,
  (arg?: string) => Cypress.Chainable<JQuery<HTMLElement>>
>;
