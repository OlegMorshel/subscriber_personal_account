import Header from '@src/components/Header/Header'
import classNames from 'classnames/bind'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ContactsDescriptionLayout from './components/ContactsDescriptionLayout/ContactsDescriptionLayout'
import ContactsListSection from './components/ContactsListSection/ContactsListSection'
import styles from './ContactsPageLayout.module.scss'
const cnb = classNames.bind(styles)

interface Props {
	isAuth: boolean
}

const ContactsPageLayout: React.FC<Props> = ({ isAuth }) => {
	const navigate = useNavigate()

	useEffect(() => {
		if (!isAuth) {
			navigate('/auth', { replace: true })
		}
	}, [isAuth])

	return (
		<div className={cnb('contactsLayoutWrapper')}>
			<ContactsListSection classNamesForWrapper={cnb('contactsListSection')} />
			<Header classNamesForWrapper={cnb('headerWrapper')} />
			<ContactsDescriptionLayout classNamesForWrapper={cnb('contactsDescriptionWrapper')} />
		</div>
	)
}

export default ContactsPageLayout
