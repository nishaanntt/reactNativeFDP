import { StyleSheet, Text, View } from 'react-native';

const App = () => {
	return (
		<View style={styles.container}>
			<View style={[styles.box, styles.lightblueBg]}>
				<Text>Lightblue Box</Text>
			</View>
			<View
				style={[styles.box, styles.lightgreenBg, { backgroundColor: 'pink' }]}>
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
		height: 100,
		padding: 10,
	},
	lightblueBg: {
		backgroundColor: 'lightblue',
	},
	lightgreenBg: {
		backgroundColor: 'lightgreen',
	},
});
