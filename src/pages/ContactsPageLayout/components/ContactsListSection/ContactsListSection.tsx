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
	setSelectedContact: (contactId: null | number) => void
}
const ContactsListSection: React.FC<Props> = ({ classNamesForWrapper, setSelectedContact }) => {
	const [query, setQuery] = useState("")
	const debouncedQuery = useDebounce<string>(query, 300)
	const { data, isLoading } = useGetUsers({
		query: debouncedQuery ?? "",
	})
	return (
		<section className={classNamesForWrapper}>
			<ContactsHeader classNameForWrapper={cnb("contactsHeader")} />
			<ContactsSearch setQuery={setQuery} value={query} classNameForWrapper={cnb("contactsSearchSection")} />
			{!isLoading ? (
				<ContactsList classNameForWrapper={cnb("contactsList")} contactList={data?.data ?? []} setSelectedContact={setSelectedContact} />
			) : (
				<Loader />
			)}
		</section>
	)
}

export default ContactsListSection
