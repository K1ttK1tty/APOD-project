export function yesterdayData(){
    const dateObj = new Date;
    const year = dateObj.getFullYear();
    const date = new Date();
    const day = date.getDate() - 1;
    const month = date.getMonth() + 1;
    return year + '-' + month + '-' + day
}