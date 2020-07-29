export class startingTime {
    pickDate(Date) {
      cy.get("#StartingDate")
        .clear()
        .type(Date)
        .invoke("prop", "value")
        .should("contain", Date);
    }
  }
  export const OnStartingTime = new startingTime();
  