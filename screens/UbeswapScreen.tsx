import * as React from 'react'

import { layout, text } from '../styles/styles'

import { ScrollView, View } from 'react-native'
import { Container, Separator, Text } from '../components/ThemedComponents'

export default function UbeswapScreen() {
	return (
		<ScrollView>
			<View style={layout.column}>
				<Container style={layout.centered}>
					<Text style={text.h1}>Ubeswap</Text>
					<Separator />
				</Container>
			</View>
		</ScrollView>
	)
}