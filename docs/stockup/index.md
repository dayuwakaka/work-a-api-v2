
## 备货管理

### BH-1.仓导航接口
#### 模块负责人
    王子悦
#### 请求
    GET /v2/stockup/plan/detail/depot
#### 参数
    splitNum: 6 // 返回[[],[]],第一个数组是下拉，第二个数组是平铺
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            [
                {
                    "cnt": 0, // 订单数量
                    "depot": {
                        "id": 51,
                        "level": "DC",
                        "name": "DC（天津优和仓 ）"
                    }
                }
            ],
            []
        ]
    }

### BH-2.调货列表查询
#### 模块负责人
    王子悦
#### 请求
     GET  /v2/stockup/plan/detail
#### 参数
    orderId  //采购单号/调拨单号
    depotId  //入库仓id
    lineId   //线路id
#### 响应

    1.未分配线路数据
        {
        "code": 100000,
        "msg": "",
        "data": {
            "unAllocationLines": {//未分配线路的订单基本信息
                "san": 12,//散数量
                "data": [
                    {
                        "fromDepot": "大连宏兴食品有限公司",//供应商名称/出库仓名称
                        "jian": 0,//件数量
                        "orderId": "PA19053000007",//订单号
                        "planCompleteTime": "2019-05-31 00:00:00",//计划完成时间
                        "planSendTime": "2019-05-31 00:00:00",//计划发出时间
                        "remark": "12345qwert",//备注
                        "san": 1,//散数量
                        "status": "INVALID",//订单状态 PA单的状态： INVALID 未生效 RUN 已生效 STOCKUP 已备货 SEND 已发出 
                        "toDepot": "DC（天津优和仓 ）",//入库仓名称
                        "totalprice": 26.4,//金额
                        "type": "PA",//单据类型 PA 采购 TR 调拨
                        "waybillInfo": ""//承运单号
                    }
                ],
                "jian": 0
            }
        }
    }
    2.已分配线路数据
    {
        "code": 100000,
        "msg": "",
        "data": {
            "linesInfo": [
                {
                    "createRole": 0,
                    "createTime": "2019-06-03 11:56:42",//创建时间
                    "createUser": 0,
                    "createUserName": "孙启萌",//创建人
                    "deleteFlg": 0,
                    "depot": [//关联出库仓
                        {
                            "deleteFlg": 0,
                            "dutyId": 51,//职能ID： 供应商ID/仓ID
                            "dutyName": "DC（天津优和仓 ）",//供应商名/仓库名
                            "id": 22,
                            "lineId": 7,//线路id
                            "type": "TR"//配送职能： PA 采购配送 TR 调拨配送
                        }
                    ],
                    "fromPathName": "",//线路起点省
                    "fromPathid": "0203",//起点区域id
                    "id": 7,
                    "name": "天津燕山区",//线路名称
                    "paFlg": 1,//是否配送PA单 0 不配送 1 配送
                    "stockupPlanVOS": [//调货计划基本信息
                        {
                            "buttonPermission": {//按钮权限，由后台提供
                                "cancel": false,//取消计划
                                "modify": true, //修改计划 
                                "synchronization": true,//同步物流数据
                                "complete": false,//完成计划
                                "delete": true, //删除计划
                                "push": true//执行计划
                            },
                            "carInfo": "12米超级超限",//车类型 4.2米 等等
                            "createRole": 29319,
                            "createTime": "2019-06-03 04:03:41",//创建时间
                            "createUser": 518,
                            "createUserName": "孙启萌",//创建人
                            "deleteFlg": 0,
                            "id": 3,
                            "lineId": 7,//关联线路id
                            "name": "test线路3",//关联线路名称
                            "orderVOS": {//已分配调货线路，并且分配调货计划的订单基本信息
                                "san": 3,//散数量
                                "data": [//订单基本信息
                                    {
                                        "fromDepot": "大连宏兴食品有限公司",//  供应商名称/出库仓名称
                                        "jian": 0,//件数量
                                        "orderId": "PA19060300003",//订单号
                                        "planCompleteTime": "2019-05-31 00:00:00",//计划完成时间
                                        "planSendTime": "2019-06-05 00:00:00",,//计划发出时间
                                        "remark": "12345qwert",//备注
                                        "san": 1,,//散数量
                                        "status": "RUN",//订单状态 PA单的状态： INVALID 未生效 RUN 已生效 STOCKUP 已备货 SEND 已发出 COMPLETE 已完成
                                         //     TR单的状态：INVALID 未生效 RUN 已生效 SEND 已发出 COMPLETE 已签收
                                        "toDepot": "DC（天津优和仓 ）",//入库仓名称
                                        "totalprice": 26.4,//金额
                                        "type": "PA",//单据类型 PA 采购 TR 调拨
                                        "waybillInfo": ""//承运单号
                                    }
                                ],
                                "jian": 0//件数量
                            },
                            "planCompleteTime": "2019-06-07 00:00:00",//计划入库时间
                            "planSendTime": "2019-06-05 00:00:00",//计划发出时间
                            "splitFlg": 0,//是否拆分 0 未拆分 1 拆分
                            "status": "COMPLETE",//调货计划状态 INVALID 待执行 RUN 已执行 COMPLETE 完成
                            "type": "正常"//调货计划的物流类型：【正常，物流拆分】
                        }
                    ],
                    "supplier": [//线路绑定的供应商信息
                        {
                            "deleteFlg": 0,
                            "dutyId": 5560,//职能ID 供应商ID\仓ID
                            "dutyName": "大连宏兴食品有限公司",//供应商名\仓库名
                            "id": 21,
                            "lineId": 7,//线路id
                            "type": "PA"//配送职能 PA 采购配送 TR 调拨配送
                        }
                    ],
                    "toDepotId": 51,//入库仓id
                    "toDepotName": "DC（天津优和仓 ）",//入库仓名称
                    "trFlg": 1,//是否配送TR单 0 不配送 1 配送
                    "unAllocationPlans": {//已分配线路，但是未分配计划的订单基本信息
                        "san": 7,//散数量
                        "data": [
                            {
                                "fromDepot": "大连宏兴食品有限公司",//  供应商名称/出库仓名称
                                "jian": 0,//件数量
                                "orderId": "PA19061000003",//订单号
                                "planCompleteTime": "2019-06-19 00:00:00",//计划完成时间
                                "planSendTime": "2019-06-19 00:00:00",//计划发出时间
                                "remark": "",//备注
                                "san": 7,//散数量
                                "status": "RUN","INVALID",//订单状态 PA单的状态： INVALID 未生效 RUN 已生效 STOCKUP 已备货 SEND 已发出 COMPLETE 已完成
                                                    //     TR单的状态：INVALID 未生效 RUN 已生效 SEND 已发出 COMPLETE 已签收
                                "toDepot": "DC（天津优和仓 ）",//入库仓名称
                                "totalprice": 127.3,//金额
                                "type": "PA",//单据类型 PA 采购 TR 调拨
                                "waybillInfo": ""//承运单号
                            }
                        ],
                        "jian": 0//件数量
                    }
                }
            ]
        }
    }    
    

