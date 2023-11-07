import { webTables } from "../../helpers/xpathandassertions/webtables/webtables";
import { CommonPage } from "../../helpers/page/commonpage/commonpage";
import { fakerwebTables } from "../../helpers/faker/faker";
import { fakerEditwebTables } from "../../helpers/faker/faker";
let commonP = new CommonPage();
export function createWebtables() {
  let dataWebTable = fakerwebTables();
  cy.contains("Elements").click();

  cy.contains("Web Tables").click();

  //add the user list//

  commonP.add(webTables().xpath.add);

  //fill the form//

  commonP.inputField(webTables().xpath.first_name, dataWebTable.firstname);
  commonP.inputField(webTables().xpath.last_name, dataWebTable.lastname);
  commonP.inputField(webTables().xpath.user_email, dataWebTable.email);
  commonP.inputField(webTables().xpath.age, dataWebTable.age);
  commonP.inputField(webTables().xpath.salary, dataWebTable.salary);
  commonP.inputField(webTables().xpath.department, dataWebTable.department);
  commonP.add(webTables().xpath.submit);

  cy.wait(1500);
  //search the given data//
  commonP.search(webTables().xpath.search, dataWebTable.search);

  //validate the search data//
  // commonP.validateSearch(
  //   webTables().xpath.validate_search,
  //   dataWebTable.tabledata
  // );

  //edit the given form //
  let editData = fakerEditwebTables();
  commonP.editButton(webTables().xpath.edit);
  commonP.inputField(webTables().xpath.first_name, editData.firstname);
  commonP.inputField(webTables().xpath.last_name, editData.lastname);
  commonP.inputField(webTables().xpath.user_email, editData.email);
  commonP.inputField(webTables().xpath.age, editData.age);
  commonP.inputField(webTables().xpath.salary, editData.salary);
  commonP.inputField(webTables().xpath.department, editData.department);
  commonP.add(webTables().xpath.submit);
  commonP.delete(webTables().xpath.delete);
}
