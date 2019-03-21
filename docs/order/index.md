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
    type: "BEFORE" // BEFORE 发出前 AFTER 发出后
    statuses[]: "xx" // BEFORE 发出前 INVALID 作废 RUN 确认 COMPLETE CPA审核通过
                   // AFTER 发出后 INVALID 未生效 RUN 确认 PASS CPA审核通过 COMPLETE 财务审核通过
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
                        "mainImg": "xxx" // 主图
                    },
                    "productUnitId": 1, // 规格ID
                    "saOrderId": "test-05", // 销售单号
                    "salePrice": 2 // 销售单价
                }
            ],
            "customer":{
                "shortName": "xxx" // 客户名
            },
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
            "remark": "这是一句备注",             // 备注
            *"isFreight": 1                      // 是否包含运费
        },
        "orderSrPro": [
            {
                *"productId": 4152,              // 产品ID
                *"productunitId": 7383,          // 产品规格ID
                *"pcount": 1,                    // 退货数量
                *"oldPrice": 391,                // 成交价格
                *"price": 391,                   // 退货价
                *"giftFlg": 0                    // 是否赠品   0 非曾平 1 申请的赠品 2 活动赠品
            },
            {
                "productId": 100,
                "productunitId": 184,
                "pcount": 1,
                "oldPrice": 21,
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
            "remark": "这是一句备注",             // 备注
            *"isFreight": 1                      // 是否包含运费
        },
        "orderSrPro": [
            {
                *"productId": 4152,              // 产品ID
                *"productunitId": 7383,          // 产品规格ID
                *"pcount": 1,                    // 退货数量
                *"oldPrice": 391,                // 成交价格
                *"price": 391,                   // 退货价
                *"giftFlg": 0                    // 是否赠品   0 非曾平 1 申请的赠品 2 活动赠品
            },
            {
                "productId": 100,
                "productunitId": 184,
                "pcount": 1,
                *"oldPrice": 21,                
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
    order           // 腿单号、订单号
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
                    "passButton":false,
                    "refuseButton":false,
                    "refundButton": false
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "completeTime": "",
                    "createRole": 1,
                    "createTime": "2019-03-12 14:29:26",        // 创建时间
                    "createUser": 518,
                    "createUserName": "孙启萌",                // 创建人
                    "customerId": 32805,
                    "customerName": "18698665798",          // 客户名
                    "customerType": "A",                    // 客户类型 A客户 P客户 C客户 P2P客户
                    "deleteFlg": 0,
                    "discountPrice": 20,
                    "freight": 10,              // 运费
                    "id": 6,               // id
                    "isFreight": 0,         // 是否包含运费
                    "isParent": 0,          // 0 普通客户 1 总店  2 分店
                    "jian": 1,          // 件数量
                    "modifyTime": "",
                    "orderId": "SR1903120000020",       // 退单号
                    "orderSrLog": null,
                    "orderSrPro": null,
                    "passTime": "",
                    "platformId": 1,
                    "price": 33,                    
                    "rebate": 10,                       // 折扣
                    "rebatePrice": 0,
                    "receiveTime": "",
                    "refuseTime": "",
                    "remark": "这是一句备注",
                    "saOrderId": "SA180611037577",      // 关联订单号
                    "san": 1,                           // 散货数量
            // 状态   (INVALID:未生效,RUN:生效,FMS_PASS: 财务通过,RECEIVE:已签收,COMPLETE 已完成)
                    "status": "INVALID",
                    "toDepotId": 40,
                    "toDepotName": "DC（大连铁越仓）",     // 入库仓
                    "totalPrice": 382                   // 实退
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
            "completeTime": "",                
            "createRole": 1,                  
            "createTime": "2019-03-12 14:29:26", 
            "createUser": 518,                 
            "createUserName": "孙启萌",
            "customerId": 32805,                
            "customerName": "",                 // 客户名
            "customerType": "", 
            "deleteFlg": 0,                    
            "discountPrice": 20,              
            "freight": 10,                      // 退运费
            "id": 6,                            // id 
            "isFreight": 0,                     // 是否包含运费 0 不包含 1 包含
            "isParent": 0,  
            "jian": 1,                          // 件数
            "modifyTime": "",                  
            "orderId": "SR1903120000020",       // 退单号
            "orderSrLog": [
                {
                    "id": 11,
                    "opInfo": "修改退货单",      // 操作内容
                    "opRole": 0,
                    "opTime": "2019-03-13 15:58:10",    // 操作时间
                    "opUser": 0,
                    "opUserName": "孙启萌",            // 操作人
                    "orderId": "SR1903130000001"
                }
            ]
            "orderSrPro": [
                {
                    "deleteFlg": 0,           
                    "giftFlg": 0,               // 是否赠品 0 非曾平 1 申请的赠品  2 活动赠品
                    "guige": "",                // 产品规格
                    "id": 5,                        // ID
                    "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201707/1b56214371d52d1e5d47cef59b55b31a.jpg",
                    "oldPrice": 391,                    // 成交价格
                    "orderId": "SR1903120000020",       
                    "pcount": 1,                    // 退货数量
                    "pno": "",                  // 品号
                    "price": 391,               // 退货价格
                    "productId": 4152,          // 退货产品ID
                    "productName": "",          // 退货产品名
                    "productunitId": 7383,      // 退货产品规格ID
                    "totalPrice": 391,            // 退款金额
                    "unit": ""                  //　产品单位
                }
            ],
            "passTime": "",                  
            "platformId": 1,                   
            "price": 33,                        // 产品总价
            "rebate": 10,                       // 已用折扣
            "rebatePrice": 0,                 
            "refuseTime": "",                  
            "remark": "这是一句备注",             // 退单备注
            "saOrderId": "SA180611037577",      // 订单号
            "san": 1,                           // 散货
            "status": "INVALID",                // 状态 INVALID 未生效 RUN 已执行 FMS_PASS 已审核通过 RECEIVE 已签收 COMPLETE 已退款
            "toDepotId": 40,                       
            "toDepotName": "DC（大连铁越仓）",     // 入库仓名
            "totalPrice": 382                       // 总计
        }
    }   

### DD-55. 销售退状态变更(已废弃)
#### 模块负责人
    尹洪明
#### 请求
    PUT /order/sr/status/{orderId}
#### 参数
    * orderId           // 退单编号
    {
        *"status": "RUN"     // 操作 RUN:确认执行,FMS_PASS: 审核通过 INVALID 审核拒绝 COMPLETE 退款
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
 
### DD-57. 销售退详情(新增、修改拉取明细)
#### 模块负责人
    尹洪明
#### 请求
    GET /order/sr/detail
#### 参数
    *saOrderId        // 销售订单号
    orderId        // 销售退（新增时拉取，不需要传，修改时拉取需要）
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "completeTime": "",
            "createRole": 0,
            "createTime": "",
            "createUser": 0,
            "createUserName": "",
            "customerId": 2434,         // 客户ID
            "customerName": "么志勇",      // 客户名
            "customerType": "",
            "deleteFlg": 0,
            "discountPrice": 0,
            "freight": 0,               // 运费
            "id": 8,
            "isFreight": 0,             // 是否包含运费 0 不包含 1 包含
            "isParent": 0,
            "jian": 0,                  // 件
            "modifyTime": "",
            "orderId": "SR1903140000007",   // 退单号
            "orderSrLog": null,
            "orderSrPro": [
                {
                    "deleteFlg": 0,
                    "giftFlg": 0,                   // 是否赠品 0 非赠品  1 曾陪你过
                    "guige": "500g(23-25枚）/盒",  // 规格
                    "id": 0,
                    "leftPcount": 3,                // 数量
                    "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/ec90940549d364b0982427f87dd86747.jpg",
                    "oldPrice": 32.5,               // 成交价
                    "orderId": "",
                    "pcount": 2,                    // 退货数量
                    "pno": "0151",                  // 品号
                    "price": 30,                    // 退货价格
                    "productId": 1,                 // 产品ID
                    "productName": "香草凤尾虾",     // 产品名
                    "productunitId": 1,             // 产品规格ID
                    "totalPrice": 60,               // 退款金额
                    "unit": "盒"                     // 产品单位
                }
            ],
            "passTime": "",
            "platformId": 0,
            "price": 60,                            // 产品总价
            "rebate": 8,                            // 折扣
            "rebatePrice": 0,
            "receiveTime": "",
            "refuseTime": "",
            "remark": "这是一句备注2222",             // 备注
            "saOrderId": "SA1903140000034-1",       // 订单号
            "san": 2,                               // 散货数
            "status": null,
            "toDepotId": 51,                        // 入库仓ID
            "toDepotName": "DC（天津优和仓 ）",        // 入库仓名
            "totalPrice": 52                        // 总计
        }
    }

