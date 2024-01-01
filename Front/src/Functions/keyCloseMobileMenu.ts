import { mobileMenuSlice } from "../store/reducers/MobileMenuReducer"
const { setMenuOpen } = mobileMenuSlice.actions
export const keyClose = (e: KeyboardEvent, dispatch: any) => {
    if (e.key === 'Escape') dispatch(setMenuOpen(false))
}