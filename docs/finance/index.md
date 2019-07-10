## 财务接口
### CW-51. 订金管理-列表
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/finance/deposits
#### 参数
    keyword: "xxx" // 客户名称
    status: "NORMAL" // 状态 NORMAL 正常 LOCK 锁定
    opAccount: 1 // 客户账户ID
    buttonPermissionFlg: 1, // 是否获取权限按钮
    pageNo:"1" // 页码 默认1
    pageSize: "25" // 页面条数 默认25
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "reduceButton": true, // 扣款按钮
                    "addButton": true, // 充值按钮
                    "logButton": true, // 查看日志按钮
                    "modifyRuleButton": true // 修改规则按钮
                },
                ...
            ],
            "datas": [
                {
                    "createTime": "2012-03-14 11:08:27", // 创建时间
                    "customer": {
                        "shortName": "西安迈德思餐饮管理有限公司", // 客户名称
                    },
                    "deleteFlg": 0,
                    "effectEtime": "2019-06-17 23:59:59", // 订金有效期结束时间
                    "effectRange": "4417,122", // 订金产品范围（规格id，以','相隔）
                    "effectStime": "2019-06-04 00:00:00", // 订金有效期开始时间
                    "id": 32768, // 订金id
                    "money": 7.68, // 订金余额
                    "opAccount": 925, // 客户id（客户账户id）
                    "orignalAmount": 241920, // 订金原始金额
                    "platformId": 0,
                    "ratio": 100, // 订金比例
                    "status": "NORMAL", // 订金状态 NORMAL 正常 LOCK 锁定
                },
                ...
            ],
            "pageNo": 1,
            "total": 0
        }
    }

### CW-52. 订金管理-详情
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/finance/deposits/{id}
#### 参数
    id: 32769 // 订金id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "createTime": "2012-03-14 11:08:27", // 创建时间
            "customer": {
                "shortName": "西安迈德思餐饮管理有限公司", // 客户名称
            },
            "deleteFlg": 0,
            "effectEtime": "2019-06-17 23:59:59", // 订金有效期结束时间
            "effectRange": "4417,122", // 订金产品范围（规格id，以','相隔）
            "effectStime": "2019-06-04 00:00:00", // 订金有效期开始时间
            "id": 32768, // 订金id
            "money": 7.68, // 订金余额
            "opAccount": 925, // 客户id（客户账户id）
            "orignalAmount": 241920, // 订金原始金额
            "platformId": 0,
            "ratio": 100, // 订金比例
            "status": "NORMAL", // 订金状态 NORMAL 正常 LOCK 锁定
        }
    }

### CW-53. 订金管理-日志列表
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/finance/deposits/{id}/logs
#### 参数
    id: 32769 // 订金id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "datas": [
                {
                    "effectStime": "2018-03-08 00:00:00", // 订金有效期开始时间
                    "effectEtime": "2018-03-30 23:59:59", // 订金有效期结束时间
                    "money": 24600, // 涉及金额
                    "opInfo": "预付款转新增订金", // 操作内容
                    "opTime": "2018-03-08 15:00:00", // 操作时间
                    "opUserName": "崔洋洋", // 操作人
                    "ratio": 100 // 订金比例
                }
            ],
            "pageNo": 1, // 页码
            "total": 0
        }
    }

### CW-54. 订金审核管理-列表
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/finance/deposit/askfors
#### 参数
    
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissionPage": {},
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "actionType": "DEPOSIT_TRANSFER_BALANCE", // 调整类型
                    "bankAccount": "",
                    "bankAccountName": "",
                    "checkRemark": "",
                    "checkRole": 0,
                    "checkTime": "",
                    "checkUser": 0,
                    "checkUserName": "",
                    "createRemark": "",
                    "createRole": 0,
                    "createTime": "2019-06-18 13:54:12.0",
                    "createUser": 0,
                    "createUserName": "张亚婕",
                    "customer": {
                        "shortName": "常州协瑞国际贸易有限公司", // 客户名称
                    },
                    "depositId": 0,
                    "effectEtime": "", // 订金
                    "effectRange": "",
                    "effectStime": "",
                    "id": 0,
                    "money": -19292, // 金额
                    "opAccount": 3885,
                    "ratio": 0, // 比例
                    "relationSid": 0,
                    "status": "PASS", // 审核状态 ASKFOR-待审核 PASS-通过 REFUSE-拒绝
                    "type": null
                }
            ],
            "pageNo": 1,
            "total": 0
        }
    }















