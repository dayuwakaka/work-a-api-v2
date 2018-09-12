## 营销管理

@(Markdown)


### YX-1. 新增营销

#### 请求url
    /v2/promo

#### 请求类型
    POST

#### 1.1新增【满折】促销活动
|参数|名称|类型|描述|
|---|---|---|---|
|name|营销名称|String|
|bannerPic|banner图url|String|
|type|营销类别|String|COUPON:领券, GIFT: 满赠, REDUCE: 满减, DISCOUNT: 满折, COLUMN: 专栏, SPECIAL: 专题
|businessunitRangeType|事业部范围类别|String|ALL: 全部事业部; PART: 部分事业部
|customerRangeType|客户范围类别|String|ALL: 所有; NEW: 新用户
|effectStime|开始时间|String|日期是客户所选，时间是固定在后面加00:00:00|
|effectEtime|结束时间|String|日期是客户所选，时间是固定在后面加23:59:59|
|ruleType|规则类别|String|PRICE: 价格; COUNT: 数量
|promoActiveGiveRules|活动规则|Array|[{<br/>targetValue: 目标值(Number 可以为两位小数)<br/>actionValue: 执行值(Number) 0.1 ~ 9.9<br/>}<br>...<br/>]
|promoActiveProductRanges|活动产品范围|Array|[{<br/>productId: 产品id(Number)<br/>productunitId: 产品规格id(Number)<br/>name: 产品名称(String)<br/>pno: 品号(String)<br/>guige: 产品规格(String)<br/>}<br>...<br/>]
|promoRanges|事业部范围|Array|[{<br/>businessunitId: 事业部id(Number)<br/>extInfo: 事业部名称(String)<br/>}<br>...<br/>]
|onlyCode|本次提交携带的唯一码|String|防止重复提交用

    以上所有字段均为必填

#### 1.2新增【满减】促销活动
|参数|名称|类型|描述|
|---|---|---|---|
|name|营销名称|String|
|bannerPic|banner图url|String|
|type|营销类别|String|COUPON:领券, GIFT: 满赠, REDUCE: 满减, DISCOUNT: 满折, COLUMN: 专栏, SPECIAL: 专题
|businessunitRangeType|事业部范围类别|String|ALL: 全部事业部; PART: 部分事业部
|customerRangeType|客户范围类别|String|ALL: 所有; NEW: 新用户
|effectStime|开始时间|String|日期是客户所选，时间是固定在后面加00:00:00|
|effectEtime|结束时间|String|日期是客户所选，时间是固定在后面加23:59:59|
|ruleType|规则类别|String|PRICE: 价格; COUNT: 数量
|giveType|满减类别|String|LADDER:阶梯, FULL: 每满|
|promoActiveGiveRules|活动规则|Array|[{<br/>targetValue: 目标值(Number 可以为两位小数)<br/>actionValue: 执行值(Number 正整数)<br/>}<br>...<br/>]
|promoActiveProductRanges|活动产品范围|Array|[{<br/>productId: 产品id(Number)<br/>productunitId: 产品规格id(Number)<br/>name: 产品名称(String)<br/>pno: 品号(String)<br/>guige: 产品规格(String)<br/>}<br>...<br/>]
|promoRanges|事业部范围|Array|[{<br/>businessunitId: 事业部id(Number)<br/>extInfo: 事业部名称(String)<br/>}<br>...<br/>]
|onlyCode|本次提交携带的唯一码|String|防止重复提交用

    以上所有字段均为必填

