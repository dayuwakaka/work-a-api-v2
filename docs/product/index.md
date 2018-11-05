## 产品接口
### CP-1. 产品规格列表
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    GET     /v2/product/guige

#### 参数

    keyword // 品号/品名
    state   // 产品状态 "" 全部 normal 正常 custom 定制 lock 锁定
    productunitIds  // 产品规格id串 3,5,7
    pageNo  // 页码
    pageSize    // 页条数

#### 响应

    {
    	"code": 100000,
    	"msg": "",
    	"data": {
    		"buttonPermissions": null,
    		"dataSums": null,
    		"datas": [{
    			"aPrice": 802.47,                   // 产品A价格
    			"guige": "500g(23-25枚）/盒*20盒",  // 产品规格
    			"pPrice": 650,                      // 蟾皮P价格
    			"perUnit": 0,                       // 单位转换率
    			"pno": "B0391",                     // 品号
    			"productId": 1,                     // 产品id
    			"productName": "测试1",             // 产品名称
    			"productUnitId": 2,                 // 产品规格id
    			"state": "LOCK",                    // 状态 'NORMAL' 正常,'CUSTOM' 定制,'LOCK' 锁定
    			"unitGuige": "件：500g(23-25枚）/盒*20盒",  // 单位规格 单位：规格
    			"unitId": 0                         // 单位编号
    		}],
    		"pageNo": 1,
    		"total": 1
    	}
    }
    

### CP-2. 产品列表
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    GET     /v2/product

#### 参数

    keyword // 品号/品名
    productIds  // 产品规格id串 3,5,7
    pageNo  // 页码
    pageSize    // 页条数

#### 响应

    {
    	"code": 100000,
    	"msg": "",
    	"data": {
    		"buttonPermissions": null,
    		"dataSums": null,
    		"datas": [{
    			"minPerUnit": 12,               // 小规格产品转化率
    			"name": "樊嘉辉的82年凯龙",     // 产品名称
    			"pno": "kailong1982",           // 品号
    			"productBusinessTypes": null,   // 业态列表
    			"productId": 4156,              // 产品id
    			"productTypes": null,           // 产品类型
    			"pyCode": "FJHD8NKL",           // 拼音简码
    			"rename": "小凯龙 大连干啤",    // 别名
    			"state": "NORMAL",              // 状态 'NORMAL' 正常,'CUSTOM' 定制,'LOCK' 锁定
    			"typePathName": "",             // 分类路径 一级分类/二级分类/三级分类
    			"unitGuige": ""                 // 大单位：大规格,小单位：小规格
    		},
    		......
    		],
    		"pageNo": 0,
    		"total": 1
    	}
    }

### CP-90.产品分类查询
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    GET     /v2/product/type
    
#### 参数

    无
    
#### 响应
    // 按照编号正序排
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "code": "01",      //编号
                "deleteFlg": 0,
                "id": 1,            //id
                "isStage": 1,
                "leaf": "N",        //Y 叶子节点 N 不是叶子节点
                "level": 1,         //等级
                "name": "海鲜",     //名称
                "parentId": 0,      //上级id
                "pyCode": "HX",     //拼音编码
                "sort": 99,         // 排序
                "total": 533        // 拥有的产品数量
            },
            {
                "code": "0101",
                "deleteFlg": 0,
                "id": 134,
                "isStage": 1,
                "leaf": "N",
                "level": 2,
                "name": "鱼类",
                "parentId": 1,
                "pyCode": "YL",
                "sort": 1,
                "total": 115
            },
            {
                "code": "010101",
                "deleteFlg": 0,
                "id": 139,
                "isStage": 1,
                "leaf": "Y",
                "level": 3,
                "name": "生鲜鱼",
                "parentId": 134,
                "pyCode": "SXY",
                "sort": 0,
                "total": 52
            },
            {
                "code": "02",
                "deleteFlg": 0,
                "id": 2,
                "isStage": 1,
                "leaf": "N",
                "level": 1,
                "name": "牛肉",
                "parentId": 0,
                "pyCode": "NR",
                "sort": 0,
                "total": 60
            },
            {
                "code": "0201",
                "deleteFlg": 0,
                "id": 3,
                "isStage": 1,
                "leaf": "Y",
                "level": 2,
                "name": "雪龙系列",
                "parentId": 2,
                "pyCode": "XLXL",
                "sort": 0,
                "total": 39
            },
            {
                "code": "0202",
                "deleteFlg": 0,
                "id": 12,
                "isStage": 1,
                "leaf": "Y",
                "level": 2,
                "name": "牛肉系列",
                "parentId": 2,
                "pyCode": "NRXL",
                "sort": 0,
                "total": 21
            }
        ]
    }

### CP-100.产品业态查询
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    GET     /v2/product/businessType
    
#### 参数
                // 获取全部业态时，什么都不传
    parentId: 0 // 获取根分类传递0      
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "code": "01",           // 业态编码
                "deleteFlg": 0,
                "id": 1,                // 业态id
                "image": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/01.png",
                "leaf": "N",            // 是否叶子节点 Y 是 N 否
                "level": 1,             // 等级
                "name": "中餐",         // 业态名称
                "parentId": 0,          // 上级业态id
                "pyCode": "ZC23",       // 拼音编码
                "sImage": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/s01.png",
                "sort": 50,             // 排序
                "wImage": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/g01.png"
            },
            {
                "code": "0103",
                "deleteFlg": 0,
                "id": 4,
                "image": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/0103.png",
                "leaf": "Y",
                "level": 2,
                "name": "苏菜",
                "parentId": 1,
                "pyCode": "SC",
                "sImage": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/s0103.png",
                "sort": 2,
                "wImage": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/g0103.png"
            },
            {
                "code": "02",
                "deleteFlg": 0,
                "id": 16,
                "image": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/02.png",
                "leaf": "N",
                "level": 1,
                "name": "西餐",
                "parentId": 0,
                "pyCode": "XC",
                "sImage": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/s02.png",
                "sort": 3,
                "wImage": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/g02.png"
            },
            {
                "code": "0201",
                "deleteFlg": 0,
                "id": 17,
                "image": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/0201.png",
                "leaf": "Y",
                "level": 2,
                "name": "汉堡店",
                "parentId": 16,
                "pyCode": "HBD",
                "sImage": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/s0201.png",
                "sort": 0,
                "wImage": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/g0201.png"
            },
            {
                "code": "0202",
                "deleteFlg": 0,
                "id": 18,
                "image": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/0202.png",
                "leaf": "Y",
                "level": 2,
                "name": "西餐厅",
                "parentId": 16,
                "pyCode": "BSD",
                "sImage": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/s0202.png",
                "sort": 0,
                "wImage": "http://asa-app.oss-cn-beijing.aliyuncs.com/businesstype/g0202.png"
            }
        ]
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
    	"productIds":[3182,3180,3176],      // 产品列表
    	"startTime":"2018-09-12 10:10:10",  // 开始时间
    	"endTime":"2018-09-22 10:10:10"    // 结束时间
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

    id      // 断货id
 
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

    {
        "state":"normal"    // normal 解锁 lock 锁定  delete 作废
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

    id  // 断货id
    {
    	"startTime":"2018-09-12 10:10:10",
    	"endTime":"2018-09-22 10:10:10"
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

    id      // 断货id
    
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