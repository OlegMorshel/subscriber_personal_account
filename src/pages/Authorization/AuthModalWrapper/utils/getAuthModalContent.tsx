import { AuthModalContentType } from '../AuthModalWrapper'

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
