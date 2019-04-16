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
        @@"remark":"健哥要求加的活动说明",
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
            @@"type":"PRODUCTUNIT", // PRODUCTUNIT 指定品   EXCLUDE 排除品  ALL 无限制
            "rangeId":7383, // 产品规格ID
            "extra":""	// 传空即可
            },
            {
            "type":"PRODUCTUNIT",
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
                 @@"shiftFlg":0,        // 转每满标志 默认 0
                 @@"shiftType":"EACH"   // 默认 EACH
            },
            { // 转每满的一个目标值
                "targetValue":200,      // 满
                "actionValue":0,        // 默认 0
                "extra":"",
                @@"shiftFlg":1,       // 转每满标志 默认 1
                @@"shiftType":"EACH"  // 默认 EACH
            }],
        @@"marketActiveShiftCondition":{  // 转每满
                "targetValue": 20,      // 目标值
                "actionValue": 2,       // 执行值
                "extra": "4749:8322"    // gift productId:productUnitId
        },
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
##### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "actionValue": 1,           // 减
                    "budgetFlg": 0,
                    "createRole": 0,
                    "createTime": "2019-03-26 18:35:29",
                    "createUser": 0,
                    "createUserName": "樊嘉辉",
                    "deleteFlg": 0,         // 0 正常 1 作废
                    "id": 12375,            // 券规id
                    "material": 0,
                    "name": "2019年新券规", // 券规名
                    "onlyCode": "",
                    "ranges": "PRODUCTUNIT", // 产品限制    ALL 全部品 PRODUCTUNIT 指定品 EXCLUDE 排除品
                    "ruleRanges": [
                        {
                            "couponRuleId": 12375,
                            "deleteFlg": 0,
                            "id": 16793,
                            "productUnitId": 1  // 指定品或排除品规格id
                        },
                        {
                            "couponRuleId": 12375,
                            "deleteFlg": 0,
                            "id": 16794,
                            "productUnitId": 2
                        }
                    ],
                    "targetValue": 101, // 满
                    "type": "REDUCE",   
                    "unit": "PRICE"     // 满减类型
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
    {
        "name": "2019年新券规",     // 券规名
        "unit": "PRICE",            // 满减类型
        "targetValue": 101,         // 满
        "actionValue": 1,           // 减
        "ranges": "PRODUCTUNIT",    // ALL 全部品 PRODUCTUNIT 指定品 EXCLUDE 排除品
        "ruleRanges": [         // 指定品或排除品规格id列表
            {
                "productUnitId": 1
            },
            {
                "productUnitId": 2
            }
        ],
        "onlyCode": "_153905sd99956"    // 唯一码
    }
#### 响应
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }

### YX-7.客户发放预算券
#### 模块负责人
    尹洪明
#### 请求
    POST    /v2/coupon
#### 参数
    {
        "customerAmount": { // customerId -> 优惠券数量
            "32936": 1,
            "32938": 2
        },
        "couponRule": {
            "name": "2019年预算券", // 优惠券名
            "unit": "PRICE",        // 满减类型 PRICE 价格 COUNT 数量
            "targetValue": 100,     // 满
            "actionValue": 1,       // 减
            "ranges": "PRODUCTUNIT",    // ALL 全部产品  PRODUCTUNIT 指定品  EXCLUDE 排除品
            "ruleRanges": [         // 指定品排除品产品规格id列表
                {
                    "productUnitId": 1
                },
                {
                    "productUnitId": 2
                }
            ]
        },
        "effectStime": "2019-03-26 00:00:00",   // 有效开始时间
        "effectEtime": "2019-04-26 23:59:59",   // 有效结束时间
        "onlyCode": "294376S334"                // 唯一码
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
    *id  // 券规id
#### 响应
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }

### YX-9.客户优惠券申请列表（废弃）
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

### YX-10.客户优惠券申请审批（废弃）
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

### YX-11.客户优惠券申请批量审批（废弃）
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

### YX-12.客户优惠券申请批量新增（废弃）
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

