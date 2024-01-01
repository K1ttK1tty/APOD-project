import { IIsMobileMenu } from "../../Types/Types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: IIsMobileMenu = {
    menuOpen: false,
    isMount: true,
    isPreloader: true,

}

export const mobileMenuSlice = createSlice({
    name: 'mobileMenu',
    initialState,
    reducers: {
        setMenuOpen(state, action: PayloadAction<boolean>) {
            state.menuOpen = action.payload
        },
        setIsMount(state) {
            state.isMount = false
        },
        setIsPreloader(state) {
            state.isPreloader = false
        }

    }

})

export default mobileMenuSlice.reducer