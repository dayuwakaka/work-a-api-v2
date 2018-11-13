## 客户接口
### KH-1.客户列表
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/customer
#### 参数
    pageNo: 1 分页
    pageSize: 25 // 默认值
    keyword: "1" 客户名/登录帐号
    shortName: "1" 客户名
    accountMobile: "1" 登录帐号
    businessunit：1 事业部ID 
    ssRoleId：1 SSID
    srRoleId：1 SRID
    attrId：1 属性ID
    sCreateTime："2018-01-01 00:00:00" 创建时间（开始）
    eCreateTime："2018-01-01 23:59:59" 创建时间（结束）
    isParent: -1 查询客户类型 -1 所有 0 普通客户 1 总公司 2 分店 
    ignorePower: false 忽略权限标识，true为不限制任何权限查询客户
    states: ['NORMAL', 'DELETE'] NORMAL 正常 DELETE 休眠
    @@showAttr：是否显示客户属性 true 显示 false 不显示
    @@showInvoice：是否显示发票状态 true 显示 false 不显示
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "datas": [
                {
                    "accountId": "32856",  //登录帐号ID
                    "accountMobile": "15140067518", //登录帐号
                    "accountState": "",
                    "area": "浑南区",
                    "areapathid": "060107",
                    "authTime": "",
                    "authenNo": "",
                    "authenState": "NOPASS", // 认证标识 NOPASS 未认证 PASS 已认证
                    "businessunit": 27, //部门ID
                    "businessunitName": "AH沈阳", //部门名称
                    "city": "沈阳市",
                    "companyName": "32164", // 认证名
                    "contactMobile": "15140067518", // 联系人手机号
                    "contactName": "AH", // 联系人
                    "contactPathid": "",
                    "createRole": 28080,
                    "createRoleName": "天津客服", // 创建人
                    "createTime": "2018-07-28 11:22:24", // 创建时间
                    "customerBalance": { // 账户信息
                        "balance": 0,  //账户余额
                        "freeze": 0, //冻结金额
                        "id": 0, 
                        "prepaid": 0 //定金金额
                    },
                    "customerContacts": [],
                    @@"customer2Attrs": [
                        {
                            "attrId": 1,                //属性id
                            "attrName": "彤德莱",       //属性名称
                            "customerId": 32488,
                            "freightFlg": 1,
                            "groupId": 1,
                            "groupName": "彤德莱体系客户",
                            "id": 390
                        }
                    ],
                    @@"invoiceInfoStatus": "NORMAL",    //EMPTY 待维护 NORMAL 已维护 ASKFOR 待审核
                    "dod": 0,
                    "freight": 1,
                    "id": 32164, // 客户编号
                    "isParent": 0, // 总店标识 1 总店 
                    "parentId": 0,
                    "parentName": "",
                    "printPrice": 1,
                    "province": "辽宁",
                    "shortName": "32164", // 客户名
                    "source": "1",
                    "srRoleId": 29247,// SRID
                    "srRoleName": "", // SR名
                    "ssRoleId": 29324,// SSID
                    "ssRoleName": "", // SS名
                    "state": "NORMAL",  // 客户状态 NORMAL 正常 LOCK 休眠
                    "type": "A" // 客户类型
                }
            ],
            "pageNo": 1, //页码
            "total": 141 //总数
        }
    }