### YX-9.客户优惠券列表
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
                    "actionValue": 1,               // 减
                    "businessName": "",
                    "couponRuleId": 12374,          // 券规id
                    "createRole": 0,
                    "createTime": "2019-03-26 18:23:06.0",
                    "createUser": 0,
                    "createUserName": "樊嘉辉",
                    "customerId": 32938,
                    "customerName": "82年凯龙",    // 客户名
                    "effectEtime": "2019-04-26 23:59:59",   // 结束日志
                    "effectStime": "2019-03-26 00:00:00",   // 开始日期
                    "id": 186186,               // 优惠券编号
                    "marketId": 0,
                    "rangeType": "PRODUCTUNIT",         // ALL 全部品 PRODUCTUNIT 指定品 EXCLUDE 排除品
                    "ranges": [         // 指定品 或 排除品
                        {
                            "couponRuleId": 12411,
                            "deleteFlg": 0,
                            "id": 16869,
                            "productUnitId": 8066
                        },
                        {
                            "couponRuleId": 12411,
                            "deleteFlg": 0,
                            "id": 16870,
                            "productUnitId": 8061
                        }
                    ],
                    "rebate": 0,
                    "ruleName": "2019年预算券", // 优惠券名
                    "ruleType": "",
                    "source": "HANDWORK",   // 发放源 HANDWORK 手工 ACTIVE 活动
                    "sourceName": "",
                    "status": "LOCK",       // 优惠券状态    NORMAL 正常 LOCK 锁定 CANCEL 作废
                    "targetValue": 100,     // 满
                    "type": "REDUCE",
                    "unit": "PRICE",        // PRICE 金额  COUNT 数量
                    "used": "NO"        // 使用情况  YES 已使用  NO 未使用
                }
            ],
            "pageNo": 1,
            "total": 7334
        }
    }
### YX-10.客户优惠券批量锁定
#### 模块负责人
    尹洪明
#### 请求
    PUT     /v2/coupon/lock
#### 参数
    [
        186186,
        186185
    ]
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
### YX-11.客户优惠券批量解锁
#### 模块负责人
    尹洪明
#### 请求
    PUT     /v2/coupon/unlock
#### 参数
    [
        186186,
        186185
    ]
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
### YX-12.客户优惠券批量作废
#### 模块负责人
    尹洪明
#### 请求
    PUT     /v2/coupon/cancel
#### 参数
    [
        186186,
        186185
    ]
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
### YX-13.客户所属事业组的预算
#### 模块负责人
    尹洪明
#### 请求
    GET     /v2/market/coupon/budget/{customerId}
#### 参数
    *customerId // 客户id
#### 响应    
     {
         "code": 100000,
         "msg": "",
         "data": {
             "budgetAmount": 893890,            // 剩余预算额
             "budgetYm": "2019-03",
             "businessunitGroupId": 4,
             "createRole": 1,
             "createTime": "2019-03-27 16:40:20.0",
             "createUser": 1,
             "createUsername": "樊佳慧",
             "id": 1,
             "modifyTime": "2019-03-28 00:53:37.0"
         }
     }   
### YX-14. 客户优惠券批量解锁、锁定、作废（废弃）
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
    
    

### YX-15.客户优惠券解锁、锁定、作废（废弃）
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
                    "actionValue": 2,               // 赠、减、折
                    "extra": "4151:7380",           // gift productId:productUnitId
                    "id": 9,
                    "marketId": 6,
                    "productName":"西瓜霜",         // 赠品名称
                    "guige":"10袋/箱"               // 赠品规格
                     @@"shiftFlg": 0,               // 阶梯转每满标识 0 非 1 是
                     @@"shiftType": "EACH",
                    "targetValue": 100            // 满
                },
                {
                    "actionValue": 5,
                    "extra": "",
                    "id": 10,
                    "marketId": 6,
                    "productName":"",
                    "guige":""
                     @@"shiftFlg": 1,
                     @@"shiftType": "EACH",
                    "targetValue": 200
                }
            ],
            @@"marketActiveShiftCondition":{  // 转每满
                    "targetValue": 20,      // 目标值
                    "actionValue": 2,       // 执行值
                    "extra": "4749:8322"    // gift productId:productUnitId
            },
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
    
