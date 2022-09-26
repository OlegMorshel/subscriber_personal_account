import * as Yup from "yup"
export const EditContactValidationSchema = Yup.object({
	name: Yup.string().required("Name is required"),
	email: Yup.string().email().required("Name is required"),
	phone: Yup.string().length(11).max(11).required("Required field!"),
	job: Yup.string(),
})
