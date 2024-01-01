import { mobileMenuSlice } from "../store/reducers/MobileMenuReducer";
const { setIsMount, setIsPreloader } = mobileMenuSlice.actions
export const getRemovePreloader = (setVantaEffect: (a: boolean) => void, dispatch: any) => {
    dispatch(setIsPreloader());
    setTimeout(() => {
        setVantaEffect(true)
        dispatch(setIsMount());
    }, 350);
}