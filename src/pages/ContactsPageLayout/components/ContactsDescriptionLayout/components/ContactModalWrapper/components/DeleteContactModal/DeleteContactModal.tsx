import useDeleteUser from "@src/hooks/mutation/users/useDeleteUser"
import classNames from "classnames/bind"
import React from "react"
import { ContactModalContentType } from "../../ContactModalWrapper"
import styles from "./DeleteContactModal.module.scss"
const cnb = classNames.bind(styles)

interface Props {
	id: number
	setModal: React.Dispatch<React.SetStateAction<ContactModalContentType>>
}
const DeleteContactModal: React.FC<Props> = ({ id, setModal }) => {
	const { mutate: deleteUser } = useDeleteUser({ setModal })
	return (
		<div className={cnb("deleteContactModalWrapper")}>
			<h4 className={cnb("title")}>Do you really want to delete this account</h4>
			<div className={cnb(cnb("buttonsWrapper"))}>
				<button className={cnb("button")} onClick={() => deleteUser({ id })}>
					Yes
				</button>
				<button className={cnb("button")} onClick={() => setModal(ContactModalContentType.NONE)}>
					No
				</button>
			</div>
		</div>
	)
}

export default DeleteContactModal
