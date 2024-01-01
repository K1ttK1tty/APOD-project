import { isMount } from "./isMount";

describe('isMount redux state', () => {

    test('test with default value', () => {
        expect(isMount({})).toBe(false)
    });


});
