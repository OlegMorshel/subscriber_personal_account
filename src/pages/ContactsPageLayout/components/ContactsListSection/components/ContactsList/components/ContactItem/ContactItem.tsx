import { ContactStatusType } from '@src/api/users/types'
import Picture from '@src/components/UiKit/Picture/Picture'
import { DotesSvg, PhoneSvg } from '@src/icons/Icons'
import { createNotification } from '@src/providers/NotificationProvider'
import classNames from 'classnames/bind'
import React from 'react'
import styles from './ContactItem.module.scss'
const cnb = classNames.bind(styles)
interface Props {
	cover?: string
	name?: string
	job?: string
	status?: ContactStatusType
	id: number
	setSelectedContact: React.Dispatch<React.SetStateAction<number | null>>
}
const ContactItem: React.FC<Props> = ({ cover, job, name, status, setSelectedContact, id }) => {
	return (
		<div className={cnb('contactItemWrapper')}>
			<div className={cnb('descriptionSection')}>
				<div className={cnb('iconWrapper')}>
					<Picture alt="photo" src={cover} />
					<div className={cnb('statusIconWrapper')}>
						<div
							className={cnb('statusIcon', {
								online: status === 'online',
								offlive: status === 'offline',
								pending: status === 'pending',
								busy: status === 'busy',
							})}
						/>
					</div>
				</div>
				<div className={cnb('info')}>
					<p className={cnb('name')}>{name}</p>
					<p className={cnb('job')}>{job}</p>
				</div>
			</div>
			<div className={cnb('actionSection')}>
				<div className={cnb('phoneIcon')} onClick={() => createNotification('info', 'Calling ...')}>
					<PhoneSvg />
				</div>
				<div className={cnb('descriptionIcon')} onClick={() => setSelectedContact(id)}>
					<DotesSvg />
				</div>
			</div>
		</div>
	)
}

export default ContactItem
