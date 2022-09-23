import Checkbox from '@src/components/UiKit/Checkbox/Checkbox'
import Input from '@src/components/UiKit/Input/Input'
import { LoginPageMode } from '@src/pages/Authorization/Authorization'
import classNames from 'classnames/bind'
import { useFormik } from 'formik'
import React from 'react'
import styles from './RegistrationContent.module.scss'
import { RegistrationValidationSchema } from './utils/RegistrationValidationSchema'
const cnb = classNames.bind(styles)
interface Props {
  setContentType: React.Dispatch<React.SetStateAction<LoginPageMode>>
}

const RegistrationContent: React.FC<Props> = ({ setContentType }) => {
  const registrationForm = useFormik({
    initialValues: {
      id: '',
      name: '',
      phone: '',
      login: '',
      password: '',
      passwordAgain: '',
    },
    validationSchema: RegistrationValidationSchema,
    onSubmit: () => console.log('open'),
  })
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isValid } = registrationForm
  return (
    <>
      <p className={cnb('title')}>Registration</p>
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
          classNameForWrapper={cnb('inputWrapper')}
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
          classNameForWrapper={cnb('inputWrapper')}
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
          classNameForWrapper={cnb('inputWrapper')}
        />
        <Input
          setValue={handleChange}
          title="Type your account`s email"
          id="password"
          name="password"
          error={errors.password}
          touched={touched.password}
          handleBlur={handleBlur}
          value={values.password}
          isPassword
          classNameForWrapper={cnb('inputWrapper')}
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
          classNameForWrapper={cnb('inputWrapper')}
        />
        <button onClick={() => setContentType(LoginPageMode.LOGIN)} className={cnb('loginButton')}>
          <p className={cnb('loginButtonText')}>Login</p>
        </button>
        <button onClick={() => null} className={cnb('button', { correct: isValid })}>
          <p className={cnb('buttonText')}>Register</p>
        </button>
      </form>
    </>
  )
}

export default RegistrationContent
