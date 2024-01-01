import { FC, useEffect } from 'react';
import { SnackbarContent, Snackbar } from '@mui/material';
import { errorStyle } from '../../../MaterialStyleConsts/Consts';
import ErrorIcon from '@mui/icons-material/Error';
import { ISnackProps } from '../../../Types/Types';
import '../../../styles/Archive.scss'
const SnackbarComp: FC<ISnackProps> = function ({ error, errorMessage, setErrorMessage }) {
    const { vertical, horizontal, open } = errorMessage;
    useEffect(() => {
        if (error) setErrorMessage({ ...errorMessage, open: true });
    }, [error])

    const handleClose = () => {
        setErrorMessage({ ...errorMessage, open: false });
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            autoHideDuration={2200}
            open={open}
            onClose={handleClose}
            key={vertical + horizontal}
        >
            <SnackbarContent
                style={errorStyle}
                message={
                    <div className='errorStyle'>
                        <ErrorIcon style={{ position: 'relative', top: '-3px', marginRight: '7px' }} />
                        {error ? 'Произошла неизвестная ошибка' : 'Некорректная дата'}
                    </div>
                }
                data-testid='error-send-alert'
            />
        </Snackbar>
    )
};
export default SnackbarComp;