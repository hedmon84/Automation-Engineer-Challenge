export class startingDate {
  pickDate(Date) {
    cy.get("#StartingDate")
      .clear()
      .type(Date)
      .invoke("prop", "value")
      .should("contain", Date);
  }
}
export const onStartingDate = new startingDate();
