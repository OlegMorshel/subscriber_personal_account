import Header from '@src/components/Header/Header'
import classNames from 'classnames/bind'
import React from 'react'
import ContactsDescriptionLayout from './components/ContactsDescriptionLayout/ContactsDescriptionLayout'
import ContactsListSection from './components/ContactsListSection/ContactsListSection'
import styles from './ContactsPageLayout.module.scss'
const cnb = classNames.bind(styles)
const ContactsPageLayout: React.FC = () => {
  return (
    <div className={cnb('contactsLayoutWrapper')}>
      <ContactsListSection classNamesForWrapper={cnb('contactsListSection')} />
      <Header classNamesForWrapper={cnb('headerWrapper')} />
      <ContactsDescriptionLayout classNamesForWrapper={cnb('contactsDescriptionWrapper')} />
    </div>
  )
}

export default ContactsPageLayout
 