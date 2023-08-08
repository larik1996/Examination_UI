// cypress/integration/e2e/2.login.spec.js
import LoginPage from '../support/pageObjects/LoginPage';
import RegistrationPage from '../support/pageObjects/RegistrationPage';
import { randomString } from '../support/utils';

describe('Login Tests', () => {
    const loginPage = new LoginPage();
    const registrationPage = new RegistrationPage();

    let registeredEmail;
    let registeredPassword;
    let invalidEmail;
    let invalidPassword;

    beforeEach(() => {
        registrationPage.visit();
        const email = 'testuser_' + randomString(8) + '@example.com';
        const password = 'Test@' + randomString(8);
        registeredEmail = email;
        registeredPassword = password;
        invalidEmail = 'invalidemail_' + randomString(8);
        invalidPassword = 'wrongpassword_' + randomString(8);

        registrationPage.navigateToRegistrationPage();
        registrationPage.fillEmail(email);
        registrationPage.fillPassword(password);
        registrationPage.fillRepeatPassword(password);
        registrationPage.toggleSecurityQuestion();
        registrationPage.selectSecurityQuestion();
        registrationPage.fillSecurityAnswer('answer_' + randomString(8));
        registrationPage.submitRegistrationForm();

        cy.url().should('include', '/login');
        cy.log('Registered successfully');
    });

    it('should disable login button when fields are empty', () => {
        loginPage.checkLoginButtonIsDisabled();
        cy.log('Login button is disabled when fields are empty');
    });

    it('should disable login button when only email is filled', () => {
        loginPage.fillEmail(registeredEmail);
        loginPage.checkLoginButtonIsDisabled();
        cy.log('Login button is disabled when only email is filled');
    });

    it('should disable login button when only password is filled', () => {
        loginPage.fillPassword(registeredPassword);
        loginPage.checkLoginButtonIsDisabled();
        cy.log('Login button is disabled when only password is filled');
    });

    it('should show error for invalid password', () => {
        loginPage.fillEmail(registeredEmail);
        loginPage.fillPassword(invalidPassword);
        loginPage.clickLoginButton();
        loginPage.checkErrorText('Invalid email or password');
        cy.log('Error message displayed for invalid email or password');
    });

    it('should show error for invalid email', () => {
        loginPage.fillEmail(invalidEmail);
        loginPage.fillPassword(registeredPassword);
        loginPage.clickLoginButton();
        loginPage.checkErrorText('Invalid email or password');
        cy.log('Error message displayed for invalid email or password');
    });

    it('should login with correct email and password', () => {
        loginPage.fillEmail(registeredEmail);
        loginPage.fillPassword(registeredPassword);
        loginPage.clickShowPasswordToggle();
        loginPage.checkEnteredPassword(registeredPassword);
        loginPage.clickShowPasswordToggle();
        loginPage.checkEnteredPasswordHidden();
        loginPage.clickRememberMe();
        loginPage.clickLoginButton();
        cy.url().should('include', '/search');
        cy.log('Successfully redirected to search page after login');
    });
});
