import React from "react"
import ReactModal from "react-modal"
import classNames from "classnames/bind"
import styles from "./HeaderModalWrapper.module.scss"

const cnb = classNames.bind(styles)

export enum HeaderModalContentType {
	ADD = "ADD",
	NONE = "NONE",
}

type Props = {
	type: HeaderModalContentType
	handleSetModal: (type: HeaderModalContentType) => void
	children: React.ReactNode
}
const HeaderModalWrapper: React.FC<Props> = ({ children, type, handleSetModal }) => {
	return (
		<ReactModal
			isOpen={type !== HeaderModalContentType.NONE}
			ariaHideApp={false}
			shouldCloseOnEsc
			shouldCloseOnOverlayClick
			onRequestClose={() => handleSetModal(HeaderModalContentType.NONE)}
			overlayClassName={cnb("modalOverlay")}
			className={cnb("modalContainer")}
		>
			<>{children}</>
		</ReactModal>
	)
}
export default HeaderModalWrapper
