import {
	ActivityIndicator,
	Button,
	FlatList,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import { useEffect, useState } from 'react';

// Networking with API calls
// Rendering API response with FlatList
// Loading State
// Pull to refresh
// POST Request

// JSONPlaceholder.typicode.com for mock data/api
// GET - https://jsonplaceholder.typicode.com/posts?_limit=10
// POST - https://jsonplaceholder.typicode.com/posts

const App = () => {
	const [postList, setPostList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [refreshing, setRefreshing] = useState(false);
	const [postTitle, setPostTitle] = useState('');
	const [postBody, setPostBody] = useState('');
	const [isPosting, setIsPosting] = useState(false);
	const [error, setError] = useState('');

	const fetchData = async (limit = 10) => {
		try {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
			);
			const data = await res.json();
			setPostList(data);
			setIsLoading(false);
			setError('');
		} catch (error) {
			console.error('ERROR: Error fetching data:', error);
			setIsLoading(false);
			setError('Failed to fetch the post list');
		}
	};

	const addPost = async () => {
		setIsPosting(true);
		try {
			const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					title: postTitle,
					body: postBody,
				}),
			});
			const newPost = await res.json();
			setPostList([newPost, ...postList]);
			setPostTitle('');
			setPostBody('');
			setIsPosting(false);
			setError('');
		} catch (error) {
			console.error('Error adding new post:', error);
			setError('Failed to add new post');
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleRefresh = () => {
		setRefreshing(true);
		fetchData(20);
		setRefreshing(false);
	};

	if (isLoading) {
		return (
			<SafeAreaView style={styles.loadingContainer}>
				<ActivityIndicator size={'large'} color={'blue'} />
				<Text>Loading...</Text>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			{error ? (
				<View style={styles.errorContainer}>
					<Text style={styles.errorText}>{error}</Text>
				</View>
			) : (
				<>
					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							placeholder='Post Title'
							value={postTitle}
							onChangeText={setPostTitle}
						/>
						<TextInput
							style={styles.input}
							placeholder='Post Body'
							value={postBody}
							onChangeText={setPostBody}
						/>
						<Button
							title={isPosting ? 'Adding...' : 'Add Post'}
							onPress={addPost}
							disabled={isPosting}
						/>
					</View>
					<View style={styles.listContainer}>
						<FlatList
							data={postList}
							renderItem={({ item }) => {
								return (
									<View style={styles.card} key={item.id}>
										<Text style={styles.titleText}>{item.title}</Text>
										<Text style={styles.bodyText}>{item.body}</Text>
									</View>
								);
							}}
							ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
							ListEmptyComponent={
								<Text style={styles.headerText}>No Posts Found</Text>
							}
							ListHeaderComponent={
								<Text style={styles.headerText}>Post List</Text>
							}
							ListFooterComponent={
								<Text style={styles.footerText}>End of List</Text>
							}
							refreshing={refreshing}
							onRefresh={handleRefresh}
						/>
					</View>
				</>
			)}
		</SafeAreaView>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		paddingTop: StatusBar.currentHeight,
	},
	listContainer: {
		flex: 1,
		paddingHorizontal: 16,
	},
	card: {
		backgroundColor: 'white',
		padding: 16,
		borderRadius: 8,
		borderWidth: 1,
	},
	titleText: {
		fontSize: 30,
	},
	bodyText: {
		fontSize: 24,
		color: '#666',
	},
	headerText: {
		fontSize: 24,
		textAlign: 'center',
		marginBottom: 12,
	},
	footerText: {
		fontSize: 24,
		textAlign: 'center',
		marginTop: 12,
	},
	loadingContainer: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		paddingTop: StatusBar.currentHeight,
		justifyContent: 'center',
		alignItems: 'center',
	},
	inputContainer: {
		backgroundColor: 'white',
		padding: 16,
		borderRadius: 8,
		borderWidth: 1,
		margin: 16,
	},
	input: {
		height: 40,
		borderColor: 'grey',
		borderWidth: 1,
		marginBottom: 8,
		padding: 8,
		borderRadius: 8,
	},
	errorContainer: {
		backgroundColor: '#ffc0cb',
		padding: 16,
		borderRadius: 8,
		borderWidth: 1,
		margin: 16,
		alignItems: 'center',
	},
	errorText: {
		color: '#d8000c',
		fontSize: 16,
		textAlign: 'center',
	},
});
