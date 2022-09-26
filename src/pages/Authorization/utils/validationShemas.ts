import * as Yup from 'yup'
export const loginSchema = Yup.object({
	login: Yup.string().email('Invalid email format').required('Login is requred'),
	password: Yup.string().required().min(6, 'Password must be contain of 6 or more than 6 character'),
})
