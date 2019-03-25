## 产品接口
### CP-1. 查询产品
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/product
#### 参数
    keyword : "" // 关键字
    pno : "" // 品号
    name: "" // 品名
    status："NORMAL" //上架状态 NORMAL 上架 LOCK 下架
    customFlg: 1 定制标志 0 非定制 1 定制
    customFlgMore: 1 定制标志 0 非定制 1 普通定制 2 专属定制
    businessTypeId： 0 // 产品业态ID
    businessTypeCode: -16- 业态编码
    taxCategoryId: 0 // 税收分类ID
    processContent: 1 // 内容是否完善 0 未完善  1 完善
    processPrice: 1  // 价格是否完善 0 未完善  1 完善
    processInvoice: 1 // 发票是否完善  0 未完善  1 完善
    lackFlg: 1          // 断货标志 0 非断货 1 断货
    rawFlg: 0           // 是否原料品 0 非 1 是
    rangeType: PART     // 销售区域类型 ALL 全部区域 PART 指定区域 EXCLUDE 排除区域
    buttonPermissionFlg: 1 
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
                    @@"businessTypeIds": [103,......], // 餐饮业态ID
                    @@"businessTypes": [
                        {
                            "code": "-16-0220-",
                            "deleteFlg": 0,
                            "gIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/0220.png",
                            "hasProductCnt": 30,
                            "id": 103,                      // 业态id
                            "level": 2,
                            "mIcon": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190301161618188-4729.png",
                            "miniFlg": 1,
                            "name": "甜品冰点",             // 业态名
                            "parentId": 16,                 // 上级业态id
                            "parentName": "西餐西快",        // 上级业态名
                            "pyCode": "",
                            "sIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/0220.png",
                            "showFlg": 1,
                            "styleUrl": "",
                            "wIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/0220.png"
                        }
                    ],
                    "createTime": "2018-11-16 06:09:12", // 创建时间
                    "customFlg": 0, // 是否定制 0 非定制 1 定制
                    "customFlgMore" 0, // 是否定制更详细状态位 0 非定制 1 常规定制 2 专属定制
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
                    @@"productAttrs": [
                        {
                            "categoryId": 1,            // 分类id
                            "categoryName": "属性分类一",    // 分类名称
                            "createTime": "",
                            "deleteFlg": 0,
                            "depotSafeFlg": 0,
                            "id": 1,                    // 属性id
                            "isDepotSafe": "",
                            "name": "特长属性",         // 属性名称
                            "productId": 4752
                        }
                    ],
                    "productExtra": null,
                    "productImgs": null,
                    "productLack": { // 缺货标识，null 为不缺货
                        "productId": 1，
                        "startTime": "2018-01-01", // 缺货开始时间
                        "endTime": "2018-01-20" // 缺货结束时间
                    },
                    @@"productRange": [
                        {
                            "id": 7,
                            "pathid": "06",     // 区域编码
                            "productId": 4752
                        },
                        {
                            "id": 8,
                            "pathid": "0602",
                            "productId": 4752
                        },
                        {
                            "id": 9,
                            "pathid": "060101",
                            "productId": 4752
                        }
                    ],
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
                            @@"price": {
                                "aPrice": 4.8,          // A价格
                                "areaPrice": 0,
                                "decideType": null,
                                "finallyPrice": 0,  
                                "pPrice": 3.8,          // P价格
                                "productUnitId": 0,
                                "rate": 0,              // 这算比率
                                "rawFlg": "NO",     // 是否原料 NO 非 YES 是
                                "signPrice": 0,
                                "specialPrice": 0
                            },
                            "product": null,
                            "productCart": null,
                            "productId": 4697, 
                            "stock": null,
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
                            @@"price": {
                                "aPrice": 4.8,
                                "areaPrice": 0,
                                "decideType": null,
                                "finallyPrice": 0,
                                "pPrice": 3.8,
                                "productUnitId": 0,
                                "rate": 0,
                                "rawFlg": "NO",
                                "signPrice": 0,
                                "specialPrice": 0
                            },
                            "product": null,
                            "productCart": null,
                            "productId": 4697,
                            "stock": null,
                            "unit": "件",
                            "unitId": 1, // 单位id
                            "width": 123412
                        }
                    ],
                    "pyAll": "",
                    "pyCode": "",
                    "rangeType": "ALL",     // ALL 全部区域 PART 指定区域 EXCLUDE 排除区域
                    "relatePnos": null,
                    "status": "LOCK", // 上下架状态 NORMAL 上架 LOCK 下架
                    "stock": null,
                    "taxRate": 0
                }
            ]
        }
    }

