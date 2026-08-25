describe("sign-in authentication", () => {
  it("should successfully login a user and redirect to the dashboard", () => {
    cy.intercept("POST", "/api/auth/**").as("authRequest");

    cy.visit("http://localhost:3000/sign-in");

    cy.get("input[name='email']").type("usuario1234.teste@example.com");
    cy.get("input[name='password']").type("Password123!");
    cy.get("button[type='submit']").click();

    cy.location("pathname", { timeout: 60000 }).should("eq", "/dashboard");

    cy.get("h1", { timeout: 15000 }).should("be.visible");
  });

  it("should display form field error messages if incorrect data is submitted.", () => {
    cy.intercept("POST", "/api/auth/**").as("authRequest");

    cy.visit("http://localhost:3000/sign-in");

    cy.get("input[name='email']").type(" ");
    cy.get("input[name='password']").type("123");
    cy.get("button[type='submit']").click();

    cy.contains("span", "Por favor, insira um e-mail válido.", {
      timeout: 15000,
    }).should("be.visible");

    cy.contains("span", "A senha deve ter pelo menos 6 caracteres.", {
      timeout: 15000,
    }).should("be.visible");
  });

  it("should display a quick message indicating a form submission error.", () => {
    cy.intercept("POST", "/sign-in", (req) => {
      if (req.headers["next-action"]) {
        req.alias = "authRequest";
      }
    });

    cy.visit("http://localhost:3000/sign-in");

    cy.get("input[name='email']").type("usuario12.teste@example.com");
    cy.get("input[name='password']").type("Password1!");

    cy.get("button[type='submit']").click();

    cy.wait("@authRequest");

    cy.get('[data-testid="flash-message-card"]', {
      timeout: 15000,
    })
      .should("be.visible")
      .and(
        "contain.text",
        "Houve um problema na realização do login. Por favor, tente novamente mais tarde.",
      );
  });
});
