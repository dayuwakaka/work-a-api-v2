## 营销
### YX-1. 营销新增
#### 模块负责人
    尹洪明
#### 1.1 请求URL
    /v2/market
    
#### 1.2 请求类型
    POST
    
#### 1.3 请求参数

##### 基础参数（六钟类型通用参数）
|参数|名称|描述|
|---|---|---|
|type|营销类型|coupon 领券 gift 满赠 reduce 满减 discount 满折 column 专栏 special 专题|
|name|营销名称|
|effectStime|营销开始时间|
|effectEtime|营销结束时间|
|customerRange|用户限制|all 全部客户 new 新客户|
|marketBusinessunitRanges|事业部范围|
|onlyCode|唯一码|每次提交时都不能相同|

##### 领券参数
|参数|名称|描述|
|---|---|---|
|marketCouponCondition|领券限制|
|marketCouponGiveConditions|优惠券限制|
|marketImages|banner 轮播图 popup 弹屏图 detail 详情图，配合 type 配合position 使用|


##### 满赠、满减、满折参数
|参数|名称|描述|
|---|---|---|
|marketProductRanges|产品限制|
|marketActiveCondition|满赠条件、类别|
|marketActiveGiveConditions|满赠规则|
|marketImages|轮播图|banner 轮播图|


##### 专栏参数
|参数|名称|描述|
|---|---|---|
|marketProductRanges|产品限制|
|marketImages|轮播图|banner 轮播图|

##### 专题参数
|参数|名称|描述|
|---|---|---|
|marketImages|轮播图|banner 轮播图 detail 详情图|


#### 1.4 请求示例
    {
    	"type":"coupon",
    	"name":"领券活动名称",
    	"customerRange":"all",
    	"effectStime":"2018-09-13 08:40:17",
    	"effectEtime":"2018-10-13 08:40:17",
    	"onlyCode":"QWIOEUROIASJDKLFAJLSKDFJALSDKF",
    	"marketBusinessunitRanges":[{
    			"type":"businessunit", // businessunit
    			"rangeId":3, // 事业部id
    			"extra":"" // 事业部名称
    		},
    		......
    		]
    	"marketCouponCondition":{
    		"limitNum":1 // 1-仅领一次, 0-用完再领
    	},
    	"marketCouponGiveConditions":[
    		{
    			"couponRuleId":3, // 券规ID
    			"num":1,    // 券数量
    			"effectStime":"2018-09-13 08:40:17", // 券有效开始时间
    			"effectEtime":"2018-10-13 08:40:17" // 券有效结束时间
    		},
    		{
    			"couponRuleId":4,
    			"num":2,
    			"effectStime":"2018-09-13 08:40:17",
    			"effectEtime":"2018-10-13 08:40:17"	
    		}],
    		"marketProductRanges":[
    			{
    			"type":"productunit", // productunit
    			"rangeId":7383, // 产品规格ID
    			"extra":""	// 传空即可
    			},
    			{
    			"type":"productunit",
    			"rangeId":7382,
    			"extra":""	
    			}],
    		"marketActiveCondition":{
    			"accumulative":"ladder", // ladder 阶梯 each 每满赠
    			"unit":"count" // price 金额 count 数量
    		},
    		"marketActiveGiveConditions":[
    			{
    				"targetValue":100, // 满多少
    				"actionValue":2, // 赠多少、减多少、折多少
    				"extra":"4151:7380" // 满赠时，存赠送产品的id 和规格id 格式为 "产品ID:规格ID"
    			},
    			{
    				"targetValue":200,
    				"actionValue":5,
    				"extra":"4151:7380"
    			}],
    		"marketImages":[
    			{
    				"type":"banner", // 图片类型 banner 轮播图 popup 弹屏图 detail 详情图
    				"position":"nolimit", // nolimit 无限制 top 上图 middle 中图 bottom 下图
    				"picUrl":"http://ad.asagroup.cn/asae-h5/v2/activity/index/1200" // 图片url
    			},
    			{
    				"type":"popup",
    				"position":"nolimit",
    				"picUrl":"http://ad.asagroup.cn/asae-h5/v2/activity/index/1200"	
    			},
    			{
    				"type":"detail",
    				"position":"top",
    				"picUrl":"http://ad.asagroup.cn/asae-h5/v2/activity/index/1200"	
    			},
    			{
    				"type":"detail",
    				"position":"middle",
    				"picUrl":"http://ad.asagroup.cn/asae-h5/v2/activity/index/1200"	
    			},
    			{
    				"type":"detail",
    				"position":"bottom",
    				"picUrl":"http://ad.asagroup.cn/asae-h5/v2/activity/index/1200"	
    			}]
    }
    
