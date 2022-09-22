import Loader from '@src/components/UiKit/Loader/Loader'
import Picture from '@src/components/UiKit/Picture/Picture'
import { useTypedDispatch } from '@src/hooks/useTypedDispatch'
import { useTypedSelector } from '@src/hooks/useTypedSelector'
import { EditSvg, PhoneSvg } from '@src/icons/Icons'
import { userApi } from '@src/services/UserService'
import { fetchUsers } from '@src/store/reducers/ActionCreators'
import classNames from 'classnames/bind'
import React, { useEffect } from 'react'
import styles from './ContactsDescriptionLayout.module.scss'
const cnb = classNames.bind(styles)

interface Props {
  classNamesForWrapper?: string
}
const ContactsDescriptionLayout: React.FC<Props> = ({ classNamesForWrapper }) => {
  const dispatch = useTypedDispatch()
  const { data, isLoading } = userApi.useFetchAllUsersQuery(100)
  const [createUser, {}] = userApi.useCreateUserMutation()
  // const { users, isLoading, error } = useTypedSelector(state => state.userReducer)

  useEffect(() => {
    // dispatch(fetchUsers())
  }, [])
  const createContact = () => createUser({ email: 'email', job: 'job', name: 'Name', phone: 'phone', status: 'offline' })
  return (
    <div className={cnb(classNamesForWrapper, 'contactsDescriptionWrapper')}>
      <div className={cnb('contactsCardWrapper')}>
        <div className={cnb('descriptionHeaderSection')}>
          <Picture alt="profile" />
          <div className={cnb('mainContactInfo')}>
            <h3 className={cnb('name')}>Johanna Stevens</h3>
            <h5 className={cnb('job ')}>UI/UX Designer</h5>
            <div className={cnb('actionsSection')}>
              <div className={cnb('iconsWrapper')}>
                <div className={cnb('phoneIcon')}>
                  <PhoneSvg />
                </div>
                <div className={cnb('editIcon')}>
                  <EditSvg />
                </div>
              </div>
              <button className={cnb('deleteBtn')}>
                <p className={cnb('deleteBtnText')}>Delete</p>
              </button>
            </div>
          </div>
        </div>
        <div className={cnb('descriptionMainInfo')}>
          <div className={cnb('descriptionRowsWrapper')}>
            <div className={cnb('descriptionRow')}>
              <p className={cnb('rowTitle')}>Bio</p>
              <p className={cnb('rowText')}>some some some some </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsDescriptionLayout
