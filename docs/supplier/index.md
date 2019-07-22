## 供应商接口
### GYS-1. 查询供应商
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
                    "companies": [
                        {
                            "code": "alibaba", // 金蝶编号
                            "createRole": 1,
                            "createTime": "2019-07-16 10:50:13",
                            "createUser": 1,
                            "createUserName": "1",
                            "deleteFlg": 0,
                            "id": 1,
                            "name": "阿里巴巴", // 企业名称
                            "supplierId": 5588
                        },
                        ...
                    ]
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
                    "shortName": "shortName", // 供应商编号
                    "taxCode": "23123123123", // 纳税人识别号
                    "status": "NORMAL" // 登录帐号状态 NORMAL 正常 LOCK 锁定
                }
            ],
            "pageNo": 1,
            "total": 0
        }
    }

### GYS-2. 获取供应商明细
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
            "companies": [
                {
                    "code": "alibaba",
                    "createRole": 1,
                    "createTime": "2019-07-16 10:50:13",
                    "createUser": 1,
                    "createUserName": "1",
                    "deleteFlg": 0,
                    "id": 1, // 主键id
                    "name": "阿里巴巴", // 企业名称
                    "supplierId": 5588
                },
                ...
            ],
            "supplierContacts": [
                {
                    "contactAddress": "大安街320号", // 详细地址
                    "contactMobile": "13368686868", // 联系电话
                    "contactName": "哔哩哔哩", // 取货人
                    "contactPathId": "0101", // 区域pathid
                    "pathName": "内蒙古呼和浩特市回民区", // 详细地址
                    "createRole": 1,
                    "createTime": "2019-07-16 11:37:23",
                    "createUser": 518,
                    "defaultFlg": 0, // 是否默认取货信息 0-否 1-是
                    "deleteFlg": 0,
                    "id": 522, // 主键id
                    "lastModified": "2019-07-16 08:08:23",
                    "remark": "我是备注", // 备注
                    "supplierId": 5588
                },
                ...
            ],
            "id": 5557, // 供应商ID
            "name": "", // 供应商名
            "password": "14e1b600b1fd579f47433b88e8d85291", // 供应商密码 MD5MD5 加密
            "payMode": "INBUY", // 供应商结算方式
            "platformId": 1, // 供应商所属平台
            "province": "北京", // 供应商联系方式省份
            "shortName": "shortName", // 供应商编号
            "taxCode": "123123123", // 纳税人识别号
            "status": "NORMAL" // 供应商帐号状态 NORMAL 正常 LOCK 锁定
        }
    }

### GYS-3. 供应商新增
#### 模块负责人
    梁铁骐
#### 请求
    POST /v2/supplier
#### 参数
    {
        supplier: {
            *"name":"供应商1", // 供应商名
            *"payMode":"INBUY", // 供应商结算方式
            *"taxCode":"123123123", // 纳税人识别号
            *"shortName":"shortName", // 供应商编号
            *"account":"account" // 供应商帐号
            *"companyIds": [1,2,3,4,5,6,7,8,9] // 所属企业id
        },
        supplierContacts: [ // 取货信息
            {
                *contactName: "", // 联系人
                *contactMobile: "", // 联系电话
                *contactPathId: "", // 供应商联系地址PathId
                *contactAddress: "", // 供应商联系详细地址
                *defaultFlg: 1 // 默认地址 1 默认 0 非默认
            },
            ...
        ]
    }
    
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": 5557 // 新增的供应商ID
    }

### GYS-4. 供应商修改
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/supplier/{id}
#### 参数
    *id: 1 // 供应商ID
    {
        *"name":"供应商1", // 供应商名
        *"payMode":"INBUY", // 供应商结算方式
        *"taxCode":"123123123", // 纳税人识别号
        *"shortName":"shortName", // 供应商编号
        *"account":"account" // 供应商帐号
        *"companyIds": [1,2,3,4,5,6,7,8,9] // 所属企业id
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### GYS-5. 修改供应商登录信息
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
### CG-20. 普通入库单-列表
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/niorder
#### 参数
    keyword // 采购订单好、供应删名称
    depotId // 入库仓id
    status // 订单状态
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
                    
                }
            ]
        }
    }

### CG-51. 采购供货价审核-列表
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
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/supplier/price?buttonPermissionFlg=1
#### 参数
    keyword // 品号/品名
    supplierName // 经销商名称
    status // 签约状态 0-正常 1-失效
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
                    "status": 0, // 签约状态 0-正常 1-失效
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
                    "sourcePrice": 200,, // 原价
                    "status": "ASKFOR", // 审核状态  ASKFOR-待审核 PASS-通过 REFUSE-拒绝
                    "supplierId": 1, // 经销商id
                    "supplierName": "湖北武汉",
                    "targetPrice": 202,, // 目标价
                },
                ...
            ],
            "pageNo": 1,
        }
    }

