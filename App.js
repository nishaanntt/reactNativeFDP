import { Image, ScrollView, Text, View } from 'react-native';
const logoImg = require('./assets/adaptive-icon.png');

export default function App() {
	return (
		<View style={{ backgroundColor: 'plum', flex: 1, padding: 60 }}>
			<ScrollView>
				<Image source={logoImg} style={{ width: 300, height: 300 }} />
				<Text>
					Occaecat adipisicing et id ullamco laborum eiusmod aliquip sunt
					exercitation in labore qui nostrud sunt. Sint culpa esse Lorem
					incididunt nostrud esse laboris. Officia voluptate esse eiusmod qui
					in. Culpa exercitation non cillum dolore consequat dolore ad do
					aliquip exercitation adipisicing ad esse aliquip. Aliquip sunt do
					eiusmod sint incididunt enim aliquip ipsum esse excepteur sit minim
					aliquip dolor. Aliquip excepteur incididunt reprehenderit velit. Ut
					fugiat id magna voluptate ipsum magna exercitation ipsum amet velit
					labore id fugiat adipisicing.Voluptate irure consequat reprehenderit
					non.Adipisicing id in consectetur deserunt enim mollit veniam
					voluptate. Do aute mollit consectetur adipisicing qui veniam sit
					nulla. Cupidatat in ullamco qui nulla sint occaecat anim consectetur
					cupidatat.
				</Text>
				<Image source={logoImg} style={{ width: 300, height: 300 }} />
			</ScrollView>
		</View>
	);
}
