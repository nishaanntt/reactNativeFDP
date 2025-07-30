import { Button, StyleSheet, Text, View } from 'react-native';

import { FIREBASE_AUTH } from '../FirebaseConfig';

const Home = ({ navigation }) => {
	return (
		<View>
			<Button title='Details' onPress={() => navigation.navigate('Details')} />
			<Button title='Sign Out' onPress={() => FIREBASE_AUTH.signOut()} />
			<Button
				title='Add Post'
				onPress={() => navigation.navigate('Add Post')}
			/>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({});