### BH-3.调货计划-分配调货线路（作废）
#### 模块负责人
    王子悦
#### 请求
    PUT /v2/stockup/plan/detail/updateStockupLine
#### 参数
    {
	"orderIds":["PA19053000007","PA19053000008"],//订单id集合
	"lineId":6  //调货线路id
    }
#### 响应
    {"code":100000,"msg":"","data":null}

### BH-4.调货计划-转移至其他线路（作废）
#### 模块负责人
    王子悦
#### 请求
    PUT /v2/stockup/plan/detail/transferStockupPlan
#### 参数
    {
	"orderIds":["PA19053000007","PA19053000008"],//订单id集合
	"planId":2  //调货计划id
    }
#### 响应
    {"code":100000,"msg":"","data":null}


### BH-5.调货计划-分配调货计划
#### 模块负责人
    王子悦
#### 请求
    PUT /v2/stockup/plan/detail/updateStockupPlan
#### 参数
    {
	"orderIds":["PA19053000007","PA19053000008"],//订单id集合
	"planId":3  //调货计划id
    }
#### 响应
     {"code":100000,"msg":"","data":null}

### BH-6.调货计划-将订单设置为未分配计划
#### 模块负责人
    王子悦
#### 请求
    PUT /v2/stockup/plan/detail/updateStockupUnPlan
#### 参数
    {
	"orderIds":["PA19053000007","PA19053000008"]//订单id集合
    }
#### 响应
    {"code":100000,"msg":"","data":null}

### BH-7.调货计划-执行计划
#### 模块负责人
    王子悦
#### 请求
    PUT /v2/stockup/plan/detail/executePlan/{id}  //调货计划id
#### 参数
    无
#### 响应
    {"code":100000,"msg":"","data":null}

### BH-8.调货计划-取消计划
#### 模块负责人
    王子悦
#### 请求
    PUT /v2/stockup/plan/detail/cancelPlan/{id}  //调货计划id
#### 参数
    无
#### 响应
    {"code":100000,"msg":"","data":null}

### BH-9.调货计划-执行（对个别订单进行执行操作）
#### 模块负责人
    王子悦
#### 请求
    PUT /v2/stockup/plan/detail/executeOrder
#### 参数
    {
	"orderIds":["PA19053000007","PA19053000008"]//订单id集合
    }
#### 响应
    {"code":100000,"msg":"","data":null}

### BH-10.调货计划-完成计划
#### 模块负责人
    王子悦
#### 请求
    PUT /v2/stockup/plan/detail/complatePlan
#### 参数
    {
	"planId":2  //调货计划id
    }
#### 响应
    {"code":100000,"msg":"","data":null}

### BH-11.备货需求列表（产品维度）
#### 模块负责人
    王子悦
#### 请求
    GET /v2/stockup/need/getStockupNeedListALL
#### 参数
    type          //请求类型 product 产品维度   supplier  供应商维度
    pnamepno      //品名/品号
    supplierId    //供应商id
    producttype   //期现货标识 NOW 现货 FUTURE 期货 CUSTOM 定制
    depotId       //仓id
    orderlack     //是否仅看订单缺货 如果仅看订单缺货：传值yes 否则传空
#### 响应
    1.查询条件：【全部】
    {
        "code": 100000,
        "msg": "",
        "data": [
        {
            "id": 4708,//产品id
            "lackNum": -6,//缺货【件】数
            "name": "黑金鱿鱼圈",//产品名称
            "stockupNeeds": [//备货需求详情列表
                {
                    "depotId": 57,//仓id
                    "depotName": "DC（昆山众品仓）",//仓名称
                    "inRodeNum": 0,//在途库存
                    "invalidNum": 6,//未生效数量
                    "lackNum": -6,//缺口数量
                    "needNum": 0,//需求数量
                    "orderLackNum": 0,//订单缺口数量
                    "productId": 4708,//产品id
                    "productName": "黑金鱿鱼圈",//产品名称
                    "realNum": 0,//实际库存
                    "safeLackNum": 0,//安全库存缺口数量
                    "safeNum": 0,//安全库存
                    "status": "",//如果是【ji】，显示【急】标识
                    "supplierId": 2634,
                    "supplierName": "",
                    "type": "CUSTOM" //产品属性 NOW 现货 FUTURE 期货 CUSTOM 定制
                }
            ]
        }    
        ]
    }
    2.查询条件：某个仓

    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "depotId": 40,//仓id
                "depotName": "DC（大连铁越仓）",//仓名称
                "inRodeNum": 0,//在途库存
                "invalidNum": 2,//未生效数量
                "lackNum": -2,//缺口数量
                "needNum": 0,//需求数量
                "orderLackNum": 0,//订单缺口数量
                "productId": 4570,//产品id
                "productName": "青占鱼(150/200)",//产品名称
                "realNum": 0,//实际库存
                "safeLackNum": 0,//安全库存缺口数量
                "safeNum": 0,
                "status": "",//如果是【ji】，显示【急】标识
                "supplierId": 0,
                "supplierName": "",
                "type": "CUSTOM" //产品属性 NOW 现货 FUTURE 期货 CUSTOM 定制
            },
            {
                "depotId": 40,
                "depotName": "DC（大连铁越仓）",
                "inRodeNum": 0,
                "invalidNum": 144,
                "lackNum": -164,
                "needNum": 0,
                "orderLackNum": 0,
                "productId": 1919,
                "productName": "萌面人企鹅奶黄包",
                "realNum": 0,
                "safeLackNum": 20,
                "safeNum": 20,
                "status": "",
                "supplierId": 0,
                "supplierName": "",
                "type": "NOW"
            }
    ]
    }


