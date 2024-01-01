import { screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import classes from './components/UI/NavMenu/NavMenu.module.scss'
import { renderWithReduxAndRoute } from "./tests/helpers/renderWithReduxAndRoute";
import App from "./App";
describe('App component test', () => {
    const mobileMenuOpenClass = [classes.mobileMenu, classes._active].join(' ');

    test('switching between pages with mobile menu', () => {
        renderWithReduxAndRoute(<App />)
        const button = screen.getByTestId('open/close-mobileMenu')
        userEvent.click(button)
        userEvent.click(screen.getByTestId('daysPage-link-mobile'))
        expect(screen.getByTestId('daysPage-page')).toBeInTheDocument()
        userEvent.click(button)
        userEvent.click(screen.getByTestId('archive-link-mobile'))
        expect(screen.getByTestId('archive-page')).toBeInTheDocument()
        userEvent.click(button)
        userEvent.click(screen.getByTestId('main-link-mobile'))
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    });

    test('open/close mobile menu', () => {
        renderWithReduxAndRoute(<App />)

        const button = screen.getByTestId('open/close-mobileMenu')
        const mobileMenu = screen.getByTestId('mobile-menu')
        expect(mobileMenu).toHaveClass(classes.mobileMenu)
        userEvent.click(button)
        expect(mobileMenu).toHaveClass(mobileMenuOpenClass)
        userEvent.click(button)
        expect(mobileMenu).toHaveClass(classes.mobileMenu)
    })

    test('close mobile menu with click on mainPage link', () => {
        renderWithReduxAndRoute(<App />);

        const button = screen.getByTestId('open/close-mobileMenu')
        const mobileMenu = screen.getByTestId('mobile-menu')
        expect(mobileMenu).toHaveClass(classes.mobileMenu)
        userEvent.click(button)
        expect(mobileMenu).toHaveClass(mobileMenuOpenClass)
        userEvent.click(screen.getByTestId('main-link-mobile'))
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
        expect(mobileMenu).toHaveClass(classes.mobileMenu)
    });

    test('close mobile menu with click on daysPage link', () => {
        renderWithReduxAndRoute(<App />)

        const button = screen.getByTestId('open/close-mobileMenu')
        const mobileMenu = screen.getByTestId('mobile-menu')
        expect(mobileMenu).toHaveClass(classes.mobileMenu)
        userEvent.click(button)
        expect(mobileMenu).toHaveClass(mobileMenuOpenClass)
        userEvent.click(screen.getByTestId('daysPage-link-mobile'))
        expect(screen.getByTestId('daysPage-page')).toBeInTheDocument()
        expect(mobileMenu).toHaveClass(classes.mobileMenu)
    });

    test('close mobile menu with click on archive link', () => {
        renderWithReduxAndRoute(<App />)

        const button = screen.getByTestId('open/close-mobileMenu')
        const mobileMenu = screen.getByTestId('mobile-menu')
        expect(mobileMenu).toHaveClass(classes.mobileMenu)
        userEvent.click(button)
        expect(mobileMenu).toHaveClass(mobileMenuOpenClass)
        userEvent.click(screen.getByTestId('archive-link-mobile'))
        expect(screen.getByTestId('archive-page')).toBeInTheDocument()
        expect(mobileMenu).toHaveClass(classes.mobileMenu)
    });

    test('close mobile menu with click on App component', () => {
        renderWithReduxAndRoute(<App />)

        const button = screen.getByTestId('open/close-mobileMenu')
        const mobileMenu = screen.getByTestId('mobile-menu')
        expect(mobileMenu).toHaveClass(classes.mobileMenu)
        userEvent.click(button)
        expect(mobileMenu).toHaveClass(mobileMenuOpenClass)
        userEvent.click(screen.getByTestId('App-component'))
        expect(mobileMenu).toHaveClass(classes.mobileMenu)
    });

    test('close mobile menu with press Escape', () => {
        renderWithReduxAndRoute(<App />)
        const button = screen.getByTestId('open/close-mobileMenu')
        const mobileMenu = screen.getByTestId('mobile-menu')
        const appComponent = screen.getByTestId('App-component')
        expect(mobileMenu).toHaveClass(classes.mobileMenu)
        userEvent.click(button)
        expect(mobileMenu).toHaveClass(mobileMenuOpenClass)
        fireEvent.keyDown(appComponent, { key: 'Escape' })
        expect(mobileMenu).toHaveClass(classes.mobileMenu)

    });

})