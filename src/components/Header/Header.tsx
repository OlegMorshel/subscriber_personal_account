import useClickOutside from "@src/hooks/useClickOutside"
import { AddContactSvg } from "@src/icons/Icons"
import classNames from "classnames/bind"
import React, { useRef, useState } from "react"
import Picture from "../UiKit/Picture/Picture"
import HeaderMenu from "./components/HeaderMenu/HeaderMenu"
import { getHeaderMenuItemList } from "./components/HeaderMenu/utils"
import styles from "./Header.module.scss"
import HeaderModalWrapper, { HeaderModalContentType } from "./HeaderModalWrapper/HeaderModalWrapper"
import { getHeaderModalContent } from "./HeaderModalWrapper/utils/getHeaderModalContent"
const cnb = classNames.bind(styles)
interface Props {
	classNamesForWrapper?: string
	cover?: string
}
const Header: React.FC<Props> = ({ classNamesForWrapper, cover }) => {
	const [isOpenHeaderMenu, setIsOpenHeaderMenu] = useState(false)
	const [modal, setModal] = useState<HeaderModalContentType>(HeaderModalContentType.NONE)
	const ref = useRef<HTMLDivElement>(null)
	useClickOutside(ref, () => setIsOpenHeaderMenu(false))
	return (
		<header className={cnb(classNamesForWrapper, "headerWrapper")}>
			<div className={cnb("addContactIcon")} onClick={() => setModal(HeaderModalContentType.ADD)}>
				<AddContactSvg />
			</div>
			<Picture alt="photo" src={cover} handleActionClick={() => setIsOpenHeaderMenu(prev => !prev)} className={cnb("iconWrapper")} />
			{isOpenHeaderMenu && <HeaderMenu menuList={getHeaderMenuItemList()} ref={ref} />}
			<HeaderModalWrapper type={modal} handleSetModal={setModal} children={getHeaderModalContent(modal, setModal)} />
		</header>
	)
}

export default Header
