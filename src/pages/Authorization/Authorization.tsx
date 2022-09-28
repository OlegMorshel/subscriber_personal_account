import React, { useState } from "react"
import LoginContent from "./components/LoginContent/LoginContent"
import RegistrationContent from "./components/RegistrationContent/RegistrationContent"
import styles from "@src/pages/Authorization/Authorization.module.scss"
import classNames from "classnames/bind"

const cnb = classNames.bind(styles)

export enum LoginPageMode {
	LOGIN = "LOGIN",
	REGISTRATION = "REGISTRATION",
}

const Authorization: React.FC = () => {
	const [mode, setMode] = useState<LoginPageMode>(LoginPageMode.LOGIN)

	const openRegistrationPage = () => {
		setMode(LoginPageMode.REGISTRATION)
	}

	const openLoginPage = () => {
		setMode(LoginPageMode.LOGIN)
	}

	return (
		<div className={cnb("pageWrapper")}>
			<div className={cnb("formWrapper")}>
				{mode === LoginPageMode.LOGIN && <LoginContent openRegistrationPage={openRegistrationPage} />}
				{mode === LoginPageMode.REGISTRATION && <RegistrationContent openLoginPage={openLoginPage} />}
			</div>
		</div>
	)
}

export default Authorization
