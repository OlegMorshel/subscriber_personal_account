import { IUser } from "@src/api/users/types"
import classNames from "classnames/bind"
import React from "react"
import ContactItem from "./components/ContactItem/ContactItem"
import styles from "./ContactsList.module.scss"
const cnb = classNames.bind(styles)

interface Props {
	contactList: IUser[]
	setSelectedContact: (contactId: null | number) => void
	classNameForWrapper?: string
}

const ContactsList: React.FC<Props> = ({ contactList, setSelectedContact, classNameForWrapper }) => {
	const isEmptyList = !!!contactList.length
	return (
		<div className={classNameForWrapper}>
			{isEmptyList ? (
				<p className={cnb("emptyText")}></p>
			) : (
				<ul className={cnb("contactsListWrapper")}>
					{contactList?.map(contact => (
						<ContactItem
							phone={contact.phone}
							cover={contact.cover}
							status={contact.status}
							name={contact.name}
							job={contact.job}
							key={contact.id}
							id={contact.id}
							setSelectedContact={setSelectedContact}
						/>
					))}
				</ul>
			)}
		</div>
	)
}

export default ContactsList