### CP-2. 新增产品
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
            *"customFlg":1 // 是否定制 0 未定制 1 常规定制 2 专属定制
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
        "customerIds":[1, 2, 3] // 专属定制品的所属客户ID
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": 1 // 新增产品ID
    }

### CP-3. 查询产品生产信息
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
            "customFlg": 1, // 是否定制 0 非定制 1 定制 （**请勿使用此字段显示明细页，请使用customFlgMore来控制明细定制状态）
            "customFlgMore": 0 // 是否定制 0 非定制 1 常规定制 2 专属定制
            "customerIds": [ // 专属定制客户ID数组
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
            "businessTypes": [
                {
                    "code": "-119-121-",
                    "deleteFlg": 0,
                    "gIcon": "",
                    "hasProductCnt": 1,
                    "id": 121,
                    "level": 2,
                    "name": "东北菜系",
                    "parentId": 119,
                    "pyCode": "",
                    "sIcon": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190108092630882-7112.jpg",
                    "showFlg": 1,
                    "wIcon": ""
                },
                ......
            ],
            "createTime": "2018-12-06 07:27:16", // 创建时间
            "customFlg": 1,
            "customFlgMore": 1,
            "customerIds": null,
            "customers": null,
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
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/product/guige
#### 参数
    keyword: "" // 模糊查询品名、品号
    status: "NORMAL" // 状态 NORMAL 上架 LOCK 下架
    customFlg: 0 // 客户定制 0 常规品 1 定制品
    customFlgMore: 0 // 客户定制 0 常规品 1 定制品 2 专属定制品
    customerId: 1 // 客户ID， 传递客户ID 是在进行产品定价的时候 需要带出产品的客户签约价格
    pathId: "0101" // 区域ID， 传递区域ID 是在进行产品定价的时候 需要带出产品的区域价格
    supplierId: 1 // 供应商ID， 传递供应商ID 是在进行产品定价的时候 需要带出产品的供应商价格
    depotId: 1 // 仓ID， 传递仓ID，是需要产品匹配库存存量
    productunitIds[]:1,2,7  // 产品规格
    @@isAsign: 0              // 0 未签约 1 已签约
    ---------------------------以下三个has开头的参数决定是否查询价格和库存 ture查询 & false不查询-----------------------------------------
    hasPrice:           // 客户某个区域产品价格
		customerId
		pathId
	hasStock:           // 客户某个区域产品库存, pathId & depotId 二选一
		customerId
		pathId
		depotId
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
                        @@"customFlgMore": 0, // 定制标志 0 非定制 1 普通定制 2 专属定制
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

### CP-17.  产品下架
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
   
 
### CP-106. 操作日志列表
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
                }
            ],
            "pageNo": 1,
            "total": 4
        }
    } 

### CP-107. 产品销售区域修改
#### 模块负责人
    尹洪明
#### 请求
    PUT     /v2/product/area/{productId}
#### 参数
    *productId  // 产品id
    {
        *"pathid": ["06","0602","060101"]
    }
#### 响应
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }
    
### CP-16.批量修改产品业态
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

### CP-50.产品业态查询
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
                "wIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/w02.png",
                "hasProductCnt": 6,     // 产品数
                "id": 16,               // 业态id
                "level": 1,             // 业态等级
                "name": "西餐西快",     // 名称
                "parentId": 0,          // 上级业态id
                "pyCode": "",           // 拼音编码
                "sIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/s02.png",
                "showFlg": 1,           // 是否显示 1 显示 0 隐藏
                @"miniFlg": 1,         // 小程序开关 1 开启 0 关闭
                // 小程序图标
                @"mIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/s02.png",
                // 风格入口图片
                @"styleUrl": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190121132417926-4745.png"
            }
        ]
    }

### CP-51.产品业态新增
#### 模块负责人
    尹洪明