### BH-12.备货需求列表（供应商维度）
#### 模块负责人
    王子悦
#### 请求
    GET /v2/stockup/need/getStockupNeedListALL
#### 参数
    type          //请求类型 product 产品维度   supplier  供应商维度
    pnamepno      //品名/品号
    supplierId    //供应商id
    producttype   //期现货标识 NOW 现货 FUTURE 期货 CUSTOM 定制
    depotId       //仓id
    orderlack     //是否仅看订单缺货 如果仅看订单缺货：传值yes 否则传空
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
        {
            "id": 5563,//供应商id
            "lackNum": -10,//缺货【件】数
            "name": "优合集团有限公司",//供应商名称
            "stockupNeeds": [//备货需求详情列表
                {
                    "depotId": 40,//仓id
                    "depotName": "DC（大连仓）ASA",//仓名称
                    "inRodeNum": 0,//在途库存
                    "invalidNum": 10,//未生效数量
                    "lackNum": -10,//缺口数量
                    "needNum": 0,//需求数量
                    "orderLackNum": 0,//订单缺口数量
                    "productId": 4679,//产品id
                    "productName": "冻南美白虾(50/60)",//产品名称
                    "realNum": 0,//实际库存
                    "safeLackNum": 0,//安全库存缺口数量
                    "safeNum": 0,//安全库存
                    "status": "",//如果是【ji】，显示【急】标识
                    "supplierId": 5563,//供应商id
                    "supplierName": "优合集团有限公司",//供应商名称
                    "type": "NOW"//产品属性 NOW 现货 FUTURE 期货 CUSTOM 定制
                }
            ]
        }
        ]
    }

   

### BH-13.备货采购转化需求查询
#### 模块负责人
    王子悦
#### 请求
    POST /v2/stockup/need/getTransformOrderPAList
#### 参数
    {
        "depotId":51,//仓id
        "stockupNeeds"://备货信息集合
        [
        {
        "productId": "4696",//产品id
        "lackNum": "600",//缺口数量
        "orderLackNum": "0",//订单缺口数量
        "safeLackNum": "0",//安全库存缺口数量
        "type":"NOW"  //产品属性 NOW 现货 FUTURE 期货 CUSTOM 定制
        },
        {
        "productId": "4708",
        "lackNum": "606",
        "orderLackNum": "0",
        "safeLackNum": "0",
        "type":"FUTURE"
        }
        ]

    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
        {
            "id": 5566,//供应商id
            "lackNum": 0,
            "name": "亚洲渔港（大连）食品有限公司（IN）",//供应商名称
            "stockupCreatePAList": [
                {
                    "depotId": 0,
                    "lackNum": 606,//缺口数量
                    "orderLackNum": 0,//订单缺口数量
                    "paNum": 606,//采购数量
                    "productId": 4708,//产品id
                    "productName": "黑金鱿鱼圈",//品名
                    "productNo": "Y1945",//品号
                    "productStatus": "",//产品属性 NOW 现货 FUTURE 期货 CUSTOM 定制
                    "productUnit": "袋",/产品单位
                    "productUnitId": 8247,//产品规格id
                    "productUnitName": "75g/袋",//产品规格
                    "realNum": 0,//实际库存
                    "safeLackNum": 0,//安全库存缺口数量
                    "safeNum": 0,//安全库存
                    "supplierId": 5566,
                    "supplierName": "亚洲渔港（大连）食品有限公司（IN）",
                    "supplierPrice": 10,//签约价
                    "toDepotId": 0,
                    "toDepotroductStatus": ""
                }
            ]
        }
        ]
    }
### BH-14.备货调拨转化需求查询
#### 模块负责人
    王子悦
#### 请求
    POST /v2/stockup/need/getTransformOrderTRList
