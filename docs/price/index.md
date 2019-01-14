## 价格接口

### JG-1.特价列表

#### 1.1 请求URL
    /v2/price/special

#### 1.2 请求类型
    GET

#### 1.3 请求参数
|参数|名称|描述|
|---|---|---|
|keyword|产品名称/产品号|
|status|状态|NORMAL 正常 LOCK 锁定 ALL 全部|
|pageNum|页码|默认1|
|pageSize|页条数|默认25|

#### 1.4 请求示例
    无

#### 1.5 返回值
|参数|名称|描述|
|---|---|---|
|specialId|特价id|
|productId|产品id|
|pno|产品编号|
|productName|产品名称|
|productunitId|产品规格id|
|unitGuige|单位名称|
|aPrice|A价格|
|pPrice|P价格|
|tPrice|T价格|
|productState|产品状态|NORMAL:正常,CUSTOM:定制,LOCK:锁定|
|status|状态|normal 正常 lock 锁定|
|startDate|开始时间|
|endDate|结束时间|
|businessunitType|事业部限制类型|ALL 无限制 PART 部分事业部|
|businessunit|事业部id列表|
|customerAttrType|客户属性限制类型|ALL 无限制 PART 部分客户属性|
|customerAttrList|客户属性列表|
|buttonPermissionFlg|是否获取列表对应的按钮权限|1- 是 0 - 否|

#### 1.6 返回示例
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "deleteButton": false, // 删除
                    "lockButton": true, // 锁定
                    "unlockButton": false, // 解锁
                    "editButton": true, // 编辑
                    "logButton": true // 操作日志
                }
                ...
            ],
            "dataSums": null,
            "datas": [
                {
                    "specialId": 63,
                    "productId": 2231,
                    "pno": "0755",
                    "productName": "蒜蓉粉丝鲍（特惠装）",
                    "productunitId": 3868,
                    "unitName": "袋",
                    "aPrice": 61.9,
                    "pPrice": 49.5,
                    "tPrice": 55,
                    "status": "NORMAL",
                    "startDate": "2017-12-21",
                    "endDate": "2018-05-31",
                    "businessunitType":"ALL",
                    "businessunit": [
                        
                    ],
                    "customerAttrType":"ALL",
                    "customerAttrList": [
                        
                    ]
                },
                ...
            ],
            "pageNo": 1,
            "total": 3
        }
    }

### JG-2. 特价详情

#### 2.1 请求URL
    /v2/price/special/detail

#### 2.2 请求类型
    GET

#### 2.3 请求参数
|参数|名称|描述|
|---|---|---|
|specialId|特价ID|必|

#### 2.4 请求示例
    无

#### 2.5 返回值
|参数|名称|描述|
|---|---|---|
|specialId|特价id|
|productId|产品id|
|pno|产品编号|
|productName|产品名称|
|productunitId|产品规格id|
|unitName|单位名称|
|aPrice|A价格|
|pPrice|P价格|
|tPrice|T价格|
|status|状态|normal 正常 lock 锁定|
|startDate|开始时间|
|endDate|结束时间|
|businessunitType|事业部限制类型|ALL 无限制 PART 部分事业部|
|businessunit|事业部id列表|
|customerAttrType|客户属性限制类型|ALL 无限制 PART 部分客户属性|
|customerAttrList|客户属性列表|


#### 2.6 返回示例
    {
        "code": 100000,
        "msg": "",
        "data": {
            "specialId": 6,
            "productId": 2231,
            "pno": "0755",
            "productName": "蒜蓉粉丝鲍（特惠装）",
            "productunitId": 3869,
            "unitName": "件",
            "pPrice": 594,
            "aPrice": 742,
            "tPrice": 56,
            "status": "NORMAL",
            "startDate": "2017-12-21",
            "endDate": "2018-05-31",
            "businessunitType":"ALL",
            "businessunit": [
                
            ],
            "customerAttrType":"PART"
            "customerAttrList": [
                3,
                1,
                2
            ]
        }
    }


### JG-3. 新增特价

#### 3.1 请求URL
    /v2/price/special

#### 3.2 请求类型
    POST

