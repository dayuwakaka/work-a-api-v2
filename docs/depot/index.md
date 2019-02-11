
## 库存管理

### CCGL-1. 获取仓信息
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/depot
#### 参数
    无
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "id": 111, // 仓库ID
                "level": "DC",  // 仓级别 DC FDC VR
                "name": "测试仓库名33" // 仓名字
            }
        ]
    }

### CCGL-2. 获取仓库库存
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/depot/stock2
#### 参数
    productKeyword: "xxx" // 品号，品名
    depotId: 1 // 仓ID， 全部则不传
    status: "NORMAL" // 状态 NORMAL 正常 LOCK 锁定
    enableAmountOp: ">" // > <  >= <= = 可用库存数量比较符
    enableAmount: 10 // 可用库存数量
    normalAmountOp: ">" // > <  >= <= = 实际库存数量比较符
    normalAmount: 10 // 实际库存数量
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "depotId": 40, // 仓ID
                    "depotName": "DC（大连铁越仓）", // 仓名
                    "depotStockFuture": { // 在途库存，若没有在途信息 则为 null
                        "amountJian": 1, // 总在途(件)
                        "amountJian1": 0, // 在途1（件）
                        "amountJian2": 0, // 在途2（件）
                        "amountJian3": 0, // 在途3（件）
                        "amountJian4": 0, // 在途4（件）
                        "amountSan": 0, // 总在途（散）
                        "amountSan1": 0, // 在途1（散）
                        "amountSan2": 0, // 在途2（散）
                        "amountSan3": 0, // 在途3（散）
                        "amountSan4": 0, // 在途4（散）
                        "depotId": 40, // 总在途（散）
                        "productId": 4661 // 产品ID
                    },
                    "enableAmount": 17, // 可用库存（最小单位数量）
                    "enableAmountJian": 17, // 可用库存（件）
                    "enableAmountSan": 0, // 可用库存（散）
                    "guige": "4.54kg", // 规格
                    "normalAmount": 17, // 实际库存（最小单位数量）
                    "normalAmountJian": 17, // 实际库存（件）
                    "normalAmountSan": 0, // 实际库存（散）
                    "perunit": 0, // 转化率
                    "pno": "A629", // 品号
                    "productId": 4661, // 产品ID
                    "productName": "冻煮整只龙虾（500-700g）", // 产品名
                    "status": "NORMAL" // 库存状态 NORMAL 正常 LOCK 锁定
                }
            ],
            "pageNo": 1, 
            "total": 0
        }
    }

### CCGL-3. 供应商库存
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/depot/stock3
#### 参数
    productKeyword:"xxx" // 品号，品名
    depotId: 1 // 仓ID，全部为不传
    status:"NORMAL" // 状态 NORMAL 正常 LOCK 锁定
    normalAmountOp: ">" // > < >= = 实际库存比较符
    normalAmount: 10.0 // 实际库存数量
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "depotId": 40, // 仓ID
                    "depotName": "DC（大连铁越仓）", // 仓名
                    "depotStockFuture": { // 在途库存，若未匹配 则为 null
                        "amountJian": 50, // 总在途（件）
                        "amountJian1": 0, // 在途1（件）
                        "amountJian2": 0, // 在途2（件）
                        "amountJian3": 0, // 在途3（件）
                        "amountJian4": 0, // 在途4（件）
                        "amountSan": 0, // 总在途（散）
                        "amountSan1": 0, // 在途1（散）
                        "amountSan2": 0, // 在途2（散）
                        "amountSan3": 0, // 在途3（散）
                        "amountSan4": 0, // 在途4（散）
                        "depotId": 40, // 仓ID
                        "productId": 21, // 产品ID
                        "supplierId": 2629 // 供应商ID
                    },
                    "guige": "540g（15串）/盒*12盒", // 规格
                    "normalAmount": 2265, // 实际库存（最小单位数量）
                    "normalAmountJian": 188, // 实际库存（件）
                    "normalAmountSan": 9, // 实际库存（散）
                    "perunit": 12, // 转化率
                    "pno": "0081", // 品号
                    "productId": 21, // 产品ID
                    "productName": "桑巴虾串", // 产品名
                    "status": "NORMAL", // 状态 NORMAL 正常 LOCK 锁定
                    "supplierId": 2629, // 供应商ID
                    "supplierName": "26" // 供应商名
                }
            ],
            "pageNo": 1,
            "total": 25
        }
    }

### CCGL-4. 供应商库存导出
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/depot/stock3/export
#### 参数
    *checkToken: "xxx" // 临时下载授权码, 从JC-4 接口获取
    *mirrorTime: "2018-01-01" // 镜像日期
#### 响应
    流

### CCGL-5. 库存流水
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/depot/flow
#### 参数
    *sDate:"2018-12-01 00:00:00" // 开始时间 限制为 3个月最大范围
    *eDate:"2018-12-01 23:59:59" // 结束时间 限制为 3个月最大范围
    type:"IN" // 流水类型 IN 入流水 OUT 出流水
    inOrderId: "xxx" // 入单号
    productKeyword: "xxx" // 品号，品名
    inOrderType: "TR" // 入单类型 PA 采购单 IN 普通入 TR 调拨单
    outOrderType: "TR" // 出单类型 SA 销售单 OUT 普通出 TR 调拨单
    payMode: "INBUY" // 支付方式 INBUY 入结 OUT 出结
    giftFlg: 0 // 0 非赠品 1 赠品 ，不限制不传
    depotId: 1 // 仓ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "amount": -135, // 最小单位数量
                    "createTime": "2018-12-01 16:05:54", // 创建时间
                    "depotId": 40, // 仓ID
                    "depotName": "DC（大连铁越仓）", // 仓名
                    "giftFlg": 0, // 是否赠品 0 非赠品 1 赠品
                    "guige": "800g*9盒", // 规格
                    "inOrderId": "PA181126016136", // 入单ID
                    "inOrderType": "TR", // TR 调拨单 IN 普通入 PA 采购单 SR 销售退
                    "outOrderId": "TR181129003172", // 出单ID
                    "outOrderType": "TR", // TR 调拨单 OUT 普通出 SA 销售单 PR 采购退 
                    "payMode": "OUTBUY", // 结算方式 OUTBUY 出结 INBUY 入结 
                    "perunit": 9, // 转化率
                    "pno": "0079", // 品号
                    "productId": 2, // 产品ID
                    "productName": "海苔多春鱼", // 产品名
                    "productUnitId": 0, // 规格ID
                    "type": "OUT", // 流水类型 OUT 出流水 IN 入流水
                    "unit": "件" // 单位
                }
            ],
            "pageNo": 1,
            "total": 25
        }
    }


### CCGL-6. 库存流水导出
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/depot/flow/export
#### 参数
    *sDate:"2018-12-01 00:00:00" // 开始时间 限制为 3个月最大范围
    *eDate:"2018-12-01 23:59:59" // 结束时间 限制为 3个月最大范围
    *depotId: 1 // 仓ID
    type:"IN" // 流水类型 IN 入流水 OUT 出流水
    inOrderId: "xxx" // 入单号
    productKeyword: "xxx" // 品号，品名
    inOrderType: "TR" // 入单类型 PA 采购单 IN 普通入 TR 调拨单
    outOrderType: "TR" // 出单类型 SA 销售单 OUT 普通出 TR 调拨单
    payMode: "INBUY" // 支付方式 INBUY 入结 OUT 出结
    giftFlg: 0 // 0 非赠品 1 赠品 ，不限制不传
#### 响应
    流

### 模版
#### 模块负责人
#### 请求
#### 参数
#### 响应

