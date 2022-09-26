import { CloseSvg } from '@src/icons/Icons'
import classNames from 'classnames/bind'
import React, { memo } from 'react'
import styles from './CloseButton.module.scss'

interface Props {
	handleClose: () => void
}

const cnb = classNames.bind(styles)
const CloseButton: React.FC<Props> = memo(({ handleClose }) => {
	return (
		<button className={cnb('closeButton')} onClick={handleClose}>
			<CloseSvg />
		</button>
	)
})
export default CloseButton
