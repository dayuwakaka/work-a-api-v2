## 供应商接口
### GYS-1. 查询供应商
#### 对接负责人
    刘宏宇
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/supplier
#### 参数
    keyword: "xxx" // 供应商名称、联系人名
    status: "NORMAL" // 供应商帐号状态 NORMAL 正常 LOCK 锁定
    payMode: "INBUY" // 供应商结算方式 INBUY 入结 OUTBUY 出结
    pageNo:"1" // 页码 默认1
    pageSize: "25" // 页面条数 默认25
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "account": "", // 帐号
                    "city": "湛江市", // 市
                    "contactAddress": "", // 联系地址
                    "contactMobile": "13922092109", // 联系手机号
                    "contactName": "陈经理", // 联系人
                    "contactPathId": "1908", // 联系地址PathId
                    "county": "湛江市", // 县
                    "createRole": 29157, // 创建角色ID
                    "createTime": "2018-01-31 13:31:40", // 创建就时间
                    "createUser": 89, // 创建人ID
                    "createUserName": "郭倩", // 创建人名
                    "deleteFlg": 0,
                    "id": 5530, // 供应商ID
                    "name": "", // 供应商名
                    "password": "", // 登录密码
                    "payMode": "INBUY", // 支付方式 INBUY 入结、OUTBUY 出结
                    "platformId": 1, // 所属平台 1 亚洲渔港 ，目前只有一家 亚洲渔港
                    "province": "广东", // 省
                    "status": "NORMAL" // 登录帐号状态 NORMAL 正常 LOCK 锁定
                }
            ],
            "pageNo": 1,
            "total": 0
        }
    }

### GYS-2. 获取供应商明细
#### 对接负责人
    刘宏宇
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/supplier/{id}
#### 参数
    *id: 1 // 供应商ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "account": "account", // 供应商登录帐号
            "city": "北京市", // 供应商联系人城市
            "contactAddress": "contactAddress", // 供应商联系人详细地址
            "contactMobile": "contactMobile", // 供应商联系人手机号
            "contactName": "contactName", // 供应商联系人名
            "contactPathId": "0101", // 供应商联系地址PathId
            "county": "北京市", // 供应商城市
            "createRole": 1, // 创建角色ID
            "createTime": "2018-12-11 10:57:29", // 创建时间
            "createUser": 101, // 创建人ID
            "createUserName": "系统操作", // 创建人名
            "deleteFlg": 0, 
            "id": 5557, // 供应商ID
            "name": "", // 供应商名
            "password": "14e1b600b1fd579f47433b88e8d85291", // 供应商密码 MD5MD5 加密
            "payMode": "INBUY", // 供应商结算方式
            "platformId": 1, // 供应商所属平台
            "province": "北京", // 供应商联系方式省份
            "status": "NORMAL" // 供应商帐号状态 NORMAL 正常 LOCK 锁定
        }
    }

### GYS-3. 供应商新增
#### 对接负责人
    刘宏宇
#### 模块负责人
    梁铁骐
#### 请求
    POST /v2/supplier
#### 参数
    {
        *"name":"供应商1", // 供应商名
        *"payMode":"INBUY", // 供应商结算方式
        *"contactName":"contactName", // 供应商联系人
        *"contactMobile":"contactMobile", // 供应商联系人手机号
        *"contactPathId":"0101", // 供应商联系地址PathId
        *"contactAddress":"contactAddress", // 供应商联系详细地址
        *"account":"account" // 供应商帐号
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": 5557 // 新增的供应商ID
    }

### GYS-4. 供应商修改
#### 对接负责人
    刘宏宇
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/supplier/{id}
#### 参数
    *id: 1 // 供应商ID
    {
        "name":"供应商2", // 供应商名
        "payMode":"INBUY", // 供应商结算方式
        "account":"account" // 供应商帐号
        
        *"contactName":"contactName", // 供应商联系人
        *"contactMobile":"contactMobile", // 供应商联系人手机号
        *"contactPathId":"0101", // 供应商联系地址PathId
        *"contactAddress":"contactAddress", // 供应商联系详细地址
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### GYS-5. 修改供应商登录信息
#### 对接负责人
    刘宏宇
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/supplier/account/{id}
#### 参数
    *id: 1 // 供应商ID
    {
        *"account":"xxxx", // 供应商帐号
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### GYS-6. 重置供应商密码
#### 对接负责人
    刘宏宇
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/supplier/account/reset/{id}
#### 参数
    *id: 1 // 供应商ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### GYS-7. 锁定解锁供应商帐号
#### 对接负责人
    刘宏宇
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/supplier/account/status/{id}
#### 参数
    *id: 1 // 供应商ID
    {
        "status": "NORMAL" // 状态 NORMAL 正常， LOCK 锁定
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### GYS-8. 供应商删除
#### 对接负责人
    刘宏宇
#### 模块负责人
    梁铁骐
#### 请求
    DELETE /v2/supplier/{id}
#### 参数
    *id: 1 // 供应商ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### GYS-9. 供应商日志查询
#### 对接负责人
    刘宏宇
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/supplier/{id}/log
#### 参数
    *id: 1 // 供应商ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "id": 1,
                    "opInfo": "新增供应商", // 操作信息
                    "opRole": 1,
                    "opTime": "2018-12-11 10:57:29.0",
                    "opUser": 101,
                    "opUserName": "系统操作",
                    "platformId": 1,
                    "supplierId": 5557
                }
            ],
            "pageNo": 1,
            "total": 0
        }
    }

