import { FC } from 'react';
import cl from './NavMenu.module.scss'
import { NavLink } from 'react-router-dom';
//redux
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { mobileMenuSlice } from '../../../store/reducers/MobileMenuReducer';
const NavMenu: FC = function () {
    const menuOpen = useAppSelector(state => state.MobileMenu.menuOpen)
    const dispatch = useAppDispatch()
    const { setMenuOpen } = mobileMenuSlice.actions

    // for Navlink active page
    const mobileTab = ({ isActive }: any): string => isActive ? `_activeMenuTab ${cl.mobileMenuPadding}` : `${cl.mobileMenuPadding}`;
    const setActiveTab = ({ isActive }: any): string => isActive ? `_activeMenuTab ${cl.linkMenuTab}` : `${cl.linkMenuTab}`;

    let iconClassName = cl.menuIcon;
    let mobileMenu = cl.mobileMenu;
    const menuItemClass = [cl.menuItem, cl.mobileHidden].join(' ');
    if (menuOpen) {
        iconClassName = [cl.menuIcon, cl._active].join(' ')
        mobileMenu = [cl.mobileMenu, cl._active].join(' ')
    }

    return (
        <nav className={cl.nav}>
            <div className={cl.navWrapper}>
                <ul className={cl.menu__items}>

                    <li className={cl.menuItem}>Apod</li>
                    <li className={menuItemClass}>
                        <NavLink data-testid='main-link' className={setActiveTab} to={'/'}>Главная</NavLink>
                    </li>
                    <li className={menuItemClass}>
                        <NavLink data-testid='daysPage-link' className={setActiveTab} to={'/dayPage'}>Страница дня</NavLink>
                    </li>
                    <li className={menuItemClass}>
                        <NavLink data-testid='archive-link' className={setActiveTab} to={'/archive'}>Архив</NavLink>
                    </li>

                    <button
                        onClick={() => dispatch(setMenuOpen(!menuOpen))} // mobile menu open/close button
                        className={cl.burgerItem}
                        data-testid='open/close-mobileMenu'>
                        <div className={iconClassName}><span></span></div>
                    </button>

                </ul>

                <div onClick={(e) => e.stopPropagation()} className={mobileMenu} data-testid='mobile-menu'>
                        <ul className={cl.mobileMenuItems}>
                            <li className={cl.mobileMenuItem}>
                                <NavLink
                                    data-testid='main-link-mobile'
                                    onClick={() => dispatch(setMenuOpen(false))}
                                    className={mobileTab}
                                    to={'/main'}
                                >
                                    Главная
                                </NavLink>
                            </li>
                            <li className={cl.mobileMenuItem}>
                                <NavLink
                                    data-testid='daysPage-link-mobile'
                                    onClick={() => dispatch(setMenuOpen(false))}
                                    className={mobileTab}
                                    to={'/dayPage'}
                                >
                                    Страница дня
                                </NavLink>
                            </li>
                            <li className={cl.mobileMenuItem}>
                                <NavLink
                                    data-testid='archive-link-mobile'
                                    onClick={() => dispatch(setMenuOpen(false))}
                                    className={mobileTab}
                                    to={'/archive'}
                                >
                                    Архив
                                </NavLink>
                            </li>
                        </ul>
                </div>
            </div>
        </nav>
    )
};
export default NavMenu;