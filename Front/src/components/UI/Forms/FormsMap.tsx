import { FC } from 'react';
import Forms from './Forms';
import '../../../styles/Archive.scss'
import Button from '@mui/material/Button';
import { IFormsMapProps } from '../../../Types/Types';
import { MUIBtn } from '../../../MaterialStyleConsts/Consts';
import { formHandler } from '../../../Functions/formHandler';
import { daysArray, monthsArray, yearsArray } from '../../../GlobalConsts/GlobalConsts';
import { IFormsMapClickProps } from '../../../Types/Types';
// redux
import { archiveSlice } from '../../../store/reducers/ArchiveReducer';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchChosenData } from '../../../store/reducers/ActionCreator';
const FromsMap: FC<IFormsMapProps> = function ({ setErrorMessage }) {
    const dispatch = useAppDispatch()
    const { ChosenYear, ChosenMonth, ChosenDay } = useAppSelector(state => state.ArchiveReducer)
    const { setIsFormHandlerError, setChosenYear, setChosenMonth, setChosenDay } = archiveSlice.actions

    const allData = [
        { id: 'year', name: 'Год', array: yearsArray, state: ChosenYear, handler: setChosenYear },
        { id: 'month', name: 'Месяц', array: monthsArray, state: ChosenMonth, handler: setChosenMonth },
        { id: 'day', name: 'День', array: daysArray, state: ChosenDay, handler: setChosenDay },
    ]

    const clickHandler = (newState: IFormsMapClickProps) => {
        if (formHandler(ChosenDay, ChosenMonth, ChosenYear) === false) {
            setErrorMessage({ open: true, ...newState })
            dispatch(setIsFormHandlerError(true));
        } else {
            const date = ChosenYear + '-' + ChosenMonth + '-' + ChosenDay;
            dispatch(setIsFormHandlerError(false));
            dispatch(fetchChosenData(date))
        }
    }

    return (
        <div className='forms'>
            {allData.map(item => <div key={item.name} className='forms-item'><Forms  item={item} /></div >)}
            <Button
                onClick={() => clickHandler({ vertical: 'top', horizontal: 'center' })}
                variant='contained'
                style={MUIBtn}
                data-testid='Archive-button-send'
                children={'Send'}
            />
        </div>
    )
};
export default FromsMap;