#### 1.3新增【满赠】促销活动
|参数|名称|类型|描述|
|---|---|---|---|
|name|营销名称|String|
|bannerPic|banner图url|String|
|type|营销类别|String|COUPON:领券, GIFT: 满赠, REDUCE: 满减, DISCOUNT: 满折, COLUMN: 专栏, SPECIAL: 专题
|businessunitRangeType|事业部范围类别|String|ALL: 全部事业部; PART: 部分事业部
|customerRangeType|客户范围类别|String|ALL: 所有; NEW: 新用户
|effectStime|开始时间|String|日期是客户所选，时间是固定在后面加00:00:00|
|effectEtime|结束时间|String|日期是客户所选，时间是固定在后面加23:59:59|
|ruleType|规则类别|String|PRICE: 价格; COUNT: 数量
|giveType|满减类别|String|LADDER:阶梯, FULL: 每满|
|promoActiveGiveRules|活动规则|Array|[{<br/>targetValue: 目标值(Number)<br/>actionValue: 赠品productunit_id(Number)<br/>actionName: 产品名称(Stirng)<br/>actionNum: 赠品数量(Number，正整数)<br/>guige: 赠品规格(String)<br/>}<br>...<br/>]
|promoActiveProductRanges|活动产品范围|Array|[{<br/>productId: 产品id(Number)<br/>productunitId: 产品规格id(Number)<br/>name: 产品名称(String)<br/>pno: 品号(String)<br/>guige: 产品规格(String)<br/>}<br>...<br/>]
|promoRanges|事业部范围|Array|[{<br/>businessunitId: 事业部id(Number)<br/>extInfo: 事业部名称(String)<br/>}<br>...<br/>]
|onlyCode|本次提交携带的唯一码|String|防止重复提交用

    以上所有字段均为必填

#### 1.4新增【专栏】促销活动
|参数|名称|类型|描述|
|---|---|---|---|
|name|营销名称|String|
|bannerPic|banner图url|String|
|type|营销类别|String|COUPON:领券, GIFT: 满赠, REDUCE: 满减, DISCOUNT: 满折, COLUMN: 专栏, SPECIAL: 专题
|businessunitRangeType|事业部范围类别|String|ALL: 全部事业部; PART: 部分事业部
|customerRangeType|客户范围类别|String|ALL: 所有; NEW: 新用户
|effectStime|开始时间|String|日期是客户所选，时间是固定在后面加00:00:00|
|effectEtime|结束时间|String|日期是客户所选，时间是固定在后面加23:59:59|
|promoActiveProductRanges|活动产品范围|Array|[{<br/>productId: 产品id(Number)<br/>productunitId: 产品规格id(Number)<br/>name: 产品名称(String)<br/>pno: 品号(String)<br/>guige: 产品规格(String)<br/>}<br>...<br/>]
|promoRanges|事业部范围|Array|[{<br/>businessunitId: 事业部id(Number)<br/>extInfo: 事业部名称(String)<br/>}<br>...<br/>]
|onlyCode|本次提交携带的唯一码|String|防止重复提交用

    以上所有字段均为必填

#### 1.5新增【专题】促销活动
|参数|名称|类型|描述|
|---|---|---|---|
|name|营销名称|String|
|bannerPic|banner图url|String|
|type|营销类别|String|COUPON:领券, GIFT: 满赠, REDUCE: 满减, DISCOUNT: 满折, COLUMN: 专栏, SPECIAL: 专题
|businessunitRangeType|事业部范围类别|String|ALL: 全部事业部; PART: 部分事业部
|customerRangeType|客户范围类别|String|ALL: 所有; NEW: 新用户
|effectStime|开始时间|String|日期是客户所选，时间是固定在后面加00:00:00|
|effectEtime|结束时间|String|日期是客户所选，时间是固定在后面加23:59:59|
|promoImages|图片url|Array|[{<br/>imageUrl: 图片url(String)<br/>}<br>...<br/>]
|promoRanges|事业部范围|Array|[{<br/>businessunitId: 事业部id(Number)<br/>extInfo: 事业部名称(String)<br/>}<br>...<br/>]
|onlyCode|本次提交携带的唯一码|String|防止重复提交用

    以上所有字段均为必填

#### 1.6新增【领券】促销活动
|参数|名称|类型|描述|
|---|---|---|---|
|name|营销名称|String|
|bannerPic|banner图url|String|
|popPic|弹屏图url|String|非必填|
|type|营销类别|String|COUPON:领券, GIFT: 满赠, REDUCE: 满减, DISCOUNT: 满折, COLUMN: 专栏, SPECIAL: 专题
|businessunitRangeType|事业部范围类别|String|ALL: 全部事业部; PART: 部分事业部
|customerRangeType|客户范围类别|String|ALL: 所有; NEW: 新用户
|effectStime|开始时间|String|日期是客户所选，时间是固定在后面加00:00:00|
|effectEtime|结束时间|String|日期是客户所选，时间是固定在后面加23:59:59|
|receiveNumber|领取限制|Number|1: 领取一次; 0: 用完再领
|promoImages|图片url|Array|[{<br/>imageUrl: 图片url(String)<br/>}<br>...<br/>]
|promoCouponRules|优惠券领取信息|Array|[{<br/>couponRuleId: 优惠券规则id(Number)<br/>couponRuleName: 优惠券规则名称(String)<br/>num: 领取数量(Number)<br/>effectStime: 优惠券起始时间(String) - 日期是客户所选，时间是固定在后面加00:00:00<br/>effectEtime: 优惠券结束时间(String) - 日期是客户所选，时间是固定在后面加23:59:59<br/>}<br>...<br/>]|
|promoRanges|事业部范围|Array|[{<br/>businessunitId: 事业部id(Number)<br/>extInfo: 事业部名称(String)<br/>}<br>...<br/>]
|onlyCode|本次提交携带的唯一码|String|防止重复提交用

    以上除popPic外，所有字段均为必填

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|新增成功/异常信息|
|data|||

