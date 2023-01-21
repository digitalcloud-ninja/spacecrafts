import {defaultTheme, defineUserConfig} from 'vuepress'
import {searchPlugin} from '@vuepress/plugin-search'
import {webpackBundler} from "@vuepress/bundler-webpack";

const {repository} = require('../../../../package.json')
const {name} = require('../../../../package.json')

export default defineUserConfig({
    lang: 'en-US',
    title: 'Documentation',
    description: 'My software developers kit.',
    base: '/' + name + '/',
    head: [
        ['link', {rel: 'icon', href: '/images/logo.png'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
    ],
    theme: defaultTheme({
        colorMode: 'auto',
        colorModeSwitch: 'true',
        home: '/',
        navbar: [
            {
                text: 'Getting Started',
                link: '/guides/getting-started' ,
            },
            {
                text: 'Guides',
                link: '/guides/',
            },
            {
                text: 'References',
                link: '/references/'
            }
        ],
        logo: './images/logo.svg',
        logoDark: './images/logo-dark.svg',
        repo: repository,
        repoLabel: 'GitHub',
        selectLanguageText: true,
        selectLanguageAriaLabel: '',
        selectLanguageName: 'v1.0',
        sidebar: [
            {
                text: 'Guides',
                collapsible: false,
                children: [
                    '/guides/GETTING-STARTED.md',
                    '/guides/README.md',
                    '/guides/ADDITIONAL-RESOURCES.md',
                    {
                        text: "Markdown Cheat-Sheet",
                        link: 'https://www.markdownguide.org/cheat-sheet/',
                    }
                ],
            },
            {
                text: 'References',
                collapsible: false,
                children: [
                    '/references/README.md',
                    '/references/api/README.md',
                    '/references/application/README.md',
                    '/references/services/README.md',
                    '/references/datasources/README.md',
                    {
                        text: 'Documents',
                        link: '/references/docs/README.md',
                        collapsible: false,
                        children: [
                            '/references/docs/CONFIGURATION.md'
                        ]
                    },
                    '/references/GLOSSARY.md'
                ],
            },
            {
                text: 'Release Notes',
                collapsible: false,
                children: [
                    '/CHANGELOG.md',
                ],
            },
            {
                text: 'GitHub',
                link: repository,
            }
        ],
        sidebarDepth: 3,
        editLink: true,
        editLinkText: 'Edit this page on GitHub: ',
        docsRepo: repository,
        docsBranch: 'master',
        docsDir: 'docs',
        editLinkPattern: ':repo/-/edit/:branch/:path',
        lastUpdated: true,
        lastUpdatedText: 'Last Updated: ',
        contributors: true,
        contributorsText: 'Contributors: ',
    }),
    plugins: [
        searchPlugin({
            // options
        }),
    ],
    debug: true,
    port: 9080,
    open: true,
    shouldPrefetch: true,
    shouldPreload: true,
})