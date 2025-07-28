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
				padding: 10,
				borderRadius: 10,
			}}>
			<Text style={{ color: 'purple', fontSize: 18 }}>{title}</Text>
		</Pressable>
	);
};

export default CustomButton;
