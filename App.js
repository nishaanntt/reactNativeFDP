import { Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
	return (
		<View style={{ backgroundColor: 'pink', flex: 1, padding: 60 }}>
			<Text style={{ fontWeight: 'bold' }}>
				<Text style={{ color: 'white' }}>Hello</Text> World
			</Text>
		</View>
	);
}
