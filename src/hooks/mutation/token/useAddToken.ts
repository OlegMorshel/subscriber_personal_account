import { apiAddToken } from '@src/api/tokens/apiTokens'
import { IAddToken } from '@src/api/tokens/types'
import { ApiDataResponseType } from '@src/api/types'
import Mutations from '@src/hooks/mutation'
import Queries from '@src/hooks/queries'
import { useTypedDispatch } from '@src/hooks/useTypedDispatch'
import { createNotification } from '@src/providers/NotificationProvider'
import { authSlice } from '@src/store/reducers/AuthSlice'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

const useAddToken = () => {
	const queryClient = useQueryClient()
	const dispatch = useTypedDispatch()
	const navigate = useNavigate()
	return useMutation<ApiDataResponseType<IAddToken>, unknown, IAddToken, unknown>(
		Mutations.ADD_TOKEN,
		(request: IAddToken): Promise<ApiDataResponseType<IAddToken>> => apiAddToken(request),
		{
			onSuccess: res => {
				queryClient.invalidateQueries(Queries.TOKENS)
				dispatch(authSlice.actions.addToken({ token: res.data.token, tokenId: res.data.id, isAuth: true }))
				createNotification('success', 'Sign In - Success!')
				return navigate({ pathname: '/contacts' })
			},
		}
	)
}

export default useAddToken
