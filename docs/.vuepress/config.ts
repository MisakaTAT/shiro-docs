module.exports = {
  title: 'Shiro Docs',
  description: 'Shiro Docs',
  base: '/shiro-docs/',
  plugins: [['@vuepress/plugin-search']],
  themeConfig: {
    repo: 'MisakaTAT/Shiro',
    docsRepo: 'MisakaTAT/shiro-docs',
    editLinks: true,
    editLinkText: '编辑此页',
    smoothScroll: true,
    lastUpdated: '上一次编辑',
    darkMode: false,
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'QuickStart', link: '/quickstart/' },
      { text: 'Event', link: '/event/' },
      { text: 'Action', link: '/action/' },
    ],
  },
};