#### 1.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|



#### 1.6 返回示例
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }

### YX-2. 营销列表
#### 模块负责人
    尹洪明
#### 2.1 请求URL
    /v2/market
#### 2.2 请求类型
    GET
#### 2.3 请求参数
|参数|名称|描述|
|---|---|---|
|name|营销名称|
|type|营销类型|coupon 券规 gift 满赠 reduce 满减 discount 满折 column 专栏 special 专题|
|deleteFlg|状态|0 正常 1 作废 空 全部 字符串类型|
|buttonPermissionFlg|0 无按钮 1 有按钮|
|pageNo|页码|默认1|
|pageSize|页条数|默认25|

#### 2.4 请求示例
    无
#### 2.5 返回值
|参数|名称|描述|
|---|---|---|
|name|营销名称|
|type|营销类型|coupon 领券 gift 满赠 reduce 满减 discount 满折 column 专栏 special 专题|
|deleteFlg|状态|0 正常 1 作废|
|effectEtime|开始时间|
|effectStime|结束时间|
|createUserName|创建人|
|createTime|创建时间|
|overdue|是否过期|0 未过期  1 已过期|
|url|营销图片|起始就是轮播图|


#### 2.6 返回示例
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "deleteButton": true // 删除
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "createTime": "2018-09-13 18:25:24",
                    "createUser": 101,
                    "createUserName": "樊嘉辉",
                    "customerRange": "NEW",
                    "deleteFlg": 0,
                    "effectEtime": "2018-10-13 08:40:17",
                    "effectStime": "2018-09-13 08:40:17",
                    "id": 0,
                    "name": "1",  
                    "overdue": 0, 
                    "type": "COUPON",
                    "url":"http://....."
                }
            ],
            "pageNo": 1,
            "total": 1
        }
    }
    
    
### YX-4. 营销作废
#### 模块负责人
    尹洪明
#### 4.1 请求URL
    /v2/market/{id}

#### 4.2 请求类型
    DELETE


#### 4.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|营销id|


#### 4.4 请求示例
    无

#### 4.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 4.6 返回示例
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }

### YX-5 券规列表
#### 模块负责人
    尹洪明
#### 请求

    GET     /v2/coupon/rule
    
#### 参数

    name                // 券规名称
    deleteFlg           // 状态 0 正常 1 作废
    buttonPermissionFlg // 按钮权限 0 不查询 1 查询
    pageNo              // 页码
    pageSize            // 页条数

#### 返回值
|参数|名称|描述|
|---|---|---|
|id|优惠券规则id|
|name|券规名称|
|ruleType|满减类别| 'PRICE' 金额 ,'COUNT' 数量|
|ranges|使用条件|PRODUCT 指定产品  ALL 无限制|
|deleteFlg|状态|0 正常 1 作废|
|targetValue|目标值|即满值|
|actionValue|执行值|即减值|
|createUserName|创建人名称|
|createTime|创建时间|
|rangeValues|产品范围|列表中用到productunitId，去调用产品规格接口|

