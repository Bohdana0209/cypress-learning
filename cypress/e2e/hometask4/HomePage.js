class HomePage {

  open() {
    cy.visit("/");
  }

  get signUpButton() {
    return cy.contains("Sign up");
  }

  clickSignUp() {
    this.signUpButton.click();
  }

}

export default new HomePage();