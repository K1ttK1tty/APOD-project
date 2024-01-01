import { render, screen, fireEvent } from "@testing-library/react";
import ButtonPage from "./ButtonPage"
import '@testing-library/jest-dom'
test("Clicking the button makes text Clicked! appear on screen", () => {
    render(<ButtonPage />)
    fireEvent.click(screen.getByRole("button", { name: "Click" }));
    expect(screen.getByText("Clicked!")).toBeInTheDocument();
});