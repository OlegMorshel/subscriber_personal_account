import Picture from '@src/components/UiKit/Picture/Picture'
import { DotesSvg, PhoneSvg } from '@src/icons/Icons'
import classNames from 'classnames/bind'
import React from 'react'
import styles from './ContactItem.module.scss'
const cnb = classNames.bind(styles)
interface Props {
  cover?: string
  name?: string
  job?: string
  status?: string
}
const ContactItem: React.FC<Props> = ({ cover, job, name, status }) => {
  return (
    <div className={cnb('contactItemWrapper')}>
      <div className={cnb('descriptionSection')}>
        <div className={cnb('iconWrapper')}>
          <Picture alt="photo" src={cover} />
          <div className={cnb('statusIconWrapper')}>
            <div className={cnb('statusIcon', status)} />
          </div>
        </div>
        <div className={cnb('info')}>
          <p className={cnb('name')}>{name}</p>
          <p className={cnb('job')}>{job}</p>
        </div>
      </div>
      <div className={cnb('actionSection')}>
        <div className={cnb('phoneIcon')}>
          <PhoneSvg />
        </div>
        <div className={cnb('descriptionIcon')}>
          <DotesSvg />
        </div>
      </div>
    </div>
  )
}

export default ContactItem