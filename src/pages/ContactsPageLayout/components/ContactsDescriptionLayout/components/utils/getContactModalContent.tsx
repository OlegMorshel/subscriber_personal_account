import { IUser } from '@src/api/users/types'
import EditContactModalContent from '../ContactModalWrapper/components/EditContactModal/EditContactModal'
import { ContactModalContentType } from '../ContactModalWrapper/ContactModalWrapper'

export const getContactModalContent = (
	modal: ContactModalContentType,
	setModal: React.Dispatch<React.SetStateAction<ContactModalContentType>>,
	selectedUser: IUser | null
): JSX.Element => {
	switch (modal) {
		case ContactModalContentType.EDIT:
			return <EditContactModalContent setModal={setModal} selectedUser={selectedUser} />
		case ContactModalContentType.DELETE:
			return <>Registration</>
		default:
			return <></>
	}
}