### DD-58. 销售退计算合计等
#### 模块负责人
    尹洪明
#### 请求
    PUT /order/sr/calculatediscount
#### 参数
    {
        "orderSr": {
            "saOrderId": "SA180611037577",      // 销售单号
            "orderId":"SR18201905223342",       // 退单号，修改退单时传递
            "isFreight": 1                      // 是否包含运费
        },
        "orderSrPro": [
            {
                "productunitId": 7383,          // 规格ID
                "pcount": 1,                    // 退货数量
                "price": 391,                   // 退货价
                "giftFlg": 0                    // 是否赠品
            },
            {
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
        "data": {
            "completeTime": "",
            "createRole": 0,
            "createTime": "",
            "createUser": 0,
            "createUserName": "",
            "customerId": 0,
            "customerName": "",
            "customerType": "",
            "deleteFlg": 0,
            "discountPrice": 20,
            "freight": 10,              // 运费
            "id": 0,
            "isFreight": 1,
            "isParent": 0,
            "jian": 1,                  // 件
            "modifyTime": "",
            "orderId": "",
            "orderSrLog": null,
            "orderSrPro": [
                {
                    "deleteFlg": 0,
                    "giftFlg": 0,
                    "guige": "",
                    "id": 0,
                    "leftPcount": 0,
                    "mainImg": "",
                    "oldPrice": 0,
                    "orderId": "",
                    "pcount": 1,
                    "pno": "",
                    "price": 391,
                    "productId": 0,
                    "productName": "",
                    "productunitId": 7383,      // 产品规格ID
                    "totalPrice": 391,      // 退款金额
                    "unit": ""
                },
                {
                    "deleteFlg": 0,
                    "giftFlg": 0,
                    "guige": "",
                    "id": 0,
                    "leftPcount": 0,
                    "mainImg": "",
                    "oldPrice": 0,
                    "orderId": "",
                    "pcount": 1,
                    "pno": "",
                    "price": 21,
                    "productId": 0,
                    "productName": "",
                    "productunitId": 184,
                    "totalPrice": 21,
                    "unit": ""
                }
            ],
            "passTime": "",
            "platformId": 0,
            "price": 412,           // 产品总价
            "rebate": 20,           // 折扣
            "rebatePrice": 0,
            "receiveTime": "",
            "refuseTime": "",
            "remark": "",
            "saOrderId": "SA180611037577",
            "san": 1,                // 散
            "status": null,
            "toDepotId": 0,
            "toDepotName": "",
            "totalPrice": 402       // 总计
        }
    }
    
    
### DD-59. 销售退确认执行
#### 模块负责人
    尹洪明
#### 请求
    PUT /order/sr/run/{orderId}/{saOrderId}
#### 参数
    * orderId           // 退单编号
    * saOrderId             // 订单号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
### DD-60. 销售退审核通过
#### 模块负责人
    尹洪明
#### 请求
    PUT /order/sr/pass/{orderId}/{saOrderId}
#### 参数
    * orderId           // 退单编号
    * saOrderId             // 订单号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
### DD-61. 销售退审核拒绝
#### 模块负责人
    尹洪明
#### 请求
    PUT /order/sr/refuse/{orderId}/{saOrderId}
#### 参数
    * orderId           // 退单编号
    * saOrderId             // 订单号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
### DD-62. 销售退退款
#### 模块负责人
    尹洪明
#### 请求
    PUT /order/sr/complete/{orderId}/{saOrderId}
#### 参数
    * orderId           // 退单编号
    * saOrderId             // 订单号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
### DD-101. 赠品-列表
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/saorder/gift/askfor
#### 参数
    orderId：单号
    status：状态 INVALID：待审核 REFUSE：拒绝 PASS：通过
    buttonPermissionFlg：1 - 获取权限按钮列表 0 -否
    pageNo: 页码
    pageSize: 行数
#### 响应    
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                        {
                            "refuseButton": true, // 拒绝按钮
                            "passButton": true, // 通过按钮
                            "logButton": true // 日志按钮
                        }
                    ],
                    "dataSums": null,
                    "datas": [
                        {
                            "checkRemark": "", // 审核备注
                            "checkRole": 0,
                            "checkTime": "", // 审核时间
                            "checkUser": 0,
                            "checkUserName": "", // 审核人
                            "createName": "孙启萌", // 创建人
                            "createRole": 0,
                            "createTime": "2019-03-14 17:16:51", // 创建时间
                            "createUser": 0,
                            "customer": {
                                "shortName": "么志勇", // 客户名称
                            },
                            "customerId": 2434,
                            "id": 18, // 主键id
                            "jian": 0, // 件
                            "remark": "", // 申请备注
                            "saOrderId": "SA1903140000040", // 销售单号
                            "san": 10, // 散
                            "status": "INVALID", // 状态 INVALID：待审核 REFUSE：拒绝 PASS：通过
                            "totalprice": 325 // 赠品金额
                        }
                    ],
                    "pageNo": 1,
                    "total": -1
        }
    }
    
