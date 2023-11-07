import { checkBox } from "../../helpers/xpathandassertions/checkbox/checkbox";
import { CommonPage } from "../../helpers/page/commonpage/commonpage";
// import { fakerElement } from "../../helpers/faker/faker";
let commonP = new CommonPage();
export function createcheckBox() {
  cy.contains("Elements").click();

  // Click on "Text Box" to navigate to the Text Box section //
  cy.contains("Check Box").click();

  // Perform actions on the Text Box page //

  commonP.clicksidearrow(checkBox().xpath.sidearrow);
  commonP.clickdownarrow(checkBox().xpath.downarrow);
  commonP.clicksubdownarrow(checkBox().xpath.subdownarrow);
  commonP.clicksubdownarrow(checkBox().xpath.subdownarrow);
}
