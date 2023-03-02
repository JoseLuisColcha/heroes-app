import { getHeroesByPublishers } from '../selectors/getHeroesByPublishers'

export const Herolist = ({ publisher }) => {
	const heroes = getHeroesByPublishers(publisher)
	console.log(publisher)

	return (
		<>
			<h1>Herolist - {publisher}</h1>

			<ul>
				{heroes.map(hero => (
					<li key={hero.id}> {hero.superhero} </li>
				))}
			</ul>
		</>
	)
}