#### 请求
    POST /v2/product/businessType
#### 参数
    {
        "name": "xx", // 餐饮业态名称
        "showFlg": 1, // 是否显示 0 不显示 1 显示
        "parentId": 1, // 父餐饮业态ID
        "sicon":"http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/s02.png",
        @"micon":"http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/s02.png",
        @"miniFlg":1,  // 小程序开关 1 开启 0 关闭
        @"styleUrl":"http://asae.oss-cn-beijing.aliyuncs.com/ANET20190121132417926-4745.png"
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": 1 // 新增后业态ID
    }

### CP-52.产品业态名称修改
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

### CP-54.产品业态修改
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/product/businessType/{id}
#### 参数
    *id: 1 // 业态id
    {
        "name": "xx", // 餐饮业态名称
        "showFlg": 1, // 是否显示 0 不显示 1 显示
        "parentId": 1, // 父餐饮业态ID
        "sicon":"http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/s02.png",
        @"micon":"http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/s02.png",
        @"miniFlg":1,  // 小程序开关 1 开启 0 关闭
        @"styleUrl":"http://asae.oss-cn-beijing.aliyuncs.com/ANET20190121132417926-4745.png"
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CP-55.产品业态详情
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/product/businessType/detail/{id}
#### 参数
    *id: 1 // 业态id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "code": "-121-",
            "deleteFlg": 0,
            "gIcon": "",
            "hasProductCnt": 0,
            "id": 121,                  // 业态id
            "level": 1,
            "name": "小程序二级业态",      // 业态名  
            "parentId": 0,
            "pyCode": "",
            "wIcon": ""
            "showFlg": 0,               // 业态是否前台显示
            // App图标
            "sIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/s02.png",
            "miniFlg": 0,    // 小程序开关 1 开启  0 关闭 
            // 小程序图标
            "mIcon": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190121132417926-4745.png",
            // 风格入口图片
            "styleUrl": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190121132417926-4745.png",
        }
    }
  
      
### CP-101. 新增断货
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
 
### CP-56.产品属性分类新增
#### 模块负责人
    尹洪明
#### 请求
    POST /v2/product/attr/category
#### 参数
    {
        *"name":"特殊安全库存"
    }
#### 响应
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }
 
### CP-57.产品属性分类列表
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/product/attr/category
#### 参数
    无
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "createTime": "",
                "deleteFlg": 0,
                "id": 1,                // 分类id
                "name": "特殊安全库存"    // 分类名称
            }
        ]
    }
 
### CP-58.产品属性新增
#### 模块负责人
    尹洪明
#### 请求
    POST /v2/product/attr
#### 参数
    {
        "categoryId":1,                     // 分类id
        "name":"运输周期超过一周以上的产品", // 属性名
        "depotSafeFlg":1            // 是否计入安全库存(0 不计入 1 计入)
    }
#### 响应
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }

### CP-59.产品属性修改
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/product/attr/{id}
#### 参数
    *id // 属性id
    {
        "categoryId":1,                     // 分类id
        "name":"运输周期超过一周以上的产品", // 属性名
        "depotSafeFlg":1            // 是否计入安全库存(0 不计入 1 计入)
    }
#### 响应
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }
    
### CP-60.产品属性删除
#### 模块负责人
    尹洪明
#### 请求
    DELETE /v2/product/attr/{id}
#### 参数
    *id // 属性id
#### 响应
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    } 
### CP-61.产品属性列表
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/product/attr
#### 参数
    keyword // 属性名称
    categoryId // 分类id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "categoryId": 0,
                "categoryName": "特殊安全库存",       // 属性分类名
                "createTime": "",
                "deleteFlg": 0,
                "depotSafeFlg": 0,
                "id": 1,                            // 属性id
                "isDepotSafe": "不计算安全库存",       // 属性特权
                "name": "运输周期超过一周以上的产品",    // 属性名称
                "productId": 0
            }
        ]
    }

### CP-62.产品属性详情
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/product/attr/detail/{id}
#### 参数
    *id // 属性id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "categoryId": 1,        // 分类id
            "createTime": "",
            "deleteFlg": 0,
            "depotSafeFlg": 1,                      // 是否计入安全库存(0 不计入 1 计入)
            "id": 1,                                // 属性id
            "name": "运输周期超过一周以上的产品"         // 属性名称
        }
    }  
    
