import instance from '../instance'
import { ApiDataResponseType } from '../types'
import { IAddToken } from './types'

export const apiAddToken = (params: IAddToken): Promise<ApiDataResponseType<IAddToken>> => {
  return instance.post('/tokens', { ...params })
}
