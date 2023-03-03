import { useMemo } from 'react'
import { getHeroesByPublishers } from '../selectors/getHeroesByPublishers'
import { HeroCard } from './HeroCard'

export const Herolist = ({ publisher }) => {
	const heroes = useMemo(() => getHeroesByPublishers(publisher), [publisher])

	return (
		<div className='row rows-cols-1 row-cols-md-3 animate__animated animate__fadeIn'>
			{heroes.map(hero => (
				<HeroCard key={hero.id} {...hero} />
			))}
		</div>
	)
}
