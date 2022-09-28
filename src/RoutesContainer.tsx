import React, { Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Loader from "./components/UiKit/Loader/Loader"
const AuthorizationPage = React.lazy(() => import("./pages/Authorization/Authorization"))
const ContactsPageLayout = React.lazy(() => import("./pages/ContactsPageLayout/ContactsPageLayout"))
interface Props {
	isAuth: boolean
}
const RoutesContainer: React.FC<Props> = ({ isAuth }) => {
	return (
		<Suspense
			fallback={
				<div
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
					}}
				>
					<Loader />
				</div>
			}
		>
			<Routes>
				<Route path="/auth" element={<AuthorizationPage />} />
				<Route path="/contacts" element={<ContactsPageLayout isAuth={isAuth} />} />
				<Route path="*" element={<Navigate to="/auth" />} />
			</Routes>
		</Suspense>
	)
}

export default RoutesContainer
