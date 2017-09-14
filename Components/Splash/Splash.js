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
					 <Image source={require('../Splash/images/coffee-cup-256.png')} style={styles.logo} />
					 <Text style={styles.contentText}>Smart Coffee Cup</Text>
				</View>
				<View style={styles.footer}>
					<Text style={styles.footerText}>Powered by santosoft!</Text>
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
		backgroundColor: '#27ae60',
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	contentText: {
		fontSize: 25,
		fontStyle: 'italic',
		fontWeight: 'bold',
		color: '#fff',
		marginTop: 20,
		shadowColor: '#000000',
	},
	footer: {
		padding: 10,
	},
	footerText: {
		color: '#fff',
		opacity: 0.7,
	},
	logo: {
		width: 256,
	}
})