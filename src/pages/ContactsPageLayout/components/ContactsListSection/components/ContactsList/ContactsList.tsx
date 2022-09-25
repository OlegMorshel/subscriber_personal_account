import { IUser } from '@src/api/users/types'
import classNames from 'classnames/bind'
import React from 'react'
import ContactItem from './components/ContactItem/ContactItem'
import styles from './ContactsList.module.scss'
const cnb = classNames.bind(styles)

interface Props {
	contactList: IUser[]
	setSelectedContact: React.Dispatch<React.SetStateAction<number | null>>
}

const ContactsList: React.FC<Props> = ({ contactList, setSelectedContact }) => {
	const isEmptyList = !!!contactList.length
	return (
		<>
			{isEmptyList ? (
				<p className={cnb('emptyText')}></p>
			) : (
				<div className={cnb('contactsListWrapper')}>
					{contactList?.map(contact => (
						<ContactItem
							cover={contact.cover}
							status={contact.status}
							name={contact.name}
							job={contact.job}
							key={contact.id}
							id={contact.id}
							setSelectedContact={setSelectedContact}
						/>
					))}
				</div>
			)}
		</>
	)
}

export default ContactsList
