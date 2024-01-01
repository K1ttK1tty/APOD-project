import dotenv from 'dotenv'
import axios from 'axios'
dotenv.config()
import { yesterdayData } from './functions/yesterdayData.js'
import { getTodayDate } from './functions/getTodayDate.js'
const URL = process.env.URL
const KEY = process.env.KEY
class DataService {

    async fetchTodayData() {
        const response = await axios.get(URL + KEY + '&date=' + getTodayDate())
            .then(res => res.data)
        return { data: response, eror: '', today: true }
    }

    async fetchYesterdayData() {
        try {
            const response = await axios.get(URL + KEY + '&date=' + yesterdayData())
                .then(res => res.data)
            return { data: response, error: '', today: false }
        } catch (err) {
            return { data: '', error: err.message }
        }
    }

    async fetchChosenData(data) {
        const response = await axios.get(URL + KEY + '&date=' + data)
            .then(res => res.data)
        return { data: response, error: '' }
    }
}
export default new DataService();