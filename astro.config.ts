import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
    base: '/',
    site: 'https://blog.netlify.app/',
    integrations: [sitemap()],
    vite: {
        resolve: {
            alias: {
                '~': 'src/'
            }
        }
    },
    markdown: {
        shikiConfig: {
            langs: [],
            themes: {
                light: 'material-theme-lighter',
                dark: 'material-theme-darker'
            }
        }
    }
})
