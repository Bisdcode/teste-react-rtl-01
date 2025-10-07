import styles from "./styles.module.css"

export default function Login() {
    return (
        <div className={styles.container}>
            <h2>Sign In</h2>

            <form >
                <input type="text" placeholder="Insira seu e-mail" />
                <input type="text" placeholder="Insira sua senha" />
                <button>Login</button>
            </form>
        </div>
    )
}