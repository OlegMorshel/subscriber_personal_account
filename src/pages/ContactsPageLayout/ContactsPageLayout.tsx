import Header from '@src/components/Header/Header'
import { useTypedSelector } from '@src/hooks/useTypedSelector'
import classNames from 'classnames/bind'
import React, { useState } from 'react'
import localStorage from 'redux-persist/es/storage'
import ContactsDescriptionLayout from './components/ContactsDescriptionLayout/ContactsDescriptionLayout'
import ContactsListSection from './components/ContactsListSection/ContactsListSection'
import styles from './ContactsPageLayout.module.scss'
const cnb = classNames.bind(styles)
const ContactsPageLayout: React.FC = () => {
  const { authReducer } = useTypedSelector(state => state)

  console.log('auth', authReducer)
  return (
    <div className={cnb('contactsLayoutWrapper')}>
      <ContactsListSection classNamesForWrapper={cnb('contactsListSection')} />
      <Header classNamesForWrapper={cnb('headerWrapper')} />
      <ContactsDescriptionLayout classNamesForWrapper={cnb('contactsDescriptionWrapper')} />
    </div>
  )
}

export default ContactsPageLayout
  