### CP-108. 产品属性查询
#### 模块负责人
    尹洪明
#### 请求
    GET     /v2/product/attr/group
#### 参数
    *attrId[]: 1   // 属性id 
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "createTime": "",
                "deleteFlg": 0,
                "id": 2,                // 分类id
                "name": "属性分类二",    // 分类名
                "productAttr": [
                    {
                        "categoryId": 2,
                        "createTime": "",
                        "deleteFlg": 0,
                        "depotSafeFlg": 0,
                        "id": 2,        // 属性id
                        "name": "特惠"    // 属性名
                    }
                ]
            },
            {
                "createTime": "",
                "deleteFlg": 0,
                "id": 1,
                "name": "属性分类一",
                "productAttr": [
                    {
                        "categoryId": 1,
                        "createTime": "",
                        "deleteFlg": 0,
                        "depotSafeFlg": 0,
                        "id": 3,
                        "name": "特性图"
                    },
                    {
                        "categoryId": 1,
                        "createTime": "",
                        "deleteFlg": 0,
                        "depotSafeFlg": 0,
                        "id": 1,
                        "name": "特长属性"
                    }
                ]
            }
        ]
    }
    
     
### CP-109. 产品关联属性
#### 模块负责人
    尹洪明
#### 请求
    PUT     /v2/product/attr/product2attr/{productIds}
#### 参数
    *productIds  // 1,2,3
    [
        {
            *"categoryId": 1,
            *"attrId": 1
        },
        {
            "categoryId": 1,
            "attrId": 2
        },
        {
            "categoryId": 2,
            "attrId": 3
        }
    ]
#### 响应    
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }
    
### CP-151. 期货现货新增
#### 模块负责人
    尹洪明
#### 请求
    POST     /nowfuture
#### 参数  
    [
        {
            "depotId": 40,
            "productId": 4749,
            "type": "NOW"
        },
        {
            "depotId": 40,
            "productId": 4748,
            "type": "FUTURE"
        },
        {
            "depotId": 40,
            "productId": 4747,
            "type": "NOW"
        }
    ]
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
### CP-152. 期货转现货
#### 模块负责人
    尹洪明
#### 请求
    PUT     /nowfuture/now/{id}
#### 参数    
    *id // 期货现货id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
   
### CP-153. 现货转期货
#### 模块负责人
    尹洪明
#### 请求
    PUT     /nowfuture/future/{id}
#### 参数    
    *id // 期货现货id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

   
### CP-154. 期货现货取消手动
#### 模块负责人
    尹洪明
#### 请求
    PUT     /nowfuture/cancel/{id}
#### 参数  
    *id // 期货现货id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }  


   
### CP-155. 期货现货列表
#### 模块负责人
    尹洪明
#### 请求
    GET     /nowfuture
#### 参数    
    keyword // 品名、品号
    type    // NOW 现货 FUTURE 期货
    pageNo      // 默认1
    pageSize    // 默认25
#### 响应    
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "create_time": "",
                    "customFlg": 1,         // 0 非定制 1 普通定制 2 专属定制
                    "depotId": 40,
                    "fromType": "AUTO",     // AUTO 自动  HANDWORK 手动
                    "handworkType": null,
                    "id": 8,                // 期货现货id
                    "pno": "1866",          // 品号
                    "productId": 4748,
                    "productName": "唐扬鱿鱼圈", // 品名
                    "type": "FUTURE"        // NOW 现货 FUTURE 期货
                }
            ],
            "pageNo": 0,
            "total": 0
        }
    }
   
### CP-156. 期货现货统计列表
#### 模块负责人
    尹洪明
#### 请求
    GET     /nowfuture/profile/{depotId}
#### 参数   
    *depotId // 仓库id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "allCount": 380,                // 全部产品
                "customerCount": 5735,          // 近三个月服务客户
                "depotId": 40,                  // 仓库id
                "depotName": "DC（大连仓）ASA",      // 仓库名
                "futureCount": 199,             // 期货产品
                "nowCount": 181,                // 现货产品
                "outCategory": 297,             // 上月出库品类
                "outJian": 1100608              // 上月出库件数
            }
        ]
    }

   
