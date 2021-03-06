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
                "prepaid": 0 // 定金
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

### APP-2 产品分类
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/product/businessType
#### 参数
    parentId    // 上级分类ID，非必须，不传则获取全部分类，按照sort降序排列
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
                    "wImage": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/g0201.png", // 餐饮业态白图
                    "styleUrl": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190304143621318-3752.jpg" // 风格图标
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
    encryptFlg: 1       // 0 非加密密码登录  1 加密密码登录     默认0
#### 响应
    {
        "code": "100000",
        "msg": "",
        "data": {
            "customerId": 32250, // 客户ID
            "customer_id": 32250, // 不要用！不要用！不要用！
            "token":  "eyJhbGciOiJIUzUxMiJ9.eyJ1aWQiOiIzMjkyMyIsImdpZCI6Ii0xIiwicmlkcyI6Ii0xIiwiY3JlYXRlX3RpbWUiOiIyMDE4LTA5LTIwIDE1OjE2OjExIiwicGlkIjoiMSIsInJpZCI6Ii0xIn0.SQgLPdxNV8UxSa-pmJBpfn1InJxDLqDcwHgWdCo_LJfyjauBiiSNmpWcAJSJv7yVuJV7qRR8eqt8mtIQ-DpSAA" // token
            "superPwd": true        // 是否使用的超级密码登录
        }
    }

### APP-11 获取验证码
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/auth/getVerifyCode
#### 参数
    *loginName: "xxx" //登录名
    verifyType: "sms" // 验证方式 sms 短信 voice 语音
#### 响应
    {
        "code": "100000",
        "msg": "",
        "data": null
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
                "customerId": 149,      // 客户ID
                "mobile": "18842889150", // 手机号
                "username": "as032250" // 用户帐号
            }
        ]
    }

### APP-19 获取客户订单数量
#### 对接负责人
    刘宏宇
#### 模块负责人
    梁铁骐
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

### APP-21 我的可用优惠券
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

### APP-22 我的过期优惠券
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
    
### APP-23 订单发票
#### 对接负责人
    刘宏宇
#### 模块负责人
    刘宏宇
#### 请求
    GET /router/v5/invoice
#### 参数
    *orderId: "SA181009055865" // 订单ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                id: 12,
                invoiceNo: "xxxx", // 发票号，若为空，则显示 -
                totalPrice: 12.1, //订单总价
                action: "WAIT" // 发票状态： WAIT 等待开票 MAKING 开票中 DONE 开票完成 ERROR 开票失败 BLUE_FAILED 重开失败
            }
        ]
    }

### APP-24 订单发票明细
#### 对接负责人
    刘宏宇
#### 模块负责人
    刘宏宇
#### 请求
    GET /router/v5/invoice/detail/{id}
#### 参数
    *id : 252 //发票ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            id: 252,
            pdfUrl: "xxx" // 发票PDF 文件地址，若为空，则应该有对应的显示提示，比如未找到对应的发票信息
        }
    }

### APP-25 发送电子发票
#### 对接负责人
    刘宏宇
#### 模块负责人
    刘宏宇
#### 请求
    POST /router/v5/invoice/send/{id}
#### 参数
    *id: 252 //发票ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data":null
    }

### APP-26 订单列表(临时替代PHP接口，将来改造订单后，需要定制新的结构和参数后再重新对接)
#### 对接负责人
    刘宏宇
#### 模块负责人
    梁铁骐
#### 请求
    GET /router/v5/order
#### 参数
    与原PHP http://app.asagroup.asa/order/my 接口一致，未做改变
#### 响应
    与原PHP http://app.asagroup.asa/order/my 接口一致。并进行了下列扩展：
    1.对apAmt与totalprice进行了运算，将apAmt的金额加入了totalprice中；
    2.并且在orderInfo内进行了扩展，加入2个字段 invoiceTotal, invoiceDoneTotal
    PHP部分接口略，指出变化结构位置如下：
        {
        "code": 100000,
        "msg": "",
        "data":[
            {
                orderInfo:{
                    ...
                    invoiceTotal: 0, // 订单对应发票总数量
                    invoiceDoneTotal: 0, //订单对应发票已开数量
                }
            }
        ]
    }

### APP-27. 产品业态
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/product/businessType
#### 参数
    parentId : 0 // 父ID， 0 为第一级的餐饮业态
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "code": "|16|", // 餐饮业态Code
                "deleteFlg": 0,
                "gIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/g02.png", // 无背景图
                "hasProductCnt": 6,
                "id": 16, // 餐饮业态ID
                "level": 1,
                "name": "西餐西快", // 餐饮业态名
                "parentId": 0,
                "pyCode": "",
                "sIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/s02.png", // 常规图
                "showFlg": 1,
                "wIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/w02.png" // 白图
            }
        ]
    }

### APP-28. 新品首发
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/product
#### 参数
    *pathId : '0101' // 区域码
    businessTypeCode: '|01|' // 业态Code
    customerId: 1 // 客户ID
    @@contactId: 1 // 收货地址ID
    *deviceNo: '1' // 设备号
    keyword: 'xx' // 模糊搜索 品号、品名
    filterFollow：'YES' // 是否常订购搜索   YES 是 默认NO 不是
    productUnitIds[]:3,4,5 // 规格id字符串或数组
    excludeProductUnitIds[]: 3,4,5 // 排除品规格id字符串或数组
    excludeBusinessTypeCode[]:["-16-11-","-16-12-"]
    pageNo: 1 //页码 默认1
    pageSize: 10 // 页条数 默认10
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "businessTypeIds": null,
                "createTime": "2018-09-04 08:43:46", // 创建时间
                "customFlg": 0, // 是否定制品 0 非定制 1 定制
                "customerIds": null,
                "deleteFlg": 0,
                "id": 4538, // 产品名
                "longName": "", // 产品带广告名
                "mainBgImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201809/bf4f1596765356a6bec573ccf302e8d2.jpg", // 产品包装图
                "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201809/5de6f5e608e5fa07f08e637a8c940f6c.jpg", // 产品图
                "name": "天妇罗虾（裹粉炸虾）预炸", // 产品名
                "myFollowFlg":"YES",    //我常购标识  YES  NO
                "nowfuture": "NOW",         // NOW 现货  FUTURE 期货
                "pno": "1680", // 品号
                "process": 4, 
                "processContent": 1,
                "processInvoice": 1,
                "processPrice": 1,
                "productExtra": null,
                "productImgs": null,
                "productLack": { // 缺货状态 null 不缺货，有值代表缺货
                    "productId": 0, // 产品ID
                    "startTime": "2018-01-01"， // 缺货开始时间
                    "endTime":"2018-11-30" // 缺货结束时间
                }, 
                "productUnits": [ // 产品规格
                    {
                        "cubage": 0,
                        "grossweight": 0.25,
                        "guige": "230g（10枚）/袋", // 规格名
                        "height": 0,
                        "id": 7973, // 规格ID
                        "length": 35,
                        "minimum": 0, // 最小起订量值
                        "minimumType": "NONE", //NONE 无要求 BEGIN 递增 STEP 步增
                        "netweight": 0.23,
                        "perunit": 1, // 转化率
                        "price": { // 价格
                            "aPrice": 15.9, // A价格
                            "areaPrice": 0,
                            "decideType": "A",
                            "finallyPrice": 15.9, // 执行价格
                            "pPrice": 12.7,
                            "productUnitId": 7973,
                            "rawFlg": "NONE", // 是否原料品 YES 是原料品 其他 不用标记
                            "signPrice": 0,
                            "specialPrice": 0
                        },
                        "productCart": null, // 是否收纳购物车
                        "productId": 4538, // 产品ID
                        "unit": "袋", // 单位
                        "unitId": 1, 
                        "width": 23
                    },
                    {
                        "cubage": 0,
                        "grossweight": 4.65,
                        "guige": "230g（10枚）/袋*15袋",
                        "height": 13.5,
                        "id": 7974,
                        "length": 56,
                        "minimum": 0,
                        "minimumType": null,
                        "netweight": 3.45,
                        "perunit": 15,
                        "price": {
                            "aPrice": 237.5,
                            "areaPrice": 0,
                            "decideType": "A",
                            "finallyPrice": 237.5,
                            "pPrice": 190,
                            "productUnitId": 7974,
                            "rawFlg": "NONE",
                            "signPrice": 0,
                            "specialPrice": 0
                        },
                        "productCart": { // 购物车信息，null 为没有加入过购物车
                            "id":1 // 购物车明细ID
                            "ownerId": "1" // 货主ID，可能是设备号 也可能是客户ID
                            "productId": 1 // 产品ID
                            "productunitId": 1 // 产品规格ID
                            "pcount": 1 // 购物车数量
                            "createTime:": "2018-10-01 00:00:00" // 加入购物车时间
                        },
                        "productId": 4538,
                        "unit": "件",
                        "unitId": 3,
                        "width": 28.5
                    }
                ],
                "pyAll": "",
                "pyCode": "",
                "status": "NORMAL",
                "stock": { // 库存
                    "amount": 0, // 最小单位数量，各个规格的实际数量，需要拿这个值 除以自己的perunit 取整
                    "productId": 0
                },
                "taxRate": 0
            }
        ]
    }

### APP-29. 产品特惠推荐
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/product/special
#### 参数
    *pathId : '0101' // 区域码
    businessTypeCode: '|01|' // 业态Code
    customerId: 1 // 客户ID
    @@contactId: 1 // 收货地址ID
    *deviceNo: '1' // 设备号
    keyword: 'xx' // 模糊搜索 品号、品名
    pageNo: 1 //页码 默认1
    pageSize: 10 // 页条数 默认10
#### 响应
    同 APP-28

### APP-30. 产品人气推荐
#### 对接负责人
    刘宏宇
#### 模块负责人
    刘宏宇
#### 请求
    GET /router/v5/product/popular
#### 参数
    *pathId : '0101' // 区域码
    businessTypeCode: '|01|' // 业态Code
    customerId: 1 // 客户ID
    @@contactId: 1 // 收货地址ID
    *deviceNo: '1' // 设备号
    keyword: 'xx' // 模糊搜索 品号、品名
    pageNo: 1 //页码 默认1
    pageSize: 10 // 页条数 默认10
#### 响应
    同 APP-28

### APP-31. 关键字查询
#### 对接负责人
    刘宏宇
#### 模块负责人
    刘宏宇
#### 请求
    GET /router/v5/product/keyword
#### 参数
    businessTypeCode: '|01|' // 餐饮业态Code
    *keyword: 'xxx' // 模糊匹配关键字，品名、品号、拼音简写、拼音全称
    customerId: 1 // 客户ID， 默认0
    pageNo: 1 // 页码 默认1
    pageSize: 10 // 页条数  默认10
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "customFlg": 0, // 是否定制
                "id": 1, // 产品ID
                "longName": "",
                "mainBgImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/f9ce32e007fc796722466531c86d5cd9.jpg",
                "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/ec90940549d364b0982427f87dd86747.jpg",
                "name": "香草凤尾虾", // 产品名
                "pno": "0151", // 品号
                "productLack": null
            }
        ]
    }

