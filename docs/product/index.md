## 产品接口
### CP-1. 查询产品
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/product
#### 参数
    keyword : "" // 关键字
    pno : "" // 品名
    businessTypeId： 0 // 产品业态ID
    taxCategoryId: 0 // 税收分类ID
    status："NORMAL" //上架状态 NORMAL 上架 LOCK 下架
    lackFlg : 1 // 是否缺货 0 不缺货 1 缺货
    customFlg: 1 // 是否定制 0 不定制 1 定制
    processContent: 0 // 内容信息状态 0 待维护 1 已完善
    processPrice: 0 // 价格信息状态 0 待维护 1 已完善
    processInvoice： 0 // 发票信息状态 0 待维护 1 已完善
    pageNo:1 // 页码 默认1
    pageSize: 25 // 页面条数 默认25
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data":{
            "buttonPermissions": [],
            "dataSums": null,
            "pageNo": 1,
            "total": 0
            "datas": [
                {
                    "businessTypeIds": null, // 餐饮业态ID [1, 2, 3]
                    "createTime": "2018-11-16 06:09:12", // 创建时间
                    "customFlg": 0, // 是否定制 0 未定制 1 定制
                    "customerIds": null, // 若为定制 则 定制的客户ID [1, 2, 3]
                    "deleteFlg": 0, 
                    "followFlg": 0,
                    "id": 4697, // 产品ID
                    "longName": "", 
                    "mainBgImg": "http://asae.oss-cn-beijing.aliyuncs.com/0",
                    "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/0", // 产品主图
                    "name": "345", // 产品名
                    "pno": "3245", // 品号
                    "process": 3, // 完善度，3/4, 4是固定写死
                    "processContent": 1, // 内容完善状态 0 未完善 1 已完善
                    "processInvoice": 0, // 发票完善状态 0 未完善 1 已完善
                    "processPrice": 1, // 价格完善状态 0 未完善 1 已完善
                    "productExtra": null,
                    "productImgs": null,
                    "productLack": { // 缺货标识，null 为不缺货
                        "productId": 1，
                        "startTime": "2018-01-01", // 缺货开始时间
                        "endTime": "2018-01-20" // 缺货结束时间
                    },
                    "productUnits": [ // 规格列表
                        {
                            "cubage": 0,
                            "grossweight": 234,
                            "guige": "123", // 规格名
                            "height": 234,
                            "id": 8088, // 规格ID
                            "length": 0, 
                            "minimum": 234,
                            "minimumType": null,
                            "netweight": 234,
                            "perunit": 234, // 转化率
                            "price": null, 
                            "productCart": null,
                            "productId": 4697, 
                            "unit": "袋", // 单位
                            "unitId": 1, // 单位id
                            "width": 234
                        },
                        {
                            "cubage": 0,
                            "grossweight": 1234,
                            "guige": "21212321",
                            "height": 341234,
                            "id": 8089,
                            "length": 0,
                            "minimum": 231412,
                            "minimumType": null,
                            "netweight": 9999.9999,
                            "perunit": 9999.99,
                            "price": null,
                            "productCart": null,
                            "productId": 4697,
                            "unit": "件",
                            "unitId": 1, // 单位id
                            "width": 123412
                        }
                    ],
                    "pyAll": "",
                    "pyCode": "",
                    "relatePnos": null,
                    "status": "LOCK", // 上下架状态 NORMAL 上架 LOCK 下架
                    "stock": null,
                    "taxRate": 0
                }
            ]
        }
    }

