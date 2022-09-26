import AddContactModalContent from "../components/AddContactModalContent/AddContactModalContent"
import { HeaderModalContentType } from "../HeaderModalWrapper"

export const getHeaderModalContent = (
	modal: HeaderModalContentType,
	setModal: React.Dispatch<React.SetStateAction<HeaderModalContentType>>
): JSX.Element => {
	switch (modal) {
		case HeaderModalContentType.ADD:
			return <AddContactModalContent setModal={setModal} />
		default:
			return <></>
	}
}
