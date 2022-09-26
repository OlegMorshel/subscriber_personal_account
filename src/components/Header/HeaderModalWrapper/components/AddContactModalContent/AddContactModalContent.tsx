import Input from '@src/components/UiKit/Input/Input'
import useAddUser from '@src/hooks/mutation/users/useAddUser'
import classNames from 'classnames/bind'
import { useFormik } from 'formik'
import React from 'react'
import { HeaderModalContentType } from '../../HeaderModalWrapper'
import { AddContactValidationSchema } from '../../utils/validationSchemas'
import styles from './AddContactModalContent.module.scss'
const cnb = classNames.bind(styles)

interface AddContactFormValues {
	name: string
	email: string
	phone: string
	job: string
	bio: string
}

interface Props {
	setModal: React.Dispatch<React.SetStateAction<HeaderModalContentType>>
}
const AddContactModalContent: React.FC<Props> = ({ setModal }) => {
	const { mutate: createUser } = useAddUser({ setModal })
	const editContactForm = useFormik<AddContactFormValues>({
		initialValues: {
			name: '',
			email: '',
			phone: '',
			job: '',
			bio: '',
		},
		validationSchema: AddContactValidationSchema,
		validateOnBlur: true,
		validateOnChange: true,
		validateOnMount: true,
		onSubmit: values => createUser(values),
	})
	const { values, errors, handleBlur, handleChange, handleSubmit, touched, isValid } = editContactForm
	return (
		<div className={cnb('addModalContentWrapper')}>
			<p className={cnb('title')}>Add contact</p>
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
					isNumber
					isPhone
				/>
				<Input
					setValue={handleChange}
					title="Email"
					id="email"
					name="email"
					error={errors.email}
					touched={touched.email}
					handleBlur={handleBlur}
					value={values.email}
					classNameForWrapper={cnb('inputWrapper')}
				/>
				<Input
					setValue={handleChange}
					title="Job"
					id="job"
					name="job"
					error={errors.job}
					touched={touched.job}
					handleBlur={handleBlur}
					value={values.job}
					classNameForWrapper={cnb('inputWrapper')}
				/>
				<Input
					setValue={handleChange}
					title="Biography"
					id="bio"
					name="bio"
					error={errors.bio}
					touched={touched.bio}
					handleBlur={handleBlur}
					value={values.bio}
					classNameForWrapper={cnb('inputWrapper')}
				/>
				<button type="submit" className={cnb('button', { correct: isValid })}>
					<p className={cnb('buttonText')}>Add</p>
				</button>
			</form>
		</div>
	)
}

export default AddContactModalContent
