// cypress/support/pageObjects/LoginPage.js
class LoginPage {
    emailInput = '#email';
    passwordInput = '#password';
    showPasswordToggle = '.mat-form-field-suffix';
    loginButton = '#loginButton';
    rememberMeCheckbox = '.mat-checkbox-inner-container';
    errorText = '.error';

    fillEmail(email) {
        cy.get(this.emailInput).type(email);
    }

    fillPassword(password) {
        cy.get(this.passwordInput).type(password);
    }

    clickShowPasswordToggle() {
        cy.get(this.showPasswordToggle).click();
    }

    clickLoginButton() {
        cy.get(this.loginButton).click();
    }

    clickRememberMe() {
        cy.get(this.rememberMeCheckbox).click();
    }

    checkErrorText(text) {
        cy.get(this.errorText).should('contain', text);
    }

    checkLoginButtonIsDisabled() {
        cy.get(this.loginButton).should('be.disabled');
    }

    checkEnteredPassword(password) {
        cy.get(this.passwordInput).should('have.value', password);
    }

    checkEnteredPasswordHidden() {
        cy.get(this.passwordInput).should('have.attr', 'type', 'password');
    }
}

export default LoginPage;