##### 响应

    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "deleteButton": true,           // 删除
                    "sendCouponRuleButton": true    // 发放优惠券
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "actionValue": 1,
                    "createRole": 0,
                    "createTime": "2018-09-14 13:47:58",
                    "createUser": 0,
                    "createUserName": "老铁",
                    "deleteFlg": 0,
                    "id": 9908,
                    "material": 0,
                    "name": "测试名称",
                    "onlyCode": "",
                    "rangeValues": [
                        {
                            "couponId": 9908,
                            "deleteFlg": 0,
                            "guige": "1.875kg（25片）/袋*6袋",
                            "id": 0,
                            "name": "六和70/80腿肉",
                            "pno": "LB473",
                            "productId": 2205,
                            "productunitId": 3784,
                            "state": ""
                        }
                    ],
                    "ranges": "PRODUCT",
                    "rule": "REDUCE",
                    "ruleType": "COUNT",
                    "ruleValues": null,
                    "targetValue": 100
                }
            ],
            "pageNo": 1,
            "total": 1
        }
    }

### YX-6.券规新增
#### 模块负责人
    尹洪明
#### 请求

    POST    /v2/coupon/rule

#### 参数

    name   // * 券规名称
    ruleType    // * 满减类型 PRICE: 价格; COUNT: 数量
    ranges  // * 产品范围限制 ALL: 不限; PRODUCT: 指定产品
    ruleValues // * 优惠券规则
    rangeValues // * 优惠券产品范围，ranges=product时，必传
    onlyCode    // * 本次提交携带的唯一码 防止重复提交用

    {
    	"name": "123",
    	"ruleType": "PRICE",
    	"ranges": "ALL",
    	"ruleValues": [{
            targetValue: 120 (目标值，即满值，可以为两位小数) - Number,
            value: 20 (执行值，可以为两位小数) - Number
    	}],
    	"rangeValues": [{
            productId: 66651 (产品id) - Number,
            productUnitId: 128989 (产品规格id) - Number,
            pno: "A081210",
            name: "扛枪保家卫国套餐",
            guige: "1人/次"
        }],
    	"onlyCode": "_1537162222240"
    }


#### 响应

    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }


### YX-8.券规作废
#### 模块负责人
    尹洪明
#### 请求

    DELETE  /v2/coupon/rule/{id}

#### 参数

    id  // * 券规id

#### 响应

    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }

### YX-9.客户优惠券申请列表
#### 模块负责人
    尹洪明
#### 请求

    GET    /v2/coupon/customer_askfors

#### 参数

    keyword // 优惠券名称/客户名称
    buttonPermissionFlg // 按钮权限 1 查询 0 不查询
    pageNo  // 页码
    pageSize    // 页条数

#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                
            ],
            "dataSums": null,
            "datas": [
                {
                    "businessName": "PDOD",
                    "checkRole": 0,
                    "checkTime": "2018-09-21 16:48:14.0",
                    "checkUser": 0,
                    "checkUserName": "姜晓",
                    "couponAmount": 1,
                    "couponCustomerId": 0,
                    "couponId": 0,
                    "createRole": 0,
                    "createTime": "2018-09-11 09:18:40.0",      // 创建时间
                    "createUser": 0,
                    "createUserName": "",                       // 创建人
                    "customerId": 946,
                    "customerName": "946",                      // 客户名称
                    "effectEtime": "2018-12-12 23:59:59.0",     // 优惠券结束时间
                    "effectStime": "2018-09-11 00:00:00.0",     // 优惠券开始时间
                    "id": 87426,                                // 优惠券编号
                    "note": "",
                    "pageId": 0,
                    "promoName": "",
                    "ruleName": "小饺丫（荠菜鱿鱼饺）优惠券",   // 优惠券名称
                    "ruleType": "REDUCE",
                    "status": "PASS"                            // 状态
                },
                ......
            ],
            "pageNo": 1,
            "total": 4
        }
    }

### YX-10.客户优惠券申请审批
#### 模块负责人
    尹洪明
#### 请求

    PUT    /v2/coupon/customer_askfors/{id}