### CG-59. 采购订单价格审核-通过
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
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/paorder?buttonPermissionFlg=1
#### 参数
    keyword // 采购订单号
    supplierId // 供应商id
    deliverType // 配送方式 SELF 自送 THIRD 物流配送
    depotId // 仓id
    status // 订单状态 INVALID 未生效 SET 提交物流中 RUN 已生效 STOCKUP 已备货 SEND 已发出 COMPLETE 已签收
    paymode // 支付方式 INBUY 入结 OUTBUY 出结
    priceFlg // 采购价格调整 0 未修改价格 1 修改价格待审核 2 已修改价格
    buttonPermissionFlg // 获取权限按钮 0-否 1-是
    createUserName // 创建人名称
    type // NORMAL 正常单 CONTROL_PRODUCT 品控单
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
                    "logButton": true， // 日志查看按钮
                    "backButton" : true // 撤回按钮
                }
            ],
            "datas": [
                {
                    "completeTime": "", // 完成时间
                    "createTime": "2018-12-10 09:46:43", // 创建时间
                    "createUserName": "test", // 创建人
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
                    "jian": 12, // 件
                    "san": 2, // 散
                    "waybillInfo": "", // 承运单信息
                    "type": "NORMAL", // 采购单类型 NORMAL: 正常单 CONTROL_PRODUCT:品控单
                    "remark": "test", // 备注
                    "runTime": "", // 执行时间(生效时间)
                    "sendTime": "", // 发车时间
                    "status": "INVALID", // 订单状态 INVALID 未生效 RUN SET 提交物流中 已生效 STOCKUP 已备货 SEND 已发出 COMPLETE 已签收
                    "supplierAddress": "山西代县文庙附近", // 经销商名称
                    "supplierId": 1, // 供应商id
                    "supplierName": "山西代县文庙超市", // 供应商名称
                    "totalprice": 1, // 金额
                    "supplierShortName": "12", // 供应商编号
                    "companyId": 0, // 所属企业id
                    "companyName": "", // 所属企业名称
                }
            ],
            "pageNo": 1,
        }
    }

### CG-62. 采购订单-详情
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/paorder/{orderId}
#### 参数
    orderId 订单号
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
            "companyId": 1, // 所属公司id
            "companyName": "阿里巴巴", // 所属公司名称
            "deliverType": "THIRD", // 配送方式 SELF 自送 THIRD 物流配送
            "depotId": 1,
            "depotName": "大连铁越仓", // 入库仓
            "id": 3,
            "waybillInfo": "", // 承运单信息
            "type": "NORMAL", // 采购单类型 NORMAL: 正常单 CONTROL_PRODUCT:品控单
            "jian": 0, // 总件数
            "remark": "", // 备注
            "orderId": "PA1812100000008", // 订单号
            "orderPaPros": [
                {
                    "giftFlg": 0, // 赠品标识 0-否 1-是
                    "batchNo": "20876656765767567", // 批次号
                    "pcount": 1, // 数量
                    "price": 1, // 价格
                    "priceFlg": 0, // 是否调整价格 0 - 未调整；1 - 待审核；2 - 通过
                    "productUnit": {
                        "guige": "500g(23-25枚）/盒", // 规格
                        "unit": "盒" // 单位
                        "product": {
                            "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/2442f15cbb285be1ad38c26dc8e0ec29.jpg", // 图片url
                            "name": "至Q虾球", // 品名
                            "pno": "0036", // 品号
                        }
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
            "status": "INVALID", // INVALID 未生效 RUN 已生效 SET 提交物流中 STOCKUP 已备货 SEND 已发出 COMPLETE 已签收
            "supplierId": 2637, // 供应商id
            "supplierName": "山西代县文庙超市", // 供应商名称
            "totalprice": 1 // 总计
        }
    }

### CG-63. 采购订单-确认执行
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
        *type: "NORMAL", // 采购单类型 正常单 CONTROL_PRODUCT:品控单
        *companyId: 1, // 所属公司id
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
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/paorder/{orderId}
#### 参数
    {
        *id: 1, // 主键
        *supplierId: 1, // 经销商id
        contactName: '阎锡山', // 联系人
        contactMobile： 13333333333, // 联系电话
        contactPathId: 060202, // 区域id
        contactAddress: "山西忻州代县", // 经销商地址
        *type: "NORMAL", // 采购单类型 正常单 CONTROL_PRODUCT:品控单
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
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/prorder?buttonPermissionFlg=1
#### 参数
    keyword // 单号
    supplierId // 供应商id
    deliverType // 配送方式 SELF 自送 THIRD 物流配送
    depotId // 仓id
    status // 订单状态 INVALID 未生效 RUN 已生效 STOCKUP 已备货 SEND 已发出 COMPLETE 已签收
    buttonPermissionFlg // 获取权限按钮 0-否 1-是
    createUserName // 创建人
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
                    "createUserName": "陈阵", // 创建人
                    "remark": "test", // 备注
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
        *companyId: 1, // 所属公司id
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
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/prorder/{orderId}
#### 参数
    orderId // 订单号
    {
        *id: 1, // 主键id
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
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/prorder/{orderId}
#### 参数
    orderId // 订单号
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
            "companyId": 1, // 所属公司id
            "companyName": "阿里巴巴", // 所属公司名称
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
                        "unit": "盒" // 单位
                        "product": {
                            "id": 1,
                            "longName": "香草凤尾虾-专业开背，秘制加工，中西餐厅新食尚~",
                            "name": "香草凤尾虾", // 品名
                            "pno": "0151", // 品号
                            "productLack": null,
                            "status": "NORMAL"
                            "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/ec90940549d364b0982427f87dd86747.jpg", // 退单url
                        },
                        "stock": {
                             "amount": 150, // 库存数量
                         },
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
                            "status": "NORMAL", // 产品状态 NORMAL - 正常 LOCK - 下架
                            "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/0", // 图片url
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
    
### CG-84. 采购订单撤回
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/paorder/{orderId}/status/back
#### 参数
    *orderId PA单号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
### CG-85. 普通入库单-列表
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/niorder
#### 参数
    buttonPermissionFlg 是否获取权限按钮
    keyword 单号
    depotId 仓库id
    status 订单状态 INVALID - 未生效 RUN - 已生效  COMPLETE - 已签收
    orderTypeId 入库类型id
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
                    "logButton": true // 日志查看按钮
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "completeTime": "", // 完成时间
                    "createRole": 1,
                    "createTime": "2019-01-19 09:03:31",
                    "createUser": 518,
                    "createUserName": "孙启萌", // 创建人
                    "deleteFlg": 0,
                    "depotId": 40, // 入库仓id
                    "depotName": "大连铁1越", // 入库仓名称
                    "id": 1, // 主键id
                    "jian": 0, // 件
                    "modifyTime": "2019-01-19 10:06:52",
                    "orderId": "NI1901190000001", // 单号
                    "orderTypeId": 1,
                    "orderTypeName": "样品出库", // 入库类型名称
                    "planCompleteTime": "2019-01-20 00:00:00", // 计划入库时间
                    "platformId": 1,
                    "remark": "首单测试", // 备注
                    "runTime": "2019-01-19 09:49:45", // 生效时间
                    "san": 1, // 散
                    "status": "INVALID", // 订单状态 INVALID - 未生效 RUN - 已生效  COMPLETE - 已签收
                    "totalprice": 40.12 // 订单金额
                }
            ],
            "pageNo": 1,
            "total": 0
        }
    }

