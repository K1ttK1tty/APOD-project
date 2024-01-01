import { useEffect } from 'react';
import './styles/index.scss';
import './styles/App.scss';
import Routing from './pages/Routing';
//redux
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { mobileMenuSlice } from './store/reducers/MobileMenuReducer';
import { fetchToday } from './store/reducers/ActionCreator';
import { keyClose } from './Functions/keyCloseMobileMenu';
function App() {
    const menuOpen = useAppSelector(state => state.MobileMenu.menuOpen)
    const dispatch = useAppDispatch()
    const { setMenuOpen } = mobileMenuSlice.actions

    useEffect(() => {
        document.body.addEventListener('keydown', (e) => keyClose(e, dispatch))
        dispatch(fetchToday())
    }, [])

    useEffect(() => {
        if (menuOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';
    }, [menuOpen])

    function closeMenuMobile() {
        if (menuOpen) dispatch(setMenuOpen(false));
    }

    return (
        <div onClick={closeMenuMobile} className='App' data-testid='App-component' >

            <Routing />

            {menuOpen ? <div data-testid='mobileMenuBack' className='mobileMenuBack' /> : ''}
        </div>
    );
}
export default App;