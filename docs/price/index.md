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
|status|状态|normal 正常 lock 锁定|
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
|unitName|单位名称|
|aPrice|A价格|
|pPrice|P价格|
|tPrice|T价格|
|status|状态|normal 正常 lock 锁定|
|startDate|开始时间|
|endDate|结束时间|
|businessunitType|事业部限制类型|ALL 无限制 PART 部分事业部|
|businessunit|事业部id列表|
|customerattrType|客户属性限制类型|ALL 无限制 PART 部分客户属性|
|customerattr|客户属性列表|


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
                },
                {
                    "deleteButton": false, // 删除
                    "lockButton": true, // 锁定
                    "unlockButton": false, // 解锁
                    "editButton": true, // 编辑
                    "logButton": true // 操作日志
                },
                {
                    "deleteButton": false, // 删除
                    "lockButton": true, // 锁定
                    "unlockButton": false, // 解锁
                    "editButton": true, // 编辑
                    "logButton": true // 操作日志
                }
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
                    "customerattrType":"ALL",
                    "customerAttr": [
                        
                    ]
                },
                {
                    "specialId": 6,
                    "productId": 2231,
                    "pno": "0755",
                    "productName": "蒜蓉粉丝鲍（特惠装）",
                    "productunitId": 3869,
                    "unitName": "件",
                    "aPrice": 742,
                    "pPrice": 594,
                    "tPrice": 56,
                    "status": "NORMAL",
                    "startDate": "2017-12-21",
                    "endDate": "2018-05-31",
                    "businessunitType":"ALL",
                    "businessunit": [
                        
                    ],
                    "customerattrType":"PART",
                    "customerAttr": [
                        3,
                        1,
                        2
                    ]
                },
                {
                    "specialId": 5,
                    "productId": 1195,
                    "pno": "eb0050",
                    "productName": "龙虾（冻煮）（400-450g/只）（ASAE）",
                    "productunitId": 2056,
                    "unitName": "件",
                    "aPrice": 630,
                    "pPrice": 598,
                    "tPrice": 22,
                    "status": "NORMAL",
                    "startDate": "2017-12-21",
                    "endDate": "2018-05-31",
                    "businessunitType":"PART",
                    "businessunit": [
                        3,
                        16,
                        27
                    ],
                    "customerattrType":"ALL",
                    "customerAttr": [
                        
                    ]
                }
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
|customerattrType|客户属性限制类型|ALL 无限制 PART 部分客户属性|
|customerattr|客户属性列表|


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
            "customerattrType":"PART"
            "customerAttr": [
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
|tprice|特价|必|
|businessunitType|事业部限制类型|必 ALL 无限制 PART 部分事业部|
|businessunit|事业部列表|
|customerattrType|客户属性限制类型|必 ALL 无限制 PART 部分|
|customerattr|客户属性列表|
|startDate|开始时间|必|
|endDate|结束时间|必|



#### 3.4 请求示例
    {
        "productId":1,
        "productunitId":1,
        "tprice":35.2,
        "businessunitType":"PART",
        "businessunit":[1,3,2],
        "customerattrType":"PART",
        "customerattr":[1,3,2],
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
|tprice|特价|必|
|businessunitType|事业部限制类型|必 ALL 无限制 PART 部分事业部|
|businessunit|事业部列表|
|customerattrType|客户属性限制类型|必 ALL 无限制 PART 部分|
|customerattr|客户属性列表|
|startDate|开始时间|必|
|endDate|结束时间|必|


#### 4.4 请求示例
    {
        "productId":1,
        "productunitId":1,
        "tprice":35.2,
        "businessunitType":"PART",
        "businessunit":[1,3,2],
        "customerattrType":"PART",
        "customerattr":[1,3,2],
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
                {
                    "specialId": 64,
                    "content": "锁定特价",
                    "createRole": 0,
                    "createUser": 0,
                    "createUserName": "樊嘉辉",
                    "createTime": "2018-08-25 14:19:42"
                },
                {
                    "specialId": 64,
                    "content": "删除特价",
                    "createRole": 0,
                    "createUser": 0,
                    "createUserName": "樊嘉辉",
                    "createTime": "2018-08-25 14:19:42"
                }
            ],
            "pageNo": 1,
            "total": 3
        }
    }
    
 