### CG-86. 普通入库单-新增
#### 模块负责人
    梁铁骐
#### 请求
    POST /v2/niorder
#### 参数
    {
    	"orderNi": {
    		*"depotId": 40, // 入库仓id
    		*"depotName": "大连铁越", // 入库仓名称
    		*"orderTypeId": 1, // 入库类型id
    		*"orderTypeName": "样品出库", // 入库类型名称
    		"remark": "首单测试", // 备注 0 ~ 250长度，前端同事请做校验
    		*"planCompleteTime": "2019-01-20" // 计划入库时间
    	},
    	"orderNiProList": [
    		{
    			*"productId": 1, // 产品id
    			*"productUnitId": 1, // 产品规格id
    			*"pcount": 1 // 入库数量
    		}
    	],
    	"onlyCode": 1222231231 // 唯一码
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-87. 普通入库单-修改
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/niorder/{orderId}
#### 参数
    *orderId 订单号
    jsonbody:
    {
    	"orderNi": {
    		*"id": 4096, // 主键id
    		*"orderId": "NI1901290000003", // 订单号
    		*"depotId": 40, // 入库仓id
    		*"depotName": "大连铁越", // 入库仓名称
    		*"orderTypeId": 1, // 入库类型id
    		*"orderTypeName":"样品出库", // 入库类型名称
    		"remark": "首单测试", // 备注 0 ~ 255 前端同事请做校验
    		*"planCompleteTime": "2019-01-20" // 计划入库时间
    	},
    	"orderNiProList": [
    		{
    			*"productId": 1, // 产品id
    			*"productUnitId": 1, // 产品规格id
    			*"pcount": 1 // 入库数量
    		}
    	]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-88. 普通入库单-详情
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/niorder/{orderId}
#### 参数
    *orderId 订单号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "orderNi": {
                "completeTime": "", // 签收时间
                "createRole": 1,
                "createTime": "2019-01-29 11:04:03", // 创建时间
                "createUser": 518,
                "createUserName": "孙启萌", // 创建人
                "deleteFlg": 0,
                "depotId": 40, // 入库仓id
                "depotName": "大连铁1越", // 入库仓名称
                "id": 4096, //
                "jian": 0, // 件
                "modifyTime": "2019-01-29 11:06:40",
                "orderId": "NI1901290000003", // 单号
                "orderTypeId": 1,
                "orderTypeName": "样品出库", // 入库类型名称
                "planCompleteTime": "2019-01-20 00:00:00", // 计划入库时间
                "platformId": 1,
                "remark": "首单测试", // 备注
                "runTime": "", // 生效时间
                "san": 1, // 散
                "status": "INVALID", // 订单状态 INVALID - 未生效 RUN - 已生效  COMPLETE - 已签收
                "totalprice": 40.12 // 订单总金额
            },
            "orderNiProList": [
                {
                    "deleteFlg": 0,
                    "id": 32770,
                    "orderId": "NI1901290000003",
                    "pcount": 1, // 数量
                    "price": 40.12, // 单价
                    "productId": 1,
                    "productUnit": {
                        "guige": "800g", // 规格
                        "product": {
                            "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/36c00a2019dde2abbd23e609eff56d44.jpg", // 产品主图
                            "name": "海苔多春鱼", // 品名
                            "pno": "0079", // 品号
                            "productLack": null,
                            "status": "NORMAL"
                        },
                        "stock": null,
                        "unit": "盒", // 单位
                    },
                    "productUnitId": 1,
                    "totalprice": 40.12 // 小计
                }
            ]
        }
    }