#### 3.3 请求参数
|参数|名称|描述|
|---|---|---|
|productId|产品ID|必|
|productunitId|产品规格ID|必|
|tPrice|特价|必|
|businessunitType|事业部限制类型|必 ALL 无限制 PART 部分事业部|
|businessunit|事业部列表|
|customerAttrType|客户属性限制类型|必 ALL 无限制 PART 部分|
|customerAttrList|客户属性列表|
|startDate|开始时间|必 日期为客户所选 时间固定 00:00:00|
|endDate|结束时间|必 日期为客户所选 时间固定 23:59:59|



#### 3.4 请求示例
    {
        "productId":1,
        "productunitId":1,
        "tprice":35.2,
        "businessunitType":"PART",
        "businessunit":[1,3,2],
        "customerAttrType":"PART",
        "customerAttrList":[1,3,2],
        "startDate":"2018-08-25 08:00:00",
        "endDate":"2018-09-24 20:00:00"
    }


#### 3.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 3.6 返回示例
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }


### JG-4. 修改特价

#### 4.1 请求URL
    /v2/price/special/{id}

#### 4.2 请求类型
    PUT

#### 4.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|特价ID|必|
|productId|产品ID|必|
|productunitId|产品规格ID|必|
|tPrice|特价|必|
|businessunitType|事业部限制类型|必 ALL 无限制 PART 部分事业部|
|businessunit|事业部列表|
|customerAttrType|客户属性限制类型|必 ALL 无限制 PART 部分|
|customerAttrList|客户属性列表|
|startDate|开始时间|必 日期为客户所选 时间固定 00:00:00|
|endDate|结束时间|必 日期为客户所选 时间固定 23:59:59|


#### 4.4 请求示例
    {
        "productId":1,
        "productunitId":1,
        "tprice":35.2,
        "businessunitType":"PART",
        "businessunit":[1,3,2],
        "customerAttrType":"PART",
        "customerAttrList":[1,3,2],
        "startDate":"2018-08-25 08:00:00",
        "endDate":"2018-09-24 20:00:00"
    }


#### 4.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 4.6 返回示例
    {
    	"code": "100000",
    	"msg": "",
    	"data": null
    }


### JG-5. 锁定、解锁

#### 5.1 请求URL
    /v2/price/special/status/{id}

#### 5.2 请求类型
    PUT

#### 5.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|特价ID|必|
|status|状态|必 normal 解锁 lock 锁定|


#### 5.4 请求示例
    {
        "status":"lock"
    }


#### 5.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 5.6 返回示例
    {
    	"code": "100000",
    	"msg": "",
    	"data": null
    }
    
    
### JG-6. 删除

#### 6.1 请求URL
    /v2/price/special/{id}

#### 6.2 请求类型
    DELETE

#### 6.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|特价ID|必|


#### 6.4 请求示例
    无


#### 6.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 6.6 返回示例
    {
    	"code": "100000",
    	"msg": "",
    	"data": null
    }



### JG-7. 操作日志列表

#### 7.1 请求URL
    /v2/price/special/log

#### 7.2 请求类型
    GET

#### 7.3 请求参数
|参数|名称|描述|
|---|---|---|
|specialId|特价ID|必|

#### 7.4 请求示例
    无

#### 7.5 返回值
|参数|名称|描述|
|---|---|---|
|specialId|特价ID|
|content|操作内容|
|createRole|操作人角色|
|createUser|操作人|
|createUserName|操作人姓名|
|createTime|操作时间|


#### 7.6 返回示例
    {
        "code": 100000,
        "msg": "",
        "data": {
            "dataSums": null,
            "datas": [
                {
                    "specialId": 64,
                    "content": "修改特价",
                    "createRole": 0,
                    "createUser": 0,
                    "createUserName": "樊嘉辉",
                    "createTime": "2018-08-25 14:19:42"
                },
                ...
            ],
            "pageNo": 1,
            "total": 3
        }
    }
### JG-8 客户未签约列表
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/price/sign/{customerId}/unsign
#### 参数
    *customerId 客户id
    keyword // 品名、品号
    pageNo // 页码
    pageSize // 行数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "pageNo": 1,
            "datas": [
                {
                    "productId": 1, // 产品id
                    "unit": "盒" // 单位
                    "aPrice": 40.12, // A价
                    "pPrice": 32.5, // P价
                    "productUnitId": 1, // 产品规格id
                    "guige": "500g(23-25枚）/盒", // 规格
                    "productName": "香草凤尾虾", // 品名
                    "pno": "0151", // 品号
                    "price": 0.0 // 签约价
                },
                ...
            ]
        }
    }

