import HomePage from './HomePage.js';
import RegistrationForm from './RegistrationForm.js';
import lastName from '../../fixtures/lastName.json';

describe('Registration — Last name field validation', () => {
  beforeEach(() => {
    HomePage.open();
    HomePage.clickSignUp();
  });

  for (const { title, input, expected } of lastName) {
    it(title, () => {
      RegistrationForm.typeLastNameAndBlur(input.lastName);
      RegistrationForm.lastNameError
        .should('be.visible')
        .and('contain', expected.message);
      RegistrationForm.lastNameInput
        .should('have.class', 'ng-invalid');
    });
  }

});