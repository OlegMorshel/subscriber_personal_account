import { ApiDataResponseType } from "@src/api/types"
import Mutations from "@src/hooks/mutation"
import Queries from "@src/hooks/queries"
import { useMutation, useQueryClient } from "react-query"
import { apiAddUser } from "@src/api/users/apiUsers"
import { IAddUser } from "@src/api/users/types"
import { HeaderModalContentType } from "@src/components/Header/HeaderModalWrapper/HeaderModalWrapper"

const useAddUser = ({ setModal }: { setModal: React.Dispatch<React.SetStateAction<HeaderModalContentType>> }) => {
	const queryClient = useQueryClient()
	return useMutation<ApiDataResponseType<IAddUser>, unknown, IAddUser, unknown>(
		Mutations.EDIT_USER,
		(request: IAddUser): Promise<ApiDataResponseType<IAddUser>> => apiAddUser(request),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(Queries.USERS)
				queryClient.invalidateQueries(Queries.USER)
				setModal(HeaderModalContentType.NONE)
			},
		}
	)
}

export default useAddUser
