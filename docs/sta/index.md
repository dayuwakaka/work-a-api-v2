## 统计系统接口

### STA-1. 导出
#### 模块负责人
    石博孚
#### 请求
	GET /report/export/{type}
    订单价格区间 orderpriceao
	客户级别日报 salesCustomerDay
	SR级别日报 salesSrDayly
	销售日报导出客户产品分组 salesDayly
	销售日报导出产品分组	salesProductGroupDayly
	销售库存商品不足库存 depotProduct
	已支付订单 salesPayOrder
	订单客户产品 orderCustomerProduct
	AO单月度明细 aoDetail
	AO单数月度汇总 aoSSSummary
	新AO客户明细 aoCustomerSummary
	AO客户支付汇总导出 aoCustomerPay
	Mppr getMppr
	前三个月的发货量 shipmentsInTheFirstThreeMonths
	采购订单分析 pa
	采购订单明细分析 paDetail
	销售订单分析 sa
	销售订单明细分析 saDetail
	调价单分析 ap
	调拨单分析 tr
	出库单分析 no
#### 参数
	startDay 开始日期
	endDay 结束日期
#### 响应
    excel导出模板

### STA-2. 获取产品分析
#### 模块负责人
    郭枫
#### 请求
    GET /v2/api/productAnalysis
#### 参数
    monthtag : '2019-06'  //月份
	pageNo : '1'  //页码
	pageSize: '25' //页数
#### 响应
	{
    "code": 100000,
    "msg": "",
    "data": [
        {
            "mainimg": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190402183150719-1911.jpg", //主图
            "twomonth_price": 2785720.5,	//前2月金额
            "totalprice": 5617636.6,	//销售总金额
            "total_count": 53607,	//销售总数量
            "twomonth_count": 25732,	//前两月数量
            "send_count": 53607,	//已发数量
            "avg_price": 3355544.1,	//平均金额
            "trimonth_count": 31145,	//前三月数量
            "product_name": "宝宝贝（蒜蓉粉丝扇贝）餐饮量贩装 ",	//商品名
            "pno": "0189",	//商品号
            "perunit": 12,	//转换率
            "unit": "件",	//单位
            "lastyear_price": 6666971.6,	//去年金额
            "lastmonth_count": 35701,	//上月数量
            "lastyear_count": 57965,	//去年数量
            "lastmonth_price": 3917244,	//上月金额
            "avg_ratio": 0.07490398088081,	// 环比
            "send_totalprice": 5617636.6,	//已发金额
            "guige": "200g(6枚）/袋*12袋",	//规格
            "avg_count": 30859.333333,	//平均数量
            "trimonth_price": 3363667.8	//前三月金额
        },...
	  ]
	}

### STA-3. 获取客户订购产品分析
#### 模块负责人
    郭枫
#### 请求
    GET /v2/api/customerProduct
#### 参数
    monthtag : '2019-06'  //月份
	pageNo : '1'  //页码
	pageSize: '25' //页数

#### 响应
	{
    "code": 100000,
    "msg": "",
    "data": [
        {
            "srName": "陈明", //客户名
            "twomonth_price": 2373560, //前两月金额
            "totalprice": 2338915.05,	//总金额
            "total_count": 4000,	//总数量
            "twomonth_count": 4000,	//前两月数量
            "send_count": 4000,	//已发数量
            "avg_price": 1977966.666667, //平均金额
            "trimonth_count": 2000,	//前三月数量
            "shortname": "东恩国际物流（上海）有限公司",	//客户名
            "pno": "1436",	//品号
            "perunit": 6,	//转换率
            "unit": "件",	//单位
            "lastyear_price": 2373560,	//去年金额
            "lastmonth_count": 4000,	//上月数量
            "lastyear_count": 4000,		//去年数量
            "lastmonth_price": 2373560,	//上月金额
            "avg_ratio": 0.02027606258578,	//环比
            "name": "玉米片虾排",		//商品名
            "send_totalprice": 2338915.05,	//已发金额
            "guige": "1.68kg（24枚）/盒*6盒",		//规格
            "customer_id": 29221,	//客户id
            "avg_count": 3333.333333,	//平均数量
            "ssName": "张莹",	//ss姓名
            "trimonth_price": 1186780	//前三月金额
        },...
	  ]
	}

