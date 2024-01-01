import { year } from "../GlobalConsts/GlobalConsts";
export const getTodayDate = () => {
    const date = new Date();
    const day = date.getDate();
    const currentMonth = date.getMonth() + 1;
    return year + '-' + currentMonth + '-' + day
}