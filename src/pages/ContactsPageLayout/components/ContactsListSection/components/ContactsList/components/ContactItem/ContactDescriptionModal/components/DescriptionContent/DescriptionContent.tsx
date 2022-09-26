import { IUser } from '@src/api/users/types'
import Picture from '@src/components/UiKit/Picture/Picture'
import useGetUserById from '@src/hooks/query/users/useGetUserById'
import { EditSvg, PhoneSvg } from '@src/icons/Icons'
import ContactModalWrapper, {
	ContactModalContentType,
} from '@src/pages/ContactsPageLayout/components/ContactsDescriptionLayout/components/ContactModalWrapper/ContactModalWrapper'
import { getContactModalContent } from '@src/pages/ContactsPageLayout/components/ContactsDescriptionLayout/components/utils/getContactModalContent'
import { getFullDescriptionContent } from '@src/pages/ContactsPageLayout/components/ContactsDescriptionLayout/getFullDescriptionContent'
import { createNotification } from '@src/providers/NotificationProvider'
import classNames from 'classnames/bind'
import React, { useState, useEffect } from 'react'
import styles from './DescriptionContent.module.scss'
const cnb = classNames.bind(styles)

interface Props {
	setModal: React.Dispatch<React.SetStateAction<ContactModalContentType>>
	currentUser: IUser | null
}
const DescriptionContent: React.FC<Props> = ({ setModal, currentUser }) => {
	const [descriptionModal, setDescriptionModal] = useState<ContactModalContentType>(ContactModalContentType.NONE)
	const [userState, setUserState] = useState<IUser[]>([])
	const { data } = useGetUserById({ id: currentUser?.id ?? -1 })
	useEffect(() => {
		setUserState(data?.data ?? [])
	}, [data])
	const selectedUser = userState.length ? userState[0] : null
	return (
		<>
			<div className={cnb('contactsCardWrapper')}>
				<div className={cnb('descriptionHeaderSection')}>
					<Picture alt="profile" src={selectedUser?.cover} />
					<div className={cnb('mainContactInfo')}>
						<h3 className={cnb('name')}>{selectedUser?.name}</h3>
						<h5 className={cnb('job')}>{selectedUser?.job}</h5>
						<div className={cnb('actionsSection')}>
							<div className={cnb('iconsWrapper')}>
								<div className={cnb('phoneIcon')} onClick={() => createNotification('info', 'Calling ...')}>
									<PhoneSvg />
								</div>
								<div className={cnb('editIcon')} onClick={() => setModal(ContactModalContentType.EDIT)}>
									<EditSvg />
								</div>
							</div>
							<button className={cnb('deleteBtn')} onClick={() => setModal(ContactModalContentType.DELETE)}>
								<p className={cnb('deleteBtnText')}>Delete</p>
							</button>
						</div>
					</div>
				</div>
				<div className={cnb('descriptionMainInfo')}>
					<div className={cnb('descriptionRowsWrapper')}>
						{getFullDescriptionContent({
							bio: selectedUser?.bio ?? '',
							email: selectedUser?.email ?? '',
							phone: selectedUser?.phone ?? '',
						}).map(descriptionRow => (
							<div className={cnb('descriptionRow')}>
								<p className={cnb('rowTitle')}>{descriptionRow.label}</p>
								<p className={cnb('rowText')}>{descriptionRow.value}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<ContactModalWrapper
				handleSetModal={setDescriptionModal}
				type={descriptionModal}
				children={getContactModalContent(descriptionModal, setDescriptionModal, selectedUser)}
			/>
		</>
	)
}

export default DescriptionContent
