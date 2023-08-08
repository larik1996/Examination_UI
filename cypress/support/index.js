// cypress/support/index.js
import SearchHelpers from 'cypress/support/helpers/searchHelpers.js';

Cypress.Commands.add('searchProduct', SearchHelpers.searchProduct);

