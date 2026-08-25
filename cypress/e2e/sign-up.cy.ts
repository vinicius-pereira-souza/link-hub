import { faker } from "@faker-js/faker";

describe("sign-up authentication", () => {
  it("should successfully register a new user and redirect to the dashboard", () => {
    const dynamicUsername = faker.internet.username().padEnd(6, "0");
    const dynamicEmail = faker.internet.email();

    cy.intercept("POST", "/api/auth/**").as("authRequest");

    cy.visit("http://localhost:3000/sign-up");

    cy.get("input[name='username']").type(dynamicUsername);
    cy.get("input[name='email']").type(dynamicEmail);
    cy.get("input[name='password']").type("Password123!");
    cy.get("input[name='confirmPassword']").type("Password123!");
    cy.get("button[type='submit']").click();

    cy.location("pathname", { timeout: 60000 }).should("eq", "/dashboard");

    cy.get("h1", { timeout: 15000 }).should("be.visible");
  });

  it("should display form field error messages if incorrect data is submitted.", () => {
    cy.intercept("POST", "/api/auth/**").as("authRequest");

    cy.visit("http://localhost:3000/sign-up");

    cy.get("input[name='username']").type(" ");
    cy.get("input[name='email']").type(" ");
    cy.get("input[name='password']").type("123");
    cy.get("input[name='confirmPassword']").type("1234");
    cy.get("button[type='submit']").click();

    cy.contains("span", "O nome de usuário deve ter pelo menos 6 caracteres.", {
      timeout: 15000,
    }).should("be.visible");

    cy.contains("span", "Por favor, insira um e-mail válido.", {
      timeout: 15000,
    }).should("be.visible");

    cy.contains("span", "A senha deve ter pelo menos 6 caracteres.", {
      timeout: 15000,
    }).should("be.visible");

    cy.contains("span", "As senhas precisam ser iguais", {
      timeout: 15000,
    }).should("be.visible");
  });

  it("should display a quick message indicating a form submission error.", () => {
    cy.intercept("POST", "/sign-up", (req) => {
      if (req.headers["next-action"]) {
        req.alias = "authRequest";
      }
    });

    cy.visit("http://localhost:3000/sign-up");

    cy.get("input[name='username']").type("user1234");
    cy.get("input[name='email']").type("usuario1234.teste@example.com");
    cy.get("input[name='password']").type("Password123!");
    cy.get("input[name='confirmPassword']").type("Password123!");

    cy.get("button[type='submit']").click();

    cy.wait("@authRequest");

    cy.get('[data-testid="flash-message-card"]', {
      timeout: 15000,
    })
      .should("be.visible")
      .and(
        "contain.text",
        "Houve um problema na realização do cadastro. Por favor, tente novamente mais tarde.",
      );
  });
});
