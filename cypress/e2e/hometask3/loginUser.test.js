describe('Login — Existing user', () => {
  it('login using user from createdUser.json', () => {
    cy.readFile('cypress/fixtures/createdUser.json').then((user) => {
      cy.login(user.email, user.password);
    });
  });
});