### CG-89. 普通入库单-日志列表
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/niorder/{orderId}/logs
#### 参数
    *orderId 订单号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "id": 1026,
                    "opInfo": "修改普通入库单", // 操作内容
                    "opRole": 1,
                    "opTime": "2019-01-29 11:08:27", // 操作时间
                    "opUser": 518,
                    "opUserName": "孙启萌", // 操作者
                    "orderId": "NI1901290000003"
                },
                ...
            ],
            "pageNo": 1,
            "total": 0
        }
    }

### CG-90. 普通入库单-确认执行
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/niorder/{orderId}/run
#### 参数
    *orderId 订单号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-91. 普通入库单-删除
#### 模块负责人
    梁铁骐
#### 请求
    DELETE /v2/niorder/{orderId}
#### 参数
    *orderId 订单号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }


### CG-92. 普通入库单-入库类型
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/niorder/types
#### 参数
    无
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "deleteFlg": 0,
                "id": 16, // id
                "name": "亚渔货品入库单", // 名称
                "sort": 0,
                "type": "NI"
            },
        ]
    }


### CG-93. 普通出库单-列表
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/noorder
#### 参数
    buttonPermissionFlg 是否获取权限按钮
    keyword 单号
    depotId 仓库id
    status 订单状态 INVALID - 未生效 RUN - 已生效  SEND - 已签收
    orderTypeId 出库类型id
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
                    "logButton": true // 日志查看按钮
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "sendTime": "", // 发车时间
                    "createRole": 1,
                    "createTime": "2019-01-19 09:03:31",
                    "createUser": 518,
                    "createUserName": "孙启萌", // 创建人
                    "deleteFlg": 0,
                    "depotId": 40, // 出库仓id
                    "depotName": "大连铁1越", // 出库仓名称
                    "id": 1, // 主键id
                    "jian": 0, // 件
                    "modifyTime": "2019-01-19 10:06:52",
                    "orderId": "NO1901190000001", // 单号
                    "orderTypeId": 1,
                    "orderTypeName": "样品出库", // 入库类型名称
                    "planSendTime": "2019-01-20 00:00:00", // 计划出库时间
                    "platformId": 1,
                    "remark": "首单测试", // 备注
                    "runTime": "2019-01-19 09:49:45", // 生效时间
                    "san": 1, // 散
                    "status": "INVALID", // 订单状态 INVALID - 未生效 RUN - 已生效  SEND - 已发车
                    "totalprice": 40.12 // 订单金额
                }
            ],
            "pageNo": 1,
            "total": 0
        }
    }
    
### CG-94. 普通出库单-新增
#### 模块负责人
    梁铁骐
#### 请求
    POST /v2/noorder
#### 参数
    {
    	"orderNo": {
    		*"depotId": 40, // 出库仓id
    		*"depotName": "大连铁越", // 出库仓名称
    		*"orderTypeId": 1, // 出库类型id
    		*"orderTypeName": "样品出库", // 出库类型名称
    		"remark": "首单测试", // 备注 0 ~ 255 前端同事请做校验
    		*"planSendTime": "2019-01-20" // 计划发出时间
    	},
    	"orderNoProList": [
    		{
    			*"productId": 1, // 产品id
    			*"productUnitId": 1, // 产品规格id
    			*"pcount": 1 // 数量
    		}
    	],
    	*"onlyCode": 1231231123 // 唯一码
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-95. 普通出库单-修改
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/noorder/{orderId}
#### 参数
    *orderId 订单号
    jsonbody:
    {
    	"orderNo": {
    		*"id": 16384, // 主键id
    		*"orderId": "NO1901290000002", // 订单号
    		*"depotId": 40, // 出库仓id
    		*"depotName": "大连铁越", // 出库仓名称
    		*"orderTypeId": 1, // 出库类型id
    		*"orderTypeName":"出库类型名称", // 出库类型名称
    		"remark": "首单测试", // 备注 0 ~ 255 前端同事请做校验
    		*"planSendTime": "2019-01-20" // 计划出库时间
    	},
    	"orderNoProList": [
    		{
    			*"productId": 1, // 产品id
    			*"productUnitId": 1, // 产品规格id
    			*"pcount": 1 // 数量
    		}
    	]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-96. 普通出库单-详情
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/noorder/{orderId}
#### 参数
    *orderId 订单号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "orderNo": {
                "createRole": 1,
                "createTime": "2019-01-29 11:31:07", // 创建时间
                "createUser": 518,
                "createUserName": "孙启萌", // 创建人
                "deleteFlg": 0,
                "depotId": 40, // 出库仓id
                "depotName": "大连铁越", // 出库仓名称
                "id": 16384, // 主键id
                "jian": 0, // 件
                "modifyTime": "2019-01-29 11:35:27",
                "orderId": "NO1901290000002", // 订单号
                "orderTypeId": 1, // 出库类型id
                "orderTypeName": "样品出库", // 出库类型名称
                "planSendTime": "2019-01-20 00:00:00", // 计划出库时间
                "platformId": 1,
                "remark": "首单测试", // 备注
                "runTime": "", // 生效时间
                "san": 1, // 散
                "sendTime": "", // 发出时间
                "status": "INVALID", // 订单状态 INVALID - 未生效 RUN - 已生效  SEND - 已签收
                "totalprice": 40.12 // 订单总计
            },
            "orderNoProList": [
                {
                    "deleteFlg": 1,
                    "id": 131071,
                    "orderId": "NO1901290000002",
                    "pcount": 1,
                    "price": 40.12,
                    "productId": 1,
                    "productUnit": {
                        "createTime": "",
                        "cubage": 1512,
                        "grossweight": 0.55,
                        "guige": "500g(23-25枚）/盒", // 规格
                        "height": 5,
                        "id": 1,
                        "length": 19.5,
                        "minimum": 0,
                        "minimumType": "NONE",
                        "modifyTime": "",
                        "netweight": 0.5,
                        "perunit": 1,
                        "price": null,
                        "product": {
                            "customFlg": 0,
                            "id": 1,
                            "longName": "香草凤尾虾-专业开背，秘制加工，中西餐厅新食尚~",
                            "mainBgImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/f9ce32e007fc796722466531c86d5cd9.jpg",
                            "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/ec90940549d364b0982427f87dd86747.jpg", // 产品主图
                            "name": "香草凤尾虾", // 品名
                            "pno": "0151", // 品号
                            "productLack": null,
                            "status": "LOCK"
                        },
                        "productCart": null,
                        "productId": 1,
                        "stock": {
                            "amount": 216, // 库存数量
                            "productId": 1
                        },
                        "unit": "盒", // 单位
                        "unitId": 2,
                        "width": 15.5
                    },
                    "productUnitId": 1, //
                    "totalprice": 40.12 // 产品小计
                }
            ]
        }
    }

