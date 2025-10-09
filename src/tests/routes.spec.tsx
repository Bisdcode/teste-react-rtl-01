import { MemoryRouter } from "react-router-dom"
import MainRoutes from "../routes"
import { render, screen } from "@testing-library/react"

describe("Testa o componente MainRouters", () => {

    test("Deve renderizar a página de login", async () => {
        render(<MemoryRouter initialEntries={["/"]}>
            <MainRoutes/>
        </MemoryRouter>)

        const title = await screen.findByRole('heading', {
            name: "Sign In",
        });

        expect(title).toBeInTheDocument();
    })

    test("Deve renderizar a página de Cadastro", async () => {
        render(<MemoryRouter initialEntries={["/sign-up"]}>
            <MainRoutes/>
        </MemoryRouter>)

        const title = await screen.findByRole('heading', {
            name: "Cadastre-se",
        });

        expect(title).toBeInTheDocument();
    })

    test("Deve renderizar a página de Dashboard", async () => {
        render(<MemoryRouter initialEntries={["/dashboard"]}>
            <MainRoutes/>
        </MemoryRouter>)

        const title = screen.getByText("Dashboard");

        expect(title).toBeInTheDocument();
    })

    test("Deve renderizar a página de Erro 404", async () => {
        render(<MemoryRouter initialEntries={["/qualquerRota"]}>
            <MainRoutes/>
        </MemoryRouter>)

        const title = screen.getByText("404 Page Not Found");

        expect(title).toBeInTheDocument();
    })
})