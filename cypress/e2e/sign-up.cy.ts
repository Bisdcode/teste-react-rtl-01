describe("Testa a página de Sign Up", () => {
    it("Quando clicar em 'Já tem cadastro...', deve ir para tela de Login", () => {
        cy.visit("/sign-up");

        cy.contains("Já tem cadastro? Clique aqui!").click();
        cy.contains("Login");
    })
})