### DD-102. 赠品-详情
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/saorder/gift/askfor/{id}
#### 参数
    id: 主键id
#### 响应    
    {
        "code": 100000,
        "msg": "",
        "data": {
            "id": 18,
            "orderGiftProAskForVOs": [
                {
                    "pcount": 10, // 数量
                    "price": 32.5, // 赠品价格
                    "totalprice": 325, // 赠品小计
                    "productUnit": {
                        "guige": "500g(23-25枚）/盒", // 规格
                        "product": {
                            "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/ec90940549d364b0982427f87dd86747.jpg", // 产品主图url
                            "name": "香草凤尾虾", // 品名
                            "pno": "0151", // 品号
                        },
                        "unit": "盒", // 单位
                    }
                }
            ],
            "remark": "", // 申请备注
            "saOrderId": "SA1903140000040",
            "status": "INVALID",
            "totalprice": 325 // 赠品金额
        }
    }
    

### DD-103. 赠品-审批拒绝
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/saorder/gift/askfor/refuse
#### 参数
    {
        ids: [1,2,3] // 主键
        remark: "赠品价格太高，搭赠赔本" // 备注
    }
#### 响应    
    {
        "code": 100000,
        "msg": "",
        "data": null
    }


### DD-104. 赠品-审批通过
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/saorder/gift/askfor/pass
#### 参数
    [1,2,3] // 主键
