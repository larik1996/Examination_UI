// cypress/support/pageObjects/RegistrationPage.js
class RegistrationPage {
    emailInput = '#emailControl';
    passwordInput = '#passwordControl';
    repeatPasswordInput = '#repeatPasswordControl';
    securityQuestionToggle = '.mat-slide-toggle-thumb';
    securityQuestionDropdown = '.mat-select-placeholder';
    securityAnswerInput = '#securityAnswerControl';
    registerButton = '#registerButton';
    cookieConsentButton = '.cc-btn';
    closeDialogButton = '.close-dialog';
    newCustomerLink = '#newCustomerLink';
    snackBarContainer = '.mat-snack-bar-container';

    visit() {
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/');
        cy.get(this.cookieConsentButton).click();
        cy.get(this.closeDialogButton).click();
    }

    navigateToRegistrationPage() {
        cy.get('#navbarAccount').click();
        cy.get('#navbarLoginButton').click();
        cy.get(this.newCustomerLink).click();
    }

    fillEmail(email) {
        cy.get(this.emailInput).type(email);
    }

    fillPassword(password) {
        cy.get(this.passwordInput).type(password);
    }

    fillRepeatPassword(password) {
        cy.get(this.repeatPasswordInput).type(password);
    }

    toggleSecurityQuestion() {
        cy.get(this.securityQuestionToggle).click();
    }

    selectSecurityQuestion() {
        cy.get(this.securityQuestionDropdown).click();
        cy.get('.mat-option').eq(1).click();
    }

    fillSecurityAnswer(answer) {
        cy.get(this.securityAnswerInput).type(answer);
    }

    submitRegistrationForm() {
        cy.get(this.registerButton).click();
    }

    getSnackBarContainer() {
        return cy.get(this.snackBarContainer);
    }
}

export default RegistrationPage;
