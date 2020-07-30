export class LeavingTime {
  leaveTime(Time) {
    cy.get("#LeavingTime")
      .clear()
      .type(Time)
      .invoke("prop", "value")
      .should("contain", Time);
  }
}
export const OnLeavingTime = new LeavingTime();
