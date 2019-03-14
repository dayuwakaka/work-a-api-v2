## 统计系统接口
### STA-1. AO率整体分析
#### 模块负责人
    石博孚
#### 请求
    GET /report/getReportOrderAo
#### 参数
    businessUnitId: 1// 事业部id
    ssRoleId: 1 //ss id
    srRoleId: 1 //sr id
    customerId: 1 //客户id
    orderByClause: "originalOrderAoRatio DESC" //排序规则 默认：原订单AO率降序， 拆分率排序originalSplitRatio ， 拆分后AO率 orderAoRatio
    pageNo: 1 //页码 默认1
    pageSize: 25 //页面条数 默认25
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data":{
            "buttonPermissions": [],
            "dataSums": null,
            "pageNo": 1,
            "total": 64214
            "datas": [
                {
	                "originalSplitRatio": 0, //原订单拆分率
	                "month": 201806, //月份
	                "originalOrderAoRatio": 0, //原订单AO率（不含修改）
	                "tradefrom": "H5", //下单渠道 {'H5','APP','SYS','WX'}
	                "originalOrderSelfRatio": 100, //原订单AO率
	                "originalOrderSelfNum": 1, //原订单AO数
	                "orderSelfNum": 0, //拆分后自主下单数量
	                "orderNum": 1, //订单数量包含拆分
	                "orderAoRatio": 0, //拆分后AO率（不含修改）
	                "originalOrderNum": 1, //原订单数量
	                "orderSelfRatio": 0 //拆分后AO率
            	},...
            ]
        }
    }

### STA-2. AO率整体分析导出
#### 模块负责人
    石博孚
#### 请求
    GET /report/export/reportOrderAo
#### 参数
    businessUnitId: 1 //事业部id
    ssRoleId: 1 //ss id
    srRoleId: 1 //sr id
    customerId: 1 //客户id
    orderByClause: "originalOrderAoRatio DESC" //排序规则 默认：原订单AO率降序， 拆分率排序originalSplitRatio ， 拆分后AO率 orderAoRatio
#### 响应
    AO率整体分析.xls 数据流

### STA-3. AO率对比分析
#### 模块负责人
    石博孚
#### 请求
    GET /report/getReportCusOrderAo
#### 参数
    businessUnitId: 1 //事业部id
	businessUnitGroupId: 1 //事业组id
    ssRoleId: 1 //ss id
    srRoleId: 1 //sr id
    customerId: 1 //客户id
    orderByClause: "originalOrderAoRatio DESC" //排序规则 默认：原订单AO率降序， 拆分率排序originalSplitRatio ， 拆分后AO率 orderAoRatio
    pageNo: 1 //页码 默认1
    pageSize: 25 //页面条数 默认25
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
        	"dataSums": null,
			"pageNo": 1,
        	"total": 64214
            "datas": [
	            {
	                "originalSplitRatio": 0, //拆分率
	                "month": 201806, //月份
	                "originalOrderAoRatio": 0, //原订单AO率（不含修改）
	                "originalOrderSelfRatio": 100, //原订单AO率
	                "originalOrderSelfNum": 1, //原订单AO数
	                "orderSelfNum": 0, //拆分后AO订单数
	                "orderNum": 1, //拆分后总单数
	                "orderAoRatio": 0, //拆分后AO订单率（不含修改）
	                "originalOrderNum": 1, //原订单数
	                "customerName": "鞍山经济开发区艳君冷冻海鲜行", //姓名
	                "orderSelfRatio": 0 //拆分后AO订单率
	            },...
			]
        }
    }

### STA-4. AO率对比分析导出
#### 模块负责人
    石博孚
#### 请求
    GET /report/export/reportCusOrderAo
#### 参数
    businessUnitId: 1 //事业部id
	businessUnitGroupId: 1 //事业组id
    ssRoleId: 1 //ss id
    srRoleId: 1 //sr id
    customerId: 1 //客户id
    orderByClause: "originalOrderAoRatio DESC" //排序规则 默认：原订单AO率降序， 拆分率排序originalSplitRatio ， 拆分后AO率 orderAoRatio
#### 响应
    AO率对比分析.xls 数据流

### STA-5. AO订单明细分析
#### 模块负责人
    石博孚
#### 请求
    GET /report/getReportOrderPro
#### 参数
    startDay: "2019-03-01" //发货日期区间开始日期 默认为当年的3月1日
	endDay: "2019-03-31" //发货日期区间开始日期 默认为当天
    ao: 1 //是否AO 1是 0否
    customerId: 1 //客户id
    modify: 1 //是否修改 1是 0否
    pageNo: 1 //页码 默认1
    pageSize: 25 //页面条数 默认25
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
        	"dataSums": null,
			"pageNo": 1,
        	"total": 64214
            "datas": [
	            {
	                "originalSplitRatio": 0, //拆分率
	                "month": 201806, //月份
	                "originalOrderAoRatio": 0, //原订单AO率（不含修改）
	                "originalOrderSelfRatio": 100, //原订单AO率
	                "originalOrderSelfNum": 1,  //原订单AO数
	                "orderSelfNum": 0, //拆分后AO订单数
	                "orderNum": 1, //拆分后总单数
	                "orderAoRatio": 0, //拆分后AO订单率（不含修改）
	                "originalOrderNum": 1, //原订单数
	                "customerName": "鞍山经济开发区艳君冷冻海鲜行", //姓名
	                "orderSelfRatio": 0 //拆分后AO订单率
	            },...
			]
        }
    }

