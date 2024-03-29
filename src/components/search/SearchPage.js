import { useNavigate, useLocation } from 'react-router-dom'
import { HeroCard } from '../hero/HeroCard'
import { useForm } from '../hooks/useForm'
import { getHeroesByName } from '../selectors/getHeroesByName'
import queryString from 'query-string'
import { useMemo } from 'react'

export default function SearchPage() {
	const navigate = useNavigate()
	const location = useLocation()

	const { q = '' } = queryString.parse(location.search)

	const [formValues, handleInputChange] = useForm({ searchText: q })

	const { searchText } = formValues

	const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

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
					{q === '' ? (
						<div className='alert alert-info animate__animated animate__bounce'>
							{' '}
							Ingresa un heroé!
						</div>
					) : (
						heroesFiltered.length === 0 && (
							<div className='alert alert-danger animate__animated animate__bounce'>
								No hay resultados para {q}
							</div>
						)
					)}

					{heroesFiltered.map(hero => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>
		</>
	)
}