### CP-2. 新增产品
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    POST /v2/product
#### 参数
    {
        *"product":{ // 产品信息
            *"name":"测试01", // 产品名
            *"pno":"pnotest01", // 品号 不可重复
            *"taxRate":0.1, // 税率
            *"customFlg":1 // 是否定制 0 未定制 1 定制
        },
        *"productExtra":{ // 产品扩展信息
            "attributes": 1, // 标准类别
            "standards": 1, // 产品标准号
            "material":"meterial", // 配料
            "cookWay":"cookWay", // 烹饪方式
            "barCode":"barCode", // 条码
            "place":"place", // 产地
            "store":"store", // 存储温度
            "saveType":"NORMAL", // 存储方式 NORMAL 常温 FROZEN 冷冻
            "shelfLife":"shelfLife" // 质保期
            
        },
        *"productUnits":[// 产品规格列表
            {
                *"guige":"guige1", // 规格名
                *"unitId":"1", // 规格单位ID
                *"unit":"袋", // 规格单位名
                *"perunit":"1", // 转化率
                *"grossweight":"10.2", // 毛重
                *"netweight":"9.2", // 净重
                *"length":"10.2", // 长
                *"width":"10.2", // 宽
                *"height":"10.2", // 高
                *"minimum":"10", // 起订量
                *"minimumType":"NONE" // 起订方式 NONE 不限制 BEGIN 递增 STEP 步增
                
            }
        ],	
        "customerIds":[1, 2, 3]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": 1 // 新增产品ID
    }

### CP-3. 查询产品生产信息
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/product/info/{id}
#### 参数
    id: 1 // 产品ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "businessTypeIds": null,
            "createTime": "2018-12-06 07:27:16", 
            "customFlg": 1, // 是否定制
            "customerIds": [ // 定制客户ID数组
                1,
                2,
                3
            ],
            "customers": [
                {
                    "businessunit": 44,
                    "businessunitName": "P2P-CS",
                    "companyName": "18611318343",
                    "customerId": 24404,        // 客户id
                    "shortName": "18611318343", // 客户名
                    "srRoleId": 3913,
                    "srRoleName": "孙奇",
                    "ssRoleId": 29319,
                    "ssRoleName": "孙启萌1",
                    "type": "A"
                }
            ],
            "deleteFlg": 0,
            "id": 4708, // 产品ID
            "longName": "", 
            "mainBgImg": "0",
            "mainImg": "0",
            "name": "测试01", // 产品名
            "pno": "pnotest02", // 品号
            "process": 1,
            "processContent": 0,
            "processInvoice": 0,
            "processPrice": 0,
            "productExtra": { // 产品扩展信息
                "attributeName": "速冻生制", // 产品标准分类名
                "attributes": 1, // 产品标准分类ID
                "barCode": "barCode", // 条码
                "cookWay": "cookWay", // 烹饪方法
                "description": "",
                "id": 8195, // 规格ID
                "intro": "",
                "material": "meterial", // 配料
                "place": "place", // 产地
                "productId": 4708, // 产品ID
                "saveType": "NORMAL", // NORMAL 常温 FROZEN 冷冻
                "shelfLife": "shelfLife", 保质期
                "standards": 1, // 标准号ID
                "standardsName": "SB/T 10379  速冻调制食品", // 标准号名
                "store": "store" // 保存方法
            },
            "productImgs": null,
            "productLack": null,
            "productUnits": [ // 产品规格
                {
                    "cubage": 10,
                    "grossweight": 10.2, // 毛重
                    "guige": "guige1", // 规格名
                    "height": 10.2, // 高度
                    "id": 8091, // 规格ID
                    "length": 10.2, // 长度
                    "minimum": 10, // 最小起订量
                    "minimumType": null, // 起订类型 NONE 无设定 BEGIN 递增 STEP 步增
                    "netweight": 9.2, // 净重
                    "perunit": 1, // 转化率
                    "price": null, 
                    "productId": 4708, // 产品ID
                    "unit": "袋", // 单位名
                    "unitId": 1, // 单位ID
                    "width": 10.2 // 宽度
                }
            ],
            "pyAll": "",
            "pyCode": "",
            "status": "LOCK",
            "stock": null,
            "taxRate": 0.1 // 税率
        }
    }

