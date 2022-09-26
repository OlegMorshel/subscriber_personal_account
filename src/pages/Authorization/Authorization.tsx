import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from '@src/pages/Authorization/Authorization.module.scss'
const cnb = classNames.bind(styles)
import AuthorizationContentWrapper from './components/AuthorizationContent/AuthorizationContent'

export enum LoginPageMode {
	LOGIN = 'LOGIN',
	REGISTRATION = 'REGISTRATION',
}

const Authorization: React.FC = () => {
	const [mode, setMode] = useState<LoginPageMode>(LoginPageMode.LOGIN)

	return (
		<div className={cnb('pageWrapper')}>
			<div className={cnb('formWrapper')}>
				<AuthorizationContentWrapper contentType={mode} setContentType={setMode} />
			</div>
		</div>
	)
}

export default Authorization
