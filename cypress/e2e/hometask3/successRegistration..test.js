import HomePage from './HomePage.js';
import RegistrationForm from './RegistrationForm.js';

describe('Registration — Successful user sign up (UI only)', () => {
  beforeEach(() => {
    HomePage.open();
    HomePage.clickSignUp();
  });

  it('creates a user and closes the modal', () => {
    const user ={
        name: 'Marta',
        lastName: 'John',
        email: `aqa_${Date.now()}@example.com`,
        password: 'Qwerty123!',
        repeatPassword: 'Qwerty123!'
    };

    RegistrationForm.typeNameAndBlur(user.name);
    RegistrationForm.typeLastNameAndBlur(user.lastName);
    RegistrationForm.typeEmailAndBlur(user.email);
    RegistrationForm.typePasswordAndBlur(user.password);
    RegistrationForm.typeRepeatPasswordAndBlur(user.repeatPassword);

    RegistrationForm.registerButton.click();

    cy.writeFile('cypress/fixtures/createdUser.json', user);
  });
});
