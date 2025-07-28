import { StyleSheet, Text, View } from 'react-native';

const Box = ({ children, style }) => {
	return (
		<View style={[styles.box, style]}>
			<Text style={styles.text}>{children}</Text>
		</View>
	);
};

export default Box;

const styles = StyleSheet.create({
	box: {
		backgroundColor: 'white',
		padding: 20,
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		color: 'white',
	},
});
