import classNames from 'classnames/bind'
import React, { Suspense } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import styles from './App.module.scss'
import Loader from './components/UiKit/Loader/Loader'
const cnb = classNames.bind(styles)

const AuthorizationPage = React.lazy(() => import('./pages/Authorization/Authorization'))
const ContactsPageLayout = React.lazy(() => import('./pages/ContactsPageLayout/ContactsPageLayout'))
interface Props {
  isAuth: boolean
}
const RoutesContainer: React.FC<Props> = ({ isAuth }) => {


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
        <Route path="/contacts" element={<ContactsPageLayout isAuth={isAuth} />} />
      </Routes>
    </Suspense>
  )
}

export default RoutesContainer
