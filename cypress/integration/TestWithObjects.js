import { onParkingLotPicker } from "../support/page_objects/parkingLotPicker";
import { onStartingDate } from "../support/page_objects/startingDate";
import { OnStartingTime } from "../support/page_objects/startingTime";
import { OnStartingTimeAMPM } from "../support/page_objects/startingTimeAMPM";
import { OnLeavingDate } from "../support/page_objects/LeavingDate";
import { OnLeavingTime } from "../support/page_objects/LeavingTime";
import { OnLeavingTimeAMPM } from "../support/page_objects/LeavingTimeAMPM";
import { FormSubmit } from "../support/page_objects/submitForm";
import { oncheckPrice } from "../support/page_objects/checkPrice";
describe("Test User_Friendly", () => {
  beforeEach("Open Application", () => {
    cy.openMainPage();
  });

  it("Friendly_User_Test", () => {
    onParkingLotPicker.pickLot("Short-Term Parking");
    onStartingDate.pickDate("7/28/2020");
    OnStartingTime.pickTime("12:00");
    OnStartingTimeAMPM.pickPeriod("PM");
    OnLeavingDate.leaveDate("7/28/2020");
    OnLeavingTime.leaveTime("1:00");
    OnLeavingTimeAMPM.pickPeriod("PM");
    FormSubmit.Submit();
    oncheckPrice.ShouldBe("$ 2.00");
  });
});
