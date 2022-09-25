import { apiRemoveToken } from '@src/api/tokens/apiTokens'
import { IIdToken } from '@src/api/tokens/types'
import { ApiDataResponseType } from '@src/api/types'
import Mutations from '@src/hooks/mutation'
import Queries from '@src/hooks/queries'
import { useTypedDispatch } from '@src/hooks/useTypedDispatch'
import { authSlice } from '@src/store/reducers/AuthSlice'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

const useDeleteToken = () => {
	const queryClient = useQueryClient()
	const dispatch = useTypedDispatch()
	const navigate = useNavigate()
	return useMutation<ApiDataResponseType<IIdToken>, unknown, IIdToken, unknown>(
		Mutations.DELETE_TOKEN,
		(request: IIdToken): Promise<ApiDataResponseType<IIdToken>> => apiRemoveToken(request),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(Queries.TOKENS)
				dispatch(authSlice.actions.removeToken())
				return navigate({ pathname: '/auth' })
			},
		}
	)
}

export default useDeleteToken