### CP-157. 期货现货日志
#### 模块负责人
    尹洪明
#### 请求
    GET     /nowfuture/log/{depotId}
#### 参数   
    *depotId    // 仓库ID
    pageNo      // 默认1
    pageSize    // 默认25
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
                    "opInfo": "仓库【DC（大连铁越仓）】产品【榴莲大福】现货 -> 期货",  // 操作内容
                    "opRole": 0,
                    "opTime": "2019-03-25 14:08:58",                          // 操作时间
                    "opUser": 0,
                    "opUserName": "系统操作",                                   // 操作人
                    "settingId": 4
                }
            ],
            "pageNo": 0,
            "total": 0
        }
    }  
### CP-201. 查询热搜信息
#### 模块负责人
    王子悦
#### 请求
    GET /v2/productkeyword
#### 参数    
    keyword             // 热搜词
    type                // QUERY 关键词 DETAIL 关联产品 MARKET 关联活动
    businesstypeId      // 关联业态id
    deleteFlg           // 状态 0 正常 1 作废
    pageNo              // 页码
    pageSize            // 页条数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {//此热搜关联活动数据，market里加载活动信息，product是null，relateInfo是market_id
                    "businesstypeRange": "PART",
                    "createRole": 1,
                    "createTime": "2019-03-25 13:18:19",
                    "createUser": 518,
                    "createUsername": "孙启萌",
                    "deleteFlg": 0,
                    "id": 7,
                    "keyword": "本季热卖鞋品3",
                    "market": {
                        "bannerPic": "",
                        "createTime": "2018-03-13 14:00:12",
                        "createUser": 101,
                        "createUserName": "樊嘉辉",
                        "customerRange": "NEW",
                        "deleteFlg": 0,
                        "effectEtime": "2018-04-30 23:59:59",
                        "effectStime": "2018-03-01 00:00:00",
                        "id": 5,
                        "name": "新用户满减活动",
                        "overdue": 0,
                        "remark": "",
                        "type": "COUPON"
                    },
                    "modifyTime": "2019-03-25 13:18:19",
                    "product": null,
                    "productBusinessTypepArray": [
                        {
                            "code": "-34-",
                            "deleteFlg": 0,
                            "gIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/g05.png",
                            "hasProductCnt": 0,
                            "id": 34,
                            "level": 1,
                            "mIcon": "",
                            "miniFlg": 0,
                            "name": "农贸市集",
                            "parentId": 0,
                            "parentName": "",
                            "pyCode": "NSJ",
                            "sIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/s05.png",
                            "showFlg": 1,
                            "styleUrl": "",
                            "wIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/w05.png"
                        }
                    ],
                    "relateInfo": "5",
                    "type": "MARKET"
                },
                {//此热搜关联产品数据，market是null，product里加载产品数据，relateInfo是product_id
                    "businesstypeRange": "PART",
                    "createRole": 1,
                    "createTime": "2019-03-25 13:16:19",
                    "createUser": 518,
                    "createUsername": "孙启萌",
                    "deleteFlg": 0,
                    "id": 6,
                    "keyword": "本季热卖鞋品2",
                    "market": null,
                    "modifyTime": "2019-03-25 13:16:19",
                    "product": {
                        "createTime": "2014-06-21 11:26:58.0",
                        "customFlg": 0,
                        "deleteFlg": 0,
                        "id": 1,
                        "longName": "香草凤尾虾-专业开背，秘制加工，中西餐厅新食尚~",
                        "mainBgImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/f9ce32e007fc796722466531c86d5cd9.jpg",
                        "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/ec90940549d364b0982427f87dd86747.jpg",
                        "name": "香草凤尾虾",
                        "pno": "0151",
                        "process": 4,
                        "processContent": 1,
                        "processInvoice": 1,
                        "processPrice": 1,
                        "pyAll": "xiangcaofengweixia",
                        "pyCode": "XCFWX",
                        "rangeType": "ALL",
                        "status": "NORMAL",
                        "taxRate": 0
                    },
                    "productBusinessTypepArray": [
                        {
                            "code": "-16-",
                            "deleteFlg": 0,
                            "gIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/g02.png",
                            "hasProductCnt": 0,
                            "id": 16,
                            "level": 1,
                            "mIcon": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190304143700781-1981.png",
                            "miniFlg": 1,
                            "name": "西餐西快",
                            "parentId": 0,
                            "parentName": "",
                            "pyCode": "XCXK",
                            "sIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/s02.png",
                            "showFlg": 1,
                            "styleUrl": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190304143621318-3752.jpg",
                            "wIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/w02.png"
                        }
                    ],
                    "relateInfo": "1",
                    "type": "DETAIL"
                },
                {//此热搜是关键词类型，market是null，product是null，relateInfo是关键词信息
                    "businesstypeRange": "PART",
                    "createRole": 1,
                    "createTime": "2019-03-25 12:01:00",
                    "createUser": 518,
                    "createUsername": "孙启萌",
                    "deleteFlg": 0,
                    "id": 5,
                    "keyword": "本季热卖鞋品2",
                    "market": null,
                    "modifyTime": "2019-03-25 12:01:00",
                    "product": null,
                    "productBusinessTypepArray": [
                        {
                            "code": "-16-",
                            "deleteFlg": 0,
                            "gIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/g02.png",
                            "hasProductCnt": 0,
                            "id": 16,
                            "level": 1,
                            "mIcon": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190304143700781-1981.png",
                            "miniFlg": 1,
                            "name": "西餐西快",
                            "parentId": 0,
                            "parentName": "",
                            "pyCode": "XCXK",
                            "sIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/s02.png",
                            "showFlg": 1,
                            "styleUrl": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190304143621318-3752.jpg",
                            "wIcon": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/w02.png"
                        }
                    ],
                    "relateInfo": "测试关键词",
                    "type": "QUERY"
                }
            ],
            "pageNo": 1,
            "total": 3
        }
    }

