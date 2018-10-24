## 发票
### FP-1. 发票版本新增
#### 请求

    POST    /v2/invoice/version
    
#### 参数

    {
    	*"version":"1.0.0",
    	*"effectTime":"2018-10-24 14:22:30"
    }
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
### FP-2. 发票版本修改
#### 请求

    PUT    /v2/invoice/version/{id}
    
#### 参数

    *id  //版本id
    // json body
    {
    	*"version":"1.0.0",
    	*"effectTime":"2018-10-24 14:22:30"
    }
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": null
    }

    
### FP-3. 发票版本列表-分页
#### 请求

    GET    /v2/invoice/version
    
#### 参数

    version // 版本号 
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "createRole": 0,
                    "createTime": "2018-10-24", // 创建时间
                    "createUser": 0,
                    "createUserName": "樊嘉辉", // 创建人
                    "deleteFlg": 0,
                    "effectTime": "2018-10-26", // 启用时间
                    "id": 1,                    // 版本id
                    "modifyTime": "",
                    "version": "1.0.4"          // 版本号
                }
            ],
            ......
            "pageNo": 1,
            "total": 1
        }
    }       
    
    
### FP-4. 发票版本删除
#### 请求

    DELETE    /v2/invoice/version/{id}
    
#### 参数

    *id     //版本id
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": null
    }

        