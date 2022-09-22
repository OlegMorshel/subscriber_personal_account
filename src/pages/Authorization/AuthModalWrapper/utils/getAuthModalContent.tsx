import { AuthModalContentType } from '../AuthModalWrapper'
import LoginModalContent from '../components/LoginModalContent/LoginModalContent'

export const getAuthModalContent = (modal: AuthModalContentType): JSX.Element => {
  switch (modal) {
    case AuthModalContentType.LOGIN:
      return <>Login</>
    case AuthModalContentType.REGISTRATION:
      return <>Registration</>
    default:
      return <></>
  }
}
