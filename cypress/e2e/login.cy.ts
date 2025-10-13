describe('Testa a página de login', () => {
  it('Quando clicar em login, deve ir para a página Dashboard', () => {
    cy.visit('/')

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    })

    cy.contains("Login").click();
    cy.contains("Dashboard");
  })

  it('Quando clicar em login, deve ir um pokemon Pikachu', () => {
    cy.visit('/')

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    })

    cy.contains("Login").click();
    cy.contains("Pikachu");
  })

  it('Quando clicar em Sign Up, deve ir para a página de cadastre-se', () => {
    cy.visit('/')

    cy.contains("Não tem cadastro? Clique aqui!").click();
    cy.contains("Cadastre-se");
  })
})