### CG-97. 普通出库单-日志列表
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/noorder/{orderId}/logs
#### 参数
    *orderId 订单号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "id": 1026,
                    "opInfo": "修改普通出库单", // 操作内容
                    "opRole": 1,
                    "opTime": "2019-01-29 11:08:27", // 操作时间
                    "opUser": 518,
                    "opUserName": "孙启萌", // 操作者
                    "orderId": "NO1901290000003"
                },
                ...
            ],
            "pageNo": 1,
            "total": 0
        }
    }

### CG-98. 普通出库单-确认执行
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/noorder/{orderId}/run
#### 参数
    *orderId 订单号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-99. 普通出库单-删除
#### 模块负责人
    梁铁骐
#### 请求
    DELETE /v2/noorder/{orderId}
#### 参数
    *orderId 订单号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
### CG-100 普通出库单-出库类型
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/noorder/types
#### 参数
    无
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "deleteFlg": 0,
                "id": 16, // id
                "name": "亚渔货品出库单", // 名称
                "sort": 0,
                "type": "NO"
            },
        ]
    }
 

### CG-101. 调拨单-列表
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/trorder
#### 参数
    buttonPermissionFlg 是否获取权限按钮
    keyword 单号
    fromDepotId 出库仓id
    toDepotId 入库仓id
    status 订单状态 INVALID:订单未生效,SET:提交物流中,RUN:订单生效,SEND:已发出,COMPLETE:已签收
    createUserName 创建人名称
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
                    "logButton": true // 日志查看按钮
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "advanceFlg": 0,
                    "completeTime": "", // 完成时间
                    "createRole": 1,
                    "createTime": "2019-01-16 11:38:18", // 创建时间
                    "createUser": 518,
                    "createUserName": "孙启萌", // 创建人
                    "deleteFlg": 0,
                    "fromDepotId": 50, // 出库仓id
                    "fromDepotName": "VC（工厂直发）", // 出库仓名称
                    "id": 6333, // 主键id
                    "jian": 1, // 件
                    "modifyTime": "2019-01-28 14:40:27",
                    "orderId": "TR190116003691", // 单号
                    "planCompleteTime": "2019-01-16 00:00:00", // 计划入库时间
                    "planSendTime": "2019-01-16 00:00:00", // 计划出库时间
                    "platformId": 1,
                    "remark": "1", // 备注
                    "runTime": "2019-01-16 00:00:00", // 生效时间
                    "san": 1, // 散
                    "sendTime": "2019-01-16 00:00:00", // 发出时间
                    "status": "RUN", // 订单状态 INVALID:订单未生效,SET:提交物流中，RUN:订单生效,SEND:已发出,COMPLETE:已签收
                    "toDepotId": 22, // 入库仓id
                    "toDepotName": "DC（郑州信基仓）" // 入库仓名称
                }
            ],
            "pageNo": 1,
            "total": 0
        }
    }

### CG-102. 调拨单-新增
#### 模块负责人
    梁铁骐
#### 请求
    POST /v2/trorder
