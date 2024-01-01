import { FC } from 'react';
import DaysPageError from '../DaysPageError/DaysPageError'
import DataDisplay from '../DataDisplay/DataDisplay';
import { IDaysPageContent } from '../../../Types/Types';
const DaysPageContent: FC<IDaysPageContent> = function ({ data, fetchError, translatedData }) {
    return (
        <div>
            {(!data.title && !fetchError) ?
                <DaysPageError
                    title='Данных пока нет'
                    alt='смешная картинка, данные от сервера не были приняты'
                /> : fetchError ?
                    <DaysPageError title={fetchError} alt='Ошибка запроса на сервер' />
                    : <DataDisplay isDaysPage={true} data={translatedData ? translatedData : data} />
            }
        </div>
    )
};
export default DaysPageContent;