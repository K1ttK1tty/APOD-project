import { screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import Routing from "./Routing";
import { renderWithReduxAndRoute } from "../tests/helpers/renderWithReduxAndRoute";
import axios from "axios";
import { fetchToday } from "../store/reducers/ActionCreator";
import App from "../App";
import DaysPage from "./DayPage";
jest.mock('axios')
jest.mock('../Functions/translateFromEng')

describe('routing', () => {
    let response;
    const daysPageWithError = {
        fetchError: 'q34fq34f',
        isTodayDate: false,
        data: {
            date: '',
            url: '',
            explanation: '',
            title: '',
            copyright: '',
            media_type: ''
        }
    };
    const sharedData = {
        date: '234',
        url: '234',
        explanation: '234',
        title: '234',
        copyright: '234',
        media_type: '234'
    }

    const daysPageYesterdayDate = {
        fetchError: '',
        isTodayDate: false,
        data: sharedData
    };
    const daysPageTodayDate = {
        fetchError: '',
        isTodayDate: true,
        data: sharedData
    };

    beforeEach(() => {
        response = {
            data: {
                data: {
                    date: '23-03-20',
                    url: 'https://www.youtube.com/embed/wfzz8FUD4TM?rel=0',
                    explanation: 'Are your eyes good enough to see the Crab Nebula',
                    title: 'M1: The Expanding Crab Nebula',
                    copyright: 'Detlef Hartmann',
                    media_type: 'video'
                },
                eror: '',
                today: true
            }
        }
    })

    test('mobile menu back test', () => {
        renderWithReduxAndRoute(<App />)
        // on button
        const button = screen.getByTestId('open/close-mobileMenu')
        userEvent.click(button)
        expect(screen.getByTestId('mobileMenuBack')).toBeInTheDocument()
        userEvent.click(button)
        expect(screen.queryByTestId('mobileMenuBack')).not.toBeInTheDocument()
        
        // between pages
        const daysPageLink = screen.getByTestId('daysPage-link') 
        userEvent.click(button)
        expect(screen.getByTestId('mobileMenuBack')).toBeInTheDocument()
        userEvent.click(daysPageLink)
        expect(screen.queryByTestId('mobileMenuBack')).not.toBeInTheDocument()
    });

    test('switching between pages', () => {
        renderWithReduxAndRoute(<Routing />)
        const daysPageLink = screen.getByTestId('daysPage-link')
        const archiveLink = screen.getByTestId('archive-link')
        const button = screen.getByTestId('open/close-mobileMenu')
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
        userEvent.click(button)
        userEvent.click(daysPageLink)
        expect(screen.getByTestId('daysPage-page')).toBeInTheDocument()
        userEvent.click(button)
        userEvent.click(archiveLink)
        expect(screen.getByTestId('archive-page')).toBeInTheDocument()
    })

    test('get data in App component and display Display component', () => {
        axios.get.mockReturnValue(response)
        renderWithReduxAndRoute(<App />, {
            DaysPage: daysPageYesterdayDate //equal cases for this variable
        })
        const daysPageLink = screen.getByTestId('daysPage-link')
        const newData = fetchToday();
        userEvent.click(daysPageLink)
        expect(screen.getByTestId('dataDisplay-component')).toBeInTheDocument()
        expect(axios.get).toBeCalledTimes(1)
        expect(newData.length).toBe(3);
    });

    test('received error in fetch', () => {
        renderWithReduxAndRoute(<DaysPage />, {
            DaysPage: daysPageWithError
        })
        const errorPage = screen.getByTestId('fetchToday-error-page')
        expect(errorPage).toBeInTheDocument()
    });

    test('received yesterday date', () => {
        renderWithReduxAndRoute(<DaysPage />, {
            DaysPage: daysPageYesterdayDate //equal cases for this variable
        })
        const dataDisplay = screen.getByTestId('dataDisplay-component')
        expect(dataDisplay).toBeInTheDocument()
        const yesterdayMessage = screen.getByTestId('yesterday-date-message')
        expect(yesterdayMessage).toHaveTextContent('(Данных на текущий день еще нет)')
    });

    test('received today date', () => {
        renderWithReduxAndRoute(<DaysPage />, {
            DaysPage: daysPageTodayDate
        })
        const dataDisplay = screen.getByTestId('dataDisplay-component')
        expect(dataDisplay).toBeInTheDocument()
        const yesterdayMessage = screen.getByTestId('yesterday-date-message')
        expect(yesterdayMessage).toHaveTextContent('')
    });

    test('do not received date yet', () => {
        renderWithReduxAndRoute(<DaysPage />)
        const errorPage = screen.getByTestId('fetchToday-error-page')
        expect(errorPage).toBeInTheDocument()
        expect(screen.getByText(/Данных пока нет/i)).toBeInTheDocument()
    });

    afterEach(() => {
        jest.clearAllMocks()
    })
}) 
