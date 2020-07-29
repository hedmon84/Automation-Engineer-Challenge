import { onParkingLotPicker } from "../support/page_objects/parkingLotPicker";
import { onStartingDate } from "../support/page_objects/startingDate";
describe("Test User_Friendly", () => {
  beforeEach("Open Application", () => {
    cy.openMainPage();
  });

  it("Friendly_User_Test", () => {
    onParkingLotPicker.pickLot("Short-Term Parking");
    onStartingDate.pickDate("7/28/2020");
  });
});
