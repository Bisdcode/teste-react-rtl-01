import { render, screen} from "@testing-library/react"
import Login from "."

describe("Testa o component de Login", () => {

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
})