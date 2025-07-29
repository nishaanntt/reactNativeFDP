import React, { useState } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Switch,
	Text,
	TextInput,
	View,
} from 'react-native';

const App = () => {
	const [name, setName] = useState('');
	const [darkMode, setDarkMode] = useState(false);
	console.log('name: ', name);
	return (
		<SafeAreaView>
			<View style={{ paddingHorizontal: 16 }}>
				<TextInput
					style={styles.textinput}
					placeholder='Enter Name'
					value={name}
					onChangeText={setName}
					// secureTextEntry
					// keyboardType='numeric'
					// autoCorrect={false}
					// autoCapitalize=''              // characters, sentence, words'
				/>
				<Text style={{ fontSize: 24 }}>Hi, my name is {name}</Text>
				<TextInput
					style={[styles.textinput, styles.multilineText]}
					placeholder='multiline text input'
					multiline
				/>
			</View>

			<View style={styles.switchContainer}>
				<Text style={styles.text}>Dark Mode</Text>
				<Switch
					value={darkMode}
					onValueChange={() => setDarkMode(!darkMode)}
					// trackColor={{ false: '#767577', true: 'lightblue' }}
					thumbColor='red'
				/>
			</View>
		</SafeAreaView>
	);
};

export default App;

const styles = StyleSheet.create({
	textinput: {
		borderWidth: 2,
		padding: 10,
		margin: 12,
	},
	multilineText: {
		minHeight: 100,
		textAlignVertical: 'top', //top aligned on iOS, centered on Android
	},
	switchContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
	},
});