#### 参数
    {
        "depotId":40,
        "stockupNeeds":[
            {
                "productId":"4696",//产品id
                "lackNum":"600",//缺口数量
                "orderLackNum":"0",//订单缺口数量
                "safeLackNum":"0",//安全库存缺口数量
                "type":"NOW",//产品属性 NOW 现货 FUTURE 期货 CUSTOM 定制
                "realNum":"100",//实际库存
                "safeNum":"80"//安全库存
            },
            {
                "productId":"4708",
                "lackNum":"606",
                "orderLackNum":"0",
                "safeLackNum":"0",
                "type":"FUTURE",
                "realNum":"90",
                "safeNum":"70"
            }
        ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "depotId": 0,//入库仓id
                "fromDepotroductStatus": "NOW",//// 入库仓产品属性 NOW 现货 FUTURE 期货 CUSTOM 定制
                "lackNum": 2,//缺口数量
                "orderLackNum": 0,//订单缺口数量
                "paNum": 0,//采购数量
                "productId": 4647,//产品id
                "productName": "原浆鲜贝",//品名
                "productNo": "1861",//品号
                "productStatus": "",//
                "productUnit": "盘",//产品单位
                "productUnitId": 8142,//产品规格id
                "productUnitName": "200g",//产品规格
                "realNum": 80,//实际库存
                "safeLackNum": 0,//安全库存缺口数量
                "safeNum": 60,//安全库存
                "supplierId": 0,
                "supplierName": "",
                "supplierPrice": 135.84,
                "toDepotId": 0,//调拨仓id
                "toDepotroductStatus": "FUTURE"// 调拨仓产品属性 NOW 现货 FUTURE 期货 CUSTOM 定制
            },
            {
                "depotId": 0,
                "fromDepotroductStatus": "NOW",//// 入库仓产品属性 NOW 现货 FUTURE 期货 CUSTOM 定制
                "lackNum": 600,
                "orderLackNum": 0,
                "paNum": 0,
                "productId": 4696,
                "productName": "王牌-冻南美白虾（40/50）",
                "productNo": "HYH01014",
                "productStatus": "",
                "productUnit": "件",
                "productUnitId": 8226,
                "productUnitName": "1.5kg/盒*6盒/件",
                "realNum": 100,
                "safeLackNum": 0,
                "safeNum": 80,
                "supplierId": 0,
                "supplierName": "",
                "supplierPrice": 460,
                "toDepotId": 0,
                "toDepotroductStatus": "CUSTOM"
            }
        ]
    }

### BH-30 计划-新增
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

### BH-31 计划-修改
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
    
### BH-32 计划-获取发车车型列表
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

### BH-33 计划-删除
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

### BH-34 计划-获取计划列表
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/stockup/plan
#### 参数
    lineId: 1 // 线路id
    toDepotId: 1 // 入库仓id
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
                    "lineName": "test", // 线路名称
                    "splitFlg": 0,
                    "status": "INVALID", // 状态 INVALID 待执行 RUN 已执行
                    "stockupPlanDetailVOS": null
                }
            ],
            "pageNo": 1,
            "total": 0
        }
    }

### BH-35 计划-通过承运单号获取物流配送信息
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/stockup/plan/{wbNo}/info
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

### BH-36 计划-获取详情
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/stockup/plan/{id}
#### 参数
    id：计划主键
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "carInfo": "121米超级超限", // 车型
            "createTime": "2019-05-29 08:49:52",
            "createUser": 35744,
            "createUserName": "系统操作",
            "deleteFlg": 0,
            "id": 1,
            "lineId": 1,
            "name": "test1线路", // 计划名称
            "planCompleteTime": "2019-06-11 00:00:00", // 计划发出时间 
            "planSendTime": "2019-05-30 00:00:00.0", // 计划入库时间
            "splitFlg": 0,
            "status": "RUN"
        }
    }

### BH-37 计划-同步物流信息
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
    
### BH-38 仓库管理-列表
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/stockup/depots
#### 参数
    depotId: 仓库id
    type: 仓库类型 SELF-自有仓 PLATFORM-平台仓
    level: 仓库级别 DC FDC VR(虚拟)
    pageNo: 页码
    pageSize: 行数
#### 响应
    {
        "code": 100000,
            "msg": "",
            "data": {
                "datas": [
                    {
                        "areaFlg": 1, // 是否关联区域 0-否 1-是
                        "deleteFlg": 0,
                        "depot": {
                            "address": "天津市武清区大良镇新良道01号", // 详细地址
                            "contactMobile": "13101727028", // 联系电话
                            "contactName": "秦超杰", // 联系人 
                            "id": 51,
                            "lat": "0",
                            "level": "DC", // 仓级别 DC FDC VR(虚拟)
                            "lng": "0",
                            "name": "DC（天津优和仓 ）", // 仓名称
                            "pathId": "020114",
                            "pathName": "武清区天津市天津", // 仓所在区域
                            "type": "SELF" // 仓库类型 SELF-自有仓 PLATFORM-平台仓
                        },
                        "depotId": 51,
                        "id": 67,
                        "sort": 0
                    },
                    ...
                ],
                "pageNo": 1,
                "total": 0
            }
    }
    
### BH-39 仓库管理-级别枚举
#### 枚举值
    DC,
    FDC,
    VR - 虚拟
    
### BH-40 仓库管理-类型枚举
#### 枚举值
    SELF:自有仓 PLATFORM: 平台仓
    
### BH-41 仓库管理-校验是否有重复区域仓设置
#### 说明
    保存前调用，如果data为null 说明不存在重叠区域仓，如果有值，说明存在重叠区域仓
#### 对接负责人
    梁铁骐
#### 请求
    PUT /v2/stockup/depots
#### 参数
    [
        {
            depotId: 1,
            pathId: 0204 // 必须精确到地级市
        },
        ...
    ]
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "depot": {
                    "id": 111,
                    "level": "DC",
                    "name": "DC（沈阳铁越仓）" // 仓名称
                },
                "depotId": 111,
                "id": 277,
                "pathName": "内蒙古-赤峰市", // 区域名称
                "sort": 0
            }
        ]
    }

### BH-42 仓库管理-获取仓对应的区域列表
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/stockup/depots/{depotId}
#### 参数
    depotId: 仓id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            "0601", // 区域编号
            "0602",
            "0603"
        ]
    }

### BH-43 仓库管理-设置关联区域
#### 对接负责人
    梁铁骐
#### 请求
    PUT /v2/stockup/depots/{depotId}
