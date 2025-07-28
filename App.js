import { Button, Modal, Text, View } from 'react-native';

import { useState } from 'react';

export default function App() {
	const [modalVisible, setModalVisible] = useState(false);

	const onClosePress = () => {
		setModalVisible(false);
	};

	return (
		<View style={{ backgroundColor: 'plum', flex: 1, padding: 60 }}>
			<Button
				title='Press'
				onPress={() => setModalVisible(true)}
				color='white'
			/>
			<Modal
				visible={modalVisible}
				onRequestClose={() => setModalVisible(false)}
				animationType='slide'
				// animationType='fade'
				presentationStyle='pageSheet'
				// presentationStyle='formSheet'
				// formSheet provides a similar UI but differs on larger devices. formSheet is narrower, pageSheet is wider
			>
				<View style={{ backgroundColor: 'lightblue', flex: 1, padding: 60 }}>
					<Text>Modal Content</Text>
					<Button title='close' color='midnightblue' onPress={onClosePress} />
				</View>
			</Modal>
		</View>
	);
}
