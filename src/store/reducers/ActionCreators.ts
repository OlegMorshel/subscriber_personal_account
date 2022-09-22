import { userSlice } from '@src/store/reducers/UserSlice'
import axios from 'axios'
import { AppDispatch } from './../store'
import { IUser } from './UserSlice'
export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.usersFetching())
    const response = await axios.get<IUser[]>('http://localhost:5000/users')
    dispatch(userSlice.actions.userFetchingSuccess(response.data))
  } catch (error) {
    dispatch(userSlice.actions.userFetchingError((error as Error).message))
  }
}
