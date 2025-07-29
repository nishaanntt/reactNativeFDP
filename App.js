import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

const App = () => {
	const [name, setName] = useState('');
	console.log('name: ', name);
	return (
		<SafeAreaView style={{ backgroundColor: 'pink', flex: 1 }}>
			<View style={{ paddingHorizontal: 16 }}>
				<TextInput
					style={{
						backgroundColor: '#ddd',
						padding: 10,
						margin: 12,
						color: '#fff',
					}}
					placeholder='Enter Name'
					value={name}
					onChangeText={setName}
				/>
				<Text style={{ fontSize: 24 }}>Hi, my name is {name}</Text>
			</View>
		</SafeAreaView>
	);
};

export default App;

const styles = StyleSheet.create({});