#### 参数

    id // * 申请id
    status // * 状态 PASS 通过 REFUSE 拒绝
    
#### 响应

    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }

### YX-11.客户优惠券申请批量审批
#### 模块负责人
    尹洪明
#### 请求

    PUT    /v2/coupon/customer_askfors/batch

#### 参数

    ids // * 申请id列表 [3,5,6]
    status  // * 状态 PASS 通过 REFUSE 拒绝
    
#### 响应

    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }

### YX-12.客户优惠券申请批量新增（优惠券规则列表中的发券功能、客户功能模块中的发券功能）
#### 模块负责人
    尹洪明
#### 请求url
    /v2/coupon/customer_askfors/batch

#### 请求类型
    POST

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*customerIds|客户id|Array
|*couponAmounts|优惠券规则id和发放张数用逗号相隔|Array|例 ["3,2"]逗号前为优惠券规则id，逗号后为发放张数]
|*effectStime|优惠券有效期开始时间|String|日期为客户所选 时间为自动补全 00:00:00
|*effectEtime|优惠券有效期结束时间|String|日期为客户所选 时间为自动补全 23:59:59
|note|备注|String|200字符以内|
|*onlyCode|本次提交携带的唯一码|String|防止重复提交用

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|修改成功/异常信息|
|data|数据|

#### 请求体示例
    {
        customerIds: [11,33,55],
        couponAmounts: ["3,3", "5,5"],
        effectStime: '2018-09-05 00:00:00',
        effectEtime: '2018-12-12 00:00:00',
        note: '我就是打个酱油'
    }

### YX-13.客户优惠券列表
#### 模块负责人
    尹洪明
#### 请求

    GET     /v2/coupon/customers

#### 参数

    keyword     // 优惠券名称/客户名称
    source      // 发放源
    status      // normal 正常 lock 锁定 invalid 作废
    used        // YES: 已使用; NO: 未使用
    buttonPermissionFlg     // 0 不查询按钮权限  1 查询
    pageNo      // 页码
    pageSize    // 页条数

#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "invalidButton": false,  // 作废
                    "lockButton": false,    // 锁定
                    "unlockButton": false   // 解锁
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "businessName": "PDOD", 
                    "couponId": 0,                          // 优惠券规则id
                    "createRole": 0,
                    "createTime": "2018-09-11 09:25:14.0",
                    "createUser": 0,
                    "createUserName": "",
                    "customerId": 0,
                    "customerName": "946",                  // 客户名称
                    "effectEtime": "2018-12-12 23:59:59",   // 优惠券结束时间
                    "effectStime": "2018-09-11 00:00:00",   // 优惠券开始时间
                    "id": 21995,                            // 客户优惠券编号
                    "pageId": 0,
                    "ruleName": "小饺丫（荠菜鱿鱼饺）优惠券",   // 优惠券名称
                    "ruleType": "REDUCE",
                    "source": "",
                    "sourceName": "手工",           // 发放源
                    "status": "NORMAL",     // 状态 normal 正常 lock 锁定 invalid 作废
                    "type": 0,
                    "used": "NO"            // 使用情况 YES 已使用 NO 未使用
                },
                ......
            ],
            "pageNo": 1,
            "total": 7334
        }
    }
    
    
### YX-14. 客户优惠券批量解锁、批量锁定、批量作废
#### 模块负责人
    尹洪明
#### 请求

    PUT     /v2/coupon/customers/batch
    
#### 参数

    {
    	"ids": [3,4,5],                // 客户优惠券id 列表
    	"status": "CANCEL"      // 状态 NORMAL 解锁 LOCK 锁定 CANCEL 作废
    }
    
#### 响应

    {
    	"code": 100000,
    	"msg": "操作成功",
    	"data": null
    }
    
    

### YX-15.客户优惠券解锁、锁定、作废
#### 模块负责人
    尹洪明
#### 请求

    PUT     /v2/coupon/customers/{id}

