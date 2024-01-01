const dateObj = new Date;
const year = dateObj.getFullYear();
export const getTodayDate = () => {
    const date = new Date();
    const day = date.getDate();
    const currentMonth = date.getMonth() + 1;
    return year + '-' + currentMonth + '-' + day
}