import instance from '../instance'
import { IId } from './types'

export const apiGetUsers = (query: string) => {
	return instance.get(`/users?q=${query}`)
}

export const apiGetUserById = ({ id }: IId) => {
	console.log('id', id)
	return instance.get(`/users?id=${id}`)
}