#### 参数
    depotId: 仓id
    body: {
        stockupDepotAreaDTOList: [
            {
                "depotId": 1,
                "pathId": "0202"
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

### BH-44 仓库管理-获取日志列表
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/stockup/depots/{depotId}/logs
#### 参数
    depotId: 仓id
    pageNo: 页码
    pageSize: 行数
#### 响应
         {
             "code": 100000,
             "msg": "",
             "data": {
                 "datas": [
                     {
                         "depotId": 40,
                         "id": 1,
                         "opInfo": "修改", // 操作内容
                         "opRole": 1,
                         "opTime": "2019-06-13 11:12:20", // 操作时间
                         "opUser": 1,
                         "opUserName": "test" // 操作者
                     }
                 ],
                 "pageNo": 1,
                 "total": 0
             }
         }
         
### BH-45 仓库管理-仓地图展示（结构未定，接口欠缺）
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/stockup/depots/areas
#### 参数
#### 响应
    {
         "code": 100000,
         "msg": "",
         "data": [
            {
                "lat": "0", // 纬度
                "lng": "0", // 经度
                "name": "DC（天津优和仓 ）"
                "areas": [
                    {
                        "lat": "114.502461", // 纬度
                        "lng": "38.045474", // 经度
                        "name": "石家庄市" // 城市名称
                    }
                ]
            },
         ]
    }





### BH-50 线路新增
#### 模块负责人
    王子悦
#### 对接负责人
    尹洪明
#### 请求
    POST /v2/stockup/line
#### 参数
    {
        "stockupLine": {
            "name": "天津燕山区",        // 线路名
            "fromPathid": "0203",       // 起点
            "toDepotId": 50,            // 终点
            "paFlg": 1,             // 采购单类型
            "trFlg": 1              // 调拨单类型
        },
        "supplier": [               // 供应商
            5563
        ],
        "depot": [              // 出库仓ID
            25
        ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }


### BH-51 线路修改
#### 模块负责人
    王子悦
#### 对接负责人
    尹洪明
#### 请求
    PUT /v2/stockup/line/{id}
#### 参数
    *id // 线路ID
    {
        "stockupLine": {
            "fromPathid": "0203",   // 起点
            "toDepotId": 50,        // 终点
            "paFlg": 1,         // 采购单
            "trFlg": 1          // 调拨单
        },
        "supplier": [           // 供应商
            5563
        ],
        "depot": [              // 出库仓
            25
        ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### BH-52 线路作废
#### 模块负责人
    王子悦
#### 对接负责人
    尹洪明
#### 请求
    PUT /v2/stockup/line/cancel/{id}
#### 参数
    *id // 线路ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### BH-53 线路列表
#### 模块负责人
    王子悦
#### 对接负责人
    尹洪明
#### 请求
    GET /v2/stockup/line
#### 参数
    name            // 线路名
    toDepotId       // 入库仓
    deleteFlg       // 状态 0 正常 1 作废
    buttonPermissionFlg // 0 不查询按钮权限  1 查询按钮权限
    pageNo              // 页码 默认1
    pageSize            // 页条数 默认25
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissionPage": {},
            "buttonPermissions": [
                {
                    "cancelButton": true,           // 作废
                    "editButton": true,         // 编辑
                    "logButton": true           // 日志
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "createRole": 0,
                    "createTime": "2019-05-29 10:00:30",
                    "createUser": 0,
                    "createUserName": "孙启萌",
                    "deleteFlg": 0,
                    "depot": [                      // 出库仓
                        {
                            "deleteFlg": 0,
                            "dutyId": 25,                   // 出库仓ID
                            "dutyName": "VC（退货不入仓）",        // 出库仓名
                            "id": 20,
                            "lineId": 6,
                            "type": "TR"
                        }
                    ],
                    "fromPathName": "黑龙江鸡西市",       // 起点名
                    "fromPathid": "0803",               // 起点
                    "id": 6,                        // 线路ID
                    "name": "天津燕山区-DC(大连仓)",    // 线路名
                    "paFlg": 1,                     // 采购单类型
                    "stockupPlanVOS": null,
                    "supplier": [                   // 供应商
                        {
                            "deleteFlg": 0,
                            "dutyId": 5563,                 // 供应商ID
                            "dutyName": "优合集团有限公司",     // 供应商名
                            "id": 19,
                            "lineId": 6,
                            "type": "PA"
                        }
                    ],
                    "toDepotId": 40,                    // 入库仓ID
                    "toDepotName": "DC（大连铁越仓）",     // 入库仓名
                    "trFlg": 1,                     // 调拨单类型
                    "unAllocationPlans": null
                }
            ],
            "pageNo": 0,
            "total": 0
        }
    }


### BH-54 线路明细
#### 模块负责人
    王子悦
#### 对接负责人
    尹洪明
#### 请求
    GET /v2/stockup/line/{id}
#### 参数
    *id     // 线路ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "createRole": 0,
            "createTime": "2019-05-29 10:00:30",
            "createUser": 0,
            "createUserName": "孙启萌",
            "deleteFlg": 0,
            "depot": [                      // 出库仓
                {
                    "deleteFlg": 0,
                    "dutyId": 25,               // 出库仓ID
                    "dutyName": "VC（退货不入仓）",    // 出库仓名
                    "id": 20,
                    "lineId": 6,
                    "type": "TR"
                }
            ],
            "fromPathName": "黑龙江鸡西市",       // 起点名
            "fromPathid": "0803",               // 起点
            "id": 6,                        // 线路ID
            "name": "天津燕山区-DC(大连仓)",        // 线路名
            "paFlg": 1,                         // 采购单类型
            "stockupPlanVOS": null,
            "supplier": [                   // 供应商
                {
                    "deleteFlg": 0,
                    "dutyId": 5563,                 // 供应商ID
                    "dutyName": "优合集团有限公司",     // 供应商名
                    "id": 19,
                    "lineId": 6,
                    "type": "PA"
                }
            ],
            "toDepotId": 40,                    // 入库仓ID
            "toDepotName": "DC（大连铁越仓）",     // 入库仓名
            "trFlg": 1,                         // 调拨单类型
            "unAllocationPlans": null
        }
    }


### BH-55 线路日志
#### 模块负责人
    王子悦
#### 对接负责人
    尹洪明
#### 请求
    GET /v2/stockup/line/log/{id}
#### 参数
    *id     // 线路ID
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
                    "id": 6,
                    "lineId": 6,
                    "opInfo": "线路作废",
                    "opRole": 1,
                    "opTime": "2019-05-29 10:43:25",
                    "opUser": 518,
                    "opUserName": "孙启萌"
                }
            ],
            "pageNo": 0,
            "total": 0
        }
    }
    