#### 参数
    {
    	"orderTr": {
    		*"fromDepotId": 40, // 出库仓id
    		*"fromDepotName": "大连铁越", // 出库仓名称
    		*"toDepotId": 2, // 入库仓id
    		*"toDepotName": "沈阳铁越", // 入库仓名称
    		"remark": "首单测试", // 备注 0 ~ 255 前端同事请做校验
    		*"planSendTime": "2019-01-20", // 计划出库时间
    		*"planCompleteTime": "2019-01-22" // 计划入库时间
    	},
    	"orderTrProList": [
    		{
    			*"productId": 1, // 产品id
    			*"productUnitId": 1, // 产品规格id
    			*"pcount": 1 // 数量
    		}
    	],
    	"onlyCode": 123123 // 唯一码
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-103. 调拨单-修改
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/trorder/{orderId}
#### 参数
    *orderId
    
    {
    	"orderTr": {
    		*"id": 8192, // 主键id
    		*"orderId": "TR1901290000001", // 单号
    		*"fromDepotId": 40, // 出库仓id
    		*"fromDepotName": "大连铁越", // 出库仓名称
    		*"toDepotId": 21, // 入库仓id
    		*"toDepotName": "沈阳铁越", // 入库仓名称
    		"remark": "首单测试1", // 备注 0 ~ 255 前端同事请做校验
    		*"planSendTime": "2019-01-01", // 计划出库时间
    		*"planCompleteTime": "2019-01-01" // 计划入库时间
    	},
    	"orderTrProList": [
    		{
    			*"productId": 1, // 产品id
    			*"productUnitId": 1, //产品规格id
    			*"pcount": 1 // 数量
    		}
    	]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
    
### CG-104. 调拨单-详情
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/trorder/{orderId}
#### 参数
    *orderId 订单号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "orderTr": {
                "advanceFlg": 0,
                "completeTime": "", // 完成时间
                "createRole": 1,
                "createTime": "2019-01-29 13:18:07", // 创建时间
                "createUser": 518,
                "createUserName": "孙启萌", // 创建人
                "deleteFlg": 0,
                "fromDepotId": 40, // 出库仓id
                "fromDepotName": "大连铁越", // 出库仓名称
                "id": 8192, // 主键id
                "jian": 0, // 件
                "modifyTime": "2019-01-29 13:35:33",
                "orderId": "TR1901290000001", // 订单号
                "planCompleteTime": "2019-01-01 00:00:00", // 计划入库时间
                "planSendTime": "2019-01-01 00:00:00", // 计划出库时间
                "platformId": 1,
                "remark": "首单测试1", // 备注
                "runTime": "", // 生效时间
                "san": 1, // 散
                "sendTime": "", // 发出时间
                "status": "INVALID", // 订单状态 INVALID:订单未生效,SET:提交物流中,RUN:订单生效,SEND:已发出,COMPLETE:已签收
                "toDepotId": 21, // 入库仓id
                "toDepotName": "沈阳铁越" // 入库仓名称
            },
            "orderTrProList": [
                {
                    "deleteFlg": 0,
                    "id": 131073,
                    "orderId": "TR1901290000001",
                    "pcount": 1,
                    "productId": 1,
                    "productUnit": {
                        "createTime": "",
                        "cubage": 1512,
                        "grossweight": 0.55,
                        "guige": "500g(23-25枚）/盒", // 规格
                        "height": 5,
                        "id": 1,
                        "length": 19.5,
                        "minimum": 0,
                        "minimumType": "NONE",
                        "modifyTime": "",
                        "netweight": 0.5,
                        "perunit": 1,
                        "price": null,
                        "product": {
                            "customFlg": 0,
                            "id": 1,
                            "longName": "香草凤尾虾-专业开背，秘制加工，中西餐厅新食尚~",
                            "mainBgImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/f9ce32e007fc796722466531c86d5cd9.jpg",
                            "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/ec90940549d364b0982427f87dd86747.jpg", // 产品主图
                            "name": "香草凤尾虾", // 品名
                            "pno": "0151", // 品号
                            "productLack": null,
                            "status": "LOCK"
                        },
                        "productCart": null,
                        "productId": 1,
                        "stock": {
                            "amount": 216, // 库存
                            "productId": 1
                        },
                        "unit": "盒", // 单位
                        "unitId": 2,
                        "width": 15.5
                    },
                    "productUnitId": 1
                }
            ]
        }
    }

### CG-105. 调拨单-日志列表
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/trorder/{orderId}/logs
#### 参数
    *orderId 订单号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "id": 65538,
                    "opInfo": "修改调拨单", // 操作内容
                    "opRole": 1,
                    "opTime": "2019-01-29 13:44:24", // 操作时间
                    "opUser": 518,
                    "opUserName": "孙启萌", // 操作人
                    "orderId": "TR1901290000001"
                }
            ],
            "pageNo": 1,
            "total": 0
        }
    }
    
### CG-106. 调拨单-确认执行
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/trorder/{orderId}/run
#### 参数
    *orderId 订单号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-107. 调拨单-删除
#### 模块负责人
    梁铁骐
#### 请求
    DELETE /v2/trorder/{orderId}
#### 参数
    *orderId 订单号
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-108. 采购供货价导出
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/supplier/price/export
#### 参数
    *checkCode: 下载吗
#### 响应
    stream

