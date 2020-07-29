export class startingTime {
  pickTime(Time) {
    cy.get("#StartingTime")
      .clear()
      .type(Time)
      .invoke("prop", "value")
      .should("contain", Time);
  }
}
export const OnStartingTime = new startingTime();
