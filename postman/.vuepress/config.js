import {defaultTheme, defineUserConfig} from 'vuepress'
//import {searchPlugin} from '@vuepress/plugin-search'

const {repository} = require('../../package.json')
const {name} = require('../../package.json')

export default defineUserConfig({
    lang: 'en-US',
    title: 'Documentation',
    description: 'A swiss-army knife for starting your project off quickly.',
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
                text: 'Guide',
                link: '/guides/',
            },
            {
                text: 'Reference Material',
                link: '/references/'
            }
        ],
        logo: './images/logo.svg',
        logoDark: './images/logo-dark.svg',
        repo: repository,
        repoLabel: 'GitHub',
        selectLanguageText: false,
        selectLanguageAriaLabel: '',
        selectLanguageName: 'v1.0',
        sidebar: [
            {
                text: 'Guides',
                collapsible: false,
                children: [
                    '/guides/GETTING-STARTED.md',
                    '/guides/README.md'
                ],
            },
            {
                text: 'Reference Materials',
                collapsible: false,
                children: [
                    '/references/README.md',
                    '/references/application/README.md',
                    '/references/services/README.md',
                    '/references/ADDITIONAL-RESOURCES.md',
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
        editLink: false,
        editLinkText: 'Edit this page on GitHub: ',
        docsRepo: repository,
        docsBranch: 'master',
        docsDir: 'postman',
        editLinkPattern: ':repo/edit/:branch/:path',
        lastUpdated: true,
        lastUpdatedText: 'Last Updated: ',
        contributors: true,
        contributorsText: 'Contributors: ',
    }),
    plugins: [
        // searchPlugin({
        //     // exclude the homepage
        //     isSearchable: (page) => page.path !== '/',
        // }),
    ],
    debug: true,
    port: 9080,
    open: true,
    shouldPrefetch: true,
    shouldPreload: true,
})