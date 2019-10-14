
## 外部订单管理

### WBHZS-1. SKU关联新增
#### 模块负责人
    尹洪明
#### 请求
    POST    /cooperation/sku
#### 参数
    {
        *"cooperationId":"1",            // 合作商ID
        *"cooperationSku":"10034717",    // 第三方sku
        *"productSku":"4806",            // 我方产品ID
        *"productunitSku":"8403"         // 我方产品规格ID
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
   
### WBHZS-2. SKU关联编辑
#### 模块负责人
    尹洪明
#### 请求
    PUT    /cooperation/sku/{id}
#### 参数
    *id     // 关联ID
    {
        *"cooperationId":"1",            // 合作商ID
        *"cooperationSku":"10034717",    // 第三方sku
        *"productSku":"4806",            // 我方产品ID
        *"productunitSku":"8403"         // 我方产品规格ID
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
### WBHZS-3. SKU关联删除
#### 模块负责人
    尹洪明
#### 请求
    DELETE    /cooperation/sku/{id}
#### 参数
    *id     // 关联ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
     
    
### WBHZS-4. SKU关联列表
#### 模块负责人
    尹洪明
#### 请求
    GET     /cooperation/sku
#### 参数
    cooperationId           // 合作商ID
    cooperationSkuKeyword   // 第三方sku
    productSkuKeyword       // 我方产品品号、品名
    status                  // 产品状态
    customFlg               // 定制标志 0 普通品 1 普通定制品 2 专属定制品
    pageNo          // 页码
    pageSize        // 页大小
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
                    "id": 2,                // id
                    "cooperationId": 1,     // 合作商ID
                    "cooperationSku": "10034718",   // 第三方sku
                    "productSku": 4806,         // 我方产品id
                    "productunitSku": 8403,     // 我方产品规格id
                    "pno": "M018C",             // 我方品号
                    "productName": "去皮巴沙鱼柳(300-400)",   // 我方品名
                    "guige": "2kg/袋*4袋",        // 我方产品规格
                    "status": "NORMAL",         // 产品状态
                    "customFlg": 1,             // 定制状态 0 普通品 1 普通定制品 2 专属定制品
                    "unitId": 3,                // 产品单位ID
                    "unitName": "件",            // 产品单位名
                    "createRole": 1,
                    "createTime": "2019-10-12",  // 创建时间
                    "createUser": 518,
                    "createUserName": "孙启萌",    // 创建人
                    "deleteFlg": 0
                }
            ],
            "pageNo": 1,
            "total": 1
        }
    }
     
     
### WBHZS-5. SKU关联详情
#### 模块负责人
    尹洪明
#### 请求
    GET     /cooperation/sku/{id}
#### 参数
    *id     // sku id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "id": 2,                // id
            "cooperationId": 1,     // 合作商ID
            "cooperationSku": "10034718",   // 第三方sku
            "productSku": 4806,         // 我方产品id
            "productunitSku": 8403,     // 我方产品规格id
            "pno": "M018C",             // 我方品号
            "productName": "去皮巴沙鱼柳(300-400)",   // 我方品名
            "guige": "2kg/袋*4袋",        // 我方产品规格
            "status": "NORMAL",         // 产品状态
            "customFlg": 1,             // 定制状态 0 普通品 1 普通定制品 2 专属定制品
            "unitId": 3,                // 产品单位ID
            "unitName": "件",            // 产品单位名
            "createRole": 1,
            "createTime": "2019-10-12",  // 创建时间
            "createUser": 518,
            "createUserName": "孙启萌",    // 创建人
            "deleteFlg": 0
        }
    }
    
    
### WBHZS-11. 客户关联新增
#### 模块负责人
    尹洪明
#### 请求
    POST    /cooperation/customer
