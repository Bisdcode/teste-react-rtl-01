import { Link, useParams } from "react-router-dom";
import type { PokemonType } from "../../types/PokemonType";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface IProps {
    fetchPokemonDetail: (id: number) => Promise<PokemonType>
}

export default function PokemonDetail({fetchPokemonDetail}: IProps) {
    const params = useParams();
    const [error, setError] = useState("");

    const [pokemon, setPokemon] = useState<PokemonType>({
        id: 0,
        image: "",
        name: "",
        type: "",
    })

    useEffect(() => {

        (async() => {
            setError("");

            if(!params.id || params.id === '0') {
                let error = "O id não é válido!";
                setError(error)
                return console.log(error);
            }

            const data = await fetchPokemonDetail(parseInt(params.id));

            setPokemon(data);
        })()

    },[])

    return (
        <div className={styles.container}>
            <div>
                <h1>{pokemon.name}</h1>
                <img src={pokemon.image || undefined} alt={pokemon.name} />
                <strong>{pokemon.type}</strong>
            </div>
            <Link to="/dashboard">Voltar</Link>
            {error && <strong>{error}</strong>}
        </div>
    )
}