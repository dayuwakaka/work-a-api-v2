## 统计系统接口

### STA-1. 订单额度区间分析导出
#### 模块负责人
    石博孚
#### 请求
    GET /report/export/orderpriceao
#### 参数
    priceRange: "0-300" //订单额度区间 
#### 响应
    订单额度区间分析.xls 数据流

### STA-2. 客户级别日报导出
#### 模块负责人
    石博孚
#### 请求
    GET /report/export/salesCustomerDay
#### 参数
    startDay: "2019-03-01" //开始时间
	endDay: "2019-03-31" //结束时间
#### 响应
    客户级别日报.xls 数据流

### STA-3. SR级别日报导出
#### 模块负责人
    石博孚
#### 请求
    GET /report/export/salesSrDayly
#### 参数
    startDay: "2019-03-01" //开始时间
	endDay: "2019-03-31" //结束时间
#### 响应
    SR级别日报.xls 数据流

### STA-4. 销售日报导出客户产品分组导出
#### 模块负责人
    石博孚
#### 请求
    GET /report/export/salesDayly
#### 参数
    startDay: "2019-03-01" //开始时间
	endDay: "2019-03-31" //结束时间
#### 响应
    销售日报导出客户产品分组.xls 数据流

### STA-5. 销售日报导出产品分组导出
#### 模块负责人
    石博孚
#### 请求
    GET /report/export/salesProductGroupDayly
#### 参数
    startDay: "2019-03-01" //开始时间
	endDay: "2019-03-31" //结束时间
#### 响应
    销售日报导出产品分组.xls 数据流

   
### STA-6. 营销模块
#### 模块负责人
    石博孚
#### 请求
    GET /reportMarket/market/product
#### 参数
    *customerId : 12341    //客户编号
    *productIds: 1,2,3,4,5 //商品编号
#### 响应
      {
        "code": 100000,
        "msg": "",
        "data":[
          {
             "productId": 1,     // 按商品客户查询
             "markets":[
                 {
                     "marketId":1,
                     "marketType": 'COUPON', // COUPON 优惠券 'GIFT' 满增 'REDUCE' 满减 'DISCOUNT' 满折
                     "marketName": "xxxx", // 营销名
                     "effectStime": "xxx", // 开始时间
                     "effectEtime": "xxx", // 结束时间
                     "remark":XXX// 描述
                 },
                 ...
             ]
          },
          ...
        ]
    }
### STA-7. 营销模块
#### 模块负责人
    石博孚
#### 请求
    GET /reportMarket/market/productUnit
#### 参数
    *customerId : 12341    //客户编号
    *productUnitIds: 1,2,3,4,5 //商品规格编号
#### 响应
      {
        "code": 100000,
        "msg": "",
        "data":[
          {
             "productUnitId": 1,     // 规格
             "markets":[
                 {
                     "marketId":1,
                     "marketType": 'COUPON', // COUPON 优惠券 'GIFT' 满增 'REDUCE' 满减 'DISCOUNT' 满折
                     "marketName": "xxxx", // 营销名
                     "effectStime": "xxx", // 开始时间
                     "effectEtime": "xxx", // 结束时间
                     "remark":XXX// 描述
                 },
                 ...
             ]
          },
          ...
        ]
    }
### STA-8. 产品期现货
#### 模块负责人
    郭枫
#### 请求
    GET /reportProduct/productNowFuture
#### 参数
    depotId : 40        //仓库id
    depotName: '大连仓'  //仓库名称
    pageSize // 每页显示的条数
    pageNo   // 当前页数
#### 响应
      {
        "code": 100000,
        "msg": "",
         "data": {
                "buttonPermissions": [],
                "dataSums": null,
                "datas": [
                    {
                        "nowAmount": 175, // 现货产品
                        "lastProductAmount": 297, //上月出库品类
                        "depot_id": 40, // 仓库id
                        "customerAmount": 5412, // 近三个月服务客户数
                        "deporName": "DC（大连仓）ASA", // 仓库名称
                        "lastSalesJian": 1100608,  // 上月出库初恋
                        "allProductAmount": 369,  // 全部产品
                        "futureAmount": 194 // 期货产品
                    },
                    ...
                ],
                "pageNo": 1, // 当前页
                "total": 11  // 总记录数
            }
    }
### STA-9. 获取客户维度商品销量前50
#### 模块负责人
    石博孚
#### 请求
    GET /reportProduct/getCustomerProductSales
#### 参数
    customerId : 1        //客户id
#### 响应
	{
        "code": 100000,
        "msg": "",
        "data": {
                "buttonPermissions": [],
                "dataSums": null,
                "datas": [
                    {
		                "totalprice": 711836.65,	//销量
		                "product_id": 231			//产品id
		            },
                    ...
                ],
                "pageNo": 0, // 当前页
                "total": 0  // 总记录数
            }
    }

### STA-10. 履约合同明细查询
#### 模块负责人
    石博孚
#### 请求
    GET /report/contract
#### 参数
    contractNum : 'ASA-1000001818319574'  //合同号
	rebateNode : 'YEAR'  //季度节点
#### 响应
	{
    "code": 100000,
    "msg": "",
    "data": {
        "effective": [	//订购并计入销售优惠客户明细
            {
                "orderAmount": 194993.5,  //订单金额
                "salesAmount": 194993.5,  //总额
                "contractNum": "ASA-1000001818319574",  //合同号
                "apAmount": 0,  //调价单金额
                "customerName": "赣州市惠旺三达食品商行-南昌",  //客户名称
				"customerId": 1,  //客户id
                "refundAmount": 0  //退单金额
            },
            ...
        ],
        "ineffective": [  //订购但不计入优惠产品明细
            {
                "pno": "908C(908)",  //品号
                "specs": "1000g*10袋",  //规格
                "amount": 1170,  //金额
                "ineffectiveSalesAmount": 819,  //不计入金额
                "pname": "海鲜三合一料包",  //品名
                "count": 2,  //数量
                "ineffectiveSalesRatio": 0.7  //不计入比例
            },
			...
        ],
        "sales": {  //销售优惠金额确认
            "salesPlan": 3500000,  //任务额
            "preferentialAmount": 112690.06,  //优惠金额
            "salesAmount": 3757154.39,  //总额
            "ineffectiveSalesAmount": 819,  //不计入优惠金额
            "rebateRate": 3,  //优惠比例
            "effectiveSalesAmount": 3756335.39  //应记优惠金额
        }
    }
}