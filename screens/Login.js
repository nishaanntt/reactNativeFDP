import {
	ActivityIndicator,
	Button,
	KeyboardAvoidingView,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';

import { FIREBASE_AUTH } from '../FirebaseConfig';
import { useState } from 'react';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const auth = FIREBASE_AUTH;

	const signIn = async () => {
		setLoading(true);
		try {
			const res = await signInWithEmailAndPassword(auth, email, password);
			console.log(res);
		} catch (error) {
			console.log(error);
			alert('Sign In Failed ', error);
		} finally {
			setLoading(false);
		}
	};

	const signUp = async () => {
		setLoading(true);
		try {
			const res = await createUserWithEmailAndPassword(auth, email, password);
			console.log(res);
			alert('Check Email');
		} catch (error) {
			console.log(error);
			alert('Registration Failed: ', error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<KeyboardAvoidingView behavior='padding'>
				<TextInput
					style={styles.input}
					value={email}
					placeholder='Email'
					autoCapitalize='none'
					onChangeText={text => setEmail(text)}
				/>
				<TextInput
					style={styles.input}
					value={password}
					placeholder='Password'
					autoCapitalize='none'
					onChangeText={text => setPassword(text)}
					secureTextEntry
				/>

				{loading ? (
					<ActivityIndicator size={'large'} color={'#0000ff'} />
				) : (
					<>
						<Button title='Login' onPress={signIn} />
						<Button title='Create Account' onPress={signUp} />
					</>
				)}
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginHorizontal: 20,
	},
	input: {
		marginVertical: 4,
		height: 50,
		borderWidth: 1,
		borderRadius: 4,
		padding: 16,
		backgroundColor: '#fff',
	},
});
