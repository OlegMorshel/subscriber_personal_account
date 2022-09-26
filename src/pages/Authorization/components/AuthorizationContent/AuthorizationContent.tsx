import React from "react"
import { LoginPageMode } from "../../Authorization"
import LoginContent from "./components/LoginContent/LoginContent"
import RegistrationContent from "./components/RegistrationContent/RegistrationContent"

interface Props {
	contentType: LoginPageMode
	setContentType: React.Dispatch<React.SetStateAction<LoginPageMode>>
}
const AuthorizationContentWrapper: React.FC<Props> = ({ contentType, setContentType }) => {
	const AuthorizationContent = ({ type }: { type: LoginPageMode }): JSX.Element => {
		switch (type) {
			case LoginPageMode.LOGIN:
				return <LoginContent setContentType={setContentType} />
			case LoginPageMode.REGISTRATION:
				return <RegistrationContent setContentType={setContentType} />
			default:
				return <></>
		}
	}
	return <AuthorizationContent type={contentType} />
}

export default AuthorizationContentWrapper
