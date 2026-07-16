import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  
  const loginPage = require("../../pages/LoginPage");
  
  Given("A web browser is at the saucelabs login page", () => {
    cy.visit("/");
  });
  
  When("A user enters the username from env {string}, the password from env {string}, and clicks on the login button", (userKey: string, passwordKey: string) => {
    const username = Cypress.env(userKey);
    const password = Cypress.env(passwordKey);
    loginPage.submitLogin(username, password);
  });
  
  Then("the url will contains the inventory subdirectory", () => {
    cy.url().should("contains", "/inventory.html");
  });