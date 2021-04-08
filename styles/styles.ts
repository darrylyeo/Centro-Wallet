import { StyleSheet } from 'react-native'


const tintColorLight = '#2f95dc'
const tintColorDark = '#fff'

export const themes = {
	light: {
		text: '#000',
		cardBackground: 'hsla(0, 0%, 100%, 100%)',
		tint: tintColorLight,
		tabIconDefault: '#ccc',
		tabIconSelected: tintColorLight,
		separator: 'hsla(0, 0%, 0%, 0.1)',
	},
	dark: {
		text: '#fff',
		cardBackground: 'hsla(0, 0%, 100%, 0.125)',
		tint: tintColorDark,
		tabIconDefault: '#ccc',
		tabIconSelected: tintColorDark,
		separator: 'hsla(0, 0%, 100%, 0.1)',
	},
}


export const text = StyleSheet.create({
	h1: {
		fontSize: 24,
		lineHeight: 24 * 1.2,
		fontWeight: 'bold'
	},
	h2: {
		fontSize: 20,
		lineHeight: 20 * 1.5,
		fontWeight: 'bold'
	},
	h3: {
		fontSize: 16,
		lineHeight: 16 * 1.5,
		fontWeight: 'bold'
	},
	p: {
		fontSize: 15,
		lineHeight: 15 * 1.1,
	},
	caption: {
		fontSize: 11,
		lineHeight: 11 * 1.1,
		opacity: 0.8
	},
	strong: {
		fontWeight: 'bold'
	},
	code: {
		fontFamily: 'space-mono'
	},
	center: {
		textAlign: 'center'
	}
})


export const layout = StyleSheet.create({
	column: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	grid: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		flexWrap: 'wrap',
		margin: -7
	},
	gridItem: {
		width: 140,
		flexBasis: 140,
		height: 140,
		margin: 7
	},
	full: {
		flex: 1,
		alignSelf: 'stretch'
	},
	centered: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	img: {
		maxWidth: '100%',
		maxHeight: '100%'
	},
	hr: {
		marginVertical: 20,
		height: 1,
		width: '100%',
	},
	spacer: {
		width: 0,
		height: 0,
		margin: 6
	},
	card: {
		borderRadius: 16,
		padding: 16,
		maxWidth: '100%'
	},
	cardList: {
		margin: -16,
	},
	listItem: {
		paddingVertical: 16
	},
	listSeparator: {
		height: 1,
		marginHorizontal: 16
	},
	cardListItem: {
		padding: 16
	},
	container: {
		padding: 32
	},
	bordered: {
		borderWidth: 2,
		borderColor: 'rgba(0, 0, 0, 0.1)'
	},
	shadowed: {
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowRadius: 3,
		elevation: 3
	}
})
