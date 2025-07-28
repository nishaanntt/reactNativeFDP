import {
	Dimensions,
	StyleSheet,
	Text,
	View,
	useWindowDimensions,
} from 'react-native';

const App = () => {
	// const windowWidth = useWindowDimensions().width;
	// const windowHeight = useWindowDimensions().height;
	return (
		<View style={styles.container}>
			<View
				style={[
					styles.box,
					// {
					// 	width: windowWidth > 500 ? '70%' : '90%',
					// 	height: windowHeight > 600 ? '60%' : '90%',
					// },
				]}>
				<Text
					style={[
						styles.text,
						// {
						// 	fontSize: windowWidth > 500 ? 50 : 24,
						// },
					]}>
					Welcome
				</Text>
			</View>
		</View>
	);
};

export default App;

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
// Drawback of Dimensions API - The dimensions change with orientation and the API does not dynamically update with refresh

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'plum',
		alignItems: 'center',
		justifyContent: 'center',
	},
	box: {
		width: 300,
		// width: windowWidth > 500 ? '70%' : '90%',
		height: 300,
		// height: windowHeight > 600 ? '60%' : '90%',
		backgroundColor: 'lightblue',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 24,
		// fontSize: windowWidth > 500 ? 50 : 24,
	},
});
