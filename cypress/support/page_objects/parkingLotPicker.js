export class parkingLotPicker {
  pickLot(Lot_Name) {
    cy.get("#ParkingLot").select(Lot_Name).should("contain", Lot_Name);
  }
}
export const onParkingLotPicker = new parkingLotPicker();
