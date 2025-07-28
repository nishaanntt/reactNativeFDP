import { StyleSheet, View } from 'react-native';

import Box from './components/Box';

const App = () => {
	return (
		<View style={styles.container}>
			<Box style={{ backgroundColor: 'pink' }}>Box 1</Box>
			<Box style={{ backgroundColor: 'plum' }}>Box 2</Box>
			<Box style={{ backgroundColor: 'lightblue' }}>Box 3</Box>
			<Box style={{ backgroundColor: 'lightgreen' }}>Box 4</Box>
			<Box style={{ backgroundColor: 'skyblue' }}>Box 5</Box>
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 64,
		borderWidth: 6,
		borderColor: 'red',
	},
});
