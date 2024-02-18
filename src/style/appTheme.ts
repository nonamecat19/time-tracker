import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const appTheme: CustomThemeConfig = {
	name: 'crimson',
	properties: {
		'--theme-font-family-base':
			"Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,\n		'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
		'--theme-font-family-heading': 'system-ui',
		'--theme-font-color-base': 'var(--color-surface-900)',
		'--theme-font-color-dark': 'var(--color-surface-50)',
		'--theme-rounded-base': '8px',
		'--theme-rounded-container': '24px',
		'--theme-border-base': '1px',
		'--on-primary': '255 255 255',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',

		'--color-primary-50': '234 223 251', // #eadffb
		'--color-primary-100': '227 212 250', // #e3d4fa
		'--color-primary-200': '220 202 249', // #dccaf9
		'--color-primary-300': '199 170 245', // #c7aaf5
		'--color-primary-400': '158 106 237', // #9e6aed
		'--color-primary-500': '116 42 229', // #742ae5
		'--color-primary-600': '104 38 206', // #6826ce
		'--color-primary-700': '87 32 172', // #5720ac
		'--color-primary-800': '70 25 137', // #461989
		'--color-primary-900': '57 21 112', // #391570

		'--color-secondary-50': '235 219 249', // #ebdbf9
		'--color-secondary-100': '228 206 246', // #e4cef6
		'--color-secondary-200': '222 194 244', // #dec2f4
		'--color-secondary-300': '202 158 238', // #ca9eee
		'--color-secondary-400': '162 85 225', // #a255e1
		'--color-secondary-500': '122 12 212', // #7a0cd4
		'--color-secondary-600': '110 11 191', // #6e0bbf
		'--color-secondary-700': '92 9 159', // #5c099f
		'--color-secondary-800': '73 7 127', // #49077f
		'--color-secondary-900': '60 6 104', // #3c0668

		'--color-tertiary-50': '246 244 244',
		'--color-tertiary-100': '242 240 240',
		'--color-tertiary-200': '239 237 236',
		'--color-tertiary-300': '230 226 225',
		'--color-tertiary-400': '211 204 203',
		'--color-tertiary-500': '192 182 180',
		'--color-tertiary-600': '173 164 162',
		'--color-tertiary-700': '144 137 135',
		'--color-tertiary-800': '115 109 108',
		'--color-tertiary-900': '94 89 88',

		'--color-success-50': '244 240 252', // #f4f0fc
		'--color-success-100': '240 235 251', // #f0ebfb
		'--color-success-200': '236 230 250', // #ece6fa
		'--color-success-300': '225 215 247', // #e1d7f7
		'--color-success-400': '203 186 242', // #cbbaf2
		'--color-success-500': '180 156 236', // #b49cec
		'--color-success-600': '162 140 212', // #a28cd4
		'--color-success-700': '135 117 177', // #8775b1
		'--color-success-800': '108 94 142', // #6c5e8e
		'--color-success-900': '88 76 116', // #584c74

		'--color-warning-50': '251 246 231',
		'--color-warning-100': '250 243 223',
		'--color-warning-200': '248 240 215',
		'--color-warning-300': '244 231 191',
		'--color-warning-400': '236 212 142',
		'--color-warning-500': '228 194 94',
		'--color-warning-600': '205 175 85',
		'--color-warning-700': '171 146 71',
		'--color-warning-800': '137 116 56',
		'--color-warning-900': '112 95 46',
		'--color-error-50': '248 236 236',
		'--color-error-100': '246 229 230',
		'--color-error-200': '244 223 224',
		'--color-error-300': '237 204 205',
		'--color-error-400': '224 165 167',
		'--color-error-500': '210 127 129',
		'--color-error-600': '189 114 116',
		'--color-error-700': '158 95 97',
		'--color-error-800': '126 76 77',
		'--color-error-900': '103 62 63',

		'--color-surface-50': '222 217 226', // #ded9e2
		'--color-surface-100': '211 204 216', // #d3ccd8
		'--color-surface-200': '200 191 207', // #c8bfcf
		'--color-surface-300': '167 153 177', // #a799b1
		'--color-surface-400': '100 77 119', // #644d77
		'--color-surface-500': '34 0 61', // #22003d
		'--color-surface-600': '31 0 55', // #1f0037
		'--color-surface-700': '26 0 46', // #1a002e
		'--color-surface-800': '20 0 37', // #140025
		'--color-surface-900': '17 0 30' // #11001e
	}
};
