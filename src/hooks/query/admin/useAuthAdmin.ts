import useDeleteToken from "@src/hooks/mutation/token/useDeleteToken"
import { createNotification } from "@src/providers/NotificationProvider"
import { comparePasswords } from "./../../../utils/hashPassword"
import { apiGetAdminByLogin } from "@src/api/admin/apiAuth"
import { IAdmin, IAuthAdmin } from "@src/api/admin/types"
import { ApiDataResponseType } from "@src/api/types"
import Queries from "@src/hooks/queries"
import { useQuery, UseQueryResult } from "react-query"
import { createId } from "@src/utils/createId"
import { generateToken } from "@src/utils/generateToken"
import useAddToken from "@src/hooks/mutation/token/useAddToken"
import { useTypedSelector } from "@src/hooks/useTypedSelector"

const useAuthAdmin = ({ login, password }: IAuthAdmin): UseQueryResult<ApiDataResponseType<IAdmin[]>, unknown> => {
	const { mutate: addToken } = useAddToken()
	const { mutate: deleteToken } = useDeleteToken()
	const { tokenId } = useTypedSelector(state => state.authReducer)

	return useQuery([Queries.ADMIN, login, password], () => apiGetAdminByLogin({ login }), {
		onSuccess: async res => {
			if (tokenId.length) {
				deleteToken({ id: tokenId })
			}
			const foundedUser = res.data[0]
			const isSome = comparePasswords(password, foundedUser?.password ?? "")
			if (isSome) {
				const token = generateToken(72)
				const generatedTokenId = createId()
				addToken({ token, id: generatedTokenId })
			} else {
				createNotification("error", "Login or password don't correct")
			}
		},
		onError: () => createNotification("error", "Server error"),
		enabled: !!login.length && !!password.length,
	})
}

export default useAuthAdmin
