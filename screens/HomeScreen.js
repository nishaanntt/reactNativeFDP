import { Button, StyleSheet, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ navigation, route }) => {
	// const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.text}>HomeScreen</Text>
			<Text style={styles.text}>{route.params?.result}</Text>
			<Button
				title='About'
				onPress={() =>
					navigation.navigate('About', {
						name: 'Nishant',
					})
				}
			/>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 16,
	},
});
