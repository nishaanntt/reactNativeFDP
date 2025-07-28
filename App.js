import { ActivityIndicator, View } from 'react-native';

export default function App() {
	return (
		<View style={{ backgroundColor: 'pink', flex: 1, padding: 60 }}>
			<ActivityIndicator />
			<ActivityIndicator size='large' />
			<ActivityIndicator size='large' color='green' />
			<ActivityIndicator
				size='large'
				color='green'
				animating={false} //controls visibility. Use state to toggle
			/>
		</View>
	);
}
