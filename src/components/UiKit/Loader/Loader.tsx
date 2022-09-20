import classNames from 'classnames/bind'
import React from 'react'
import Styles from './Loader.module.scss'

const cnb = classNames.bind(Styles)

interface Props {
  className?: string
  small?: boolean
  big?: boolean
  white?: boolean
  isLoading?: boolean
}

const Loader: React.FC<Props> = ({ className, small, white, isLoading = true, big }) => {
  return <div className={cnb('loader', { isLoading }, className, { small }, { white }, { big })} />
}

export default React.memo(Loader)
