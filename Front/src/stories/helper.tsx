import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
export const helper = (state: any, component: React.ReactNode) => {
    return <Provider store={state}><BrowserRouter>{component}</BrowserRouter></Provider>
}