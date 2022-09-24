import { useTypedSelector } from '@src/hooks/useTypedSelector'
import RoutesContainer from '@src/RoutesContainer'
import React from 'react'

const AuthProvider: React.FC = () => {
  const { token } = useTypedSelector(state => state.authReducer)
  return (
    <>
      <RoutesContainer isAuth />
    </>
  )
}

export default AuthProvider
