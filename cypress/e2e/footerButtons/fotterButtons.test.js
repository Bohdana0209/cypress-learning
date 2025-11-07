describe("Footer links", () => {
  const expectedContactsLinks = [
    "ithillel.ua",
    "support@ithillel.ua"
  ];

  const expectedSocialLinks = [
    "https://www.facebook.com/Hillel.IT.School",
    "https://t.me/ithillel_kyiv",
    "https://www.youtube.com/user/HillelITSchool?sub_confirmation=1",
    "https://www.instagram.com/hillel_itschool/",
    "https://www.linkedin.com/school/ithillel/"
  ];

    beforeEach(() => {
        cy.visit("/")
    });

     it("all header buttons should be visible", () => {
       cy.get(".container").find(".contacts_link").then(($links) => {
         const linksTexts = $links.map((index, link) => link.textContent).get();
         expect(linksTexts, "Contact links should be valid").to.be.deep.eq(expectedContactsLinks);
       })

       cy.get(".container").find(".socials_link").then(($icons) => {
         const validHrefs = $icons.map((index, icon) => icon.getAttribute("href")).get();
         expect(validHrefs, "Social links should be valid").to.be.deep.eq(expectedSocialLinks);
       })

     })

    
})