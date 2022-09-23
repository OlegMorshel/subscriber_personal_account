import { apiAddToken } from '@src/api/tokens/apiAuth'
import { IAddToken } from '@src/api/tokens/types'
import { ApiDataResponseType } from '@src/api/types'
import Mutations from '@src/hooks/mutation'
import Queries from '@src/hooks/queries'
import { useMutation, useQueryClient } from 'react-query'

const useAddToken = () => {
  const queryClient = useQueryClient()
  return useMutation<ApiDataResponseType<IAddToken>, unknown, IAddToken, unknown>(
    Mutations.ADD_TOKEN,
    (request: IAddToken): Promise<ApiDataResponseType<IAddToken>> => apiAddToken(request),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(Queries.TOKENS)
      },
    }
  )
}

export default useAddToken
