import HomePage from '.../.../src/pageObjects/HomePage.js';
import RegistrationForm from '.../.../src/pageObjects/RegistrationForm.js';
import password from '../../fixtures/password.json';

describe('Registration — Password field validation', () => {
  beforeEach(() => {
    HomePage.open();
    HomePage.clickSignUp();
  });

  for (const { title, input, expected } of password) {
    it(title, () => {
      RegistrationForm.typePasswordAndBlur(input.password);
      RegistrationForm.passwordError
        .should('be.visible')
        .and('contain', expected.message);
      RegistrationForm.passwordInput
        .should('have.class', 'ng-invalid');
    });
  }
});