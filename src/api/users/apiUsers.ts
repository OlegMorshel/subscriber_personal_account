import instance from '../instance'
import { IEditUser, IId } from './types'

export const apiGetUsers = (query: string) => {
	return instance.get(`/users?q=${query}`)
}

export const apiGetUserById = ({ id }: IId) => {
	console.log('id', id)
	return instance.get(`/users?id=${id}`)
}

export const apiEditUser = (param: IEditUser) => {
	return instance.put(`/users/${param.id}`, {
		name: param.name,
		job: param.job,
		email: param.email,
		phone: param.phone,
	})
}