### GYS-10. 供应商库费系数查询
#### 对接负责人
    刘宏宇
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/supplier/fee
#### 参数
    *supplierId:1 // 供应商ID
    depotId： 1 // 仓ID 非必传
#### 响应
    {
    "code": 100000,
    "msg": "",
    "data": {
        "buttonPermissions": [],
        "dataSums": null,
        "datas": [
            {
                "calCross": 0, // 是否越库 0 否 1 是
                "calOut": 0, // 忽略
                "calWeight": "NET", // 计重方式 NET 净重 GROSS 毛重
                "createRole": 0, 
                "createTime": "2018-12-24 10:02:49.0",
                "createUser": 0,
                "createUserName": "",
                "deleteFlg": 0,
                "depotFee": 12.1, // 库费系数
                "depotId": 85, // 仓ID
                "depotName": "xxx", // 仓名
                "effectDate": "2018-06-13", // 生效日期
                "id": 2587, //  ID
                "platformId": 1, 
                "serviceFee": 135, // 服务费
                "supplierId": 2637, // 供应商ID
                "updateRole": 0,
                "updateTime": "2018-12-24 10:02:49.0",
                "updateUser": 0,
                "updateUserName": ""
            }
        ],
        "pageNo": 1, //  页码
        "total": 0 // 总数
    }
}

### GYS-11. 供应商库费系数新增
#### 对接负责人
    刘宏宇
#### 模块负责人
    刘宏宇
#### 请求
    POST /v2/supplier/fee
#### 参数
    {
        "depotId":1, // 仓库ID
        "supplierId":5557, // 供应商ID
        "depotFee":10.0, // 库费系数
        "serviceFee":20.0, // 服务费系数
        "calCross":1, // 是否越库 0 不越库 1 越库
        "calWeight":"NET", // 计重方式 NET 净重 GROSS 毛重
        "effectDate":"2018-12-11" // 生效日期 
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": 4096 // 新增后库费系数ID
    }

### GYS-12. 供应商库费系数修改
#### 对接负责人
    刘宏宇
#### 模块负责人
    刘宏宇
#### 请求
    PUT /v2/supplier/fee/{id}
#### 参数
    *id: 1 // 库费系数ID
    {
        "depotId":1, // 仓库ID
        "supplierId":5557, // 供应商ID
        "depotFee":10.0, // 库费系数
        "serviceFee":20.0, // 服务费系数
        "calCross":1, // 是否越库 0 不越库 1 越库
        "calWeight":"NET", // 计重方式 NET 净重 GROSS 毛重
        "effectDate":"2018-12-11" // 生效日期 
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### GYS-13. 供应商库费系数删除
#### 对接负责人
    刘宏宇
#### 模块负责人
    刘宏宇
#### 请求
    DELETE /v2/supplier/fee/{id}
#### 参数
    *id: 1 // 库费系数ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### GYS-14. 供应商库费系数-详情
#### 对接负责人
    刘宏宇
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/supplier/fee/{id}
#### 参数
    *id: 2608 // 库费系数ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "calCross": 0, // 是否越库 0 否 1 是
            "calOut": 0, // 忽略
            "calWeight": "NET", // 计重方式 NET 净重 GROSS 毛重
            "createRole": 0,
            "createTime": "2018-12-24 10:02:49.0",
            "createUser": 0,
            "createUserName": "",
            "deleteFlg": 0,
            "depotFee": 12.1, // 库费系数
            "depotId": 85, // 仓ID
            "depotName": "DC（成都太古仓）", // 仓名
            "effectDate": "2018-10-22", // 生效日期
            "id": 2608, //  ID
            "platformId": 1,
            "serviceFee": 135, // 服务费
            "supplierId": 5555, // 供应商ID
            "updateRole": 0,
            "updateTime": "2018-12-24 10:02:49.0",
            "updateUser": 0,
            "updateUserName": ""
        }
    }

