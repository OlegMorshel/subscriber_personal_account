import React from "react"
import useDeleteUser from "@src/hooks/mutation/users/useDeleteUser"

import classNames from "classnames/bind"
import styles from "./DeleteContactModal.module.scss"

const cnb = classNames.bind(styles)

interface Props {
	id: number
	handleCloseModal: () => void
}
const DeleteContactModal: React.FC<Props> = ({ id, handleCloseModal }) => {
	const { mutate: deleteUser } = useDeleteUser({ handleCloseModal })

	return (
		<div className={cnb("deleteContactModalWrapper")}>
			<h4 className={cnb("title")}>Do you really want to delete this account</h4>
			<div className={cnb(cnb("buttonsWrapper"))}>
				<button className={cnb("button")} onClick={() => deleteUser({ id })}>
					Yes
				</button>
				<button className={cnb("button")} onClick={handleCloseModal}>
					No
				</button>
			</div>
		</div>
	)
}

export default DeleteContactModal