### APP-32. 产品明细
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/product/detail
#### 参数
    *pathId: "0101" // 区域ID
    *productId: 1 // 产品ID
    customerId: 0 // 客户ID 默认0
    *deviceNo:198437512379851  // 设备号
    businessTypeId: 16      // 业态ID
    @@contactId: 1 // 收货地址ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "businessTypeIds": null,
            "businessTypes": [],
            "businessunit": [],
            "cookBookLites": [],
            "createTime": "2014-07-10 18:56:06",
            "custom": null,
            "customFlg": 0,
            "customFlgMore": 0,
            "customers": [],
            "deleteFlg": 0,
            "followFlg": 0,
            "id": 621, 
            "longName": "玉兔水晶虾饺，笋的爽脆搭配虾的弹滑，使人回味无穷~",
            "mainBgImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/18fac0d524ee62b46672ddf787c6ad83.jpg@!app-s",
            "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/5c2e8b23f8fbe16cd20c2152636e33c0.jpg@!app-s",
            "marketActive": [],
            "myFollowFlg":"YES",    //我常购标识  YES  NO
            "name": "玉兔水晶虾饺",
            "newHotFlg": "",
            "nowFutureFlg": "",
            "pno": "0010",
            "process": 4,
            "processContent": 1,
            "processInvoice": 1,
            "processPrice": 1,
            "productAttrs": null,
            "productExtra": {
                "attributeName": "含肉类",
                "attributes": 20,
                "barCode": "盒上条码：6926603300108；外箱条码：6926603312194",
                "cookWay": "取本品，无需解冻，待蒸锅上汽后放入产品，中汽蒸7-8分钟即可",
                "description": "栩栩如生的玉兔水晶饺 外表可爱呆萌味道鲜香 中汽蒸8分钟即可出锅",
                "id": 481,
                "intro": "",
                "material": "南美白虾仁",
                "place": "山东省 威海市",
                "productId": 621,
                "saveType": "FROZEN",
                "saveTypeName": "冷冻",
                "shelfLife": "12个月",
                "standards": 21,
                "standardsName": "GB 19295  速冻面米制品",
                "store": "-18℃以下"
            },
            "productImgs": {
                "QUALITY": [
                    {
                        "id": 9385,
                        "productId": 621,
                        "type": "QUALITY",
                        "url": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/61b150a3fb0cfca1f9c9e01839eb2d23.png"
                    }
                ],
                "MAINBG": [
                    {
                        "id": 0,
                        "productId": 621,
                        "type": "MAINBG",
                        "url": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/18fac0d524ee62b46672ddf787c6ad83.jpg@!app-lg"
                    }
                ],
                "MAIN": [
                    {
                        "id": 0,
                        "productId": 621,
                        "type": "MAIN",
                        "url": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/5c2e8b23f8fbe16cd20c2152636e33c0.jpg@!app-lg"
                    }
                ],
                "PHOTO": [
                    {
                        "id": 4286,
                        "productId": 621,
                        "type": "PHOTO",
                        "url": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/40933881a95ea5f0c69d0def3c563998.jpg@!app-lg"
                    }
                ],
                "DETAIL": [
                    {
                        "id": 12733,
                        "productId": 621,
                        "type": "DETAIL",
                        "url": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201804/cf6cd031f30c82bd4ddc7d2d0c7def03.jpg"
                    }
                ]
            },
            "productLack": null,
            "productSaleRange": null,
            "productUnits": [
                {
                    "createTime": "2019-01-15 18:31:25",
                    "cubage": 27304,
                    "grossweight": 13.05,
                    "guige": "600g（20枚）/盒*18盒",
                    "height": 13.4,
                    "id": 1068,
                    "length": 47.7,
                    "marketActive": [                   // 产品规格对应的活动
                        {
                            "marketId": 402,                // 活动ID
                            "marketName": "测试阶梯1",      // 活动名
                            "marketType": "GIFT",// 活动类型 GIFT 满赠 REDUCE 满减 DISCOUNT 满折
                            "remark": "",               // 活动说明
                            "accumulative": "LADDER",  // LADDER 阶梯 EACH 每满
                            "unit": "COUNT",            // PRICE 金额 COUNT 数量
                            // 活动规则  满10 赠1 ；满20 赠3；超出20（shiftFlg=1），每满5 赠1
                            "giveCondition": [
                                {                           
                                    "actionValue": 1,               // 赠1
                                    "extra": "4749:8322",
                                    "guige": "1.68kg（24枚）/盒*6盒/箱",
                                    "id": 361,
                                    "marketId": 402,
                                    "pno": "1981",
                                    "productName": "SHH的七珍鲜虾堡",
                                    "shiftFlg": 0,
                                    "shiftType": "EACH",
                                    "targetValue": 10           // 满10
                                },
                                {
                                    "actionValue": 3,               // 赠3
                                    "extra": "4747:8313",
                                    "guige": "500g（20枚）/袋",
                                    "id": 362,
                                    "marketId": 402,
                                    "pno": "1968",
                                    "productName": "榴莲大福",
                                    "shiftFlg": 0,
                                    "shiftType": "EACH",
                                    "targetValue": 20           // 满20
                                },
                                {
                                    "actionValue": 0,
                                    "extra": "",
                                    "guige": "",
                                    "id": 363,
                                    "marketId": 402,
                                    "pno": "",
                                    "productName": "",
                                    "shiftFlg": 1,              // shiftFlg = 1 转每满
                                    "shiftType": "EACH",
                                    "targetValue": 20           // 超出20
                                }
                            ],
                            "shiftCondition": {
                                "actionValue": 1,               // 赠1
                                "extra": "4780:8376",
                                "giveConditionId": 363,
                                "guige": "200g（10枚）/盒*12盒/箱",
                                "id": 20,
                                "pno": "8888",
                                "productName": "测试产品",
                                "targetValue": 5            // 每满5
                            }
                        }
                    ],
                    "minimum": 0,
                    "minimumType": "NONE",
                    "modifyTime": "",
                    "netweight": 10.8,
                    "perunit": 18,
                    "price": {
                        "aPrice": 859,
                        "areaPrice": 716,
                        "decideType": "Q",
                        "finallyPrice": 716,
                        "pPrice": 644.4,
                        "productUnitId": 1068,
                        "rate": 0,
                        "rawFlg": "NO",
                        "signPrice": 0,
                        "specialPrice": 0
                    },
                    "product": null,
                    "productCart": {
                        "createTime": "",
                        "id": 0,
                        "ownerId": "",
                        "pcount": 0,
                        "productId": 0,
                        "productUnitId": 0
                    },
                    "productId": 621,
                    "stock": null,
                    "unit": "件",
                    "unitId": 3,
                    "width": 39.6
                }
            ],
            "pyAll": "",
            "pyCode": "",
            "rangeType": "ALL",
            "relatePnos": [
                {
                    "id": 0,
                    "productId": 621,
                    "relatePno": "0010",
                    "relateProductId": 621
                }
            ],
            "saleRange": "",
            "status": "NORMAL",
            "stock": {
                "amount": 999999,
                "productId": 621
            },
            "taxRate": 0
        }
    }

### APP-33. 查询常订购
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/product/follow
#### 参数
    keyword: "xx" // 模糊查询 品号、品名
    *pathId: "0101" // 地区PathId
    businessTypeCode: "|01|" // 餐饮业态Code
    *customerId: 1 // 客户ID
    @@contactId: 1 // 收货地址ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "businessTypeId": 103,
                "businessTypeName": "甜品冰点",
                "productFollows": [
                    {
                        "createTime": "2017-09-14 09:25:37", // 常订购创建时间 
                        "customerId": 149,
                        "id": 27370, // 常订购ID
                        "product": {
                            "businessTypeIds": null,
                            "createTime": "2014-08-02 14:46:48", 
                            "customFlg": 0,
                            "customerIds": null,
                            "deleteFlg": 0,
                            "id": 246,
                            "longName": "鱿点Q，Q弹有韧劲~", // 产品广告名
                            "mainBgImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/643130529230f29af376829e0c96d208.jpg", // 产品包装图
                            "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/1f91464a8a09dc642230ad0259074be9.jpg", // 产品主图
                            "name": "鱿点Q（裹粉鱿鱼）", // 产品名
                            "myFollowFlg":"YES",    //我常购标识  YES  NO
                            "nowfuture": "NOW",         // NOW 现货  FUTURE 期货
                            "pno": "0118", // 品号
                            "process": 4,
                            "processContent": 1,
                            "processInvoice": 1,
                            "processPrice": 1,
                            "productExtra": null,
                            "productImgs": null,
                            "productLack": { // 是否缺货 未Null，则不缺货
                                "productId": 1,
                                "startTime": "2018-01-01 00:00:00", // 缺货开始时间
                                "endTime": "2018-01-01 23:59:59" // 缺货结束时间
                            }, 
                            "productUnits": [ // 产品规格
                                {
                                    "cubage": 2630,
                                    "grossweight": 1.089,
                                    "guige": "1000g",
                                    "height": 6.4,
                                    "id": 462, // 产品规格ID
                                    "length": 26, 
                                    "minimum": 0,  // 起订量
                                    "minimumType": "NONE", //最小起订量类型 NONE 无 BEGIN 递增 STEP 步增
                                    "netweight": 1,
                                    "perunit": 1, // 转化率
                                    "price": { // 价格
                                        "aPrice": 37.3, // A价格
                                        "areaPrice": 0,
                                        "decideType": "S",
                                        "finallyPrice": 30, // 决定价格
                                        "pPrice": 29.8,
                                        "productUnitId": 462,
                                        "rawFlg": "NONE", // 是否原料品 YES 为是 其他为否
                                        "signPrice": 30,
                                        "specialPrice": 0
                                    },
                                    "productCart": { // 购物车， 若未加入购物车，这为Null
                                        ...
                                        pcount: 1 // 数量
                                    },
                                    "productId": 246,
                                    "unit": "盒", // 单位
                                    "unitId": 2,
                                    "width": 15.8
                                }
                            ],
                            "pyAll": "",
                            "pyCode": "",
                            "status": "NORMAL",
                            "stock": { // 库存
                                "amount": 0, // 库存数量，需要与规格内的perunit相除 去整，即为实际产品库存余量
                                "productId": 0
                            },
                            "taxRate": 0
                        },
                        "productId": 246,
                        "source": "SYS",
                        "updateTime": "2017-09-14 09:25:37",
                        "weight": 3
                    }
                ]
            }
        ]
    }

### APP-34. 加入常订购
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    POST /router/v5/product/follow
#### 参数
    json body
    {
        *customerId: 1,          // 客户ID
        *productIds: [1, 2, 3]  // 产品ID数组
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data":null
    }

### APP-35. 删除常订购
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    DELETE /router/v5/product/follow
#### 参数
    *customerId: 1 // 客户ID
    *productId: 1 // 产品ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data":null
    }
    

### APP-36. 购物车查询
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/product/cart
#### 参数
    *pathId:"0101" // 地区PathId
    businessTypeCode:"|01|" // 餐饮业态Code
    *deviceNo: "1" // 设备码
    customerId: 1 // 客户ID
    @@contactId: 1 // 收货地址ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "jian": 0, // 总计件数
            "effectProductUnits": [ // 规格清单
                {
                    "cubage": 1512, 
                    "grossweight": 0.55,
                    "guige": "500g(23-25枚）/盒",
                    "height": 5,
                    "id": 1, // 规格ID
                    "length": 19.5,
                    "minimum": 0,
                    "minimumType": "NONE",
                    "netweight": 0.5,
                    "perunit": 1, // 规格转化率
                    "price": { // 价格
                        "aPrice": 40.12, // a价格
                        "areaPrice": 0,
                        "decideType": "A",
                        "finallyPrice": 40.12, // 决定价格
                        "pPrice": 32.5,
                        "productUnitId": 1,
                        "rawFlg": "NONE",
                        "signPrice": 0,
                        "specialPrice": 0
                    },
                    "product": { // 产品
                        "customFlg": 0,
                        "id": 1, //  产品ID
                        "longName": "香草凤尾虾-专业开背，秘制加工，中西餐厅新食尚~", // 产品广告名
                        "mainBgImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/f9ce32e007fc796722466531c86d5cd9.jpg", // 产品包装图
                        "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/ec90940549d364b0982427f87dd86747.jpg", // 产品图
                        "name": "香草凤尾虾", // 产品名
                        @@"nowfuture": "NOW",         // NOW 现货  FUTURE 期货
                        "pno": "0151", // 品号
                        "productLack": { // 缺货标识, NULL 未不缺货
                            "productId": 1,
                            "startTime": "2018-01-01 00:00:00", // 缺货开始时间
                            "endTime" : "2018-01-01 23:59:59" // 缺货结束时间
                        }
                    },
                    "productCart": { // 购物车信息
                        "createTime": "2018-12-17 14:05:17", // 创建时间
                        "id": 66020, // 购物车ID
                        "ownerId": "149", // 拥有者ID
                        "pcount": 9, // 数量
                        "productId": 1,
                        "productUnitId": 1，
                        @@"fromPage": "首页推荐",     // 推荐产品来源
                        @@"recommendId": 1            // 推荐ID
                    },
                    "productId": 1, // 产品ID
                    "stock": { // 库存
                        "amount": 0, // 库存数量，需要与规格表中的perunit 进行相除去整，即为规格对应的可用库存数量
                        "productId": 0
                    },
                    "supplierPrice": null,
                    "unit": "盒", // 单位
                    "unitId": 2, 
                    "width": 15.5
                }
            ],
            "uneffectProductUnits": [ // 规格清单
                {
                    "cubage": 1512, 
                    "grossweight": 0.55,
                    "guige": "500g(23-25枚）/盒",
                    "height": 5,
                    "id": 1, // 规格ID
                    "length": 19.5,
                    "minimum": 0,
                    "minimumType": "NONE",
                    "netweight": 0.5,
                    "perunit": 1, // 规格转化率
                    "price": { // 价格
                        "aPrice": 40.12, // a价格
                        "areaPrice": 0,
                        "decideType": "A",
                        "finallyPrice": 40.12, // 决定价格
                        "pPrice": 32.5,
                        "productUnitId": 1,
                        "rawFlg": "NONE",
                        "signPrice": 0,
                        "specialPrice": 0
                    },
                    "product": { // 产品
                        "customFlg": 0,
                        "id": 1, //  产品ID
                        "longName": "香草凤尾虾-专业开背，秘制加工，中西餐厅新食尚~", // 产品广告名
                        "mainBgImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/f9ce32e007fc796722466531c86d5cd9.jpg", // 产品包装图
                        "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/ec90940549d364b0982427f87dd86747.jpg", // 产品图
                        "name": "香草凤尾虾", // 产品名
                        "pno": "0151", // 品号
                        "productLack": { // 缺货标识, NULL 未不缺货
                            "productId": 1,
                            "startTime": "2018-01-01 00:00:00", // 缺货开始时间
                            "endTime" : "2018-01-01 23:59:59" // 缺货结束时间
                        }
                    },
                    "productCart": { // 购物车信息
                        "createTime": "2018-12-17 14:05:17", // 创建时间
                        "id": 66020, // 购物车ID
                        "ownerId": "149", // 拥有者ID
                        "pcount": 9, // 数量
                        "productId": 1,
                        "productUnitId": 1
                    },
                    "productId": 1, // 产品ID
                    "stock": { // 库存
                        "amount": 0, // 库存数量，需要与规格表中的perunit 进行相除去整，即为规格对应的可用库存数量
                        "productId": 0
                    },
                    "supplierPrice": null,
                    "unit": "盒", // 单位
                    "unitId": 2, 
                    "width": 15.5
                }
            ],
            "san": 1, // 散数量
            "totalPrice": 361.08 // 总金额
        }
    }

