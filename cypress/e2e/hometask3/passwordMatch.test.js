import HomePage from '.../.../src/pageObjects/HomePage.js';
import RegistrationForm from '.../.../src/pageObjects/RegistrationForm.js';
import repeatPassword from '../../fixtures/repeatPassword.json';

describe('Registration — Re-enter Password field validation', () => {
  beforeEach(() => {
    HomePage.open();
    HomePage.clickSignUp();
  });

  for (const { title, input, expected } of repeatPassword) {
    it(title, () => {
       RegistrationForm.typePassword(input.password);

      // Потім вводимо Confirm password
      RegistrationForm.typeRepeatPasswordAndBlur(input.reenter);

      RegistrationForm.repeatPasswordError
        .should('be.visible')
        .and('contain', expected.message);

      RegistrationForm.repeatPasswordInput
        .should('have.class', 'is-invalid');
    });
  }
});