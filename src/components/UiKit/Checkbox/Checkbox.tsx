import React, { memo } from 'react'
import styles from './Checkbox.module.scss'
import classNames from 'classnames/bind'
const cnb = classNames.bind(styles)

export interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
	label?: string
	type?: 'default' | 'table'
}

const Checkbox: React.FC<CheckboxProps> = memo(({ label, type, id, ...props }) => (
	<div className={cnb('wrapper')}>
		<input
			id={id}
			type="checkbox"
			className={cnb('defaultCheckbox', {
				tableType: type === 'table' && !!!props.checked,
			})}
			{...props}
		/>
		<p>{label}</p>
	</div>
))

export default Checkbox
