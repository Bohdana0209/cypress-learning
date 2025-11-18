import HomePage from '../../src/pageObjects/HomePage.js';
import RegistrationForm from '../../src/pageObjects/RegistrationForm.js';

describe('Registration — Successful user sign up (UI only)', () => {
  beforeEach(() => {
    HomePage.open();
    HomePage.clickSignUp();
  });

  it('creates a user and closes the modal', () => {
    const user ={
        name: 'Brian',
        lastName: 'John',
        email: `qwe_${Date.now()}@example.com`,
        password: 'Qwerty123!',
        repeatPassword: 'Qwerty123!'
    };

    RegistrationForm.typeNameAndBlur(user.name);
    RegistrationForm.typeLastNameAndBlur(user.lastName);
    RegistrationForm.typeEmailAndBlur(user.email);
    RegistrationForm.typePasswordAndBlur(user.password);
    RegistrationForm.typeRepeatPasswordAndBlur(user.repeatPassword);

    RegistrationForm.registerButton.click();

    cy.writeFile('cypress/fixtures/createdUser2.json', user);

    cy.contains('button', 'Add car').click();

const car = {
      brand: 'BMW',
      model: '3',
      mileage: '10345',
    };

    cy.intercept('POST', '/api/cars').as('createCar');

    cy.get('ngb-modal-window').within(() => {
      cy.get('#addCarBrand').select(car.brand);
      cy.get('#addCarModel').select(car.model);
      cy.get('#addCarMileage').type(car.mileage);
      cy.contains('button', 'Add').click();
    });

    cy.wait('@createCar').then(({ request, response }) => {
        expect(response.statusCode).to.eq(201);

  const resCar = response.body.data;
  const reqCar = request.body;

        expect(String(reqCar.initialMileage ?? reqCar.mileage)).to.eq(car.mileage);
        expect(resCar.carBrandId).to.eq(reqCar.carBrandId);
        expect(resCar.carModelId).to.eq(reqCar.carModelId);
});
  });
});
