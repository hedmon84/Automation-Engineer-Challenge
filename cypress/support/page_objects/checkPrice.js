export class checkPrice {
  ShouldBe(shouldbe) {
    cy.get(
      "body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b"
    ).then(price => {
      const value = price.text().trim();
      expect(value).to.equal(shouldbe);
    });
  }
}
export const oncheckPrice = new checkPrice();