### KH-2.修改客户归属
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    PUT v2/customer/modifyOwn/{ids}
#### 参数
    *ids: 客户id eg：1,2,3,4
    json body: // *参数3至少有1个
    {
        ssRoleId: 1 //SSID
        srRoleId: 1//SRID
        businessunit: 1 //部门ID
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### KH-3.修改客户属性
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/customer/modifyAttr/{ids}
#### 参数
    *ids: 客户id eg：1,2,3
    json body:
    [
        {
            *"attrGroupId": 1, //属性组ID
            *"attrId":1 //属性ID
        },
        ...
    ]
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### KH-4.修改客户餐饮业态
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/customer/modifyBusinessType/{ids}
#### 参数
    *ids：客户id eg：1,2,3
    json body
    {
        *businessType:1 // 餐饮业态ID
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### KH-5.编辑客户
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    PUT v2/customer/{id}
#### 参数
    *id:客户ID
    json body
    {
        *"shortName":"test1", //客户名
        @@*"type":"P", // 客户类型           //'A','P','P2P','C' 原来的基础上增加C类型客户，通P客户一样，可以设置“普通”，“分店”，“总店” 
        *"businessunit":1, //部门
        *"srRoleId": 40, //SRID
        *"isParent": 2, //总分店 0 普通客户 1 总店 2 分店
        *"parentId":797, // 总店ID
        *"printPrice": 0, // 是否打印价格 0 不打印 1打印
        *"customerAccount":{
            *"mobile":"18842889150" //绑定手机号
        }
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### KH-6.新增客户
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    POST v2/customer
#### 参数
    {
        *"shortName":"test2", // 客户名
        @@*"type":"P", //客户类型                 //'A','P','P2P','C' 原来的基础上增加C类型客户，通P客户一样，可以设置“普通”，“分店”，“总店” 
        *"businessunit":1, //部门ID
        *"srRoleId": 40, // SRID
        *"isParent": 2, //总分店 0 普通客户 1 总店 2 分店
        *"printPrice": 0, // 打印价格 0 不打印 1打印
        "parentId":797, // 总店ID
        *"customerAccount":{
            *"mobile":"18842889150" // 绑定手机号
        },
        *"customerContacts":[ // 联系方式
            {
                *"name":"大雨", // 联系人
                *"mobile":"18842889150", // 手机号
                *"areapathid":"0101", // 地区码
                *"address":"1111", // 地址
                "remarks":"remarks", // 备注
                *"isDefault":1 // 是否默认
            },
            {
                "name":"大雨2",
                "mobile":"18842889150", 
                "areapathid":"0101",
                "address":"1111",
                "remarks":"remarks",
                "isDefault":0
            }
        ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": 1 // 客户ID
    }

### KH-7.客户名\绑定手机验重
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET v2/customer/exists
#### 参数
    *attr: 查询属性 shortName 客户名, accountMobile 绑定手机号
    *value: 查询值

#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": 1 // 数量
    }

### KH-8.客户明细
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/customer/detail
#### 参数
    *id: 1 客户ID
    hasContact: true 是否携带联系方式信息（可选，默认false）
    hasFinace: true 是否携带财务信息（可选，默认false）
    hasAttr:true 是否携带属性信息（可选，默认false）
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "accountId": "",  // 帐号ID
            "accountMobile": "", // 帐号手机号
            "accountState": "",
            "area": "沙河口区",
            "areapathid": "060203",
            "authenNo": "1", // 认证ID
            "authenState": "PASS",  // 认证状态
            "authenTime": "2018-08-23 11:32:51", // 认证时间
            "businessType": "1", // 默认业态ID
            "businessTypeCode": "01", // 默认业态Code
            "businessTypeName": "中餐", // 默认业态名
            "businessunit": 1, // 部门ID
            "businessunitGroupId": 3,
            "businessunitGroupName": "PW事业组",
            "businessunitName": "PW",  // 部门名
            "city": "大连市",
            "companyName": "dddd", // 公司名 也是认证名
            "contactId": 3,
            "contactMobile": "13941131601", // 默认联系方式手机号
            "contactName": "宋晓波", // 默认联系方式联系人
            "contactPathid": "",
            "createRole": 5035,
            "createRoleName": "ASAV-陈明",
            "createTime": "2011-06-09 10:20:12",
            "customer2Attrs": [
                {
                    "attrId": 2,
                    "attrName": "火锅渠道",
                    "customerId": 149,
                    "freightFlg": 0,
                    "groupId": 0,
                    "groupName": "",
                    "id": 10
                }
            ],
            "customerBalance": { //客户账户余额
                "balance": 0, // 余额
                "freeze": 0, // 冻结金额
                "id": 0,     // id
                "prepaid": 0 // 定金额
            },
            "customerContacts": [ // 客户联系方式
                {
                    "address": "1111", // 地址
                    "areapathid": "0101", // 区域码
                    "createRole": 1, 
                    "createTime": "2018-08-21 10:41:28.0",
                    "createUser": 101,
                    "customerId": 32202, 
                    "id": 50659, // id
                    "isDefault": 1, // 是否默认
                    "lastModified": "2018-08-21 10:41:28.0", 
                    "mobile": "", // 手机号
                    "name": "大雨", // 联系人
                    "remarks": "" // 备注
                }
            ], 
            "dod": 1,
            "freight": 1,
            "id": 149,      // 客户编号
            "isParent": 0, // 总分店 0 普通客户 1 总店 2 分店
            "newFlg": 1,
            "parentId": 0, // 总公司ID
            "parentName": "", // 总公司名
            "printPrice": 0,
            "province": "辽宁",
            "shortName": "149", // 客户名
            "source": "1",
            "srRoleId": 40, // SRID
            "srRoleName": "高成举-SRM-T", // SR名
            "ssRoleId": 2196, // SSID
            "ssRoleName": "解冰", // SS名
            "state": "NORMAL",
            "type": "A" // 客户类型
        }
    }

### KH-9.重置密码
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/customerAccount/reset/{customerId}    
#### 参数  
    *customerId: 客户ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### KH-10.删除联系人
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    DELETE /v2/customerContact/{id}
#### 参数
    *id: 1 联系人ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### KH-11.修改联系人
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/customerContact/{id}
#### 参数
    *id: 1 联系人ID
    json body
    {
        *"name":"222", // 联系人
        *"mobile":"18842889150", // 联系手机号
        *"areapathid":"0101", // 地址码
        *"address":"3333", // 地址
        *"remarks":"xxxx" // 备注
        *"isDefault": 1
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### KH-12.新增联系人
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    POST /v2/customerContact
#### 参数
    json body
    [
        {
            *"customerId":32202, // 客户ID
            *"name":"111", // 联系人
            *"mobile":"18842889150", // 手机号
            *"areapathid":"0101", // 区域码
            *"address":"111", // 地址
            *"remarks":"1111", // 备注
            *"isDefault":1 // 是否默认
        },
        {
            "customerId":32202,
            "name":"222",
            "mobile":"18842889150",
            "areapathid":"0202",
            "address":"222",
            "remarks":"222",
            "isDefault":0
        }
    ]
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### 13.快速新增
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
    接口同新增

### KH-14.更名
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    POST v2/customer
#### 参数
    {   
        *"action":"rename", //**重要，系统区分更名和新增的标识
        *"id":xxx, // 客户ID **重要，系统区分更名和新增的标识
        *"shortName":"test2", // 客户名
        *"type":"P", //客户类型
        *"businessunit":1, //部门ID
        *"srRoleId": 40, // SRID
        *"isParent": 2, //总分店 0 普通客户 1 总店 2 分店
        *"parentId":797, // 总店ID
        *"customerAccount":{
            *"mobile":"18842889150" // 绑定手机号
        },
        *"customerContacts":[ // 联系方式
            {
                *"name":"大雨", // 联系人
                *"mobile":"18842889150", // 手机号
                *"areapathid":"0101", // 地区码
                *"address":"1111", // 地址
                *"remarks":"remarks", // 备注
                *"isDefault":1 // 是否默认
            },
            {
                "name":"大雨2",
                "mobile":"18842889150", 
                "areapathid":"0101",
                "address":"1111",
                "remarks":"",
                "isDefault":0
            }
        ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### KH-15.收货信息
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/customerContact
#### 参数
    *customerId: 1 客户ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "address": "222", // 地址
                "areapathid": "0202", // 区域码
                "createRole": 1, 
                "createTime": "2018-08-21 15:47:04.0",
                "createUser": 101,
                "customerId": 32202,
                "id": 50668, // 地址ID
                "isDefault": 0, // 是否默认
                "lastModified": "2018-08-21 15:47:04.0",
                "mobile": "18842889150", // 手机号
                "name": "222", // 联系人
                "remarks": "" // 备注
            }
        ]
    }

### KH-16.客户日志
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/customer/log
#### 参数
    *customerId: 1 客户ID
    pageNo：1 页码
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "dataSums": null,
            "datas": [
                {
                    "action": "2196", 
                    "createRole": 1,
                    "createTime": "2018-08-17 15:24:01", 操作时间
                    "createUser": 101,
                    "createUserName": "樊嘉辉", // 操作人
                    "customerId": 797,  
                    "id": 49,
                    "opType": "04", // 01更客户名,02更手机号,04更归属人,05锁定账号,06解锁账号
                    "original": "0"
                }
            ],
            "pageNo": 1,
            "total": 1
        }
    }

