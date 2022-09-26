import { AxiosError } from 'axios'
import React, { ReactElement, ReactText } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const createNotification = (
	type: 'info' | 'success' | 'error' | 'dark' | 'warning',
	message: AxiosError | string
): ReactText | null => {
	if (type === 'info') {
		return toast.info(typeof message === 'string' ? message : message.message)
	}
	if (type === 'success') {
		return toast.success(typeof message === 'string' ? message : message.message)
	}
	if (type === 'warning') {
		return toast.warning(typeof message === 'string' ? message : message.message)
	}
	if (type === 'error') {
		return toast.error(typeof message === 'string' ? message : message.message)
	}
	if (type === 'dark') {
		return toast.dark(typeof message === 'string' ? message : message.message)
	}
	return null
}
interface Props {
	children: React.ReactNode
}

const NotificationsProvider: React.FC<Props> = ({ children }): ReactElement => {
	return (
		<>
			<ToastContainer
				position="bottom-left"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			{children}
		</>
	)
}

export default NotificationsProvider