### YX-22. 获取可用返利券
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/market/canuse/rebate
#### 参数
    {
        *"customerId": 29543,   // 客户ID
        *"product": [
            {
                *"productId": 1,        // 产品ID
                *"productunitId": 2,    // 产品规格ID
                *"price": 10,           // 购买价格
                *"count": 10            // 购买数量
            },
            {
                "productId": 2,
                "productunitId": 8,
                "price": 10,
                "count": 10
            },
            {
                "productId": 3,
                "productunitId": 10,
                "price": 10,
                "count": 10
            }
        ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "createRole": 0,
                "createTime": "2019-03-15 14:23:38",
                "createUser": 0,
                "createUserName": "孙启萌",
                "customerId": 29543,
                "customerName": "",
                "effectEtime": "2020-04-01 23:59:59",   // 结束日期
                "effectStime": "2019-03-15 00:00:00",   // 开始日期
                "id": 15279,                     // 返利券ID
                "leftValue": 2850,              // 剩余面值
                "name": "测试9推广费用",          // 返利券名
                "note": "",
                "ranges": "ALL",
                "rate": 50,                     // 使用比率 50%
                "rebate": 150,                  // 可用面值
                "source": "HANDWORK",
                "sourceExt": "",
                "sourceValue": "518",
                "status": "NORMAL",
                "type": "SPREAD", // 返利券类型 REBATE 返利券 SPREAD 推广会 FREIGHT 运费 OTHER 其它
                "value": 3000
            },
            {
                "createRole": 0,
                "createTime": "2019-03-15 14:18:59",
                "createUser": 0,
                "createUserName": "孙启萌",
                "customerId": 29543,
                "customerName": "",
                "effectEtime": "2020-04-01 23:59:59",
                "effectStime": "2019-03-15 00:00:00",
                "id": 15278,
                "leftValue": 89940,
                "name": "测试9返利券",
                "note": "",
                "ranges": "ALL",
                "rate": 20,
                "rebate": 60,
                "source": "HANDWORK",
                "sourceExt": "",
                "sourceValue": "518",
                "status": "NORMAL",
                "type": "REBATE",
                "value": 90000
            }
        ]
    }
 
### YX-23. 获取可用活动优惠
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/market/canuse/coupon
#### 参数
    {
        *"customerId": 29543,   // 客户ID
        *"product": [
            {
                *"productId": 1,        // 产品ID
                *"productunitId": 2,    // 产品规格ID
                *"price": 10,           // 购买价格
                *"count": 10            // 购买数量
            },
            {
                "productId": 2,
                "productunitId": 8,
                "price": 10,
                "count": 10
            },
            {
                "productId": 3,
                "productunitId": 10,
                "price": 10,
                "count": 10
            }
        ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "accumulative": "LADDER",               // LADDER 阶梯  EACH 每满
                "effectEtime": "2020-04-01 23:59:59",   // 结束时间
                "effectStime": "2019-03-15 00:00:00",   // 开始时间
                "giveCondition": {
                    "171": {
                        "actionValue": 10,
                        "extra": "",
                        "guige": "",
                        "id": 171,
                        "marketId": 254,
                        "pno": "",
                        "productName": "",
                        "targetValue": 100
                    },
                    "172": {
                        "actionValue": 30,
                        "extra": "",
                        "guige": "",
                        "id": 172,
                        "marketId": 254,
                        "pno": "",
                        "productName": "",
                        "targetValue": 200
                    },
                    "173": {
                        "actionValue": 50,      // 减50元 或 50折
                        "extra": "",
                        "guige": "",
                        "id": 173,
                        "marketId": 254,
                        "pno": "",
                        "productName": "",
                        "targetValue": 300 // （每）满 300 元（个）
                                                注：满或每满根据accumulative判断
                                                    元或个根据unit判断
                    }
                },
                "hitGiveConditionId": 173,      // 命中的规则详细
                "id": 254,                      // 活动优惠ID
                "name": "满减005",            // 活动优惠名
                "rangeType": "PRODUCTUNIT", // 使用条件 PRODUCTUNIT 指定品 EXCLUDE 排除品 ALL 无限制
                "ranges": [             // 指定品或排除品的 productunitId
                    2,
                    8,
                    10
                ],
                "type": "REDUCE", // 活动优惠类型 REDUCE 满减 DISCOUNT 满折 COUPON 优惠券
                "unit": "PRICE"     // PRICE 金额满 COUNT 数量满
            }
        ]
    }    


### YX-24. 获取可用赠品
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/market/canuse/gift
#### 参数
    {
        *"customerId": 29543,   // 客户ID
        *"product": [
            {
                *"productId": 1,        // 产品ID
                *"productunitId": 2,    // 产品规格ID
                *"price": 10,           // 购买价格
                *"count": 10            // 购买数量
            },
            {
                "productId": 2,
                "productunitId": 8,
                "price": 10,
                "count": 10
            },
            {
                "productId": 3,
                "productunitId": 10,
                "price": 10,
                "count": 10
            }
        ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "giftGuige": "900g",        // 赠品规格
                "giftMainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201901/43b4a0bb5a7c75276d57f24268432952.jpg",
                "giftName": "唐扬鱿鱼",         // 赠品名
                "giftNum": 2,
                "giftPno": "1949",          // 赠品品号
                "giftProductId": 6,         // 赠品id
                "giftProductunitId": 5,     // 赠品规格id
                "giftUnitName": "件",    // 赠品单位
                "marketId": 250,        // 活动ID
                "marketName": "满赠001",  // 活动名
                "productId": 1,   
                "productunitId": 2 
            }
        ]
    }  
    
    
