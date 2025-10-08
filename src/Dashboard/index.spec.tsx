import { render, screen } from "@testing-library/react"
import Dashboard from "."

describe("Testa o component de Dashboard", () => {

    test("Deve haver um título escrito 'Dashboard'", async () => {
        render(<Dashboard/>)

        const title = await screen.findByRole("heading")

        expect(title).toHaveTextContent("Dashboard");
    })
})