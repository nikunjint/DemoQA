import { CommonPage } from "../../helpers/page/commonpage/commonpage";
import { radioBox } from "../../helpers/xpathandassertions/radiobox/radiobox";
let commonP = new CommonPage();
export function createRadiobox() {
  cy.contains("Elements").click();
  cy.contains("Radio Button").click();

  commonP.radiobutton(radioBox().xpath.check);
}
