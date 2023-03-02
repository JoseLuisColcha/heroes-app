import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../ui/NavBar'
import { DcPage } from '../dc/DcPage'
import { MarvelPage } from '../marvel/MarvelPage'
import SearchPage from '../search/SearchPage'
import { HeroPage } from '../hero/HeroPage'

export const DashboardRoutes = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='marvel' element={<MarvelPage />} />
				<Route path='dc' element={<DcPage />} />
				<Route path='search' element={<SearchPage />} />
				<Route path='hero' element={<HeroPage />} />
				<Route path='/' element={<MarvelPage />} />
			</Routes>
		</>
	)
}
