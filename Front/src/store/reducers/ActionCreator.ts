import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFetchTodayData } from "../../Types/Types";
export const fetchToday = createAsyncThunk(
    'fetchTodayData',
    async (_, thunkAPI) => {
        try {
            const URL = 'http://localhost:3001/api/today';
            const response = await axios.get<IFetchTodayData>(URL)
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue('Произошла ошибка при запросе на сервер :(')
        }
    }
)
export const fetchChosenData = createAsyncThunk(
    'fetchChosenData',
    async (chosenData: string, thunkAPI) => {
        try {
            const URL = 'http://localhost:3001/api/chosen?data=' + chosenData;
            const response = await axios.get<IFetchTodayData>(URL)
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue('Произошла ошибка при запросе на сервер :(')
        }
    }
)