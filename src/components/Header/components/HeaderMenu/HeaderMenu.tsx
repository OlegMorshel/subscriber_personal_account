import classNames from 'classnames/bind'
import React from 'react'
import { IMenuItem } from '../../types'
import HeaderMenuItem from './components/HeaderMenuItem/HeaderMenuItem'
import styles from './HeaderMenu.module.scss'
const cnb = classNames.bind(styles)
interface Props {
  menuList: IMenuItem[]
}
const HeaderMenu: React.FC<Props> = ({ menuList }) => {
  return (
    <div className={cnb('headerMenuWrapper')}>
      {menuList?.map(menuItem => (
        <HeaderMenuItem menuItem={menuItem} key={menuItem.id} />
      ))}
    </div>
  )
}

export default HeaderMenu
