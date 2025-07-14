import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'sciolyskillz',
  tagline: 'get your study prep here B)',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://sciolyskillz.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'makrcat', // Usually your GitHub org/user name.
  projectName: 'sciolyskillz', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
      {
        docs: {
          path: 'anatomy',
          routeBasePath: 'anatomy',
          sidebarPath: require.resolve('./sidebars.js'),
          include: ['**/*.mdx'],
          editUrl: 'https://github.com/your-repo/edit/main/anatomy/',
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
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'sciolyskillz',
      logo: {
        alt: 'my site logo',
        src: 'img/logo.png',
      },
      items: [
        /*
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Dashboard',
        },
        */
        { to: '/dashboard', label: 'Dashboard', position: 'left' },
        { to: '/topics', label: 'Topics', position: 'left' },
        { to: '#', label: 'Problem Bank', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'right' }, // it's just like a doc I guess

        { to: '#', label: 'About', position: 'right' },
        {
          href: 'https://nuhuh',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/makrcat/sciolyskillz',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} by makrcat. Built with Docusaurus.`,
    },
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    markdown: {
      externalLinks: {
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    },

  } satisfies Preset.ThemeConfig,
};

export default config;
