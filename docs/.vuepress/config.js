module.exports = {
  title: 'ADoc',
  description: 'A团队开发文档',
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      {text: 'A网话术', link: '/problem'},
      {text: '备货', link: '/stockup/'},
      {text: '订单', link: '/order/'},
      {text: '财务', link: "/finance/"},
      {text: '供应商', link: '/supplier/'},
      {text: '发票', link: '/invoice/'},
      {text: '客户', link: '/customer/'},
      {text: '产品', link: '/product/'},
      {text: '权限', link: '/auth/'},
      {text: '销售优惠', link: '/contract/'},
      {text: '价格', link: '/price/'},
      {text: '运费', link: '/freight/'},
      {text: '营销', link: '/market/'},
      {text: '菜谱', link: '/cookbook/'},
      {text: '基础', link: '/common/'},
      {text: 'APP', link: '/app/'},
      {text: '库存', link: '/depot/'},
      {text: '费用', link: '/fee/'},
      {text: 'WMS仓储', link: '/wms/'},
      {text: '消息通知（作废）', link: '/notice/'},
      {text: '变更', link: '/changelog/'},
      {text: '代理接口', link: '/feign/'},
      {text: '其它', link: '/other/'},
      {text: '统计', link: '/sta/'},
      {text: '消息', link: '/message/'}
    ],
    sidebar: 'auto',
  },
  base: '/work-a-api-v2/',
  port: 8080,
};
