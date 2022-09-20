import classNames from 'classnames/bind'
import React from 'react'
import styles from './ContactsDescriptionLayout.module.scss'
const cnb = classNames.bind(styles)

interface Props {
  classNamesForWrapper?: string
}
const ContactsDescriptionLayout: React.FC<Props> = ({ classNamesForWrapper }) => {
  return <div className={cnb(classNamesForWrapper, 'contactsDescriptionWrapper')}>ContactsDescriptionLayout</div>
}

export default ContactsDescriptionLayout
