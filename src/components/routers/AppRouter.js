import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { DcPage } from '../dc/DcPage'
import LoginPage from '../login/LoginPage'
import { MarvelPage } from '../marvel/MarvelPage'
import SearchPage from '../search/SearchPage'
import { Navbar } from '../ui/NavBar'

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Navbar />

			<Routes>
				<Route path='/' element={<MarvelPage />} />
				<Route path='/marvel' element={<MarvelPage />} />
				<Route path='/dc' element={<DcPage />} />
				<Route path='/search' element={<SearchPage />} />
				<Route path='/login' element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	)
}