#### 参数

    id  // * 优惠券id
    status  // * 状态 NORMAL 解锁 LOCK 锁定 CANCEL 作废

#### 响应

    {
    	"code": 100000,
    	"msg": "操作成功",
    	"data": null
    }

### YX-16 领券活动详情
#### 模块负责人
    尹洪明
#### 16.1 请求URL
    /v2/market/coupon/{id}
#### 16.2 请求类型
    GET
#### 16.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|活动id|
    
#### 16.4 请求示例
    无

#### 16.5 返回值
|参数|名称|描述|
|---|---|---|
|createTime|创建时间|
|createUser|创建人|
|createUserName|创建人姓名|
|customerRange|客户类型 all 全部客户 new 新客户|
|deleteFlg|活动状态|0 正常 1 作废|
|effectEtime|结束时间|
|effectStime|开始时间|
|id|活动ID|
|marketBusinessunitRanges|事业部范围|
|marketCouponCondition|领券限制|
|marketCouponGiveConditions|优惠券限制列表|
|marketImages|图片列表|
|name|营销名称|
|overdue|是否过期|0 未过期  1 已过期|
|type|营销类型|coupon 领券 gift 满赠 reduce 满减 discount 满折 column 专栏 special 专题|


#### 16.6 返回示例

    {
        "code": 100000,
        "msg": "",
        "data": {
            "createTime": "2018-09-13 18:25:24", 
            "createUser": 101, 
            "createUserName": "樊嘉辉", 
            "customerRange": "NEW",
            "deleteFlg": 0,
            "effectEtime": "2018-10-13 08:40:17",
            "effectStime": "2018-09-13 08:40:17",
            "id": 1,
            "marketBusinessunitRanges": [{
                    "extra": "A事业部", // 事业部名称
                    "id": 1,
                    "marketId": 1,
                    "rangeId": 1, // 事业部id
                    "type": "BUSINESSUNIT"
                },
                ......
                ]
            "marketCouponCondition": {
                "id": 1,
                "limitNum": 1, // 1-仅领一次, 0-用完再领
                "marketId": 1
            },
            "marketCouponGiveConditions": [
                {
                    "actionValue": 50,
                    "couponRuleId": 3, // 券规ID
                    "couponRuleName": "小饺丫（荠菜鱿鱼饺）优惠券",
                    "effectEtime": "2018-10-13 08:40:17", // 有效结束时间
                    "effectStime": "2018-09-13 08:40:17", // 有效结束时间
                    "id": 1,
                    "marketId": 1,
                    "num": 1, // 券数量
                    "targetValue": 50
                },
                {
                    "actionValue": 50,
                    "couponRuleId": 4,
                    "couponRuleName": "小饺丫（荠菜鱿鱼饺）优惠券",
                    "effectEtime": "2018-10-13 08:40:17",
                    "effectStime": "2018-09-13 08:40:17",
                    "id": 2,
                    "marketId": 1,
                    "num": 2,
                    "targetValue": 50
                }
            ],
            "marketImages": [
                {
                    "id": 1,
                    "marketId": 1,
                    "picUrl": "http://ad.asagroup.cn/asae-h5/v2/activity/index/1200",
                    "position": "NOLIMIT", // nolimit 无限制 top 上部图 middle 中间图 bottom 底部图
                    "type": "BANNER" // banner 轮播图 popup 弹屏图 detail 详情图
                },
                {
                    "id": 2,
                    "marketId": 1,
                    "picUrl": "http://ad.asagroup.cn/asae-h5/v2/activity/index/1200",
                    "position": "NOLIMIT",
                    "type": "POPUP"
                },
                {
                    "id": 3,
                    "marketId": 1,
                    "picUrl": "http://ad.asagroup.cn/asae-h5/v2/activity/index/1200",
                    "position": "TOP",
                    "type": "DETAIL"
                },
                {
                    "id": 4,
                    "marketId": 1,
                    "picUrl": "http://ad.asagroup.cn/asae-h5/v2/activity/index/1200",
                    "position": "MIDDLE",
                    "type": "DETAIL"
                },
                {
                    "id": 5,
                    "marketId": 1,
                    "picUrl": "http://ad.asagroup.cn/asae-h5/v2/activity/index/1200",
                    "position": "BOTTOM",
                    "type": "DETAIL"
                }
            ],
            "name": "领券活动名称", 
            "overdue": 0,
            "type": "COUPON"
        }
    }


