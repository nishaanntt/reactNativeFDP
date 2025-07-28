import { StyleSheet, Text, View } from 'react-native';

const App = () => {
	return (
		<View style={styles.container}>
			<View style={[styles.box, styles.lightblueBg]}>
				<Text>Lightblue Box</Text>
			</View>
			<View style={[styles.box, styles.lightgreenBg]}>
				<Text>Lightgreen Box</Text>
			</View>
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'plum',
		padding: 60,
	},
	box: {
		width: 100,
		// width: '25%',
		height: 100,
		// height: '25%',
		padding: 10,
		// paddingVertical: 20,
		// paddingHorizontal: 10,
		margin: 10,
		// marginHorizontal: 15,
		// marginVertical: 25,
		// border: '2px solid red'
		borderWidth: 2,
		borderColor: 'red',
		borderStyle: 'solid',
		borderRadius: 10,
	},
	lightblueBg: {
		backgroundColor: 'lightblue',
	},
	lightgreenBg: {
		backgroundColor: 'lightgreen',
	},
});
