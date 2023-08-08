// cypress/support/pageObjects/ShopPage.js
import {randomFill, randomNumber, randomElementFromArray} from "../utils";

class ShopPage {
    addToBasketButtons = '.mat-button-wrapper:contains("Add to Basket")'; // Селектор для всех кнопок "Add to Basket"
    basketButton = '[aria-label="Show the shopping cart"]'; // Селектор для кнопки корзины
    checkoutButton = '#checkoutButton'; // Селектор для кнопки "Checkout"

    clickAllAddToBasketButtons() {
        cy.get(this.addToBasketButtons).click({multiple: true, force: true});
    }

    clickBasketButton() {
        cy.get(this.basketButton).click();
    }

    clickCheckoutButton() {
        cy.get(this.checkoutButton).should('not.have.attr', 'disabled');
        cy.get(this.checkoutButton).click({force: true});
    }

    clickAddNewAddressButton() {
        cy.contains('Add New Address').click();
    }

    fillCountry() {
        const randomCountry = randomFill(10, 'abcdefghijklmnopqrstuvwxyz');
        (cy.get('#mat-input-9')).type(randomCountry);
    }

    fillName() {
        const randomName = randomFill(8, 'abcdefghijklmnopqrstuvwxyz');
        cy.get('#mat-input-10').type(randomName);
    }

    fillMobileNumber() {
        const randomMobileNumber = randomNumber(1000000000, 9999999999);
        cy.get('#mat-input-11').type(randomMobileNumber);
    }

    fillZIPCode() {
        const randomZIPCode = randomFill(5, '0123456789');
        cy.get('#mat-input-12').type(randomZIPCode);
    }

    fillAddress() {
        const randomAddress = randomFill(20, 'abcdefghijklmnopqrstuvwxyz');
        cy.get('#address').type(randomAddress);
    }

    fillCity() {
        const randomCity = randomFill(10, 'abcdefghijklmnopqrstuvwxyz');
        cy.get('#mat-input-14').type(randomCity);
    }

    fillState() {
        const randomState = randomFill(2, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        cy.get('#mat-input-15').type(randomState);
    }

    clickSubmitButton() {
        cy.get('#submitButton').click();
    }

    clickAddress() {
        cy.get('.mat-radio-inner-circle').click();
    }

    clickNextButton() {
        cy.get('.btn-next').click();
    }

    clickRandomDeliveryOption() {
        const paymentOptions = ['#mat-radio-41', '#mat-radio-42', '#mat-radio-43'];
        const randomOption = randomElementFromArray(paymentOptions);
        cy.get(randomOption).click();
    }

    clickConfirmButton() {
        cy.get('.nextButton').click();
    }

    clickPaymentPanel() {
        cy.get('#mat-expansion-panel-header-0').click();
    }

    fillCardholderName() {
        const cardholderName = randomFill(10, 'abcdefghijklmnopqrstuvwxyz');
        cy.get('#mat-input-16').type(cardholderName);
    }

    fillCardNumber() {
        const cardNumber = randomNumber(1000000000000000, 9999999999999999);
        cy.get('#mat-input-17').type(cardNumber);
    }

    selectExpiryMonth() {
        const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        const randomValue = randomElementFromArray(values);
        cy.get('#mat-input-18').select(randomValue);
    }

    selectExpiryYear() {
        const years = ['2080', '2081', '2082', '2083', '2084', '2085', '2086', '2087', '2088', '2089', '2090', '2091', '2092', '2093', '2094', '2095', '2096', '2097', '2098', '2099'];
        const randomYear = randomElementFromArray(years);
        cy.get('#mat-input-19').select(randomYear);
    }

    clickPaymentSubmitButton() {
        cy.get('#submitButton').click();
    }

    clickPaymentOption() {
        cy.get('.mat-radio-inner-circle').click();
    }

    PurchaseValidation() {
    cy.contains('Thank you for your purchase!').should('be.visible');
}
}
export default ShopPage;
