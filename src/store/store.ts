import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authApi } from '@src/services/AuthService/AuthService'
import { userApi } from '@src/services/UserService'
import userReducer from './reducers/UserSlice'
import authReducer from './reducers/AuthSlice'
const rootReducer = combineReducers({
  userReducer,
  authReducer,
  [userApi.reducerPath]: userApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([userApi.middleware, authApi.middleware]),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
