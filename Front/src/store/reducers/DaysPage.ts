import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IDaysPageState, IFetchTodayData } from "../../Types/Types";
import { fetchToday } from "./ActionCreator";
const initialState: IDaysPageState = {
    fetchError: '',
    isTodayDate: false,
    data: {
        date: '',
        url: '',
        explanation: '',
        title: '',
        copyright: '',
        media_type: ''
    }
}

export const daysPageSlice = createSlice({
    name: 'daysPageSlice',
    initialState,
    reducers: {
        setFetchError(state, action: PayloadAction<string>) {
            state.fetchError = action.payload
        },
        setIsTodayDate(state, action: PayloadAction<boolean>) {
            state.isTodayDate = action.payload
        }
    },

    extraReducers(builder) {
        builder.addCase(fetchToday.fulfilled, (state, action: PayloadAction<IFetchTodayData>) => {
            if (action.payload.error || !action.payload.data) {
                state.fetchError = 'Произошла ошибка при запросе на сервер :(';
                return;
            }
            state.isTodayDate = action.payload.today
            state.fetchError = '';
            state.data = action.payload.data;
        })
        builder.addCase(fetchToday.rejected, (state, action: PayloadAction<any>) => {
            state.fetchError = action.payload;
        })
    },
})
export default daysPageSlice.reducer