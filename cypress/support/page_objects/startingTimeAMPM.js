export class startingTimeAMPM {
  pickPeriod(period) {
    if (period.toUpperCase() === "AM") {
      cy.get(
        "body > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=radio]:nth-child(4)"
      ).check({ force: true });
    } else if (period.toUpperCase() == "PM") {
      cy.get(
        "body > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=radio]:nth-child(5)"
      ).check({ force: true });
    }
  }
}
export const OnStartingTimeAMPM = new startingTimeAMPM();
