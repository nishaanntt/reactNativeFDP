import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import pokemonList from './data.json';

const App = () => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView}>
				{pokemonList.map(pokemon => {
					return (
						<View style={styles.card} key={pokemon.id}>
							<Text style={styles.cardText}>{pokemon.name}</Text>
							<Text style={styles.cardText}>{pokemon.type}</Text>
						</View>
					);
				})}
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		paddingTop: StatusBar.currentHeight, //safeareaview will not be affected by this
	},
	scrollView: {
		paddingHorizontal: 16,
	},
	card: {
		backgroundColor: '#fff',
		padding: 16,
		borderRadius: 8,
		borderWidth: 1,
		marginBottom: 16,
	},
	cardText: {
		fontSize: 24,
	},
});