### YX-25. 检查活动是否可用
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/market/canuse/check
#### 参数  
    {
        "activeId": 258,        // 活动id
        "couponId": 258,        // 优惠券id
        "rebateId": 258        // 返利券id
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "active": false,
            "coupon": true,
            "rebate": true
        }
    }

### YX-31. 查询广告位
#### 模块负责人
    王子悦
#### 请求
    GET /v2/market/advertisement
#### 参数    
    name                // 广告位名称
    type                // 广告位类型 BANNER 轮播位 ROWUP横上 ROWDOWN 横下 COLUMN 竖广告
    businesstypeId      // 关联业态id
    marketType          // 关联活动类型 COUPON领券 GIFT满赠 REDUCE满减 DISCOUNT满折 COLUMN专栏 SPECIAL专题
    marketStatus        // 关联活动状态 0 正常 1 作废
    deleteFlg           // 状态 0 正常 1 作废
    pageNo              // 页码
    pageSize            // 页条数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "businesstypeRange": "PART",//广告位关联业态范围 ALL 全部业态 PART 部分
                    "createRole": 1,
                    "createTime": "2019-03-22 13:37:19.0",//广告创建时间
                    "createUser": 518,
                    "createUsername": "孙启萌",//广告创建人
                    "deleteFlg": 0,
                    "id": 16,
                    "image": "http://beijing.aliyuncs.com/businesstype/w02.png",//广告图片
                    "market": {//广告位关联活动数据
                        "bannerPic": "",
                        "createTime": "2018-10-25 12:05:55",
                        "createUser": 232,
                        "createUserName": "赵江敏",
                        "customerRange": "ALL",
                        "deleteFlg": 0,//活动状态
                        "effectEtime": "2018-10-27 23:59:59",//活动结束日期
                        "effectStime": "2018-10-25 00:00:00",//活动开始日期
                        "id": 150,
                        "name": "10月25号-27号线上秒杀仅限3天",//活动名称
                        "overdue": 0,
                        "remark": "",
                        "type": "SPECIAL"//关联活动类型 COUPON领券 GIFT满赠 REDUCE满减 DISCOUNT满折 COLUMN专栏 SPECIAL专题
                    },
                    "marketId": 150,
                    "modifyTime": "2019-03-22 05:37:21.0",
                    "name": "测试广告位3",//广告名称
                    "productBusinessTypepArray": [//广告位关联业态数据集合
                        {
                            "code": "-16-",
                            "deleteFlg": 0,
                            "gIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/g02.png",
                            "hasProductCnt": 0,
                            "id": 16,
                            "level": 1,
                            "mIcon": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190304143700781-1981.png",
                            "miniFlg": 1,
                            "name": "西餐西快",
                            "parentId": 0,
                            "parentName": "",
                            "pyCode": "XCXK",
                            "sIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/s02.png",
                            "showFlg": 1,
                            "styleUrl": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190304143621318-3752.jpg",
                            "wIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/w02.png"
                        },
                        {
                            "code": "-22-",
                            "deleteFlg": 1,
                            "gIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/g03.png",
                            "hasProductCnt": 0,
                            "id": 22,
                            "level": 1,
                            "mIcon": "",
                            "miniFlg": 0,
                            "name": "日韩料理",
                            "parentId": 0,
                            "parentName": "",
                            "pyCode": "RILL",
                            "sIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/s03.png",
                            "showFlg": 1,
                            "styleUrl": "",
                            "wIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/w03.png"
                        }
                    ],
                    "type": "BANNER"//广告位类型 BANNER 轮播位 ROWUP横上 ROWDOWN 横下 COLUMN 竖广告
                }
            ],
            "pageNo": 1,
            "total": 1
        }
    }

### YX-32. 新增广告位
#### 模块负责人
    王子悦
#### 请求
    POST v2/market/advertisement
