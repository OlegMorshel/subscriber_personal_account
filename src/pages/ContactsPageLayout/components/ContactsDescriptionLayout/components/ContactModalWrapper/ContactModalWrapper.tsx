import React from "react"
import ReactModal from "react-modal"
import classNames from "classnames/bind"
import styles from "./ContactModalWrapper.module.scss"

const cnb = classNames.bind(styles)

export enum ContactModalContentType {
	EDIT = "EDIT",
	DELETE = "DELETE",
	NONE = "NONE",
}

type Props = {
	type: ContactModalContentType
	handleSetModal: (type: ContactModalContentType) => void
	children: React.ReactNode
}
const ContactModalWrapper: React.FC<Props> = ({ children, type, handleSetModal }) => {
	return (
		<ReactModal
			isOpen={type !== ContactModalContentType.NONE}
			ariaHideApp={false}
			shouldCloseOnEsc
			shouldCloseOnOverlayClick
			onRequestClose={() => handleSetModal(ContactModalContentType.NONE)}
			overlayClassName={cnb("modalOverlay")}
			className={cnb("modalContainer", {
				loginModalWrapper: type === ContactModalContentType.EDIT,
			})}
		>
			<>{children}</>
		</ReactModal>
	)
}
export default ContactModalWrapper
