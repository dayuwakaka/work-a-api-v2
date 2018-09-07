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




