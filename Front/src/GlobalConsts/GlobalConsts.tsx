const dateObj = new Date;
export const year = dateObj.getFullYear();

//Archive consts
export const yearsArray = Array(year - 1994).fill(0).map((el, index) => year - index + '');
export const monthsArray = Array(12).fill(0).map((el, index) => index + 1 + '');
export const daysArray = Array(31).fill(0).map((el, index) => (index + 1 + ''));


export const stylesForFOG = { // vanta effect
    highlightColor: 0x0,
    midtoneColor: 0xb0b0b9,
    lowlightColor: 0x0,
    baseColor: 0x0,
    blurFactor: 0.47,
    speed: 1.3,
    zoom: 0.20
};