#### 响应    
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### DD-105. 销售订单-列表
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/saorder
#### 参数
    buttonPermissionFlg: 1,
    customerId: 客户id,
    orderId: 销售订单号,
    tradefrom: 下单方式 SYS-后台手动下单 SELF-客户自主下单
    status: 订单状态 INVALID:订单未生效,SET:提交物流中,RUN:订单生效,SEND:已发出,COMPLETE:已签收
    payFlg： 结款状态 0-未结款 1-已结款
    createUserName： 创建人
    createStartDate: 创建开始日期
    createEndDate: 创建结束日期
    sendStartDate: 发货开始日期
    sendEndDate: 发货结束日期
#### 响应    
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                     "editBaseButton": false, // 修改基本信息按钮
                     "payButton": false, // 支付按钮
                     "exportButton": false, // 导出按钮
                     "deleteButton": false, // 删除按钮
                     （废）"apButton": false, // 申请调价按钮
                     "srButton": false, // 退货按钮
                     "unlockButton": false, // 解锁按钮
                     "editButton": false, // 修改订单按钮
                     "cancelPayButton": false, // 取消结款按钮
                     "runButton": false, // 确认执行按钮
                     "splitButton": false // 拆分按钮
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "apPrice": 0, // 调价金额
                    "completeTime": "",
                    "createTime": "2019-03-14 16:31:58", // 创建时间
                    "createUserName": "孙启萌", // 创建人
                    "customer": {
                        "isParent": 0, // 0 表示普通客户 1表示总店 2表示分店
                        "shortName": "么志勇", // 客户名称
                        "type": "P" // 客户类型 A, P, P2P, C
                    },
                    "customerId": 2434, // 客户id
                    "delivery": {
                        "address": "河北唐山市路南区君瑞批发市场冷库站台", // 收货地址
                        "mobile": "13393255188", // 联系电话
                        "name": "么志勇", // 收货人
                    },
                    "freightAsk": {
                        isPass: 0 // 0：待审，1：通过，2：未通过
                    },
                    "deliveryType": "DELIVERY",
                    "depositPrice": 0,
                    "discountPrice": 0, // 优惠活动折扣金额
                    "freight": 0, // 运费
                    "freightStatus": 0,
                    "fromDepotId": 51,
                    "fromDepotName": "DC（天津优和仓 ）",
                    "giftFlg": 0, // 赠品标识 0-无 1-有
                    "id": 50,
                    "jian": 10, // 件
                    "lockFlg": 0, // 锁标识 0-无 1-有
                    "mainOrderId": "",
                    "modifyTime": "2019-03-14 08:38:36.0",
                    "orderId": "SA1903140000034", // 单号
                    "payFlg": 0, // 结款状态 0 - 未结款 1 - 已结款
                    "payTime": "2019-03-14 16:35:00",
                    "paymentType": "CASH",
                    "planSendTime": "2019-03-15 00:00:00", // 计划发货时间
                    "platformId": 1,
                    "price": 7033,
                    "rebatePrice": 0, // 返利券折扣金额
                    "receiveId": 17508,
                    "remark": "我的测试测试备注", // 备注
                    "runTime": "",
                    "san": 20, // 散
                    "sendTime": "",
                    "splitFlg": 1, // 被拆分标识 1 - 是 0 - 否 
                    "status": "INVALID", // INVALID:订单未生效,SET:提交物流中,RUN:订单生效,SEND:已发出,COMPLETE:已签收
                    "totalprice": 7033, // 实收
                    "tradefrom": "SYS"
                }
            ],
            "pageNo": 1,
            "total": 0
        }
    }

