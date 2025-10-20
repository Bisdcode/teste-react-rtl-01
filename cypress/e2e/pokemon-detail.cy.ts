describe("Testa a página de detalhes do pokemon", () => {
    it("Deve renderizar um pokemon na nossa tela", () => {
        cy.visit("/pokemon-detail/1");

        cy.intercept("GET", "http://localhost:3000/pokemon/1", {
            fixture: "pokemon-detail.json",
        })

        cy.intercept("Pikachu");
        cy.intercept("Electric");
        cy.get("img").should(
            "have.attr", 
            "src",
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
        )
    })
})