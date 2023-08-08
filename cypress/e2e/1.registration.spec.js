// cypress/integration/e2e/1.registration.spec.js
import { randomString, generateRandomPassword } from '../support/utils';
import RegistrationPage from '../support/pageObjects/RegistrationPage';

describe('Registration Tests', () => {
    const registrationPage = new RegistrationPage();

    beforeEach(() => {
        registrationPage.visit();
    });

    it('should register a new user', () => {
        registrationPage.navigateToRegistrationPage();

        const email = randomString(10) + '@example.com';
        const password = generateRandomPassword();
        const securityAnswer = 'answer_' + randomString(8);

        registrationPage.fillEmail(email);
        cy.log(`Typed email: ${email}`);
        registrationPage.fillPassword(password);
        cy.log(`Typed password: ${password}`);
        registrationPage.fillRepeatPassword(password);
        cy.log(`Typed repeat password: ${password}`);
        registrationPage.toggleSecurityQuestion();
        registrationPage.selectSecurityQuestion();
        cy.log('Selected a security question');
        registrationPage.fillSecurityAnswer(securityAnswer);
        cy.log(`Typed security answer: ${securityAnswer}`);
        registrationPage.submitRegistrationForm();

        cy.url().should('include', '/login');
        cy.log('Redirected to login page');

        registrationPage.getSnackBarContainer().should(
            'contain',
            'Registration completed successfully. You can now log in.'
        );
        cy.log('Registration completed successfully message is displayed');
    });
});