### STA-6. AO订单明细分析导出
#### 模块负责人
    石博孚
#### 请求
    GET /report/export/reportOrderPro
#### 参数
    startDay: "2019-03-01" //发货日期区间开始日期 默认为当年的3月1日
	endDay: "2019-03-31" //发货日期区间开始日期 默认为当天
    ao: 1 //是否AO 1是 0否
    customerId: 1 //客户id
    modify: 1 //是否修改 1是 0否
    pageNo: 1 //页码 默认1
    pageSize: 25 //页面条数 默认25
#### 响应
    AO订单明细分析.xls 数据流

### STA-7. 订单额度区间分析
#### 模块负责人
    石博孚
#### 请求
    GET /report/getReportOrderPriceAo
#### 参数
	priceRange: "0-300" //订单额度区间 
	可选值："0-300", "301-500", "501-800", "801-1200", "1201-2000", "2001-3000", "3001-5000", "5001-8000","8001-10000", "10001-20000", "20001-30000", "30001-50000", "50001-80000", "80001-"
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
        	"dataSums": null,
			"pageNo": 1,
        	"total": 64214
            "datas": [
	            {
		            "aoTrueOrderCount": 8579, //AO单数（只记母单，不含修改）
		            "aoTrueRatio": 69.04, //AO率（不含修改）
		            "aoTrueCustomerCount": 2595, //AO客户数（不含修改）
		            "aoTrueCustomerRatio": 70.08, //AO客户数占比（不含修改）
		            "orderCount": 12426, //订单总数量 
		            "aoCustomerRatio": 71.27, //AO客户数占比
		            "aoCustomerCount": 2639, //AO客户数
		            "aoRatio": 70.77, //AO率
		            "aoOrderCount": 8794, //AO单数
		            "priceRange": "301-500", //价格区间
		            "customerCount": 3703 //客户数
		        },...
			]
        }
    }


### STA-8. 订单额度区间分析导出
#### 模块负责人
    石博孚
#### 请求
    GET /report/export/orderpriceao
#### 参数
    priceRange: "0-300" //订单额度区间 
#### 响应
    订单额度区间分析.xls 数据流

### STA-9. 客户月度单额分析
#### 模块负责人
    石博孚
#### 请求
    GET /report/getCustomerMonth
#### 参数
    month: "2019-03" //月份
	orderCount: "3-5" //下单次数 可选"5" 或 "3-5"两种方式，区间则以"-"分割
	ao: 1 //是否AO 1是 0否
    modify: 1 //是否修改 1是 0否
	pageNo: 1 //页码 默认1
    pageSize: 25 //页面条数 默认25
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
        	"dataSums": null,
			"pageNo": 1,
        	"total": 486
            "datas": [
	            {
	                "month": "2019-01",
	                "totalPrice": 16997.96,
	                "avgPrice": 739.04,
	                "customerId": 30698,
	                "orderCount": 23,
	                "isAo": 1,
	                "isModify": 0,
	                "customerName": "金州区光明街道崔学维货运车"
	            },...
			]
        }
    }
    

### STA-10. 客户月度单额分析导出
#### 模块负责人
    石博孚
#### 请求
    GET /report/export/customermonth
#### 参数
    month: "2019-03" //月份
	orderCount: "3-5" //下单次数 可选"5" 或 "3-5"两种方式，区间则以"-"分割
	ao: 1 //是否AO 1是 0否
    modify: 1 //是否修改 1是 0否
#### 响应
    客户月度单额分析.xls 数据流

### STA-11. 客户级别日报导出
#### 模块负责人
    石博孚
#### 请求
    GET /report/export/salesCustomerDay
#### 参数
    startDay: "2019-03-01" //开始时间
	endDay: "2019-03-31" //结束时间
#### 响应
    客户级别日报.xls 数据流

### STA-12. SR级别日报导出
#### 模块负责人
    石博孚
#### 请求
    GET /report/export/salesSrDayly
#### 参数
    startDay: "2019-03-01" //开始时间
	endDay: "2019-03-31" //结束时间
#### 响应
    SR级别日报.xls 数据流

### STA-13. 销售日报导出客户产品分组导出
#### 模块负责人
    石博孚
#### 请求
    GET /report/export/salesDayly
#### 参数
    startDay: "2019-03-01" //开始时间
	endDay: "2019-03-31" //结束时间
#### 响应
    销售日报导出客户产品分组.xls 数据流

### STA-14. 销售日报导出产品分组导出
#### 模块负责人
    石博孚
#### 请求
    GET /report/export/salesProductGroupDayly
#### 参数
    startDay: "2019-03-01" //开始时间
	endDay: "2019-03-31" //结束时间
#### 响应
    销售日报导出产品分组.xls 数据流