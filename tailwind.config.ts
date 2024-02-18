import { join } from 'path';
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';
import forms from '@tailwindcss/forms';
import { appTheme } from './src/style/appTheme';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			width: {
				'screen-w': '400px'
			},
			height: {
				'screen-h': '400px'
			}
		}
	},
	plugins: [
		forms,
		skeleton({
			themes: {
				custom: [appTheme]
				// preset: [
				// 	{
				// 		name: 'crimson',
				// 		enhancements: true
				// 	}
				// ]
			}
		})
	]
} satisfies Config;
