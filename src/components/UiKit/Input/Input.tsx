import classNames from 'classnames/bind'
import React, { ChangeEventHandler, FocusEventHandler, useEffect, useMemo, useRef, useState } from 'react'
import { checkErrorAndTouched } from '@src/utils/validationUtils'
import Styles from './Input.module.scss'
import useClickOutside from '@src/hooks/useClickOutside'
import { CorrectSignSvg, EyeSvg } from '@src/icons/Icons'

const cnb = classNames.bind(Styles)

interface CountryType {
  countryNameEn: string
  countryNameLocal: string
  countryCode: string
  currencyCode: string
  currencyNameEn: string
  tinType: string
  tinName: string
  officialLanguageCode: string
  officialLanguageNameEn: string
  officialLanguageNameLocal: string
  countryCallingCode: string
  areaCodes?: string[]
  region: string
  flag: string
  countryNameRu: string
}

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

const Input: React.FC<InputProps> = ({
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
  const [currentCountry, setCurrentCountry] = useState('RU')
  const [currentCode, setCurrentCode] = useState('7')
  const [countries, setCountries] = useState<CountryType[]>([])
  const [dropDownShown, setDropDownShown] = useState(false)
  const [hideText, setHideText] = React.useState(isPassword)
  const [focused, setFocused] = React.useState(titleAlwaysUp)
  const [searchQuery, setSearchQuery] = useState('')

  const ref = useRef<HTMLDivElement>(null)
  useClickOutside(ref, () => setDropDownShown(false))
  const onFocus = () => {
    setFocused(true)
  }
  const countriesFiltered = useMemo(() => {
    return countries.filter(country => country.countryNameRu.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [countries, searchQuery])

  const onBlur = (e: React.FocusEvent<Element, Element>) => {
    if (!titleAlwaysUp) setFocused(false)
    if (handleBlur) {
      handleBlur(e)
    }
  }

  const getCountryCode = () => {
    const initCountryCode = countries.filter(item => item.countryCode === currentCountry)[0]?.countryCallingCode
    return initCountryCode
  }

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = event => {
    if (isNumber && isNaN(Number(event.currentTarget.value))) {
      return
    }
    setValue(event)
  }

  const isError: boolean = checkErrorAndTouched(!!error, touched, true)

  const getInputClassNames = () => {
    return cnb(
      { input: !isTextArea },
      { focused: focused || !!value },
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

  const getInputComponent = () => {
    if (isTextArea) {
      return (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={setValue}
          disabled={isDisabled}
          className={getInputClassNames()}
          onFocus={onFocus}
          onBlur={onBlur}
          {...props}
        />
      )
    }
    return (
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
    )
  }

  return (
    <div className={cnb({ wrapper: isErrorText }, { error: isError }, { disabled: isDisabled }, 'relative', classNameForWrapper)}>
      <div className={cnb('title', { withLeftIcon: leftIcon }, { withRightIcon: rightIcon }, { focused: focused || !!value })}>
        <label htmlFor={id}>{title}</label>
      </div>
      <div className={cnb('inner', { phoneInner: isPhone })}>
        <div className={cnb('icon', 'left')} onClick={onIconClick}>
          {leftIcon}
        </div>
        {getInputComponent()}
        {isPassword && (
          <div className={cnb('icon', 'right', 'passwordIcon')} onClick={() => setHideText(prev => !prev)}>
            {!isCorrect ? <EyeSvg /> : <CorrectSignSvg />}
          </div>
        )}
        {!isPassword && (
          <div
            className={cnb('icon', 'right', { disabled: isDisabled })}
            onClick={() => (!isDisabled && onIconClick ? onIconClick() : null)}
          >
            {isCorrect ? <CorrectSignSvg /> : rightIcon}
          </div>
        )}
        {isError && isErrorText && <div className={cnb('errorText')}>{error}</div>}
        {advice && !isError && <div className={cnb('adviceText')}>{advice}</div>}
      </div>
    </div>
  )
}

export default Input