### KH-17.删除客户
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    DELETE /v2/customer/{id}
#### 参数
    *id: 1 客户ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### KH-18.客户未签约列表
#### 对接负责人
    梁铁骑
#### 模块负责人
    梁铁骑
#### 请求
    GET /v2/price/sign/unsign
#### 参数
    *customerId： 1 客户ID
    pageNo: 1 页码
    keyword： "" 关键词过滤
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "dataSums": null,
            "datas": [
                {
                    "aPrice": 61, // a价格
                    "createRemarks": "", 
                    "createRole": 0,
                    "createRoleName": "",
                    "createTime": "",
                    "guige": "500ml/瓶", // 规格
                    "id": 8197, // id
                    "pPrice": 51, // p价格
                    "pno": "kailong1982", // 品号
                    "productId": 4156, // 产品id
                    "productName": "樊嘉辉的82年凯龙", // 产品名
                    "productunitId": 7389, // 规格id
                    "signPrice": 0, // 签约价
                    "status": "", 
                    "unit": "瓶" // 单位
                }
            ],
            "pageNo": 1,
            "total": 1
        }
    }
### KH-19.客户签约列表
#### 对接负责人
    梁铁骑
#### 模块负责人
    梁铁骑
#### 请求
    GET /v2/price/sign/signed
