## app v5 接口

### APP-1 获取客户信息
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/customer
#### 参数
    *customerId: 0 // 客户ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "accountId": "",  // 帐号ID
            "accountMobile": "", // 帐号手机号
            "accountState": "", // 帐号状态 NORMAL
            "action": "action",
            "area": "沙河口区",
            "areapathid": "060203",
            "authenNo": 0, // 认证号
            "authenState": "PASS", // 认证状态
            "authenTime": "2018-08-23 11:32:51", // 认证时间
            "authenType": "",
            "businessType": 38, // 餐饮业态ID
            "businessTypeCode": "06", // 餐饮业态Code
            "businessTypeName": "推荐", // 餐饮业态名称
            "businessunit": 1, // 事业部ID
            "businessunitGroupId": 3, // 事业部组ID
            "businessunitGroupName": "PW事业组", // 事业部组名
            "businessunitName": "PW", // 事业部名
            "city": "大连市", 
            "companyName": "dddd", // 公司名
            "contactId": 1, // 默认联系方式ID
            "contactMobile": "18842889150", // 默认联系方式手机号
            "contactName": "222", // 默认联系人
            "contactPathid": "", 
            "createRole": 5035, // 创建角色ID
            "createRoleName": "ASAV-陈明", // 创建角色
            "createTime": "2011-06-09 10:20:12", // 创建时间
            "createUser": 0, // 创建人
            "customer2Attrs": null,
            "customerAccount": null,
            "customerBalance": { // 客户余额
                "balance": 0, // 余额
                "freeze": 0, // 冻结
                "id": 0, 
                "prepaid": 0 // 订金
            },
            "customerContacts": [ // 客户联系方式
                { 
                    "address": "3333", // 客户
                    "area": "北京市",
                    "areapathid": "0101",
                    "city": "北京市",
                    "createRole": 5035,
                    "createTime": "2011-06-09 10:20:12.0",
                    "createUser": 0,
                    "customerId": 149,
                    "id": 1,
                    "isDefault": 1,
                    "lastModified": "2018-09-06 18:00:34.0",
                    "mobile": "18842889150",
                    "name": "222",
                    "province": "北京",
                    "remarks": ""
                }
            ],
            "defaultCustomerContact":{
                "address": "3333", // 客户
                "area": "北京市",
                "areapathid": "0101",
                "city": "北京市",
                "createRole": 5035,
                "createTime": "2011-06-09 10:20:12.0",
                "createUser": 0,
                "customerId": 149,
                "id": 1,
                "isDefault": 1,
                "lastModified": "2018-09-06 18:00:34.0",
                "mobile": "18842889150",
                "name": "222",
                "province": "北京",
                "remarks": ""
            },
            "dod": 1,
            "freight": 1,
            "id": 149,
            "isParent": 0,
            "newFlg": 0,
            "parentId": 0,
            "parentName": "",
            "printPrice": 0,
            "province": "辽宁",
            "receiverUser": 0,
            "shortName": "149",
            "source": 1,
            "srRoleId": 40,
            "srRoleName": "高成举-SRM-T",
            "ssRoleId": 2196,
            "ssRoleName": "解冰",
            "state": "NORMAL",
            "type": "A"
        }
    }

### APP-2 餐饮业态信息
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/product/businessType
#### 参数
    *parentId: 0 // 分类父ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
                {
                    "code": "0201", // 餐饮业态Code
                    "deleteFlg": 0, 
                    "id": 17, // 餐饮业态ID
                    "image": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/0201.png", // 餐饮业态图片
                    "level": 2, // 餐饮业态等级
                    "name": "汉堡店", // 餐饮业态名
                    "parentId": 16, // 餐饮业态父ID
                    "pyCode": "HBD", // 餐饮业态拼音
                    "sImage": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/s0201.png", // 餐饮业态选中图
                    "sort": 0, // 排序
                    "wImage": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/g0201.png" // 餐饮业态白图
                }
            ]
    }

### APP-3 更新客户餐饮业态
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    PUT /router/v5/customer/modifyBusinessType/{customerId}
#### 参数
    *customerId:0 // 客户ID
    jsonBody{
        *businessTypeId:0 // 餐饮业态ID
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### APP-4 获取联系方式
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/customer/contact
#### 参数
    *customerId: 0 //客户ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "address": "555", // 地址
                "area": "上城区", // 县
                "areapathid": "110101", // 地区Pathid
                "city": "杭州市", // 市
                "createRole": 326, // 创建角色
                "createTime": "2018-09-19 16:06:59.0", // 创建时间
                "createUser": 1, // 创建人ID
                "customerId": 32250, // 客户ID
                "id": 50769, // 联系方式ID
                "isDefault": 1, // 是否默认
                "isdefault": 1, // 不要用！！！！不要用！！！！不要用！！！！
                "lastModified": "2018-09-20 09:28:51.0",
                "mobile": "18842889150", // 手机号
                "name": "555", // 客户名
                "province": "浙江", // 省份
                "remarks": "555" // 备注
            }
        ]
    }

