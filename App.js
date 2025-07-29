import {
	Button,
	Image,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';

import { useState } from 'react';

const App = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	return (
		<KeyboardAvoidingView
			behavior='padding'
			keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
			style={styles.container}>
			<View style={styles.form}>
				<Image
					source={require('./assets/adaptive-icon.png')}
					style={styles.image}
				/>
				<Text style={styles.label}>Username</Text>
				<TextInput
					placeholder='username'
					style={styles.input}
					value={username}
					onChangeText={setUsername}
				/>
				<Text style={styles.label}>Password</Text>
				<TextInput
					placeholder='password'
					secureTextEntry
					style={styles.input}
					value={password}
					onChangeText={setPassword}
				/>
				<Button title='Login' onPress={() => {}} />
			</View>
		</KeyboardAvoidingView>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 20,
		backgroundColor: '#f5f5f5',
	},
	form: {
		backgroundColor: 'white',
		padding: 20,
		borderRadius: 10,
	},
	label: {
		fontSize: 16,
		marginBottom: 5,
		fontWeight: 'bold',
	},
	input: {
		height: 40,
		borderColor: '#ddd',
		borderWidth: 1,
		marginBottom: 15,
		padding: 10,
		borderRadius: 5,
	},
	image: {
		height: 200,
		width: 200,
		alignSelf: 'center',
		marginBottom: 50,
	},
});
