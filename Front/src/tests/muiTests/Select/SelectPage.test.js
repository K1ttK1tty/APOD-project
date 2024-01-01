import { render, screen, fireEvent } from "@testing-library/react";
import SelectPage from "./SelectPage";
import '@testing-library/jest-dom'

describe('Select test', () => {

    test("example test, get value '20'", () => {
        render(<SelectPage />)
        fireEvent.change(screen.getByTestId("input-test-id"), { target: { value: "20" } })
        const test = screen.getByText("20")
        expect(test).toBeInTheDocument();
    });

});

