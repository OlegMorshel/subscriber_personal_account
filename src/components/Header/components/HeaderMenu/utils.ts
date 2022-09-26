import { IMenuItem } from "../../types"

export const getHeaderMenuItemList = (): Array<IMenuItem> => [
	{
		id: 1,
		label: "Sign Out",
		url: "login",
	},
]
