import { textBox } from "../../helpers/xpathandassertions/textbox/textbox";
import { createTextbox } from "../../pageobject/textbox/textboxObj";
describe("Verify the elements page is working properly or not", () => {
  beforeEach(() => {
    /// Navigate to the main page//
    cy.visit(Cypress.env("url"));
  });

  it("Should visit the element page", () => {
    createTextbox();
  });
});
