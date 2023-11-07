import { createRadiobox } from "../../pageobject/radiobox/radioboxObj";
describe("Verify the checkbox page is working properly or not", () => {
  beforeEach(() => {
    /// Navigate to the main page//
    cy.visit(Cypress.env("url"));
  });

  it("Should visit the element page", () => {
    createRadiobox();
  });
});