### STA-4. 获取客户销售额分析
#### 模块负责人
    郭枫
#### 请求
    GET /v2/api/customerSalesAnalysis
#### 参数
    monthtag : '2019-06'  //月份
	pageNo : '1'  //页码
	pageSize: '25' //页数

#### 响应
	{
    "code": 100000,
    "msg": "",
    "data": [
        {
            "todyAdd": 0,	//今日新增
            "yearRatioMonthSend": 498753.69,	//同期已发额
            "theMonth": 0,	//本月订单额
            "areaName": "D",	//大区
            "LastmonthAmount": 214430,	//上月已发额
            "yearGrowth": -1,	//同比增长
            "totalRevenue": 492203.8674,	//年度净收入
            "monthTotalRevenue": 0,	//月度净收入
            "YGrossProfitMargin": 0.10781601,	//年度毛利率
            "monthTotalCost": 0,	//月度总成本
            "YOrderMoney": 549626.52,	//年度订单额
            "MonthGrossProfitMargin": 0,	//年度毛利率
            "srName": "关怡",	//sr姓名
            "busName": "DH",	//事业部
            "ThisMonthFinsh": 0,	//本月已发额	
            "customerName": "北京米斯特商贸有限公司",	//客户名
            "sa_rebate": 0,	//销售优惠
            "Ysend": 549626.52,	//年度已发
            "customer_id": 1191,	//客户id
            "ssName": "许翠竹SS",	//ss姓名
            "AnnualIncome": 549626.52,	//年度收入
            "totalCost": 439136.4086	//年度总成本
        },...
	  ]
	}

### STA-5. 获取 Sr级别日报 分析
#### 模块负责人
    郭枫
#### 请求
    GET /v2/api/srOrCustomerSalesAnalysis/sr
#### 参数
    monthtag : '2019-06'  //月份
	pageNo : '1'  //页码
	pageSize: '25' //页数

#### 响应
	{
    "code": 100000,
    "msg": "",
    "data": [
        {
            "todyAdd": 0,	//今日新增
            "yearRatioMonthSend": 498753.69,	//同期已发额
            "theMonth": 0,	//本月订单额
            "areaName": "D",	//大区
            "LastmonthAmount": 214430,	//上月已发额
            "yearGrowth": -1, //同比增长
            "totalRevenue": 492203.8674,	//年度净收入
            "monthTotalRevenue": 0,	//月度净收入
            "YGrossProfitMargin": 0.10781601,	//年度毛利率
            "monthTotalCost": 0,	//月度总成本
            "YOrderMoney": 549626.52,	//年度订单额
            "MonthGrossProfitMargin": 0,	//年度毛利率
            "srName": "关怡",	//sr姓名
            "busName": "DH",	//事业部
            "ThisMonthFinsh": 0,	//本月已发额	
            "customerName": "北京米斯特商贸有限公司",	//客户名
            "sa_rebate": 0,	//销售优惠
            "Ysend": 549626.52,	//年度已发
            "customer_id": 1191,	//客户id
            "ssName": "许翠竹SS",	//ss姓名
            "AnnualIncome": 549626.52,	//年度收入
            "totalCost": 439136.4086	//年度总成本
        },...
	  ]
	}

### STA-6. 获取 客户级别日报 分析
#### 模块负责人
    郭枫
#### 请求
    GET /v2/api/srOrCustomerSalesAnalysis/customer
#### 参数
    monthtag : '2019-06'  //月份
	pageNo : '1'  //页码
	pageSize: '25' //页数

