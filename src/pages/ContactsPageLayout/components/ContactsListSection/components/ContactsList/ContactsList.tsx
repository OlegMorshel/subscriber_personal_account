import classNames from 'classnames/bind'
import React from 'react'
import ContactItem from './components/ContactItem/ContactItem'
import styles from './ContactsList.module.scss'
const cnb = classNames.bind(styles)
const ContactsList: React.FC = () => {
  return (
    <div className={cnb('contactsListWrapper')}>
      <ContactItem name="Nicholas Gordon" job="Developer" />
    </div>
  )
}

export default ContactsList
