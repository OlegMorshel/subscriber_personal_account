import { IMenuItem } from '../../types'

export const getHeaderMenuItemList = (): Array<IMenuItem> => [
  {
    id: 1,
    label: 'Change data',
    url: 'updateProfile',
  },
  {
    id: 2,
    label: 'Sign Out',
    url: 'login',
  },
]
