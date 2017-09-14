import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image
} from 'react-native';

export default class Splash extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.content}>
					 <Image source={require('../../Splash/images/coffee-cup.png')} style={{width: 193, height: 110}} />
				</View>
				<View style={styles.footer}>
					<Text>Powered by santosoft!</Text>
				</View>
				
			</View>
			);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#3498db',
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	footer: {
		padding: 10,
	}
})