### CP-4. 修改产品生产信息
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/product/info/{id}
#### 参数
    id:1 //产品ID
    {
        *"product":{ // 产品信息
            *"name":"测试01", // 产品名
            *"pno":"pnotest01", // 品号 不可重复
            *"taxRate":0.1, // 税率
            *"customFlg":1 // 是否定制 0 未定制 1 定制
        },
        *"productExtra":{ // 产品扩展信息
            "attributes": 1, // 标准类别
            "standards": 1, // 产品标准号
            "material":"meterial", // 配料
            "cookWay":"cookWay", // 烹饪方式
            "barCode":"barCode", // 条码
            "place":"place", // 产地
            "store":"store", // 存储温度
            "saveType":"NORMAL", // 存储方式 NORMAL 常温 FROZEN 冷冻
            "shelfLife":"shelfLife" // 质保期
            
        },
        "customerIds":[1, 2, 3]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CP-5. 新增规格
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    POST /v2/product/guige
#### 参数
    {
        *"productId": 1 // 产品ID
        *"guige":"guige1", // 规格名
        *"unitId":"1", // 规格单位ID
        *"unit":"袋", // 规格单位名
        *"perunit":"1", // 转化率
        *"grossweight":"10.2", // 毛重
        *"netweight":"9.2", // 净重
        *"length":"10.2", // 长
        *"width":"10.2", // 宽
        *"height":"10.2", // 高
        *"minimum":"10", // 起订量
        *"minimumType":"NONE" // 起订方式 NONE 不限制 BEGIN 递增 STEP 步增            
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": 1 // 新增规格ID
    }

### CP-6. 修改规格
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/product/guige/{id}
#### 参数
    *"id": 8092 // 规格ID
    {
        *"productId":"1", // 产品ID
        *"guige":"guige1", // 规格名
        *"unitId":"1", // 规格单位ID
        *"unit":"袋", // 规格单位名
        *"perunit":"1", // 转化率
        *"grossweight":"10.2", // 毛重
        *"netweight":"9.2", // 净重
        *"length":"10.2", // 长
        *"width":"10.2", // 宽
        *"height":"10.2", // 高
        *"minimum":"10", // 起订量
        *"minimumType":"NONE" // 起订方式 NONE 不限制 BEGIN 递增 STEP 步增            
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CP-7. 修改产品内容信息
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/product/content/{id}
#### 参数
    *id: 1 // 产品ID
    {
	    "longName":"longName",
	    "description": "description",
	    "businessTypeIds": [1,2,3],
	    "productImgs":[
		    {
			    "type":"MAIN",
			    "url":"http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201509/30/1443601932-tmAN.jpg"
		    },
		    {
			    "type":"MAINBG",
			    "url":"http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201509/30/1443601932-tmAN.jpg"
		    },
		    {
			    "type":"QUALITY",
			    "url":"http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201509/30/1443601932-tmAN.jpg"
		    },
		    {
			    "type":"DETAIL",
			    "url":"http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201509/30/1443601932-tmAN.jpg"
		    },
		    {
			    "type":"PHOTO",
			    "url":"http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201509/30/1443601932-tmAN.jpg"
		    }
	    ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }


### CP-8. 查询产品内容信息
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/product/content/{id}
#### 参数
    *id: 1 // 产品ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "businessTypeIds": [// 餐饮业态ID
                1,
                2,
                3
            ],
            "createTime": "2018-12-06 07:27:16", // 创建时间
            "customFlg": 1,
            "customerIds": null,
            "deleteFlg": 0,
            "id": 4708,
            "longName": "longName", // 带广告名称
            "mainBgImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201509/30/1443601932-tmAN.jpg",
            "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201509/30/1443601932-tmAN.jpg",
            "name": "测试01",
            "pno": "pnotest02",
            "process": 2,
            "processContent": 1,
            "processInvoice": 0,
            "processPrice": 0,
            "productExtra": { // 产品扩展信息
                "attributeName": "速冻生制",
                "attributes": 1,
                "barCode": "barCode",
                "cookWay": "cookWay",
                "description": "description", // 产品描述
                "id": 8195,
                "intro": "",
                "material": "meterial",
                "place": "place",
                "productId": 4708,
                "saveType": "NORMAL",
                "shelfLife": "shelfLife",
                "standards": 1,
                "standardsName": "SB/T 10379  速冻调制食品",
                "store": "store"
            },
            "productImgs": { // 产品图片
                "QUALITY": [ // 质检图
                    {
                        "id": 8258,
                        "productId": 4708,
                        "type": "QUALITY",
                        "url": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201509/30/1443601932-tmAN.jpg" // 图片URL
                    }
                ],
                "MAINBG": [ // 背景图
                    {
                        "id": 0,
                        "productId": 4708,
                        "type": "MAINBG",
                        "url": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201509/30/1443601932-tmAN.jpg"
                    }
                ],
                "MAIN": [ // 主图
                    {
                        "id": 0,
                        "productId": 4708,
                        "type": "MAIN",
                        "url": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201509/30/1443601932-tmAN.jpg"
                    }
                ],
                "PHOTO": [ // 产品图
                    {
                        "id": 8260,
                        "productId": 4708,
                        "type": "PHOTO",
                        "url": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201509/30/1443601932-tmAN.jpg"
                    }
                ],
                "DETAIL": [ // 明细图
                    {
                        "id": 8259,
                        "productId": 4708,
                        "type": "DETAIL",
                        "url": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201509/30/1443601932-tmAN.jpg"
                    }
                ]
            },
            "productLack": null,
            "productUnits": null,
            "pyAll": "",
            "pyCode": "",
            "status": "LOCK",
            "stock": null,
            "taxRate": 0
        }
    }

