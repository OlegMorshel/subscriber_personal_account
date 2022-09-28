import Input from "@src/components/UiKit/Input/Input"
import useCreateAdmin from "@src/hooks/mutation/admin/useCreateAdmin"
import { hashPassword } from "@src/utils/hashPassword"
import classNames from "classnames/bind"
import { useFormik } from "formik"
import React from "react"
import styles from "./RegistrationContent.module.scss"
import { RegistrationValidationSchema } from "./utils/RegistrationValidationSchema"
const cnb = classNames.bind(styles)

interface IRegistrationValues {
	id: string
	name: string
	phone: string
	login: string
	password: string
	passwordAgain: string
}

interface Props {
	openLoginPage: () => void
}

const RegistrationContent: React.FC<Props> = ({ openLoginPage }) => {
	const { mutate: register } = useCreateAdmin()
	const registrationForm = useFormik<IRegistrationValues>({
		initialValues: {
			id: "",
			name: "",
			phone: "",
			login: "",
			password: "",
			passwordAgain: "",
		},
		validateOnBlur: true,
		validateOnChange: true,
		validateOnMount: true,
		validationSchema: RegistrationValidationSchema,
		onSubmit: values =>
			register({
				login: values.login,
				name: values.name,
				password: hashPassword(values.passwordAgain),
				phone: values.phone,
			}),
	})
	const { values, errors, touched, handleBlur, handleChange, handleSubmit, isValid } = registrationForm

	return (
		<>
			<p className={cnb("title")}>Registration</p>
			<form onSubmit={handleSubmit}>
				<Input
					setValue={handleChange}
					title="Name, surname"
					id="name"
					name="name"
					error={errors.name}
					touched={touched.name}
					handleBlur={handleBlur}
					value={values.name}
					classNameForWrapper={cnb("inputWrapper")}
				/>
				<Input
					setValue={handleChange}
					title="Phone"
					id="phone"
					name="phone"
					error={errors.phone}
					touched={touched.phone}
					handleBlur={handleBlur}
					value={values.phone}
					classNameForWrapper={cnb("inputWrapper")}
					isNumber
					isPhone
				/>
				<Input
					setValue={handleChange}
					title="Login"
					id="login"
					name="login"
					error={errors.login}
					touched={touched.login}
					handleBlur={handleBlur}
					value={values.login}
					classNameForWrapper={cnb("inputWrapper")}
				/>
				<Input
					setValue={handleChange}
					title="Password"
					id="password"
					name="password"
					error={errors.password}
					touched={touched.password}
					handleBlur={handleBlur}
					value={values.password}
					isPassword
					classNameForWrapper={cnb("inputWrapper")}
				/>
				<Input
					setValue={handleChange}
					title="Repeate password"
					id="passwordAgain"
					name="passwordAgain"
					error={errors.passwordAgain}
					touched={touched.passwordAgain}
					handleBlur={handleBlur}
					value={values.passwordAgain}
					isPassword
					classNameForWrapper={cnb("inputWrapper")}
				/>
				<button onClick={openLoginPage} className={cnb("loginButton")}>
					<p className={cnb("loginButtonText")}>Login</p>
				</button>
				<button type="submit" className={cnb("button", { correct: isValid })}>
					<p className={cnb("buttonText")}>Register</p>
				</button>
			</form>
		</>
	)
}

export default RegistrationContent
