// 1. Platform.OS
// 2. Platform.select
// 3. Platform specific extensions

import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import CustomButton from './components/CustomButton/CustomButton';

const App = () => {
	return (
		// <SafeAreaView style={styles.safeContainer}>
		<View style={styles.container}>
			<View style={styles.box}>
				<Text style={styles.text}>Welcome</Text>
			</View>
			{/* <CustomButton
					onPress={() => console.log('ios button pressed')}
					title='iOS Button'
				/> */}
		</View>
		// </SafeAreaView>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'plum',
		// paddingTop: Platform.OS === 'android' ? 25 : 0,
	},
	box: {
		padding: 20,
	},
	text: {
		fontSize: 24,
		// ...Platform.select({
		// 	ios: {
		// 		fontSize: 50,
		// 		color: 'white',
		// 		fontStyle: 'italic',
		// 	},
		// 	android: {
		// 		fontSize: 24,
		// 		color: 'purple',
		// 	},
		// }),
		fontWeight: 'bold',
		textAlign: 'center',
	},
	safeContainer: {
		flex: 1,
		backgroundColor: 'plum',
	},
});
