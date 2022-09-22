import CustomInput from '@src/components/UiKit/Input/Input'
import { SearchSvg } from '@src/icons/Icons'
import classNames from 'classnames/bind'
import React from 'react'
import styles from './ContactsSearch.module.scss'
const cnb = classNames.bind(styles)
const ContactsSearch: React.FC = () => {
  return (
    <div className={cnb('searchSectionWrapper')}>
      <p className={cnb('subtitle')}>Search for a contact</p>
      <div className={cnb('search')}>
        <CustomInput title="Search..." setValue={() => null} classNameForWrapper={cnb('inputWrapper')} />
        <div className={cnb('iconWrapper')}>
          <SearchSvg />
        </div>
      </div>
    </div>
  )
}

export default ContactsSearch
