import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import Tentang from "./tentang";
describe("Tentang", () => {
    it("renders Tentang", () => {
        render(<Tentang />);
        expect(screen.getByText("Beranda")).toBeInTheDocument();
        expect(screen.getByText("Tentang")).toBeInTheDocument();
        expect(screen.getByText("Kontak")).toBeInTheDocument();
        expect(screen.getByText("Rafi Ramadhan Pratama")).toBeInTheDocument();
    })
})