#### 参数
    *customerId： 1 客户ID
    pageNo: 1 页码
    keyword： "" 关键词过滤
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "dataSums": null,
            "datas": [
                {
                    "aPrice": 61, // a价格
                    "createRemarks": "", 
                    "createRole": 0,
                    "createRoleName": "",
                    "createTime": "",
                    "guige": "500ml/瓶", // 规格
                    "id": 8197, // id
                    "pPrice": 51, // p价格
                    "pno": "kailong1982", // 品号
                    "productId": 4156, // 产品id
                    "productName": "樊嘉辉的82年凯龙", // 产品名
                    "productunitId": 7389, // 规格id
                    "signPrice": 3.96, // 签约价
                    "status": "", 
                    "unit": "瓶" // 单位
                }
            ],
            "pageNo": 1,
            "total": 1
        }
    }

### KH-20.客户签约审核列表
#### 对接负责人
    梁铁骑
#### 模块负责人
    梁铁骑
#### 请求
    GET /v2/price/sign/check
#### 参数
    *customerId：1 客户ID
    keyword：""  关键词过滤
    pageNo: 1 页码
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "dataSums": null,
            "datas": [
                {
                    "aPrice": 601, // a价格
                    "createRemarks": "",
                    "createRole": 0,
                    "createRoleName": "",
                    "createTime": "2017-08-25 11:3902", 创建时间
                    "guige": "500ml/瓶*12/箱", // 规格
                    "id": 327794, // ID
                    "pPrice": 551, // p价格
                    "pno": "kailong1982", // 品号
                    "productId": 4156, // 产品ID
                    "productName": "樊嘉辉的82年凯龙", // 产品名
                    "productunitId": 7388, // 产品规格ID
                    "signPrice": 666, // 签约价格
                    "status": "", 
                    "unit": "件" // 单位
                }
            ],
            "pageNo": 1,
            "total": 1
        }
    }


