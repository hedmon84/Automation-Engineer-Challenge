export class CheckErrorMessage {
  CheckErrMessage(shouldbe) {
    cy.get(
      "body > form > table > tbody > tr:nth-child(4) > td.SubHead > b"
    ).then(erorr => {
      const erromessage = erorr.text().trim();
      expect(erromessage).to.equal(shouldbe);
    });
  }
}
export const OnerrMessage = new CheckErrorMessage();