### CG-51. 采购供货价审核-列表
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/supplier/price/askfor?buttonPermissionFlg=1
#### 参数
    keyword // 品名/品号
    supplierName // 经销商名称
    status // 审核状态 ASKFOR-待审核 PASS-通过 REFUSE-拒绝
    type // 定时类型 NOW-立即执行 HISTORY-追溯历史 FUTURE-定时执行
    ladderFlg // 定量价格 0-未设置 1-已设置
    buttonPermissionFlg // 获取权限按钮 0-否 1-是
    pageNo // 页码
    pageSize // 行数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "refuseButton": true, // 拒绝按钮
                    "passButton": true // 通过按钮
                }
            ],
            "datas": [
                {
                    "checkRemark": "", // 审批信息-备注
                    "checkTime": "", // 审批信息-时间
                    "checkUserName": "", // 审批信息-操作人
                    "createTime": "2018-12-08 03:57:20", // 申请信息-时间
                    "createUserName": "系统操作", // 申请信息-申请人
                    "remark": "申请", // 申请信息-备注
                    "effectDate": "2018-12-08", // 追溯时间、启动时间、生效日期
                    "id": 1,
                    "ladderFlg": 0, // 定量价格 0-未设置 1-已设置
                    "price": 100, // 签约价
                    "product": {
                        "name": "香草凤尾虾", // 品名
                        "pno": "0151", // 品号
                    },
                    "productUnit": {
                        "guige": "500g(23-25枚）/盒", // 规格
                        "unit": "盒" // 单位
                    },
                    "status": "ASKFOR", // 审核状态 ASKFOR-待审核 PASS-通过 REFUSE-拒绝
                    "supplierId": 1, // 经销商id
                    "supplierName": "山西代县文庙水产品经销商", // 经销商名称
                    "type": "NOW" // 定时类型 NOW-立即执行 HISTORY-追溯历史 FUTURE-定时执行
                }
            ],
            "pageNo": 1,
        }
    }

### CG-52. 采购供货价审核-获取定量价格
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/supplier/price/askfor/{id}/ladder
#### 参数
    id // 主键id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                
                "effectDate": "2018-12-11", // 生效日期
                "amount": 20, // 起订量
                "price": 11, 签约价
            }
        ]
    }

### CG-53. 采购供货价审核-审批通过
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/supplier/price/askfor/pass
#### 参数
    [1,2,3,4,5,6] // id 集合
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-53. 采购供货价审核-审批拒绝
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/supplier/price/askfor/refuse
#### 参数
    {
        ids: [1,2,3,4,5,6] // id 集合
        remark: "不符合规定" // 备注
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-54. 采购供货价审核-新增采购阶梯价格申请
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    POST /v2/supplier/price/askfor/{id}/ladder
#### 参数
    id: 主键id（采购供货价格id） 仅仅拼接在uri 即可
    {
        "ladderList": [
            {
                supplierId: 1, // 经销商id
                productId: 1, // 产品id
                productUnitId: 1, // 产品规格id
                amount: 1, // 起订量
                price: 2, // 签约价
                effectDate: "2018-12-12 12:12:12" // 生效日期
            },
            ...
        ],
        "remark": "asdfasdfasd" // 备注
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }


### CG-55. 采购供货价管理-列表
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/supplier/price?buttonPermissionFlg=1
#### 参数
    keyword // 品号/品名
    supplierName // 经销商名称
    deleteFlg // 签约状态
    type // NOW-立即生效 HISTORY-追溯历史 FUTURE-定时执行
    ladderFlg // 定量价格 0-未设置 1-已设置
    buttonPermissionFlg // 获取权限按钮 0-否 1-是
    pageNo // 页码
    pageSize // 行数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "cancelButton": true,
                    "ladderButton": true
                }
            ],
            "datas": [
                {
                    "deleteFlg": 0, // 签约状态 0-正常 1-失效
                    "effectDate": "2018-12-10", // 追溯时间、启动时间、生效日期
                    "id": 1,
                    "ladderFlg": 0, // 定量价格 0-未设置 1-已设置
                    "price": 1, // 签约价
                    "product": {
                        "name": "香草凤尾虾", // 品名
                        "pno": "0151" // 品号
                    },
                    "productUnit": {
                        "guige": "500g(23-25枚）/盒", // 规格
                        "unit": "盒" // 单位
                    },
                    "remark": "",
                    "supplierId": 1,
                    "supplierName": "", // 供应商名称
                    "type": "NOW", // 定时类型 NOW-立即生效 HISTORY-追溯历史 FUTURE-定时执行
                    "updateTime": "2018-12-10 09:39:01", // 操作信息-操作时间
                    "updateUserName": "xxx" // 操作信息-操作人
                },
                ...
            ],
            "pageNo": 1,
        }
    }

