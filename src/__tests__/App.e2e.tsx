describe("E2E Test", () => {
  it("Visit My Local Application", () => {
    cy.visit("http://localhost:3000");

    cy.get('#root').should('be.visible');

    cy.getByTestId("count_button").click();
    cy.getByTestId("count_value").should("contain.text", 1);
  });
});
