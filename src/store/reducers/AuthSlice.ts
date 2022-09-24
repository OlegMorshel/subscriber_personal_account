import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface IAuthState {
  token: string
  tokenId: string
  isAuth: boolean
}

const initialState: IAuthState = {
  token: '',
  tokenId: '',
  isAuth: false,
}

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToken(state, action: PayloadAction<IAuthState>) {
      state.token = action.payload.token
      state.tokenId = action.payload.tokenId
      state.isAuth = true
    },
    removeToken(state) {
      state.token = ''
      state.tokenId = ''
      state.isAuth = false
    },
  },
})

export default authSlice.reducer
