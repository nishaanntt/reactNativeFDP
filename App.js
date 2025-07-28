import Greet from './components/Greet';
import { View } from 'react-native';

export default function App() {
	return (
		<View style={{ backgroundColor: 'pink', flex: 1, padding: 60 }}>
			<Greet name='Nishant' />
			<Greet name='John' />
		</View>
	);
}
