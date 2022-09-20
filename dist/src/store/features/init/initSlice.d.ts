import { PayloadAction, SliceCaseReducers, ValidateSliceCaseReducers } from '@reduxjs/toolkit';
interface GenericState<T> {
    data?: T;
    status: 'loading' | 'finished' | 'error';
}
export declare const initSlice: <T, Reducers extends SliceCaseReducers<GenericState<T>>>({ name, initialState, reducers, }: {
    name: string;
    initialState: GenericState<T>;
    reducers: ValidateSliceCaseReducers<GenericState<T>, Reducers>;
}) => import("@reduxjs/toolkit").Slice<GenericState<T>, {
    start(state: import("immer/dist/internal").WritableDraft<GenericState<T>>): void;
    /**
     * If you want to write to values of the state that depend on the generic
     * (in this case: `state.data`, which is T), you might need to specify the
     * State type manually here, as it defaults to `Draft<GenericState<T>>`,
     * which can sometimes be problematic with yet-unresolved generics.
     * This is a general problem when working with immer's Draft type and generics.
     */
    success(state: GenericState<T>, action: {
        payload: T;
        type: string;
    }): void;
} & Reducers & { [T_1 in keyof Reducers]: Reducers[T_1] extends {
    reducer(s: GenericState<T>, action?: infer A | undefined): any;
} ? {
    prepare(...a: never[]): Omit<A, "type">;
} : {}; }, string>;
export declare const wrappedSlice: import("@reduxjs/toolkit").Slice<GenericState<string>, {
    start(state: import("immer/dist/internal").WritableDraft<GenericState<string>>): void;
    /**
     * If you want to write to values of the state that depend on the generic
     * (in this case: `state.data`, which is T), you might need to specify the
     * State type manually here, as it defaults to `Draft<GenericState<T>>`,
     * which can sometimes be problematic with yet-unresolved generics.
     * This is a general problem when working with immer's Draft type and generics.
     */
    success(state: GenericState<string>, action: {
        payload: string;
        type: string;
    }): void;
} & {
    magic(state: import("immer/dist/internal").WritableDraft<GenericState<string>>): void;
} & {
    magic: {};
}, string>;
export {};
