export interface IUser {
	id: number
	cover?: string
	name: string
	job?: string
	bio?: string
	email?: string
	phone: string
	status: ContactStatusType
}

export type ContactStatusType = 'online' | 'offline' | 'pending' | 'busy'

export interface IId {
	id: number
}
export interface IEditUser {
	id: number
	name: string
	email: string
	phone: string
	job: string
}
