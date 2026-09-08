// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://dn42.50335033.xyz',
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
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
	],
});
