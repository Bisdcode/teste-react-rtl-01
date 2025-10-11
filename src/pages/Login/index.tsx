import type { FormEvent } from "react"
import styles from "./styles.module.css"
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        navigate("/dashboard");
    }

    return (
        <div className={styles.container}>

            <form onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                <input type="text" placeholder="Insira seu e-mail" />
                <input type="text" placeholder="Insira sua senha" />
                <button type="submit">Login</button>
                <Link to="/sign-up">Não tem cadastro? Clique aqui!</Link>
            </form>
        </div>
    )
}