### DD-106. 销售订单-详情
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/saorder/{orderId}
#### 参数
    orderId: 销售订单号
    filterGiftFlg: 编辑订单页获取详情时传1 其余暂时不用传
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "activeId": 0,
            "activeName": "", // 活动名称
            "apPrice": 0,
            "completeTime": "",
            "couponId": 0,
            "couponName": "", // 优惠券名称
            "createRole": 1,
            "createTime": "2019-03-14 17:16:50",
            "createUser": 518,
            "createUserName": "孙启萌",
            "customer": {
                "shortName": "么志勇", // 客户名称
            },
            "delivery": {
                "address": "河北唐山市路南区君瑞批发市场冷库站台", // 详细地址
                "areapathid": "030201",
                "id": 65,
                "mobile": "13393255188", // 联系电话
                "name": "么志勇", // 收货人
                "orderId": "SA1903140000040"
            },
            "deliveryType": "DELIVERY",
            "depositPrice": 0,
            "discountPrice": 0, // 优惠活动金额
            "freight": 0, // 运费
            "freightStatus": 3, // 运费状态 0 待审核 1 通过 2 未通过 3 未申请
            "fromDepotId": 51,
            "fromDepotName": "DC（天津优和仓 ）", // 出库仓
            "giftFlg": 0,
            "id": 66,
            "jian": 10,
            "lockFlg": 1,
            "logs": [ // 操作日志
                {
                    "opInfo": "发起调价单申请", // 操作内容
                    "opTime": "2019-03-14 17:16:51", // 操作时间
                    "opUserName": "孙启萌", // 操作者
                }
            ],
            "mainOrderId": "",
            "modifyTime": "2019-03-14 09:16:50",
            "activeGifts": [
                {
                   id: 1 // 满赠活动id,
                   activeName: "买香草贝贝虾送香草贝贝虾" // 活动名称 
                },
                ...
            ],
            "orderId": "SA1903140000040", // 单号
            "orderSaPros": [
                {
                    "activeId": 0,
                    "afterAskPrice": 0, // 调价单金额
                    // "apStatus": {
                    //     "saOrderId": "SA1903140000040",
                    //     "status": "RUN", // 调价单状态
                    //     "askPrice"： 100, // 调价金额
                    //     "type": "BEFORE"
                    // },
                    "beforeAskPrice": 0, // 差价单金额
                    "giftFlg": 0, // 赠品标识 0-正常品 1-申请的赠品 2-活动赠品
                    "id": 192,
                    "pcount": 10, // 数量
                    "giftCount": 0, // 赠品数量
                    "price": 32.5, // 单价
                    "totalprice": 325, // 总计
                    "priceFlg": "P", // 价格类别 NONE-未知 T-特价 S-签约价 Q -区域价 A-A价 P-P价 AK-调价'
                    "productId": 1,
                    "productUnit": {
                        "guige": "500g(23-25枚）/盒", // 规格
                        "product": {
                            "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/ec90940549d364b0982427f87dd86747.jpg", // 产品图片url
                            "name": "香草凤尾虾", // 品名
                            "pno": "0151", // 品号
                        },
                        "unit": "盒", // 单位
                    },
                    "productUnitId": 1
                }
            ],
            "payFlg": 0, // 结款状态 0-未结款 1-结款
            "payTime": "",
            "paymentType": "CASH",
            "planSendTime": "2019-03-15 00:00:00", // 计划发出时间
            "platformId": 1,
            "price": 7033, // 产品总价
            "rebateId": 0,
            "rebateName": "", // 返利券名称
            "rebatePrice": 0, // 返利金额
            "receiveId": 17508, // 收货人id
            "remark": "我的测试测试备注", // 订单备注
            "runTime": "",
            "san": 20, // 散
            "sendTime": "",
            "splitFlg": 0, // 拆分标识 0-否 1-是
            "status": "INVALID", // 订单状态 INVALID:订单未生效,SET:提交物流中,RUN:订单生效,SEND:已发出,COMPLETE:已签收
            "totalprice": 7033, // 总价
            "tradefrom": "SYS"
        }
    }

### DD-107. 销售订单-解除整单锁
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/saorder/{orderId}/unlock
#### 参数
    orderId: 销售订单号
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### DD-108. 销售订单-解除调价锁
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/saorder/{orderId}/{proId}/unlock
#### 参数
    orderId: 销售订单号
    proId: 产品明细id
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### DD-109. 销售订单-结款
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/saorder/{orderId}/pay
#### 参数
    orderId: 销售订单号
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### DD-110. 销售订单-取消结款
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/saorder/{orderId}/unpay
#### 参数
    orderId: 销售订单号
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### DD-110. 销售订单-拆分
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/saorder/{orderId}/split
#### 参数
    orderId: 'SA190000000001', 销售订单号
    [
        {
            id: 产品明细id,
            pcount: 数量
        },
        ...
    ]
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### DD-111. 销售订单-物流通知修改出库仓
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/saorder/depot
#### 参数
    {
        order_ids: 'SA190001,SA190002,SA190003', // 订单号 以 “，”相隔
        depot_id: 1 // 仓id
        
    }
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### DD-112. 销售订单-订单列表导出
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/saorder/export
#### 参数
    date: '2019-01' // yyyy-MM
    checkCode: 下载码
