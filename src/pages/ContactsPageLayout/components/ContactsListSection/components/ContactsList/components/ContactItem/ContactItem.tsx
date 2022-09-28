import { ContactStatusType } from "@src/api/users/types"
import Picture from "@src/components/UiKit/Picture/Picture"
import useWindowDimensions from "@src/hooks/useWindowDimensions"
import { DotesSvg, PhoneSvg } from "@src/icons/Icons"
import { ContactModalContentType } from "@src/pages/ContactsPageLayout/components/ContactsDescriptionLayout/components/ContactModalWrapper/ContactModalWrapper"
import { createNotification } from "@src/providers/NotificationProvider"
import classNames from "classnames/bind"
import React, { useState } from "react"
import DescriptionContent from "./ContactDescriptionModal/components/DescriptionContent/DescriptionContent"
import ContactDescriptionModal, { DescriptionModalContentType } from "./ContactDescriptionModal/ContactDescriptionModal"
import styles from "./ContactItem.module.scss"
const cnb = classNames.bind(styles)
interface Props {
	cover?: string
	name?: string
	job?: string
	status?: ContactStatusType
	id: number
	phone?: string
	bio?: string
	email?: string
	setSelectedContact: (contactId: null | number) => void
}
const ContactItem: React.FC<Props> = ({ cover, job, name, status, setSelectedContact, id, phone, bio, email }) => {
	const [modal, setModal] = useState<DescriptionModalContentType>(DescriptionModalContentType.NONE)
	const [contactModal, setContactModal] = useState<ContactModalContentType>(ContactModalContentType.NONE)
	const { width } = useWindowDimensions()
	const descriptionActivate = (screenWidth: number) => {
		if (screenWidth >= 860) {
			return setSelectedContact(id)
		} else {
			setSelectedContact(id)
			return setModal(DescriptionModalContentType.DESCRIPTION)
		}
	}
	return (
		<li>
			<div className={cnb("contactItemWrapper")}>
				<div className={cnb("descriptionSection")}>
					<div className={cnb("iconWrapper")}>
						<Picture alt="photo" src={cover} />
						<div className={cnb("statusIconWrapper")}>
							<div
								className={cnb("statusIcon", {
									online: status === "online",
									offlive: status === "offline",
									pending: status === "pending",
									busy: status === "busy",
								})}
							/>
						</div>
					</div>
					<div className={cnb("info")}>
						<p className={cnb("name")}>{name}</p>
						<p className={cnb("job")}>{job}</p>
					</div>
				</div>
				<div className={cnb("actionSection")}>
					<div className={cnb("phoneIcon")} onClick={() => createNotification("info", "Calling ...")}>
						<PhoneSvg />
					</div>
					<div className={cnb("descriptionIcon")} onClick={() => descriptionActivate(width)}>
						<DotesSvg />
					</div>
				</div>
			</div>
			{width < 860 && modal !== DescriptionModalContentType.NONE && (
				<ContactDescriptionModal
					type={modal}
					handleSetModal={setModal}
					children={
						<DescriptionContent
							setModal={setContactModal}
							contactModal={contactModal}
							currentUser={{
								id,
								name: name ?? "",
								phone: phone ?? "",
								job,
								cover,
								bio,
								email,
								status: status ?? "offline",
							}}
						/>
					}
				/>
			)}
		</li>
	)
}

export default ContactItem