### JG-9 客户签约列表
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
     GET /v2/price/sign/{customerId}/signed
#### 参数
    *customerId 客户id
    keyword // 品名、品号
    pageNo // 页码
    pageSize // 行数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "pageNo": 1,
            "datas": [
                {
                    "aPrice": 75.9, // A价
                    "customerId": 32178,
                    "deleteFlg": 0,
                    "guige": "1.68kg（24枚）/盒", // 规格
                    "id": 522352, // 主键id
                    "pPrice": 61.5, // P价
                    "pno": "0110", // 品号
                    "price": 61.5, // 签约价
                    "productId": 722, // 产品id
                    "productName": "汉堡虾排（餐饮量贩装）【原名：汉堡虾排（特惠装）】", // 品名
                    "productUnitId": 1259, // 产品规格id
                    "status": "NORMAL",
                    "unit": "盒" // 单位
                },
                ...
            ]
        }
    }

### JG-10 客户签约审核列表
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/price/sign/{customerId}/pending
#### 参数
    *customerId 客户id
    keyword // 品名、品号
    pageNo // 页码
    pageSize // 行数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "pageNo": 1,
            "datas": [
                {
                    "aPrice": 43.38, // A价
                    "createTime": "2019-01-07 13:23:02.0", // 提交时间
                    "deleteFlg": 0,
                    "guige": "750g（50枚）", // 规格
                    "id": 0,
                    "pPrice": 34.7, // P价
                    "pno": "0140", // 品号
                    "price": 2, // 签约价
                    "productId": 3, // 产品id
                    "productName": "鲜虾春卷", // 品名
                    "productUnitId": 9, // 产品规格id
                    "status": "ASKFOR",
                    "unit": "盒", // 单位
                }
            ]
        }
    }

### JG-11 客户签约日志
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/price/sign/{customerId}/log
#### 参数
    *customerId 客户id
    keyword // 品名、品号
    pageNo // 页码
    pageSize // 行数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "pageNo": 1,
            "datas": [
                {
                    "createTime": "2018-12-05 01:51:10", // 操作时间
                    "createUserName": "李嘉欣", // 操作者
                    "guige": "3kg/件", // 规格
                    "id": 419179,
                    "pno": "M061", // 品号
                    "price": 188.1, // 当前签约价
                    "productName": "虾仁（110/130）", // 品名
                    "status": "PASS", // 状态 ASKFOR-申请 PASS-通过 REFUSE-拒绝
                    "unit": "件", // 单位
                },
                ...
            ]
        }
    }

### JG-12 客户批量签约
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    POST /v2/price/sign/askfor/{customerId}
#### 和原接口比较，着重强调
    productunitId 变为 productUnitId
    signPrice 变为 price
#### 参数
    *customerId: 1 // 客户ID
    json body
    *[
        {
            *"productId":4155, // 产品ID
            *"productUnitId":7386, // 产品规格ID
            *"price":99
        }
    ]
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### JG-13 客户批量取消签约
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/price/sign/cancel
#### 参数
    *[id,id]
    主键id集合
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }


### JG-14 PA价格管理-列表
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/price/pa
#### 参数
    keyword // 品名/品号
    processContent // 内容信息完整度 0-待维护 1-已完善
    processPrice // 发票信息完整度 0-待维护 1-已完善
    processInvoice // 价格信息完整度 0-待维护 1-已完善
    status // 上架状态 NORMAL-正常or上架 LOCK-下架
    productName // 品名
    pno // 品号
    businessTypeId // 餐饮业态
    rawFlg // 原料品 YES-是 NO-否
    runType // 定时修改价格 NOW - 否 TASK - 是
    pageNo // 页码
    pageSize // 行数

    #以上所有字段均可不必传
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "pageNo": 1,
            "datas": [
                {
                    "id": 1,
                    "product": {
                        "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/ec90940549d364b0982427f87dd86747.jpg", // 产品主图
                        "name": "香草凤尾虾", // 品名
                        "pno": "0151", // 品号
                        "process": 3, // 完善度 写死 3/4
                        "processContent": 1, // 内容信息完整度 0-待维护 1-已完善
                        "processInvoice": 1, // 发票信息完整度 0-待维护 1-已完善
                        "processPrice": 1, // 价格信息完整度 0-待维护 1-已完善
                        "productUnits": [ // 产品规格信息
                            {
                                "guige": "500g(23-25枚）/盒",
                                "unit": "盒",
                                "aPrice": 12, // A价格
                                "pPrice": 16 // P价格
                            },
                            {
                                "guige": "500g(23-25枚）/盒*20盒",
                                "unit": "件",
                                "aPrice": 12, // A价格
                                "pPrice": 16 // P价格
                            }
                        ],
                        "status": "NORMAL" // 上架状态 NORMAL-正常or上架 LOCK-下架
                    },
                    "productId": 1, // 产品id
                    "rawFlg": "NONE", // 原料品， YES-是 NO-否 NONE-未设置
                    "runFlg": "0", // 定时修改价格flg 0-无 1-有
                    "rate": 0.3, // 折算比率
                    "updateTime": "2017-01-22 13:06:06", // 操作信息-时间
                    "updateUserName": "张婷" // 操作信息-操作人
                },
                ...
            ]
        }
    }