#### 参数
    {
        *"cooperationId": "1",              // 合作商ID
        *"cooperationCustomer": "上海嘉悦仓1",   // 关键字
        *"customerId": "33304",         // 我方客户id
        *"deliveryId": "53131"          // 我方客户地址ID
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
    
### WBHZS-12. 客户关联编辑
#### 模块负责人
    尹洪明
#### 请求
    PUT    /cooperation/customer/{id}
#### 参数
    *id     // 关联ID
    {
        *"cooperationId": "1",              // 合作商ID
        *"cooperationCustomer": "上海嘉悦仓1",   // 关键字
        *"customerId": "33304",         // 我方客户id
        *"deliveryId": "53131"          // 我方客户地址ID
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
     
### WBHZS-13. 客户关联删除
#### 模块负责人
    尹洪明
#### 请求
    DELETE    /cooperation/customer/{id}
#### 参数
    *id     // 关联ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
    
    
### WBHZS-14. 客户关联列表
#### 模块负责人
    尹洪明
#### 请求
    GET     /cooperation/customer
#### 参数
    cooperationId           // 合作商ID
    cooperationKeyword   // 关键字
    customerKeyword       // 我方客户名
    pageNo          // 页码
    pageSize        // 页大小
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
                    "id": 1,                // 关联ID
                    "cooperationId": 1,     // 合作商ID
                    "cooperationCustomer": "上海嘉悦仓",     // 关键字
                    "customerId": 33266,                // 我方客户ID
                    "customerName": "甘肃海润冷链食品有限责任公司",       // 我方客户名
                    "customerStatus": "NORMAL",      // 客户状态 NORMAL 正常 LOCK 休眠
                    "deliveryId": 53029,            // 我方客户地址ID
                    "deliveryName": "甘肃/兰州市/城关区 甘肃省兰州市城关区焦家湾路38号华陇饮料厂", // 地址名
                    "deliveryDeleteFlg": 0,         // 收货地址是否删除标记 1 已删除 0 未删除
                    "createRole": 1,
                    "createTime": "2019-10-12", // 创建时间
                    "createUser": 518,
                    "createUserName": "孙启萌", // 创建人
                    "deleteFlg": 0
                }
            ],
            "pageNo": 1,
            "total": 1
        }
    }
    
    
### WBHZS-15. 客户关联详情
#### 模块负责人
    尹洪明
#### 请求
    GET     /cooperation/customer/{id}
#### 参数
    *id     // 关联 id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "id": 1,                // 关联ID
            "cooperationId": 1,     // 合作商ID
            "cooperationCustomer": "上海嘉悦仓",     // 关键字
            "customerId": 33266,                // 我方客户ID
            "customerName": "甘肃海润冷链食品有限责任公司",       // 我方客户名
            "customerStatus": "NORMAL",      // 客户状态 NORMAL 正常 LOCK 休眠
            "deliveryId": 53029,            // 我方客户地址ID
            "deliveryName": "甘肃/兰州市/城关区 甘肃省兰州市城关区焦家湾路38号华陇饮料厂", // 地址名
            "deliveryDeleteFlg": 0,         // 收货地址是否删除标记 1 已删除 0 未删除
            "createRole": 1,
            "createTime": "2019-10-12", // 创建时间
            "createUser": 518,
            "createUserName": "孙启萌", // 创建人
            "deleteFlg": 0
        }
    }
    
### WBHZS-16. 合作商列表
#### 模块负责人
    尹洪明
#### 请求
    GET     /cooperation
#### 参数
    keyword     // 合作商名过滤
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "id": 1,            // 合作商ID
                "name": "美团",       // 合作商名
                "createTime": ""
            }
        ]
    }
        

### WBDD-30 excel定时任务通知A网创建美团订单
#### 模块负责人
    梁铁骐
#### 请求方式
    POST
#### 参数
    {
    	"outerSaOrder": { // 订单主体信息
    		"uploadId": 1, // 上传id
    		"customer": "上海嘉悦仓", // 仓库
    		"orderId": "CG20191014000001", // 采购订单号
    		"createUser": 1, // 创建人id
    		"createUserName": "123123123", // 创建人名称
    		"createRole": 1, // 创建角色
    		"cooperationId": 1 // 合作商id
    	},
    	"outerSaOrderPros": [ // 订单产品信息
    		{
    			"orderId": "CG20191014000001", // 美团单号
    			"sku": "10034716", // sku
    			"productName": "香草凤尾虾", // 产品名称（excel里的产品名称）
    			"skuName": "10KG/箱", // 规格名称（excel里的规格名称）
    			"cnt": 10, // 数量
    			"price": 165, // 单价
    			"totalprice": 120 // 产品小计
    		}
    	]
    }

















