import { Elements } from "../../helpers/xpathandassertions/textbox/textbox";
import { createcheckBox } from "../../pageobject/checkbox/checkboxObj";
describe("Verify the checkbox page is working properly or not", () => {
  beforeEach(() => {
    /// Navigate to the main page//
    cy.visit(Cypress.env("url"));
  });

  it("Should visit the element page", () => {
    createcheckBox();
  });
});