### APP-37. 购物车增加
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    PUT /router/v5/product/cart
#### 参数
    {
        *customerId: 149, // 客户ID
        *deviceNo: "1", // 设备号
        *productId: 1, // 产品ID
        *productUnitId: 1, // 规格ID
        *amount: 1.0 // 数量，此数量为操作后购物车应有数量，而不是添加了几个。服务端会直接记录这个数量当作购物车内此商品的数量
                     // 若数量为0，则服务端会自动删除这个购物车明细
        fromPage    // 来源页面（字符串) ，添加的推荐品，需要传来源页面，同时也要传推荐ID
        recommendId // 推荐ID
    }
    > fromPage 和 recommendId 需同时传或不传
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data":null
    }


### APP-38. 购物车删除
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    DELETE /router/v5/product/cart
#### 参数
    *ids=1,2,3 // 购物车明细ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data":null
    }


### APP-39. APP首页，新品首发、特惠推荐、人气推荐
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/product/index
#### 参数
    *pathId : '0101' // 区域码
    businessTypeCode: '-120-' // 业态Code
    customerId: 1 // 客户ID
    @@contactId: 1 // 收货地址ID
    *deviceNo: '1' // 设备号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "newProduct": [
                6个json对象，字段结构同APP-28
            ],
            "popularProduct": [
                6个json对象，字段结构同APP-28
            ],
            "specialProduct": [
                6个json对象，字段结构同APP-28
            ],
            // 风格入口图片
            @"styleUrl": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190121132417926-4745.png"
        }
    }



### APP-40. 风格列表-我有我的风格
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/cookbook/style
#### 参数
    *businessTypeCode:-16-  // 业态编码
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "cookBookLites": [
                    {
                        "cookBookId": 17,
                        "followFlg": 0,
                        "name": "水果全缤纷",
                        "styleId": 2,
                        "url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg"
                    },
                    {
                        "cookBookId": 16,
                        "followFlg": 0,
                        "name": "水果全缤纷",
                        "styleId": 2,
                        "url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg"
                    },
                    {
                        "cookBookId": 15,
                        "followFlg": 0,
                        "name": "水果全缤纷",
                        "styleId": 2,
                        "url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg"
                    },
                    {
                        "cookBookId": 18,
                        "followFlg": 0,
                        "name": "水果全缤纷",
                        "styleId": 2,
                        "url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg"
                    },
                    {
                        "cookBookId": 14,
                        "followFlg": 0,
                        "name": "水果全缤纷",
                        "styleId": 2,
                        "url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg"
                    },
                    {
                        "cookBookId": 13,
                        "followFlg": 0,
                        "name": "水果全缤纷",
                        "styleId": 2,
                        "url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg"
                    }
                ],
                "id": 2,
                "nameCn": "罗曼蒂克风",
                "nameEn": "Romantic Love",
                "url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg"
            },
            {
                "cookBookLites": [
                    {
                        "cookBookId": 12,
                        "followFlg": 0,
                        "name": "水果全缤纷",
                        "styleId": 6,
                        "url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg"
                    },
                    {
                        "cookBookId": 11,
                        "followFlg": 0,
                        "name": "水果全缤纷",
                        "styleId": 6,
                        "url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg"
                    }
                ],
                "id": 6,
                "nameCn": "商务黑金风",
                "nameEn": "Black Business Meals",
                "url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg"
            }
        ]
    }

### APP-41. 菜谱列表
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/cookbook
#### 参数
    // 获取风格关联菜谱
    *styleId:2  // 风格id
    customerId:32512    // 客户id，用于判断是否已收藏
    pageNo:1
    pageSize:10 // 默认10条
    // 获取我收藏的菜谱
    *customerId:32512   // 客户id
    *filterFollos:"YES" // 传固定值 YES
    pageNo:1
    pageSize:10     // 默认10条
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "cookBookId": 17,   // 菜谱id
                    "followFlg": 0,     // 收藏标识 0 未收藏 1 已收藏
                    "name": "水果全缤纷",    // 菜谱名
                    "styleId": 2,
                    "url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg" // 图片
                },
                {
                    "cookBookId": 16,
                    "followFlg": 1,
                    "name": "水果全缤纷",
                    "styleId": 2,
                    "url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg"
                },
                {
                    "cookBookId": 15,
                    "followFlg": 1,
                    "name": "水果全缤纷",
                    "styleId": 2,
                    "url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg"
                }
            ],
            "pageNo": 1,
            "total": 3
        }
    }
### APP-42. 菜谱详情
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/cookbook/detail
#### 参数    
    *cookBookId // 菜谱id
    *customerId  // 客户id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "cookBook2Products": [
                {
                    "cookBookId": 16,
                    "id": 22,
                    "product": {
                        "businessTypeIds": null,
                        "businessTypes": null,
                        "cookBookLites": null,
                        "createTime": "2018-09-04 08:33:25",
                        "customFlg": 0,
                        "customerIds": null,
                        "customers": null,
                        "deleteFlg": 0,
                        "followFlg": 0,
                        "id": 4537,
                        "longName": "",
                        "mainBgImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201809/30bf6ba5bc475bbe5d0be15992321af3.jpg@!app-s",
                        "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201809/2e504aad125a380a3e9f49b4ad0d0d60.jpg@!app-s",
                        "name": "黄金薯泥芝士棒",
                        "pno": "1654",
                        "process": 4,
                        "processContent": 1,
                        "processInvoice": 1,
                        "processPrice": 1,
                        "productExtra": null,
                        "productImgs": null,
                        "productLack": null,
                        "productUnits": [
                            {
                                "createTime": "",
                                "cubage": 0,
                                "grossweight": 0.92,
                                "guige": "900g（20枚）/盒",
                                "height": 7.8,
                                "id": 7971,
                                "length": 25.5,
                                "minimum": 0,
                                "minimumType": "NONE",
                                "modifyTime": "",
                                "netweight": 0.9,
                                "perunit": 1,
                                "price": {
                                    "aPrice": 40.5,
                                    "areaPrice": 0,
                                    "decideType": "A",
                                    "finallyPrice": 40.5,
                                    "pPrice": 32.4,
                                    "productUnitId": 7971,
                                    "rawFlg": "NO",
                                    "signPrice": 0,
                                    "specialPrice": 0
                                },
                                "productCart": {
                                    "createTime": "",
                                    "id": 0,
                                    "ownerId": "",
                                    "pcount": 0,
                                    "productId": 0,
                                    "productUnitId": 0
                                },
                                "productId": 4537,
                                "unit": "盒",
                                "unitId": 2,
                                "width": 17
                            },
                            {
                                "createTime": "",
                                "cubage": 0,
                                "grossweight": 9.2,
                                "guige": "900g（20枚）/盒*9盒",
                                "height": 24.2,
                                "id": 7972,
                                "length": 52.2,
                                "minimum": 0,
                                "minimumType": "NONE",
                                "modifyTime": "",
                                "netweight": 8.1,
                                "perunit": 9,
                                "price": {
                                    "aPrice": 364.5,
                                    "areaPrice": 0,
                                    "decideType": "A",
                                    "finallyPrice": 364.5,
                                    "pPrice": 291.6,
                                    "productUnitId": 7972,
                                    "rawFlg": "NO",
                                    "signPrice": 0,
                                    "specialPrice": 0
                                },
                                "productCart": {
                                    "createTime": "",
                                    "id": 0,
                                    "ownerId": "",
                                    "pcount": 0,
                                    "productId": 0,
                                    "productUnitId": 0
                                },
                                "productId": 4537,
                                "unit": "件",
                                "unitId": 3,
                                "width": 26.5
                            }
                        ],
                        "pyAll": "",
                        "pyCode": "",
                        "relatePnos": null,
                        "status": "NORMAL",
                        "stock": {
                            "amount": 8,
                            "productId": 4537
                        },
                        "taxRate": 0
                    },
                    "productId": 4537
                },
                {
                    "cookBookId": 16,
                    "id": 23,
                    "product": {
                        "businessTypeIds": null,
                        "businessTypes": null,
                        "cookBookLites": null,
                        "createTime": "2018-09-04 08:43:46",
                        "customFlg": 0,
                        "customerIds": null,
                        "customers": null,
                        "deleteFlg": 0,
                        "followFlg": 0,
                        "id": 4538,         // 商品id
                        "longName": "",
                        "mainBgImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201809/bf4f1596765356a6bec573ccf302e8d2.jpg@!app-s",
                        // 主图
                        "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201809/5de6f5e608e5fa07f08e637a8c940f6c.jpg@!app-s",
                        "name": "天妇罗虾（裹粉炸虾）预炸", // 品名
                        "pno": "1680",                  // 品号
                        "process": 4,
                        "processContent": 1,
                        "processInvoice": 1,
                        "processPrice": 1,
                        "productExtra": null,
                        "productImgs": null,
                        "productLack": null,
                        "productUnits": [           // 规格列表
                            {
                                "createTime": "",
                                "cubage": 0,
                                "grossweight": 0.25,
                                "guige": "230g（10枚）/袋",
                                "height": 0,
                                "id": 7973,
                                "length": 35,
                                "minimum": 0,
                                "minimumType": "NONE",
                                "modifyTime": "",
                                "netweight": 0.23,
                                "perunit": 1,
                                "price": {                 // 价格
                                    "aPrice": 15.9,
                                    "areaPrice": 0,
                                    "decideType": "A",
                                    "finallyPrice": 15.9,      // 最终价格
                                    "pPrice": 12.7,
                                    "productUnitId": 7973,
                                    "rawFlg": "NO",
                                    "signPrice": 0,
                                    "specialPrice": 0
                                },
                                "productCart": {
                                       "createTime": "",
                                       "id": 0,
                                       "ownerId": "",
                                       "pcount": 0,
                                       "productId": 0,
                                       "productUnitId": 0
                                   },
                                "productId": 4538,
                                "unit": "袋",
                                "unitId": 1,
                                "width": 23
                            },
                            {
                                "createTime": "",
                                "cubage": 0,
                                "grossweight": 4.65,
                                "guige": "230g（10枚）/袋*15袋",
                                "height": 13.5,
                                "id": 7974,
                                "length": 56,
                                "minimum": 0,
                                "minimumType": "NONE",
                                "modifyTime": "",
                                "netweight": 3.45,
                                "perunit": 15,
                                "price": { 
                                    "aPrice": 237.5,
                                    "areaPrice": 0,
                                    "decideType": "A",
                                    "finallyPrice": 237.5,
                                    "pPrice": 190,
                                    "productUnitId": 7974,
                                    "rawFlg": "NO",
                                    "signPrice": 0,
                                    "specialPrice": 0
                                },
                                "productCart": {
                                       "createTime": "",
                                       "id": 0,
                                       "ownerId": "",
                                       "pcount": 0,
                                       "productId": 0,
                                       "productUnitId": 0
                                   },
                                "productId": 4538,
                                "unit": "件",
                                "unitId": 3,
                                "width": 28.5
                            }
                        ],
                        "pyAll": "",
                        "pyCode": "",
                        "relatePnos": null,
                        "status": "NORMAL",
                        "stock": {              // 可用库存
                            "amount": 59,
                            "productId": 4538
                        },
                        "taxRate": 0
                    },
                    "productId": 4538
                }
            ],
            "cookBookFoods": [
                {
                    "cookBookId": 16,
                    "deleteFlg": 0,
                    "dosage": "2个",         // 食材用量
                    "id": 24,
                    "name": "apple"         // 食材名
                },
                {
                    "cookBookId": 16,
                    "deleteFlg": 0,
                    "dosage": "500ml",
                    "id": 25,
                    "name": "沙拉"
                }
            ],
            "cookBookSteps": [
                {
                    "cookBookId": 16,
                    "cookBookStepImgs": [   // 步骤图片列表，null表示无图片
                        {
                            "id": 18,
                            "stepId": 21,
                            "url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg"
                        },
                        {
                            "id": 19,
                            "stepId": 21,
                            "url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg"
                        }
                    ],
                    "deleteFlg": 0,
                    "id": 21,               
                    "intro": "苹果切碎"     // 步骤说明
                },
                {
                    "cookBookId": 16,
                    "cookBookStepImgs": null,
                    "deleteFlg": 0,
                    "id": 22,
                    "intro": "沙拉与苹果搅拌均匀"
                }
            ],
            "cookBookStyles": [             // 风格列表
                {
                    "cookBookLites": null,
                    "id": 2,
                    "nameCn": "罗曼蒂克风",  // 风格中文名
                    "nameEn": "",
                    // 风格图片
                    "url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg"              
                }
            ],
            "createRole": 0,
            "createTime": "2019-01-20",
            "createUser": 0,
            "createUserName": "孙启萌",
            "deleteFlg": 0,
            "followFlg": 1,             // 收藏标志 0 未收藏 1 已收藏
            "id": 16,                   // 菜谱id
            "intro": "樱桃乳酪慕斯裹上白巧克力创花,搭配丰富的水果,酸甜与美味融合,轻易征服你的味蕾.",    // 菜谱说明
            "name": "水果全缤纷",        // 菜谱名
            "status": "LOCK",
            "url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg" // 菜谱图片
        }
    }
