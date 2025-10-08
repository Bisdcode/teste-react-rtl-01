import type { FormEvent } from "react"
import styles from "./styles.module.css"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        navigate("/dashboard");
    }

    return (
        <div className={styles.container}>
            <h2>Sign In</h2>

            <form >
                <input type="text" placeholder="Insira seu e-mail" />
                <input type="text" placeholder="Insira sua senha" />
                <button onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}