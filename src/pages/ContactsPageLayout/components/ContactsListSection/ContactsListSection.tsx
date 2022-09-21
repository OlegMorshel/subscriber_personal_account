import classNames from 'classnames/bind'
import React from 'react'
import ContactsHeader from './components/ContactsHeader/ContactsHeader'
import ContactsList from './components/ContactsList/ContactsList'
import ContactsSearch from './components/ContactsSearch/ContactsSearch'
import styles from './ContactsListSection.module.scss'
const cnb = classNames.bind(styles)
interface Props {
  classNamesForWrapper?: string
}
const ContactsListSection: React.FC<Props> = ({ classNamesForWrapper }) => {
  return (
    <div className={classNamesForWrapper}>
      <div className={cnb('contactsHeader')}>
        <ContactsHeader />
      </div>
      <div className={cnb('contactsSearchSection')}>
        <ContactsSearch />
      </div>
      <div className={cnb('contactsList')}>
        <ContactsList />
      </div>
    </div>
  )
}

export default ContactsListSection