### APP-43. 菜谱收藏
     #### 对接负责人
         尹洪明
     #### 模块负责人
         尹洪明
     #### 请求
         POST /router/v5/cookbook/follow
     #### 参数    
         {
             *"customerId":32512,    // 客户id
             *"cookBookId":17        // 菜谱id
         }
     #### 响应    
         {
             "code": 100000,
             "msg": "",
             "data":null
         }
### APP-44. 菜谱取消收藏
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    DELETE /router/v5/cookbook/follow
#### 参数    
    *"customerId":32512,    // 客户id
    *"cookBookId":17        // 菜谱id
#### 响应    
    {
        "code": 100000,
        "msg": "",
        "data":null
    }        
    
    
### APP-45 客户绑定deviceToken
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    PUT /router/v5/auth/deviceToken
#### 参数
    *customerId:"1" //客户id  需要删除时，不需要传递customerId 或者 customerId = 0
    *deviceToken:"*********" // 阿里token
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data":null
    }  
 
### APP-46 小程序登录
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/auth/wxLogin
#### 参数
    openId:"***"           // openId
    mobile:"***"           // 手机号
    platformCode:"0101"     // 平台商码
    businessTypeId:16           // 业态id
#### 响应
    {
        "code": "100000", 
        "msg": "", 
        "data": [
            {
                "companyName:"yazhouyugang",
                "customerId": 32250, 
                "openId": "**********", 
                "token": "eyJhbGciOiJIUzUxMiJ9.eyJ1aWQiOiIzMjkyMyIsImdpZCI6Ii0xIiwicmlkcyI6Ii0xIiwiY3JlYXRlX3RpbWUiOiIyMDE4LTA5LTIwIDE1OjE2OjExIiwicGlkIjoiMSIsInJpZCI6Ii0xIn0.SQgLPdxNV8UxSa-pmJBpfn1InJxDLqDcwHgWdCo_LJfyjauBiiSNmpWcAJSJv7yVuJV7qRR8eqt8mtIQ-DpSAA"
            }, 
            {
                "companyName:"yazhouhaocai",
                "customerId": 32250, 
                "openId": "**********", 
                "token": "eyJhbGciOiJIUzUxMiJ9.eyJ1aWQiOiIzMjkyMyIsImdpZCI6Ii0xIiwicmlkcyI6Ii0xIiwiY3JlYXRlX3RpbWUiOiIyMDE4LTA5LTIwIDE1OjE2OjExIiwicGlkIjoiMSIsInJpZCI6Ii0xIn0.SQgLPdxNV8UxSa-pmJBpfn1InJxDLqDcwHgWdCo_LJfyjauBiiSNmpWcAJSJv7yVuJV7qRR8eqt8mtIQ-DpSAA"
            }
        ]
    }
    
 
### APP-47 再来一单
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    PUT /router/v5/product/cart/batch
#### 参数
    *customerId:12345
    *deviceNo:"192834182937482918932"
    *productCarts:[
        {
            *"productId": 123,
            *"productUnitId":1231,
            *"pcount": 3
        },
        {
            "productId": 456,
            "productUnitId":4561,
            "pcount": 5
        }
    ]
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data":null
    } 

### APP-48. 获取可用活动
#### 模块负责人
    尹洪明
#### 请求
    PUT /router/v5/market/canuse
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
        "data": {
            "invalidActiveCoupon": [
                {
                    "id": 252,                                  // 活动ID
                    "name": "满折003",                        // 活动名
                    "type": "DISCOUNT",                     // 类型 REDUCE 满减 DISCOUNT 满折
                    "effectStime": "2019-03-15 00:00:00",   // 开始日期
                    "effectEtime": "2020-04-01 23:59:59",   // 结束日期
                    "accumulative": "LADDER",               // LADDER 阶梯 EACH 每满
                    "unit": "PRICE",                        // PRICE 金额 COUNT 数量
                    "way": "DISCOUNT",
                    "used": "NO",
                    "rebate": 0,
                    "hitGiveConditionId": 0,
                    "giveCondition": {
                        "169": {
                            "actionValue": 80,  // 减80元（80折）
                            "extra": "",
                            "guige": "",
                            "id": 169,
                            "marketId": 252,
                            "pno": "",
                            "productName": "",
                            "targetValue": 100  // （每）满 100 元（个）
                                                注：满或每满根据accumulative判断
                                                    元或个根据unit判断
                        }
                    },
                    "rangeType": "PRODUCTUNIT", // PRODUCTUNIT 指定品 EXCLUDE 排除品 ALL 无限制
                    "ranges": [ // 指定品或排除品productunitId
                        2,
                        8,
                        10
                    ],
                    "productRange": [ // 指定品或排除品
                        {
                            "extra": "",
                            "guige": "425g（15串）*20袋",
                            "id": 22829,
                            "marketId": 319,
                            "pno": "0068",
                            "productName": "新奥尔良烤虾",
                            "rangeId": 32,
                            "type": "PRODUCTUNIT"
                        }
                    ],
                    "productId": 0,
                    "productName": "",
                    "productUnitId": 0,
                    "guige": "",
                    "giftNum": 0,
                    "giftMainImg": ""
                }
            ],
            "activeCoupon": [
                {
                    "accumulative": "LADDER",   // LADDER 阶梯 EACH 每满
                    "effectEtime": "2020-04-01 23:59:59", // 结束日期
                    "effectStime": "2019-03-15 00:00:00",// 开始日期
                    "giftMainImg": "",
                    "giftNum": 0,
                    "giveCondition": {
                        "169": {
                            "actionValue": 80,  // 减80元（80折）
                            "extra": "",
                            "guige": "",
                            "id": 169,
                            "marketId": 252,
                            "pno": "",
                            "productName": "",
                            "targetValue": 100  // （每）满 100 元（个）
                                                注：满或每满根据accumulative判断
                                                    元或个根据unit判断
                        }
                    },
                    "guige": "",
                    "hitGiveConditionId": 169,  // 命中的规格ID
                    "id": 252,                  // 活动ID
                    "name": "满折003",            // 活动名
                    "productId": 0,
                    "productName": "",
                    "productUnitId": 0,
                    "rangeType": "PRODUCTUNIT", // PRODUCTUNIT 指定品 EXCLUDE 排除品 ALL 无限制
                    "ranges": [ // 指定品或排除品productunitId
                        2,
                        8,
                        10
                    ],
                    "rebate": 60,           // 优惠金额
                    "type": "DISCOUNT", // 类型 COUPON 优惠券 REDUCE 满减 DISCOUNT 满折
                    "unit": "PRICE",        // PRICE 金额 COUNT 数量
                    "used": "NO",
                    "way": "DISCOUNT"
                }
            ],
            "activeGift": [
                {
                    "accumulative": null,
                    "effectEtime": "",
                    "effectStime": "",
                    "giftMainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201901/43b4a0bb5a7c75276d57f24268432952.jpg",
                    "giftNum": 2,           // 赠品数量
                    "giveCondition": {},
                    "guige": "900g",        // 赠品规格
                    "hitGiveConditionId": 0,
                    "id": 250,              // 活动ID
                    "name": "满赠001",        // 活动名
                    "productId": 6,         // 赠品ID
                    "productName": "唐扬鱿鱼",  // 赠品名
                    "productUnitId": 5,         // 赠品规格ID
                    "rangeType": null,
                    "ranges": null,
                    "rebate": 0,
                    "type": "GIFT", 
                    "unit": null,
                    "used": "NO",
                    "way": null
                }
            ],
            "activeRebate": [
                {
                    "accumulative": null,
                    "effectEtime": "2020-04-01 23:59:59",
                    "effectStime": "2019-03-15 00:00:00",
                    "giftMainImg": "",
                    "giftNum": 0,
                    "giveCondition": {
                        "0": {
                            "actionValue": 150, // 优惠金额
                            "extra": "50.0",    // 折扣比率
                            "guige": "",
                            "id": 0,
                            "marketId": 0,
                            "pno": "",
                            "productName": "",
                            "targetValue": 2850  剩余金额
                        }
                    },
                    "guige": "",
                    "hitGiveConditionId": 0,
                    "id": 15279,                // 返利券ID
                    "name": "测试9推广费用",      // 返利券名
                    "productId": 0,
                    "productName": "",
                    "productUnitId": 0,
                    "rangeType": "ALL",
                    "ranges": null,
                    "rebate": 150,          // 优惠金额
                    "type": "SPREAD",// 返利券类型  REBATE 返利券 SPREAD 推广会 FREIGHT 运费 OTHER 其它
                    "unit": "PRICE",
                    "used": "NO",
                    "way": "REDUCE"
                }
            ]
        }
    }
### APP-49. app端查询广告位列表数据
#### 模块负责人
    王子悦
#### 请求
    GET router/v5/market/marketAdvertisements/{businesstypeId}
