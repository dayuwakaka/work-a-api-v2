
## 备货管理

### BH-1.xxx
#### 模块负责人
    王子悦
#### 请求
#### 参数
#### 响应

### BH-30 新增线路计划
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    POST /v2/stockup/plan
#### 参数
    {
    	"name": "test线路", // 线路名称
    	"lineId": 1, // 线路id
    	"carInfo": "12米超级超限", // 发车车型
    	"planSendTime": "2019-05-29 00:00:00", // 计划发出时间
    	"planCompleteTime": "2019-06-01 00:00:00" // 计划入库时间
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### BH-31 修改线路计划
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    PUT /v2/stockup/plan/{id}
#### 参数
    id: 主键id，
    body:
    {
        "id": 1, // 主键id
    	"name": "test线路", // 线路名称
    	"carInfo": "12米超级超限", // 发车车型
    	"planSendTime": "2019-05-29 00:00:00", // 计划发出时间
    	"planCompleteTime": "2019-06-01 00:00:00" // 计划入库时间
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
### BH-32 获取发车车型列表
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/stockup/plan/cars
#### 参数
    无
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            "15米",
            "13.7米",
            "12.5米",
            "9.6米",
            "8.6米"
        ]
    }

### BH-33 删除线路计划
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    DELETE /v2/stockup/plan/{id}
#### 参数
    id: 1 // 主键id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### BH-34 获取线路计划
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/stockup/plan
#### 参数
    lineId: 1 // 线路id
    buttonPermissionFlg: 1 // 是否获取权限按钮 0-否 1-是
    pageNo: 1 // 页码
    pageSize: 25 // 页面数据行数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "chooseButton": true // 选择按钮
                }
            ],
            "datas": [
                {
                    "carInfo": "12米超级超限", // 发车车型
                    "createRole": -1,
                    "createTime": "2019-05-29 09:22:20", // 创建时间
                    "createUser": 35744,
                    "createUserName": "系统操作", // 创建人
                    "deleteFlg": 0,
                    "id": 2,
                    "lineId": 1,
                    "name": "test线路", // 计划名称
                    "planCompleteTime": "2019-06-01 00:00:00", // 计划入库时间
                    "planSendTime": "2019-05-29 00:00:00", // 计划发出时间
                    "splitFlg": 0,
                    "status": "INVALID", // 状态 INVALID 待执行 RUN 已执行
                    "stockupPlanDetailVOS": null
                }
            ],
            "pageNo": 1,
            "total": 0
        }
    }

### BH-35 通过承运单号获取物流配送信息
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/stockup/plan/{lmsNo}/info
#### 参数
    lmsNo: 承运单号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "carInfo": "18.8米", // 车型
            "carNo": "演C 80001", // 车牌
            "driverMobile": "13333333333", // 司机联系电话
            "driverName": "xxx", // 司机名称
            "jian": 100, // 件
            "logisticsName": "东风快递，使命必达", // 物流商名称
            "san": 50 // 散
        }
    }

### BH-36 同步物流信息
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    PUT /v2/stockup/plan/{id}/syn
#### 参数
    id: 1 // 主键id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }




