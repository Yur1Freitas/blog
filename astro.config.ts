import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

const site = process.env.SITE

// https://astro.build/config
export default defineConfig({
    site,
    base: '/',
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