### CG-56. 采购供货价管理-取消签约
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    POST /v2/supplier/price
#### 参数
    [1,2,3,4,5,6] // id集合
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-57. 采购供货价管理-获取定量价格
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/supplier/price/{id}/ladder
#### 参数
    id // 主键id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                
                "effectDate": "2018-12-11", // 生效日期
                "amount": 20, // 起订量
                "price": 11, 签约价
            }
        ]
    }

### CG-58. 采购订单价格审核-列表
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/paorder/price/askfor?buttonPermissionFlg=1
#### 参数
    keyword // 采购订单号/供应商名称
    status // 审核状态 ASKFOR-待审核 PASS-通过 REFUSE-拒绝
    paymode // 支付方式 INBUY OUTBUY
    buttonPermissionFlg // 获取权限按钮 0-否 1-是
    pageNo // 页码
    pageSize // 行数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "refuseButton": false,
                    "passButton": false
                },
                ...
            ],
            "datas": [
                {
                    "checkRemark": "@@@@", // 审核信息-备注
                    "checkTime": "2018-12-12 09:50:00", // 审核信息-时间
                    "checkUserName": "yyy", // 审核信息-操作人
                    "createTime": "2018-12-12 01:49:23", // 创建信息-时间
                    "createUserName": "xxx", // 创建信息-操作人
                    "sendTime": "2018-12-12 12:12:12", // 发送时间
                    "remark": "", // 创建信息-备注
                    "id": 1,
                    "paymode": "INBUY", // 支付方式
                    "orderId": "PA1812000001", // 订单号
                    "productUnit": {
                        "guige": "500g(23-25枚）/盒", // 规格
                        "name": "香草凤尾虾", // 品名
                        "pno": "0151", // 品号
                        "unit": "盒" // 单位
                    },
                    "sPrice": 12, // 原单价
                    "status": "ASKFOR", // 审核状态  ASKFOR-待审核 PASS-通过 REFUSE-拒绝
                    "supplierId": 1, // 经销商id
                    "supplierName": "湖北武汉",
                    "tPrice": 12, // 目标单价
                },
                ...
            ],
            "pageNo": 1,
        }
    }

### CG-59. 采购订单价格审核-通过
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/paorder/price/askfor/pass
#### 参数
    [1,2,3,4,5,6] id 集合
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-60. 采购订单价格审核-拒绝
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/paorder/price/askfor/refuse
#### 参数
    {
        ids: [1,2,3,4,5,6] // id集合
        remark: "不符合规定" // 备注
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-61. 采购订单-列表
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/paorder?buttonPermissionFlg=1
#### 参数
    keyword // 采购订单号/供应商名称
    deliverType // 配送方式 SELF 自送 THIRD 物流配送
    depotId // 仓id
    status // 订单状态 INVALID 未生效 RUN 已生效 STOCKUP 已备货 SEND 已发出 COMPLETE 已签收
    paymode // 支付方式 INBUY 入结 OUTBUY 出结
    priceFlg // 采购价格调整 0 未修改价格 1 修改价格待审核 2 已修改价格
    buttonPermissionFlg // 获取权限按钮 0-否 1-是
    pageNo // 页码
    pageSize // 行数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "setRunButton": true, // 确认执行按钮
                    "editButton": true, // 修改按钮 
                    "delButton": true, // 删除按钮
                    "modifyPriceButton": false, // 修改价格按钮
                    "logButton": true // 日志查看按钮
                }
            ],
            "datas": [
                {
                    "completeTime": "", // 完成时间
                    "createTime": "2018-12-10 09:46:43",
                    "createUserName": "0",
                    "deleteFlg": 0,
                    "deliverType": "THIRD", // 配送方式 SELF 自送 THIRD 物流配送
                    "depotId": 1,
                    "depotName": "大连铁越仓", // 出库仓
                    "id": 3,
                    "onlyCode": "",
                    "orderId": "PA1812100000008", // 采购订单号
                    "paymode": "OUTBUY", // 支付方式 INBUY OUTBUY
                    "planCompleteTime": "2018-12-22 12:12:12", // 计划入库时间
                    "planSendTime": "2018-12-12 00:00:00", // 计划发出时间
                    "priceFlg": 0, // 采购价格调整 0 未修改价格 1 修改价格待审核 2 已修改价格
                    "remark": "test",
                    "runTime": "", // 执行时间(生效时间)
                    "sendTime": "", // 发车时间
                    "status": "INVALID", // 订单状态 INVALID 未生效 RUN 已生效 STOCKUP 已备货 SEND 已发出 COMPLETE 已签收
                    "supplierAddress": "山西代县文庙附近", // 经销商名称
                    "supplierId": 1, // 供应商id
                    "supplierName": "山西代县文庙超市", // 供应商名称
                    "totalprice": 1 // 金额
                }
            ],
            "pageNo": 1,
        }
    }