#### 参数    
    businesstypeId //业态id，例如16  34  44   95
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "BANNER": [//广告位 BANNER 轮播位 ROWUP横上 ROWDOWN 横下 COLUMN 竖广告   H5
                {
                    "businesstypeRange": "ALL",//业态范围 ALL 全部业态 PART 部分
                    "createRole": 0,
                    "createTime": "2019-03-28 11:32:13",//创建时间
                    "createUser": 0,
                    "createUsername": "孙启萌",//创建人
                    "deleteFlg": 0,
                    "id": 64,
                    "image": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190328175533452-1765.jpg",//广告图片
                    "market": {//关联活动
                            "accumulative": "",//LADDER 阶梯, EACH: 每满
                            "activeConditionId": 0,
                            "bannerPic": "",
                            "couponConditionId": 0,
                            "createTime": "2019-05-08 00:59:24",
                            "createUser": 518,
                            "createUserName": "孙启萌",
                            "customerRange": "ALL",
                            "deleteFlg": 0,
                            "detailPic": null,
                            "effectEtime": "2019-06-10 23:59:59",
                            "effectStime": "2019-05-10 00:00:00",
                            "hasBusinessunitRange": 0,//指定事业部数量
                            "hasExcludeProductunitRange": 0,
                            "hasProductunitRange": 0,//指定产品数量
                            "id": 436,
                            "limitNum": 0,//领取规则: 最大1-仅领一次, 0-用完再领
                            "marketSpecialSkip": {//活动跳转
                                "extra": "4777",//PRODUCT 产品ID，H5存入H5页面链接
                                "id": 17,
                                "marketId": 436,//活动id
                                "type": "PRODUCT"//类型  PRODUCT, H5
                            },
                            "name": "111",//活动名称
                            "overdue": 0,
                            "popupPic": "",
                            "remark": "",
                            "saOrderIds": null,
                            "type": "SPECIAL",//活动类型 COUPON领券 GIFT满赠 REDUCE满减 DISCOUNT满折 COLUMN专栏 SPECIAL专题
                            "unit": ""//执行单位 PRICE 价格，COUNT 数量
                    },
                    "marketId": 436,//活动id
                    "modifyTime": "",
                    "name": "测试广告位8",//广告名称
                    "productBusinessTypepArray": null,
                    "type": "BANNER"
                }
            ],
            "COLUMN": [
                {
                    "businesstypeRange": "PART",
                    "createRole": 0,
                    "createTime": "2019-03-23 10:00:17",
                    "createUser": 0,
                    "createUsername": "孙启萌",
                    "deleteFlg": 0,
                    "id": 25,
                    "image": "http://beijing.aliyuncs.com/businesstype/w02.png",
                    "market": {
                            "accumulative": "",//LADDER 阶梯, EACH: 每满
                            "activeConditionId": 0,
                            "bannerPic": "",
                            "couponConditionId": 0,
                            "createTime": "2019-05-08 00:59:24",
                            "createUser": 518,
                            "createUserName": "孙启萌",
                            "customerRange": "ALL",
                            "deleteFlg": 0,
                            "detailPic": null,
                            "effectEtime": "2019-06-10 23:59:59",
                            "effectStime": "2019-05-10 00:00:00",
                            "hasBusinessunitRange": 0,//指定事业部数量
                            "hasExcludeProductunitRange": 0,
                            "hasProductunitRange": 0,//指定产品数量
                            "id": 436,
                            "limitNum": 0,//领取规则: 最大1-仅领一次, 0-用完再领
                            "marketSpecialSkip": {//活动跳转
                                "extra": "4777",//PRODUCT 产品ID，H5存入H5页面链接
                                "id": 17,
                                "marketId": 436,//活动id
                                "type": "PRODUCT"//类型  PRODUCT, H5
                            },
                            "name": "111",//活动名称
                            "overdue": 0,
                            "popupPic": "",
                            "remark": "",
                            "saOrderIds": null,
                            "type": "SPECIAL",//活动类型 COUPON领券 GIFT满赠 REDUCE满减 DISCOUNT满折 COLUMN专栏 SPECIAL专题
                            "unit": ""//执行单位 PRICE 价格，COUNT 数量
                    },
                    "marketId": 436,
                    "modifyTime": "",
                    "name": "测试广告位4",
                    "productBusinessTypepArray": null,
                    "type": "COLUMN"
                }
            ],
            "ROWDOWN": [
                {
                    "businesstypeRange": "ALL",
                    "createRole": 0,
                    "createTime": "2019-03-28 11:13:24",
                    "createUser": 0,
                    "createUsername": "孙启萌",
                    "deleteFlg": 0,
                    "id": 62,
                    "image": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190328111308458-4149.png",
                    "market": {
                            "accumulative": "",//LADDER 阶梯, EACH: 每满
                            "activeConditionId": 0,
                            "bannerPic": "",
                            "couponConditionId": 0,
                            "createTime": "2019-05-08 00:59:24",
                            "createUser": 518,
                            "createUserName": "孙启萌",
                            "customerRange": "ALL",
                            "deleteFlg": 0,
                            "detailPic": null,
                            "effectEtime": "2019-06-10 23:59:59",
                            "effectStime": "2019-05-10 00:00:00",
                            "hasBusinessunitRange": 0,//指定事业部数量
                            "hasExcludeProductunitRange": 0,
                            "hasProductunitRange": 0,//指定产品数量
                            "id": 436,
                            "limitNum": 0,//领取规则: 最大1-仅领一次, 0-用完再领
                            "marketSpecialSkip": {//活动跳转
                                "extra": "4777",//PRODUCT 产品ID，H5存入H5页面链接
                                "id": 17,
                                "marketId": 436,//活动id
                                "type": "PRODUCT"//类型  PRODUCT, H5
                            },
                            "name": "111",//活动名称
                            "overdue": 0,
                            "popupPic": "",
                            "remark": "",
                            "saOrderIds": null,
                            "type": "SPECIAL",//活动类型 COUPON领券 GIFT满赠 REDUCE满减 DISCOUNT满折 COLUMN专栏 SPECIAL专题
                            "unit": ""//执行单位 PRICE 价格，COUNT 数量
                    },
                    "marketId": 436,
                    "modifyTime": "",
                    "name": "ag",
                    "productBusinessTypepArray": null,
                    "type": "ROWDOWN"
                }
            ],
            "ROWUP": [
                {
                    "businesstypeRange": "PART",
                    "createRole": 0,
                    "createTime": "2019-03-28 18:02:15",
                    "createUser": 0,
                    "createUsername": "孙启萌",
                    "deleteFlg": 0,
                    "id": 66,
                    "image": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190328180207163-8064.png",
                    "market": {
                            "accumulative": "",//LADDER 阶梯, EACH: 每满
                            "activeConditionId": 0,
                            "bannerPic": "",
                            "couponConditionId": 0,
                            "createTime": "2019-05-08 00:59:24",
                            "createUser": 518,
                            "createUserName": "孙启萌",
                            "customerRange": "ALL",
                            "deleteFlg": 0,
                            "detailPic": null,
                            "effectEtime": "2019-06-10 23:59:59",
                            "effectStime": "2019-05-10 00:00:00",
                            "hasBusinessunitRange": 0,//指定事业部数量
                            "hasExcludeProductunitRange": 0,
                            "hasProductunitRange": 0,//指定产品数量
                            "id": 436,
                            "limitNum": 0,//领取规则: 最大1-仅领一次, 0-用完再领
                            "marketSpecialSkip": {//活动跳转
                                "extra": "4777",//PRODUCT 产品ID，H5存入H5页面链接
                                "id": 17,
                                "marketId": 436,//活动id
                                "type": "PRODUCT"//类型  PRODUCT, H5
                            },
                            "name": "111",//活动名称
                            "overdue": 0,
                            "popupPic": "",
                            "remark": "",
                            "saOrderIds": null,
                            "type": "SPECIAL",//活动类型 COUPON领券 GIFT满赠 REDUCE满减 DISCOUNT满折 COLUMN专栏 SPECIAL专题
                            "unit": ""//执行单位 PRICE 价格，COUNT 数量
                    },
                    "marketId": 436,
                    "modifyTime": "",
                    "name": "胖胖的页",
                    "productBusinessTypepArray": null,
                    "type": "ROWUP"
                }
            ],
            "H5": [
            {
                "businesstypeRange": "PART",//业态范围 ALL 全部业态 PART 部分
                "createRole": 0,
                "createTime": "2019-05-05 14:14:46",//创建时间
                "createUser": 0,
                "createUsername": "孙启萌",//创建人
                "deleteFlg": 0,
                "extra": "12,10",
                "id": 99,
                "image": "http://www.163.com",//链接地址
                "length": "12",//长度
                "market": null,
                "marketId": 0,
                "modifyTime": "",
                "name": "测试H5广告1",//名称
                "productBusinessTypepArray": null,
                "sort": 3,//排序
                "type": "H5",//广告类型  BANNER 轮播位 ROWUP横上 ROWDOWN 横下 COLUMN 竖广告   H5
                "width": "10"//宽度
            }
          ]
        }
    }
### APP-50. app端查询广告位详情数据
#### 模块负责人
    王子悦
#### 请求
    GET router/v5/market/marketAdvertisement/{id}
#### 参数    
    id //广告位id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "businesstypeRange": "PART",//业态范围 ALL 全部业态 PART 部分
            "createRole": 1,
            "createTime": "2019-03-26 10:29:21",//创建时间
            "createUser": 518,
            "createUsername": "孙启萌",//创建人
            "deleteFlg": 1,
            "id": 60,
            "image": "http://beijing.aliyuncs.com/businesstype/w02.png",//广告图片
            "market": {//关联活动信息
                            "accumulative": "",//LADDER 阶梯, EACH: 每满
                            "activeConditionId": 0,
                            "bannerPic": "",
                            "couponConditionId": 0,
                            "createTime": "2019-05-08 00:59:24",
                            "createUser": 518,
                            "createUserName": "孙启萌",
                            "customerRange": "ALL",
                            "deleteFlg": 0,
                            "detailPic": null,
                            "effectEtime": "2019-06-10 23:59:59",
                            "effectStime": "2019-05-10 00:00:00",
                            "hasBusinessunitRange": 0,//指定事业部数量
                            "hasExcludeProductunitRange": 0,
                            "hasProductunitRange": 0,//指定产品数量
                            "id": 436,
                            "limitNum": 0,//领取规则: 最大1-仅领一次, 0-用完再领
                            "marketSpecialSkip": {//活动跳转
                                "extra": "4777",//PRODUCT 产品ID，H5存入H5页面链接
                                "id": 17,
                                "marketId": 436,//活动id
                                "type": "PRODUCT"//类型  PRODUCT, H5
                            },
                            "name": "111",//活动名称
                            "overdue": 0,
                            "popupPic": "",
                            "remark": "",
                            "saOrderIds": null,
                            "type": "SPECIAL",//活动类型 COUPON领券 GIFT满赠 REDUCE满减 DISCOUNT满折 COLUMN专栏 SPECIAL专题
                            "unit": ""//执行单位 PRICE 价格，COUNT 数量
                },
            "marketId": 5,
            "modifyTime": "2019-03-26 10:29:21",
            "name": "测试广告位7",//广告名称
            "productBusinessTypepArray": null,
            "type": "BANNER"//BANNER 轮播位 ROWUP横上 ROWDOWN 横下 COLUMN 竖广告
        }
    }

    //H5类型广告位返回值
    {
        "code": 100000,
        "msg": "",
        "data": {
            "businesstypeRange": "PART",//业态范围 ALL 全部业态 PART 部分
            "createRole": 0,
            "createTime": "2019-05-05 14:14:46",//创建时间
            "createUser": 0,
            "createUsername": "孙启萌",//创建人
            "deleteFlg": 0,
            "extra": "12,10",
            "id": 99,
            "image": "http://www.163.com",//链接地址
            "length": "12",//长度
            "market": null,
            "marketId": 0,
            "modifyTime": "",
            "name": "测试H5广告1",//名称
            "productBusinessTypepArray": null,
            "sort": 3,//排序
            "type": "H5",//类型  BANNER 轮播位 ROWUP横上 ROWDOWN 横下 COLUMN 竖广告   H5
            "width": "10"//宽度
        }
    }

### APP-51. app端查询热搜列表数据
#### 模块负责人
    王子悦
#### 请求
    GET router/v5/product/productKeywords/{businesstypeId}
#### 参数    
    businesstypeId //业态id，例如16  34  44   95
#### 响应    
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "businesstypeRange": "ALL", //业态范围 ALL 全部业态 PART 部分
                "createRole": 0,
                "createTime": "2019-03-27 17:38:42",//创建时间
                "createUser": 0,
                "createUsername": "孙启萌",//创建人
                "deleteFlg": 0,
                "id": 16,
                "keyword": "1232",//热搜词
                "market": null,
                "modifyTime": "",
                "product": null,
                "productBusinessTypepArray": [//关联业态集合
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
                "relateInfo": "2132",//关联信息 QUERY：模糊搜索词， DETAIL 产品ID， MARKET 营销ID
                "type": "QUERY"//热词跳转类型 QUERY 模糊搜索， DETAIL 产品明细， MARKET 活动页
            }
        ]
    }
### APP-52. app端查询热搜详情数据
#### 模块负责人
    王子悦
#### 请求
    GET router/v5/market/marketAdvertisement/{id}
#### 参数    
    id //热搜信息id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "businesstypeRange": "PART",//业态范围 ALL 全部业态 PART 部分
            "createRole": 1,
            "createTime": "2019-03-25 13:18:19",//创建时间
            "createUser": 518,
            "createUsername": "孙启萌",//创建人
            "deleteFlg": 0,
            "id": 7,
            "keyword": "本季热卖鞋品3",//热搜词
            "market": {//关联活动信息
                "bannerPic": "",
                "createTime": "2018-03-13 14:00:12",
                "createUser": 101,
                "createUserName": "樊嘉辉",
                "customerRange": "NEW",
                "deleteFlg": 0,
                "effectEtime": "2018-04-30 23:59:59",//活动结束时间
                "effectStime": "2018-03-01 00:00:00",//活动开始时间
                "id": 5,
                "name": "新用户满减活动",//活动名称
                "overdue": 0,
                "remark": "",
                "type": "COUPON"//活动类型 COUPON领券 GIFT满赠 REDUCE满减 DISCOUNT满折 COLUMN专栏 SPECIAL专题
            },
            "modifyTime": "2019-03-25 13:18:19",
            "product": null,
            "productBusinessTypepArray": [
                {
                    "code": "-34-",
                    "deleteFlg": 0,
                    "gIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/g05.png",
                    "hasProductCnt": 0,
                    "id": 34,
                    "level": 1,
                    "mIcon": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190325174910768-2729.png",
                    "miniFlg": 1,
                    "name": "农贸市集",
                    "parentId": 0,
                    "parentName": "",
                    "pyCode": "NMSJ",
                    "sIcon": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190325174905224-8581.png",
                    "showFlg": 1,
                    "styleUrl": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190325174918199-5987.jpg",
                    "wIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/w05.png"
                }
            ],
            "relateInfo": "5",//关联信息 QUERY：模糊搜索词， DETAIL 产品ID， MARKET 营销ID
            "type": "MARKET"//热词跳转类型 QUERY 模糊搜索， DETAIL 产品明细， MARKET 活动页
        }
    }

