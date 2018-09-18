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

#### 101.1 请求URL
    /v2/product/lack
    
#### 101.2 请求类型
    POST
    
#### 101.3 请求参数
|参数|名称|描述|
|---|---|---|
|productIds|产品列表|必|
|startTime|开始时间|必 2018-08-29 00:00:00|
|endTime|结束时间|必 2018-08-31 23:59:59|
|note|备注|

#### 101.4 请求示例：
    {
    	"productIds":[3182,3180,3176],
    	"startTime":"2018-09-12 10:10:10",
    	"endTime":"2018-09-22 10:10:10",
    	"note":"second"
    }

#### 101.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 101.6 返回示例
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }
   
### CP-102. 断货列表

#### 102.1 请求URL
    /v2/product/lack
    
#### 102.2 请求类型
    GET
    
#### 102.3 请求参数
|参数|名称|描述|
|--- |--- |--- |
|keyword|品号/品名|
|state|状态|noramal 正常 lock 锁定 delete 作废 invalid 失效|
|buttonPermissionFlg|操作按钮开关|0 带操作列表 1 无操作列表 默认 1|
|pageNum|页码|默认1|
|pageSize|页条数|默认25|

#### 102.4 请求示例
    无

#### 102.5 返回值
|参数|名称|描述|
|---|---|---|
|id|断货ID|
|productId|产品ID|
|pno|产品编号|
|productName|产品名称|
|productStatus|产品状态|'NORMAL' 正常 ,'CUSTOM' 定制,'LOCK' 锁定|
|productType|产品分类|
|unitGuige|单位规格|大单位：大规格,小单位：小规格|
|startTime|断货开始时间|
|endTime|断货结束时间|
|state|断货状态| normal 正常 lock 锁定  delete 作废 invalid 失效|
|note|

#### 102.6 返回示例
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
                {
                    "deleteButton": false,
                    "lockButton": true,
                    "unlockButton": false,
                    "updateButton": true,
                    "logButton": true
                },
                {
                    "deleteButton": false,
                    "lockButton": true,
                    "unlockButton": false,
                    "updateButton": true,
                    "logButton": true
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "endTime": "2018-09-22",
                    "id": 43,
                    "note": "",
                    "pno": "0990",
                    "productId": 3182,
                    "productName": "金丝榴莲酥",
                    "productStatus": "",
                    "productType": "",
                    "startTime": "2018-09-12",
                    "state": "NORMAL",
                    "unitGuige": "袋：200g(10枚）/袋,件：200g(10枚）/袋*20袋"
                },
                {
                    "endTime": "2018-09-22",
                    "id": 44,
                    "note": "",
                    "pno": "LB1125",
                    "productId": 3180,
                    "productName": "盈泰骨肉相连",
                    "productStatus": "",
                    "productType": "",
                    "startTime": "2018-09-12",
                    "state": "NORMAL",
                    "unitGuige": "袋：900g/袋,件：900g/袋*10袋"
                },
                {
                    "endTime": "2018-09-22",
                    "id": 45,
                    "note": "",
                    "pno": "LB1015",
                    "productId": 3176,
                    "productName": "芒果奶茶粉",
                    "productStatus": "",
                    "productType": "饮料冲调/饮料",
                    "startTime": "2018-09-12",
                    "state": "NORMAL",
                    "unitGuige": "袋：1kg/袋,件：1kg/袋*12袋"
                }
            ],
            "pageNo": 1,
            "total": 5
        }
    }


### CP-103. 断货详细信息

#### 103.1 请求URL
    /v2/product/lack/detail
    
#### 103.2 请求类型
    GET
    
#### 103.3 请求参数
|参数|名称|描述|
|---|---|---|
|lackId|断货ID|
 
#### 103.4 请求示例
    无
    
#### 103.5 返回值
|参数|名称|描述|
|---|---|---|
|id|断货ID|
|productId|产品ID|
|pno|产品编号|
|productName|产品名称|
|productStatus|产品状态|'NORMAL' 正常 ,'CUSTOM' 定制,'LOCK' 锁定|
|productType|产品分类|
|unitGuige|单位规格|大单位：大规格,小单位：小规格|
|startTime|断货开始时间|
|endTime|断货结束时间|
|state|断货状态| normal 正常 lock 锁定  delete 作废 invalid 失效|
|note|

#### 103.6 返回示例
    {
        "code": 100000,
        "msg": "",
        "data": {
            "endTime": "2018-09-22",
            "id": 43,
            "note": "",
            "pno": "0990",
            "productId": 3182,
            "productName": "金丝榴莲酥",
            "productState": "NORMAL",
            "productType": "",
            "startTime": "2018-09-12",
            "state": "NORMAL",
            "unitGuige": ""
        }
    }
    
### CP-104.修改状态 锁定、解锁、作废

#### 104.1 请求URL
    /v2/product/lack/state/{id}
    
#### 104.2 请求类型
    PUT
    
#### 104.3 请求参数

|参数|名称|描述|
|---|---|---|
|state|normal 正常 lock 锁定  delete 作废 |这个参数很难描述，直接通过请求体传递值，不能有键|
    
#### 104.4 请求示例
 normal/lock/delete


#### 104.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 104.6 返回示例
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }
 
   
### CP-105. 断货修改

#### 105.1 请求URL
    /v2/product/lack/{id}
    
#### 105.2 请求类型
    PUT
    
#### 105.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|断货ID|
|startTime|开始时间|必 2018-08-29 00:00:00|
|endTime|结束时间|必 2018-08-31 23:59:59|
|note|备注|
    
#### 105.4 请求示例
    {
        "productId":1800,
    	"startTime":"2018-09-12 10:10:10",
    	"endTime":"2018-09-22 10:10:10",
    	"note":"second"
    }


#### 105.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|

#### 105.6 返回示例
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }
 
 
### CP-106. 操作日志列表

#### 106.1 请求URL
    /v2/product/lack/log
    
#### 106.2 请求类型
    GET
    
#### 106.3 请求参数
|参数|名称|描述|例子
|---|---|---|---|
|lockId|断货ID|
    
#### 106.4 请求示例
    无

#### 106.5 返回值
|参数|名称|描述|
|---|---|---|
|note|备注|
|operTime|操作时间|
|operUserName|操作人|
|content|操作内容|

#### 106.6 返回示例
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": null,
            "dataSums": null,
            "datas": [
                {
                    "content": "新增断货",
                    "id": 0,
                    "lackIds": null,
                    "note": "",
                    "operTime": "2018-09-12 10:55:58",
                    "operUser": 0,
                    "operUserName": "樊嘉辉"
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