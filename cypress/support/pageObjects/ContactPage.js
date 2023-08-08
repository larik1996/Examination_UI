// cypress/support/pageObjects/ContactPage.js
class ContactPage {
    visit() {
        cy.visit('http://juice-shop-sanitarskyi.herokuapp.com/#/contact');
    }

    closeCookieConsent() {
        cy.get('.cc-btn').click();
        cy.get('.close-dialog').click();
    }

    fillCommentField(comment) {
        cy.get('#comment').type(comment);
    }

    moveSliderToValue(value) {
        cy.get('#rating').click('center'); // Имитируем клик по правой части слайдера
    }

    solveCaptchaAndSubmit() {
        cy.get('#captcha').invoke('text').then(captchaText => {
            const captchaAnswer = eval(captchaText); // Предполагаем, что текст капчи содержит выражение
            cy.get('#captchaControl').type(captchaAnswer);
            cy.get('#submitButton').click();
        });
    }

    verifySuccessMessage() {
        cy.contains('Thank you for your feedback.').should('be.visible');
    }
}

export default ContactPage;