### YX-17 满赠、满减、满折活动详情
#### 模块负责人
    尹洪明
#### 17.1 请求URL
    /v2/market/full/{id}
#### 17.2 请求类型
    GET
#### 17.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|活动id|

#### 17.4 请求示例
    无

#### 17.5 返回值
|参数|名称|描述|
|---|---|---|
|createTime|创建时间|
|createUser|创建人|
|createUserName|创建人姓名|
|customerRange|客户类型 all 全部客户 new 新客户|
|deleteFlg|活动状态|0 正常 1 作废|
|effectEtime|结束时间|
|effectStime|开始时间|
|id|活动ID|
|marketBusinessunitRanges|事业部范围|
|marketActiveCondition|满赠、减条件、满赠类别|
|marketActiveGiveConditions|满赠、满减、满折规则|
|marketImages|图片列表|
|marketProductRanges|产品限制|
|name|营销名称|
|overdue|是否过期|0 未过期  1 已过期|
|type|营销类型|coupon 领券 gift 满赠 reduce 满减 discount 满折 column 专栏 special 专题|

#### 17.6 返回示例
    
    {
        "code": 100000,
        "msg": "",
        "data": {
            "createTime": "2018-09-13 18:58:41",
            "createUser": 101,
            "createUserName": "樊嘉辉",
            "customerRange": "ALL",
            "deleteFlg": 0,
            "effectEtime": "2018-10-13 08:40:17",
            "effectStime": "2018-09-13 08:40:17",
            "id": 6,
            "marketActiveCondition": {
                "accumulative": "LADDER",
                "id": 5,
                "marketId": 6,
                "unit": "COUNT"
            },
            "marketActiveGiveConditions": [
                {
                    "actionValue": 2,               // 赠多少、减多少、折多少
                    "extra": "4151:7380",
                    "id": 9,
                    "marketId": 6,
                    "targetValue": 100,             // 满多少
                    "productName":"西瓜霜",         // 赠品名称
                    "guige":"10袋/箱"               // 赠品规格
                },
                {
                    "actionValue": 5,
                    "extra": "4151:7380",
                    "id": 10,
                    "marketId": 6,
                    "targetValue": 200
                }
            ],
            "marketBusinessunitRanges": [{
                    "extra": "",    // 事业部名称
                    "id": 19,
                    "marketId": 6,
                    "rangeId": 3,   // 事业部id
                    "type": "BUSINESSUNIT"
                },
                ......
                ]
            "marketImages": [
                {
                    "id": 6,
                    "marketId": 6,
                    "picUrl": "http://ad.asagroup.cn/asae-h5/v2/activity/index/1200", // 轮播图URL
                    "position": "NOLIMIT", // 位置无限制
                    "type": "BANNER" // 轮播图
                }
            ],
            "marketProductRanges": [
                {
                    "extra": "",
                    "id": 21,
                    "marketId": 6,
                    "rangeId": 7383,                    // 产品ID
                    "type": "PRODUCTUNIT",
                    "productName":"粉丝蒜蓉贝",         // 活动产品名称
                    "guige":"50袋/箱"                   // 活动产品规格
                },
                {
                    "extra": "",
                    "id": 22,
                    "marketId": 6,
                    "rangeId": 7382,
                    "type": "PRODUCTUNIT",
                    "productName":"粉丝蒜蓉贝",
                    "guige":"50袋/箱"               
                }
            ],
            "name": "满赠活动名称",
            "overdue": 0,
            "type": "GIFT"
        }
    }




