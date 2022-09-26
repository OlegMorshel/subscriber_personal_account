import { apiGetAdminByLogin } from '@src/api/admin/apiAuth'
import { IGetAdminByLogin } from '@src/api/admin/types'
import { ApiDataResponseType } from '@src/api/types'
import Queries from '@src/hooks/queries'
import { useQuery, UseQueryResult } from 'react-query'

const useGetAdminByLogin = ({ login }: IGetAdminByLogin): UseQueryResult<ApiDataResponseType<IGetAdminByLogin>, unknown> => {
	return useQuery([Queries.ADMIN, login], () => apiGetAdminByLogin({ login }), {})
}

export default useGetAdminByLogin
