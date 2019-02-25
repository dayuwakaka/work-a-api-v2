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
    pageNo: 1 // 分页
    pageSize: 25 // 页条数
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
    pageNo: 1 // 分页
    pageSize: 25 // 页条数
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
                    "unit": "件", // 单位
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
    pageNo: 1 // 分页
    pageSize: 25 // 页条数
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


### CCGL-7. 安全库存规则修改
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/depot/safe/rule
#### 参数
    // 此接口包含新增、修改、删除的逻辑
    // 删除的规则不需要传给后台
    {
        "onlyCode":"19823478127",        // 唯一编码
        [
            {
                *"id":13,                // 规则id
                *"parameter": "AVERAGE", // 基础参数，目前只有AVERAGE一种参数类型
                *"minRange": 1,          // 最小值
                *"maxRange": 200,        // 最大值
                *"actionType": "FULL",   // 安全库存值 FULL 基础参数； HALF 基础参数/2； SPECIFY 其它
                *"actionValue": 0        // 当actionType=SPECIFY时，actionValue>0,FULL&HALF时，actionValue=0
            },
            {
                "id":0,
                "parameter": "AVERAGE",
                "minRange": 200,
                "maxRange": 400,
                "actionType": "HALF",
                "actionValue": 0
            },
            {
                "parameter": "AVERAGE",
                "minRange": 400,
                "maxRange": 600,
                "actionType": "SPECIFY",
                "actionValue": 100
            }
        ]
    }

### CCGL-8. 安全库存规则查询
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/depot/safe/rule
#### 参数
    无
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "actionType": "FULL",   // 安全库存规则值
                "actionValue": 0,       // 当actionType=SPECIFY时的安全库存规则值
                "deleteFlg": 0,         
                "id": 13,               // 规则id
                "maxRange": 200,        // 最大值
                "minRange": 1,          // 最小值
                "parameter": "AVERAGE"  // 基础参数
            },
            {
                "actionType": "HALF",
                "actionValue": 0,
                "deleteFlg": 0,
                "id": 14,
                "maxRange": 400,
                "minRange": 200,
                "parameter": "AVERAGE"
            },
            {
                "actionType": "SPECIFY",
                "actionValue": 100,
                "deleteFlg": 0,
                "id": 16,
                "maxRange": 600,
                "minRange": 400,
                "parameter": "AVERAGE"
            }
        ]
    }     
     
### CCGL-9. 安全库存规则日志
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/depot/safe/rule/log
#### 参数
    pageNo  // 页码
    pageSize // 页大小
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "id": 0,
                    "opInfo": "修改安全库存",         // 操作内容
                    "opRole": 0,
                    "opTime": "2019-01-31 08:27:57",    // 操作时间
                    "opUser": 0,
                    "opUserName": "孙启萌",            // 操作人
                    "ruleId": 0
                }
            ],
            "pageNo": 1,
            "total": 1
        }
    }    
    
    
### CCGL-10. 安全库存列表 
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/depot/safe/stock
#### 参数
    keyword             // 品名、品号
    depotId             // 仓库id
    status              // 库存状态 'NORMAL' 正常,'LOCK' 锁定
    enableAmountOp      // 可用库存 操作符
    enableAmount                    值
    normalAmountOp      // 实际库存 操作符
    normalAmount                    值
    pageNo              // 页码
    pageSize            // 页大小
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "averageJian": 33.33,           // 平均出货量 整件
                    "averageSan": 0,                // 散货
                    "createTime": "",
                    "deleteFlg": 0,
                    "depotId": 84,                  // 仓库id
                    "depotName": "DC（深圳中柱仓）",   // 仓库名称
                    "depotStatus": "",              // 库存状态 NORMAL 正常 LOCK 锁定
                    "enableAmountJian": 0,          // 可用库存 整件
                    "enableAmountSan": 0,           // 散货
                    "guige": "500g(20枚）/袋*10袋",     // 产品规格
                    "id": 0,
                    "lastMonth1Jian": 100,          // 前一个月 整件
                    "lastMonth1San": 0,             // 散货
                    "lastMonth2Jian": 100,          // 前两个月 整件
                    "lastMonth2San": 0,             // 散货
                    "lastMonth3Jian": 100,          // 前三个月 整件
                    "lastMonth3San": 0,             // 散货
                    "modifyTime": "",
                    "normalAmountJian": 0,          // 实际库存 整件
                    "normalAmountSan": 0,           // 散货
                    "perunit": 10,                  // 转化率
                    "pno": "",                      // 品号
                    "productId": 4626,              // 产品id
                    "productName": "酸奶大福",      // 产品名称
                    "safeAmount": 34,               // 安全库存
                    "tag": "",
                    "type": null,   
                    "unit": "件"                     // 产品单位
                }
            ],
            "pageNo": 2,
            "total": 25
        }
    }
    
### CCGL-11. 安全库存修改
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/depot/safe/stock/{id}
#### 参数
    *id // 安全库存id，【大于等于0】的数字，在列表中获取不到id时，传 0 给后台
    {
        "depotId":40,       // 仓库id
        "productId":1986,   // 产品id
        "perunit":12,       // 转化率
        "safeAmount":100    // 安全库存
    }    
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }    
        
### CCGL-12. 安全库存导出
#### 模块负责人
    尹洪明
#### 请求
    GET    /v2/depot/safe/stock/export
#### 参数
    // ****************参考税收分类导出*****************
    keyword             // 品名、品号
    depotId             // 仓库id
    status              // 库存状态
    checkCode           // 通过 JC-3 获取
#### 响应
    流
    
    
### 模版
#### 模块负责人
#### 请求
#### 参数
#### 响应

