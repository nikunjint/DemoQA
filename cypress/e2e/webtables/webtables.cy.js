import { createWebtables } from "../../pageobject/webtables/webtablesObj";
describe("Verify the checkbox page is working properly or not", () => {
  beforeEach(() => {
    /// Navigate to the main page//
    cy.visit(Cypress.env("url"));
  });

  it("Should visit the element page", () => {
    createWebtables();
  });
});
