describe("Header buttons", () => {
    const expectedHeaderButtons = [
        "Home",
        "About",
        "Contacts",
         "Guest log in",
         "Sign In"
        ]
    beforeEach(() => {
        cy.visit("/")
    });

     it("all header buttons should be visible", () => {
       cy.get("header").find(".header-link, .header_signin").then(($buttons) => {
         const buttonsTexts = $buttons.map((index, button) => button.textContent).get();
         expect(buttonsTexts, "Header buttons should be valid").to.be.deep.eq(expectedHeaderButtons);
       })


     })

    
})