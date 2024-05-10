import React from "react";
import App from "../App";

it("mounts", () => {
  cy.mount(<App />);
  cy.getByTestId("count_button").click();
  cy.getByTestId("count_value").should("contain.text", 1);
});
