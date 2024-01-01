import { FC } from 'react';
import { IDataDisplayProps } from '../../../Types/Types';
import '../../../styles/DaysPage.scss'
import Iframe from 'react-iframe';
import { useAppSelector } from '../../../hooks/redux';
import { isTodayDate } from '../../../store/reducers/selectors/isTodayDate/isTodayDate';
const DataDisplay: FC<IDataDisplayProps> = function ({ data, isDaysPage }) {
    const isTodayDateState = useAppSelector(isTodayDate)
    const testid = data.media_type === 'video' ? 'data-media-video' : 'data-media-img'
    return (
        <section data-testid='dataDisplay-component'>
            <h2 className="header mobileHidden">{data.title}</h2>
            <div className="currentDate mobileHidden">{data?.date}</div>
            <div className="daysContent">

                <div className="mediaContent" data-testid={testid}>

                    {data.media_type === 'video' ?
                        <Iframe className='video' url={data?.url} />
                        : <img src={data?.url} alt="Фото дня" />}

                </div>

                <div className='daysText'>
                    <h2 className="header" data-testid='data-title'>{data?.title}</h2>
                    <div className="currentDate">{data?.date}</div>
                    <div className="dataNotAvailible" data-testid='yesterday-date-message'>{(!isTodayDateState && isDaysPage) ? '(Данных на текущий день еще нет)' : ''}</div>
                    <div className="copyright">Copyright: {data?.copyright ? data?.copyright : 'Нет информации об авторском праве.'}</div>
                    <p className="explanation" data-testid='data-explanation'> {data?.explanation}</p>
                </div>
            </div>
        </section>
    )
};
export default DataDisplay;