import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthProvider from './providers/AuthProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<AuthProvider />
	</React.StrictMode>
)