### JG-15 PA价格管理-查看定时修改价格信息
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/price/pa/{productId}/task
#### 参数
    *productId // 产品id 
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "details": [
                {          
                    "oldAPrice": 0, // 原A价
                    "oldPPrice": 0, // 原P价
                    "aPrice": 0, // A价
                    "pPrice": 32.5, // P价               
                    "productUnit": { // 产品规格
                        "guige": "500g(23-25枚）/盒", // 规格
                        "unit": "盒" // 单位
                    },                
                }
            ],
            "product": {
                "name": "香草凤尾虾", // 品号
                "pno": "0151", // 品名
            },
            "runTime": "2018-12-09 09:56:56", // 启动时间
        }
    }

### JG-16 PA价格管理-价格管理（获取商品PA价格详情）
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/price/pa/{id}
#### 参数
    *id // 主键id 
    # FBI WARNING 此id不是productId！！！
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "id": 1,
            "product": {
                "name": "香草凤尾虾", // 品名
                "pno": "0151", // 品号
                "productUnits": [ // 产品规格信息
                    {
                        "guige": "500g(23-25枚）/盒", // 规格
                        "unit": "盒", // 单位
                        "perunit": 1, // 转化率
                        "aPrice": 12, // A价格
                        "pPrice": 16 // P价格
                    },
                    {
                        "guige": "500g(23-25枚）/盒*20盒", // 规格
                        "unit": "件", // 单位
                        "perunit": 20, // 转化率
                        "aPrice": 12, // A价格
                        "pPrice": 16 // P价格
                    }
                ]
            },
            "productId": 1, // 产品id
            "rawFlg": "NONE", // 原料品， YES-是 NO-否 NONE-未设置
            "updateTime": "2017-01-22 13:06:06", // 操作信息-时间
            "updateUserName": "张婷" // 操作信息-操作人
        }
    }