#### 参数    
    {
    "name":"测试广告位1",// 广告位名称
    "type":"BANNER",// 广告位类型 BANNER 轮播位 ROWUP横上 ROWDOWN 横下 COLUMN 竖广告
    "businesstypeRange":"PART", // 关联业态范围
    "rangeId":[16,22], // 关联业态id
    "image":"http://beijing.aliyuncs.com/businesstype/w02.png",//图片地址
    "marketId":"5"//关联活动id
    }
#### 响应
    {"code":100000,"msg":"","data":null}

### YX-33. 更新广告位
#### 模块负责人
    王子悦
#### 请求
    PUT v2/market/advertisement/{id}
#### 参数    
    {
    "name":"测试广告位1",// 广告位名称
    "type":"BANNER",// 广告位类型 BANNER 轮播位 ROWUP横上 ROWDOWN 横下 COLUMN 竖广告
    "businesstypeRange":"PART", // 关联业态范围
    "rangeId":[16,22], // 关联业态id
    "image":"http://beijing.aliyuncs.com/businesstype/w03.png",//图片地址
    "marketId":"5"//关联活动id
    }
#### 响应
    {"code":100000,"msg":"","data":null}

### YX-34. 删除广告位
#### 模块负责人
    王子悦
#### 请求
    DELETE v2/market/advertisement/{id}
#### 参数    
    id  //广告位id
#### 响应
    {"code":100000,"msg":"","data":null}   

### YX-35. 查询广告位操作日志
#### 模块负责人
    王子悦
#### 请求
    GET v2/market/advertisement/log/{id}
#### 参数    
    id  //广告位id
#### 响应
    {
    "code": 100000,
    "msg": "",
    "data": {
        "buttonPermissions": [],
        "dataSums": null,
        "datas": [
            {
                "advertisementId": 15,//广告id
                "id": 32,
                "opInfo": "删除广告位信息",//操作信息
                "opRole": 1,
                "opTime": "2019-03-23 11:18:58",//操作时间
                "opUser": 518,
                "opUsername": "孙启萌"//操作人
            },
            {
                "advertisementId": 15,
                "id": 2,
                "opInfo": "新增广告位信息",
                "opRole": 1,
                "opTime": "2019-03-22 13:37:18",
                "opUser": 518,
                "opUsername": "孙启萌"
            }
        ],
        "pageNo": 1,
        "total": 2
    }
    }
### YX-36. 广告位详情
#### 模块负责人
    王子悦
#### 请求
    GET v2/market/advertisement/{id}
#### 参数    
    id  //广告位id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "businesstypeRange": "PART",//广告位关联业态范围 ALL 全部业态 PART 部分
            "createRole": 1,
            "createTime": "2019-03-25 19:47:35",//创建时间
            "createUser": 518,
            "createUsername": "孙启萌",//创建人
            "deleteFlg": 0,
            "id": 59,
            "image": "http://beijing.aliyuncs.com/businesstype/w02.png",//广告图片
            "market": {//关联活动信息
                "bannerPic": "",
                "createTime": "2018-03-13 14:00:12",
                "createUser": 101,
                "createUserName": "樊嘉辉",
                "customerRange": "NEW",
                "deleteFlg": 0,
                "effectEtime": "2018-04-30 23:59:59",//结束时间
                "effectStime": "2018-03-01 00:00:00",//开始时间
                "id": 5,
                "name": "新用户满减活动",//活动名称
                "overdue": 0,
                "remark": "",
                "type": "COUPON"//关联活动类型 COUPON领券 GIFT满赠 REDUCE满减 DISCOUNT满折 COLUMN专栏 SPECIAL专题
            },
            "marketId": 5,//关联活动id
            "modifyTime": "2019-03-25 19:47:35",
            "name": "测试广告位1",//广告名称
            "productBusinessTypepArray": [//关联业态信息
                {
                    "code": "-16-",
                    "deleteFlg": 0,
                    "gIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/g02.png",
                    "hasProductCnt": 0,
                    "id": 16,
                    "level": 1,
                    "mIcon": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190325174758882-9387.png",
                    "miniFlg": 1,
                    "name": "西餐西快",
                    "parentId": 0,
                    "parentName": "",
                    "pyCode": "XCXK",
                    "sIcon": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190325174752832-7587.png",
                    "showFlg": 1,
                    "styleUrl": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190304143621318-3752.jpg",
                    "wIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/w02.png"
                }
            ],
            "type": "BANNER"// 广告位类型 BANNER 轮播位 ROWUP横上 ROWDOWN 横下 COLUMN 竖广告
        }
    }
