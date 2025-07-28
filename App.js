import { Button, Image, Pressable, Text, View } from 'react-native';
const logoImg = require('./assets/adaptive-icon.png');

export default function App() {
	return (
		<View style={{ backgroundColor: 'plum', flex: 1, padding: 60 }}>
			<Button
				title='Press'
				onPress={() => console.log('button pressed')}
				color='white'
			/>
			{/* ** PRESSABLE COMPONENT ** */}
			<Pressable onPress={() => console.log('Image pressed')}>
				<Image source={logoImg} style={{ height: 300, width: 300 }} />
			</Pressable>
			{/* ** PRESSABLE COMPONENT ** */}
			<Pressable onPress={() => console.log('Text Pressed')}>
				<Text>
					Laborum fugiat aliqua cillum aute sit dolor quis. Deserunt magna ut
					culpa anim dolore duis nulla tempor mollit nulla mollit. Occaecat anim
					dolore duis anim laborum proident occaecat. Ullamco deserunt enim
					velit sint enim anim in enim. Deserunt laboris id laborum ad non.In do
					deserunt in ut et minim enim consequat id. Nostrud qui elit consequat
					consectetur qui do aute cupidatat proident. Ex excepteur ipsum
					pariatur do aliqua nisi adipisicing nulla deserunt consequat
					exercitation pariatur veniam. Ut eu consequat amet amet labore ad enim
					ut mollit fugiat ullamco. Ullamco consectetur ut consequat cillum elit
					ullamco. Incididunt cillum ipsum tempor irure quis ea reprehenderit
					cillum do anim velit ut et mollit. Quis voluptate eiusmod nostrud quis
					culpa elit cillum laboris.
				</Text>
			</Pressable>
		</View>
	);
}
