// Wrap your app in navigation container
// stack navigation
// install native stack

import { Pressable, StyleSheet, Text, View } from 'react-native';

import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// invoke the navigator
const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
			// initialRouteName='About'
			// *** FOR APP LEVEL STYLES ***
			// screenOptions={{
			// 	headerStyle: {
			// 		backgroundColor: '#6a51ae',
			// 	},
			// 	headerTintColor: '#fff',
			// 	headerTitleStyle: {
			// 		fontWeight: 'bold',
			// 	},
			// 	headerRight: () => (
			// 		<Pressable onPress={() => alert('Menu Button Pressed')}>
			// 			<Text style={{ color: 'white' }}>Menu</Text>
			// 		</Pressable>
			// 	),
			// }}
			>
				<Stack.Screen
					name='Home'
					component={HomeScreen}
					options={{
						title: 'WELCOME HOME',
						headerStyle: {
							backgroundColor: '#6a51ae',
						},
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontWeight: 'bold',
						},
						headerRight: () => (
							<Pressable onPress={() => alert('Menu Button Pressed')}>
								<Text style={{ color: 'white' }}>Menu</Text>
							</Pressable>
						),
					}}
				/>
				<Stack.Screen name='About' component={AboutScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;

const styles = StyleSheet.create({});
