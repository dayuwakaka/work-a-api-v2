## 库存
### DP-1. 安全库存规则修改
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/depot/safe/rule
#### 参数
    // 此接口包含新增、修改、删除的逻辑
    // 新增的规则id=0，修改的id>0，删除的规则不需要传给后台
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
            "id":0,
            "parameter": "AVERAGE",
            "minRange": 400,
            "maxRange": 600,
            "actionType": "SPECIFY",
            "actionValue": 100
        }
    ]
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
### DP-2. 安全库存规则查询
#### 对接负责人
    尹洪明
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
    
     
### DP-3. 安全库存列表 
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/depot/safe/stock
#### 参数
    keyword             // 品名、品号
    depotId             // 仓库id
    safeAmountOp        // 安全库存 操作符
    safeAmount                      值
    enableAmountOp      // 可用库存 操作符
    enableAmount                    值
    normalAmountOp      // 实际库存 操作符
    normalAmount                    值
    averageOp           // 平均库存 操作符
    average                         值
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
     
### DP-4. 安全库存修改
#### 对接负责人
    尹洪明
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
         
### DP-5. 安全库存日志
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/depot/safe/stock/log/{id}
#### 参数
    *id // 安全库存id， 【大于等于0】的数字，在列表中获取不到id时，传 0 给后台
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
                    "safeStockId": 0
                }
            ],
            "pageNo": 1,
            "total": 1
        }
    }    

  
### DP-6. 安全库存导出
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET    /v2/depot/safe/stock/export
#### 参数
    // ****************参考税收分类导出*****************
    keyword             // 品名、品号
    depotId             // 仓库id
    safeAmountOp        // 安全库存 操作符
    safeAmount                      值
    enableAmountOp      // 可用库存 操作符
    enableAmount                    值
    normalAmountOp      // 实际库存 操作符
    normalAmount                    值
    averageOp           // 平均库存 操作符
    average                         值
#### 响应
    excel