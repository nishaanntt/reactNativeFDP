export const PokemonData = {
	charmander: {
		name: 'Charmander',
		image: require('./assets/charmander.png'),
		type: 'Fire',
		hp: '59',
		moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
		weaknesses: ['Water', 'Rock'],
	},
	squirtle: {
		name: 'Squirtle',
		image: require('./assets/squirtle.png'),
		type: 'Water',
		hp: 44,
		moves: ['Tackle', 'Water Gun', 'Tail Whip', 'Withdraw'],
		weaknesses: ['Electric', 'Grass'],
	},
	bulbasaur: {
		name: 'Bulbasaur',
		image: require('./assets/bulbasaur.png'),
		type: 'Grass',
		hp: 45,
		moves: ['Tackle', 'Vine Whip', 'Growl', 'Leech Seed'],
		weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
	},
	pikachu: {
		name: 'Pikachu',
		image: require('./assets/pikachu.png'),
		type: 'Electric',
		hp: 35,
		moves: ['Quick Attack', 'Thunderbolt', 'Tail Whip', 'Growl'],
		weaknesses: ['Ground'],
	},
};
