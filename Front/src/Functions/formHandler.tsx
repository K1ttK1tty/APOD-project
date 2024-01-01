import { getTodayDate } from "./getTodayDate"
import * as validateDate from 'validate-date'
export const formHandler = (currentDay: string, currentMonth: string, currentYear: string) => {

    const today = getTodayDate()
    let month = currentMonth;
    let day = currentDay;
    if (Number(month) < 10) month = '0' + month;
    if (Number(day) < 10) day = '0' + day;
    const lowerDate = new Date('1995-06-16')
    const highDate = new Date(today)
    const currentDate = new Date(`${currentYear}-${month}-${day}`)
    if (currentDate.getTime() >= lowerDate.getTime() && currentDate.getTime() < highDate.getTime() + 24 * 60 * 60 * 1000) {

        return validateDate(`${day}/${month}/${currentYear}`,
            validateDate.responseType = "boolean", validateDate.dateFormat = "dd/mm/yyyy")

    } else return false
}