### KH-21.签约日志
#### 对接负责人
    梁铁骑
#### 模块负责人
    梁铁骑
#### 请求
    GET /v2/price/sign/log
#### 参数
    *customerId：1 客户ID
    keyword："" 关键词过滤
    pageNo: 1 页码
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "dataSums": null,
            "datas": [
                {
                    "aPrice": 0, 
                    "createRemarks": "",
                    "createRole": 4434,
                    "createRoleName": "赵金梦", // 操作人
                    "createTime": "2017-08-25 11:52:37", // 创建时间
                    "guige": "产品-大雨01-小", // 规格名
                    "id": 327796, 
                    "pPrice": 0, 
                    "pno": "DY01", // 品号
                    "productId": 4155, // 产品ID
                    "productName": "产品-大雨01", // 产品名
                    "productunitId": 7386, // 产品规格ID
                    "signPrice": 432, // 签约价格
                    "status": "pass",
                    "unit": ""
                }
            ],
            "pageNo": 1,
            "total": 1
        }
    }

### KH-22.批量签约
#### 对接负责人
    梁铁骑
#### 模块负责人
    梁铁骑
#### 请求
    POST /v2/price/sign/askfor/{customerId}
#### 参数
    *customerId: 1 // 客户ID
    json body
    [
        {
            *"productId":4155, // 产品ID
            *"productunitId":7386, // 产品规格ID
            *"signPrice":99
        }
    ]
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### KH-23.批量取消签约
#### 对接负责人
    梁铁骑
#### 模块负责人
    梁铁骑
#### 请求
    POST /v2/price/sign/cancel
#### 参数
    json body
    *[1, 2] 签约价的ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### KH-24.客户认证查询
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/customer/auth/search
#### 参数
    *authType: ALL|COMPANY|PERSON // 所有 公司 个人
    *keyword： // 查询关键字
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "authenNo": "3064166877", // 认证ID
                "authenTime": "", // 认证时间
                "authenType": "company", // 认证类型 person 个人 company 公司
                "customerId": 0, // 客户ID
                "customerName": "", // 客户名
                "name": "亚洲渔港股份有限公司"， // 企业名
                "regStatus": "注销" // 企业状态，若为注销，则列表置为灰色，不可选
            }
        ]
    }

### KH-25.客户认证明细查询
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/customer/auth/companyDetail
#### 参数
    *authenNo： 认证ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "actualCapital": "10000万人民币",
            "alias": "亚洲渔港",
            "approvedTime": 1498406400000,
            "base": "ln",
            "businessScope": "供应链管理；冷冻海产品、预包装食品销售；农副产品收购；国内一般贸易；食品技术开发、技术转让；软件技术开发、技术转让；互联网信息服务；普通货物仓储；国内货运代理。（依法须经批准的项目，经相关部门批准后方可开展经营活动。）",
            "companyId": 127710579,
            "companyOrgType": "其他股份有限公司(非上市)",
            "companyType": 0,
            "correctCompanyId": "",
            "creditCode": "91210200736441730M", // 社会统一信用代码
            "estiblishTime": 1522583552,
            "flag": 1,
            "fromTime": 1023724800000,
            "historyNames": "大连美姿克特食品有限公司\t",
            "id": 3064166877,
            "industry": "商务服务业",
            "legalPersonId": 1873819571,
            "legalPersonName": "姜晓", // 法人
            "logo": "http://img.tianyancha.com/logo/lll/262742baec8e4c4fdd18b6c0df561105.png@!f_200x200",
            "name": "亚洲渔港股份有限公司", // 公司名
            "orgNumber": "736441730",
            "percentileScore": 8898,
            "regCapital": "10000万人民币",
            "regInstitute": "大连市工商行政管理局",
            "regLocation": "辽宁省大连市西岗区海达北街91号6层", // 注册地址
            "regNumber": "210200000128379",
            "regStatus": "存续",
            "socialStaffNum": 145,
            "sourceFlag": "http://qyxy.baic.gov.cn/",
            "staffNumRange": "100-499人",
            "taxNumber": "91210200736441730M", // 纳税人识别码
            "type": "1",
            "updateTimes": 1534574652000,
            "updatetime": 1534574654127
        }
    }

