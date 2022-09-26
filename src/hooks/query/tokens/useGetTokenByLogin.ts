import { ApiDataResponseType } from "@src/api/types"
import Queries from "@src/hooks/queries"
import { useQuery, UseQueryResult } from "react-query"
import { apiGetTokenById } from "@src/api/tokens/apiTokens"
import { IIdToken } from "@src/api/tokens/types"

const useGetTokenByLogin = ({ id }: IIdToken): UseQueryResult<ApiDataResponseType<IIdToken>, unknown> => {
	return useQuery([Queries.TOKENS, id], () => apiGetTokenById({ id }), {})
}

export default useGetTokenByLogin
