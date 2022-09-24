import { IMenuItem, MenuItemLabelType } from '@src/components/Header/types'
import useDeleteToken from '@src/hooks/mutation/token/useDeleteToken'
import { useTypedSelector } from '@src/hooks/useTypedSelector'
import classNames from 'classnames/bind'
import React from 'react'
import styles from './HeaderMenuItem.module.scss'
const cnb = classNames.bind(styles)
interface Props {
  menuItem: IMenuItem
}
const HeaderMenuItem: React.FC<Props> = ({ menuItem }) => {
  const { tokenId } = useTypedSelector(state => state.authReducer)
  const { mutate: signOut } = useDeleteToken()

  const menuItemmAction = (label: MenuItemLabelType) => {
    switch (label) {
      case 'Sign Out':
        console.log('label', label)
        return signOut({ id: tokenId })
      default:
        break
    }
  }
  return (
    <div className={cnb('headerMenuItemWrapper')} onClick={() => menuItemmAction(menuItem.label)}>
      {menuItem?.label}
    </div>
  )
}

export default HeaderMenuItem
