import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { IArchiveState } from "../../Types/Types";
import { fetchChosenData } from "./ActionCreator";
import { IFetchData } from "../../Types/Types";
const initialState: IArchiveState = {
    isFormHandlerError: false,
    ChosenYear: '',
    ChosenMonth: '',
    ChosenDay: '',
    isLoading: false,
    error: '',
    chosenData: {
        date: '',
        url: '',
        explanation: '',
        title: '',
        copyright: '',
        media_type: ''
    }
}

export const archiveSlice = createSlice({
    name: 'archiveSlice',
    initialState,
    reducers: {
        setIsFormHandlerError(state, action: PayloadAction<boolean>) {
            state.isFormHandlerError = action.payload
        },
        setChosenYear(state, action: PayloadAction<string>) {
            state.ChosenYear = action.payload
        },
        setChosenMonth(state, action: PayloadAction<string>) {
            state.ChosenMonth = action.payload
        },
        setChosenDay(state, action: PayloadAction<string>) {
            state.ChosenDay = action.payload
        },
        setError(state) {
            state.error = ''
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchChosenData.fulfilled, (state, action: PayloadAction<IFetchData>) => {
            state.error = '';
            if (action.payload.error || !action.payload.data) {
                state.error = 'Произошла ошибка при запросе на сервер :(';
                state.isLoading = false
                return;
            }
            state.isLoading = false
            state.chosenData = action.payload.data;
        })
        builder.addCase(fetchChosenData.pending, (state) => {
            state.error = '';
            state.isLoading = true
        })
        builder.addCase(fetchChosenData.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.error = action.payload
        })
    },
})
export default archiveSlice.reducer

