import instance from '../instance'
import { ApiDataResponseType } from '../types'
import { IAddToken, IRemoveToken } from './types'

export const apiAddToken = (params: IAddToken): Promise<ApiDataResponseType<IAddToken>> => {
  return instance.post('/tokens', { ...params })
}

export const apiRemoveToken = (params: IRemoveToken) => {
  return instance.delete(`/tokens/${params.id}`)
}
