import { apiCreateAdmin } from '@src/api/admin/apiAuth'
import { IAddAdmin } from '@src/api/admin/types'
import { ApiDataResponseType } from '@src/api/types'
import Mutations from '@src/hooks/mutation'
import Queries from '@src/hooks/queries'
import { createNotification } from '@src/providers/NotificationProvider'
import { generateToken } from '@src/utils/generateToken'
import { useMutation, useQueryClient } from 'react-query'
import useAddToken from '../token/useAddToken'
import { createId } from '@src/utils/createId'
import useDeleteToken from '../token/useDeleteToken'
import { useTypedSelector } from '@src/hooks/useTypedSelector'

const useCreateAdmin = () => {
	const queryClient = useQueryClient()
	const { mutate: addToken } = useAddToken()
	const { mutate: deleteToken } = useDeleteToken()
	const { tokenId: exestedTokenId } = useTypedSelector(state => state.authReducer)
	return useMutation<ApiDataResponseType<IAddAdmin>, unknown, IAddAdmin, unknown>(
		Mutations.ADD_ADMIN,
		(request: IAddAdmin): Promise<ApiDataResponseType<IAddAdmin>> => apiCreateAdmin(request),
		{
			onSuccess: async () => {
				if (exestedTokenId.length) {
					deleteToken({ id: exestedTokenId })
				}
				queryClient.invalidateQueries(Queries.ADMIN)
				const token = generateToken(72)
				const tokenId = createId()
				addToken({ token, id: tokenId })
			},
			onError: () => {
				createNotification('error', 'Server error')
			},
		}
	)
}

export default useCreateAdmin