### YX-2.获取营销列表

#### 请求url
    /v2/promo

#### 请求类型
    GET

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|name|营销名称|String|
|pageNo|当前页|Number|default-value: 1|
|pageSize|页面容量|Number|default-value: 25|
|buttonPermissionFlg|按钮权限|Number|0-查询按钮权限 1-不查询|

#### 返回值
##### datas返回值
|参数|名称|类型|描述|
|---|---|---|---|
|id|营销id|Number|
|name|营销名称|String|
|type|营销类别|String|COUPON:领券, GIFT: 满赠, REDUCE: 满减, DISCOUNT: 满折, COLUMN: 专栏, SPECIAL: 专题
|bannerPic|banner图url|String|
|deleteFlg|营销删除标识符|Number|
|effectStime|营销开始时间|String|
|effectEtime|营销结束时间|String|
|createUserName|创建人名称|Stirng|
|createTime|创建时间|String|

##### buttonPermissions返回值
    返回的集合长度和数据集一样，取对应下标数据即可，true 显示；false 不显示
    deleteButton: 作废按钮

#### 请求示例
    /v2/promo?pageNo=1&pageSize=25&status=&name=

#### 返回示例
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
                            deleteButton: false
                        },
                        ...
            ],
            total: 1200 (总条数) - Number,
            pageNo: 6 (对应的页码) - Number
        }
    }

### YX-3.获取营销详情

#### 说明
    根据营销类别的不同返回值也不同，实在太多了，直接调用接口查看各类别对应的返回体结构，但是返回体内的数据在下面文档有说明，请参照

#### 请求url
    /v2/promo/{id}

#### 请求类型
    GET

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*id|营销id|Number

#### 返回值
|参数|名称|类型|描述|
|---|---|---|---|
|baseInfo|营销基本信息|Object|信息如下|
|ext|营销扩展信息|Array|信息如下|
|ranges|营销范围|Array|信息如下|
|rules|营销规则|Array|信息如下|
|products|营销产品范围|Array|信息如下|

##### baseInfo 信息
    {
        bannerPic: "http://omgzp8h38.bkt.clouddn.com/Fk3FI4W_KrdrTndQ7UPmnoddScln" (banner图url),
        businessunitRangeType: "ALL" (事业部范围类别 ALL: 全部; PART: 部分事业部),
        createTime: "2018-08-14 15:27:54" (创建时间),
        createUserName: "" (创建人名称),
        customerRangeType: "ALL" (客户范围类别 ALL: 全部; NEW: 新用户),
        deleteFlg: 0 (0: 有效; 1: 无效),
        effectEtime: "2018-08-29 23:59:59" (营销结束时间),
        effectStime: "2018-08-09 00:00:00" (营销开始时间),
        id: 1 (营销id),
        name: "满折活动大优惠，你，怕了吗" (营销名称),
        type: "discount" (营销类别 coupon:领券, gift: 满赠, reduce: 满减, discount: 满折, column: 专栏, special: 专题)
    }

##### ext 信息
    [
        {
            giveType: "ladder" (类别: ladder: 阶梯, full: 每满), 
            ruleType: "price" (条件：price: 按价格, count: 按数量)
        },
        ...
    ]

##### ranges 信息
    [
        {
            businessunitId: 1 (事业部id)
            extInfo: "AN事业部" (事业部名称)
        },
        ...
    ]

