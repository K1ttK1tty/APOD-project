import { FC, useEffect, useState } from 'react';
import '../styles/index.scss'
import '../styles/DaysPage.scss'
import Footer from '../components/UI/Footer/Footer';
import { translateFromEng } from '../Functions/translateFromEng';
import DataDisplay from '../components/UI/DataDisplay/DataDisplay';
import DaysPageError from '../components/UI/DaysPageError/DaysPageError';
import { IDataObject } from '../Types/Types';
import { useAppSelector } from '../hooks/redux';
import { getDaysPageError } from '../store/reducers/selectors/getDaysPageError/getDaysPageError';
import DaysPageContent from '../components/UI/DaysPageContent/DaysPageContent';
const DaysPage: FC = function () {
    const { data } = useAppSelector(state => state.DaysPage)
    const fetchError: string = useAppSelector(getDaysPageError)
    const [translatedData, setTranslatedData] = useState<IDataObject>()
    useEffect(() => {
        if (data.title) translateFromEng(data, setTranslatedData)
        // need field to translate
    }, [data, fetchError])

    return (
        <div className='daysPage' data-testid='daysPage-page'>
            <div className="daysWrapper">
                 <header>
                    <h1 className="title">Астрономическая картина дня</h1>
                    <div className="subtitle">
                        Каждый день появляется новое изображение или фотография нашей Вселенной
                        вместе с кратким пояснением, написанным профессиональным астрономом.
                    </div>
                </header>

                <DaysPageContent data={data} fetchError={fetchError} translatedData={translatedData} />

            </div>
            <Footer />
        </div>
    )
};
export default DaysPage;