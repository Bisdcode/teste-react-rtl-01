import { fireEvent, render, screen} from "@testing-library/react"
import Login from "."
import { useNavigate } from "react-router-dom";

const navigateMock = vi.fn();

describe("Testa o component de Login", () => {
    vi.mock("react-router-dom", () => ({
        useNavigate() {
            return navigateMock;
        }
    }));

    test("Deve haver um título escrito 'Sign In'", async () => {
        render(<Login/>)

        const title = await screen.findByRole("heading", {
            name: "Sign In",
        })

        expect(title).toBeInTheDocument();
    });

    test("Deve haver dois inputs na minha tela", async () => {
        render(<Login/>)

        const inputs = await screen.findAllByRole("textbox")

        expect(inputs).toHaveLength(2);
    });

    test("Deve haver um botão na minha tela", async () => {
        render(<Login/>)

        const button = await screen.findByRole("button")

        expect(button.textContent).toBe("Login");
    });

    test("Deve haver um input para e-mail", async () => {
        render(<Login/>)

        const inputEmail = await screen.findByPlaceholderText("Insira seu e-mail");

        expect(inputEmail).toBeInTheDocument();
    })

    test("Deve haver um input para senha", async () => {
        render(<Login/>)

        const inputPassword = await screen.findByPlaceholderText("Insira sua senha");

        expect(inputPassword).toBeInTheDocument();
    })

    test("Deve haver um input para senha", async () => {
        render(<Login/>)

        const button = await screen.findByRole("button");
        fireEvent.click(button)

        expect(navigateMock).toHaveBeenCalledTimes(1);
    })
})