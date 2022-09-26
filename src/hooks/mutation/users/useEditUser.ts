import { ApiDataResponseType } from "@src/api/types"
import Mutations from "@src/hooks/mutation"
import Queries from "@src/hooks/queries"
import { useMutation, useQueryClient } from "react-query"
import { apiEditUser } from "@src/api/users/apiUsers"
import { IEditUser } from "@src/api/users/types"

const useEditUser = () => {
	const queryClient = useQueryClient()
	return useMutation<ApiDataResponseType<IEditUser>, unknown, IEditUser, unknown>(
		Mutations.EDIT_USER,
		(request: IEditUser): Promise<ApiDataResponseType<IEditUser>> => apiEditUser(request),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(Queries.USERS)
				queryClient.invalidateQueries(Queries.USER)
			},
		}
	)
}

export default useEditUser