#### 响应
	{
    "code": 100000,
    "msg": "",
    "data": [
        {
            "todyAdd": 0,	//今日新增
            "yearRatioMonthSend": 498753.69,	//同期已发额
            "theMonth": 0,	//本月订单额
            "areaName": "D",	//大区
            "LastmonthAmount": 214430,	//上月已发额
            "yearGrowth": -1, //同比增长
            "totalRevenue": 492203.8674,	//年度净收入
            "monthTotalRevenue": 0,	//月度净收入
            "YGrossProfitMargin": 0.10781601,	//年度毛利率
            "monthTotalCost": 0,	//月度总成本
            "YOrderMoney": 549626.52,	//年度订单额
            "MonthGrossProfitMargin": 0,	//年度毛利率
            "srName": "关怡",	//sr姓名
            "busName": "DH",	//事业部
            "ThisMonthFinsh": 0,	//本月已发额	
            "customerName": "北京米斯特商贸有限公司",	//客户名
            "sa_rebate": 0,	//销售优惠
            "Ysend": 549626.52,	//年度已发
            "customer_id": 1191,	//客户id
            "ssName": "许翠竹SS",	//ss姓名
            "AnnualIncome": 549626.52,	//年度收入
            "totalCost": 439136.4086	//年度总成本
        },...
	  ]
	}

### STA-7. 获取 大区产品组级别日报 分析
#### 模块负责人
    郭枫
#### 请求
    GET /v2/api/salesDayly/product
#### 参数
    monthtag : '2019-06'  //月份
	pageNo : '1'  //页码
	pageSize: '25' //页数