#### 响应  
    stream

### DD-113. 销售订单-订单导出
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/saorder/export/single
#### 参数
    orderId: 'SA19000001' // 单号
    checkCode: 下载码
#### 响应  
    stream

### DD-114. 销售订单-确认执行
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/saorder/{orderId}/run
#### 参数
    orderId: 'SA19000001' // 单号
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### DD-115. 销售订单-删除
#### 模块负责人
    梁铁骐
#### 请求
    DELETE /v2/saorder/{orderId}
#### 参数
    orderId: 'SA19000001' // 单号
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### DD-116. 销售订单-新增（SYS端）
#### 模块负责人
    梁铁骐
#### 请求
    POST /v2/saorder
#### 参数
    {
    	"saOrder": {
    		*"customerId": 2434, // 客户id
    		*"receiveId": 17508, // 联系人id
    		*"tradefrom": "SYS", // 下单渠道 固定 SYS
    		*"deliveryType": "DELIVERY", // 配送方式 DELIVERY：配送 SELF：自提
    		*"planSendTime": "2019-03-15", // 计划发货时间
    		"rebateId": 1, // 返利券id
    		"couponId": 1, // 优惠券id
    		"activeId": 1, // 活动id
    		"excludeActiveIds": [1,2,3], // 排除满赠活动id
    		// "freightFlg": 1, // 是否申请免运费 0-否 1-是
    		// "freightRemark": "申请免运费备注", // 免运费申请备注 0 ~ 255 请前端同事校验好，后端也校验
    		"remark": "我的测试测试备注", // 订单备注
    		// "giftRemark": "赠品申请备注" // 赠品申请备注 0 ~ 255 请前端同事校验好，后端也校验
    	},
    	"saOrderPros": [ // 订单产品明细
    		{
    			*"productUnitId": 1, // 产品规格id
    			*"productId": 1, // 产品id
    			*"pcount": 10, // 数量
    			// "giftCount": "1", // 赠品数量
    			// "beforeAskPrice": 10, // 调价金额
    			// "beforeAskPriceRemark": "测试AP单备注" // 调价备注 0 ~ 255 请前端同事校验好，后端也校验
    		},
    		...
    	],
    	*"onlyCode": 1123.9663 // 唯一码
    }
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### DD-117. 销售订单-修改订单基本信息
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/saorder/{orderId}/info
#### 参数
    orderId: 单号,
    {
    	orderId: 'SA190000001', // 单号
        remark: 'sdfasdfas', // 备注
        receiveId: '1', // 联系人id
        planSendTime: '2019-10-10' // 计划发货时间
    }
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### DD-118. 销售订单-修改订单
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/saorder/{orderId}
#### 参数
    orderId: 单号,
    {
    	"saOrder": {
    	    *"id": 1,
    		*"customerId": 2434, // 客户id
    		*"receiveId": 17508, // 联系人id
    		*"tradefrom": "SYS", // 下单渠道 固定 SYS
    		*"deliveryType": "DELIVERY", // 配送方式 DELIVERY：配送 SELF：自提
    		*"planSendTime": "2019-03-15", // 计划发货时间
    		"rebateId": 1, // 返利券id
    		"couponId": 1, // 优惠券id
    		"activeId": 1, // 活动id
    		"excludeActiveIds": [1,2,3], // 排除满赠活动id
    		// "freightFlg": 1, // 是否申请免运费 0-否 1-是
    		// "freightRemark": "申请免运费备注", // 免运费申请备注 0 ~ 255 请前端同事校验好，后端也校验
    		// "remark": "我的测试测试备注", // 订单备注
    		"giftRemark": "赠品申请备注" // 赠品申请备注 0 ~ 255 请前端同事校验好，后端也校验
    	},
    	"saOrderPros": [ // 订单产品明细
    		{
    			*"productUnitId": 1, // 产品规格id
    			*"productId": 1, // 产品id
    			*"pcount": 10, // 数量
    			// "giftCount": "1", // 赠品数量
    			// "beforeAskPrice": 10, // 调价金额
    			// "beforeAskPriceRemark": "测试AP单备注" // 调价备注 0 ~ 255 请前端同事校验好，后端也校验
    		},
    		...
    	],
    	*"onlyCode": 1123.9663 // 唯一码
    }
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### DD-119. 销售订单-新增（APP端）
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
    		"remark": "我的测试测试备注", // 订单备注
    	},
    	"saOrderPros": [ // 订单产品明细
    		{
    			*"productUnitId": 1, // 产品规格id
    			*"productId": 1, // 产品id
    			*"pcount": 10 // 数量
    		},
    		...
    	],
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
    
### DD-119. 销售订单-获取“我的”订单列表（APP端）
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