### CG-109. 采购订单-校验采购订单能否发车
#### 模块负责人
    梁铁骐
#### 请求
    POST /v2/paorder/send/status
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

### CG-110. 采购订单-批量新增
#### 模块负责人
    梁铁骐
#### 请求
    POST /v2/paorder/batch
#### 参数
    {
        onlyCode: 123123, // 唯一校验码
        orderPas: [
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
    
### CG-111. 调拨单-批量新增(作废！！)
#### 模块负责人
    梁铁骐
#### 请求
    POST /v2/trorder/batch
#### 参数
    {
        onlyCode: 123123, // 唯一校验码
        trOrders: [
            {
                "orderTr": {
                    *"fromDepotId": 40, // 出库仓id
                    *"fromDepotName": "大连铁越", // 出库仓名称
                    *"toDepotId": 2, // 入库仓id
                    *"toDepotName": "沈阳铁越", // 入库仓名称
                    "remark": "首单测试", // 备注 0 ~ 255 前端同事请做校验
                    *"planSendTime": "2019-01-20", // 计划出库时间
                    *"planCompleteTime": "2019-01-22" // 计划入库时间
                },
                "orderTrProList": [
                    {
                        *"productId": 1, // 产品id
                        *"productUnitId": 1, // 产品规格id
                        *"pcount": 1 // 数量
                    }
                ],
            }
        ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
### CG-112. 供应商价格-查询
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/supplier/price/product/{productUnitId}
#### 参数
    productUnitId 产品规格id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "city": "大连市", // 市
                "contactAddress": "谭家", // 详细地址
                "contactMobile": "13942003822", // 联系电话
                "contactName": "谭", // 联系人
                "county": "瓦房店市", // 区
                "price": 220.85, // 价格
                "productId": 0,
                "productUnitId": 3909,
                "province": "辽宁", // 省
                "supplierId": 2674,
                "supplierName": "10" // 供应商名称
            }
        ]
    }
    
### CG-120 供应商供货-正常供货产品列表
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/supplier/cooperation/{supplierId}
#### 参数
    *supplierId 供应商id（必传参数！）
    *status: 状态 NORMAL-正常（必传参数！）
    pageNo: 页码
    pageSize: 行数
    buttonPermissionFlg：权限按钮
    keyword: 品号/品名
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissionPage": {},
            "buttonPermissions": [
                {
                    "startButton": true, // 开启供货按钮
                    "stopButton": false // 暂停供货按钮
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "id": 5454,
                    "modifyTime": "2019-06-20 03:18:03",
                    "pno": "M018", // 品号
                    "productId": 4446,
                    "productName": "去皮巴沙鱼柳(300-400)", // 品名
                    "status": "NORMAL", // 状态 NORMAL-正常 LOCK-暂停
                    "supplierId": 5566
                }
            ],
            "pageNo": 1,
            "total": -1
        }
    }
    
### CG-121 供应商供货-暂停供货产品列表
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/supplier/cooperation/{supplierId}
#### 参数
    *supplierId 供应商id（必传参数！）
    *status: 状态 LOCK-暂停（必传参数！）
    pageNo: 页码
    pageSize: 行数
    buttonPermissionFlg：权限按钮
    keyword: 品号/品名
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissionPage": {},
            "buttonPermissions": [
                {
                    "startButton": true, // 开启供货按钮
                    "stopButton": false // 暂停供货按钮
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "id": 5454,
                    "modifyTime": "2019-06-20 03:18:03",
                    "pno": "M018", // 品号
                    "productId": 4446,
                    "productName": "去皮巴沙鱼柳(300-400)", // 品名
                    "status": "LOCK", // 状态 NORMAL-正常 LOCK-暂停
                    "supplierId": 5566
                }
            ],
            "pageNo": 1,
            "total": -1
        }
    }
    
### CG-122 供应商供货-日志列表
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/supplier/cooperation/{supplierId}/logs
#### 参数
    supplierId 供应商id
    pageNo: 页码
    pageSize: 行数
    keyword: 品号/品名
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
                    "id": 1,
                    "opInfo": "test", // 操作内容
                    "opRole": 1,
                    "opTime": "2019-06-20 11:32:45", // 操作时间
                    "opUser": 1,
                    "opUserName": "孙启萌", // 操作人
                    "pno": "M018", // 品号
                    "productId": 4446,
                    "productName": "去皮巴沙鱼柳(300-400)", // 品名
                    "supplierId": 5566
                }
            ],
            "pageNo": 1,
            "total": -1
        }
    }

### CG-123 供应商供货-暂停供货
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/supplier/cooperation/{supplierId}/lock
#### 参数
    supplierId 供应商id
    body: [1,2,3,4,5] // 产品id集合
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-124 供应商供货-开始供货
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/supplier/cooperation/{supplierId}/normal
#### 参数
    supplierId 供应商id
    body: [1,2,3,4,5] // 产品id集合
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-125 通过承运单号获取物流配送信息
#### 模块负责人
    梁铁骐
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/paorder/{wbNo}/wbinfo
#### 参数
    wbNo: 承运单号
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
    
