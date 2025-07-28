import {
	FlatList,
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
			{/* *** RENDERING LISTS WITH MAP *** */}

			{/* <ScrollView style={styles.scrollView}>
				{pokemonList.map(pokemon => {
        console.log(pokemon.id)
					return (
						<View style={styles.card} key={pokemon.id}>
							<Text style={styles.cardText}>{pokemon.name}</Text>
							<Text style={styles.cardText}>{pokemon.type}</Text>
						</View>
					);
				})}
			</ScrollView> */}

			{/* *** FLATLIST *** */}

			{/* <View style={styles.scrollView}>
				<FlatList
					data={pokemonList}
					renderItem={({ item }) => {
						console.log(item.id);
						return (
							<View style={styles.card} key={item.id}>
								<Text style={styles.cardText}>{item.name}</Text>
								<Text style={styles.cardText}>{item.type}</Text>
							</View>
						);
					}}
					// keyExtractor={(item, index) => item.id.toString()}
					// ItemSeparatorComponent={<View style={{ height: 16 }} />}
					// horizontal={true}
					// ListEmptyComponent={<Text>No Items Found</Text>}
					// ListHeaderComponent={
					// 	<Text style={styles.headerText}>Pokemon List</Text>
					// }
					// ListFooterComponent={
					// 	<Text style={styles.footerText}>End of List</Text>
					// }
				/>
			</View> */}
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
	headerText: {
		fontSize: 24,
		textAlign: 'center',
		marginBottom: 12,
	},
	footerText: {
		fontSize: 24,
		textAlign: 'center',
		marginTop: 12,
	},
});