### CG-62. 采购订单-详情
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/paorder/{orderId}
#### 参数
    orderId 订单号
    comb - 赠品行是否需要合并 进入编辑页传递true 进入详情页传递false
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "completeTime": "",
            "createTime": "2018-12-10 09:46:43",
            "contactAddress": "", // 联系详细地址
            "contactMobile": "", // 联系电话
            "contactName": "", // 联系人
            "contactPathId": "", // 区域code
            "deliverType": "THIRD", // 配送方式 SELF 自送 THIRD 物流配送
            "depotId": 1,
            "depotName": "大连铁越仓", // 入库仓
            "id": 3,
            "jian": 0, // 总件数
            "remark": "", // 备注
            "orderId": "PA1812100000008", // 订单号
            "orderPaPros": [
                {
                    "giftFlg": 0, // 赠品标识 0-否 1-是
                    "pcount": 1, // 数量
                    "giftCount": 0, // 赠品数量
                    "price": 1, // 价格
                    "productUnit": {
                        "guige": "500g(23-25枚）/盒", // 规格
                        "name": "香草凤尾虾", // 品名
                        "pno": "0151", // 品号
                        "unit": "盒" // 单位
                    },
                    "id": 1, // 主键id
                    "productId": 27, // 产品id
                    "productUnitId": 52, // 产品规格id
                    "totalprice": 1 // 小计
                },
                ...
            ],
            "paymode": "OUTBUY", // 支付方式
            "planCompleteTime": "2018-12-10 16:23:23", // 计划入库时间
            "planSendTime": "2018-12-12 00:00:00", // 计划发出时间
            "runTime": "", // 生效时间
            "san": 1, // 散货
            "sendTime": "2018-12-18 12:12:12", // 发出时间
            "status": "INVALID", // INVALID 未生效 RUN 已生效 STOCKUP 已备货 SEND 已发出 COMPLETE 已签收
            "supplierId": 2637, // 供应商id
            "supplierName": "山西代县文庙超市", // 供应商名称
            "totalprice": 1 // 总计
        }
    }

