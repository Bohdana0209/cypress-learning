import HomePage from './HomePage.js';
import RegistrationForm from './RegistrationForm.js';
import email from '../../fixtures/email.json';

describe('Registration — Email field validation', () => {
  beforeEach(() => {
    HomePage.open();
    HomePage.clickSignUp();
  });

  for (const { title, input, expected } of email) {
    it(title, () => {
      RegistrationForm.typeEmailAndBlur(input.email);
      RegistrationForm.emailError
        .should('be.visible')
        .and('contain', expected.message);
      RegistrationForm.emailInput
        .should('have.class', 'ng-invalid');
    });
  }
});