export interface IAddAdmin {
  name: string
  phone: string
  login: string
  password: string
}

export interface IGetAdminByLogin {
  login: string
}
export interface IAuthAdmin {
  login: string
  password: string
}

export interface IAdmin {
  name: string
  phone: string
  login: string
  password: string
  id: number
}
