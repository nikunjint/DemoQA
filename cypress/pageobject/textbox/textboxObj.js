import { textBox } from "../../helpers/xpathandassertions/textbox/textbox";
import { CommonPage } from "../../helpers/page/commonpage/commonpage";
import { fakerElement } from "../../helpers/faker/faker";
let commonP = new CommonPage();
export function createTextbox() {
  cy.contains("Elements").click();

  // Click on "Text Box" to navigate to the Text Box section //
  cy.contains("Text Box").click();

  // Perform actions on the Text Box page //
  let data = new fakerElement();

  commonP.inputField(textBox().xpath.username, data.username);

  commonP.inputField(textBox().xpath.email, data.email);

  commonP.inputField(textBox().xpath.currentAddress, data.currentAddress);

  commonP.inputField(textBox().xpath.permanentAddress, data.permanentAddress);

  commonP.clickButton(textBox().xpath.submit);

  // validate the name on the text box //
  cy.get(textBox().xpath.name).contains("Nikunj Basnet");
  cy.get(textBox().xpath.user_email).contains("test@gmail.com");
}
