import { getHeroesByPublishers } from '../selectors/getHeroesByPublishers'
import { HeroCard } from './HeroCard'

export const Herolist = ({ publisher }) => {
	const heroes = getHeroesByPublishers(publisher)

	return (
		<div className='row rows-cols-1 row-cols-md-3'>
			{heroes.map(hero => (
				<HeroCard key={hero.id} {...hero} />
			))}
		</div>
	)
}
