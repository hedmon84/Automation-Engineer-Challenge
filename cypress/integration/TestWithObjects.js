import { onParkingLotPicker } from "../support/page_objects/parkingLotPicker";
describe("Test User_Friendly", () => {
  beforeEach("Open Application", () => {
    cy.openMainPage();
  });

  it("Friendly_User_Test", () => {
    onParkingLotPicker.pickLot();
  });
});