##### rules 信息
    [
        {
            actionName: "" (满赠则为赠品名， 其余活动类别用不到此字段，可忽略),
            actionNum: 0 (执行数量 满赠则为赠品数量，其余活动用不到此字段，可忽略),
            actionValue: 9.5 (执行值 活动类别为满减，则该值为减金额；满赠则为产品productunit_id；满折则为 折扣比例),
            guige: "" (满赠则为赠品规格，其余活动类别用不到此字段，可忽略),
            promoId: 1,
            targetValue: 100 (目标值，可理解为 “满 1000 减 10” 这里面的 1000 )
        },
        ...
    ]

##### products 信息
    [
        {
            guige: "720g*12袋",
            name: "海苔贝柱",
            pno: "0204",
            productId: 5,
            productunitId: 14
        },
        ...
    ]

##### coupon 信息
    {
        "popPic": "http://omgzp8h38.bkt.clouddn.com/FjIlqIf_XeVSDpR9oV8EDZhmRhKQ" (弹屏图片url),
        "receiveNumber": 1 (1-仅领一次, 0-用完再领)
    }

##### images 信息
    [
        {
            "imageUrl": "http://omgzp8h38.bkt.clouddn.com/Fk3FI4W_KrdrTndQ7UPmnoddScln" (图片url)
        },
        ...
    ]

##### rules 信息
    [
        {
            "couponRuleName": "小饺丫（荠菜鱿鱼饺）优惠券" (优惠券名称),
            "effectEtime": "2018-08-29 23:59:59" (优惠券有效期结束时间),
            "effectStime": "2018-08-09 00:00:00" (优惠券有效期开始时间),
            "num": 3 (发放数量),
        },
        ...
    ]


#### 请求示例
    /v2/promo?pageNo=1&pageSize=25&status=&name=

#### 返回示例
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
            total: 1200 (总条数) - Number,
            pageNo: 6 (对应的页码) - Number
        }
    }

### YX-4.作废营销

#### 请求url
    /v2/promo

#### 请求类型
    PUT

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*id|营销id|Number

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|修改成功/异常信息|
|data|数据|

### YX-5.获取优惠券规则列表

#### 请求url
    /v2/coupon/rules

#### 请求类型
    GET

#### 请求参数
|参数|名称|类型描述|
|---|---|---|---|
|name|优惠券规则名称|String
|deleteFlg|券规状态|Number|0: 有效; 1: 无效|
|buttonPermissionFlg|按钮权限|Number|0-查询按钮权限 1-不查询|

#### 返回值
##### datas返回值
|参数|名称|类型|描述|
|---|---|---|---|
|id|优惠券规则id|Number|
|name|券规名称|String|
|deleteFlg|删除标识（状态）|Number|0: 有效; 1: 无效|
|createUserName|创建人名称|String|
|createTime|创建时间|String|
|targetValue|目标值|Number|即满值|
|actionValue|执行值|Number|即减值|

##### buttonPermissions返回值
    返回的集合长度和数据集一样，取对应下标数据即可，true 显示；false 不显示
    deleteButton: 作废按钮,
    sendCouponRuleButton: 发送

#### 请求示例
    /v2/coupon/rules?name=&deleteFlg=

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
                            sendCouponRuleButton: false
                        },
                        ...
            ],
            total: 618 (总条数) - Number,
            pageNo: 6 (对应页码) - Number
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
|*ruleType|优惠券规则类别|String|PRICE: 价格; COUNT: 数量
|*ranges|优惠券产品范围|String|ALL: 不限; PRODUCT: 指定产品
|*material|是否包含原料品|Number|0: 不包含; 1: 包含|
|*ruleValues|优惠券规则|Array|信息如下|
|*rangeValues|优惠券产品范围|Array|信息如下|
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
|id|客户优惠券申请id|Number|
|customerName|客户名称|String|
|ruleName|优惠券规则名称|String|
|status|申请状态|String|ASKFOR: 申请; PASS: 通过; REFUSE: 拒绝|
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
|name|客户名、优惠券规则名称|String
|used|优惠券使用状态|String|YES: 已使用; NO: 未使用
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
|ruleName|优惠券规则名称|String|
|customerName|客户名称|String|
|pageName|发放源(营销名称)|String|
|status|客户优惠券状态|String|NORMAL: 正常; LOCK: 锁定
|used|客户优惠券状态|String|YES: 已使用; NO: 未使用
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