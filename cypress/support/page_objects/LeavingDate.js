export class LeavingDate {
  leaveDate(Date) {
    cy.get("#LeavingDate")
      .clear()
      .type(Date)
      .invoke("prop", "value")
      .should("contain", Date);
  }
}
export const OnLeavingDate = new LeavingDate();
