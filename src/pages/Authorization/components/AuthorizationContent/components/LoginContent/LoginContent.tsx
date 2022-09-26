import React, { useEffect, useState } from 'react'
import styles from '@src/pages/Authorization/components/AuthorizationContent/components/LoginContent/LoginContent.module.scss'
import { useFormik } from 'formik'
import Input from '@src/components/UiKit/Input/Input'
import classNames from 'classnames/bind'
import { ILoginForm } from '@src/pages/Authorization/utils/types'
import Checkbox from '@src/components/UiKit/Checkbox/Checkbox'
import { loginSchema } from '@src/pages/Authorization/utils/validationShemas'
import { LoginPageMode } from '@src/pages/Authorization/Authorization'
import useAuthAdmin from '@src/hooks/query/admin/useAuthAdmin'
const cnb = classNames.bind(styles)
interface Props {
	setContentType: React.Dispatch<React.SetStateAction<LoginPageMode>>
}
const LoginContent: React.FC<Props> = ({ setContentType }) => {
	const [loginState, setLoginState] = useState<ILoginForm>({ login: '', password: '' })

	useAuthAdmin({ login: loginState.login, password: loginState.password })

	const loginForm = useFormik<ILoginForm>({
		initialValues: {
			login: '',
			password: '',
		},
		validationSchema: loginSchema,
		validateOnBlur: true,
		validateOnChange: true,
		validateOnMount: true,
		onSubmit: values => setLoginState({ login: values.login, password: values.password }),
	})

	const { values, errors, touched, handleBlur, handleChange, handleSubmit, isValid, isSubmitting } = loginForm
	useEffect(() => {
		if (isSubmitting) {
			setLoginState({ login: '', password: '' })
		}
	}, [isSubmitting])
	return (
		<>
			<p className={cnb('title')}>Login</p>
			<form onSubmit={handleSubmit}>
				<Input
					setValue={handleChange}
					title="Type your account`s email"
					id="login"
					name="login"
					error={errors.login}
					touched={touched.login}
					handleBlur={handleBlur}
					value={values.login}
					classNameForWrapper={cnb('inputWrapper')}
				/>
				<Input
					setValue={handleChange}
					title="Type your password"
					id="password"
					name="password"
					isPassword
					error={errors.password}
					touched={touched.password}
					handleBlur={handleBlur}
					value={values.password}
					classNameForWrapper={cnb('inputWrapper')}
				/>
				<button onClick={() => setContentType(LoginPageMode.REGISTRATION)} className={cnb('registrationButton')}>
					<p className={cnb('registrationButtonText')}>Registration</p>
				</button>
				<Checkbox label="Remember me" />
				<button type="submit" className={cnb('button', { correct: isValid })}>
					<p className={cnb('buttonText')}>Sign In</p>
				</button>
			</form>
		</>
	)
}

export default LoginContent
