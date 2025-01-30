describe("Login Test", () => {
    it("logs in successfully", () => {
        cy.visit("http://localhost:3000/login");
        cy.get('input[type="text"]').type("Codako");
        cy.get('input[type="password"]').type("Teste123@");
        cy.get("button").click();
        cy.url().should("include", "/products");
    });
});
