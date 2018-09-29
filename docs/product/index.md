## 产品接口
### CP-1. 产品规格列表
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

### CP-100.产品业态查询
#### 请求

    GET /v2/product/businessType
    
#### 参数

    *parentId: 0 // 拉去根分类传递0
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "code": "01", // 业态Code
                "deleteFlg": 0,
                "id": 1, // 业态ID
                "level": 1,
                "name": "中餐", // 业态名
                "parentId": 0, // 父业态ID
                "pyCode": "ZC", // 业态拼音
                "sort": 50 
            }
        ]
    }

### CP-101. 新增断货

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