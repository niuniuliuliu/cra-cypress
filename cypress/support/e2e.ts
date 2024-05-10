// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

declare global {
  namespace Cypress {
    interface Chainable {
      getByTestId: typeof getByTestId;
    }
  }
}

const getByTestId = (id: string) => cy.get(`[data-testid="${id}"]`);

Cypress.Commands.add("getByTestId", getByTestId);

// Alternatively you can use CommonJS syntax:
// require('./commands')
