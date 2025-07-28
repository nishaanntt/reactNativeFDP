import { Alert, Button, View } from 'react-native';

export default function App() {
	return (
		<View style={{ backgroundColor: 'pink', flex: 1, padding: 60 }}>
			<Button title='Alert' onPress={() => Alert.alert('Invalid Data')} />
			<Button
				title='Alert 2'
				onPress={() => Alert.alert('Alert Title', 'This is the alert message')}
			/>
			<Button
				title='Alert 3'
				onPress={() =>
					Alert.alert('Alert Title', 'This is the alert message', [
						{
							text: 'ok',
							onPress: () => console.log('ok pressed'),
						},
					])
				}
			/>
			<Button
				title='Alert 5'
				onPress={() =>
					Alert.alert('Alert Title', 'This is the alert message', [
						{
							text: 'button 1',
							onPress: () => console.log('button 1 pressed'),
						},
						{
							text: 'button 2',
							onPress: () => console.log('button 2 pressed'),
						},
						{
							text: 'button 3',
							onPress: () => console.log('button 3 pressed'),
						},
						{
							text: 'button 4',
							onPress: () => console.log('button 4 pressed'),
						},
					])
				}
			/>
		</View>
	);
}
