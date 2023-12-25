import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import Kontak from "./kontak";
describe("Kontak", () => {
    it("renders Kontak", () => {
        render(<Kontakontak />);
        expect(screen.getByText("Beranda")).toBeInTheDocument();
        expect(screen.getByText("Tentang")).toBeInTheDocument();
        expect(screen.getByText("Kontak")).toBeInTheDocument();
        expect(screen.getByText("Beranda")).toBeInTheDocument();
        expect(screen.getByText("Rafi Ramadhan Pratama")).toBeInTheDocument();
    })
})
