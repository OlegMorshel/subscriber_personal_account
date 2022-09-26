import { IUser } from "./../../../api/users/types"
import { ApiDataResponseType } from "@src/api/types"
import Queries from "@src/hooks/queries"
import { useQuery, UseQueryResult } from "react-query"
import { apiGetUsers } from "@src/api/users/apiUsers"

const useGetUsers = ({ query }: { query: string }): UseQueryResult<ApiDataResponseType<IUser[]>, unknown> => {
	return useQuery([Queries.USERS, query], () => apiGetUsers(query), {})
}

export default useGetUsers
