import { heroes } from '../../data/heroes'

export const getHeroesByPublishers = publisher => {
	const validPublishers = ['DC Comics', 'Marvel Comics']

	if (validPublishers.includes(publisher)) {
		return heroes.filter(hero => hero.publisher === publisher)
	} else {
		throw new Error(`${publisher} is not a valid publisher`)
	}
}
