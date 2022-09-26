import { createNotification } from "@src/providers/NotificationProvider"
import { ApiDataResponseType } from "@src/api/types"
import Mutations from "@src/hooks/mutation"
import Queries from "@src/hooks/queries"
import { useMutation, useQueryClient } from "react-query"
import { apiDeleteUser } from "@src/api/users/apiUsers"
import { IId, IUser } from "@src/api/users/types"
import { ContactModalContentType } from "@src/pages/ContactsPageLayout/components/ContactsDescriptionLayout/components/ContactModalWrapper/ContactModalWrapper"

const useDeleteUser = ({ setModal }: { setModal: React.Dispatch<React.SetStateAction<ContactModalContentType>> }) => {
	const queryClient = useQueryClient()
	return useMutation<ApiDataResponseType<IUser>, unknown, IId, unknown>(
		Mutations.DELETE_USER,
		({ id }: IId): Promise<ApiDataResponseType<IUser>> => apiDeleteUser({ id }),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(Queries.USERS)
				queryClient.invalidateQueries(Queries.USER)
				createNotification("success", `User is deleted - success`)
				setModal(ContactModalContentType.NONE)
			},
			onError: () => {
				createNotification("error", "Server error")
			},
		}
	)
}

export default useDeleteUser
