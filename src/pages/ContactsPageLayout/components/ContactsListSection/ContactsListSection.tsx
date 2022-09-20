import Picture from '@src/components/UiKit/Picture/Picture'
import React from 'react'
import ContactsIcon from '@src/assets/images/contacts.png'

interface Props {
  classNamesForWrapper?: string
}
const ContactsListSection: React.FC<Props> = ({ classNamesForWrapper }) => {
  return (
    <div className={classNamesForWrapper}>
      <Picture alt="contact icon" src={ContactsIcon} />
    </div>
  )
}

export default ContactsListSection
