// cypress/integration/5.contactForm.spec.js
import ContactPage from '../support/pageObjects/ContactPage';

describe('Contact Form Test', () => {
    const contactPage = new ContactPage();

    it('should submit contact form', () => {
        contactPage.visit();
        contactPage.closeCookieConsent();

        const randomComment = Cypress._.times(20, () => Cypress._.random(0, 1) ? Cypress._.random(0, 9).toString() : String.fromCharCode(Cypress._.random(97, 122))).join('');
        contactPage.fillCommentField(randomComment);

        contactPage.moveSliderToValue(3);

        contactPage.solveCaptchaAndSubmit();

        contactPage.verifySuccessMessage();
    });
});