### APP-5 修改联系方式
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    PUT /router/v5/customer/contact/{id}
#### 参数
    *id: 0 // 联系方式ID
    body json
    {
	    *"name":"777", // 联系人
	    *"mobile":"18842889150", // 联系方式
	    *"areapathid":"010101", // 区域Pathid
	    *"address":"3333", // 地址
	    *"remark":"xxxx", // 备注
	    *"isDefault":1 // 是否默认，注意驼峰，一定要跟大写的D
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### APP-6 删除联系方式
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    DELETE /router/v5/customer/contact/{id}
#### 参数
    *id: 0 // 联系方式ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### APP-7 新增联系方式
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    POST /router/v5/customer/contact
#### 参数
    {
	    *"customerId":32250,
	    *"name":"111",
	    *"mobile":"18842889150",
	    *"areapathid":"0101",
	    *"address":"111",
	    *"remark":"1111",
	    *"isDefault":1
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### APP-8 修改密码
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    PUT /router/v5/customer/password/reset/{customerId}
#### 参数
    *customerId:0 //客户ID
    json body
    {
        *password: "xxx", // 新密码
        *oldPassword: "xxxx" // 旧密码
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### APP-9 获取初始化信息
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/auth/initInfo
#### 参数
#### 响应
    {
        "flg": "1",
        "code": "100000",
        "msg": "",
        "data": {
            "delOrderSecond": 10800, // 删除订单时间间隔
            "rechargeTag": 0, // 充值口 0 不打开， 1 打开
            "serverTime": 0, // 订单默认 sendtime 服务器时间 + 1天
            "businesstype": 16 //  // 默认餐饮业态  16 西餐西快
        }
    }

### APP-10 登录
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/auth/appLogin
#### 参数
    *loginName:"as032250" //登录名
    *password:"222222" // 登录密码
    *ipAddress:"0.0.0.0" // 登录IP
    *cartId:"1" //登录设备号
#### 响应
    {
        "flg": "1",
        "code": "100000",
        "msg": "",
        "data": {
            "customerId": 32250, // 客户ID
            "customer_id": 32250, // 不要用！不要用！不要用！
            "token":  "eyJhbGciOiJIUzUxMiJ9.eyJ1aWQiOiIzMjkyMyIsImdpZCI6Ii0xIiwicmlkcyI6Ii0xIiwiY3JlYXRlX3RpbWUiOiIyMDE4LTA5LTIwIDE1OjE2OjExIiwicGlkIjoiMSIsInJpZCI6Ii0xIn0.SQgLPdxNV8UxSa-pmJBpfn1InJxDLqDcwHgWdCo_LJfyjauBiiSNmpWcAJSJv7yVuJV7qRR8eqt8mtIQ-DpSAA" // token
        }
    }

### APP-11 获取验证码
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/auth/getVerifyCode
#### 参数
    *loginName: "xxx" //登录名
    *verifyType: "sms" // 验证方式 sms 短信 voice 语音
#### 响应
    {
        "flg": "1",
        "code": "100000",
        "msg": "",
        "data": "28000e5145cf4bca876fb6d9d0f323a3" // 消息ID
    }

### APP-12 重置密码
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    PUT /router/v5/auth/resetPwd
#### 参数
    json body
    {
        *loginName:"xxx", // 登录名
        *password:"xxx", // 密码
        *code:"xxx" // 验证码
    }
#### 响应
    {
        "flg": "1",
        "code": "100000",
        "msg": "",
        "data": null
    }

### APP-13 获取匿名Token
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/auth/anonymous
#### 参数
#### 响应
    {
        "flg": "1",
        "code": "100000",
        "msg": "",
        "data": "eyJhbGciOiJIUzUxMiJ9.eyJ1aWQiOiIwIiwiZ2lkIjoiMCIsInJpZHMiOiIwIiwiY3JlYXRlX3RpbWUiOiIyMDE4LTA5LTIwIDE1OjU4OjA4IiwicGlkIjoiMSIsInJpZCI6IjAifQ.gZojhubUvT9w16ATTh4d72yiw_5RXi02LmjygdL-Ue4nEgMDkoI1X3zOs5qKMlqqY-3Wsz902e66d8kNkMxTJA" // 匿名token
    }

### APP-14 一键领取优惠券
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    POST /router/v5/market/coupon/receive
#### 参数
    body json{
        *customerId: 0 // 客户ID
        *marketId: 0 // 营销ID
    }
#### 响应
    {
        "flg": "1",
        "code": "100000",
        "msg": "",
        "data": null
    }

### APP-15 轮播图
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/market/banner
#### 参数
    customerId: 0 //客户ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "accumulative": "",
                "activeConditionId": 0,
                "bannerPic": "http://asae.oss-cn-beijing.aliyuncs.com/20180920160218040-2.jpg", // 轮播图
                "couponConditionId": 0, 
                "effectEtime": "",
                "effectStime": "",
                "hasBusinessunitRange": 0,
                "hasProductunitRange": 0,
                "id": 16,
                "limitNum": 0,
                "name": "",
                "popupPic": "",
                "productunitIds": [ // 产品规格Ids，数组列表
                    1,2,3
                ], 
                "type": "GIFT", // 类型 GIFT 买立增 COUPON 发券 REDUCE 买立减 DISCOUNT 买立折 COLUMN 专栏 SPECIAL 专题
                "unit": ""，
                "detailPic": [
                    {
                        id: 0 // 图片ID，
                        marketId: 0 // 营销ID，
                        type: "DETAIL"，
                        position: "NOLIMIT" //'NOLIMIT' 无限制, 'TOP' 顶部, 'MIDDLE' 中间, 'BOTTOM' 下面，
                        picUrl: "xxx" //图片地址
                    }
                ]
            }
        ]
    }