### CG-126 企业管理-列表
#### 模块负责人
    梁铁骐
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/companies
#### 参数
    keyword: 企业名称
    pageNo: 页码
    pageSize: 页面行数
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
                    "code": "alibab", 金蝶编号
                    "createTime": "2019-07-16 10:50:13", // 创建时间
                    "createUserName": "1",// 创建人
                    "id": 1, // 主键id
                    "name": "阿里巴巴" // 企业名称
                },
                ...
            ],
            "pageNo": 1,
            "total": 0
        }
    }

### CG-127 企业管理-详情
#### 模块负责人
    梁铁骐
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/companies/{id}
#### 参数
    id: 企业主键id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "code": "alibab", // 金蝶编号
            "createRole": 1,
            "createTime": "2019-07-16 10:50:13",
            "createUser": 1,
            "createUserName": "1",
            "deleteFlg": 0,
            "id": 1,
            "name": "阿里巴巴" // 企业名称
        }
    }

### CG-128 企业管理-修改
#### 模块负责人
    梁铁骐
#### 对接负责人
    梁铁骐
#### 请求
    PUT /v2/companies/{id}
#### 参数
    id: 企业主键id
    json body
    {
        "code": "alibab", // 金蝶编号
        "name": "阿里巴巴" // 企业名称
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-129 企业管理-删除
#### 模块负责人
    梁铁骐
#### 对接负责人
    梁铁骐
#### 请求
    DELETE /v2/companies/{id}
#### 参数
    id: 企业主键id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-130 企业管理-列表(无分页)
#### 模块负责人
    梁铁骐
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/companies/all
#### 参数
    supplierId: 1 // 供应商id 传递则代表获取供应商下所属的公司列表 不传则代表获取所有公司列表
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "code": "alibab", // 金蝶编号
                "createTime": "2019-07-16 10:50:13", // 创建时间
                "createUserName": "1",// 创建人
                "id": 1, // 主键id
                "name": "阿里巴巴" // 企业名称
            },
            ...
        ],
        }
    }

### CG-131 供应商管理-获取默认收获地址
#### 模块负责人
    梁铁骐
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/supplier/{supplierId}/default/contact
#### 参数
    supplierId: 1 // 供应商id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "contactAddress": "北京长安街", // 详细地址
            "contactMobile": "13368686868", // 联系电话
            "contactName": "哔哩哔哩", // 联系人名称
            "contactPathId": "0101", // 区域pathid
            "createRole": 1,
            "createTime": "2019-07-16 11:37:23",
            "createUser": 518,
            "defaultFlg": 1,
            "deleteFlg": 0,
            "id": 522,
            "lastModified": "2019-07-16 11:37:23",
            "remark": "我是备注", // 备注
            "supplierId": 5588
        }
    }

### CG-132 供应商管理-获取默认收获地址
#### 模块负责人
    梁铁骐
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/supplier/{supplierId}/contacts
#### 参数
    supplierId: 1 // 供应商id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "contactAddress": "北京长安街", // 详细地址
                "contactMobile": "13368686868", // 联系电话
                "contactName": "哔哩哔哩", // 联系人名称
                "contactPathId": "0101", // 区域pathid
                "createRole": 1,
                "createTime": "2019-07-16 11:37:23",
                "createUser": 518,
                "defaultFlg": 1, // 是否默认收获地址 0-否 1-是
                "deleteFlg": 0,
                "id": 522,
                "lastModified": "2019-07-16 11:37:23",
                "remark": "我是备注", // 备注
                "supplierId": 5588
            },
            ...
        ]
    }

### CG-133 供应商管理-修改取货信息
#### 模块负责人
    梁铁骐
#### 对接负责人
    梁铁骐
#### 请求
    PUT /v2/supplier/contact/{id}
#### 参数
    id: 1 // 主键id
    json body
    {
        "supplierId": 1 // 供应商ID
    	"contactName": "李靖777", // 联系人
    	"contactMobile": "13336688991", // 联系电话
    	"contactPathId": "0101", // 区域id
    	"contactAddress": "naannan", // 详细地址
    	"defaultFlg": 0, // 是否默认收获地址 0-否 1-是
    	"remark": "asdfasd" // 备注
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-134 供应商管理-删除取货信息
#### 模块负责人
    梁铁骐
#### 对接负责人
    梁铁骐
#### 请求
    DELETE /v2/supplier/contact/{id}
#### 参数
    id: 1 // 主键id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-135 供应商管理-新增取货信息
#### 模块负责人
    梁铁骐
#### 对接负责人
    梁铁骐
#### 请求
    POST /v2/supplier/{supplierId}/contact
#### 参数
    id: 1 // 主键id
    json body 
    {
    	"contactName": "李靖321", // 联系人
    	"contactMobile": "13336688991", // 联系电话
    	"contactPathId": "0101", // 区域id
    	"contactAddress": "nananana", // 详细地址
    	"defaultFlg": 0, // 是否默认收获地址 0-否 1-是
    	"remark": "asdfasd" // 备注
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CG-136 企业管理-新增
#### 模块负责人
    梁铁骐
#### 对接负责人
    梁铁骐
#### 请求
    POST /v2/companies
#### 参数
    {
    	"name": "ALIBABA", // 企业名称
    	"code": "123123" // 金蝶编号
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
