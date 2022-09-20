import Input from '@src/components/UiKit/Input/Input'
import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from '@src/pages/Authorization/Authorization.module.scss'
const cnb = classNames.bind(styles)
import { useFormik } from 'formik'
import { ILoginForm } from './utils/types'
import { loginSchema } from './utils/validationShemas'
const Authorization: React.FC = () => {
  const loginForm = useFormik<ILoginForm>({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async res => res.login,
  })

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = loginForm
  return (
    <div className={cnb('pageWrapper')}>
      <div className={cnb('formWrapper')}>
        <form onSubmit={handleSubmit}>
          <Input
            setValue={handleChange}
            title="Login"
            id="login"
            name="login"
            error={errors.login}
            touched={touched.login}
            handleBlur={handleBlur}
            value={values.login}
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
          />
        </form>
      </div>
    </div>
  )
}

export default Authorization
