import styles from './Input.module.scss'
import classNames from 'classnames/bind'
import React, { ChangeEventHandler, FocusEventHandler } from 'react'
import { checkErrorAndTouched } from '@src/utils/validationUtils'
import { EyeSvg, OpenEyeSvg } from '@src/icons/Icons'
export interface InputProps {
  title: string
  value?: string | number
  setValue: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  id?: string
  name?: string
  touched?: boolean
  classNameForWrapper?: string
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
  isTextArea?: boolean
  isPassword?: boolean
  isDisabled?: boolean
  isCorrect?: boolean
  error?: string
  /**
   * Включает или выключает текст ошибки. По умолчанию true
   */
  isErrorText?: boolean
  advice?: string
  onIconClick?: () => void
  handleBlur?: FocusEventHandler
  placeholder?: string
  isPhone?: boolean
  isNumber?: boolean
  autoComplete?: string
  titleAlwaysUp?: boolean
}
const cnb = classNames.bind(styles)
const CustomInput: React.FC<InputProps> = ({
  isCorrect,
  value,
  setValue,
  title,
  id = 'input',
  name = 'name',
  classNameForWrapper,
  leftIcon,
  rightIcon,
  isTextArea = false,
  isDisabled = false,
  isPassword,
  onIconClick,
  error,
  isErrorText = true,
  touched,
  advice,
  handleBlur,
  isPhone,
  isNumber,
  titleAlwaysUp = false,
  ...props
}) => {
  const [hideText, setHideText] = React.useState(isPassword)
  const [focused, setFocused] = React.useState(titleAlwaysUp)
  const isError: boolean = checkErrorAndTouched(!!error, touched, true)

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = event => {
    if (isNumber && isNaN(Number(event.currentTarget.value))) {
      return
    }
    setValue(event)
  }

  const onFocus = () => {
    setFocused(true)
  }

  const onBlur = (e: React.FocusEvent<Element, Element>) => {
    if (!titleAlwaysUp) setFocused(false)
    if (handleBlur) {
      handleBlur(e)
    }
  }
  const getInputClassNames = () => {
    return cnb(
      { input: !isTextArea },
      { focused: focused },
      { error: isError },
      { withLeftIcon: leftIcon },
      { withoutTitle: !title.length },
      { withRightIcon: rightIcon || isPassword || isCorrect },
      { disabled: isDisabled },
      { isCorrect },
      { textarea: isTextArea },
      { phone: isPhone }
    )
  }

  return (
    <div className={cnb('wrapper')}>
      <div className={cnb('title', { withLeftIcon: leftIcon }, { withRightIcon: rightIcon }, { focused: focused || !!value })}>
        <label htmlFor={id}>{title}</label>
      </div>
      {isPassword && (
        <div className={cnb('icon', 'right', 'passwordIcon')} onClick={() => setHideText(prev => !prev)}>
          {!hideText ? <EyeSvg /> : <OpenEyeSvg />}
        </div>
      )}
      <input
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        disabled={isDisabled}
        type={isPassword && hideText ? 'password' : 'text'}
        className={getInputClassNames()}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      />
      {isError && isErrorText && <div className={cnb('errorText')}>{error}</div>}
    </div>
  )
}

export default CustomInput