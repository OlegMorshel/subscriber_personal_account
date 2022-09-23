import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface ICreateContact {
  name: string
  job: string
  phone: string
  status: string
  email: string
}
export interface IUpdateContact {
  id: number
  name: string
  job: string
  phone: string
  status: string
  email: string
}
export interface IUser {
  id: number
  cover: string
  name: string
  job: string
  bio: string
  email: string
  phone: string
  status: string
}
export interface UserState {
  users: IUser[]
  isLoading: boolean
  error: string
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true
    },

    userFetchingSuccess(state, action: PayloadAction<IUser[]>) {
      state.isLoading = false
      state.error = ''
      state.users = action.payload
    },

    userFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default userSlice.reducer