### KH-26.认证企业
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    POST /v2/customer/auth/pick/{customerId}
#### 参数
    *customerId: 客户ID
    json body
    {
        *authenType:"company" // company 公司认证 person 个人认证
        *authenNo: // 认证号
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### KH-27.新增个人认证
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    POST /v2/customer/auth/add/{customerId}
#### 参数
     *customerId:客户ID
     json body
     {
        *"name":"dddd", // 姓名
        *"cardNo":"123", // 身份证号码
        *"cardNoFront":"1", // 身份证正面扫描件上传地址
        *"cardNoBack":"2" // 身份证背面扫描件上传地址
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### KH-28.事业部查询
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/customer/businessunit
#### 参数
    name:"" // 事业部名模拟匹配（可选）
    groupId: 1 // 事业部组ID（可选）
    ids : 1，2，3  // 事业部ID（可选）
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data":  [
                {
                    "groupName": "PT事业组"， // 事业部组名
                    "bcFlg": 0,
                    "groupId": 2, // 部门组ID
                    "id": 2, // 部门ID
                    "name": "PT", // 部门名
                    "platformId": 1, 
                    "sort": 2 // 排序标识
                }
        ]
    }

### KH-29.事业部查询（所有）(废弃,与KH-28合并)
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/customer/businessunit/all
#### 参数
    groupId: 1 // 事业部组ID（可选）
    ids : 1，2，3  // 事业部ID（可选）
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "groupName": "PT事业组", // 事业部组
                "bcFlg": false,
                "groupId": 2, // 组ID
                "name": "PT", // 事业部名
                "id": 2, // 事业部ID
                "platformId": 1,
                "sort": 2 // 排序标识
            }
        ]
    }

### KH-30.新增事业部
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    POST /v2/customer/businessunit
#### 参数
    json body
    {
        *"groupId":2, // 事业部组ID
	    *"name":"aaa" // 事业部名
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": 67
    }

### KH-31.修改事业部
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/customer/businessunit/{id}
#### 参数
    *id: 部门ID
    json body
    {
        *"groupId":2, // 事业部组ID
	    *"name":"aaa" // 事业部名
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### KH-32.删除事业部
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    DELETE /v2/customer/businessunit/{id}
#### 参数
    *id: 事业部ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### KH-33.事业部组查询
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/customer/businessunit/group
#### 参数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "createRole": 0,
                "createTime": "2018-03-14 15:27:06.0",
                "createUser": 0,
                "id": 2, // 事业部组ID
                "name": "PT事业组" // 事业部组名
            
        ]
    }

### KH-34.新增事业部组
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    POST /v2/customer/businessunit/group
#### 参数
    json body
    {
        *"name":"ccc" // 事业部组名
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": 10 // 新增ID
    }

### 35.修改事业部组
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    POST /v2/customer/businessunit/group/{id}
#### 参数
    *id:事业部组ID
    json body
    {
        *"name":"cccc" // 事业部组名
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### 36.删除事业部组
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    DELETE /v2/customer/businessunit/group/{id}
#### 参数
    *id:事业部组ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### KH-37.查询客户属性组
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/customer/attr/group
#### 参数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "id": 1,
                "name": "测试属性组"
            }
        ]
    }

