import { faker } from "@faker-js/faker"
import type { PokemonType } from "../types/PokemonType"
import { fetchPokemonDetail, fetchPokemonList } from "./PokemonServices";

global.fetch = vi.fn();

function createFetchResponse(data: any) {
    return { json: () => new Promise((resolve) => resolve(data))};
}

describe("Testa o service PokemonService", () => {

    test("Verifica se foi feito um get list para a url correta",async () => {
        const pokemonListResponse: PokemonType[] = [
            {
                id: 1,
                image: faker.image.url(),
                name: faker.animal.bear.name,
                type: faker.animal.type(),
            },
            {
                id: 2,
                image: faker.image.url(),
                name: faker.animal.bear.name,
                type: faker.animal.type(),
            },
        ];

        fetch.mockResolvedValue(createFetchResponse(pokemonListResponse));

        const pokemonList = await fetchPokemonList();

        expect(fetch).toHaveBeenCalledWith("http://localhost:3000/pokemon");
        expect(pokemonList).toStrictEqual(pokemonListResponse);
    })

    test("Verifica se foi feito um get detail para a url correta",async () => {
        const pokemonDetailResponse: PokemonType = [
            {
                id: 1,
                image: faker.image.url(),
                name: faker.animal.bear.name,
                type: faker.animal.type(),
            }
        ];

        fetch.mockResolvedValue(createFetchResponse(pokemonDetailResponse));

        const pokemon = await fetchPokemonDetail(1);

        expect(fetch).toHaveBeenCalledWith("http://localhost:3000/pokemon/1");
        expect(pokemon).toStrictEqual(pokemonDetailResponse);
    })
})