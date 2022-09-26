/// <reference types="redux-persist/types/persistreducer" />
declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    authReducer: import("./reducers/AuthSlice").IAuthState & import("redux-persist/es/persistReducer").PersistPartial;
    userReducer: import("./reducers/UserSlice").UserState;
}>, import("redux").AnyAction>;
export declare const setupStore: () => import("@reduxjs/toolkit").EnhancedStore<import("redux").EmptyObject & {
    authReducer: import("./reducers/AuthSlice").IAuthState & import("redux-persist/es/persistReducer").PersistPartial;
    userReducer: import("./reducers/UserSlice").UserState;
} & import("redux-persist/es/persistReducer").PersistPartial, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<[import("redux-thunk").ThunkMiddleware<import("redux").EmptyObject & {
    authReducer: import("./reducers/AuthSlice").IAuthState & import("redux-persist/es/persistReducer").PersistPartial;
    userReducer: import("./reducers/UserSlice").UserState;
} & import("redux-persist/es/persistReducer").PersistPartial, import("redux").AnyAction, undefined>]>>;
export declare type RootState = ReturnType<typeof rootReducer>;
export declare type AppStore = ReturnType<typeof setupStore>;
export declare type AppDispatch = AppStore["dispatch"];
export {};
