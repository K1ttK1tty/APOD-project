import { FC, useState, useEffect } from 'react';
import '../styles/index.scss'
import '../styles/Archive.scss'
import Footer from '../components/UI/Footer/Footer';
import Loader from '../components/UI/Loader/Loader';
import { IState } from '../Types/Types';
import SnackbarComp from '../components/UI/Snackbar/SnackbarComp';
import FormsMap from '../components/UI/Forms/FormsMap';
import DataDisplay from '../components/UI/DataDisplay/DataDisplay';
import { translateFromEng } from '../Functions/translateFromEng';
import { IDataObject } from '../Types/Types';
//redux
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { archiveSlice } from '../store/reducers/ArchiveReducer';
const Archive: FC = function () {
    const dispatch = useAppDispatch()
    const { chosenData, isLoading, error } = useAppSelector(state => state.ArchiveReducer);
    const [currentData, setCurrentData] = useState<IDataObject>()
    const { setError } = archiveSlice.actions
    useEffect(() => {
        if (chosenData.title) translateFromEng(chosenData, setCurrentData)
        // need field to translate
    }, [chosenData])

    useEffect(() => {
        return () => { dispatch(setError()) }
    }, [])

    const [errorMessage, setErrorMessage] = useState<IState>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    })

    return (
        <div className='archive' data-testid='archive-page'>
            <div className='archiveWrapper'>
                <header>
                    <h1 className='archiveTitle'>Эта страница - архив.</h1>
                    <p className='archiveSubTitle'>Выбрав дату, вы можете просмотреть картину дня,
                        начиная с 16 июня 1995 года (16-06-1995) и заканчивая сегодняшним днём.
                    </p>
                </header>
                <FormsMap
                    setErrorMessage={setErrorMessage}
                />

                {(!error && chosenData.date) ?
                    <DataDisplay isDaysPage={false} data={currentData ? currentData : chosenData} /> :
                    <div className='getNewRequest'>Отправьте запрос!</div>}

                <SnackbarComp
                    error={error}
                    errorMessage={errorMessage}
                    setErrorMessage={setErrorMessage}
                />

                {isLoading ? <Loader /> : ''}
            </div>
            <Footer />
        </div >
    )
};
export default Archive;