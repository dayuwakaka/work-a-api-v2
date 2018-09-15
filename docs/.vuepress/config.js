module.exports = {
  title: 'ADoc',
  description: 'A团队开发文档',
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      {text: '客户', link: '/customer/'},
      {text: '产品', link: '/product/'},
      {text: '权限', link: '/auth/'},
      {text: '销售优惠', link: '/contract/'},
      {text: '价格', link: '/price/'},
      {text: '营销', link: '/market/'},
      {text: '基础', link: '/common/'},
      {text: '其它', link: '/other/'}
    ],
    sidebar: 'auto',
  },
  base: '/work-a-api-v2/',
  port: 8080,
};