### JG-17 PA价格管理-修改PA价格信息
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    POST /v2/price/pa/askfor
#### 参数
    json body
    {
        *productId: 1,
        *details: [
            {
                *productId: 1,
                *productUnitId: 1,
                *aPrice: 10,
                *pPrice: 20
            },
            ...
        ],
        rate： 0.3 // 折算比率 0 <= rate < 1
        createRemark: "xxxx", // 200字符以内或者不传
        *runType: "TASK", // 定时修改价格 NOW-否 TASK-是
        runTime："2018-12-12", // 定时执行时间， TASK-必传 NOW-不传
        *rawFlg："YES" // 是否原料品 YES-是 NO-否
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### JG-18 PA价格审核-列表
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/price/pa/askfor
#### 参数
    keyword // 品名/品号
    processContent // 内容信息完整度 0-待维护 1-已完善
    processPrice // 发票信息完整度 0-待维护 1-已完善
    processInvoice // 价格信息完整度 0-待维护 1-已完善
    productStatus // 产品状态 NORMAL-正常or上架 LOCK-下架
    status // 审核状态 ASKFOR-待审核 PASS-通过 REFUSE-拒绝
    productName // 品名
    pno // 品号
    businessTypeId // 餐饮业态
    rawFlg // 原料品 YES-是 NO-否
    runType // 定时修改价格 NOW - 否 TASK - 是
    buttonPermissionFlg // 获取权限按钮 0-否 1-是
    pageNo // 页码
    pageSize // 行数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "pageNo": 1,
            "buttonPermissions": [
                {
                    "refuseButton": false, // 拒绝按钮
                    "passButton": false // 通过按钮
                },
                ...
            ],
            "datas": [
                {
                    "checkRemark": "客户定制", // 审核信息-备注
                    "checkTime": "2015-08-28 15:53:00", // 审核信息-时间
                    "checkUserName": "", // 审核信息-操作人
                    "createRemark": "新客户定制更改标准p价格", // 申请信息-备注
                    "createTime": "2015-08-28 15:52:35", // 申请信息-时间
                    "createUserName": "", // 申请信息-操作人
                    "details": [ // 规格信息
                        {
                            "oldAPrice": 0, // 原A价
                            "oldPPrice": 0, // 原P价
                            "aPrice": 0, //  A价
                            "pPrice": 75, //  P价
                            "productUnit": { // 规格信息
                                "guige": "1kg/袋*10袋", // 规格
                                "unit": "件" // 单位
                            }
                        },
                        {       
                            "oldAPrice": 0, // 原A价
                            "oldPPrice": 0, // 原P价
                            "aPrice": 0, // A价
                            "pPrice": 7.5, // P价
                            "productUnit": { // 规格信息
                                "guige": "1kg", // 规格
                                "unit": "袋" // 单位
                            }
                        }
                    ],
                    "id": 1,
                    "product": { // 产品信息
                        "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/0", // 产品主图
                        "name": "鱼皮（定制品）",  // 品名
                        "pno": "A098" // 品号
                    },
                    "rawFlg": "NONE", // 原料品 YES-是 NO-否 NONE-未设置
                    "runTime": "", // 定时执行时间
                    "rate": 0.3, // 折算比率
                    "runType": "NOW", // 定时修改价格 NOW-否 TASK-是
                    "status": "PASS"  // 审核状态 ASKFOR-待审核 PASS-通过 REFUSE-拒绝
                },
            ]
        }
    }

### JG-19 PA价格审核-通过
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/price/pa/askfor/pass
#### 参数
    *[id, id] id集合 
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### JG-20 PA价格审核-拒绝
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/price/pa/askfor/refuse
#### 参数
    *{
        "ids": [1,2,3], // id集合
        "remark": "不符合规定" // 拒绝理由
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### JG-21 签约价格管理-列表
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/price/sign
#### 参数
    keyword // 客户名称/品名/品号
    customerType // 客户类型 A、P、P2P、C
    status // 签约状态 NORMAL-正常 LOCK-锁定
    buttonPermissionFlg // 是否获取权限按钮 0-否 1-是
    pageNo // 页码
    pageSize // 行数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "pageNo": 1,
            "buttonPermissions": [
                {
                    "reSignButton": false, // 重新签约按钮
                    "cancelSignButton": true // 取消签约按钮
                },
                ...
            ],
            "datas": [
                {
                    "aPrice": 250, // A价
                    "pPrice": 200, // P价
                    "customerId": 32175, // 客户id
                    "customerName": "天津小蚁科技有限公司-上海【战略】", // 客户名称
                    "customerType": "P", 客户类型
                    "guige": "2kg/袋*4袋", // 规格
                    "id": 0,
                    "pno": "M018", // 品号
                    "aPrice": 1, // A价格
                    "pPrice": 2, // P价格
                    "price": 190, // 签约价
                    "productName": "去皮巴沙鱼柳(300-400)", // 品名
                    "status": "NORMAL", // NORMAL-正常 LOCK-锁定
                    "unit": "件", // 单位
                    "updateTime": "2018-12-12 12:12:12", // 操作时间
                    "updateUserName": "az" // 操作人
                },
                ...
            ]
        }
    }

### JG-22 签约价格管理-取消签约价
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/price/sign/cancel
#### 参数
    [1,2,3,4,5,6,7,8,9] // 主键id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### JG-23 签约价格管理-获取失效签约价详情
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/price/sign/{id}/expire
#### 参数
    *id // 主键id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "customerId": 32178, // 客户id
            "aPrice": 100, // A价格
            "pPrice": 80, // P价格
            "price": 82.7, // 签约价
            "pno": "M038", // 品号
            "productId": 4472, // 产品id
            "productUnitId": 7868, // 产品规格id
            "productName": "青占鱼150/200", // 品名
            "guige": "10kg/箱", // 规格
            "unit": "件" // 单位
        }
    }