### BH-56 线路修改名称
#### 模块负责人
    王子悦
#### 对接负责人
    尹洪明
#### 请求
    PUT /v2/stockup/line/name/{id}
#### 参数
    *id // 线路ID
    {
        "name": "昆山-DC大连仓"
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
 
### BH-57 线路列表（不分页）
#### 模块负责人
    王子悦
#### 对接负责人
    尹洪明
#### 请求
    GET /v2/stockup/line/list
#### 参数
    toDepotId       // 入库仓
    splitNum        // 平铺展示个数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            [
                "createRole": 0,
                "createTime": "2019-05-29 10:00:30",
                "createUser": 0,
                "createUserName": "孙启萌",
                "deleteFlg": 0,
                "depot": [                      // 出库仓
                    {
                        "deleteFlg": 0,
                        "dutyId": 25,                   // 出库仓ID
                        "dutyName": "VC（退货不入仓）",        // 出库仓名
                        "id": 20,
                        "lineId": 6,
                        "type": "TR"
                    }
                ],
                "fromPathName": "黑龙江鸡西市",       // 起点名
                "fromPathid": "0803",               // 起点
                "id": 6,                        // 线路ID
                "name": "天津燕山区-DC(大连仓)",    // 线路名
                "paFlg": 1,                     // 采购单类型
                "stockupPlanVOS": null,
                "supplier": [                   // 供应商
                    {
                        "deleteFlg": 0,
                        "dutyId": 5563,                 // 供应商ID
                        "dutyName": "优合集团有限公司",     // 供应商名
                        "id": 19,
                        "lineId": 6,
                        "type": "PA"
                    }
                ],
                "toDepotId": 40,                    // 入库仓ID
                "toDepotName": "DC（大连铁越仓）",     // 入库仓名
                "trFlg": 1,                     // 调拨单类型
                "unAllocationPlans": null
            ],
            []
        ]
    }
   
### BH-100 安全库存规则列表
#### 模块负责人
    王子悦
#### 对接负责人
    尹洪明
#### 请求
    GET /v2/stockup/safe/rule
#### 参数
    无
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "deleteFlg": 0,
                "endNum": 100,          // 最大值
                "id": 1,
                "paramType": "B3AVG",   // B3AVG 前三月平均出货量 目前只有一种类型
                "safeNum": 0,           // 手动设置的安全库存值
                "safeType": "FULL",     // 安全库存值
                "startNum": 1           // 最小值
            },
            {
                "deleteFlg": 0,
                "endNum": 300,
                "id": 2,
                "paramType": "B3AVG",
                "safeNum": 0,
                "safeType": "HALF",
                "startNum": 100
            },
            {
                "deleteFlg": 0,
                "endNum": 1000000,
                "id": 3,
                "paramType": "B3AVG",
                "safeNum": 300,
                "safeType": "HAND",
                "startNum": 300
            }
        ]
    }  

### BH-101 安全库存规则修改
#### 模块负责人
    王子悦
#### 对接负责人
    尹洪明
#### 请求
    PUT /v2/stockup/safe/rule
#### 参数
    [
        {
            *"paramType": "B3AVG",   // B3AVG 前三个月平均出货量 目前只有这一种类型
            *"startNum": "1",        // 最小值
            *"endNum": "200",        // 最大值
            *"safeType": "FULL",     // 安全库存值   FULL 基础参数 HALF 基础参数一半 HAND 其它
            *"safeNum": 0            // 手动设置的安全库存值，非手动设置时，需赋值0
        },
        {
            "paramType": "B3AVG",
            "startNum": "200",
            "endNum": "500",
            "safeType": "HALF",
            "safeNum": 0
        },
        {
            "paramType": "B3AVG",
            "startNum": "500",
            "endNum": "10000000",
            "safeType": "HAND",
            "safeNum": 1000
        }
    ]
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }    
    
    
### BH-102 安全库存规则日志
#### 模块负责人
    王子悦
#### 对接负责人
    尹洪明
#### 请求
    GET /v2/stockup/safe/rule/log
#### 参数
    pageNo      页码
    pageSize    页大小
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
                    "id": 2,
                    "opInfo": "修改安全库存规则",           // 操作内容
                    "opRole": 1,
                    "opTime": "2019-06-10 11:25:47",      // 操作时间
                    "opUser": 518,
                    "opUserName": "孙启萌"                 // 操作人
                },
                {
                    "id": 1,
                    "opInfo": "新增安全库存规则",
                    "opRole": 29319,
                    "opTime": "2019-06-10 09:52:20",
                    "opUser": 518,
                    "opUserName": "孙启萌"
                }
            ],
            "pageNo": 0,
            "total": 0
        }
    }


### BH-110 期货现货定制品列表
#### 模块负责人
    王子悦
#### 对接负责人
    尹洪明
#### 请求
    GET /v2/stockup/nowfuture
