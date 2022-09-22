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
import { userSlice } from '@src/store/reducers/UserSlice'
const Authorization: React.FC = () => {
  const loginForm = useFormik<ILoginForm>({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: loginSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit: async res => res.login,
  })

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isValid } = loginForm

  const {} = useTypedSelector(state => state.userReducer)
  const dispatch = useTypedDispatch()

  return (
    <div className={cnb('pageWrapper')}>
      <div className={cnb('formWrapper')}>
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
          <Checkbox label="Remember me" />
          <button onClick={() => null} className={cnb('button', { correct: isValid })}>
            <p className={cnb('buttonText')}>Sign In</p>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Authorization
