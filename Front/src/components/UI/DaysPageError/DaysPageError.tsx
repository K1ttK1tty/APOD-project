import { FC } from 'react';
import MEMEdog from './../../../pages/images/MEMEdog .png'
import { IDaysPageError } from '../../../Types/Types';
const DaysPageError: FC<IDaysPageError> = function ({ title, alt }) {
    return (
        <section data-testid='fetchToday-error-page'>
            <h3 className='ErrorTitle'>{title}</h3>
            <div className='wrapperIMG'>
                <img className='ErrorIMG' src={MEMEdog} alt={alt} />
            </div>
        </section>
    )
};
export default DaysPageError;