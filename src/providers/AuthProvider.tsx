import { useTypedSelector } from '@src/hooks/useTypedSelector'
import RoutesContainer from '@src/RoutesContainer'
import React from 'react'

const AuthProvider: React.FC = () => {
	const { isAuth } = useTypedSelector(state => state.authReducer)
	return <RoutesContainer isAuth={isAuth} />
}

export default AuthProvider
