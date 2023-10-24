// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Koroneko Corp',
  tagline: 'There is no garden without its weeds.',
  url: 'https://www.phantom-sea-limited.ltd/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/server-icon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KoronekoCorp', // Usually your GitHub org/user name.
  projectName: 'doc', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/KoronekoCorp/doc/tree/main',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Koroneko Corp',
        logo: {
          alt: 'Koroneko Corp',
          src: 'img/server-icon.png',
        },
        items: [
          {
            label: '指南',
            to: '/docs/category/指南',
            position: 'right',
          },
          {
            href: 'https://github.com/KoronekoCorp',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '指南',
                to: '/docs/category/指南',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: '星空回廊',
                href: 'https://gallery.phantom-sea-limited.ltd/',
              },
              {
                label: '星空殿',
                href: 'https://sky.phantom-sea-limited.ltd/',
              },
              {
                label: 'API',
                href: 'https://api.phantom-sea-limited.ltd/release/API',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/KoronekoCorp',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Koroneko Corp Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
