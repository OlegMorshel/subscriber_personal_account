import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/UserSlice'
import authReducer from './reducers/AuthSlice'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const authPersistConfig = {
	key: 'auth',
	version: 1,
	storage,
}

const persistedReducer = persistReducer(authPersistConfig, authReducer) // configure persisted reducer

const rootReducer = combineReducers({
	authReducer: persistedReducer,
	userReducer,
})

const rootPersistConfig = {
	key: 'root',
	version: 1,
	storage,
	whiteList: ['authReducer'], // here we add persisted reducer if it is needed
}

const combinePersistedReducer = persistReducer(rootPersistConfig, rootReducer)

export const setupStore = () => {
	return configureStore({
		reducer: combinePersistedReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				},
			}),
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