### APP-53 获取活动信息
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/market/{marketId}
#### 参数
    *marketId: 1 //活动ID
    customerId: 32580 // 客户ID
    businessTypeId: 16 // 业态ID
    @@contactId: 1 // 收货地址ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "accumulative": "",
            "activeConditionId": 0,
            "bannerPic": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190323111436521-8883.jpg",
            "couponConditionId": 0,
            "detailPic": [
                {
                    "id":1,
                    "marketId":2,
                    "type":"BANNER",  // BANNER 图 POPUP 弹屏图 DETAIL 明细图    
                    "position": "TOP",  // 图片位置 'NOLIMIT', 'TOP', 'MIDDLE', 'BOTTOM'
                    "picUrl":"http://asae.oss-cn-beijing.aliyuncs.com/ANET20190323111436521-8883.jpg"
                }
            ],
            "effectEtime": "2020-04-30 23:59:59",
            "effectStime": "2019-03-23 00:00:00",
            "hasBusinessunitRange": 1,
            "hasExcludeProductunitRange": 0,
            "hasProductunitRange": 10,
            "id": 253,
            "limitNum": 0,
            "name": "专栏001",
            "popupPic": "",
            "productunit": [
                        {
                            "createTime": "",
                            "cubage": 28773,
                            "grossweight": 8.104,
                            "guige": "756g/盒*9盒",
                            "height": 21.5,
                            "id": 36,
                            "length": 49.2,
                            "marketActive": [                   // 活动
                                {
                                    "accumulative": "EACH",   // LADDER 阶梯 EACH 每满
                                    "giveCondition": [
                                        {
                                            "actionValue": 1,       // 减 折 赠
                                            "extra": "",
                                            "guige": "",            // 赠品规格
                                            "id": 198,
                                            "marketId": 267,
                                            "pno": "",              // 赠品pno
                                            "productName": "",      // 赠品名
                                            "shiftFlg": 0,
                                            "shiftType": "EACH", 
                                            "targetValue": 1        // 满
                                        }
                                    ],
                                    "marketId": 267,            // 活动ID
                                    "marketName": "减",          // 活动名
                                    "marketType": "REDUCE",     // 活动类型 GIFT 满赠 REDUCE 满减 DISCOUNT 满折
                                    "remark": "",               // 活动说明
                                    "unit": "PRICE"             // PRICE 金额 COUNT 数量
                                }
                            ],
                            "minimum": 0,
                            "minimumType": "NONE",
                            "modifyTime": "",
                            "netweight": 6.8,
                            "perunit": 9,
                            "price": {                          // 价格
                                "aPrice": 459,
                                "areaPrice": 0,
                                "decideType": "A",              // 价格类型
                                "finallyPrice": 459,            // 最终价格
                                "pPrice": 344,
                                "productUnitId": 36,
                                "rate": 0,
                                "rawFlg": "NO",
                                "signPrice": 0,
                                "specialPrice": 0
                            },
                            "product": {
                                "customFlg": 0,
                                "customFlgMore": 0,                // 定制 0 非定制  1 普通定制  2 专属定制
                                "id": 17,
                                "longName": "黄金蟹宝（A），完整蟹壳为底，鳕蟹肉嵌入其中，香酥入味。",
                                "mainBgImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201502/03/1422929379-GttZ.jpg@!app-s",
                                "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201804/6a4d88ee11383bdaa031b430c673823b.jpg@!app-s",
                                "name": "黄金蟹宝A（裹屑模拟蟹肉）",
                                "myFollowFlg":"YES",    //我常购标识  YES  NO
                                "newHotFlg": "NEW",                 // NEW 新品 HOT 热销
                                "nowfuture": "",
                                "pno": "N0.0022",
                                "productLack": {                    // 断货
                                    "endTime": "2019-03-31",
                                    "productId": 17,
                                    "startTime": "2019-03-30"
                                },,
                                "status": "NORMAL"
                            },
                            "productCart": null,
                            "productId": 17,
                            "stock": {                          // 库存
                                "amount": 135,
                                "productId": 17
                            },
                            "unit": "件",
                            "unitId": 3,
                            "width": 27.2
                        }
            "productunitIds": "2,8,12,14,20,22,28,32,34,36",
            "type": "COLUMN",
            "unit": ""
        }
    }


### APP-54 用户登录信息
#### 模块负责人
    王子悦
#### 请求
    POST /router/v5/app/applog
#### 参数
    {
        "customerId":"35133",//(必填)客户ID
        "deviceNo":"7878ASDFSDF78S78F90S90DFS9DF",//（必填）设备号
        "phoneModel":"P20",//手机型号
        "wifiName":"TESTWIFI",//wifi名
        "osVersion":"android7",//设备系统版本
        "appVersion":"5.2"//app版本
    }
#### 响应
    {"code":100000,"msg":"","data":null}

### APP-55 获取升级版本信息
#### 模块负责人
    王子悦
#### 请求
    GET /router/v5/app/appversion
#### 参数
    osType //设备类型：ANDROID 安卓  IOS  苹果
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "createTime": "2019-04-03 15:39:50",//创建时间
            "deleteFlg": "0",//删除状态 0 未删除 1 删除
            "forceFlg": "0",//强制更新标记 0 不强制 1 强制
            "id": 5,
            "message": "测试更新信息",//更新信息
            "osType": "ANDROID",//设备类型：ANDROID 安卓  IOS  苹果
            "url": "testurl",//更新URL
            "version": "5.2",//更新版本
            "versionCode": "121"//更新版本Code
        }
    }

### APP-56 插屏日志新建
#### 模块负责人
    王子悦
#### 请求
    POST /router/v5/market/popup/log
#### 参数
    {
	"popupId":"5",//插屏id
	"customerId":"32932",//用户customer_id
	"action":"CLICK",//动作  CLICK 点击  CLOSE 关闭
	"type":"H5" //展示渠道  H5  ANDROID   IOS
    }
#### 响应
    {"code":100000,"msg":"","data":null}

### APP-57 插屏根据用户操作返回用户信息
#### 模块负责人
    王子悦
#### 请求
    GET /router/v5/market/popup/customer/{id}   //用户customer_id
#### 参数
    无
#### 逻辑
    1插屏优先级最高
    2插屏状态要是【上线】
    3.当前时间要符合插屏的起止日期
    4插屏关联的活动必须是有效的（delete-flg=0   并且    活动结束时间大于当前时间）
    5用户click操作过的插屏，不再推给用户；如果是close，下次还返回给用户
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": {
            "createRole": 0,
            "createTime": "2019-04-12 09:51:29",//插屏创建时间
            "createUser": 0,
            "createUsername": "孙启萌",//插屏创建人
            "effectEtime": "2019-04-27",//插屏结束日期
            "effectStime": "2019-03-10",//插屏开始日期
            "id": 5,
            "market": {//关联活动信息
                "bannerPic": "",
                "createTime": "2019-04-12 08:56:43",//活动创建时间
                "createUser": 518,
                "createUserName": "孙启萌",//活动创建人
                "customerRange": "ALL",
                "deleteFlg": 0,
                "effectEtime": "2019-05-22 23:59:59",//活动结束时间
                "effectStime": "2019-05-07 00:00:00",//活动开始时间
                "id": 339,
                "name": "4",//活动名称
                "overdue": 0,
                "remark": "",
                "type": "GIFT"//活动类型 COUPON领券 GIFT满赠 REDUCE满减 DISCOUNT满折 COLUMN专栏 SPECIAL专题
            },
            "marketId": 339,
            "name": "测试插屏信息7",//插屏名称
            "popupImgUrl": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190401184936072-7658.jpg",//插屏图片
            "showEtime": "17:55",//插屏生效结束时间
            "showStime": "06:31",//插屏生效开始时间
            "sort": 1,//优先级
            "status": "NORMAL"//插屏状态 NORMAL  正常    LOCK   下线     INVALID   失效  如果有效结束时间小于当前时间，状态显示为失效
        }
    }
    

### APP-58. 批量删除常订购
#### 模块负责人
    尹洪明
#### 请求
    POST /router/v5/product/follow/batch
#### 参数
    {
        "customerId":123,
        "productIds":[
            1,
            2,
            3
        ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data":null
    }
    
### APP-100 获取验证码(注册)
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/auth/getVerifyCodeRegister
#### 参数
    *loginName: "xxx" //登录手机号
    verifyType: "sms" // 验证方式 sms 短信 voice 语音   默认 sms
#### 响应
    {
        "code": "100000",
        "msg": "",
        "data": null
    }
    
### APP-101 验证码校验
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/auth/checkVerifyCode
#### 参数
    *mobile: "xxx" //登录手机号
    *verifyCode: "2389" // 验证码
#### 响应
    {
        "code": "100000",
        "msg": "",
        "data": null
    }   
    
    
### APP-102 客户名校验
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/auth/checkCustomerExist
#### 参数
    *customerName: "xxx" //客户名
#### 响应
    {
        "code": "100000",
        "msg": "",
        "data": null
    }        
    
### APP-103 营业执照&税务登记证识别
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/auth/ocr/license
#### 参数
    *url: "xxx"
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "companyName": "****",  // 商家名
            "legalName": "***",     // 法人
            "regNum": "***"         // 营业执照号&税务登记证号
        }
    } 
    
### APP-104 身份证识别
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/auth/ocr/card
#### 参数
    *url: "xxx"
    *side: "face" // face 正面  back 背面
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "name": "***",
            "num": "***"
        }
    }      
    
    
### APP-105 注册
#### 模块负责人
    尹洪明
#### 请求
    POST /router/v5/wx/register
#### 参数
    {
        "loginName":"18698665798",      // 登录手机号
        "password":"111111",            // 密码
        "ssName":"6",                 // 邀请码id
        "registerType":"COMPANY",       // 注册类型 COMPANY 企业 PERSON 个人
        "customerPerson":{              // 个人信息
            "name":"火云邪神",      // 客户名
            "invoiceType":"NORMAL", // 发票类型 NORMAL 普票 SPECIAL 专票
            "cardFrontUrl":"http://asae.oss-cn-beijing.aliyuncs.com/ANET20190319111140282-6832.jpg", // 身份证人像面
            "cardBackUrl":"http://asae.oss-cn-beijing.aliyuncs.com/ANET20190319111140282-6832.jpg", // 身份证国徽面
            "cardNo":"271002198101053026"       // 身份证号
        },
        "customerCompany":{         // 企业信息
            "companyName":"摩加迪沙有限公司",   // 客户名
            "legalName":"么桑卡",              // 法人
            "invoiceType":"SPECIAL",            // 发票类型  NORMAL 普票 SPECIAL 专票
            "licenseUrl":"http://asae.oss-cn-beijing.aliyuncs.com/ANET20190316151543251-2481.jpg", // 营业执照url
            "licenseCode":"91510700MA64A4YM3K",     // 统一社会信用代码
            "taxUrl":"http://asae.oss-cn-beijing.aliyuncs.com/ANET20190415140912162-2159.jpeg", // 税务登记证url
            "taxCode":"370983743371849"             // 税务登记证号
        },
        "customerContact":{
            "name":"王颖",                // 联系人名
            "mobile":"18698665798",     // 联系人手机号
            "areapathid":"060202",      // 联系人省市县
            "address":"香炉礁五金几点大厦"   // 联系人详细地址
        }
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "customerId": 32950,
            "token": "eyJhbGciOiJIUzUxMiJ9.eyJ1aWQiOiItMSIsImdpZCI6Ii0xIiwicmlkcyI6Ii0xIiwiY3JlYXRlX3RpbWUiOiIyMDE5LTA0LTE4IDA5OjE1OjI5IiwicGlkIjoiMSIsInJpZCI6Ii0xIn0.Bvl8NW79rTjf07Lim7Im0l0RJd6kdUAEmsXLgaFdrADuEMOcvopSncVL-4r7ZxnfnKhRFD3xYM3hWqORINlQyQ"
        }
    } 
      
      
    
### APP-106 验证码登录
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/auth/verifyCodeLogin
#### 参数
    *loginName  // 登录名
    *verifyCode // 验证码
    *ipAddress  // ip地址
    *cartId     // 设备号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "customerId": 32950,
            "token": "eyJhbGciOiJIUzUxMiJ9.eyJ1aWQiOiItMSIsImdpZCI6Ii0xIiwicmlkcyI6Ii0xIiwiY3JlYXRlX3RpbWUiOiIyMDE5LTA0LTE4IDA5OjE1OjI5IiwicGlkIjoiMSIsInJpZCI6Ii0xIn0.Bvl8NW79rTjf07Lim7Im0l0RJd6kdUAEmsXLgaFdrADuEMOcvopSncVL-4r7ZxnfnKhRFD3xYM3hWqORINlQyQ"
        }
    }      
    
### APP-107 获取openId
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/wx/code2session
#### 参数
    *code  // 微信code
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "openId": "aw2309asflk1287435r89dfshjklhdfgs"
        }
    }

    
### APP-108 校验手机号或设备号是否注册绑定
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/wx/checkRegister
#### 参数
    *mobile  // 手机号
    *code // wx code
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "hasBind": false,       // ture 已绑定  false 未绑定
            "mobile": "xxx" // 手机号
            "officalOpenId": "34857397593475982345729",  // openId
            "accessToken":"90234582093485891235792",    // accessToken
            "nickName": "xxx" // 昵称
        }
    }
    
### APP-109 微信绑定登录
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/wx/wxLogin
#### 参数
    *loginName  // 登录号
    password // 密码
    *ipAddress  // ip地址
    *cartId     // 设备号
    officalOpenId   // openId   绑定时需要
    accessToken     // accessToken 绑定时需要
    encryptFlg: 1       // 0 非加密密码登录  1 加密密码登录     默认0
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "customerId": 32950,
            "token": "eyJhbGciOiJIUzUxMiJ9.eyJ1aWQiOiItMSIsImdpZCI6Ii0xIiwicmlkcyI6Ii0xIiwiY3JlYXRlX3RpbWUiOiIyMDE5LTA0LTE4IDEwOjMyOjMwIiwicGlkIjoiMSIsInJpZCI6Ii0xIn0.8wvL81Yga45XwKrZ2P1JrPkZtmlYVRj8pomPsZjiHT8AYO2aeuoKE0am1Xnl8emCq0Wqr94ydCGbDHuYSE8jJg"
            "superPwd": true        // 是否使用的超级密码登录
        }
    } 


