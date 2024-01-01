import { isTodayDate } from "./isTodayDate";

describe('isTodayDate redux state', () => {

    test('test with default state', () => {
        expect(isTodayDate({})).toBe(false)
    });

    test('test with true state', () => {
        expect(isTodayDate({
            DaysPage: {
                isTodayDate: true
            }
        })).toBe(true)
    });

});



