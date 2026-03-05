// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';



// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cookie Academia',
  tagline: 'Learn while eating cookies',
  favicon: 'img/cooki_logo.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
url: 'https://cookieacademia.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
baseUrl: '/CookieAcademia/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  githubHost: 'github.com',
organizationName: 'cookiacademia', // Usually your GitHub org/user name.
projectName: 'CookieAcademia', // Usually your repo name.

deploymentBranch: 'gh-pages',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  stylesheets: [
  {
    href: 'https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css',
    type: 'text/css',
  },
],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Cookie Academia',
        logo: {
          alt: 'Cookie Academia Logo',
          src: 'img/cooki_logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mathSidebar',
            label: 'Mathématiques',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'csSidebar',
            label: 'Informatique',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'historySidebar',
            label: 'Histoire',
            position: 'left',
          },
          {
            href: 'https://github.com/cookiacademia',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'docSidebar',
            sidebarId: 'aboutusSidebar',
            label: 'A propos',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Theme',
            items: [
              {
                label: 'Mathématique',
                to: '/docs/math/intro',
              },
              {
                label: 'Informatique',
                to: '/docs/computer_science/intro',
              },
              {
                label: 'Histoire',
                to: '/docs/history/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'A Propos',
                to: '/docs/about_us/intro',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/cookiacademia',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cookie Academia. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
