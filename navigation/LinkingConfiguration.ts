import * as Linking from 'expo-linking'

export default {
	prefixes: [Linking.makeUrl('/')],
	config: {
		screens: {
			Root: {
				screens: {
					HomeTab: {
						screens: {
							HomeScreen: 'home',
							MoolaMarketScreen: 'moolamarket',
							MentoScreen: 'mento',
							CentroPayScreen: 'pay',
							UbeswapScreen: 'ubeswap',
							BlockExplorerScreen: 'explorer',
							PollenScreen: 'pollen',
							PoofCashScreen: 'poofcash',
						},
					},
					AssetsTab: {
						screens: {
							AssetsScreen: 'assets',
						},
					},
					SettingsTab: {
						screens: {
							SettingsScreen: 'settings',
						},
					},
				},
			},
			NotFound: '*',
		},
	},
}