#### 响应
	{
    "code": 100000,
    "msg": "",
    "data": {
        "mapVCount": {
            "todyAdd": 0,
            "yearRatioMonthSend": 18337219.94,
            "sa_ap_count": -52002.72,
            "theMonth": 142503.9,
            "areaName": "V",
            "LastmonthAmount": 20013084.91,
            "yearGrowth": -0.99222871,
            "targerIntegral": 134.09912362,
            "totalRevenue": 52384470.7582,
            "monthTotalRevenue": 126115.4624,
            "YGrossProfitMargin": 0.18930563,
            "monthTotalCost": 99554.6076,
            "group_bid": 159,
            "YOrderMoney": 60344605.63,
            "MonthGrossProfitMargin": 0.21060744,
            "sa_sr_count": 2437998.71,
            "busName": "VH",
            "sa_pa_count": 42467795.6607,
            "ThisMonthFinsh": 142503.9,
            "achievingRate": 0.13409912,
            "target": 450000000,
            "sa_rebate": 1313366.1,
            "Ysend": 60344605.63,
            "paCount": 42467795.6607,
            "AnnualIncome": 59031239.53,
            "totalCost": 42467795.6607
        },
        "mapPVList": [
            {
                "YOrderMoney": 7959647.45,
                "MonthGrossProfitMargin": 0.16679847,
                "todyAdd": 0,
                "yearRatioMonthSend": 2190203.77,
                "sa_sr_count": 657518.7,
                "busName": "VH",
                "ThisMonthFinsh": 53676.4,
                "achievingRate": 0.099495593125,
                "target": 80000000,
                "sa_rebate": 44555.42,
                "sa_ap_count": -4528,
                "theMonth": 53676.4,
                "areaName": "V",
                "LastmonthAmount": 2890935.17,
                "yearGrowth": -0.97549251,
                "targerIntegral": 99.495593125,
                "Ysend": 7959647.45,
                "totalRevenue": 7073837.1092,
                "monthTotalRevenue": 47507.0553,
                "YGrossProfitMargin": 0.15487408,
                "monthTotalCost": 39582.951,
                "group_bid": 159,
                "AnnualIncome": 7915092.03,
                "totalCost": 5978283.1249
            },
            
        ],
        "mapPList": [
            {
                "todyAdd": 0,
                "yearRatioMonthSend": 18605404.27,
                "sa_ap_count": -165931.25,
                "theMonth": 37056.2,
                "areaName": "P",
                "LastmonthAmount": 22936766.85,
                "yearGrowth": -0.99800831,
                "targerIntegral": 141.82491347500002,
                "totalRevenue": 47499887.9553,
                "monthTotalRevenue": 31965.6992,
                "YGrossProfitMargin": 0.16944369,
                "monthTotalCost": 25250.1823,
                "group_bid": 160,
                "YOrderMoney": 56729965.39,
                "MonthGrossProfitMargin": 0.21008509,
                "sa_sr_count": 62722.45,
                "busName": "两广",
                "ThisMonthFinsh": 37056.2,
                "achievingRate": 0.141824913475,
                "target": 400000000,
                "sa_rebate": 3140359.41,
                "groupName": "PT",
                "Ysend": 56729965.39,
                "AnnualIncome": 53589605.98,
                "totalCost": 39451331.6872
            },
            
        ],
        "mapPSList": [
            {
                "YOrderMoney": 4288201.68,
                "MonthGrossProfitMargin": 0,
                "todyAdd": 0,
                "yearRatioMonthSend": 549909.3,
                "sa_sr_count": 1440,
                "busName": "PS-C",
                "ThisMonthFinsh": 0,
                "sa_rebate": 95396.48,
                "sa_ap_count": -71.4,
                "theMonth": 0,
                "areaName": "PS",
                "LastmonthAmount": 1565709.8,
                "yearGrowth": -1,
                "Ysend": 4288201.68,
                "totalRevenue": 3721092.6026,
                "monthTotalRevenue": 0,
                "YGrossProfitMargin": 0.18166769,
                "monthTotalCost": 0,
                "group_bid": 573,
                "AnnualIncome": 4192805.2,
                "totalCost": 3045090.3142
            }
        ],
        "mapRList": [
            {
                "YOrderMoney": 13534653.62,
                "MonthGrossProfitMargin": 0.0876705,
                "todyAdd": 0,
                "yearRatioMonthSend": 42237.02,
                "sa_sr_count": 345027,
                "busName": "R",
                "ThisMonthFinsh": 173305.71,
                "sa_rebate": 354291.27,
                "sa_ap_count": -932.19,
                "theMonth": 173305.71,
                "areaName": "R",
                "LastmonthAmount": 4724973.3,
                "yearGrowth": 3.10317087,
                "Ysend": 13534653.62,
                "totalRevenue": 12044800.2633,
                "monthTotalRevenue": 154997.049,
                "YGrossProfitMargin": 0.06034428,
                "monthTotalCost": 141408.3802,
                "group_bid": 245,
                "AnnualIncome": 13180362.35,
                "totalCost": 11317965.4359
            }
        ],
        "mapRCount": {
            "todyAdd": 0,
            "yearRatioMonthSend": 42237.02,
            "sa_ap_count": -932.19,
            "theMonth": 173305.71,
            "areaName": "R",
            "LastmonthAmount": 4724973.3,
            "yearGrowth": 3.10317087,
            "targerIntegral": 38.67043891,
            "totalRevenue": 12044800.2633,
            "monthTotalRevenue": 154997.049,
            "YGrossProfitMargin": 0.06034428,
            "monthTotalCost": 141408.3802,
            "group_bid": 245,
            "YOrderMoney": 13534653.62,
            "MonthGrossProfitMargin": 0.0876705,
            "sa_sr_count": 345027,
            "busName": "R",
            "sa_pa_count": 11317965.4359,
            "ThisMonthFinsh": 173305.71,
            "achievingRate": 0.03867044,
            "target": 350000000,
            "sa_rebate": 354291.27,
            "Ysend": 13534653.62,
            "paCount": 11317965.4359,
            "AnnualIncome": 13180362.35,
            "totalCost": 11317965.4359
        },
        "mapDCount": {
            "todyAdd": 0,
            "yearRatioMonthSend": 11771866,
            "sa_ap_count": -25059.07,
            "theMonth": 0,
            "areaName": "D",
            "LastmonthAmount": 12413470.28,
            "yearGrowth": -1,
            "targerIntegral": 117.705597,
            "totalRevenue": 25266880.8876,
            "monthTotalRevenue": 0,
            "YGrossProfitMargin": 0.16797679,
            "monthTotalCost": 0,
            "group_bid": 158,
            "YOrderMoney": 29426399.25,
            "MonthGrossProfitMargin": 0,
            "sa_sr_count": 122477.48,
            "busName": "DH",
            "sa_pa_count": 21022631.296,
            "ThisMonthFinsh": 0,
            "achievingRate": 0.1177056,
            "target": 250000000,
            "sa_rebate": 925957.87,
            "Ysend": 29426399.25,
            "paCount": 21022631.296,
            "AnnualIncome": 28500441.38,
            "totalCost": 21022631.296
        },
        "mapDList": [
            {
                "YOrderMoney": 8407828.4,
                "MonthGrossProfitMargin": 0,
                "todyAdd": 0,
                "yearRatioMonthSend": 3269528.7,
                "sa_sr_count": 117437.48,
                "busName": "DH",
                "ThisMonthFinsh": 0,
                "achievingRate": 0.07006523666666667,
                "target": 120000000,
                "sa_rebate": 201097.56,
                "sa_ap_count": -22800,
                "theMonth": 0,
                "areaName": "D",
                "LastmonthAmount": 3370936.9,
                "yearGrowth": -1,
                "targerIntegral": 70.06523666666666,
                "Ysend": 8407828.4,
                "totalRevenue": 7289735.632,
                "monthTotalRevenue": 0,
                "YGrossProfitMargin": 0.17258529,
                "monthTotalCost": 0,
                "group_bid": 158,
                "AnnualIncome": 8206730.84,
                "totalCost": 6031634.4633
            },
            
        ],
        "mapPCount": {
            "todyAdd": 0,
            "yearRatioMonthSend": 34519616.47,
            "sa_ap_count": -174220.25,
            "theMonth": 78637.2,
            "areaName": "P",
            "LastmonthAmount": 50880142.31,
            "yearGrowth": -0.99772196,
            "targerIntegral": 128.97949379,
            "totalRevenue": 107214782.3444,
            "monthTotalRevenue": 68669.1239,
            "YGrossProfitMargin": 0.13486094,
            "monthTotalCost": 55557.0394,
            "group_bid": 160,
            "YOrderMoney": 128979493.79,
            "MonthGrossProfitMargin": 0.19094585,
            "sa_sr_count": 128689.45,
            "busName": "两广",
            "sa_pa_count": 92755696.04,
            "ThisMonthFinsh": 78637.2,
            "achievingRate": 0.12897949,
            "target": 1000000000,
            "sa_rebate": 8012730.31,
            "groupName": "PT",
            "Ysend": 128979493.79,
            "paCount": 92755696.04,
            "AnnualIncome": 120966763.48,
            "totalCost": 92755696.04
        },
        "mapCount": {
            "YOrderMoney": 236573353.97,
            "MonthGrossProfitMargin": 0.15227102490477723,
            "todyAdd": 0,
            "yearRatioMonthSend": 65220848.730000004,
            "sa_sr_count": 3035632.64,
            "ThisMonthFinsh": 394446.80999999994,
            "achievingRate": 0.11540163608292683,
            "target": 2050000000,
            "sa_rebate": 10701742.030000001,
            "theMonth": 394446.80999999994,
            "sa_ap_count": -252285.63,
            "LastmonthAmount": 89597380.6,
            "yearGrowth": -0.9939521362006047,
            "targerIntegral": 115.40163608292683,
            "Ysend": 236573353.97,
            "paCount": 170609178.74680004,
            "totalRevenue": 200632026.8561,
            "monthTotalRevenue": 349781.6353,
            "monthTotalCost": 296520.0272,
            "YGrossProfitMargin": 0.14964135377465607,
            "totalCost": 170609178.74680004,
            "AnnualIncome": 225871611.94
        },
        "mapPSCount": {
            "todyAdd": 0,
            "yearRatioMonthSend": 549909.3,
            "sa_ap_count": -71.4,
            "theMonth": 0,
            "areaName": "PS",
            "LastmonthAmount": 1565709.8,
            "yearGrowth": -1,
            "targerIntegral": 0,
            "totalRevenue": 3721092.6026,
            "monthTotalRevenue": 0,
            "YGrossProfitMargin": 0.18166769,
            "monthTotalCost": 0,
            "group_bid": 573,
            "YOrderMoney": 4288201.68,
            "MonthGrossProfitMargin": 0,
            "sa_sr_count": 1440,
            "busName": "PS-C",
            "sa_pa_count": 3045090.3142,
            "ThisMonthFinsh": 0,
            "achievingRate": 0,
            "target": 0,
            "sa_rebate": 95396.48,
            "Ysend": 4288201.68,
            "paCount": 3045090.3142,
            "AnnualIncome": 4192805.2,
            "totalCost": 3045090.3142
        }
      }
	}

