import { faker } from "@faker-js/faker";
import PokemonDetail from "."
import { fetchPokemonDetail } from "../../services/PokemonServices"
import { render, screen } from "@testing-library/react";
import * as rrd from "react-router-dom";

const mockFn = vi.fn(fetchPokemonDetail);
const mockFetchPokemonDetailFn = mockFn.mockImplementation(async () => {
    return {
        id: 1,
        image: faker.image.url(),
        name: "Pikachu",
        type: "Eletrico",
    }
})

describe("Testa o component PokemonDetail", () => {
    vi.mock("react-router-dom", () => {
        return {
            useParams: () => ({
                id: 1,
            }),
            Link: vi.fn().mockImplementation((props) => props.children),
        };
    });
    
    test("Deve haver um título na página", async () => {
        render(<PokemonDetail fetchPokemonDetail={mockFetchPokemonDetailFn} />)

        const pikachu = await screen.findByText("Pikachu");
        expect(pikachu).toBeInTheDocument();
    })

    test("Deve haver um link para voltar", async () => {
        render(<PokemonDetail fetchPokemonDetail={mockFetchPokemonDetailFn} />)

        const linkBack = await screen.findByText("Voltar");
        expect(linkBack).toBeInTheDocument(); 
    })

    test("Quando não vier parâmetro válido", async () => {

        vi.spyOn(rrd, "useParams").mockImplementationOnce(() => ({
            id: "0"
        }))

        render(<PokemonDetail fetchPokemonDetail={mockFetchPokemonDetailFn} />)

        const errorText = await screen.findByText("O id não é válido!");
        expect(errorText).toBeInTheDocument(); 
    })
})