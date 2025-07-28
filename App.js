import {
	Platform,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	View,
} from 'react-native';

import PokemonCard from './components/PokemonCard';
import { PokemonData } from './PokemonData';

const App = () => {
	const { pikachu, charmander, squirtle, bulbasaur } = PokemonData;
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<PokemonCard {...bulbasaur} />
				<PokemonCard {...charmander} />
				<PokemonCard {...squirtle} />
				<PokemonCard {...pikachu} />
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		paddingTop: Platform.OS === 'android' ? 25 : 0,
	},
});
