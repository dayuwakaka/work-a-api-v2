
## 费用管理

### FYGL-1. 库费系数查询
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/fee/coefficient
#### 参数
    name:"xxx" // 仓名 模糊匹配
    calWeight:"NET" // 计重方式 NET 净重 GROSS 毛重
    calOut：1 // 计算越库 0 不计算 1 计算
    type:"TASK" // NOW 即时生效 TASK 定时生效
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
                    "calOut": 0, // 计算越库 0 不计算 1 计算
                    "calWeight": null, // 计重方式 NET 净重 GROSS 毛重
                    "depotCoefficient": 0, // 库费系数
                    "depotId": 110, // 仓ID
                    "depotLevel": "FDC", // 仓类型 
                    "depotName": "FDC（哈尔滨天顺仓）", // 仓名
                    "effectDate": "", // 生效日期
                    "id": 0, // 费率ID， 0 未配置过
                    "modifyRemark": "", // 修改备注
                    "modifyRole": 0, // 修改角色ID
                    "modifyTime": "", // 修改时间
                    "modifyUser": 0, // 修改人ID
                    "modifyUserName": "", // 修改人名
                    "serviceCoefficient": 0, // 服务费系数
                    "type": null // 类型 NOW 立即执行 TASK 定时执行
                }
            ],
            "pageNo": 1,
            "total": -1
        }
    }

### FYGL-1.1 库费系数明细
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/fee/coefficient/{id}
#### 参数
    *id: 1 //库费ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "calOut": 0, // 计算越库 0 不计算 1 计算
            "calWeight": null, // 计重方式 NET 净重 GROSS 毛重
            "depotCoefficient": 0, // 库费系数
            "depotId": 110, // 仓ID
            "depotLevel": "FDC", // 仓类型 
            "depotName": "FDC（哈尔滨天顺仓）", // 仓名
            "effectDate": "", // 生效日期
            "id": 0, // 费率ID， 0 未配置过
            "modifyRemark": "", // 修改备注
            "modifyRole": 0, // 修改角色ID
            "modifyTime": "", // 修改时间
            "modifyUser": 0, // 修改人ID
            "modifyUserName": "", // 修改人名
            "serviceCoefficient": 0, // 服务费系数
            "type": null // 类型 NOW 立即执行 TASK 定时执行
        }
    }


### FYGL-2. 库费系数修改
#### 模块负责人
    刘宏宇
#### 请求
    PUT /v2/fee/coefficient
#### 参数
    {
        *id: 0 // 库费系数ID， 0 未配置
        *depotId: 1 // 仓ID，
        *depotCoefficient: 0.0 // 库费系数
        *serviceCoefficient: 0.0 // 服务费系数
        *calWeight:"NET" // 计重方式 NET 净重 GROSS 毛重
        *calOut:1 // 计算越库 0 不计算 1 计算
        *type:"NOW" // 生效方式 NOW 立即生效 TASK 定时执行
        *effectDate:"2018-01-01" // 生效日期
        *modifyRemark: "xxx" // 修改备注
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": 1 // 新增后ID，修改后ID
    }

### FYGL-3.库费系数修改日志
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/fee/coefficient/log/{depotId}
#### 参数
    *depotId: 1 // 仓ID
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
                    "depotId": 110, // 仓ID
                    "id": 2, 
                    "opInfo": "修改, 备注：123", // 操作信息
                    "opRole": 1, // 操作角色
                    "opTime": "2019-02-11 18:02:40", // 操作时间
                    "opUser": 101, // 操作人ID
                    "opUserName": "樊嘉辉" // 操作人名
                }
            ],
            "pageNo": 1,
            "total": -1
        }
    }

### FYGL-4. 库费系数历史
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/fee/coefficient/history/{depotId}
#### 参数
    *depotId: 1 // 仓ID
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
                    "calOut": 1, // 计算越库 0 不计算 1 计算
                    "calWeight": "NET", // 计重方式 NET 净重 GROSS 毛重
                    "depotCoefficient": 1, // 库费系数
                    "depotId": 110, // 仓ID
                    "depotLevel": "FDC",// 仓类型
                    "depotName": "FDC（哈尔滨天顺仓）", // 仓名
                    "effectDate": "2019-02-11", // 生效实际
                    "id": 1, // 库费系数ID
                    "modifyRemark": "123", // 修改备注
                    "modifyRole": 1, // 修改角色ID
                    "modifyTime": "2019-02-11 17:49:44", // 修改时间
                    "modifyUser": 101,  // 修改人ID
                    "modifyUserName": "樊嘉辉", // 修改人名
                    "serviceCoefficient": 1, // 服务费系数
                    "type": "NOW" // 类型 NOW 立即生效 TASK 定时任务
                }
            ],
            "pageNo": 1,
            "total": -1
        }
    }

