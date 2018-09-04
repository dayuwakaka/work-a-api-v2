module.exports = {
  title: 'ADoc',
  description: 'A团队开发文档',
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      {text: '客户', link: '/customer/'},
      {text: '产品', link: '/product/'}
    ],
    sidebar: 'auto',
  },
  base: '/work-a-api-v2/',
  port: 8080,
};
