import { IMenuItem } from '../../types'

export const getHeaderMenuItemList = (): Array<IMenuItem> => [
  {
    id: 1,
    label: 'Sign Out',
    url: 'login',
  },
  {
    id: 2,
    label: 'Create profile',
    url: 'registration',
  },
  {
    id: 3,
    label: 'Change data',
    url: 'updateProfile',
  },
]