### APP-110. 图片上传OSS
#### 模块负责人
    刘宏宇  
#### 请求
    POST /router/v5/common/upload
#### 参数
    用form-data方式上传多个文件
#### 返回
    {
        "code": 100000,
        "msg": "",
        "data": {
            "1": "http://asae.oss-cn-beijing.aliyuncs.com/20180910145054951-timg.jpg", //返回的上传文件 key 是上传时名称，value是oss上传后名称
            "2": "http://asae.oss-cn-beijing.aliyuncs.com/20180910145106937-timg.jpg"
        }
    }

### APP-111. 微信绑定
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/wx/binding
#### 参数
    *customerId     // 客户ID
    *code             // 微信授权码
    type               // OFFICALOPEN  微信绑定 MICROOPEN 小程序绑定 默认为OFFICALOPEN
#### 返回
    {
        "code": 100000,
        "msg": "",
        "data": {
            "nickName":"***",       // 微信昵称
            "headImgUrl":"***"      // 微信头像
        }
    }

### APP-112. 微信解绑
#### 模块负责人
    尹洪明
#### 请求
    DELETE /router/v5/wx/unbinding
#### 参数
    *customerId     // 客户ID
    type               // OFFICALOPEN  微信绑定 MICROOPEN 小程序绑定 默认为OFFICALOPEN
#### 返回
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### APP-113. 微信绑定信息
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/wx/bindInfo
#### 参数
    *customerId     // 客户ID
#### 返回
    {
        "code": 100000,
        "msg": "",
        "data": {
            "nickName":"***",       // 微信昵称
            "headImgUrl":"***"      // 微信头像
        }
    }
### APP-150. 发票信息查询接口
#### 模块负责人
    刘宏宇
#### 请求
    GET /router/v5/invoice/info
#### 参数
    *customerId: 1 // 客户ID

#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "actionType": "AUTO",       //开票类型      AUTO 自动 HANDWORK 手工
            "authenNo": "21893745891",  //第三方系统编号             
            "change": false,
            "checkRole": 0,
            "checkTime": "",
            "checkUser": 0,
            "checkUserName": "",
            "contactName": "梁铁骐",        //联系人
            "createRole": 0,
            "createTime": "2018-10-23",
            "createUser": 0,
            "createUserName": "庄园园",
            "customerId": 29841,                    //客户id
            "customerName": "孙健-泊头",            //客户名称
            "customerType": "COMPANY",              //公司类型  COMPANY 公司 INDIVIDUALLY 个体工商 PERSON 个人
            "deleteFlg": 0,
            "deliverAddress": "河北省秦皇岛昌黎县test", //邮寄地址
            "email": "liang.qitie@god.com",     //邮箱
            "id": 1,                                //发票id
            "invoiceCompanyId": 1,                  //开票公司id
            "invoiceInfoCompany": {
                "address": "河北省秦皇岛昌黎县test",        //公司地址
                "bankName": "中国工商银行",                 //开户行
                "bankNo": "6214888899996666",               //银行账号
                "deleteFlg": 0,
                "id": 1,
                "invoiceId": 1,
                "legalPerson": "liang.qitie",               //法人
                "mobile": "13356565656",                    //公司电话
                "name": "心有猛虎，细嗅蔷薇，他人勿动",         //发票名称
                "taxCode": "23458939458927"                 //税收编号
            },
            // 'CARD_FRONT' 身份证正面,'CARD_BACK' 身份证背面,'NOTICE' 变更附件, 'BUSINESS' 营业执照 'TAX' 税务证明
            "invoiceInfoImgs": [{
                            *"type":"INVOICEDATA",   // 开票资料
                            *"imgUrl":"http://omgzp8h38.bkt.clouddn.com/Fpye2K9ygMMiLKwCDFE3xYA4z927" 
                        },{
                            *"type":"APPLICATION",  //一般纳税人申请表
                            *"imgUrl":"http://omgzp8h38.bkt.clouddn.com/Fpye2K9ygMMiLKwCDFE3xYA4z927" 
                        },{
                            *"type":"NOTICE",  //工商变更通知
                            *"imgUrl":"http://omgzp8h38.bkt.clouddn.com/Fpye2K9ygMMiLKwCDFE3xYA4z927"
                        }],
            "invoiceInfoPerson": {
                "id":1,
                "invoiceId":1,
                "name":"梁铁骐",                            //发票名称
                "cardNo":"239124199012121345",              //身份证号
                "deleteFlg":0
            },
            "invoiceType": "NORMAL",        //发票类型：NORMAL 普票 SPECIAL 专票
            "mobile": "13356565656",    //联系人电话
            "modifyTime": "",
            "rollbackId": 0,
            "status":"NORMAL" // EMPTY 待维护 ASKFOR 待审核 NORMAL 审核通过
        }
    }

### APP-151. 发票信息维护
#### 模块负责人
    刘宏宇  
#### 请求
    PUT /router/v5/invoice/info/{id}

#### 参数
    *id //发票id
    // json body    invoiceInfo 必须有，invoiceInfoCompany和invoiceInfoPerson根据客户类型 企业、个体商户、个人选择传递
    {
        "change":true,                              // true 变更 false 维护
        "invoiceInfo": {
            *"customerType": "COMPANY",              // 公司类型： COMPANY 公司 INDIVIDUALLY 个体工商 PERSON 个人
            *"authenNo": "21983712398453245978MM",   // 第三方认证号
            *"invoiceCompanyId": 3,                  // 开具方公司名头ID
            *"invoiceType": "SPECIAL",               // 发票类型：NORMAL 普票 SPECIAL 专票
            *"deliverAddress": "香炉礁物流商贸大厦",     // 邮寄地址
            "email": "liang.qitie@yahoo.cn",        // 邮箱
            "contactName": "liang.qitie",               // 联系人
            "mobile": "16888889999"                 // 手机号
        },
        "invoiceInfoCompany": {
            *"name":"心有猛虎，细嗅蔷薇，他人勿动",      // 发票名
            *"taxCode":"234752934758sadk",           // 纳税人识别码
            "address":"河北秦皇岛。。。",               // 地址
            "mobile":"16788883333",                 // 手机号
            "bankName":"中国农业银行",                  // 开户行
            "bankNo":"62148888373737372723",            // 银行账户
            *"legalPerson":"梁总"                        // 法人
        },
        "invoiceInfoPerson": {
            *"name":"梁总",                              // 发票名
            *"cardNo":"125255199012093211"               // 身份证号
        },
        // 图片新增类型  'CARD_FRONT' 身份证正面,'CARD_BACK' 身份证背面,'NOTICE' 变更附件, 'BUSINESS' 营业执照 'TAX' 税务证明
        "invoiceInfoImgs": [{
                            "type":"INVOICEDATA",   // 开票资料
                            "imgUrl":"http://omgzp8h38.bkt.clouddn.com/Fpye2K9ygMMiLKwCDFE3xYA4z927" 
                        },{
                            *"type":"APPLICATION",  //一般纳税人申请表
                            *"imgUrl":"http://omgzp8h38.bkt.clouddn.com/Fpye2K9ygMMiLKwCDFE3xYA4z927" 
                        },{
                            *"type":"NOTICE",  //工商变更通知
                            *"imgUrl":"http://omgzp8h38.bkt.clouddn.com/Fpye2K9ygMMiLKwCDFE3xYA4z927"
                        }]
    }    
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }    


### APP-152. 发票信息修改
#### 模块负责人
    刘宏宇
#### 请求
    PUT /router/v5/invoice/info/lite/{id}
#### 参数
    *id //发票id
    // json body
    {
        "invoiceCompanyId":1,                                   // 所属企业id
        "deliverAddress": "香炉礁物流商贸大厦3333",                 //邮寄地址
        "email": "liang.qitieTTTT@yahoo.cn",                        //邮箱
        "contactName": "liang.qitieASDFASDFASDFASD",                //联系人
        "mobile": "16888889999425345",                                 //联系人手机
            //以下四项是 企业或个体商户信息，客户类型为个人的，无此信息
        "address": "河北秦皇岛新力大街闪客快打抗衰老的浪费了。。。",
        "tel": "16788883333",
        "bankName": "中国农业银行大连香炉礁分行",
        "bankNo": "62148888373737372723",
        "legalPerson":"凉凉"
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    } 

### APP-153. 高德adCode转pathId
#### 模块负责人
    刘宏宇
#### 请求
    GET /router/v5/common/adCode2pathId
#### 参数
    *adCode:"xxx"
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "adcode": "110000",
            "amap": "116.405285,39.904989",
            "areaName": "北京", //  区域名
            "children": null,
            "id": 2,
            "parentId": 0,
            "pathid": "01",
            "pycode": "BJ",
            "zipcode": "0"
        }
    }

### APP-154. 获取银行账户信息
#### 模块负责人
    刘宏宇
#### 请求
    GET /router/v5/app/payAccount
#### 参数
    无
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "accountBank": "中国建设银行大连沙河口支行", // 开户行
                "accountName": "亚洲渔港股份有限公司", // 账户名
                "accountNo": "2120 1500 4000 5300 8645" // 账户
            },
            {
                "accountBank": "中国农业银行大连长兴支行",
                "accountName": "亚洲渔港股份有限公司",
                "accountNo": "3426 2001 0400 30059"
            },
            {
                "accountBank": "工商银行大连香炉礁物流园区支行",
                "accountName": "亚洲渔港股份有限公司",
                "accountNo": "3400 0022 1930 0001 411"
            }
        ]
    }

### APP-155. 销售订单-订单确认发EMAIL
#### 模块负责人
    梁铁骐
#### 请求
    GET /router/v5/order/{customerId}/email
#### 参数
    *customerId: 客户id,
    *orderId: 'SA19000001' // 单号
    *email:'xxx@qq.com' // email
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### APP-156. 销售订单-确认单导出
#### 模块负责人
    梁铁骐
#### 请求
    GET /router/v5/order/{customerId}/export/single
#### 参数
    *customerId: 客户id,
    *orderId: 'SA19000001' // 单号
#### 响应  
    stream
    
    
### APP-157. 微信消息推送
#### 模块负责人
    尹洪明
#### 请求
    GET /router/v5/wx/app/sendmessage
#### 参数
    *openId
    *scene
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
    
### APP-160. 微信app预支付
#### 模块负责人
    尹洪明
#### 请求
    POST /router/v5/finance/pay/wx/prepay
#### 参数
    {
        *"serialSid": "scm20190719010018",   // 支付策略ID
        *"totalFee": "102.36",              // 客户需要支付的费用（元）
        *"spbillCreateIp": "14.23.150.211"  // 支付客户端机器ip
    }
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": {
            "appid": "wxd15f69fcf1f3a388",  // 应用ID        
            "nonceStr": "lRzhLLF7lEkspWeu", // 随机码
            "partnerid": "1484184462",  // 商户ID
            "prepayid": "wx0710134866367916e23c0bbd1304363800", // 预支付交易单号
            "sign": "39184C61D7E4246A6DCA5AD3D88995F2", // 签名
            "timeStamp": "1565144028678"    // 签名
        }
    }

### APP-161. 支付管理-移动端生成SA单支付策略
#### 模块负责人
    王子悦
#### 请求
    GET /router/v5/finance/pay
#### 参数
    *orderId // sa单id
    *opAccount // 用户id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "canBalanceMoney": 50,
            "canDebtMoney": 0,
            "depositMoney": 449.94,//订金使用金额
            "financePayDepositStrategys": [//订金使用信息
                {
                    "balanceId": 32786,//订金id
                    "depositMoney": 37.62,//某个产品使用订金金额
                    "depositSerialsid": "15645424660100000000000000000001",//订金流水号
                    "id": 236,
                    "orderSerialsid": "15645424660100000000000000000009"//订单流水号
                }
            ],
            "fromTransferSerialsid": "15645424660100000000000000000006",//总公司代付流水号
             "hadPayMoney": 295,//余额金额：用户账户已支付金额，总公司代付+子公司账余+子公司账期
            "id": 40,
            "opAccount": 33303,//用户id
            "orderId": "SA19071100003",//订单id
            "orderMoney": 1024.4,//订单需支付金额
            "orderSerialsid": "15645424660100000000000000000009",//订单流水
            "payMoney": 404.46000000000004,//app端需支付金额
            "paySerialsid": "15645424660100000000000000000008",//app支付流水号
            "rebateMoney": 0,
            "rebateSerialsid": "",
            "toTransferSerialsid": "15645424660100000000000000000007",//子公司接收总公司代付流水号
            "transferFromMoney": 120,
            "transferMoney": 120,//代付金额
            "transferToMoney": 120,
            "unAssignMoney": 404.46000000000004,
            "useBalanceMoney": 50,//账户使用余额的金额
            "useDebtMoney": 0//账户使用账期的金额
        }
    }
