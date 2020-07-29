export class checkDate {
  CheckDate(shouldbe) {
    cy.get(
      "body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.BodyCopy > b"
    ).then(date => {
      const day = date.text().trim();
      expect(day).to.equal(shouldbe);
    });
  }
}
export const OncheckDate = new checkDate();
