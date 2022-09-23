import { apiCreateAdmin } from '@src/api/admin/apiAuth'
import { IAddAdmin } from '@src/api/admin/types'
import { ApiDataResponseType } from '@src/api/types'
import Mutations from '@src/hooks/mutation'
import Queries from '@src/hooks/queries'
import { createNotification } from '@src/providers/NotificationProvider'
import { useMutation, useQueryClient } from 'react-query'

const useCreateAdmin = () => {
  const queryClient = useQueryClient()
  return useMutation<ApiDataResponseType<IAddAdmin>, unknown, IAddAdmin, unknown>(
    Mutations.ADD_ADMIN,
    (request: IAddAdmin): Promise<ApiDataResponseType<IAddAdmin>> => apiCreateAdmin(request),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(Queries.AUTH)
        createNotification('success', 'Пользователь успешно создан!')
      },
    }
  )
}

export default useCreateAdmin
