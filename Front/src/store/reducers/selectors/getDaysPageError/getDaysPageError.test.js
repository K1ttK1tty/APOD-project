import { getDaysPageError } from "./getDaysPageError";

describe('getDaysPageError', () => {
    test('work with empty state', () => {
        expect(getDaysPageError({})).toBe('')
    });
    test('work with filled state', () => {
        expect(getDaysPageError({
            DaysPage: {
                fetchError: 'error'
            }
        })).toBe('error')
    });

});



