import { configureStore } from '@reduxjs/toolkit'
import noteSliceReducer from '../features/noteSlice/noteSlice'
import  themeSliceReducer  from '../features/themeSlice/themeSlice'

export const store = configureStore({
  reducer: {
    note: noteSliceReducer,
    theme: themeSliceReducer
  },
})