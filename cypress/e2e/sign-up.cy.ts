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
});
