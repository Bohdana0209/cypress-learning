import HomePage from '.../.../src/pageObjects/HomePage.js';
import RegistrationForm from '.../.../src/pageObjects/RegistrationForm.js';
import names from '../../fixtures/names.json';

describe('Registration — Name field validation', () => {
  beforeEach(() => {
    HomePage.open();
    HomePage.clickSignUp();
  });

  for (const { title, input, expected } of names) {
    it(title, () => {
      RegistrationForm.typeNameAndBlur(input.name);
      RegistrationForm.nameError
        .should('be.visible')
        .and('contain', expected.message);
      RegistrationForm.nameInput
        .should('have.class', 'ng-invalid');
    });
  }

});