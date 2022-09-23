import * as Yup from 'yup'

export const RegistrationValidationSchema = Yup.object({
  id: Yup.string(),
  name: Yup.string().required('Required field!'),
  phone: Yup.string().length(11).max(11).required('Required field!'),
  login: Yup.string().required('Required field!'),
  password: Yup.string().required('Required field!'),
  passwordAgain: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required field!'),
})
