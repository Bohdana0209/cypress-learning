import { faker } from "@faker-js/faker";

describe("Cars API", () => {
  let userData;

  before(() => {
    const password = `Qwerty${faker.number.int({ min: 100, max: 999 })}`;

    userData = {
      name: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: password,
      repeatPassword: password,
    };

    cy.api({
      method: "POST",
      url: "/api/auth/signup",
      body: userData,
    })
      .its("status")
      .should("eq", 201);

    cy.api({
      method: "POST",
      url: "/api/auth/signin",
      body: {
        email: userData.email,
        password: userData.password,
        remember: false,
      },
    })
      .its("status")
      .should("eq", 200);
  });

  it("creates car and adds expense via API", () => {
    cy.api({
      url: "/api/cars/brands",
      method: "GET",
    })
      .its("body.data")
      .as("brandsData");

    cy.api({
      url: "/api/cars/models",
      method: "GET",
    })
      .its("body.data")
      .as("modelsData");

    cy.get("@brandsData").then((brands) => {
      const brand = brands[0];

      cy.get("@modelsData").then((models) => {
        const model = models.find((m) => m.carBrandId === brand.id);
        expect(model, "Model for selected brand should exist").to.exist;

        const carRequestBody = {
          carBrandId: brand.id,
          carModelId: model.id,
          mileage: faker.number.int({ min: 1, max: 200_000 }),
        };

        cy.api({
          method: "POST",
          url: "/api/cars",
          body: carRequestBody,
        }).then((carResponse) => {
          expect(carResponse.status).to.eq(201);

          const createdCar = carResponse.body.data;

          expect(createdCar.carBrandId).to.eq(carRequestBody.carBrandId);
          expect(createdCar.carModelId).to.eq(carRequestBody.carModelId);
          expect(Number(createdCar.mileage)).to.eq(
            Number(carRequestBody.mileage)
          );

          const carId = createdCar.id;

          const expenseRequestBody = {
            carId: carId,
            reportedAt: new Date().toISOString(), 
            liters: 4444,
            mileage: 200000,
            totalCost: 444444,
          };

          cy.api({
            method: "POST",
            url: "/api/expenses",
            body: expenseRequestBody,
          }).then((expenseResponse) => {
            expect(expenseResponse.status).to.eq(200);

            const createdExpense = expenseResponse.body.data;

            expect(createdExpense.carId).to.eq(carId);
            expect(Number(createdExpense.liters)).to.eq(
              Number(expenseRequestBody.liters)
            );
            expect(Number(createdExpense.mileage)).to.eq(
              Number(expenseRequestBody.mileage)
            );
            expect(Number(createdExpense.totalCost)).to.eq(
              Number(expenseRequestBody.totalCost)
            );
            expect(createdExpense.reportedAt).to.exist;
          });
        });
      });
    });
  });
});
