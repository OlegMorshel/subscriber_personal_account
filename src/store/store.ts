import { configureStore } from '@reduxjs/toolkit'
import { initSlice } from './features/init/initSlice'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store = configureStore({
  reducer: {
    // init: initSlice.arguments,
  },
})