### JG-24 签约价格管理-重新签约
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    POST /v2/price/sign/askfor/batch
#### 参数
    json body
    [
        {
            *customerId: 1, // 客户id 
            *productId: 1, // 产品id
            *productUnitId: 2, // 产品规格id
            *price: 12.5 // 签约价
        },
        ...
    ]
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### JG-25 签约价格管理-获取自动审核三个按钮(作废)
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/price/sign/auto/status
#### 参数
    无
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "openButton": false, // 开启按钮
            "closeButton": false, // 关闭按钮
            "logButton": false // 日志按钮
        }
    }

### JG-26 签约价格管理-开启自动审核
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/price/sign/auto/open
#### 参数
    无
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### JG-27 签约价格管理-关闭自动审核
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/price/sign/auto/close
#### 参数
    无    
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### JG-28 签约价格管理-获取自动审核日志
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/price/sign/auto/log
#### 参数
    无
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "datas": [
                {
                    "action": "OPEN", // 操作内荣，OPEN - 开启，CLOSE - 关闭
                    "createUserName": "凯龙", // 操作者
                    "createTime": "2018-11-28 12:12:12" // 操作时间
                }
            ],
            "total":12
        }
    }

### JG-29 签约价格审核-列表
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/price/sign/askfor
#### 参数
    keyword // 客户名称/品名/品号
    customerType // 客户类型
    status // 状态 ASKFOR-待审核 PASS-通过 REFUSE-拒绝
    buttonPermissionFlg // 是否获取权限按钮 0-否 1-是
    pageNo // 页码
    pageSize // 行数

#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "pageNo": 1,
            "buttonPermissions": [
                {
                    "refuseButton": true, // 拒绝按钮
                    "passButton": true // 通过按钮
                },
                ...
            ],
            "datas": [
                {
                    "createTime": "2018-12-05 01:51:10", // 操作信息-时间
                    "createUserName": "孙启萌", // 操作信息-操作人
                    "createRemark": "xxxxx", // 操作信息-备注
                    "checkRemark": "yyyyy" // 审核信息-备注
                    "checkTime": "2018-12-12 12:12:12", // 审核信息-时间
                    "checkUserName": "王丽萍", // 审核信息-操作人
                    "customerId": 32487, // 客户id
                    "customerName": "何小龙-徐州", // 客户名称
                    "customerType": "P", // 客户类型
                    "guige": "300g", // 规格
                    "id": 10,
                    "pno": "1750", // 品号
                    "aPrice": 1, // A价
                    "pPrice": 2, // P价
                    "price": 10, // 签约价
                    "productName": "热浪全虾脆", // 产品名称
                    "status": "ASKFOR", // 状态 ASKFOR-待审核 PASS-通过 REFUSE-拒绝
                    "unit": "盒", // 单位
                },
                ...
            ]
        }
    }

### JG-30 签约价格审核-通过
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/price/sign/askfor/pass
#### 参数
    *[1,2,3] id集合
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### JG-31 签约价格审核-拒绝
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/price/sign/askfor/refuse
#### 参数
    {
        "ids": [1,2,3], // id集合
        "remark": "签约价格低于成本价，拒绝" // 拒绝原因
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### JG-32 区域价格管理-列表
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/price/area
#### 参数
    keyword // 品名/品号
    pathId // 区域id
    pageNo // 页码
    pageSize // 行数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "pageNo": 1,
            "datas": [
                {
                    "areaName": "黑龙江-大庆市", // 区域
                    "remark": "xxx", // 备注 
                    "updateTime": "2018-12-12 12:12:12", // 操作信息-时间
                    "updateUserName": "嘻嘻", // 操作信息-操作人
                    "id": 22181,
                    "aPrice": 218, // A价
                    "pPrice": 175, // P价
                    "price": 194.5, // 区域价
                    "productName": "洋风椰蓉蓝莓大福",
                    "pno": "1671", // 品号
                    "giuge": "规格",// 规格
                    "unit": "单位" // 单位
                },
                ...
            ]
        }
    }

