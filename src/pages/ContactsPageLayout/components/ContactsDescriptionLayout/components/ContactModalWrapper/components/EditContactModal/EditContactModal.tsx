import { IUser } from '@src/api/users/types'
import Input from '@src/components/UiKit/Input/Input'
import useEditUser from '@src/hooks/mutation/users/useEditUser'
import classNames from 'classnames/bind'
import { useFormik } from 'formik'
import React from 'react'
import { EditContactValidationSchema } from '../../../utils/validationSchemas'
import { ContactModalContentType } from '../../ContactModalWrapper'
import styles from './EditContactModal.module.scss'
const cnb = classNames.bind(styles)

interface EditContactFormValues {
	name: string
	email: string
	phone: string
	job: string
}

interface Props {
	setModal: React.Dispatch<React.SetStateAction<ContactModalContentType>>
	selectedUser: IUser | null
}
const EditContactModalContent: React.FC<Props> = ({ setModal, selectedUser }) => {
	const { mutate: editUser } = useEditUser()

	const editContactSubmitAction = (values: EditContactFormValues) => {
		if (selectedUser?.id !== -1) {
			editUser({ ...values, id: selectedUser?.id ?? -1 })
			setModal(ContactModalContentType.NONE)
		}
	}

	const editContactForm = useFormik<EditContactFormValues>({
		initialValues: {
			name: selectedUser?.name ?? '',
			email: selectedUser?.email ?? '',
			phone: selectedUser?.phone ?? '',
			job: selectedUser?.job ?? '',
		},
		validationSchema: EditContactValidationSchema,
		onSubmit: values => editContactSubmitAction(values),
	})
	const { values, errors, handleBlur, handleChange, handleSubmit, touched, isValid } = editContactForm
	return (
		<div className={cnb('editModalContentWrapper')}>
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
				<button onClick={() => handleSubmit()} className={cnb('button', { correct: isValid })}>
					<p className={cnb('buttonText')}>Edit</p>
				</button>
			</form>
		</div>
	)
}

export default EditContactModalContent
