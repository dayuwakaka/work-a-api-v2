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
    orderKeyWord: "xx" // 调价单、差价单、销售单号
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
                    "status": "INVALID", // Type = BEFORE INVALID: 作废 RUN：确认 PASS|COMPLETE：CPA审核通过
                                         // Type = AFTER INVALID:未生效：RUN：确认 PASS：CPA审核通过 COMPLETE 财务审核通过 COMPLETE 财务审核通过
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
            "status": "COMPLETE", // Type = BEFORE INVALID: 作废 RUN：确认 PASS|COMPLETE：CPA审核通过
                                  // Type = AFTER INVALID:未生效：RUN：确认 PASS：CPA审核通过 COMPLETE 财务审核通过 COMPLETE 财务审核通过
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
    
    
### DD-51. 销售退新增
#### 模块负责人
    尹洪明
#### 请求
    POST /order/sr
#### 参数
    {
        "orderSr": {
            *"platformId": 1,                    // 平台商 默认1
            *"customerId": 32805,                // 客户ID
            *"saOrderId": "SA180611037577",      // 销售单号
            *"toDepotId": 40,                    // 入库仓ID
            *"toDepotName": "DC（大连铁越仓）",     // 入库仓名
            *"balance": 20,                      // 差额
            "remark": "这是一句备注",             // 备注
            *"isFreight": 1                      // 是否包含运费
        },
        "orderSrPro": [
            {
                *"productId": 4152,              // 产品ID
                *"productunitId": 7383,          // 产品规格ID
                *"pcount": 1,                    // 退货数量
                *"price": 391,                   // 退货价
                *"giftFlg": 0                    // 是否赠品   0 非曾平 1 申请的赠品 2 活动赠品
            },
            {
                "productId": 100,
                "productunitId": 184,
                "pcount": 1,
                "price": 21,
                "giftFlg": 0
            }
        ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    

### DD-52. 销售退修改
#### 模块负责人
    尹洪明
#### 请求
    PUT /order/sr/{orderId}
#### 参数
    *orderId        // 销售退编号
    {
        "orderSr": {
            *"platformId": 1,                    // 平台商 默认1
            *"customerId": 32805,                // 客户ID
            *"saOrderId": "SA180611037577",      // 销售单号
            *"toDepotId": 40,                    // 入库仓ID
            *"toDepotName": "DC（大连铁越仓）",     // 入库仓名
            *"balance": 20,                      // 差额
            "remark": "这是一句备注",             // 备注
            *"isFreight": 1                      // 是否包含运费
        },
        "orderSrPro": [
            {
                *"productId": 4152,              // 产品ID
                *"productunitId": 7383,          // 产品规格ID
                *"pcount": 1,                    // 退货数量
                *"price": 391,                   // 退货价
                *"giftFlg": 0                    // 是否赠品   0 非曾平 1 申请的赠品 2 活动赠品
            },
            {
                "productId": 100,
                "productunitId": 184,
                "pcount": 1,
                "price": 21,
                "giftFlg": 0
            }
        ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }     
    
### DD-53. 销售退列表
#### 模块负责人
    尹洪明
#### 请求
    GET /order/sr
#### 参数
    buttonPermissionFlg // 权限标志 0 无权限  1 查询权限
    toDepotId           // 入库仓
    saOrderId           // 销售单编号
    orderId             // 销售退编号
    status              // 状态
    customerName        // 客户名
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "setRunButton": true,
                    "detailButton": true,
                    "editButton": true,
                    "delButton": true,
                    "logButton": true,
                    "passButton":false,
                    "refuseButton":false
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "balance": 20,
                    "completeTime": "",
                    "createRole": 1,
                    "createTime": "2019-03-12 14:29:26",
                    "createUser": 518,
                    "createUserName": "孙启萌",
                    "customerId": 32805,
                    "customerName": "18698665798",
                    "customerType": "A",
                    "deleteFlg": 0,
                    "discountPrice": 20,
                    "freight": 10,
                    "id": 6,
                    "isFreight": 0,
                    "jian": 1,
                    "modifyTime": "",
                    "orderId": "SR1903120000020",
                    "orderSrPro": null,
                    "passTime": "",
                    "platformId": 1,
                    "price": 33,
                    "rebatePrice": 0,
                    "refuseTime": "",
                    "remark": "这是一句备注",
                    "saOrderId": "SA180611037577",
                    "san": 1,
                    "status": "INVALID",
                    "toDepotId": 40,
                    "toDepotName": "DC（大连铁越仓）",
                    "totalPrice": 382
                }
            ],
            "pageNo": 1,
            "total": 0
        }
    }
    
    
    
