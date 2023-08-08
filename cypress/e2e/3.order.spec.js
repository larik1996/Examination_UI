// cypress/integration/e2e/3.order.spec.js
import RegistrationPage from '../support/pageObjects/RegistrationPage';
import LoginPage from '../support/pageObjects/LoginPage';
import ShopPage from '../support/pageObjects/ShopPage';
import {randomString, generateRandomPassword} from '../support/utils';

describe('Order Tests', () => {
    const registrationPage = new RegistrationPage();
    const loginPage = new LoginPage();
    const shopPage = new ShopPage();

    let registeredEmail;
    let registeredPassword;

    it('should register a new user, login and make order', () => {
        registrationPage.visit();
        const email = randomString(10) + '@example.com';
        const password = generateRandomPassword();

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


        registeredEmail = email;
        registeredPassword = password;

        loginPage.fillEmail(registeredEmail);
        loginPage.fillPassword(registeredPassword);
        loginPage.clickShowPasswordToggle();
        loginPage.clickRememberMe();
        loginPage.clickLoginButton();

        cy.url().should('include', '/search');
        cy.log('Successfully logged in');

        // Выбираем все элементы Add to Basket на странице и кликаем на них
        shopPage.clickAllAddToBasketButtons();

        // Кликаем на кнопку "Your basket"
        shopPage.clickBasketButton();

        // Кликаем на кнопку Checkout
        shopPage.clickCheckoutButton();

        // Кликаем на кнопку "Add New Address"
        shopPage.clickAddNewAddressButton();

        //Вводим данные для заказа
        shopPage.fillCountry();
        shopPage.fillName();
        shopPage.fillMobileNumber();
        shopPage.fillZIPCode();
        shopPage.fillAddress();
        shopPage.fillCity();
        shopPage.fillState();

        // Кликаем на кнопку "Submit"
        shopPage.clickSubmitButton();

        //Выбираем Адрес
        shopPage.clickAddress();
        shopPage.clickNextButton();

        // Выбираем случайный вариант доставки
        shopPage.clickRandomDeliveryOption();

        // Дальше кликаем на кнопку "Next"
        shopPage.clickConfirmButton();

        // Кликаем на панель оплаты
        shopPage.clickPaymentPanel();

        // Заполняем поля оплаты
        shopPage.fillCardholderName();
        shopPage.fillCardNumber();
        shopPage.selectExpiryMonth();
        shopPage.selectExpiryYear();

        // Кликаем на кнопку "Submit" для оплаты
        shopPage.clickPaymentSubmitButton();

        //Выбираем метод оплаты
        shopPage.clickPaymentOption();
        shopPage.clickConfirmButton();
        shopPage.clickCheckoutButton();

        //Проверяем, что заказ успешно выполнен
        shopPage.PurchaseValidation();
    });
});

