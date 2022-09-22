import useClickOutside from '@src/hooks/useClickOutside'
import { AddContactSvg } from '@src/icons/Icons'
import classNames from 'classnames/bind'
import React, { useRef, useState } from 'react'
import Picture from '../UiKit/Picture/Picture'
import HeaderMenu from './components/HeaderMenu/HeaderMenu'
import { getHeaderMenuItemList } from './components/HeaderMenu/utils'
import styles from './Header.module.scss'
const cnb = classNames.bind(styles)
interface Props {
  classNamesForWrapper?: string
  cover?: string
}
const Header: React.FC<Props> = ({ classNamesForWrapper, cover }) => {
  const [isOpenHeaderMenu, setIsOpenHeaderMenu] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useClickOutside(ref, () => setIsOpenHeaderMenu(false))
  return (
    <div className={cnb(classNamesForWrapper, 'headerWrapper')}>
      <div className={cnb('addContactIcon')}>
        <AddContactSvg />
      </div>
      <div className={cnb('iconWrapper')} onClick={() => setIsOpenHeaderMenu(prev => !prev)} ref={ref}>
        <Picture alt="photo" src={cover} />
      </div>
      {isOpenHeaderMenu && (
        <div className={cnb('headerMenuWrapper')}>
          <HeaderMenu menuList={getHeaderMenuItemList()} />
        </div>
      )}
    </div>
  )
}

export default Header
