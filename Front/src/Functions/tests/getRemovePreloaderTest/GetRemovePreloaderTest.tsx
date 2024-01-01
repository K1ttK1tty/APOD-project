import { useState } from 'react';
import { getRemovePreloader } from '../../getRemovePreloader';
import { useAppDispatch } from '../../../hooks/redux';
const GetRemovePreloaderTest = function () {
    const dispatch = useAppDispatch()
    const [vantaEffect, setVantaEffect] = useState<boolean>(false);
    function setData(e: any) {
        e.stopPropagation()
        getRemovePreloader(setVantaEffect, dispatch)
    }
    return (
        <div >
            <div data-testid='value'>{vantaEffect ? '1' : '2'}</div>
            <button data-testid='button' onClick={setData}>dfg</button>
        </div>
    )
};
export default GetRemovePreloaderTest;