### YX-18 专栏活动详情
#### 模块负责人
    尹洪明
#### 18.1 请求URL
    /v2/market/column/{id}
#### 18.2 请求类型
    GET
#### 18.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|活动id|

#### 18.4 请求示例
    无

#### 18.5 返回值
|参数|名称|描述|
|---|---|---|
|createTime|创建时间|
|createUser|创建人|
|createUserName|创建人姓名|
|customerRange|客户类型 all 全部客户 new 新客户|
|deleteFlg|活动状态|0 正常 1 作废|
|effectEtime|结束时间|
|effectStime|开始时间|
|id|活动ID|
|marketBusinessunitRanges|事业部范围|
|marketImages|图片列表|
|marketProductRanges|产品限制|
|name|营销名称|
|overdue|是否过期|0 未过期  1 已过期|
|type|营销类型|coupon 领券 gift 满赠 reduce 满减 discount 满折 column 专栏 special 专题|

#### 18.6 返回示例
    
    {
        "code": 100000,
        "msg": "",
        "data": {
            "createTime": "2018-09-13 19:01:23",
            "createUser": 101,
            "createUserName": "樊嘉辉",
            "customerRange": "ALL",
            "deleteFlg": 0,
            "effectEtime": "2018-10-13 08:40:17",
            "effectStime": "2018-09-13 08:40:17",
            "id": 7,
            "marketBusinessunitRanges": [{
                    "extra": "",    // 事业部名称
                    "id": 23,
                    "marketId": 7,
                    "rangeId": 3, // 事业部id
                    "type": "BUSINESSUNIT"
                },
                ......
                ]
            "marketImages": [
                {
                    "id": 11,
                    "marketId": 7,
                    "picUrl": "http://ad.asagroup.cn/asae-h5/v2/activity/index/1200", // 轮播图URL
                    "position": "NOLIMIT", // 位置 无限制
                    "type": "BANNER" // 轮播图
                }
            ],
            "marketProductRanges": [
                {
                    "extra": "",
                    "id": 25,
                    "marketId": 7,
                    "rangeId": 7383, // 产品规格ID
                    "type": "PRODUCTUNIT"
                },
                {
                    "extra": "",
                    "id": 26,
                    "marketId": 7,
                    "rangeId": 7382,
                    "type": "PRODUCTUNIT"
                }
            ],
            "name": "专栏活动名称",
            "overdue": 0,
            "type": "COLUMN"
        }
    }



### YX-19 专题活动详情
#### 模块负责人
    尹洪明
#### 19.1 请求URL
    /v2/market/special/{id}
#### 19.2 请求类型
    GET
#### 19.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|活动id|

#### 19.4 请求示例
    无

#### 19.5 返回值
|参数|名称|描述|
|---|---|---|
|createTime|创建时间|
|createUser|创建人|
|createUserName|创建人姓名|
|customerRange|客户类型 all 全部客户 new 新客户|
|deleteFlg|活动状态|0 正常 1 作废|
|effectEtime|结束时间|
|effectStime|开始时间|
|id|活动ID|
|marketBusinessunitRanges|事业部范围|
|marketImages|图片列表|
|name|营销名称|
|overdue|是否过期|0 未过期  1 已过期|
|type|营销类型|coupon 领券 gift 满赠 reduce 满减 discount 满折 column 专栏 special 专题|