#### 参数
    *depotId    仓库ID
    *type       查询类型 NOW 查询现货列表 FUTURE 查询期货列表 CUSTOM 查询定制品列表
    keyword     品号、品名
    buttonPermissionFlg 是否查询按钮权限
    pageNo      页码
    pageSize    页大小
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissionPage": {},
            "buttonPermissions": [
                {
                    "cancelButton": false,      // 取消手动
                    "toFutureButton": true,     // 转期货
                    "toNowButton": false        // 转现货
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "customerCnt": 59,          // 服务客户数
                    "customerFlg": 0,           // 定制表示 0 非定制 1 普通定制 2 专属定制
                    "depotId": 40,              // 仓库ID
                    "id": 0,
                    "jian": 18578,              // 平均出货量
                    "lockFlg": 0,               // 类型来源 0 自动 1 手动
                    "num": 18578,
                    "pno": "0151",              // 品号
                    "productId": 1,             // 品ID
                    "productName": "香草凤尾虾", // 品名
                    "san": 18,
                    "type": "NOW"
                }
            ],
            "pageNo": 0,
            "total": 0
        }
    }

### BH-111 期货现货定制品统计列表
#### 模块负责人
    王子悦
#### 对接负责人
    尹洪明
#### 请求
    GET /v2/stockup/nowfuture/profile
#### 参数
    depotId    仓库ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "customCnt": 236,                   // 定制品数
                "customerCnt": 190,                  // 服务客户数
                "depotId": 40,                      // 仓库ID
                "depotName": "DC（大连铁越仓）",       // 仓库名
                "futureCnt": 93,                    // 期货数
                "nowCnt": 211,                      // 现货数
                "saleCnt": 550149,                  // 出货量
                "saleProductCnt": 395               // 出货品类
            }
        ]
    }
    

### BH-112 期货转现货
#### 模块负责人
    王子悦
#### 对接负责人
    尹洪明
#### 请求
    PUT /v2/stockup/nowfuture/now
#### 参数
    {
        *"depotId": "40",
        *"productId": [
            4748,
            4747
        ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }    
    

### BH-113 现货转期货
#### 模块负责人
    王子悦
#### 对接负责人
    尹洪明
#### 请求
    PUT /v2/stockup/nowfuture/future
#### 参数
    {
        *"depotId": "40",
        *"productId": [
            4748,
            4747
        ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }       

### BH-114 取消手动
#### 模块负责人
    王子悦
#### 对接负责人
    尹洪明
#### 请求
    PUT /v2/stockup/nowfuture/cancel
#### 参数
    {
        *"depotId": "40",
        *"productId": [
            4748
        ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }      

### BH-115 期货现货操作日志
#### 模块负责人
    王子悦
#### 对接负责人
    尹洪明
#### 请求
    GET /v2/stockup/nowfuture/log
#### 参数
    *depotId    // 仓库ID
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
                    "depotId": 40,
                    "id": 0,
                    "opInfo": "期货->现货",             // 操作内容
                    "opRole": 0,
                    "opTime": "2019-06-10 15:50:56",    // 操作时间
                    "opUser": 0,
                    "opUserName": "孙启萌",                // 操作人
                    "productId": 2281,
                    "pno": 1889,                            // 品号
                    "productName": "好虾仁 (51/60）挑肠"      // 操作产品
                }
            ],
            "pageNo": 0,
            "total": 0
        }
    }        
    
### BH-120 安全库存修改
#### 模块负责人
    王子悦
#### 对接负责人
    尹洪明
#### 请求
    POST /v2/stockup/safe/askfor
#### 参数
    {
        *"depotId": 40,         // 仓库ID
        *"productId": 2506,     // 产品ID
        *"turnover": 5,         // 周转率
        *"safeNum": 201         // 安全库存
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }       
    
### BH-121 安全库存审核通过
#### 模块负责人
    王子悦
#### 对接负责人
    尹洪明
#### 请求
    PUT /v2/stockup/safe/askfor/pass
#### 参数
    {
        "askIds": [ // 申请ID
            1,
            2,
            3
        ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }   
    
### BH-122 安全库存审核拒绝
#### 模块负责人
    王子悦
#### 对接负责人
    尹洪明
#### 请求
    PUT /v2/stockup/safe/askfor/refuse
#### 参数
    {
        "askIds": [ // 申请ID
            1,
            2,
            3
        ],
        "reason":"拒绝理由"
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }       
    
    
### BH-123 安全库存列表
#### 模块负责人
    王子悦
#### 对接负责人
    尹洪明
#### 请求
    GET /v2/stockup/safe
#### 参数
    keyword     // 品号、品名
    depotId     // 仓库ID
    status          // 库存状态 'NORMAL' 正常,'LOCK' 锁定
    enableAmountOp  // 过滤可用库存操作符
    enableAmount    // 可用库存值
    normalAmountOp  // 过滤实际库存操作符
    normalAmount    // 实际库存值
    buttonPermissionFlg  // 1 查权限  0 不查权限
    pageNo      // 页码
    pageSize    // 页大小
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissionPage": {},
            "buttonPermissions": [
                {
                    "editButton":true,         // 编辑按钮
                    "cancelButton":false        // 取消手动按钮
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "avgCustomer": 2,
                    "avgJian": 75,      // 平均出货量件
                    "avgNum": 1250, 
                    "avgSan": 0,        // 平均出货量散
                    "b1Customer": 0,        // 月平均购买客户数
                    "b1Jian": 0,        // 前一个月件
                    "b1Num": 0,
                    "b1San": 0,         // 前一个月散
                    "b2Customer": 0,
                    "b2Jian": 0,        // 前两个月件
                    "b2Num": 0,
                    "b2San": 0,         // 前两个月散
                    "b3Customer": 7,
                    "b3Jian": 225,      // 前三个月件
                    "b3Num": 3750,
                    "b3San": 0,         // 前三个月散
                    "createTime": "",
                    "depotId": 57,                      // 仓库ID
                    "depotName": "DC（昆山仓A）ASA",     // 仓库名
                    "enableAmountJian": 100,        // 可用库存件
                    "enableAmountSan": 39,          // 可用库存散
                    "guige": "150g/袋*50袋",      // 品规格
                    "id": 0, // 安全库存ID   存在id=0的情况，需要传递id时， id 是多久就传多少，是0就传0
                    "lockFlg": 0,               // 是否锁定 0 未锁定  1 已锁定
                    "modifyRole": 0,
                    "modifyTime": "",
                    "modifyUser": 0,
                    "modifyUserName": "",
                    "normalAmountJian": 100,        // 实际库存件
                    "normalAmountSan": 39,          // 实际库存散
                    "perunit": 50,              // 品转化率
                    "pno": "0162",                  // 品号
                    "productId": 811,           // 品ID
                    "productName": "香辣鱼皮",      // 品名
                    "safeNum": 75,
                    "safeNumJian": 1.5,         // 安全库存计算值
                    "safeNumManual": -1,        // 手动设置的安全库存 -1 未设置过，显示空
                    "safeNumSan": 0,
                    "b0NumJian": 10237,        // 本月已发件
                    "b0NumSan": 21,            // 本月已发散
                    "status": "NORMAL",         // 库存状态  NORMAL 正常 LOCK 锁定
                    "turnover": 2,      // 周转率
                    "type": "NOW",              // 产品类型 NOW 现货 FUTURE 期货 CUSTOM 定制品
                    "unit": "件"             // 品单位
                }
            ],
            "pageNo": 0,
            "total": 1
        }
    }   
        