### DD-54. 销售退详情
#### 模块负责人
    尹洪明
#### 请求
    GET /order/sr/detail/{orderId}
#### 参数
    *orderId        // 销售退编号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "balance": 20,                      // 差额
            "completeTime": "",                 // 签收时间
            "createRole": 1,                    // 创建人角色ID
            "createTime": "2019-03-12 14:29:26",    // 创建时间
            "createUser": 518,                  // 创建人ID
            "createUserName": "孙启萌",            // 创建人名
            "customerId": 32805,                // 客户ID
            "customerName": "",                 // 客户名
            "customerType": "",                 // 客户类型
            "deleteFlg": 0,                     // 删除标志 0 未删除 1 删除
            "discountPrice": 20,                // 优惠金额
            "freight": 10,                      // 运费
            "id": 6,                            // id 
            "isFreight": 0,                     // 是否包含运费
            "jian": 1,                          // 件
            "modifyTime": "",                   // 修改时间
            "orderId": "SR1903120000020",       // 退单号
            "orderSrPro": [
                {
                    "deleteFlg": 0,             // 是否删除 0 未删除 1 已删除
                    "giftFlg": 0,               // 是否赠品 0 非曾平 1 申请的赠品  2 活动赠品
                    "guige": "",                // 规格
                    "id": 5,                        // ID
                    "orderId": "SR1903120000020",       // 退单号
                    "pcount": 1,                    // 退货数量
                    "pno": "",                  // 品号
                    "price": 391,               // 退货价格
                    "productId": 4152,          // 退货产品ID
                    "productName": "",          // 退货产品名
                    "productunitId": 7383,      // 退货产品规格ID
                    "totalPrice": 391,            // 退货总价
                    "unit": ""                  //　产品单位
                },
                {
                    "deleteFlg": 0,
                    "giftFlg": 0,
                    "guige": "",
                    "id": 6,
                    "orderId": "SR1903120000020",
                    "pcount": 1,
                    "pno": "",
                    "price": 21,
                    "productId": 100,
                    "productName": "",
                    "productunitId": 184,
                    "totalPrice": 21,
                    "unit": ""
                }
            ],
            "passTime": "",                     // 审核通过时间
            "platformId": 1,                    // 平台商ID
            "price": 33,                        // 原单价
            "rebatePrice": 0,                   // 优惠金额
            "refuseTime": "",                   // 拒绝时间
            "remark": "这是一句备注",             // 备注
            "saOrderId": "SA180611037577",      // 销售单号
            "san": 1,                           // 散
            // 状态   (INVALID:未生效,RUN:生效,FMS_PASS: 财务通过,COMPLETE:已签收)
            "status": "INVALID",                
            "toDepotId": 40,                    // 入库仓ID
            "toDepotName": "DC（大连铁越仓）",     // 入库仓名
            "totalPrice": 382                       // 最终退款额
        }
    }   

### DD-55. 销售退确认执行&审核通过&审核拒绝
#### 模块负责人
    尹洪明
#### 请求
    PUT /order/sr/status/{orderId}
#### 参数
    * orderId           // 退单编号
    {
        *"status": "RUN"     // 操作 RUN:确认执行,FMSPASS: 审核通过 INVALID 审核拒绝
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### DD-56. 销售退删除
#### 模块负责人
    尹洪明
#### 请求
    DELETE /order/sr/{orderId}
#### 参数
    *orderId        // 销售退编号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }     
    

### DD-57. 销售退日志
#### 模块负责人
    尹洪明
#### 请求
    GET /order/sr/log/{orderId}
#### 参数
    *orderId        // 销售退编号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "id": 3,
                    "opInfo": "新增退货单",             // 操作内容
                    "opRole": 1,
                    "opTime": "2019-03-12 14:29:26",    // 操作时间
                    "opUser": 518,
                    "opUserName": "孙启萌",            // 操作人
                    "orderId": "SR1903120000020"
                }
            ],
            "pageNo": 1,
            "total": 0
        }
    }        