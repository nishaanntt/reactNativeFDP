import { StyleSheet, Text, View } from 'react-native';

const App = () => {
	return (
		<View style={styles.container}>
			<View style={styles.darkMode}>
				<Text style={styles.darkModeText}>Style Inheritance</Text>
			</View>
			<View style={[styles.box, styles.lightblueBg, styles.boxShadow]}>
				{/* The box shadow property will only be visible in iOS */}
				<Text>Lightblue Box</Text>
			</View>
			<View style={[styles.box, styles.lightgreenBg, styles.androidShadow]}>
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
	darkMode: {
		backgroundColor: 'black',
		color: 'white', //no change. does not support style Inheritance unlike web
	},
	darkModeText: {
		color: 'white',
	},
	boxShadow: {
		shadowColor: 'blue',
		shadowOffset: {
			width: 6,
			height: 6,
		},
		shadowOpacity: 0.6,
		shadowRadius: 4,
	},
	androidShadow: {
		elevation: 10,
	},
	box: {
		width: 250,
		height: 250,
		paddingVertical: 20,
		paddingHorizontal: 10,
		marginVertical: 25,
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