### CG-63. 采购订单-确认执行
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/paorder/{orderId}/run
#### 参数
    orderId 订单号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-64. 采购订单-新增
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    POST /v2/paorder
#### 参数
    {
        *supplierId: 1, // 经销商id
        contactName: '阎锡山', // 联系人
        contactMobile： 13333333333, // 联系电话
        contactPathId: 060202, // 区域id
        contactAddress: "山西忻州代县", // 经销商地址
        *depotId: 6, // 入库仓id
        *depotName: "大连铁越仓", // 入库仓名称
        *deliverType: "THIRD", // 配送方式 SELF 自送 THIRD 物流配送
        *planCompleteTime: "2018-12-12 12:12:12", // 计划入库时间
        *planSendTime: "2018-12-12 12:12:12", // 计划发出时间
        *remark: "采购入货", // 备注
        *orderPaProList: [
            {
                *productId: 1, // 产品id
                *productUnitId: 1, // 产品规格id
                *pcount: 2, // 采购数量
                *giftCount: 3 // 赠品数量
            }
        ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-65. 采购订单-修改采购订单
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/paorder/{orderId}
#### 参数
    {
        *id: 1, // 主键
        *supplierId: 1, // 经销商id
        *supplierName: "xxx", // 经销商名称
        contactName: '阎锡山', // 联系人
        contactMobile： 13333333333, // 联系电话
        contactPathId: 060202, // 区域id
        contactAddress: "山西忻州代县", // 经销商地址
        *depotId: 6, // 入库仓id
        *depotName: "大连铁越仓", // 入库仓名称
        *paymode: INBUY, // 支付方式
        *deliverType: "THIRD", // 配送方式 SELF 自送 THIRD 物流配送
        *planCompleteTime: "2018-12-12 12:12:12", // 计划入库时间
        *planSendTime: "2018-12-12 12:12:12", // 计划发出时间
        *remark: "采购入货", // 备注
        *orderPaProList: [
            {
                *productId: 1, // 产品id
                *productUnitId: 1, // 产品规格id
                *pcount: 2, // 采购数量
                *giftCount: 3 // 赠品数量
            }
        ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-66. 采购订单-删除采购订单
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    DELETE /v2/paorder/{orderId}
#### 参数
    orderId 订单号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-67. 采购订单-获取采购订单日志
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/paorder/{orderId}/log
#### 参数
    orderId // 订单号
    pageNo // 页码
    pageSize // 行数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "datas": [
                {
                    "id": 1,
                    "opInfo": "创建采购订单", // 操作内容
                    "opTime": "2018-12-10 17:47:14", // 操作时间
                    "opUserName": "孙启萌", // 操作人
                    "orderId": "PA1812100000008"
                }
            ],
            "pageNo": 1
        }
    }

### CG-68. 采购订单-修改采购价格
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    POST /v2/paorder/price/askfor
#### 参数
    {
        "paProId": 363807, // 采购单产品明细id
        "orderId": "PA181031015389", // 订单号
        "targetPrice": 70,// 目标单价
        "remark": "促销活动失效"// 备注
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-69. 采购订单-通过批量采购单号获取产品明细
#### 对接股责任
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/paorder/pros
#### 参数
    orderIds: [PA181221000001, PA181221000001]
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "batchNo": "", // 批次号
                "giftFlg": 0, // 是否赠品 0 - 否 1 - 是
                "id": 1, // 主键id
                "orderId": "PA140821046931", // 采购订单号
                "pcount": 136, // 数量
                "price": 360, // 价格
                "productId": 27, // 产品id
                "productUnitId": 52, // 产品规格id
                "totalprice": 48960 // 产品总价
            },
            ...
        ]
    }

### CG-69.采购退单-列表
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/prorder?buttonPermissionFlg=1
#### 参数
    keyword // 单号/经销商名称
    deliverType // 配送方式 SELF 自送 THIRD 物流配送
    depotId // 仓id
    status // 订单状态 INVALID 未生效 RUN 已生效 STOCKUP 已备货 SEND 已发出 COMPLETE 已签收
    buttonPermissionFlg // 获取权限按钮 0-否 1-是
    pageNo // 页码
    pageSize // 行数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "setRunButton": true, // 确认执行按钮
                    "editButton": true, // 修改按钮
                    "delButton": true, // 删除按钮
                    "logButton": true // 日志按钮
                }
            ],
            "datas": [
                {
                    "createTime": "2018-12-12 05:52:03", // 创建时间
                    "deleteFlg": 0,
                    "deliverType": "SELF", // 配送方式 SELF 自送 THIRD 物流配送
                    "depotId": 0,
                    "depotName": "大连铁越仓", // 出库仓
                    "id": 1,
                    "jian": 0,
                    "orderId": "PA1812100000001", // 采购退单号
                    "planTime": "2018-12-12 01:10:01", // 计划出库时间
                    "completeTime": "2018-12-12 01:10:01", // 完成时间
                    "sendTime": "2018-12-12 01:10:01", // 发货时间
                    "runTime": "2018-12-12 01:10:01", // 生效时间
                    "remark": "", // 备注
                    "san": 0,
                    "status": "INVALID", // 订单状态 INVALID 未生效 RUN 已生效 STOCKUP 已备货 SEND 已发出 COMPLETE 已签收
                    "supplierAddress": "湖北省武汉市汉口",
                    "supplierId": 1, // 供应商id
                    "supplierName": "山西忻州经销商", // 供应商名称
                    "totalprice": 0 // 订单总金额
                }
            ],
            "pageNo": 1,
        }
    }

