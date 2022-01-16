module.exports = {
  title: 'Shiro',
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
      { text: '主页', link: '/' },
      { text: '快速开始', link: '/quickstart/' },
      { text: '重写事件', link: '/override_event/' },
      { text: '注解事件', link: '/annotation_event/' },
      { text: 'API', link: '/action/' },
      { text: '进阶', link: '/advanced/' },
    ],
  },
};
