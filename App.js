import { StatusBar, View } from 'react-native';

export default function App() {
	return (
		<View style={{ backgroundColor: 'plum', flex: 1, padding: 60 }}>
			<StatusBar
				backgroundColor='lightgreen' //only applicable on android
				barStyle='light-content' //controls the text color on the status bar
				// hidden //controls the visibility of the status bar
			/>
		</View>
	);
}
