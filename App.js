import { StyleSheet, Text, View } from 'react-native';

const App = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>StyleSheet API</Text>
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
	text: {
		fontSize: 24,
		fontWeight: '700',
		color: '#fff',
	},
});
