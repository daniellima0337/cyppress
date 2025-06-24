import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Estou na página inicial do SauceDemo", () => {
  cy.visit("https://www.saucedemo.com/v1/");
});

When("Informo credenciais corretas", () => {
  cy.fixture("users").then((users) => {
    cy.get("#user-name").type(users.validUser.username);
    cy.get("#password").type(users.validUser.password);
    cy.get("#login-button").click();
  });
});

When("Informo credenciais inválidas", () => {
  cy.fixture("users").then((users) => {
    cy.get("#user-name").type(users.invalidUser.username);
    cy.get("#password").type(users.invalidUser.password);
    cy.get("#login-button").click();
  });
});

Then("Devo visualizar a página de produtos", () => {
  cy.url().should("include", "/inventory.html");
  cy.get(".inventory_list").should("be.visible");
});

Then("Devo visualizar uma mensagem de erro", () => {
  cy.get("[data-test='error']").should("be.visible");
});

Given("Já estou autenticado no sistema", () => {
  cy.visit("https://www.saucedemo.com/v1/");
  cy.fixture("users").then((users) => {
    cy.get("#user-name").type(users.validUser.username);
    cy.get("#password").type(users.validUser.password);
    cy.get("#login-button").click();
  });
});

When("Acesso o menu e seleciono sair", () => {
  cy.get(".bm-burger-button").click();
  cy.get("#logout_sidebar_link").click();
});

Then("Devo ser redirecionado para a tela de login", () => {
  cy.url().should("include", "index.html");
});
