import { render, screen } from "@testing-library/react"
import Dashboard from "."
import { fetchPokemonList } from "../services/PokemonServices"
import {faker} from "@faker-js/faker";

const mockFetchListPokemonFn = vi.fn(fetchPokemonList).mockImplementation(async () => {
    return [
        {
            id: 1,
            name: "Pikachu",
            image: faker.image.url(),
            type: "Eletrico",
        }
    ] 
})

describe("Testa o component de Dashboard", () => {

    test("Deve haver um título escrito 'Dashboard'", async () => {
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn}/>)

        const title = await screen.findByRole("heading")

        expect(title).toHaveTextContent("Dashboard");
    })

    test("Deve haver uma lista com 10 pokemons", async () => {
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn}/>)

        const items = await screen.findAllByRole("listitem");

        expect(items).toHaveLength(1);
    })
})