### CP-202. 新增热搜信息
#### 模块负责人
    王子悦
#### 请求
    POST v2/productkeyword
#### 参数    
    {
        "keyword":"本季热卖鞋品",//热搜词
        "businesstypeRange":"PART",//关联业态类型 ALL 全部 PART 部分
        "rangeId":"16,34",//关联业态id
        "type":"MARKET",//热搜类型 QUERY 关键词 DETAIL 关联产品 MARKET 关联活动
        "relateInfo":"5"//如果是QUERY，此项内容是关键词。如果是DETAIL或MARKET，此项内容是数据id
    }
#### 响应
    {"code":100000,"msg":"","data":null}

### CP-203. 更新热搜信息
#### 模块负责人
    王子悦
#### 请求
    PUT v2/productkeyword/{id}
#### 参数    
    {
    "keyword":"本季热卖鞋品5",
    "businesstypeRange":"PART",
    "rangeId":"34",
    "type":"MARKET",
    "relateInfo":"5"
    }
#### 响应
    {"code":100000,"msg":"","data":null}

### CP-204. 删除热搜信息
#### 模块负责人
    王子悦
#### 请求
    DELETE v2/productkeyword/{id}
#### 参数    
    id  //热搜信息id
#### 响应
    {"code":100000,"msg":"","data":null} 

### CP-205. 查询热搜信息操作日志
#### 模块负责人
    王子悦
#### 请求
    GET v2/productkeyword/log/{id}
#### 参数    
    id  //热搜信息id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "id": 6,
                    "keywordId": 5,
                    "opInfo": "删除热搜信息",
                    "opRole": 1,
                    "opTime": "2019-03-25 14:21:33",
                    "opUser": 518,
                    "opUsername": "孙启萌"
                },
                {
                    "id": 5,
                    "keywordId": 5,
                    "opInfo": "更新热搜信息",
                    "opRole": 1,
                    "opTime": "2019-03-25 14:02:46",
                    "opUser": 518,
                    "opUsername": "孙启萌"
                },
                {
                    "id": 2,
                    "keywordId": 5,
                    "opInfo": "新增热搜信息",
                    "opRole": 1,
                    "opTime": "2019-03-25 12:01:00",
                    "opUser": 518,
                    "opUsername": "孙启萌"
                }
            ],
            "pageNo": 1,
            "total": 3
        }
    }