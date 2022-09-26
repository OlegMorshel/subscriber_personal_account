export interface IMenuItem {
	id: number
	label: MenuItemLabelType
	url: string
}

export type MenuItemLabelType = "Sign Out" | "Change data"
