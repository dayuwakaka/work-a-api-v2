## 订单接口

### DD-1. 新增调价单接口
#### 模块负责人
    刘宏宇
#### 请求
    PUT /v2/order/ap
#### 参数
    {
        *"saOrderId": "test-03", // 销售订单号
        *"customerId": 149, // 客户ID
        *"type":"BEFORE", // 调价单类型 BEFORE 差价单 AFTER 调价单
        *"orderApPros":[
            {
                *"saOrderId": "test-03", // 销售单号
                *"productId": 1, // 产品ID
                *"productUnitId": 1, //  规格ID
                *"pcount": 1, //  数量
                *"salePrice": 2, // 销售单价
                *"askPrice": 1 // 申请单价
            }
        ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": "AP1903110000008" // 生成的调价单号
    }

### DD-2. 差价、调价审核通过
#### 模块负责人
    刘宏宇
#### 请求
    POST /v2/order/ap/pass/{orderId}
#### 参数
    *orderId: "AP1903110000008" // 差价、调价单ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### DD-3.差价、调价单拒绝
#### 模块负责人
    刘宏宇
#### 请求
    POST /v2/order/ap/refuse/{orderId}
#### 参数
    *orderId: "AP1903110000008" // 差价、调价单ID
    body
        "xxx" // 拒绝理由
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### DD-4.调价单完成
#### 模块负责人
    刘宏宇  
#### 请求
    POST /v2/order/ap/complete/{orderId}
#### 参数
    *orderId: "AP1903110000008" // 调价单ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### DD-5.调价单查询
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/order/ap
#### 参数
    orderIdKeyWord: "xxx" // 调价、差价单号
    saOrderIdKeyWord: "xxx" // 销售订单号
    pageNo: 1 // 页码
    pageSize: 25 // 页条数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "deleteButton": true, // 删除按钮
                    "refuseButton": false, // 拒绝按钮
                    "passButton": false, // 通过按钮
                    "logButton": true, // 日志按钮
                    "completeButton": false // 完成按钮，跟通过按钮一个图标
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "completeTime": "", // 完成时间
                    "createRole": 1, // 创建角色ID
                    "createTime": "2019-03-11", // 创建时间
                    "createUser": 518, // 创建人ID
                    "createUserName": "孙启萌", // 创建人
                    "customerId": 149, // 客户ID
                    "deleteFlg": 0, // 删除标记
                    "id": 5, // id
                    "mainOrderId": "", // 主单ID
                    "modifyTime": "2019-03-11", // 修改时间
                    "orderId": "AP1903110000005", // 调价单号
                    "passTime": "", // 通过时间
                    "platformId": 1, // 平台ID
                    "remark": "", // 备注
                    "runTime": "", // 确认时间
                    "saOrderId": "test-01", // 销售单号
                    "status": "INVALID", // 状态 RUN 确认，INVALID 作废 若Type = BEFORE， COMPLETE 显示为CPA通过  若Type = AFTER PASS 显示为CPA通过，COMPLETE 财务通过
                    "totalAskPrice": 1, // 请求总价
                    "totalBalancePrice": -1, // 请求总差价
                    "totalSalePrice": 2, // 请求原总价
                    "type": "BEFORE" // 类型 BEFORE 发货前 AFTER 发货后
                }
            ],
            "pageNo": 1,
            "total": -1
        }
    }

### DD-6.调价单明细
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/order/ap/detail/{orderId}
#### 参数
    *orderId: "xxx" // 调价单号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "completeTime": "2019-03-11", // 完成时间
            "createRole": 1, // 创建角色ID
            "createTime": "2019-03-11", // 创建时间
            "createUser": 518, // 创建人ID
            "createUserName": "孙启萌", // 创建人名
            "customerId": 149, // 客户ID
            "deleteFlg": 0, // 删除标记
            "id": 10, // ID
            "mainOrderId": "", // 主单号
            "modifyTime": "2019-03-11", // 修改时间
            "orderApLogs": [
                {
                    "id": 19, // 日志ID
                    "opInfo": "创建调价单", // 操作内容
                    "opRole": 1, // 操作角色ID
                    "opTime": "2019-03-11", // 操作时间
                    "opUser": 518, // 操作人
                    "opUserName": "孙启萌", // 操作人名
                    "orderId": "AP1903110000010" // 操作单号
                }
            ],
            "orderApPros": [ // 调价单明细
                {
                    "askPrice": 1, // 调价单价
                    "balance": -1, // 差价单价
                    "deleteFlg": 0, // 删除标记
                    "id": 6, // 明细ID
                    "orderId": "AP1903110000010", // 调价单号
                    "pcount": 1, // 数量
                    "productId": 1, // 产品ID
                    "productUnit": { // 产品规格信息
                        "guige": "500g(23-25枚）/盒", // 规格
                        "id": 1, // 规格ID
                        "name": "香草凤尾虾", // 产品名
                        "perunit": 1, // 转化率
                        "pno": "0151", // 品号
                        "productId": 1, // 产品ID
                        "unit": "盒" // 单位
                    },
                    "productUnitId": 1, // 规格ID
                    "saOrderId": "test-05", // 销售单号
                    "salePrice": 2 // 销售单价
                }
            ],
            "orderId": "AP1903110000010", // 调价单号
            "passTime": "2019-03-11", // 通过时间
            "platformId": 1, // 平台ID
            "remark": "", // 备注
            "runTime": "2019-03-11", // 确认时间
            "saOrderId": "test-05", // 销售单号
            "status": "COMPLETE", // 状态 INVALID 作废 RUN 确认 Type = BEFORE COMPLETE CPA审核通过 Type = AFTER PASS CPA审核通过 COMPLETE 财务审核通过
            "totalAskPrice": 1, // 调价总价
            "totalBalancePrice": -1, // 调价总差价
            "totalSalePrice": 2, // 销售原总价
            "type": "AFTER" // 单据类型 BEFORE 发出前调价 AFTER 发出后调价
        }
    }

### DD-7. 调价单日志
#### 模块负责人
    刘宏宇  
#### 请求
    GET /v2/order/ap/log/{orderId}
#### 参数
    *orderId: "xxx"
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "id": 24,
                    "opInfo": "退款流水号为：15522956380041676770264700772173", // 操作内容
                    "opRole": 1, // 操作角色ID
                    "opTime": "2019-03-11", // 操作时间
                    "opUser": 518, // 操作人ID
                    "opUserName": "孙启萌", // 操作人
                    "orderId": "AP1903110000010" // 操作单号
                }
            ],
            "pageNo": 1,
            "total": -1
        }
    }