import { Provider } from "react-redux";
import { setupStore } from "../../store/store";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
export const renderWithReduxAndRoute = (component, initialValue) => {
    const store = setupStore(initialValue)
    return (

        render(
            <Provider store={store}>
                <MemoryRouter>
                    {component}
                </MemoryRouter>
            </Provider>
        )

    )
}
