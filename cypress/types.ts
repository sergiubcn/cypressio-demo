export type CypressUIElement = Cypress.Chainable<JQuery<HTMLElement>>;

export type UIElements = Record<string, (arg?: string) => CypressUIElement>;
