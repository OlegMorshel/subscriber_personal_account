import { useDispatch } from 'react-redux'
import { apiCreateAdmin } from '@src/api/admin/apiAuth'
import { IAddAdmin } from '@src/api/admin/types'
import { ApiDataResponseType } from '@src/api/types'
import Mutations from '@src/hooks/mutation'
import Queries from '@src/hooks/queries'
import { createNotification } from '@src/providers/NotificationProvider'
import { generateToken } from '@src/utils/generateToken'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import useAddToken from '../token/useAddToken'
import { useTypedDispatch } from '@src/hooks/useTypedDispatch'
import { authSlice } from '@src/store/reducers/AuthSlice'
import { createId } from '@src/utils/createId'

const useCreateAdmin = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { mutate: addToken, isSuccess } = useAddToken()
  const dispatch = useTypedDispatch()
  return useMutation<ApiDataResponseType<IAddAdmin>, unknown, IAddAdmin, unknown>(
    Mutations.ADD_ADMIN,
    (request: IAddAdmin): Promise<ApiDataResponseType<IAddAdmin>> => apiCreateAdmin(request),
    {
      onSuccess: async () => {
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
