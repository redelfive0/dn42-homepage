// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
    site: 'https://dn42.50335033.xyz',
    integrations: [
        starlight({
            title: 'Red Earth Network',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/redelfive0/dn42-homepage' }],
            sidebar: [
                {
                    label: 'Network',
                    items: [{ autogenerate: { directory: 'network' } }]
                },
                {
                    label: 'Services',
                    items: [{ autogenerate: { directory: 'services' } }]
                },
            ],
		}),
        playformCompress()
    ],
});