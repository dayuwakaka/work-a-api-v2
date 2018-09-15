## 营销管理
### YX-1. 新增营销

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
|marketBusinessunitRanges|事业部限制列表|
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
    	"marketBusinessunitRanges":[
    		{
    			"type":"businessunit", // businessunit
    			"rangeId":3, // 事业部id
    			"extra":"" // 传空即可
    		},
    		{
    			"type":"businessunit",
    			"rangeId":16,
    			"extra":""
    		}],
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
#### 2.1 请求URL
    /v2/market
#### 2.2 请求类型
    GET
#### 2.3 请求参数
|参数|名称|描述|
|---|---|---|
|name|营销名称|
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
#### 5.1 请求URL
    /v2/coupon/rules
    
#### 5.2 请求类型
    GET

#### 5.3 请求参数
|参数|名称|描述|
|---|---|---|
|name|券规名称|
|deleteFlg|状态|0 正常 1 作废|
|buttonPermissionFlg|按钮权限|0 不查询 1 查询|
|pageNo|页码|默认1|
|pageSize|页条数|默认25条|

#### 5.4 请求示例
    无

#### 5.5 返回值
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

##### buttonPermissions返回值
    返回的集合长度和数据集一样，取对应下标数据即可，true 显示；false 不显示
    deleteButton: 作废按钮,
    sendCouponRuleButton: 发送


#### 5.6 返回示例
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "deleteButton": true,
                    "sendCouponRuleButton": true
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

### YX-6.新增优惠券规则

#### 请求url
    /v2/coupon/rules

#### 请求类型
    POST

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*ruleType|满减类型|String|PRICE: 价格; COUNT: 数量
|*ranges|产品范围限制|String|ALL: 不限; PRODUCT: 指定产品
|*ruleValues|优惠券规则|Array|信息如下|
|*rangeValues|优惠券产品范围|Array|信息如下，产品范围限制为不限 则不传|
|*onlyCode|本次提交携带的唯一码|String|防止重复提交用

##### ruleValues信息
    [
        {
            targetValue: 120 (目标值，即满值，可以为两位小数) - Number,
            value: 20 (执行值，可以为两位小数) - Number
        },
        ...
    ]

##### rangeValues信息
    [
        {
            productId: 66651 (产品id) - Number,
            productunitId: 128989 (产品规格id) - Number,
            pno: "A081210",
            name: "扛枪保家卫国套餐",
            guige: "1人/次"
        },
        ...
    ]

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|修改成功/异常信息|
|data|数据|


### YX-7.获取优惠券规则对应的产品范围列表

#### 请求url
    /v2/coupon/rules/{id}/ranges

#### 请求类型
    GET
        
#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*id|优惠券规则id|Number||
|pageNo|页码|Number|default-value: 1|
|pageSize|页面容量|Number|default-value: 25|

#### 返回值
|参数|名称|类型|描述|
|---|---|---|---|
|pno|品号|String||
|name|产品名称|String||
|guige|产品规格|String||
|state|产品状态|String|normal 正常 custom 定制 lock 锁定|

### YX-8.作废优惠券规则

#### 请求url
    /v2/coupon/rules/{id}

#### 请求类型
    DELETE

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*id|优惠券规则id|Number

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|修改成功/异常信息|
|data|数据|

### YX-9.获取客户优惠券审核列表

#### 请求url
    /v2/coupon/customer_askfors

#### 请求类型
    GET

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|name|优惠券规则名称|String
|status|券规状态|Stirng|ASKFOR: 申请, PASS: 通过, REFUSE: 拒绝|
|pageNo|页码|Number|default-value: 1|
|pageSize|页面容量|Number|default-value: 25|
|buttonPermissionFlg|按钮权限|Number|0-查询按钮权限 1-不查询|

##### buttonPermissions返回值
    返回的集合长度和数据集一样，取对应下标数据即可，true 显示；false 不显示
    approvalButton: 审批按钮

#### 返回值
|参数|名称|类型|描述|
|---|---|---|---|
|id|客户优惠券申请id（即优惠券编号）|Number|
|customerName|客户名称|String|
|ruleName|优惠券名称|String|
|status|审核状态|String|ASKFOR: 申请; PASS: 通过; REFUSE: 拒绝|
|couponAmount|优惠券发放张数|Number|
|effectStime|优惠券开始时间|String|
|effectEtime|优惠券结束时间|String|
|createUserName|申请人|String|
|createTime|申请时间|String|

#### 请求示例
    /v2/coupon/customer_askfors?pageNo=1&pageSize=25&name=&status=

#### 返回值示例
    {
        code: 0,
        msg: "",
        data: {
            datas: [
                        {
                            ...
                        },
                        ...
                   ],
            buttonPermissions:[
                        {
                            approvalButton: false
                        },
                        ...
            ]
            total: 93330 (总条数) - Number,
            pageNo: 12 (对应的页码) - Number
        }
    }

### YX-10.审批客户优惠券申请

#### 请求url
    /v2/coupon/customer_askfors/{id}

#### 请求类型
    PUT

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*id|客户优惠券申请id|Number|
|*result|审核结果|Stirng|PASS: 通过, REFUSE: 拒绝|

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|修改成功/异常信息|
|data|数据|

### YX-11.批量审批客户优惠券申请

