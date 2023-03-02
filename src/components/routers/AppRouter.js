import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../login/LoginPage'
import { DashboardRoutes } from './DashboardRoutes'
export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/*' element={<DashboardRoutes />} />
			</Routes>
		</BrowserRouter>
	)
}
