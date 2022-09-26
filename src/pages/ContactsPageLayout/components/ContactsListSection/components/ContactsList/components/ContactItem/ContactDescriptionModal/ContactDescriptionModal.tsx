import React from 'react'
import ReactModal from 'react-modal'
import classNames from 'classnames/bind'
import styles from './ContactDescriptionModal.module.scss'

const cnb = classNames.bind(styles)

export enum DescriptionModalContentType {
	DESCRIPTION = 'DESCRIPTION',
	NONE = 'NONE',
}

type Props = {
	type: DescriptionModalContentType
	handleSetModal: (type: DescriptionModalContentType) => void
	children: React.ReactNode
}
const ContactDescriptionModal: React.FC<Props> = ({ children, type, handleSetModal }) => {
	return (
		<>
			<div className={cnb('modalOverlay')}>
				<ReactModal
					isOpen
					ariaHideApp={false}
					shouldCloseOnEsc
					shouldCloseOnOverlayClick
					onRequestClose={() => handleSetModal(DescriptionModalContentType.NONE)}
					overlayClassName={cnb('modalOverlay')}
					className={cnb('modalContainer', {
						descriptionModalWrapper: type === DescriptionModalContentType.DESCRIPTION,
					})}
				>
					<>{children}</>
				</ReactModal>
			</div>
		</>
	)
}
export default ContactDescriptionModal
