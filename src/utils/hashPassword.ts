import bcrypt from 'bcryptjs'
const salt = bcrypt.genSaltSync(10)

export const hashPassword = (password: string) => {
  return bcrypt.hashSync(password, salt)
}

// import * as bcrypt from 'bcryptjs'

// export function hashPassword(rawPassword: string) {
//   const SALT = bcrypt.genSaltSync()
//   return bcrypt.hashSync(rawPassword, SALT)
// }

export function comparePasswords(rawPassword: string, hash: string) {
  return bcrypt.compareSync(rawPassword, hash)
}
