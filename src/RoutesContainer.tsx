import classNames from 'classnames/bind'
import React, { Suspense } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import styles from './App.module.scss'
import Loader from './components/UiKit/Loader/Loader'
const cnb = classNames.bind(styles)

const AuthorizationPage = React.lazy(() => import('./pages/Authorization/Authorization'))
const ContactsPage = React.lazy(() => import('./pages/Contacts/Contacts'))
interface Props {
  isAuth: boolean
}
const RoutesContainer: React.FC<Props> = ({ isAuth }) => {
  const navigate = useNavigate()
  React.useEffect(() => {
    if (!isAuth) {
      navigate('/auth', { replace: true })
    }
  }, [isAuth])

  return (
    <Suspense
      fallback={
        <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
          <Loader />
        </div>
      }
    >
      <Routes>
        <Route path="/auth" element={<AuthorizationPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Suspense>
  )
}

export default RoutesContainer