### APP-16 弹屏图
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/market/popup
#### 参数
    customerId: 0 //客户ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "accumulative": "",
            "activeConditionId": 0,
            "bannerPic": "",
            "couponConditionId": 0,
            "effectEtime": "",
            "effectStime": "",
            "hasBusinessunitRange": 0,
            "hasProductunitRange": 0,
            "id": 27,
            "limitNum": 0,
            "name": "",
            "popupPic": "http://asae.oss-cn-beijing.aliyuncs.com/20180920162510140-2.jpg", // 弹屏图
            "productunitIds": [ // 产品规格Ids，数组列表
                1,2,3
            ], 
            "type": "COUPON", // 类型 GIFT 买立增 COUPON 发券 REDUCE 买立减 DISCOUNT 买立折 COLUMN 专栏 SPECIAL 专题
            "unit": ""
            "detailPic": [
                {
                    id: 0 // 图片ID，
                    marketId: 0 // 营销ID，
                    type: "DETAIL"，
                    position: "NOLIMIT" //'NOLIMIT' 无限制, 'TOP' 顶部, 'MIDDLE' 中间, 'BOTTOM' 下面，
                    picUrl: "xxx" //图片地址
                }
            ]
        }
    }

### APP-18 获取客户账户
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/auth/account
#### 参数
    mobile: "18842889150" // 手机号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "companyName": "555", // 公司名
                "mobile": "18842889150", // 手机号
                "username": "as032250" // 用户帐号
            }
        ]
    }

### APP-19 获取客户订单数量
#### 对接负责人
    刘宏宇
#### 模块负责人
    梁铁骑
#### 请求
    GET /router/v5/order/total
#### 参数
    *customerId: 0 //客户ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": 1 // 订单数量
    }

### APP-20 获取我的优惠券数量
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/market/coupon/my/total
#### 参数
    *customerId: 0 //客户ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": 9 // 优惠券数量
    }

### APP-21 我的优惠券（可用）
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/market/coupon/my/valid
#### 参数
    *customerId: 0 //客户ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "effectEtime": "2018-10-31 23:59:59", // 开始时间
                "effectStime": "2018-09-31 23:58:57", // 结束时间
                "id": 22124, // 优惠券ID
                "name": "展会活动", // 优惠券名
                "rebate": 0, // 折扣

                "rangType": "ALL" // 产品范围类型 ALL 全部 PRODUCTUNIT 指定产品 EXCLUDE 排除产品
                "rangs": [1,2,3] // List列表，存入的是产品规格ID（productunitId）

                "accumulative": "EACH" // 累计方式： EACH 每满， LADDER 阶梯。若不是满减、满增，将为NULL
                "type": "COUPON", // 类型 COUPON 优惠券 ACTIVE 活动 REBATE 返利
                "unit": "PRICE", // 执行单位 PRICE 满额 COUNT 满数量
                "way": "REDUCE"， // 执行方式 REDUCE 满减 DISCOUNT 满折

                "hitGiveConditionId": 0, // 命中的给与条件
                "giveCondition": { // 给与条件
                    "0": {
                        "actionValue": 50, // 执行额
                        "extra": "",
                        "guige": "", // 若是满赠，则会携带规格名
                        "id": 0,
                        "marketId": 0,
                        "productName": "", // 若是满赠，则会携带产品名
                        "targetValue": 1000 // 满足额
                    }
                },
                
                "giftNum": 0, // 若是满增，赠品数量
                "productId": 0, // 若是满增，赠品产品ID
                "productName": "", // 若满增，赠品产品名
                "productUnitId": 0, // 若满增，赠品产品规格ID
                "guige": "",  // 若是满增，赠品规格

                "used": "YES" // 使用状态 YES 已用 NO 未使用
            }
        ]
    }

### APP-22 我的优惠券（过期）
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/market/coupon/my/invalid
#### 参数
    *customerId:0 // 客户ID
#### 响应
    同APP-21

### APP-23 订单获取优惠券
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/market/getCanUse/{customerId}
#### 参数
    *customerId: 0 // 客户ID
    body json  // **注意不要提交赠品信息
    [
        {
            productId: 0 // 产品ID
            productunitId: 0 // 产品规格ID
            price: 0 // 价格 浮点数
            count: 0 // 购买数量
        }
    ]
#### 响应
    同APP-21
    
### 模版
#### 请求
#### 参数
#### 响应