### CP-9.  产品上架
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/product/up/{id}
#### 参数
    *id:1 // 产品ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    

### CP-10. 产品删除
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    DELETE /v2/product/{id}
#### 参数
    *id: 1 // 产品ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CP-11. 查询产品日志
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/product/log/{id}
#### 参数
    *id: 1 // 产品ID
    pageNo: 1 // 页码 默认1
    pageSize: 25 // 页面条数 默认25
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "pageNo": 1,
            "total": 0,
            "datas": [
                {
                    "id": 91,
                    "opInfo": "新增发票产品", // 日志信息
                    "opRole": 1, // 操作角色ID
                    "opTime": "2018-12-06 15:28:06.0", // 操作时间
                    "opUser": 101, // 操作人
                    "opUserName": "系统操作", // 操作人名
                    "productId": 4708 // 产品ID
                }
            ]
        }
    }

### CP-12. 查询产品标准类别
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/product/dic/attribute
#### 参数
    无
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "dicId": 0, // 标准类别ID
                "dicName": "无", // 标准类别名
                "id": 1,
                "type": "ATTRIBUTE"
            }
        ]
    }

### CP-13. 查询产品标准号
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/product/dic/standard
#### 参数
    无
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "dicId": 0, // 标准号ID
                "dicName": "无", // 标准号名
                "id": 1,
                "type": "ATTRIBUTE"
            }
        ]
    }

### CP-14. 查询产品单位
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/product/dic/unit
#### 参数
    无
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "dicId": 1, // 单位ID
                "dicName": "袋", // 单位名
                "id": 95,
                "type": "UNIT"
            }
        ]
    }

