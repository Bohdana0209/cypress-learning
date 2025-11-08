import HomePage from './HomePage.js';
import RegistrationForm from './RegistrationForm.js';
import registerButton from '../../fixtures/registerButton.json';

describe('Registration — Register Button state', () => {
  beforeEach(() => {
    HomePage.open();
    HomePage.clickSignUp();
  });

  for (const { title, input, expected } of registerButton) {
    it(title, () => {

      RegistrationForm.typeNameAndBlur(input.name);
      RegistrationForm.typeLastNameAndBlur(input.lastName);
      RegistrationForm.typeEmailAndBlur(input.email);
      RegistrationForm.typePasswordAndBlur(input.password);
      RegistrationForm.typeRepeatPasswordAndBlur(input.repeatPassword);

      if (expected.enabled) {
        RegistrationForm.registerButton
          .should('be.enabled');
      } else {
        RegistrationForm.registerButton
          .should('be.disabled');
      }
    });
  }
});
