import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IAuthState {
  token: string
}

const initialState: IAuthState = {
  token: '',
}

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToken(state, action: PayloadAction<IAuthState>) {
      state.token = action.payload.token
    },
    removeToken(state) {
      state.token = ''
    },
  },
})

export default authSlice.reducer
