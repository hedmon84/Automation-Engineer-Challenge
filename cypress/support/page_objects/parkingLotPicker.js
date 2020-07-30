export class parkingLotPicker {
  pickLot(Lot_Name, should_be) {
    cy.get("#ParkingLot").select(Lot_Name).should("contain", should_be);
  }
}
export const onParkingLotPicker = new parkingLotPicker();
