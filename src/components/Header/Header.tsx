import classNames from 'classnames/bind'
import React from 'react'
import styles from './Header.module.scss'
const cnb = classNames.bind(styles)
interface Props {
  classNamesForWrapper?: string
}
const Header: React.FC<Props> = ({ classNamesForWrapper }) => {
  return <div className={cnb(classNamesForWrapper, 'headerWrapper')}>Header</div>
}

export default Header
