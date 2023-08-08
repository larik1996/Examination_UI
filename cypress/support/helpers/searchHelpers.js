// cypress/support/helpers/searchHelpers.js
class SearchHelpers {
    searchProduct(ProductName) {
        cy.get('#searchQuery').click(); // Кликаем на поиск
        cy.get('#mat-input-0').type(ProductName, { force: true }).type('{enter}'); // Вводим имя продукта и нажимаем Enter
    }
}

export default SearchHelpers;