### CG-70. 采购退单-确认执行
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/prorder/{orderId}/run
#### 参数
    orderId // 订单号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-71. 采购退单-删除
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    DELETE /v2/prorder/{orderId}
#### 参数
    orderId // 订单号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-72. 采购退单-新增采购退单
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    POST /v2/prorder
#### 参数
    {
        *supplierId: 1, // 经销商id
        contactName: '阎锡山', // 联系人
        contactMobile： 13333333333, // 联系电话
        contactPathId: 060202, // 区域id
        contactAddress: "山西忻州代县", // 经销商地址
        *depotId: 1, // 仓库id
        *depotName: "rrr" // 仓库名称
        *deliverType: "SELF" // 配送方式 SELF 自送 THIRD 物流配送
        *remark: "kkk", // 备注
        *planTime: "2018-12-12 12:12:12", // 计划出库时间
        *orderPrProList: [
            {
                *productId: 1, // 产品id
                *productUnitId: 1, // 产品规格id
                *pcount: 1, // 退货数量
                *giftCount: 2 // 赠品数量
                *price: 100 // 退货价格
            },
            ...
        ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-73. 采购退单-修改采购退单
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/prorder/{orderId}
#### 参数
    orderId // 订单号
    {
        *id: 1, // 主键id
        *supplierId: 1, // 经销商id
        *supplierName: "xxx", // 经销商名称
        contactName: '阎锡山', // 联系人
        contactMobile： 13333333333, // 联系电话
        contactPathId: 060202, // 区域id
        contactAddress: "山西忻州代县", // 经销商地址
        *depotId: 1, // 仓库id
        *depotName: "rrr" // 仓库名称
        *deliverType: "SELF" // 配送方式 SELF 自送 THIRD 物流配送
        *remark: "kkk", // 备注
        *planTime: "2018-12-12 12:12:12", // 计划出库时间
        *orderPrProList: [
            {
                *productId: 1, // 产品id
                *productUnitId: 1, // 产品规格id
                *pcount: 1, // 退货数量
                *price: 2, // 退货价格
                *giftCount: 2 // 赠品数量
            },
            ...
        ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-74. 采购退单-获取详情
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/prorder/{orderId}
#### 参数
    orderId // 订单号
    comb - 赠品行是否需要合并 进入编辑页传递true 进入详情页传递false
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "completeTime": "",
            "createTime": "2018-12-12 08:13:32",
            "contactAddress": "西岗区物流商贸大厦", // 联系详细地址
            "contactMobile": "13333333336", // 联系电话
            "contactName": "李斯", // 联系人
            "contactPathId": "060202", // 联系地址code
            "deliverType": "THIRD", // 配送方式 SELF 自送 THIRD 物流配送
            "depotName": "大连铁越仓", // 入库仓
            "jian": 0, // 总件数
            "onlyCode": "",
            "orderId": "PR1812120000001", // 订单号
            "orderPrPros": [
                {
                    "giftFlg": 0, // 赠品标识 0-否 1-是
                    "pcount": 1, // 数量
                    "price": 1, // 价格
                    "productUnit": {
                        "guige": "500g(23-25枚）/盒", // 规格
                        "name": "香草凤尾虾", // 品名
                        "pno": "0151", // 品号
                        "unit": "盒" // 单位
                    },
                    "productUnitId": 52, // 产品规格id
                    "productId": 12, // 产品id
                    "totalprice": 5.94 // 小计
                }
            ],
            "planTime": "2018-12-12 12:12:12", // 计划出库时间
            "platformId": 1,
            "remark": "我就是测试一下", // 备注
            "runTime": "", // 生效时间
            "san": 4, // 散货
            "sendTime": "", // 发出时间
            "status": "INVALID", // INVALID 未生效 RUN 已生效 STOCKUP 已备货 SEND 已发出 COMPLETE 已签收
            "supplierId": 2674, // 经销商id
            "supplierName": "湖北武汉经销商", // 供应商名称
            "totalprice": 5.94 // 总计
        }
    }

### CG-75. <font color=red>采购订单价格申请-列表(作废)</font>
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/paorder/price/askfor?buttonPermissionFlg=1
#### 参数
    keyword // 订单号/供应商名称
    status // 申请状态 ASKFOR-待审核 PASS-通过 REFUSE-拒绝
    buttonPermissionFlg // 获取权限按钮 0-否 1-是
    pageNo // 页码
    pageSize // 行数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "refuseButton": false, // 拒绝按钮
                    "passButton": false // 通过按钮
                }
            ],
            "datas": [
                {
                    "checkRemark": "", // 审核信息-备注
                    "checkTime": "", // 审核信息-时间
                    "checkUserName": "", // 审核信息-操作人
                    "createTime": "2018-12-12 06:43:40", // 操作信息-时间
                    "createUserName": "", // 操作信息-操作人
                    "remark": "", // 操作信息-备注
                    "id": 1, // 主键id
                    "orderId": "PA18121200001", // 采购单号
                    "paymode": "OUTBUY", // 支付方式
                    "pcount": 1,
                    "sendTime": "2018-12-12 12:12:12", // 发出时间
                    "platformId": 1,
                    "productUnit": {
                        "guige": "500g(23-25枚）/盒", // 规格
                        "name": "香草凤尾虾", // 品名
                        "pno": "0151", // 品号
                        "unit": "盒" // 单位
                    },
                    "sPrice": 1, // 原单价
                    "tPrice": 1, // 目标单价
                    "status": "ASKFOR", // 申请状态 ASKFOR-待审核 PASS-通过 REFUSE-拒绝
                    "supplierId": 1, // 供应商id
                    "supplierName": "供应商名称", // 供应商名称
                }
            ],
            "pageNo": 1,
        }
    }

