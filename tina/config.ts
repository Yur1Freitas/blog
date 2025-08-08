import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || 'main'

const token = process.env.TINATOKEN
const clientId = process.env.TINACLIENTID
const indexerToken = process.env.TINASEARCH

interface Post {
    title: string
    slug: string
    description: string
    added: string | Date
    updated?: string | Date
    tags: string[]
}

export default defineConfig({
    branch,
    token,
    clientId,
    build: {
        outputFolder: 'admin',
        publicFolder: 'public'
    },
    media: {
        tina: {
            mediaRoot: 'assets',
            publicFolder: 'public'
        }
    },
    schema: {
        collections: [
            {
                name: 'post',
                label: 'Posts',
                path: 'posts',
                defaultItem: (): Post => {
                    return {
                        title: 'New Post',
                        slug: 'new-post',
                        description: 'Generic post',
                        added: new Date(),
                        tags: []
                    }
                },
                ui: {
                    filename: {
                        readonly: false,
                        slugify: (values): string => {
                            return values?.slug?.toLowerCase().replace(/ /g, '-')
                        }
                    }
                },
                fields: [
                    {
                        name: 'title',
                        label: 'Title',
                        type: 'string',
                        isTitle: true,
                        required: true
                    },
                    {
                        label: 'Slug',
                        name: 'slug',
                        type: 'string',
                        required: true
                    },
                    {
                        label: 'Description',
                        name: 'description',
                        type: 'string',
                        required: true
                    },
                    {
                        label: 'Tags',
                        name: 'tags',
                        type: 'string',
                        list: true,
                        options: [
                            {
                                value: 'technical',
                                label: 'Technical'
                            },
                            {
                                value: 'advice',
                                label: 'Advice'
                            },
                            {
                                value: 'events',
                                label: 'Events'
                            },
                            {
                                value: 'learning',
                                label: 'Learning'
                            },
                            {
                                value: 'meta',
                                label: 'Meta'
                            },
                            {
                                value: 'work',
                                label: 'Work'
                            },
                            {
                                value: 'personal',
                                label: 'Personal'
                            },
                            {
                                value: 'musings',
                                label: 'Musings'
                            }
                        ]
                    },
                    {
                        label: 'Added',
                        name: 'added',
                        type: 'datetime',
                        required: true,
                        ui: {
                            dateFormat: 'DD-MM-YYYY'
                        }
                    },
                    {
                        label: 'Updated',
                        name: 'updated',
                        type: 'datetime',
                        ui: {
                            dateFormat: 'DD-MM-YYYY'
                        }
                    },
                    {
                        type: 'rich-text',
                        name: 'body',
                        label: 'Body',
                        isBody: true
                    }
                ]
            }
        ]
    },
    search: {
        tina: {
            indexerToken,
            stopwordLanguages: ['porBr']
        },
        indexBatchSize: 50,
        maxSearchIndexFieldLength: 100
    }
})
