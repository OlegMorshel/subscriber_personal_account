import Loader from "@src/components/UiKit/Loader/Loader"
import useGetUsers from "@src/hooks/query/users/useGetUsers"
import useDebounce from "@src/hooks/useDebounce"
import classNames from "classnames/bind"
import React, { useState } from "react"
import ContactsHeader from "./components/ContactsHeader/ContactsHeader"
import ContactsList from "./components/ContactsList/ContactsList"
import ContactsSearch from "./components/ContactsSearch/ContactsSearch"
import styles from "./ContactsListSection.module.scss"
const cnb = classNames.bind(styles)
interface Props {
	classNamesForWrapper?: string
	setSelectedContact: React.Dispatch<React.SetStateAction<number | null>>
}
const ContactsListSection: React.FC<Props> = ({ classNamesForWrapper, setSelectedContact }) => {
	const [query, setQuery] = useState("")
	const debouncedQuery = useDebounce<string>(query, 300)
	const { data, isLoading } = useGetUsers({
		query: debouncedQuery ?? "",
	})
	return (
		<section className={classNamesForWrapper}>
			<div className={cnb("contactsHeader")}>
				<ContactsHeader />
			</div>
			<div className={cnb("contactsSearchSection")}>
				<ContactsSearch setQuery={setQuery} value={query} />
			</div>
			<div className={cnb("contactsList")}>
				{!isLoading ? <ContactsList contactList={data?.data ?? []} setSelectedContact={setSelectedContact} /> : <Loader />}
			</div>
		</section>
	)
}

export default ContactsListSection
