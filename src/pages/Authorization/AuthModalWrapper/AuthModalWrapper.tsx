import classNames from 'classnames/bind'
import React from 'react'
import ReactModal from 'react-modal'
import styles from './AuthModalWrapper.module.scss'

const cnb = classNames.bind(styles)

export enum AuthModalContentType {
  REGISTRATION = 'REGISTRATION',
  LOGIN = 'LOGIN',
}

type Props = {
  title?: string
  type: AuthModalContentType
  handleSetModal: (type: AuthModalContentType) => void
  children: React.ReactNode
}
const AuthModalWrapper: React.FC<Props> = ({ children, title = '', type, handleSetModal }) => {
  return (
    <div className={cnb('modalOverlay')}>
      <ReactModal
        isOpen
        ariaHideApp={false}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        onRequestClose={() => null}
        overlayClassName={cnb('modalOverlay')}
        className={cnb('modalContainer', { loginModalWrapper: type === AuthModalContentType.LOGIN })}
      >
        <>{children}</>
      </ReactModal>
    </div>
  )
}
export default AuthModalWrapper
