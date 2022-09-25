import { IUser } from '@src/api/users/types'
import Loader from '@src/components/UiKit/Loader/Loader'
import Picture from '@src/components/UiKit/Picture/Picture'
import useGetUserById from '@src/hooks/query/users/useGetUserById'
import { EditSvg, PhoneSvg } from '@src/icons/Icons'
import classNames from 'classnames/bind'
import React, { useEffect, useState } from 'react'
import styles from './ContactsDescriptionLayout.module.scss'
import { getFullDescriptionContent } from './getFullDescriptionContent'
const cnb = classNames.bind(styles)

interface Props {
	classNamesForWrapper?: string
	selectedContact: number
}
const ContactsDescriptionLayout: React.FC<Props> = ({ classNamesForWrapper, selectedContact = -1 }) => {
	const [userState, setUserState] = useState<IUser[]>([])
	const { data, isLoading } = useGetUserById({ id: selectedContact })
	console.log('data', data?.data)
	useEffect(() => {
		setUserState(data?.data ?? [])
	}, [data])
	const selectedUser = userState.length ? userState[0] : null
	return (
		<>
			<div className={cnb(classNamesForWrapper, 'contactsDescriptionWrapper')}>
				{selectedUser === null ? (
					<p>Use can see all info about human</p>
				) : (
					<div className={cnb('contactsCardWrapper')}>
						<div className={cnb('descriptionHeaderSection')}>
							<Picture alt="profile" src={selectedUser.cover} />
							<div className={cnb('mainContactInfo')}>
								<h3 className={cnb('name')}>{selectedUser.name}</h3>
								<h5 className={cnb('job')}>{selectedUser.job}</h5>
								<div className={cnb('actionsSection')}>
									<div className={cnb('iconsWrapper')}>
										<div className={cnb('phoneIcon')}>
											<PhoneSvg />
										</div>
										<div className={cnb('editIcon')}>
											<EditSvg />
										</div>
									</div>
									<button className={cnb('deleteBtn')}>
										<p className={cnb('deleteBtnText')}>Delete</p>
									</button>
								</div>
							</div>
						</div>
						<div className={cnb('descriptionMainInfo')}>
							<div className={cnb('descriptionRowsWrapper')}>
								{getFullDescriptionContent({
									bio: selectedUser.bio ?? '',
									email: selectedUser.email ?? '',
									phone: selectedUser.phone,
								}).map(descriptionRow => (
									<div className={cnb('descriptionRow')}>
										<p className={cnb('rowTitle')}>{descriptionRow.label}</p>
										<p className={cnb('rowText')}>{descriptionRow.value}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	)
}

export default ContactsDescriptionLayout
