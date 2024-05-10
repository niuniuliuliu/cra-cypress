import React from "react";
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import App from "../../../src/App";

When("I open App page", () => {
  cy.mount(<App />);
});

Then("I click button with test id {string}", (testId: string) => {
  cy.getByTestId(testId).click();
});

Then("the value should equal {int}", (value: number) => {
  cy.getByTestId("count_value").should("contain.text", value);
});
