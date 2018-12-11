
## 供应商接口
### GYS-1. 查询供应商
#### 对接负责人
    刘宏宇
#### 模块负责人
    梁铁骑
#### 请求
    GET /v2/supplier
#### 参数
    keyword: "xxx" // 供应商名称、联系人名
    status: "NORMAL" // 供应商帐号状态 NORMAL 正常 LOCK 锁定
    payMode: "INBUY" // 供应商结算方式 INBUY 入结 OUTBUY 出结
    pageNo:"1" // 页码 默认1
    pageSize: "25" // 页面条数 默认25
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "account": "", // 帐号
                    "city": "湛江市", // 市
                    "contactAddress": "", // 联系地址
                    "contactMobile": "13922092109", // 联系手机号
                    "contactName": "陈经理", // 联系人
                    "contactPathId": "1908", // 联系地址PathId
                    "county": "湛江市", // 县
                    "createRole": 29157, // 创建角色ID
                    "createTime": "2018-01-31 13:31:40", // 创建就时间
                    "createUser": 89, // 创建人ID
                    "createUserName": "郭倩", // 创建人名
                    "deleteFlg": 0,
                    "id": 5530, // 供应商ID
                    "name": "", // 供应商名
                    "password": "", // 登录密码
                    "payMode": "INBUY", // 支付方式 INBUY 入结、OUTBUY 出结
                    "platformId": 1, // 所属平台 1 亚洲渔港 ，目前只有一家 亚洲渔港
                    "province": "广东", // 省
                    "status": "NORMAL" // 登录帐号状态 NORMAL 正常 LOCK 锁定
                }
            ],
            "pageNo": 1,
            "total": 0
        }
    }

### GYS-2. 获取供应明细
#### 对接负责人
    刘宏宇
#### 模块负责人
    梁铁骑
#### 请求
    GET /v2/supplier/{id}
#### 参数
    *id: 1 // 供应商ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "account": "account", // 供应商登录帐号
            "city": "北京市", // 供应商联系人城市
            "contactAddress": "contactAddress", // 供应商联系人详细地址
            "contactMobile": "contactMobile", // 供应商联系人手机号
            "contactName": "contactName", // 供应商联系人名
            "contactPathId": "0101", // 供应商联系地址PathId
            "county": "北京市", // 供应商城市
            "createRole": 1, // 创建角色ID
            "createTime": "2018-12-11 10:57:29", // 创建时间
            "createUser": 101, // 创建人ID
            "createUserName": "系统操作", // 创建人名
            "deleteFlg": 0, 
            "id": 5557, // 供应商ID
            "name": "", // 供应商名
            "password": "14e1b600b1fd579f47433b88e8d85291", // 供应商密码 MD5MD5 加密
            "payMode": "INBUY", // 供应商结算方式
            "platformId": 1, // 供应商所属平台
            "province": "北京", // 供应商联系方式省份
            "status": "NORMAL" // 供应商帐号状态 NORMAL 正常 LOCK 锁定
        }
    }

### GYS-3. 供应商新增
#### 对接负责人
    刘宏宇
#### 模块负责人
    梁铁骑
#### 请求
    POST /v2/supplier
#### 参数
    {
        *"name":"供应商1", // 供应商名
        *"payMode":"INBUY", // 供应商结算方式
        *"contactName":"contactName", // 供应商联系人
        *"contactMobile":"contactMobile", // 供应商联系人手机号
        *"contactPathId":"0101", // 供应商联系地址PathId
        *"contactAddress":"contactAddress", // 供应商联系详细地址
        *"account":"account" // 供应商帐号
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": 5557 // 新增的供应商ID
    }

### GYS-4. 供应商修改
#### 对接负责人
    刘宏宇
#### 模块负责人
    梁铁骑
#### 请求
    PUT /v2/supplier/{id}