### DD-120. 销售订单-“订单复购”订单列表（APP端）
#### 模块负责人
    梁铁骐
#### 请求
    GET /router/v5/order/{customerId}/search
#### 参数
    *customerId: 客户id
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
                    "afterAskPrice": 0, // 调价单金额
                    "beforeAskPrice": 0, // 差价单金额
                    "pcount": 5, // 数量
                    "price": 32.5, // 单价
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
                    }
                }
            ],
            "totalprice": 152.5 // 总价
        }
    }

### DD-121. 销售订单-删除（APP端）
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

### DD-122. 销售订单-确认签收（APP端）
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

### DD-123. 销售订单-获取订单基本信息
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/saorder/{orderId}/lite
#### 参数
    orderId: 单号
#### 相应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "activeId": 0,
            "delivery": {
                "address": "北京/北京市/顺义区/赵全营镇燕华营村燕华大街1号", // 详细地址
                "areapathid": "010112", 
                "mobile": "13910547554", // 手机号
                "name": "冯志国", // 收货人
            },
            "planSendTime": "", // 计划发出时间
            "remark": "", // 备注
            "customer": {
                "shortName": "太原千海湖商贸有限公司", // 客户名称
                "type": "P"
            },
            "fromDepotName": "DC（天津优和仓 ）", // 出库仓
            "jian": 3, // 见
            "payFlg": 0, // 结款状态 0-未结款 1-结款
            "receiveId": 50783, // 联系人id
            "san": 0, // 散
            "status": "INVALID", // 订单状态 INVALID:订单未生效,SET:提交物流中,RUN:订单生效,SEND:已发出,COMPLETE:已签收
            "totalprice": 1696.6, // 订单金额
            "tradefrom": "SYS"
            }
        }
    }

### DD-124. 销售订单-解除整单锁获取将要消失的优返活及申请的赠品列表
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/saorder/{orderId}/lose/sth
#### 参数
    orderId: 单号
#### 相应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "name": "2018年12月陆战队补贴", // 优惠券名称或者申请单号
                "orderSaProVO": {
                    "pcount": 1, // 数量
                    "productUnit": {
                        "guige": "500g(23-25枚）/盒", // 规格
                        "product": {
                            "name": "香草凤尾虾", // 品名
                            "pno": "0151", // 品号
                        },
                        "unit": "盒", // 单位
                    }
                },
                "rebate": 500, // 优惠金额
                "type": "REBATE" // 优惠类型 ACTIVE_GIFT：满赠活动 ACTIVE：活动（含满折 和 满减） COUPON：优惠券, REBATE：返利券 GIFT_ASK_FOR 申请赠品 
            },
            ...
        ]
    }

### DD-125. 销售订单-获取被拆分订单的子单
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/saorder/{orderId}/childs
#### 参数
    orderId: 销售订单号,
    buttonPermissionFlg: 1
#### 响应    
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                     "editBaseButton": false, // 修改基本信息按钮
                     "payButton": false, // 支付按钮
                     "exportButton": false, // 导出按钮
                     "deleteButton": false, // 删除按钮
                     "apButton": false, // 申请调价按钮
                     "srButton": false, // 退货按钮
                     "unlockButton": false, // 解锁按钮
                     "editButton": false, // 修改订单按钮
                     "cancelPayButton": false, // 取消结款按钮
                     "runButton": false, // 确认执行按钮
                     "splitButton": false // 拆分按钮
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "apPrice": 0, // 调价金额
                    "completeTime": "",
                    "createTime": "2019-03-14 16:31:58", // 创建时间
                    "createUserName": "孙启萌", // 创建人
                    "customer": {
                        "isParent": 0, // 0 表示普通客户 1表示总店 2表示分店
                        "shortName": "么志勇", // 客户名称
                        "type": "P" // 客户类型 A, P, P2P, C
                    },
                    "customerId": 2434, // 客户id
                    "delivery": {
                        "address": "河北唐山市路南区君瑞批发市场冷库站台", // 收货地址
                        "mobile": "13393255188", // 联系电话
                        "name": "么志勇", // 收货人
                    },
                    "deliveryType": "DELIVERY",
                    "depositPrice": 0,
                    "discountPrice": 0, // 优惠活动折扣金额
                    "freight": 0, // 运费
                    "freightStatus": 0,
                    "fromDepotId": 51,
                    "fromDepotName": "DC（天津优和仓 ）",
                    "giftFlg": 0, // 赠品标识 0-无 1-有
                    "id": 50,
                    "jian": 10, // 件
                    "lockFlg": 0, // 锁标识 0-无 1-有
                    "mainOrderId": "",
                    "modifyTime": "2019-03-14 08:38:36.0",
                    "orderId": "SA1903140000034", // 单号
                    "payFlg": 0, // 结款状态 0 - 未结款 1 - 已结款
                    "payTime": "2019-03-14 16:35:00",
                    "paymentType": "CASH",
                    "planSendTime": "2019-03-15 00:00:00", // 计划发货时间
                    "platformId": 1,
                    "price": 7033,
                    "rebatePrice": 0, // 返利券折扣金额
                    "receiveId": 17508,
                    "remark": "我的测试测试备注", // 备注
                    "runTime": "",
                    "san": 20, // 散
                    "sendTime": "",
                    "splitFlg": 1, // 被拆分标识 1 - 是 0 - 否 
                    "status": "INVALID", // INVALID:订单未生效,SET:提交物流中,RUN:订单生效,SEND:已发出,COMPLETE:已签收
                    "totalprice": 7033, // 实收
                    "tradefrom": "SYS"
                }
            ]
        }
    }

