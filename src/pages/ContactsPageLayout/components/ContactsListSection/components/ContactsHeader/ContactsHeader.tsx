import { ContactSvg } from "@src/icons/Icons"
import classNames from "classnames/bind"
import React from "react"
import styles from "./ContactsHeader.module.scss"
const cnb = classNames.bind(styles)

interface Props {
	classNameForWrapper?: string
}

const ContactsHeader: React.FC<Props> = ({ classNameForWrapper }) => {
	return (
		<div className={cnb("contactsHeaderWrapper", classNameForWrapper)}>
			<div className={cnb("contactIcon")}>
				<ContactSvg />
			</div>
			<h2 className={cnb("contactsTile")}>Contacts</h2>
		</div>
	)
}

export default ContactsHeader