### CG-76. <font color=red>采购订单价格申请-通过(作废)</font>
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/paorder/price/askfor/pass
#### 参数
    [1,2,3,4,5,6] // id 集合
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-77. <font color=red>采购订单价格申请-通过(作废)</font>
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/paorder/price/askfor/refuse
#### 参数
    {
        ids: [1,2,3,4,5,6], // id集合
        remark: "不符规定" // 备注
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-78. 采购供货价审核-新增
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    POST /v2/supplier/price/askfor
#### 参数
    {
        supplierId: 1, // 经销商id
        productId: 1, // 产品id
        productUnitId: 1, // 产品规格id
        type： "NOW" // NOW 立即生效 HISTORY 追溯历史 FUTURE 定时执行
        price: 2, // 签约价
        effectDate: "2018-12-12 12:12:12" // 生效日期
        onlyCode: "as-dhj-fdfs-as-asdf" // 申请唯一码
        remark: "" // 备注
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-79. 采购供货价审核-列表导出
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/supplier/price/askfor/export
#### 参数
    keyword // 品名/品号
    supplierName // 经销商名称
    status // 审核状态 ASKFOR-待审核 PASS-通过 REFUSE-拒绝
    type // 定时类型 NOW-立即执行 HISTORY-追溯历史 FUTURE-定时执行
    ladderFlg // 定量价格 0-未设置 1-已设置
    *date： '2018-12' // 导出日期 yyyy-MM
    *checkCode: 下载码
#### 响应
    stream

### CG-80.采购退单-日志列表
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/prorder/{orderId}/log
#### 参数
    orderId 采购退单号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "datas": [
                {
                    "opInfo": "订单状态锁定", // 操作内容
                    "opTime": "2018-10-22 13:11:07", // 操作时间
                    "opUserName": "李凤", // 操作人
                    "orderId": "PR181019000192"
                }
            ],
            "pageNo": 1,
        }
    }

### CG-81. 采购订单-产品明细拆分
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/paorder/{orderId}/pro
#### 参数
    {
        "onlyCode": "iijkiokjijklj", // 唯一码
        "orderPaPros": [
            {
                "id": 363848, // 明细id
                "pcount": 200, // 
                "batchNo": "NO.324781293"
            },
            ...
        ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-82. 采购订单-校验采购订单能否确认执行
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    POST /v2/paorder/complete/status
    Headrs: {
        "token": "923o4yu8tr3q94theriuot"
    }
#### 参数
    json body
    ["PA1812290001","pa1812290002"] // 采购订单号集合
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "PA1812290001": true,
            "pa1812290002": false
        }
    }
    
### CG-83. 供应商产品列表
#### 对接负责人
    梁铁骐
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/supplier/product
#### 参数
    depotId 仓库id // 采购退单调用要传出库仓id
    *supplierId 供应商id
    keyword // 品名品号
    pageNo 1 // 页码
    pageSize 25 // 行数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            datas: [
                {
                    "price": 1280, // 采购价格
                    "productId": 4523, // 产品id
                    "productUnit": {
                        "guige": "170g/盒*40盒", // 规格
                        "product": {                            
                            "name": "冰鲜三文鱼扒 ", // 品名
                            "pno": "F001", // 品号
                            "customFlg": 0, // 定制标识  0 常规品 1 定制品
                            "productLack": null, // 产品断货标识，若未null 则不缺货 反之亦然
                            "status": "NORMAL" // 产品状态 NORMAL - 正常 LOCK - 下架
                        },
                        "stock": {
                            "amount": 0, // 库存数量
                        },
                        "unit": "件" // 单位
                    },
                    "productUnitId": 7951, // 产品规格id
                    "supplierId": 5553,
                    "supplierName": "北京利旺通达商贸有限公司"
                }
            ]
        }
    }
