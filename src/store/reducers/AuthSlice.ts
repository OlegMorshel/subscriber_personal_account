import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface IAuthState {
  token: string
  tokenId: string
}

const initialState: IAuthState = {
  token: '',
  tokenId: '',
}

const mergedState = { ...initialState }

// mergedState['token'] = persistedState['token']
// mergedState['tokenId'] = persistedState['tokenId']

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToken(state, action: PayloadAction<IAuthState>) {
      state.token = action.payload.token
      state.tokenId = action.payload.tokenId
    },
    removeToken(state) {
      state.token = ''
      state.tokenId = ''
    },
  },
})

export default authSlice.reducer
