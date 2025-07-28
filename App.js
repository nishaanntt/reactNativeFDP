import { StyleSheet, Text, View } from 'react-native';

const App = () => {
	return (
		<View style={styles.container}>
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
	boxShadow: {
		//applies only on iOS
		// box-shadow: h-offset v-offset blur spread color
		shadowColor: 'blue', // only property that works both on android and iOS
		shadowOffset: {
			// can be positive or negative
			width: 6,
			height: 6,
		},
		shadowOpacity: 0.6, // ranges from 0 to 1. Transparency of the shadow
		shadowRadius: 4, // sets the blur radius. Larger value = larger and lighter blur making the shadow more prominent
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
