
## 仓储接口

### 1.提前入库
#### 模块负责人
    刘宏宇
#### 请求
    PUT /depotstock/in
#### 参数
    {
        "order_ids":"xxx,xxx,xxx",
        "op_tp":"ALL" // ALL 同时增加可用实际 MORE 提前入库 
    }
#### 响应
    {
        "flg" : 1, // 1 成功  0 失败
        "code": 100000, // 100000 成功， 其余返回为失败
        "msg": "", // 错误信息
        "data": null
    }

### 2.取消提前入库
#### 模块负责人
    刘宏宇
#### 请求
    PUT /depotstock/cancel
#### 参数
    {
        "order_ids": "xxx, xxx, xxx",
        "op_tp": "ENABLE" // ENABLE 取消可用库存 MORE 取消提前入库 
    }
#### 响应
    {
        "flg" : 1, // 1 成功  0 失败
        "code": 100000, // 100000 成功， 其余返回为失败
        "msg": "", // 错误信息
        "data": [
            {
                "platform_id" : 1, // 平台ID
                "depot_id": 50, // 仓ID
                "product_id": 1, // 产品ID, 注意返回的是我们WMS的产品ID，对应L网的 third_pno
                "product_name": "xxx" ,// 产品名
                "pno" : "xxx", // 品号
                "left_amount": 0, // 不足数量
                "left_amount_jian": 0, // 不足数量件
                "left_amount_san": 0, // 不足数量散
            }
        ]
    }