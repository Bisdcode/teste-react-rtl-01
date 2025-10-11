import { useEffect, useState } from "react"
import styles from "./styles.module.css"
import type { PokemonType } from "../types/PokemonType"

interface IProps {
    fetchPokemonList: () => Promise<PokemonType[]>;
}

export default function Dashboard({fetchPokemonList}: IProps) {
    const [pokemons, setPokemons] = useState<PokemonType[]>([]);
    
    useEffect(() => {
        (async () => {
            const data = await fetchPokemonList();
            setPokemons(data);
        })()
    }, []);

    return (
        <div className={styles.container}>
            <h1>Dashboard</h1>

            <ul className={styles["container-pokemons"]}>
                {pokemons.map((pokemons) => (
                    <li key={pokemons.id}>
                        <h1>{pokemons.name}</h1>
                        <img src={pokemons.image} alt={pokemons.name} />
                        <strong>{pokemons.type}</strong>
                    </li>
                ))}
            </ul>
        </div>
    )
}