### JG-33 区域价格管理-新增
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    POST /v2/price/area/askfor
#### 参数
    jsob body
    {
        *productId: 1,
        *productUnitId: 2,
        *pathIdAndPriceList: [
            "010101,12.5" // 区域code 与 区域价格 以逗号相隔
        ],
        remark: "lsdkjf"
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### JG-34 区域价格管理-下载导入模版
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/price/area/template
#### 参数
    *checkCode 下载授权码
#### 响应
    stream

### JG-35 区域价格管理-导入
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    POST /v2/price/area/import
#### 参数
    form data
    "file": 对应的上传文件
    
#### 响应
    成功：
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    上传的数据出现错误:
    {
         "code": 1,
         "msg": "",
         "data": "数据错误"
    }
    上传的数据校验失败:
    {
        "code": 0,
        "msg": "",
        "data": "error_212323.xls" // 直接下载此文件
    }
    或者系统抛出的运行时异常，直接弹出信息即可

### JG-36 区域价格管理-删除
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    POST /v2/price/area
#### 参数
    *[1,2,3,4,5] id主键集合
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### JG-37 区域价格审核-列表
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/price/area/askfor
#### 参数
    keyword // 品名/品号
    pathId // 区域编码 060202
    status // 审核状态 ASKFOR-待审核 PASS-通过 REFUSE-拒绝
    buttonPermissionFlg // 是否获取权限按钮 0-否 1-是 
    pageNo // 页码
    pageSize // 行数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "refuseButton": true, // 拒绝按钮
                    "passButton": true // 通过按钮
                },
                ...
            ],
            "pageNo": 1,
            "datas": [
                {
                    "areaName": "河北-秦皇岛市-昌黎县", // 区域名称
                    "checkRemark": "", // 审核信息-备注
                    "checkTime": "", // 审核信息-时间
                    "checkUserName": "", // 审核信息-操作人
                    "createRemark": "test", // 申请信息-备注
                    "createTime": "2018-11-21 17:45:28", // 申请信息-时间
                    "createUserName": "孙启萌", // 申请信息-操作人
                    "guige": "300g", // 规格
                    "id": 28498,
                    "pno": "1750", // 品号
                    "aPrice": 218, // A价
                    "pPrice": 175, // P价
                    "price": 33, // 区域价
                    "productName": "热浪全虾脆", // 品名
                    "status": "ASKFOR", // 状态 ASKFOR-待审核 PASS-通过 REFUSE-拒绝
                    "unit": "盒", // 单位
                },
                ...
            ]
        }
    }

### JG-38 区域价格审核-通过
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/price/area/askfor/pass
#### 参数
    *[1,2,3] id集合
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### JG-39 区域价格审核-拒绝
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/price/area/askfor/refuse
#### 参数
    {
        "ids": [1,2,3], // id集合
        "remark": "此区域价格低于其它区域价格太多，拒绝" // 拒绝原因
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### JG-40 签约价管理-获取自动审核相关按钮
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/price/sign/auto/menus
#### 参数
    无
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "openButton": false, // 开启按钮
            "closeButton": false, // 关闭按钮
            "logButton": false // 日志按钮
        }
    }

### JG-41 PA价格审核-列表导出
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/price/pa/askfor/export
#### 参数
    keyword // 品名/品号
    processContent // 内容信息完整度 0-待维护 1-已完善
    processPrice // 发票信息完整度 0-待维护 1-已完善
    processInvoice // 价格信息完整度 0-待维护 1-已完善
    productStatus // 产品状态 NORMAL-正常or上架 LOCK-下架
    status // 审核状态 ASKFOR-待审核 PASS-通过 REFUSE-拒绝
    productName // 品名
    pno // 品号
    businessTypeId // 餐饮业态
    rawFlg // 原料品 YES-是 NO-否
    runType // 定时修改价格 0-否 1-是
    *date // 导出日期 yyyy-MM
    *checkCode // 下载码
#### 响应
    stream

### JG-42 签约价格审核-列表导出
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/price/sign/askfor/export
#### 参数
    keyword // 客户名称/品名/品号
    customerType // 客户类型
    status // 状态 ASKFOR-待审核 PASS-通过 REFUSE-拒绝
    *date // 导出日期 yyyy-MM
    *checkCode // 下载码

#### 响应
    stream

### JG-43 区域价格审核-列表导出
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/price/area/askfor/export
#### 参数
    keyword // 品名/品号
    pathId // 区域编号 060202
    status // 审核状态 ASKFOR-待审核 PASS-通过 REFUSE-拒绝
    *checkCode // 下载码
    *date // 导出日期 yyyy-MM
#### 响应
    stream