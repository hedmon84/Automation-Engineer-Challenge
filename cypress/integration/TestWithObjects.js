import { onParkingLotPicker } from "../support/page_objects/parkingLotPicker";
import { onStartingDate } from "../support/page_objects/startingDate";
import { OnStartingTime } from "../support/page_objects/startingTime";
import { OnStartingTimeAMPM } from "../support/page_objects/startingTimeAMPM";
describe("Test User_Friendly", () => {
  beforeEach("Open Application", () => {
    cy.openMainPage();
  });

  it("Friendly_User_Test", () => {
    onParkingLotPicker.pickLot("Short-Term Parking");
    onStartingDate.pickDate("7/28/2020");
    OnStartingTimeAMPM.pickPeriod("AM");
  });
});
