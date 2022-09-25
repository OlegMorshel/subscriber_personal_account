import instance from '../instance'
import { ApiDataResponseType } from '../types'
import { IAddToken, IIdToken } from './types'

export const apiAddToken = (params: IAddToken): Promise<ApiDataResponseType<IAddToken>> => {
	return instance.post('/tokens', { ...params })
}

export const apiRemoveToken = (params: IIdToken) => {
	return instance.delete(`/tokens/${params.id}`)
}

export const apiGetTokenById = (param: IIdToken) => {
	return instance.get(`/tokens?id=${param.id}`)
}
