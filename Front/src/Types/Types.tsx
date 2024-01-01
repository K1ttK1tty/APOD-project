import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
export interface IDataObject {
    copyright?: string;
    date: string;
    url: string;
    explanation: string;
    title: string;
    media_type: string;
    hdurl?: string;
}

export interface IFormsProps {
    item: IFormsObject;
}
interface IFormsObject {
    state: string;
    id: string;
    name: string;
    handler: ActionCreatorWithPayload<string>
    array: string[];
}

export interface IState {
    open: boolean;
    vertical: 'top';
    horizontal: 'center';
}

export interface ISnackProps {
    setErrorMessage: (a: IState) => void;
    errorMessage: IState;
    error: string;
}

export interface IFormsMapProps {
    setErrorMessage: (a: IState) => void;
}
export interface IDataDisplayProps {
    data: IDataObject;
    isDaysPage: boolean;
}

export interface IIsMobileMenu {
    menuOpen: boolean;
    isMount: boolean;
    isPreloader: boolean;
}

export interface IArchiveState {
    isFormHandlerError: boolean;
    ChosenYear: string;
    ChosenMonth: string;
    ChosenDay: string;
    isLoading: boolean;
    chosenData: IDataObject;
    error: string;
}
export interface IFetchData {
    data: IDataObject;
    error: string;
}
export interface IFetchTodayData {
    data: IDataObject;
    error: string;
    today: boolean;
}
export interface IDaysPageState {
    fetchError: string;
    isTodayDate: boolean;
    data: IDataObject;
}
export interface IFormsMapClickProps {
    vertical: 'top';
    horizontal: 'center';
}
export interface IDaysPageError {
    title: string;
    alt: string;
}
export interface IDaysPageContent {
    data: IDataObject;
    translatedData: IDataObject | undefined;
    fetchError: string;
}