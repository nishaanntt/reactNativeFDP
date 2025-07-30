import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import { FIRESTORE_APP } from '../FirebaseConfig';

const PostList = () => {
	const [postList, setPostList] = useState([]);

	const getPost = async () => {
		try {
			const res = await getDocs(collection(FIRESTORE_APP, 'posts'));
			res.forEach(doc => {
				const dataValue = doc.data();
				setPostList([dataValue, ...postList]);
			});
		} catch (error) {
			console.error('ERROR: ', error);
		}
	};

	useEffect(() => {
		getPost();
		console.log('POSTS!!!: ', postList);
	}, []);
	return (
		<View style={{ flex: 1, backgroundColor: 'pink', padding: 16 }}>
			<FlatList />
		</View>
	);
};

export default PostList;

const styles = StyleSheet.create({});
