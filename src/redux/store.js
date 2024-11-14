import { configureStore } from '@reduxjs/toolkit'
import noteSliceReducer from '../features/noteSlice/noteSlice'

export const store = configureStore({
  reducer: noteSliceReducer,
})