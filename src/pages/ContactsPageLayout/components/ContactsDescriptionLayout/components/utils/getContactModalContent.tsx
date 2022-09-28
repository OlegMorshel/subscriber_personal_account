import { IUser } from "@src/api/users/types"
import DeleteContactModal from "../ContactModalWrapper/components/DeleteContactModal/DeleteContactModal"
import EditContactModalContent from "../ContactModalWrapper/components/EditContactModal/EditContactModal"
import { ContactModalContentType } from "../ContactModalWrapper/ContactModalWrapper"

export const getContactModalContent = (
	modal: ContactModalContentType,
	setModal: (modalType: ContactModalContentType) => void,
	selectedUser: IUser | null
): JSX.Element => {
	const handleCloseModal = () => {
		setModal(ContactModalContentType.NONE)
	}

	switch (modal) {
		case ContactModalContentType.EDIT:
			return <EditContactModalContent handleCloseModal={handleCloseModal} selectedUser={selectedUser} />
		case ContactModalContentType.DELETE:
			return <DeleteContactModal id={selectedUser?.id ?? -1} handleCloseModal={handleCloseModal} />
		default:
			return <></>
	}
}
