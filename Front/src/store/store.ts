import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MobileMenu from "./reducers/MobileMenuReducer";
import ArchiveReducer from "./reducers/ArchiveReducer";
import DaysPage from "./reducers/DaysPage";
const rootReducer = combineReducers({
    MobileMenu: MobileMenu,
    ArchiveReducer: ArchiveReducer,
    DaysPage: DaysPage

})


export const setupStore = (initialState = {}) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']