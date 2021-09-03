module.exports = {
  title: 'Shiro Docs',
  description: 'Shiro Docs',
  base: '/',
  plugins: [['@vuepress/plugin-search']],
  themeConfig: {
    repo: 'MisakaTAT/Shiro',
    darkMode: false,
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'QuickStart', link: '/quickstart/' },
      { text: 'Event', link: '/event/' },
      { text: 'Action', link: '/action/' },
    ],
  },
};