### FYGL-5. 应付仓库库费
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/fee/pay/depot
#### 参数
    depotId: 1 // 仓ID
    calWeight: "NET" // 计重方式 NET 净重 GROSS 毛重
    calOut: 1 // 计算越库 0 不计算 1 计算
    sDate: "2019-01-01" // 开始日期
    eDate: "2019-01-31" // 结束日期
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
                    "calOut": 0, // 计算越库 0 不计算 1 计算
                    "calWeight": "GROSS", // 计重方式 NET 净重 GROSS 毛重
                    "depotCoefficient": 3.6, // 库费系数
                    "depotFee": 79418.23, // 库费
                    "depotId": 40, // 仓ID
                    "depotName": "", // 仓名
                    "depotWeight": 22060.62009, // 库费吨位
                    "serviceCoefficient": 66, // 服务费系数
                    "serviceFee": 45534.56, // 服务费
                    "serviceWeight": 689.91753 // 服务费吨位
                }
            ],
            "pageNo": 1,
            "total": -1
        }
    }


### FYGL-6. 应付仓库库费汇总
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/fee/pay/depot/summary
#### 参数
    depotId: 1 // 仓ID
    calWeight: "NET" // 计重方式 NET 净重 GROSS 毛重
    calOut: 1 // 计算越库 0 不计算 1 计算
    sDate: "2019-01-01" // 开始日期
    eDate: "2019-01-31" // 结束日期
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "totalDepotFee": 285246.59, // 总库费
            "totalFee": 290235.87, // 总费用
            "totalServiceFee": 4989.28 // 总服务费
        }
    }

### FYGL-7. 应付仓库库费导出
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/fee/pay/depot/export
#### 参数
    sDate: "2019-01-01" // 开始日期
    eDate: "2019-01-31" // 结束日期
    checkToken: "xxx" // 下载授权码
#### 响应
    流

### FYGL-8. 应付仓库日库费
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/fee/pay/depot/dayly
#### 参数
    depotId: 1 // 仓ID
    sDate: "2019-01-01" // 开始日期
    eDate: "2019-01-31" // 结束日期
    calWeight: "NET" // 计重方式 NET 净重 GROSS 毛重
    calOut: 1 // 计算越库 0 不计算 1 计算
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "calOut": 0, // 计算越库 0 不计算 1 计算
                    "calWeight": "GROSS", // 计重方式 NET 净重 GROSS 毛重
                    "depotCoefficient": 3.6, // 库费系数
                    "depotFee": 1922.58, // 库费
                    "depotId": 40, // 仓ID
                    "depotName": "DC（大连铁越仓）", // 仓名
                    "inWeight": 0, // 今日入吨位
                    "lastRemainWeight": 400.65337, // 昨日存留吨位
                    "outWeight": 0, // 进入出吨位
                    "remainWeight": 400.65368,// 今日存留吨位
                    "depotWeight": 534.04928, // 库费吨位
                    "serviceCoefficient": 66, // 服务费系数
                    "serviceFee": 0, // 服务费
                    "serviceWeight": 0, // 服务费吨位
                    "tag": "2019-01-01" // 日期
                }
            ],
            "pageNo": 1,
            "total": -1
        }
    }

### FYGL-9. 应付仓库日库费导出
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/fee/pay/depot/dayly/export
#### 参数
    depotId: 1 // 仓ID
    sDate: "2019-01-01" // 开始日期
    eDate: "2019-01-31" // 结束日期
    checkToken: "xxx" // 下载授权码
#### 响应
    流

### FYGL-10. 应收供应商库费
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/fee/income/depot
#### 参数
    supplierId: 1 // 供应商ID
    sDate: "2019-01-01" // 开始日期
    eDate: "2019-01-31" // 结束日期
    pageNo: 1 // 页
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
                    "depotFee": 0, // 库费
                    "depotWeight": 284.04358, // 库费吨位
                    "serviceFee": 0, // 服务费
                    "serviceWeight": 11.27009, // 服务费吨位
                    "supplierId": 2629, // 供应商ID
                    "supplierName": "26" // 供应商名
                }
            ],
            "pageNo": 1,
            "total": -1
        }
    }

### FYGL-11. 应收供应商库费汇总
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/fee/income/depot/summary
#### 参数
    supplierId: 1 // 供应商ID
    sDate: "2019-01-01" // 开始日期
    eDate: "2019-01-31" // 结束日期
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "totalDepotFee": 14706.808988, // 总库费
            "totalFee": 15759.412303, // 总费用
            "totalServiceFee": 1052.603315 // 总服务费
        }
    }

### FYGL-12. 应收供应商库费导出
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/fee/income/depot/export
#### 参数
    sDate: "2019-01-01" // 开始日期
    eDate: "2019-01-01" // 结束日期
    checkToken: "xxx" // 下载授权码
#### 响应
    流

