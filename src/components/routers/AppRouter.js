import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../login/LoginPage'
import { DashboardRoutes } from './DashboardRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/login'
					element={
						<PublicRoute>
							<LoginPage />
						</PublicRoute>
					}
				/>
				<Route
					path='/*'
					element={
						<PrivateRoute>
							<DashboardRoutes />
						</PrivateRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}
