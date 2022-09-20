import RoutesContainer from '@src/RoutesContainer'
import React from 'react'

const AuthProvider: React.FC = () => {
  return (
    <>
      <RoutesContainer isAuth />
    </>
  )
}

export default AuthProvider
