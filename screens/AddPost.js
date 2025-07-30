import {
	Button,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';

import { FIRESTORE_APP } from '../FirebaseConfig';

const AddPost = () => {
	const [postTitle, setPostTitle] = useState('');
	const [postText, setPostText] = useState('');

	const addPost = async () => {
		try {
			const res = await addDoc(collection(FIRESTORE_APP, 'posts'), {
				postTitle,
				postText,
			});
			console.log('Post Added', res);
			alert('Post Added Successfully');
			setPostText('');
			setPostTitle('');
		} catch (error) {
			console.log('Error:', error);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					flex: 1,
					width: '100%',
					padding: 16,
				}}>
				<TextInput
					style={styles.input}
					placeholder='Post Title'
					value={postTitle}
					onChangeText={text => setPostTitle(text)}
				/>
				<TextInput
					style={styles.input}
					placeholder='Post Text'
					value={postText}
					onChangeText={text => setPostText(text)}
				/>
				<Button title='Add Post' onPress={addPost} />
			</View>
		</SafeAreaView>
	);
};

export default AddPost;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		height: 50,
		borderWidth: 1,
		borderRadius: 8,
		backgroundColor: 'white',
		padding: 16,
		marginBottom: 10,
	},
});
