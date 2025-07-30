import { useEffect, useState } from 'react';

import AddPost from './screens/AddPost';
import Details from './screens/Details';
import { FIREBASE_AUTH } from './FirebaseConfig';
import Home from './screens/Home';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import PostList from './screens/PostList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';

const Stack = createNativeStackNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackLayout() {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name='Home' component={Home} />
			<HomeStack.Screen name='Details' component={Details} />
			<HomeStack.Screen name='Add Post' component={AddPost} />
			<HomeStack.Screen name='Post List' component={PostList} />
		</HomeStack.Navigator>
	);
}

const App = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		onAuthStateChanged(FIREBASE_AUTH, user => {
			console.log('user:', user);
			setUser(user);
		});
	}, []);
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Login'>
				{user ? (
					<Stack.Screen
						name='HomeStack'
						component={HomeStackLayout}
						options={{ headerShown: false }}
					/>
				) : (
					<Stack.Screen
						name='Login'
						component={Login}
						options={{ headerShown: false }}
					/>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