#### 19.6 返回示例
    
    {
        "code": 100000,
        "msg": "",
        "data": {
            "createTime": "2018-09-13 19:03:14",
            "createUser": 101,
            "createUserName": "樊嘉辉",
            "customerRange": "ALL",
            "deleteFlg": 0,
            "effectEtime": "2018-10-13 08:40:17",
            "effectStime": "2018-09-13 08:40:17",
            "id": 8,
            "marketBusinessunitRanges": [{
                    "extra": "",    // 事业部名称
                    "id": 27,
                    "marketId": 8,
                    "rangeId": 3, // 事业部id
                    "type": "BUSINESSUNIT"
                },
                ......
                ]
            "marketImages": [
                {
                    "id": 16,
                    "marketId": 8,
                    "picUrl": "http://ad.asagroup.cn/asae-h5/v2/activity/index/1200",
                    "position": "NOLIMIT", // 位置无限制
                    "type": "BANNER" // 轮播图
                },
                {
                    "id": 18,
                    "marketId": 8,
                    "picUrl": "http://ad.asagroup.cn/asae-h5/v2/activity/index/1200",
                    "position": "NOLIMIT",
                    "type": "DETAIL" // 详情图
                },
                {
                    "id": 19,
                    "marketId": 8,
                    "picUrl": "http://ad.asagroup.cn/asae-h5/v2/activity/index/1200",
                    "position": "NOLIMIT",
                    "type": "DETAIL"
                },
                {
                    "id": 20,
                    "marketId": 8,
                    "picUrl": "http://ad.asagroup.cn/asae-h5/v2/activity/index/1200",
                    "position": "NOLIMIT",
                    "type": "DETAIL"
                }
            ],
            "name": "专题活动名称",
            "overdue": 0,
            "type": "SPECIAL"
        }
    }
    
    
### YX-20. 根据客户id获取可用活动列表
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/market/{customerId}
    
#### 参数
    customerId
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": {
            "actives": [
                {
                    "accumulative": "",
                    "effectEtime": "",
                    "effectStime": "",
                    "giftNum": 0,
                    "guige": "",
                    "hitGiveConditionId": 0,
                    "marketActiveGiveConditions": null,
                    "marketId": 48,         // 活动id
                    "name": "满赠活动",     // 活动名称
                    "productId": 0,
                    "productName": "",
                    "productunitId": 0,
                    "rebate": 0,
                    "type": "",
                    "unit": ""
                },
                ......
            ],
            "coupons": [
                {
                    "actionValue": 50,
                    "businessName": "",
                    "couponRuleId": 3,
                    "createRole": 0,
                    "createTime": "2018-09-21 16:48:14.0",
                    "createUser": 0,
                    "createUserName": "姜晓",
                    "customerId": 946,
                    "customerName": "",
                    "effectEtime": "2018-12-12 23:59:59",
                    "effectStime": "2018-09-11 00:00:00",
                    "id": 22007,
                    "marketId": 0,
                    "rebate": 0,
                    "ruleName": "小饺丫（荠菜鱿鱼饺）优惠券",
                    "ruleType": "",
                    "source": "HANDWORK",
                    "sourceName": "",
                    "status": "NORMAL",
                    "targetValue": 50,
                    "type": "REDUCE",
                    "unit": "PRICE",
                    "used": "NO"
                },
                ......
            ],
            "rebates": [
                {
                    "createRole": 0,
                    "createTime": "2018-04-16 08:35:20",
                    "createUser": 0,
                    "createUserName": "樊嘉辉",
                    "customerId": 946,
                    "customerName": "",
                    "effectEtime": "2021-01-10 23:59:59",
                    "effectStime": "2018-04-04 00:00:00",
                    "id": 9909,
                    "leftValue": 1110,
                    "name": "专供946苏测试用",
                    "note": "",
                    "ranges": "ALL",
                    "rate": 20,
                    "rebate": 0,
                    "source": "HANDWORK",
                    "sourceExt": "",
                    "sourceValue": "101",
                    "status": "NORMAL",
                    "type": "REBATE",
                    "value": 1110
                },
                ......
            ]
        }
    }
    

### YX-21. 根据客户ID和产品信息获取可用活动列表
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/market/canuse/{customerId}
#### 参数
    customerId
    discountCheckProducts
        -> productId
        -> productunitId
        -> price
        -> count
#### 响应
    格式同 YX-20