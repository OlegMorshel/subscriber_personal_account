interface IGetFullDescriptionType {
	bio: string
	email: string
	phone: string
}
interface IFullDescriptionFields {
	label: string
	value: string
}
export const getFullDescriptionContent = ({ bio, email, phone }: IGetFullDescriptionType): IFullDescriptionFields[] => {
	return [
		{ label: "Bio", value: bio },
		{ label: "Email", value: email },
		{ label: "Phone", value: phone },
	]
}
