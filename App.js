import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const App = () => {
	return (
		<SafeAreaView style={styles.safeContainer}>
			<View style={styles.container}>
				<View style={styles.box}>
					<Text style={styles.text}>Welcome</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'plum',
	},
	box: {
		padding: 20,
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	safeContainer: {
		flex: 1,
		backgroundColor: 'plum',
	},
});
