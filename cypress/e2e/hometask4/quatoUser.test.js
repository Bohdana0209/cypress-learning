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

    cy.contains('button', 'Add car').click();

cy.get('ngb-modal-window').within(() => {
  cy.get('#addCarBrand').select('Audi');
  cy.get('#addCarModel').select('TT');
  cy.get('#addCarMileage').type('12345');
  cy.contains('button', 'Add').click();
});

cy.contains('a', ' Fuel expenses ').click();
cy.contains('button', 'Add an expense').click();
cy.get('ngb-modal-window').within(() => {
  cy.get('#addExpenseCar').select('Audi TT');
  cy.get('#addExpenseDate').clear().type('11.11.2025');
  cy.get('#addExpenseMileage').clear().type('15567');
  cy.get('#addExpenseLiters').clear().type('25');
  cy.get('#addExpenseTotalCost').clear().type('13400');
  cy.contains('button', 'Add').click();
});
  });
});
