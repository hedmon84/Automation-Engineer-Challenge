/// <reference types="cypress" />

describe("First state test", () => {
  it("Firts Test", () => {
    cy.openMainPage();

    cy.get("form")
      .find("tbody")
      .then(tablerow => {
        cy.wrap(tablerow)
          .find("tr")
          .first()
          .get("select")
          .select("Short-Term Parking");
      });
  });
});