### DD-126. 销售订单-获取销售订单详情（APP）
#### 模块负责人
    梁铁骐
#### 请求
    GET /router/v5/order/{customerId}/{orderId}
#### 参数
    customerId: 客户id,
    orderId: 销售订单号,
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "apPrice": 0, // 调价金额
            "createTime": "2018-05-28 11:24:13", // 订单创建时间
            "delivery": {
                "address": "河北/唐山市/路南区/君瑞批发市场冷库站台", // 收货地址
                "mobile": "13393255188", // 收货人手机号
                "name": "么志勇", // 收货人
            },
            "deliveryType": "DELIVERY",
            "discountPrice": 0, // 优惠活动金额
            "freight": 0, // 运费
            "jian": 518, // 件
            "invoice": {
                "id": 5132, // 发票id
                "invoiceDoneTotal": 1, // 已完成的发票数量
                "invoiceTotal": 1 // 发票总数量
            },
            "orderSaPros": [
                {
                    "afterAskPrice": 0, // 调价单金额
                    "beforeAskPrice": 0, // 差价单金额
                    "giftFlg": 0, // 是否赠品 0-赠品 1-申请的赠品 2-活动赠品
                    "pcount": 300, // 数量
                    "price": 204, // 单价
                    "priceFlg": "NONE", // 价格类别 NONE-未知 T-特价 S-签约价 Q -区域价 A-A价 P-P价 AK-调价'
                    "productId": 4364, // 产品id
                    "productUnit": {
                        "guige": "280g/盒*12盒", // 规格
                        "minimum": 0,
                        "price": {
                            "aPrice": 40.12,
                            "areaPrice": 0,
                            "decideType": "A",
                            "finallyPrice": 40.12,
                            "pPrice": 32.5,
                            "productUnitId": 1,
                            "rawFlg": "NO", // 是否原料品 NO-否 YES-是
                            "signPrice": 0,
                            "specialPrice": 0
                        },
                        "product": {
                            "customFlg": 0, // 是否定制品 0-非定制品 1-普通定制品 2-专属定制品
                            "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201812/38136c953e63ab82f786fd18283bcd66.jpg", // 产品主图url
                            "name": "孔雀开屏粉丝扇贝", // 品名
                            "pno": "1526", // 品号
                            "status": "NORMAL"
                        },
                        "unit": "件", // 单位
                    },
                    "productUnitId": 7719, // 产品规格id
                    "totalprice": 61200 // 产品小计
                }                
            ],
            "payFlg": 1, // 结款状态 0-未结款 1-结款
            "payTime": "2018-05-28 13:56:41",
            "paymentType": "CASH", // 支付方式 CASH-先款后货 CREDIT: 账余 DAOFU：货到付款
            "planSendTime": "2018-05-30 16:49:42", // 计划发货时间
            "price": 84200, // 商品金额
            "rebatePrice": 16523.1, // 返利券优惠金额
            "remark": "", // 订单备注
            "san": 0, // 散
            "sendTime": "2018-05-30 16:49:42", // 发货时间
            "status": "COMPLETE", 订单状态 INVALID:订单未生效,SET:提交物流中,RUN:订单生效,SEND:已发出,COMPLETE:已签收
            "totalprice": 67676.9, // 商品实付款
        }
    }

### DD-127. 销售订单-第三方结款成功回调接口(财务回调)
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/saorder/{orderId}/pay/third
#### 参数
    orderId: 销售订单号,
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    

### DD-128. 销售订单-SYS端获取产品总价
#### 模块负责人
    梁铁骐
#### 请求
    POST /v2/saorder/price
#### 参数
    {
        customerId: 1, // 客户id
        pathId: '010101' // 区域
        products: [
            {
                id: 12, // 如果是编辑页面要把产品明细id携带过来，新增页面则不用传
                productUnitId: 27, 产品规格id
                pcount: 36 // 数量 （赠品数量不传）
            }
        ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": 66666 // 产品总价
    }