### APP-162. 支付管理-移动端直接支付,不允许补款
#### 模块负责人
    王子悦
#### 请求
    GET /router/v5/finance/pay/app
    备注：此接口需要传token
#### 参数
    *orderSerialSid // 订单流水号
#### 响应
    {"code":100000,"msg":"","data":null}
    
### APP-163. app支付宝预支付
#### 模块负责人
    梁铁骐
#### 请求
    POST /router/v5/finance/pay/ali/prepay
#### 参数
    {
        *"serialSid": "scm20190719010018",   // 支付策略ID
        *"totalFee": "102.36",              // 客户需要支付的费用（元）
    }
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": "902734584hewrt9q2384y" // orderString
    }

### APP-163. 新老支付过渡跳转接口（wx）
#### 模块负责人
    王子悦
#### 请求
    POST /wxpay/pay/index.php
#### 参数
    *customer_id: 1 // 客户ID
    *ip: 'xxx' // IP
    *order_id: 'xxx' // 订单ID
    *order_price: 0.01 // 订单价格
    *price: 0.01 // 
    *uid: 1 // uid
#### 响应
    {
      "code":100000,
      "msg":"",
      "data":{
        "prepayId":"xxx",
        "partnerId": "xxx",
        "nonceStr": "xxx",
        "sign": "xxx",
        "timeStamp": "xxx"
      }
    }
    
### APP-164. 新老支付过度接口（alipay）
#### 模块负责人
    王子悦
#### 请求
    POST /alipay/alipay.php
#### 参数
    *customer_id: 1 // 客户ID
    *ip: 'xxx' // IP
    *order_id: 'xxx' // 订单ID
    *order_price: 0.01 // 订单价格
    *price: 0.01 // 
    *uid: 1 // uid
#### 响应  
    string


### APP-165. 配仓接口
#### 模块负责人
    刘宏宇
#### 请求
    GET /router/v5/common/depot/match
#### 参数
    *pathId: '0201' // 区域pathId
#### 响应  
    {
      "code": 100000,
      "msg": "",
      "data": {
        "address": "天津市武清区大良镇新良道01号", // 地址
        "contactMobile": "18602694330", // 联系方式
        "contactName": "张慧鹏", // 联系人
        "id": 51, // 仓ID
        "lat": "39.543299", // 坐标
        "level": "DC", // 类型
        "lng": "117.100493", // 坐标
        "name": "DC（天津仓）ASA", // 仓名
        "pathId": "020114", // 所在区域pathId
        "pathName": "武清区天津市天津", // 区域地址
        "type": "SELF" // 仓类型
    }
  }


### APP-166. 销售订单-新增（APP端）
#### 模块负责人
    梁铁骐
#### 请求
    POST /router/v5/order
#### 参数
    {
    	"saOrder": {
    		*"customerId": 2434, // 客户id
    		*"receiveId": 17508, // 联系人id
    		*"tradefrom": "SYS", // 下单渠道 固定 APP
    		*"deliveryType": "DELIVERY", // 配送方式 DELIVERY：配送 SELF：自提
    		*"planSendTime": "2019-03-15", // 计划发货时间
    		"rebateId": 1, // 返利券id
    		"couponId": 1, // 优惠券id
    		"activeId": 1, // 活动id
    		"deviceNum" : "IUDSTYNERO-9065SD879EW4UIH78", // 设备号
    		"remark": "我的测试测试备注", // 订单备注
    	},
    	"saOrderPros": [ // 订单产品明细
    		{
    			*"productUnitId": 1, // 产品规格id
    			*"productId": 1, // 产品id
    			*"pcount": 10 // 数量
          "recommendId": 1 // 推荐ID
          "fromPage": "xx" // 来源页面
    		},
    		...
    	],
    	"saOrderExtra": {
            deviceInfo: 手机型号
            osVersion: 系统版本
            versionName: 软件版本
            providers: 运营商
            deviceNumber: 设备号
            wifiName: WIFI名称
            wifiMac: MAC地址
            ip: ip
    	}
    	*"onlyCode": 1123.9663 // 唯一码
    }
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": {
            "id": 123, // 订单主键id
            "orderId": "SA19000100002", // 订单号
            "totalprice": 10000 // 订单实际金额
        }
    }
    
### APP-167. 销售订单-获取“我的”订单列表（APP端）
#### 模块负责人
    梁铁骐
#### 请求
    GET /router/v5/order/{customerId}
#### 参数
    customerId: 客户id
    payFlg: 结款 0-未结款 1-结款
    status: 订单状态 INVALID:订单未生效,SET:提交物流中,RUN:订单生效,SEND:已发出,COMPLETE:已签收 
    pageNo: default 1
    pageSize: default 10
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": {
            "activeId": 0,
            "orderId": "SA1903140000034", // 订单号
            "orderSaPros": [
                {
                    "productUnit": {
                        "product": {
                            "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/ec90940549d364b0982427f87dd86747.jpg", // 产品图片
                            "name": "香草凤尾虾",
                            "pno": "0151",
                        },
                        "productId": 1,
                        "stock": null,
                        "unit": "盒",
                    }
                }
            ],
            "invoice": {
                "id": 5132, // 发票id
                "invoiceDoneTotal": 1, // 已完成的发票数量
                "invoiceTotal": 1 // 发票总数量
            },
            "payFlg": 0, // 0-未结款 1-结款
            "paymentType": "CASH", // CASH-先款后货 CREDIT-账余 DAOFU-货到付款
            "remark": "我的测试测试备注", // 备注
            "san": 20, // 散
            "sendTime": "", // 发货时间
            "status": "INVALID", // 订单状态 INVALID:订单未生效,SET:提交物流中,RUN:订单生效,SEND:已发出,COMPLETE:已签收 
            "totalprice": 7033, // 订单总价
        },
    }

### APP-168. 销售订单-“订单复购”订单列表（APP端）
#### 模块负责人
    梁铁骐
#### 请求
    GET /router/v5/order/{customerId}/search
#### 参数
    *customerId: 客户id
    *pathId: 区域编号
    productKeyword: 产品名称
    pageNo: default 1
    pageSize: default 10
#### 相应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "createTime": "2019-03-14 16:31:58", // 创建时间
            "orderId": "SA1903140000034-1", // 单号
            "orderSaPros": [
                {
                    "activeId": 0,
                    "afterAskPrice": 0,
                    "beforeAskPrice": 0,
                    "pcount": 5, // 数量
                    "price": 32.5, // 单价（原价）
                    "giftFlg": 0, // 0 - 正常品 1 - 赠品
                    "productId": 618, // 产品id
                    "productUnitId": 123, // 产品规格id
                    "productUnit": {
                        "guige": "500g(23-25枚）/盒", // 规格
                        "minimum": 0, // 最小起订量
                        "product": {
                            "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/ec90940549d364b0982427f87dd86747.jpg", // 产品图片url
                            "name": "香草凤尾虾", // 品名
                            "pno": "0151", // 品号
                        },
                        "unit": "盒", // 单位
                        "price": {
                            "aPrice": 40.12, //
                            "areaPrice": 0,
                            "decideType": "A", // 价格决定类型 T 特价, S 签约价, Q 区域价, A A价, P P价
                            "finallyPrice": 40.12, // 最终决定价格（现价）
                            "pPrice": 32.5, // P价格
                        },
                    },
                    "marketActives": [ // 活动信息
                        {
                            "accumulative": "EACH",
                            "giveCondition": [
                                {
                                    "actionValue": 1,
                                    "extra": "",
                                    "guige": "",
                                    "id": 198,
                                    "marketId": 267,
                                    "pno": "",
                                    "productName": "",
                                    "shiftFlg": 0,
                                    "shiftType": "EACH",
                                    "targetValue": 1
                                }
                            ],
                            "marketId": 267,
                            "marketName": "减",
                            "marketType": "REDUCE",
                            "remark": "",
                            "unit": "PRICE"
                        }                                            
                    ],
                }
            ],
            "totalprice": 152.5 // 总价
        }
    }

### APP-160. 销售订单-删除（APP端）
#### 模块负责人
    梁铁骐
#### 请求
    DELETE /router/v5/order/{orderId}
#### 参数
    orderId: 单号
#### 相应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### APP-170. 销售订单-确认签收（APP端）
#### 模块负责人
    梁铁骐
#### 请求
    PUT /router/v5/order/{orderId}/complete
#### 参数
    orderId: 单号
#### 相应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### APP-171.app产品推荐：根据产品获取权重最大的关联产品
#### 模块负责人
    王子悦
#### 请求
    GET  /router/v5/productrelation
#### 参数 
    *fromPage //推荐来源 homeList 首页推荐 typeList 分类列表 findList 搜索列表
    *pathId  //区域ID
    *contactId //收货地址ID
    *productId //主品id
    *customerId //客户id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "productVO": {
                "businessTypeIds": null,
                "businessTypes": [],
                "businessunit": [],
                "certType": "",
                "cookBookLites": null,
                "createTime": "2020-01-10 13:07:00",
                "custom": null,
                "customFlg": 1,
                "customFlgMore": 1,
                "customers": [],
                "deleteFlg": 0,
                "followFlg": 0,
                "id": 5006,
                "longName": "香酥鳕鱼（去头去脏）",
                "mainBgImg": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20200113091356073-2958.jpg@!app-s",
                "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20200116100821445-4235.jpg@!app-s",
                "marketActive": null,
                "myFollowFlg": "NO",
                "name": "香酥鳕鱼（去头去脏）",
                "newHotFlg": "",
                "nowFutureFlg": "",
                "pno": "M117",
                "process": 4,
                "processContent": 1,
                "processInvoice": 1,
                "processPrice": 1,
                "productAttrs": null,
                "productExtra": null,
                "productImgs": null,
                "productLack": null,
                "productSaleRange": null,
                "productUnits": [
                    {
                        "createTime": "2020-01-10 13:07:00",
                        "cubage": 1,
                        "grossweight": 3.5,
                        "guige": "3kg",
                        "height": 11,
                        "id": 8725,
                        "length": 34,
                        "marketActive": null,
                        "minimum": 0,
                        "minimumType": "NONE",
                        "modifyTime": "",
                        "netweight": 3,
                        "perunit": 1,
                        "price": {
                            "aPrice": 70,
                            "areaPrice": 0,
                            "decideType": "P",
                            "finallyPrice": 66,
                            "pPrice": 66,
                            "productUnitId": 8725,
                            "rate": 0.3,
                            "rawFlg": "YES",
                            "signPrice": 0,
                            "specialPrice": 0
                        },
                        "product": null,
                        "productCart": null,
                        "productId": 5006,
                        "stock": null,
                        "unit": "件",
                        "unitId": 3,
                        "width": 22
                    }
                ],
                "pyAll": "",
                "pyCode": "",
                "rangeType": "ALL",
                "relatePnos": null,
                "saleRange": "",
                "status": "NORMAL",
                "stock": {
                    "amount": 999999,
                    "amountJian": 0,
                    "amountSan": 0,
                    "normalAmount": 0,
                    "normalAmountJian": 0,
                    "normalAmountSan": 0,
                    "productId": 5006
                },
                "taxRate": 0
            },
            "recommendId": 1 //产品推荐关联关系id
        }
    }

### APP-172.app产品推荐：记录产品推荐日志
#### 模块负责人
    王子悦
#### 请求
    POST  /router/v5/productrelation
#### 参数 
    {
        "customerId":33660,//客户id
        "fromPage":"homeList",//推荐来源 homeList 首页推荐 typeList 分类列表 findList 搜索列表
        "recommendId":3//产品推荐关联id
    }
#### 响应
    {"code":100000,"msg":"","data":null}



### APP-181. 新品热销品标志
#### 模块负责人
    尹洪明
#### 请求
    GET  /router/v5/product/businessType/recommend/tag
#### 参数 
    *pathId         // 区域ID，与销区有关
    *businessTypeId // 一级分类ID
    customerId      // 客户ID，与定制品有关
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "recommend": [
                {
                    "businessTypeId": 16,
                    "tag": "HOT",
                    "tagName": "热销",
                    "tagUrl": "url待定"
                },
                {
                    "businessTypeId": 16,
                    "tag": "NEW",
                    "tagName": "新品",
                    "tagUrl": "url待定"
                }
            ]
        }
    }
> 注：recommend列表中存在的tagName，即代表有相关产品，没有相关产品的不会返回

### APP-182. 新品热销品列表
#### 模块负责人
    尹洪明
#### 请求
    GET  /router/v5/product/businessType/recommend
#### 参数 
    *pathId         // 区域ID，与销区有关
    *businessTypeId // 一级分类ID
    *tag            // HOT 热销品，NEW 新品
    *deviceNo=2jkl3-4h6-kj53-463455-36kl3   // 用于拼装购物车
    customerId      // 客户ID，与定制品有关
    contactId       // 客户联系人ID，与配仓有关
#### 响应
> 请参考APP-28
