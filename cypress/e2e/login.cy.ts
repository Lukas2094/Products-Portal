describe("Login Test", () => {
    it("logs in successfully", () => {
        const baseUrl = Cypress.env('ENV') === 'production' 
            ? 'https://products-portal-one.vercel.app' 
            : 'http://localhost:3000';
        
        cy.visit(`${baseUrl}/login`);
        cy.get('input[type="text"]').type("Codako");
        cy.get('input[type="password"]').type("Teste123@");
        cy.get("button").click();
        cy.url().should("include", "/products");
    });
});
