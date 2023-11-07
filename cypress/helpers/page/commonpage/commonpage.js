export class CommonPage {
  inputField(xpath, value) {
    cy.get(xpath, { timeout: 6000 })
      .clear({ force: true })
      .type(value)
      .should("have.value", value);
  }

  clickButton(xpath) {
    cy.get(xpath, { timeout: 6000 }).should("exist").click();
  }

  clicksidearrow(xpath) {
    cy.get(xpath).click();
  }

  clickdownarrow(xpath) {
    cy.get(xpath).click();
  }

  clicksubdownarrow(xpath) {
    cy.get(xpath).click({ force: true });
  }

  radiobutton(xpath) {
    cy.get(xpath).click({ force: true });
  }

  add(xpath) {
    cy.get(xpath).should("exist").click({ force: true });
  }

  search(xpath, value) {
    cy.get(xpath).type(value).should("have.value", value);
  }

  validateSearch(xpath, value) {
    cy.get(xpath).should("have.value", value, { timeout: 6000 });
  }

  editButton(xpath) {
    cy.get(xpath).click({ force: true });
  }

  delete(xpath) {
    cy.get(xpath).click({ force: true });
  }
}