### CP-15. 查询产品规格
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/product/guige
#### 参数
    keyword: "" // 模糊查询品名、品号
    status: "NORMAL" // 状态 NORMAL 上架 LOCK 下架
    customFlg: 0 // 客户定制 0 常规品 1 定制品
    customerId: 1 // 客户ID， 传递客户ID 是在进行产品定价的时候 需要带出产品的客户签约价格
    pathId: "0101" // 区域ID， 传递区域ID 是在进行产品定价的时候 需要带出产品的区域价格
    supplierId: 1 // 供应商ID， 传递供应商ID 是在进行产品定价的时候 需要带出产品的供应商价格
    depotId: 1 // 仓ID， 传递仓ID，是需要产品匹配库存存量
    productunitIds[]:1,2,7  // 产品规格
    ---------------------------以下三个has开头的参数决定是否查询价格和库存 ture查询 & false不查询-----------------------------------------
    hasPrice:           // 客户某个区域产品价格
		customerId
		pathId
	hasStock:           // 客户某个区域产品库存, pathId & depotId 二选一
		customerId
		*pathId
		*depotId
	hasStock3:          // 供应商某个仓库产品库存
		*supplierId
		*depotId
    ----------------------------------------------------------------------------------------------------------------------------------
    pageNo: 1 // 页码 默认 1 
    pageSize: 25 // 页面条数 默认 25
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "cubage": 1512, // 体积
                    "grossweight": 0.55, // 毛重
                    "guige": "500g(23-25枚）/盒", // 规格名
                    "height": 5, // 高度
                    "id": 1, // 规格ID
                    "length": 19.5, // 长度
                    "minimum": 0, // 最小起订量
                    "minimumType": "NONE", // 起订方式 NONE 无限制 BEGIN 递增 STEP 步增
                    "netweight": 0.5, // 净重
                    "perunit": 1, // 转化率
                    "price": {
                        "decideType": A // 决定价格类型 A A价格 P P价格 T 特价 S 签约价 Q 区域价
                        "finallyPrice":1.0, // 最终执行价
                        "aPrice": 1.0, // A 价格
                        "pPrice": 1.0, // P 价格
                        "specialPrice": 1.0, // 特价
                        "signPrice": 1.0, // 签约价
                        "areaPrice": 1.0, // 地区价
                        "productUnitId": 1 // 规格ID
                    }, 
                    "product": {
                        "customFlg": 0, // 定制标识
                        "id": 1, // 产品ID
                        "longName": "香草凤尾虾-专业开背，秘制加工，中西餐厅新食尚~", // 广告名
                        "mainBgImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/f9ce32e007fc796722466531c86d5cd9.jpg", // 主图背景图
                        "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/ec90940549d364b0982427f87dd86747.jpg", // 主图
                        "name": "香草凤尾虾", // 产品名
                        "pno": "0151", // 品号
                        "productLack": { // 缺货标识，若未null 则不缺货
                            "productId": 1，
                            "startTime": "2018-01-01", // 缺货开始时间 
                            "endTime": "2018-01-20" // 缺货结束时间
                        },
                        "status": "NORMAL"
                    },
                    "productCart": null,
                    "productId": 1,
                    "stock": { // 库存
                        "productId": 1,
                        "amount": 20 // 最小单位数量
                    },
                    "unit": "盒", // 单位名
                    "unitId": 2,  // 单位ID
                    "width": 15.5 // 宽度
                }
            ],
            "pageNo": 1,
            "total": 0
        }
    }

### CP-16.批量修改产品业态
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/product/businessType
#### 参数
    [
        {
            "productId": 1, // 产品ID
            "businessTypeId": 1, // 产品业态ID
            "businessTypeCode": "-001-002-" // 产品业态码
        }
    ]
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CP-17.  产品下架
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/product/down/{id}
#### 参数
    *id:1 // 产品ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
### CP-50.产品业态查询
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    GET     /v2/product/businessType
#### 参数
    parentId: 0 // 获取根分类传递0，获取全部业态时，什么都不传
    ids: [1, 2, 3] // 根据ID 获取餐饮业态 
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "code": "-16-",          // 业态编码
                "deleteFlg": 0,
                "gIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/g02.png",
                "hasProductCnt": 6,     // 产品数
                "id": 16,               // 业态id
                "level": 1,             // 业态等级
                "name": "西餐西快",     // 名称
                "parentId": 0,          // 上级业态id
                "pyCode": "",           // 拼音编码
                "sIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/s02.png",
                "showFlg": 1,           // 是否显示 1 显示 0 隐藏
                "wIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/w02.png"
            }
        ]
    }

### CP-51.产品业态新增
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    POST /v2/product/businessType
#### 参数
    {
        "name": "xx", // 餐饮业态名称
        "showFlg": 1, // 是否显示 0 不显示 1 显示
        "parentId": 1, // 父餐饮业态ID
        "sIcon":"http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/s02.png"
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": 1 // 新增后业态ID
    }

### CP-52.产品业态名称修改
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/product/businessType/name/{id}
#### 参数
    *id: 1 // 餐饮业态ID
    {
        *"name":"xxx" // 餐饮业态名称
    }

#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CP-52.产品业态显示隐藏
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/product/businessType/show/{id}
#### 参数
    *id: 1 // 餐饮业态ID
    {
        *"show":1 // 显示隐藏状态 0 隐藏  1 显示
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CP-53.产品业态删除
#### 对接负责人
    刘宏宇
#### 模块负责人
    尹洪明
#### 请求
    DELETE /v2/product/businessType/{delId}/{toId}
#### 参数
    *delId: 1 // 需要删除的餐饮业态ID
    toId: 2 // 移至的餐饮业态ID 无时，toId=0
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CP-101. 新增断货
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    POST    /v2/product/lack
    
#### 参数

    {
    	*"productIds":[3182,3180,3176],      // 产品列表
    	*"startTime":"2018-09-12 10:10:10",  // 开始时间
    	*"endTime":"2018-09-22 10:10:10"    // 结束时间
    }

#### 响应

    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }
   
