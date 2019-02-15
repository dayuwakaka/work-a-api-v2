
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

### FYGL-5. 仓库库费
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


### FYGL-5. 仓库库费汇总
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