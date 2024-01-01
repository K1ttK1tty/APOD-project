import axios from "axios";
import { IFetchData, IFetchTodayData } from "../Types/Types";
export default class DateService {

    static async getToday() {
        try {
            const URL = 'http://localhost:3001/api/today';
            const response = await axios.get<IFetchTodayData>(URL)
                .then(res => res.data)
            return response
        } catch (err) {
            return;
        }
    }

    static async getCurrentData(date: string) {
        try {
            const URL = `http://localhost:3001/api/chosen?data=` + date;
            const response = await axios.get<IFetchData>(URL)
                .then(res => res.data)
            return response

        } catch (err) {
            return;
        }
    }

}
