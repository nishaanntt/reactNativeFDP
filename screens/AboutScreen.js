import { Button, StyleSheet, Text, View } from 'react-native';

import { useLayoutEffect } from 'react';

const AboutScreen = ({ route, navigation }) => {
	const { name } = route.params;

	// Dynamic Stack Navigator Options

	// useLayoutEffect(() => {
	// 	navigation.setOptions({
	// 		title: name,
	// 	});
	// }, []);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>About {name}</Text>
			<Button
				title='Update Name'
				onPress={() =>
					navigation.setParams({
						name: 'John Doe',
					})
				}
			/>
			<Button
				title='Go back with data'
				onPress={() =>
					navigation.navigate('Home', {
						result: 'Data from about',
					})
				}
			/>
		</View>
	);
};

export default AboutScreen;

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
