import { getTodayDate } from "../getTodayDate";
import { formHandler } from "../formHandler";

describe('Functions tests', () => {

    test('getTodayData test', () => {
        expect(getTodayDate()).toBe('2023-3-31') // хрень
    })

    test('form handler with empties fields', () => {
        expect(formHandler('', '', '')).toBe(false)
    });

    test('form handler with two empties fields', () => {
        expect(formHandler('', '3', '2022')).toBe(false)
    });

    test('form handler with one empty field', () => {
        expect(formHandler('12', '', '2022')).toBe(false)
    });

    test('form handler with future date', () => {
        expect(formHandler('15', '06', '2024')).toBe(false)
    });
    
    test('form handler with OLD date', () => {
        expect(formHandler('15', '06', '1995')).toBe(false)
    });
})