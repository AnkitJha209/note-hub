import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    themeMode: 'light'
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers : {
        darkTheme: (state,action) => {
            // document.querySelector('html').classList.remove('light','dark')
            state.themeMode = 'dark'
            // document.querySelector('html').classList.add(state.themeChanger)
        },
        lightTheme: (state, action) => {
            // document.querySelector('html').classList.remove('light', 'dark')
            state.themeMode = 'light'
            // document.querySelector('html').classList.add(state.themeChanger)
        }
    } 
})

export const {darkTheme, lightTheme} = themeSlice.actions

export default themeSlice.reducer