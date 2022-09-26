import { IId, IUser } from "./../../../api/users/types"
import { ApiDataResponseType } from "@src/api/types"
import Queries from "@src/hooks/queries"
import { useQuery, UseQueryResult } from "react-query"
import { apiGetUserById } from "@src/api/users/apiUsers"

const useGetUserById = ({ id }: IId): UseQueryResult<ApiDataResponseType<IUser[]>, unknown> => {
	return useQuery([Queries.USER, id], () => apiGetUserById({ id }), { enabled: id !== -1 })
}

export default useGetUserById