### FYGL-13. 应收供应商日库费
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/fee/income/depot/dayly
#### 参数
    sDate: "2019-01-01" // 开始日期
    eDate: "2019-01-31" // 结束日期
    supplierId: 1 // 供应商ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "depotFee": 21.501432, // 库费
                    "depotWeight": 5.97262, // 库费吨位
                    "inWeight": 0, // 今日入吨位
                    "lastRemainWeight": 4587.67, // 昨日仓存留吨位
                    "outWeight": 16, // 今日出吨位
                    "remainWeight": 5972.62, // 今日存留吨位
                    "serviceFee": 1.056, // 服务费
                    "serviceWeight": 0.016, // 服务费吨位
                    "supplierId": 2629, // 供应商ID
                    "supplierName": "26", // 供应商名
                    "tag": "2019-01-01" // 日
                }
            ],
            "pageNo": 1,
            "total": -1
        }
    }

### FYGL-14. 应收供应商日库费导出
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/fee/income/depot/dayly/export
#### 参数
    *checkToken: "xx" // 下载授权码
    sDate:"2019-01-01" // 开始日期
    eDate:"2019-01-31" // 结束日期
#### 响应
    流

### FYGL-15. 应收供应商库费明细
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/fee/income/depot/detail
#### 参数
    sDate:"2019-01-01" // 开始日期
    eDate:"2019-01-31" // 结束日期
    supplierId: 1 // 供应商ID
    depotId: 1 // 仓ID
    calWeight: "NET" // 计重方式 NET 净重 GROSS 毛重
    calOut: 1 // 计算越库 0 不计算 1 计算
    pageNo: 1 // 页
    pageSize: 25 // 页行数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "calOut": 0, // 计算越库 0 不计算 1 计算
                    "calWeight": "NET", // 计重方式 NET 净重 GROSS 毛重
                    "depotCoefficient": 0, // 库费系数
                    "depotFee": 0, // 库费
                    "depotWeight": 5.97262, // 库费吨位
                    "inWeight": 0, // 今日入吨位
                    "lastRemainWeight": 4.58767, // 昨日存留吨位
                    "outWeight": 0.016, // 今日出吨位
                    "remainWeight": 5.97262, // 今日存留吨位
                    "serviceCoefficient": 0, // 服务费系数
                    "serviceFee": 0, // 服务费系数
                    "serviceWeight": 0.016, // 服务费吨位
                    "supplierId": 2629, // 供应商ID
                    "supplierName": "26", // 供应商名
                    "depotId": 40, // 仓ID
                    "depotName": "DC（大连铁越仓）", // 仓名
                    "tag": "2019-01-01" // 日
                }
            ],
            "pageNo": 1,
            "total": -1
        }
    }

### FYGL-16. 应收供应商库费明细导出
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/fee/income/depot/detail/export
#### 参数
    *checkToken: "xxx" // 下载授权码
    depotId: 1 // 仓ID
    supplierId: 1 // 供应商ID
    sDate: "2019-01-01" // 开始时间
    eDate: "2019-01-31" // 结束时间
#### 响应
    流

### FYGL-17. 应付供应商货款接口
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/fee/pay/goods
#### 参数
    supplierId: 1 // 供应商ID
    productKeyword: "xxx" // 品名 品号
    depotId: 1 // 仓ID
    sDate: "2018-10-01" // 开始时间
    eDate: "2018-10-31" // 结束时间
    payMode: "INBUY" // 支付方式 INBUY 入结 OUTBUY 出结
    inOrderId: "xxx" // 入单ID
    outOrderId: "xxx" // 出单ID
    outOrderType: "TR" // TR 调拨 SA 销售 NO 普通出 PR 采购退
    errorFlg: 0 // 价格异常标识 0 正常 1 异常
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "amount": 630, // 最小单位数量
                    "amountJian": 0, // 件数量
                    "amountSan": 0, // 散数量
                    "createTime": "2018-10-01 13:57:47", // 创建时间
                    "depotId": 51, // 仓ID
                    "depotName": "", // 仓名
                    "errorFlg": 0, // 价格异常标记 0 正常 1 异常
                    "guige": "", // 规格
                    "inOrderId": "PA180929014365", // 入单ID
                    "inOrderType": "TR" // 入单类型 TR 调拨单 PA 采购单 IN 普通入 SR 销售退
                    "outOrderId": "", // 出单ID
                    "outOrderType": "TR" // 出库单类型 TR 调拨单 PR 采购退 NO 普通出 SA 销售单
                    "payMode": "INBUY", // 结算方式 INBUY 入结 OUTBUY 出结
                    "pno": "", // 品号
                    "price": 523.04, // 基价
                    "priceJian": 0, // 件价
                    "priceSan": 0, // 散价
                    "productId": 322, // 产品ID
                    "productName": "", // 产品名
                    "productUnitId": 600, // 规格ID
                    "supplierId": 2694, // 供应商ID
                    "supplierName": "18", // 供应商名
                    "totalPrice": 0 // 总计
                }
            ],
            "pageNo": 1,
            "total": -1
        }
    }

### FYGL-18. 应付供应商货款导出接口
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/fee/pay/goods/export
#### 参数
    supplierId: 1 // 供应商ID
    depotId: 1 // 仓ID
    sDate: "2018-10-01" // 开始时间
    eDate: "2018-10-01" // 结束时间
#### 响应
    流