/// <reference types="cypress" />

describe("First state test", () => {
  it("Firts Test", () => {
    cy.openMainPage();

    cy.get("form")
      .find("tbody")
      .then(dropdown => {
        cy.wrap(dropdown)
          .find("tr")
          .first()
          .get("select option")
          .each(listitems => {
            const itemsText = listitems.text().trim();
          });
        //   .select("Short-Term Parking")
        //   .wait(1000)
        //   .select("Economy Parking");
      });
  });
});
