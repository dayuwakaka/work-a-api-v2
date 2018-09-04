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
                "code": "01",
                "deleteFlg": 0,
                "id": 1,
                "level": 1,
                "name": "中餐",
                "parentId": 0,
                "pyCode": "ZC",
                "sort": 50
            }
        ]
    }