### CP-102. 断货列表
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    GET     /v2/product/lack
    
#### 求参数

    keyword // 品名、品号
    state   // 状态 normal 正常 lock 锁定 delete 作废 invalid 失效
    buttonPermissionFlg // 操作按钮开关 0 带操作列表 1 无操作列
    pageNo      // 页码
    pageSize    // 页条数

#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "deleteButton": false, // 作废
                    "lockButton": true, // 锁定
                    "unlockButton": false, // 解锁
                    "updateButton": true, // 修改
                    "logButton": true // 日志
                },
                ......
            ],
            "dataSums": null,
            "datas": [
                {
                    "endTime": "2018-09-22",    // 结束时间
                    "id": 43,                   // 断货id
                    "note": "",
                    "pno": "0990",              // 品号
                    "productId": 3182,          // 产品id
                    "productName": "金丝榴莲酥",    // 品名
                    "productStatus": "",        // 产品状态
                    "productType": "",          // 产品类型
                    "startTime": "2018-09-12",      // 开始时间
                    "state": "NORMAL",              // 断货状态
                    "unitGuige": "袋：200g(10枚）/袋,件：200g(10枚）/袋*20袋"   // 单位规格
                },
                ......
            ],
            "pageNo": 1,
            "total": 5
        }
    }


### CP-103. 断货详细信息
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    GET     /v2/product/lack/detail
    
#### 参数

    *id      // 断货id
 
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": {
            "endTime": "2018-09-22",        // 结束时间
            "id": 43,                   // 断货id
            "note": "",
            "pno": "0990",              // 品号
            "productId": 3182,          // 产品id
            "productName": "金丝榴莲酥",    // 品名
            "productState": "NORMAL",       // 产品状态
            "productType": "",              // 产品类型
            "startTime": "2018-09-12",      // 开始时间
            "state": "NORMAL",          // 断货状态
            "unitGuige": ""             // 单位规格
        }
    }
    
### CP-104.断货产品锁定、解锁、作废
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    PUT    /v2/product/lack/state/{id}
    
#### 参数
    *id //断货id
    {
        *"state":"NORMAL"    // NORMAL 解锁 LOCK 锁定  DELETE 作废
    }
    
#### 响应

    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }
 
   
### CP-105. 断货修改
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    PUT    /v2/product/lack/{id}
    
#### 参数
    *id  // 断货id
    {
    	*"startTime":"2018-09-12 10:10:10",
    	*"endTime":"2018-09-22 10:10:10"
    }


#### 响应
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }
 
 
### CP-106. 操作日志列表
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    GET     /v2/product/lack/log
    
#### 参数

    *id      // 断货id
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": null,
            "dataSums": null,
            "datas": [
                {
                    "content": "新增断货",  // 操作内容
                    "id": 0,
                    "lackIds": null,        // 断货id 
                    "note": "",
                    "operTime": "2018-09-12 10:55:58",  // 操作时间
                    "operUser": 0,          
                    "operUserName": "樊嘉辉"        // 操作人
                },
                {
                    "content": "锁定",
                    "id": 0,
                    "lackIds": null,
                    "note": "",
                    "operTime": "2018-09-12 11:55:49",
                    "operUser": 0,
                    "operUserName": "樊嘉辉"
                },
                {
                    "content": "作废",
                    "id": 0,
                    "lackIds": null,
                    "note": "",
                    "operTime": "2018-09-12 11:56:31",
                    "operUser": 0,
                    "operUserName": "樊嘉辉"
                },
                {
                    "content": "更新断货",
                    "id": 0,
                    "lackIds": null,
                    "note": "",
                    "operTime": "2018-09-12 12:23:48",
                    "operUser": 0,
                    "operUserName": "樊嘉辉"
                }
            ],
            "pageNo": 1,
            "total": 4
        }
    }

### 模版
#### 对接负责人
#### 模块负责人
#### 请求
#### 参数
#### 响应