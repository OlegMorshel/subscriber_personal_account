import { apiRemoveToken } from '@src/api/tokens/apiTokens'
import { IRemoveToken } from '@src/api/tokens/types'
import { ApiDataResponseType } from '@src/api/types'
import Mutations from '@src/hooks/mutation'
import Queries from '@src/hooks/queries'
import { useTypedDispatch } from '@src/hooks/useTypedDispatch'
import { createNotification } from '@src/providers/NotificationProvider'
import { authSlice } from '@src/store/reducers/AuthSlice'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

const useDeleteToken = () => {
  const queryClient = useQueryClient()
  const dispatch = useTypedDispatch()
  const navigate = useNavigate()
  return useMutation<ApiDataResponseType<IRemoveToken>, unknown, IRemoveToken, unknown>(
    Mutations.DELETE_TOKEN,
    (request: IRemoveToken): Promise<ApiDataResponseType<IRemoveToken>> => apiRemoveToken(request),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(Queries.TOKENS)
        dispatch(authSlice.actions.removeToken())
        createNotification('success', 'Sign Out - Success!')
        return navigate({ pathname: '/auth' })
      },
    }
  )
}

export default useDeleteToken
