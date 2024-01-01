import { FC } from 'react';
import '../styles/index.scss'
import '../styles/Main.scss'
import Footer from '../components/UI/Footer/Footer';
import Preloader from '../components/UI/Preloader/Preloader'
import MainContent from '../components/UI/MainContent/MainContent';
import { useAppSelector } from '../hooks/redux';
import { isMount } from '../store/reducers/selectors/isMount/isMount';
const Main: FC = function () {
    const isMountValue = useAppSelector(isMount)
    const isPreloader = useAppSelector(state => state.MobileMenu.isPreloader)
    return (
        <div className='Main' data-testid='main-page'>
            {isMountValue ? <Preloader /> : ""}
            {isPreloader ? '' : <MainContent />}

            {/* <MainContent /> */}

            <Footer />
        </div>
    )
};
export default Main;