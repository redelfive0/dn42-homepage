// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeFlexoki from 'starlight-theme-flexoki';
import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
	site: 'https://dn42.50335033.xyz',
	integrations: [
		starlight({
			plugins: [starlightThemeFlexoki()],
			title: 'Red Earth Network',
			sidebar: [
				{
					label: 'Network',
					items: [
						{ autogenerate: { directory: 'network' } },
					],
				},
				{
					label: 'Services',
					items: [
						{ autogenerate: { directory: 'services' } }
					],
				},
			],
		}),
		playformCompress(),
	],
});
