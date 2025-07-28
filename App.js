import { Image, View } from 'react-native';
const logoImg = require('./assets/adaptive-icon.png');

export default function App() {
	return (
		<View style={{ backgroundColor: 'plum', flex: 1, padding: 60 }}>
			{/* Static Image */}
			<Image source={logoImg} style={{ width: 300, height: 300 }} />
			{/* Network Image | Image taken from https://picsum.photos */}
			{/* Specifying width and height is necessary for static images. React Native can infer the size for static images from the image data */}
			<Image
				source={{ uri: 'https://picsum.photos/300' }}
				style={{ width: 300, height: 300 }}
			/>
		</View>
	);
}
