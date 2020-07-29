import { onParkingLotPicker } from "../support/page_objects/parkingLotPicker";
import { onStartingDate } from "../support/page_objects/startingDate";
import { OnStartingTime } from "../support/page_objects/startingTime";
import { OnStartingTimeAMPM } from "../support/page_objects/startingTimeAMPM";
import { OnLeavingDate } from "../support/page_objects/LeavingDate";
import { OnLeavingTime } from "../support/page_objects/LeavingTime";
import { OnLeavingTimeAMPM } from "../support/page_objects/LeavingTimeAMPM";
import { FormSubmit } from "../support/page_objects/submitForm";
import { oncheckPrice } from "../support/page_objects/checkPrice";
import { OncheckDate } from "../support/page_objects/checkDate";
import { OnerrMessage } from "../support/page_objects/CheckErrorMessage";

describe("Friendly_User_Test", () => {
  it("Open Application", () => {
    cy.openMainPage();
  });

  it("Parking Lot Test", () => {
    onParkingLotPicker.pickLot("Short-Term Parking");
  });

  it("Starting Date Test", () => {
    onStartingDate.pickDate("MM/DD/YYYY");
  });
  it("Starting Time Test", () => {
    OnStartingTime.pickTime("12:00");
  });
  it("Starting Time AM or PM Test", () => {
    OnStartingTimeAMPM.pickPeriod("PM");
  });
  it("Leaving Date Test", () => {
    OnLeavingDate.leaveDate("7/29/2020");
  });
  it("Leaving Time Test", () => {
    OnLeavingTime.leaveTime("1:00");
  });
  it("Leaving Time AM or PM Test", () => {
    OnLeavingTimeAMPM.pickPeriod("PM");
  });
  it("Format Submit Test", () => {
    FormSubmit.Submit();
  });
  // it("Check Correct Price Test", () => {
  //   oncheckPrice.ShouldBe("$ 2.00");
  // });
  // it("Check Correct Date Test", () => {
  //   OncheckDate.CheckDate("(0 Days, 1 Hours, 0 Minutes)");
  // });

  it("Check Error Message Test", () => {
    OnerrMessage.CheckErrMessage("ERROR! Enter A Correctly Formatted Date");
  });
});
