import instance from '../instance'
import { IAddUser, IEditUser, IId } from './types'

export const apiGetUsers = (query: string) => {
	return instance.get(`/users?q=${query}`)
}

export const apiGetUserById = ({ id }: IId) => {
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

export const apiDeleteUser = ({ id }: IId) => {
	return instance.delete(`/users/${id}`)
}

export const apiAddUser = (params: IAddUser) => {
	return instance.post('/users', { ...params })
}