### BH-124 安全库存列表导出
#### 模块负责人
    王子悦
#### 对接负责人
    尹洪明
#### 请求
    GET /v2/stockup/safe/export
#### 参数
    keyword     // 品号、品名
    *depotId     // 仓库ID
    status          // 库存状态 'NORMAL' 正常,'LOCK' 锁定
    enableAmountOp  // 过滤可用库存操作符
    enableAmount    // 可用库存值
    normalAmountOp  // 过滤实际库存操作符
    normalAmount    // 实际库存值
#### 响应
    流    
    
### BH-125 安全库存审核列表
#### 模块负责人
    王子悦
#### 对接负责人
    尹洪明
#### 请求
    GET /v2/stockup/safe/askfor
#### 参数
    keyword     // 品号、品名
    depotId     // 仓库ID
    status          // 库存状态 'NORMAL' 正常,'LOCK' 锁定
    buttonPermissionFlg 是否返回按钮权限  1 返回 0 不返回
    pageNo      // 页码
    pageSize    // 页大小
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissionPage": {},
            "buttonPermissions": [
                {
                    "checkButton": false // 是否显示审核拒绝按钮
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "checkRole": 1,
                    "checkTime": "2019-06-11 16:15:16",     // 申请时间
                    "checkUser": 518,
                    "checkUserName": "孙启萌",             // 申请人
                    "createRole": 1,
                    "createTime": "2019-06-11 15:31:35",        // 审核人
                    "createUser": 518,
                    "createUserName": "孙启萌",                // 审核时间
                    "depotId": 40,                  // 仓库ID
                    "depotName": "DC（大连铁越仓）",   // 仓库名
                    "id": 1,                    申请ID
                    "normalAmountJian": 0,          // 实际库存件
                    "normalAmountSan": 0,           // 实际库存散
                    "originalSafeNum": 0,           // 安全库存旧值
                    "originalTurnover": 2,      // 周转率旧值
                    "pno": "lb703",             // 品号
                    "productId": 2506,              // 产品ID
                    "productName": "中粮烤全腿",         // 产品名
                    "reason": "拒绝你",        // 拒绝理由
                    "remark": "",           // 申请备注
                    "safeNum": 201,             // 安全库存新值
                    "b0NumJian": 0,            // 本月已发件
                    "b0NumSan": 0,             // 本月已发散
                    "status": "PASS",           // 审核状态  ASKFOR 申请 PASS 通过 REFUSE 拒绝
                    "turnover": 5,              // 周转率新值
                    "type": "NOW"              // 产品类型 NOW 现货 FUTURE 期货 CUSTOM 定制品
                }
            ],
            "pageNo": 0,
            "total": 0
        }
    }
    
### BH-126 安全库存取消手动
#### 模块负责人
    王子悦
#### 对接负责人
    尹洪明
#### 请求
    PUT /v2/stockup/safe/cancel/{id}
#### 参数
    *id // 安全库存ID
#### 响应   
    {
        "code": 100000,
        "msg": "",
        "data": null
    }  
    
    
### BH-127 安全库存详情
#### 模块负责人
    王子悦
#### 对接负责人
    尹洪明
#### 请求
    GET /v2/stockup/safe/{id}
#### 参数
    *id // 安全库存ID  注：有些安全库存ID=0，没关系 ，放心传递即可
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "avgCustomer": 0,
            "avgJian": 0,
            "avgNum": 0,
            "avgSan": 0,
            "b1Customer": 0,
            "b1Jian": 0,
            "b1Num": 0,
            "b1San": 0,
            "b2Customer": 0,
            "b2Jian": 0,
            "b2Num": 0,
            "b2San": 0,
            "b3Customer": 0,
            "b3Jian": 0,
            "b3Num": 0,
            "b3San": 0,
            "createTime": "",
            "depotId": 0,
            "id": 0,
            "lockFlg": 0,
            "modifyRole": 0,
            "modifyTime": "",
            "modifyUser": 0,
            "modifyUserName": "",
            "productId": 0,
            "safeNum": 0,
            "safeNumJian": 0,       // 安全库存（件）
            "safeNumManual": 0,
            "safeNumSan": 0,
            "turnover": 2           // 周转率
        }
    }
    


