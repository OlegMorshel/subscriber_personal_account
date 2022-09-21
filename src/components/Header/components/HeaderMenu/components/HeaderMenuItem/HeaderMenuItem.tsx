import { IMenuItem } from '@src/components/Header/types'
import classNames from 'classnames/bind'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './HeaderMenuItem.module.scss'
const cnb = classNames.bind(styles)
interface Props {
  menuItem: IMenuItem
}
const HeaderMenuItem: React.FC<Props> = ({ menuItem }) => {
  const navidate = useNavigate()

  const menuItemClick = (relativePath: string) => {
    return navidate({ pathname: relativePath }, { replace: true })
  }

  return (
    <div className={cnb('headerMenuItemWrapper')} onClick={() => menuItemClick(menuItem?.url)}>
      {menuItem?.label}
    </div>
  )
}

export default HeaderMenuItem
