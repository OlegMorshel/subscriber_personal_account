import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from '@src/pages/Authorization/Authorization.module.scss'
const cnb = classNames.bind(styles)
import { useFormik } from 'formik'
import { ILoginForm } from './utils/types'
import { loginSchema } from './utils/validationShemas'
import Input from '@src/components/UiKit/Input/Input'
import Checkbox from '@src/components/UiKit/Checkbox/Checkbox'
import { useTypedSelector } from '@src/hooks/useTypedSelector'
import { useTypedDispatch } from '@src/hooks/useTypedDispatch'
import AuthorizationContentWrapper from './components/AuthorizationContent/AuthorizationContent'

export enum LoginPageMode {
  LOGIN = 'LOGIN',
  REGISTRATION = 'REGISTRATION',
}

const Authorization: React.FC = () => {
  const [mode, setMode] = useState<LoginPageMode>(LoginPageMode.LOGIN)
  const {} = useTypedSelector(state => state.authReducer)
  const dispatch = useTypedDispatch()

  return (
    <div className={cnb('pageWrapper')}>
      <div className={cnb('formWrapper')}>
        <AuthorizationContentWrapper contentType={mode} setContentType={setMode} />
      </div>
    </div>
  )
}

export default Authorization
