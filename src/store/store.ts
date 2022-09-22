import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userApi } from '@src/services/UserService'
import userReducer from './reducers/UserSlice'
const rootReducer = combineReducers({
  userReducer,
  [userApi.reducerPath]: userApi.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userApi.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
