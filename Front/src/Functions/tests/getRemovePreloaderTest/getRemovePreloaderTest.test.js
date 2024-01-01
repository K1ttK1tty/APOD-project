import GetRemovePreloaderTest from "./GetRemovePreloaderTest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import { renderWithReduxAndRoute } from "../../../tests/helpers/renderWithReduxAndRoute";

describe('getRemovePreloader function', () => {

    test('test', async () => {
        renderWithReduxAndRoute(<GetRemovePreloaderTest />)
        expect(screen.getByText(/2/i))
        userEvent.click(screen.getByTestId('button'))
        const element = await screen.findByText(/1/i)
        expect(element)
    });
});

