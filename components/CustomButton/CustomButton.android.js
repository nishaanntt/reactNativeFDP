import { Pressable, Text } from 'react-native';

import React from 'react';

const CustomButton = ({ onPress, title }) => {
	return (
		<Pressable
			onPress={onPress}
			style={{
				backgroundColor: 'lightblue',
				alignItems: 'center',
				justifyContent: 'center',
				padding: 20,
				borderRadius: 5,
			}}>
			<Text style={{ color: 'blue', fontSize: 18, fontWeight: 'bold' }}>
				{title}
			</Text>
		</Pressable>
	);
};

export default CustomButton;
