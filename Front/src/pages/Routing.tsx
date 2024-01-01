import { FC } from 'react';
import NavMenu from '../components/UI/NavMenu/NavMenu';
import Main from './Main';
import DaysPage from './DayPage';
import Archive from './Archive';
import { Routes, Route } from 'react-router-dom';
const Routing: FC = function () {
    return (
        <>
            <NavMenu />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/dayPage' element={<DaysPage />} />
                <Route path='/archive' element={<Archive />} />
                <Route path='*' element={<Main />} />
            </Routes>
            
        </>
    )
};
export default Routing;