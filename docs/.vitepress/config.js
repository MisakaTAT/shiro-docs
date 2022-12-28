export default {
  lang: "zh-CN",
  title: "Shiro SDK Document",
  description: "Shiro SDK Document",

  lastUpdated: true,
  base: "/shiro-docs/",

  themeConfig: {
    algolia: {
      appId: "X3KZS61WIZ",
      apiKey: "de397420c51f5bba13f3976820e656b6",
      indexName: "shiro-docs",
    },

    nav: [
      { text: "Guide", link: "/" },
      { text: "Action", link: "/action.md" },
      { text: "Event", link: "/event.md" },
      { text: "Advanced", link: "/advanced.md" },
      { text: "Types", link: "/types.md" },
    ],

    editLink: {
      pattern: "https://github.com/MisakaTAT/shiro-docs/edit/main/:path",
      text: "在 GitHub 上编辑此页",
    },
    lastUpdatedText: "上次更新",
    outlineTitle: "索引",

    outline: [2, 6],

    socialLinks: [
      { icon: "github", link: "https://github.com/MisakaTAT/Shiro" },
    ],

    footer: {
      message: "以 MIT 许可协议发布",
      copyright: "版权所有 © 2022 MisakaTAT",
    },
  },
};