#### 请求url
    /v2/coupon/customer_askfors/batch

#### 请求类型
    PUT

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*ids|客户优惠券申请ids|String|以","相隔拼接而成的ids 例：1,2,3,4
|*result|审批结果|String|PASS: 通过; REFUSE: 拒绝|

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|修改成功/异常信息|
|data|数据|

### YX-12.批量新增客户优惠券申请（优惠券规则列表中的发券功能、客户功能模块中的发券功能）

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

### YX-13.获取客户优惠券列表

#### 请求url
    /v2/coupon/customers

#### 请求类型
    GET

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|name|优惠券名称|String|
|customerName|客户名称|String||
|sourceName|发放源|String|
|used|优惠券使用情况|String|YES: 已使用; NO: 未使用
|status|客户优惠券状态|String|NORMAL: 正常; LOCK: 锁定
|deleteFlg|客户优惠券状态|Number|0: 有效; 1: 无效
|pageNo|页码|Number|default-value: 1
|pageSize|页面容量|Number|default-value: 25
|buttonPermissionFlg|按钮权限|Number|0-查询按钮权限 1-不查询|

#### 返回值
##### datas返回值
|参数|名称|类型|描述|
|---|---|---|---|
|id|客户优惠券编号(即id)|Number|
|ruleName|优惠券名称|String|
|customerName|客户名称|String|
|sourceName|发放源|String|
|status|优惠券状态|String|NORMAL: 正常; LOCK: 锁定
|used|优惠券状态|String|YES: 已使用; NO: 未使用
|effectStime|优惠券开始时间|String|
|effectEtime|优惠券结束时间|String|
|createUserName|创建人|String|
|createTime|创建时间|String|
##### buttonPermissions返回值
    返回的集合长度和数据集一样，取对应下标数据即可，true 显示；false 不显示
    deleteButton: 作废按钮,
    lockButton：锁定按钮,
    unlockButton: 解锁按钮

#### 请求示例
    /v2/coupon/customers?name=&used=&status=&deleteFlg=&pageNo=&pageSize=

#### 返回值示例
    {
        code: 0,
        msg: "",
        data: {
            datas: [
                        {
                            ...
                        },
                        ...
            ],
            buttonPermissions:[
                        {
                            deleteButton: false,
                            lockButton: false,
                            unlockButton: false
                        },
                        ...
            ],
            total: 93330 (总条数) - Number,
            pageNo: 12 (对应的页码) - Number
        }
    }

### YX-14.客户优惠券作废

#### 请求url
    /v2/coupon/customers/{id}

#### 请求类型
    DELETE

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*id|客户优惠券id|Number

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|修改成功/异常信息|
|data|数据|

### YX-15.客户优惠券解锁或锁定

#### 请求url
    /v2/coupon/customers/{id}

#### 请求类型
    PUT

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*id|客户优惠券id|Number|
|*result|操作行为|String|NORMAL: 解锁; LOCK: 锁定|

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|修改成功/异常信息|
|data|数据|

### YX-16 领券活动详情
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
            "marketBusinessunitRanges": [
                {
                    "extra": "",
                    "id": 1,
                    "marketId": 1,
                    "rangeId": 1, // 事业部id
                    "type": "BUSINESSUNIT"
                },
                {
                    "extra": "",
                    "id": 2,
                    "marketId": 1,
                    "rangeId": 9,
                    "type": "BUSINESSUNIT"
                }
            ],
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
                    "actionValue": 2,
                    "extra": "4151:7380",
                    "id": 9,
                    "marketId": 6,
                    "targetValue": 100
                },
                {
                    "actionValue": 5,
                    "extra": "4151:7380",
                    "id": 10,
                    "marketId": 6,
                    "targetValue": 200
                }
            ],
            "marketBusinessunitRanges": [
                {
                    "extra": "",
                    "id": 19,
                    "marketId": 6,
                    "rangeId": 3,
                    "type": "BUSINESSUNIT"
                },
                {
                    "extra": "",
                    "id": 20,
                    "marketId": 6,
                    "rangeId": 16,
                    "type": "BUSINESSUNIT"
                }
            ],
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
                    "rangeId": 7383, // 产品ID
                    "type": "PRODUCTUNIT"
                },
                {
                    "extra": "",
                    "id": 22,
                    "marketId": 6,
                    "rangeId": 7382,
                    "type": "PRODUCTUNIT"
                }
            ],
            "name": "满赠活动名称",
            "overdue": 0,
            "type": "GIFT"
        }
    }




### YX-18 专栏活动详情
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
            "marketBusinessunitRanges": [
                {
                    "extra": "",
                    "id": 23,
                    "marketId": 7,
                    "rangeId": 3, // 事业部id
                    "type": "BUSINESSUNIT"
                },
                {
                    "extra": "",
                    "id": 24,
                    "marketId": 7,
                    "rangeId": 16,
                    "type": "BUSINESSUNIT"
                }
            ],
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
            "marketBusinessunitRanges": [
                {
                    "extra": "",
                    "id": 27,
                    "marketId": 8,
                    "rangeId": 3, // 事业部id
                    "type": "BUSINESSUNIT"
                },
                {
                    "extra": "",
                    "id": 28,
                    "marketId": 8,
                    "rangeId": 16,
                    "type": "BUSINESSUNIT"
                }
            ],
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

