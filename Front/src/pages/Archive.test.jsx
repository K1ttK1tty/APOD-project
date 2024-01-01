import { screen } from "@testing-library/react";
import Archive from "./Archive";
import { renderWithReduxAndRoute } from "../tests/helpers/renderWithReduxAndRoute";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
const fetchErrorState = {
    error: 'Произошла ошибка при запросе на сервер :(',
    isFormHandlerError: false,
    ChosenYear: '',
    ChosenMonth: '',
    ChosenDay: '',
    isLoading: false,
    chosenData: {
        date: '',
        url: '',
        explanation: '',
        title: '',
        copyright: '',
        media_type: ''
    }
}

const stateWithDataVideo = {
    isFormHandlerError: false,
    ChosenYear: '',
    ChosenMonth: '',
    ChosenDay: '',
    isLoading: false,
    error: '',
    chosenData: {
        date: 'date',
        url: 'url',
        explanation: 'explanation',
        title: 'title',
        copyright: 'copyright',
        media_type: 'video'
    }
}
const stateWithDataImage = {
    isFormHandlerError: false,
    ChosenYear: '',
    ChosenMonth: '',
    ChosenDay: '',
    isLoading: false,
    error: '',
    chosenData: {
        date: 'date',
        url: 'url',
        explanation: 'explanation',
        title: 'title',
        copyright: 'copyright',
        media_type: 'image'
    }
}
describe('Archive tests', () => {

    test('send with empties selects', () => {
        renderWithReduxAndRoute(<Archive />)
        const button = screen.getByTestId('Archive-button-send')
        userEvent.click(button)

        expect(screen.getByTestId('error-send-alert')).toBeInTheDocument()
        expect(screen.getByTestId('error-send-alert')).toHaveTextContent('Некорректная дата')
    });

    test('fetch error, display alert', () => {
        renderWithReduxAndRoute(<Archive />, {
            ArchiveReducer: fetchErrorState
        })
        expect(screen.getByTestId('error-send-alert')).toBeInTheDocument()
        expect(screen.getByTestId('error-send-alert')).toHaveTextContent('Произошла неизвестная ошибка')
    });

    test('display data with video', () => { 
        renderWithReduxAndRoute(<Archive />, {
            ArchiveReducer: stateWithDataVideo
        })
        expect(screen.getByTestId('dataDisplay-component')).toBeInTheDocument()
        expect(screen.getByTestId('data-media-video')).toBeInTheDocument()
        expect(screen.getByTestId('data-title')).toHaveTextContent('title')
        expect(screen.getByTestId('yesterday-date-message')).toHaveTextContent('')
        expect(screen.getByTestId('data-explanation')).toHaveTextContent('explanation')
    });

    test('display data with image', () => { 
        renderWithReduxAndRoute(<Archive />, {
            ArchiveReducer: stateWithDataImage
        })
        expect(screen.getByTestId('dataDisplay-component')).toBeInTheDocument()
        expect(screen.getByTestId('data-media-img')).toBeInTheDocument()
        expect(screen.getByTestId('data-title')).toHaveTextContent('title')
        expect(screen.getByTestId('yesterday-date-message')).toHaveTextContent('')
        expect(screen.getByTestId('data-explanation')).toHaveTextContent('explanation')
    });

});
