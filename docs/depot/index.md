
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

### 模版
#### 模块负责人
#### 请求
#### 参数
#### 响应