### STA-8. 获取 大区事业部级别日报 分析
#### 模块负责人
    郭枫
#### 请求
    GET /v2/api/salesDayly/business
#### 参数
    monthtag : '2019-06'  //月份
	pageNo : '1'  //页码
	pageSize: '25' //页数

#### 响应
	见STA-7

### STA-9. 客户登陆
#### 模块负责人
    郭枫
#### 请求
    POST /v2/api/login
#### 参数
    userName : 'admin'  //用户名
	passWord : 'admin'  //密码

### STA-10. 获取客户 菜单
#### 模块负责人
    郭枫
#### 请求
    GET /v2/api/menu
#### 响应
	{
    "code": 100000,
    "msg": "",
    "data": [
        {
            "child": [
                {
                    "child": null,
                    "icon_url": "",
                    "id": 9,
                    "parent_id": 8,
                    "sort": 0,
                    "title": "产品分析",
                    "url": "/salesanalysis/mppr"
                },
                {
                    "child": null,
                    "icon_url": "",
                    "id": 10,
                    "parent_id": 8,
                    "sort": 0,
                    "title": "客户销售额",
                    "url": "/salesanalysis/customersales"
                },
                {
                    "child": null,
                    "icon_url": "",
                    "id": 11,
                    "parent_id": 8,
                    "sort": 0,
                    "title": "客户订购产品",
                    "url": "/salesanalysis/customermppr"
                },
                {
                    "child": null,
                    "icon_url": "",
                    "id": 24,
                    "parent_id": 8,
                    "sort": 0,
                    "title": "客户预警",
                    "url": "/salesanalysis/customerwarning"
                },
                {
                    "child": null,
                    "icon_url": "",
                    "id": 25,
                    "parent_id": 8,
                    "sort": 0,
                    "title": "产品预警",
                    "url": "/salesanalysis/productwarning"
                },
                {
                    "child": null,
                    "icon_url": "",
                    "id": 27,
                    "parent_id": 8,
                    "sort": 0,
                    "title": "数据导出",
                    "url": "/salesanalysis/dataexport"
                },
                {
                    "child": null,
                    "icon_url": "",
                    "id": 28,
                    "parent_id": 8,
                    "sort": 0,
                    "title": "产品明细分析",
                    "url": "/salesanalysis/mpprDetail"
                }
            ],
            "icon_url": "stats-bars",
            "id": 8,
            "parent_id": 0,
            "sort": 0,
            "title": "销售分析",
            "url": "/salesanalysis"
        },
        {
            "child": [
                {
                    "child": null,
                    "icon_url": "",
                    "id": 2,
                    "parent_id": 1,
                    "sort": 0,
                    "title": "客户毛利率",
                    "url": "/profit/grosscustomer"
                },
                {
                    "child": null,
                    "icon_url": "",
                    "id": 3,
                    "parent_id": 1,
                    "sort": 0,
                    "title": "产品毛利率",
                    "url": "/profit/grossproduct"
                },
                {
                    "child": null,
                    "icon_url": "",
                    "id": 4,
                    "parent_id": 1,
                    "sort": 0,
                    "title": "事业部毛利率",
                    "url": "/profit/grossbusiness"
                },
                {
                    "child": null,
                    "icon_url": "",
                    "id": 17,
                    "parent_id": 1,
                    "sort": 0,
                    "title": "销售优惠占比",
                    "url": "/profit/coupon"
                },
                {
                    "child": null,
                    "icon_url": "",
                    "id": 22,
                    "parent_id": 1,
                    "sort": 0,
                    "title": "季度销售优惠",
                    "url": "/profit/customercontract"
                },
                {
                    "child": null,
                    "icon_url": "",
                    "id": 23,
                    "parent_id": 1,
                    "sort": 0,
                    "title": "销售优惠明细",
                    "url": "/profit/salesrebate"
                }
            ],
            "icon_url": "social-buffer",
            "id": 1,
            "parent_id": 0,
            "sort": 0,
            "title": "成本分析",
            "url": "/profit"
        },
        {
            "child": [
                {
                    "child": null,
                    "icon_url": "",
                    "id": 6,
                    "parent_id": 5,
                    "sort": 0,
                    "title": "AO指标",
                    "url": "/assessment/aoIndicators"
                },
                {
                    "child": null,
                    "icon_url": "",
                    "id": 12,
                    "parent_id": 5,
                    "sort": 0,
                    "title": "事业部目标",
                    "url": "/assessment/businessTarget"
                },
                {
                    "child": null,
                    "icon_url": "",
                    "id": 15,
                    "parent_id": 5,
                    "sort": 0,
                    "title": "客户目标",
                    "url": "/assessment/customerTarget"
                },
                {
                    "child": null,
                    "icon_url": "",
                    "id": 16,
                    "parent_id": 5,
                    "sort": 0,
                    "title": "SR目标",
                    "url": "/assessment/srTarget"
                },
                {
                    "child": null,
                    "icon_url": "",
                    "id": 21,
                    "parent_id": 5,
                    "sort": 0,
                    "title": "物流发货额",
                    "url": "/assessment/depotOrder"
                },
                {
                    "child": null,
                    "icon_url": "",
                    "id": 26,
                    "parent_id": 5,
                    "sort": 0,
                    "title": "渠道目标",
                    "url": "/assessment/channelTarget"
                }
            ],
            "icon_url": "arrow-graph-up-right",
            "id": 5,
            "parent_id": 0,
            "sort": 0,
            "title": "考核体系",
            "url": "/assessment"
        },
        {
            "child": [
                {
                    "child": null,
                    "icon_url": "",
                    "id": 14,
                    "parent_id": 13,
                    "sort": 0,
                    "title": "业务组配置",
                    "url": "/systemconfig/group"
                },
                {
                    "child": null,
                    "icon_url": "",
                    "id": 18,
                    "parent_id": 13,
                    "sort": 0,
                    "title": "菜单配置",
                    "url": "/systemconfig/menu"
                },
                {
                    "child": null,
                    "icon_url": "",
                    "id": 19,
                    "parent_id": 13,
                    "sort": 0,
                    "title": "系统用户",
                    "url": "/systemconfig/user"
                },
                {
                    "child": null,
                    "icon_url": "",
                    "id": 20,
                    "parent_id": 13,
                    "sort": 0,
                    "title": "系统角色",
                    "url": "/systemconfig/auth"
                }
            ],
            "icon_url": "ios-gear",
            "id": 13,
            "parent_id": 0,
            "sort": 0,
            "title": "系统配置",
            "url": "/systemconfig"
        }
      ]
	}
   
### STA-11. 营销模块
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
### STA-12. 营销模块
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
### STA-13. 产品期现货
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
### STA-14. 获取客户维度商品销量前50
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

### STA-15. 履约合同明细查询
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

### STA-16. 履约合同重算
#### 模块负责人
    石博孚
#### 请求
    GET /report/task/syncReportContract
#### 参数
    contractNum : 'ASA-1000001818319574'  //合同号
	rebateNode : 'YEAR'  //季度节点
	token: 'ME0154uoR5rnnzEQ62c4Npz1hbqCS71T' //令牌
#### 响应
	{
	    "code": 100000,
	    "msg": "同步合同明细成功",
	    "data": null
	}
#### *注意
	在重算履约合同前先确保订单数据与客户数据已同步到统计系统。