### KH-38.新增客户属性组
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    POST /v2/customer/attr/group
#### 参数
    {
        *"name":"测试属性组"
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": 1 // 新增客户属性组ID
    }

### 39.删除客户属性组
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    DELETE /v2/customer/attr/group/{id}
#### 参数
    *id: 客户属性组ID
#### 响应
{
    "code": 100000,
    "msg": "",
    "data": null
}

### KH-40. 新增客户属性
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    POST /v2/customer/attr
#### 参数
    {
        *"groupId":1, // 客户属性组ID
        *"name":"aaa", // 客户属性名
        *"freightFlg":1, // 满免运费标识 0 未开启 1 开启
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": 4 // 客户属性组ID
    }

### KH-41.修改客户属性
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/customer/attr/{id}
#### 参数
    *id: 客户属性ID
    json body
    {
        *"groupId":1, // 客户属性组ID
        *"name":"aaa", // 客户属性名
        *"freightFlg":1, // 满免运费标识 0 未开启 1 开启
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### KH-42.查询客户属性
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/customer/attr
#### 参数
    id:1 //客户属性ID （可选）
    ids: 1,2,3 // 客户属性IDS（可选）
    groupId: 客户属性组ID (可选)
    name：客户属性名（可选）
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "freightFlg": 1, // 运费减免标识 0 未开启 1 开启
                "groupId": 1, // 客户属性组ID
                "groupName": "", // 客户属性组名
                "id": 5, // 客户属性ID
                "name": "aaa" // 客户属性名
            }
        ]
    }

### KH-43.删除客户属性
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    DELETE /v2/customer/attr/{id}
#### 参数
    *id: 客户属性ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### 44.设置默认地址（废弃）
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/customerContact/default/{id}
#### 参数
    *id: 联系人ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### KH-45.客户模糊查询
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/customer/match
#### 参数
    *shortName：客户名模糊查询
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [ //客户名列表
            {
                id: 1, // ID
                shortName: "xxx" // 客户名
            }
        ]
    }

### KH-46.客户个人认证查询
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/customer/auth/personDetail
#### 参数
    *authenNo: 1 // 认证号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "cardNo": "123", // 身份证号
            "cardNoBack": "2", // 身份证背面扫描图片地址
            "cardNoFront": "1", // 身份证前面扫描图片地址
            "createRole": 1, 
            "createTime": "2018-08-23 11:14:31.0",
            "createUser": 101,
            "id": 1, // ID = authenNo
            "name": "dddd" // 姓名
        }
    }

### KH-47.企业认证查询
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/customer/auth/search/company
#### 参数
    *keyword: "" // 模糊查询 不少于2个字符
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "base": "辽宁", // 所在地
                "companyType": "1",  // 公司类型 1公司 2香港公司 3社会组织 4律所 5事业单位 6基金会
                "estiblishTime": "2002-06-11 00:00:00.0", // 开业时间
                "id": 3064166877, // authenNO 企业号
                "legalPersonName": "姜晓", // 法人
                "name": "亚洲渔港股份有限公司", // 公司名
                "regCapital": "10000万人民币", // 注册资本
                "type": "1" // 1公司 2人
            }
        ]
    }

### KH-48.个人认证查询
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/customer/auth/search/person
#### 参数
    *keyword: "" // 模糊查询 不少于2个字符
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "cardNo": "123", // 身份证号
                "cardNoBack": "2", // 身份证后面扫描
                "cardNoFront": "1", // 身份证前面扫描
                "createRole": 1, // 创建角色
                "createTime": "2018-08-23 11:14:31.0", // 创建时间
                "createUser": 101, // 创建人
                "id": 1, // authenNo 认证号
                "name": "dddd" // 人名
            }
        ]
    }


### KH-49. 客户休眠
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/customer/{id}
#### 参数
    *id     //客户id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }


### KH-50. 客户唤醒
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/customer/{id}
#### 参数
    *id     //客户id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
