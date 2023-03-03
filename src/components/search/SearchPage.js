import { useNavigate, useLocation } from 'react-router-dom'
import { HeroCard } from '../hero/HeroCard'
import { useForm } from '../hooks/useForm'
import { getHeroesByName } from '../selectors/getHeroesByName'
import queryString from 'query-string'

export default function SearchPage() {
	const navigate = useNavigate()
	const location = useLocation()

	const { q = '' } = queryString.parse(location.search)

	const [formValues, handleInputChange] = useForm({ searchText: q })

	const { searchText } = formValues

	const heroesFiltered = getHeroesByName(q)

	const handleSearch = e => {
		e.preventDefault()
		navigate(`?q=${searchText}`)
	}

	return (
		<>
			<h1>Búsquedas</h1>
			<hr />

			<div className='row'>
				<div className='col-5'>
					<h4>Buscar</h4>
					<hr />

					<form onSubmit={handleSearch}>
						<input
							type='text'
							placeholder='Ingresa un héroe a buscar'
							className='form-control'
							name='searchText'
							autoComplete='off'
							value={searchText}
							onChange={handleInputChange}
						/>

						<button
							className='btn btn-outline-primary mt-1 btn-block'
							type='submit'
						>
							Buscar...
						</button>
					</form>
				</div>
				<div className='col-7'>
					<h4>Resultados</h4>
					<hr />

					{heroesFiltered.map(hero => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>
		</>
	)
}