#### 参数
    *id: 1 // 供应商ID
    {
        *"name":"供应商2", // 供应商名
        *"payMode":"INBUY", // 供应商结算方式
        *"contactName":"contactName", // 供应商联系人
        *"contactMobile":"contactMobile", // 供应商联系人手机号
        *"contactPathId":"0101", // 供应商联系地址PathId
        *"contactAddress":"contactAddress", // 供应商联系详细地址
        *"account":"account" // 供应商帐号
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### GYS-5. 修改供应商登录信息
#### 对接负责人
    刘宏宇
#### 模块负责人
    梁铁骑
#### 请求
    PUT /v2/supplier/account/{id}
#### 参数
    *id: 1 // 供应商ID
    {
        *"account":"xxxx", // 供应商帐号
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### GYS-6. 重置供应商密码
#### 对接负责人
    刘宏宇
#### 模块负责人
    梁铁骑
#### 请求
    PUT /v2/supplier/account/reset/{id}
#### 参数
    *id: 1 // 供应商ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### GYS-7. 锁定解锁供应商帐号
#### 对接负责人
    刘宏宇
#### 模块负责人
    梁铁骑
#### 请求
    PUT /v2/supplier/account/status/{id}
#### 参数
    *id: 1 // 供应商ID
    {
        "status": "NORMAL" // 状态 NORMAL 正常， LOCK 锁定
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### GYS-8. 供应商删除
#### 对接负责人
    刘宏宇
#### 模块负责人
    梁铁骑
#### 请求
    DELETE /v2/supplier/{id}
#### 参数
    *id: 1 // 供应商ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### GYS-9. 供应商日志查询
#### 对接负责人
    刘宏宇
#### 模块负责人
    梁铁骑
#### 请求
    GET /v2/supplier/log
#### 参数
    *id: 1 // 供应商ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "id": 1,
                    "opInfo": "新增供应商", // 操作信息
                    "opRole": 1,
                    "opTime": "2018-12-11 10:57:29.0",
                    "opUser": 101,
                    "opUserName": "系统操作",
                    "platformId": 1,
                    "supplierId": 5557
                }
            ],
            "pageNo": 1,
            "total": 0
        }
    }

### GYS-10. 供应商库费系数查询
#### 对接负责人
    刘宏宇
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/supplier/fee
#### 参数
    *supplierId:1 // 供应商ID
#### 响应

### GYS-11. 供应商库费系数新增
#### 对接负责人
    刘宏宇
#### 模块负责人
    刘宏宇
#### 请求
    POST /v2/supplier/fee
#### 参数
    {
        "depotId":1, // 仓库ID
        "supplierId":5557, // 供应商ID
        "depotFee":10.0, // 库费系数
        "serviceFee":20.0, // 服务费系数
        "calCross":1, // 是否越库 0 不越库 1 越库
        "calWeight":"NET", // 计重方式 NET 净重 GROSS 毛重
        "effectDate":"2018-12-11" // 生效日期 
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": 4096 // 新增后库费系数ID
    }

### GYS-12. 供应商库费系数修改
#### 对接负责人
    刘宏宇
#### 模块负责人
    刘宏宇
#### 请求
    PUT /v2/supplier/fee/{id}
#### 参数
    *id: 1 // 库费系数ID
    {
        "depotId":1, // 仓库ID
        "supplierId":5557, // 供应商ID
        "depotFee":10.0, // 库费系数
        "serviceFee":20.0, // 服务费系数
        "calCross":1, // 是否越库 0 不越库 1 越库
        "calWeight":"NET", // 计重方式 NET 净重 GROSS 毛重
        "effectDate":"2018-12-11" // 生效日期 
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### GYS-13. 供应商库费系数删除
#### 对接负责人
    刘宏宇
#### 模块负责人
    刘宏宇
#### 请求
    DELETE /v2/supplier/fee/{id}
#### 参数
    *id: 1 // 库费系数ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }



### 模版
#### 对接负责人
#### 模块负责人
#### 请求
#### 参数
#### 响应