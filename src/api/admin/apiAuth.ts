import instance from "../instance"
import { ApiDataResponseType } from "../types"
import { IAddAdmin, IAdmin, IGetAdminByLogin } from "./types"

export const apiCreateAdmin = (params: IAddAdmin): Promise<ApiDataResponseType<IAddAdmin>> => {
	return instance.post("/adminDataBase", { ...params })
}

export const apiGetAdminByLogin = (params: IGetAdminByLogin): Promise<ApiDataResponseType<IAdmin[]>> => {
	return instance.get(`/adminDataBase?login=${params.login}`)
}
