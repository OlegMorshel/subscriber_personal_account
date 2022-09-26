import Input from '@src/components/UiKit/Input/Input'
import { CloseSvg } from '@src/icons/Icons'
import classNames from 'classnames/bind'
import React from 'react'
import styles from './ContactsSearch.module.scss'
const cnb = classNames.bind(styles)

interface Props {
	setQuery: React.Dispatch<React.SetStateAction<string>>
	value: string
}
const ContactsSearch: React.FC<Props> = ({ setQuery, value }) => {
	return (
		<div className={cnb('searchSectionWrapper')}>
			<p className={cnb('subtitle')}>Search for a contact</p>
			<div className={cnb('search')}>
				<Input title="Search..." value={value} setValue={e => setQuery(e.target.value)} classNameForWrapper={cnb('inputWrapper')} />
				<div className={cnb('iconWrapper')} onClick={() => setQuery('')}>
					<CloseSvg />
				</div>
			</div>
		</div>
	)
}

export default ContactsSearch
