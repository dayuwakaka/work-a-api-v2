
## 仓储接口

### 1.提前入库接口
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

### 2.取消提前入库接口
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

### 3.营运外库存重占接口（只支持营运外业务，A网业务提交到此接口会被拦截）
#### 模块负责人
    刘宏宇
#### 请求
    POST /depotstock/occupy/retry
#### 参数
    {
      "cancelPros":[ // 需要取消库存的原始明细
        {
          "platform_id": 33266,
          "depot_id": 40,
          "order_id": "WO190626000405",
          "order_type": "OUT", // 只接受OUT
          "third_order_id": "NO201906270005",
          "third_order_type": "OUT", // 'SA','SR','PA','PR','IN','OUT','TR' 别忘记将NI转为IN。NO转为OUT @刘森
          "paymode": "NONE",
          "supplier_id": 0,
          "product_id": 4450, // 仓储体系的产品ID，即lgt_product的third_pno
          "productunit_id": 7934, // 仓储体系的规格ID，即lgt_productunit的third_pno
          "is_gift": 0,
          "perunit": 12,
          "amount": 400,
          "convertamount": 4800 // 最小单位数量
        }
      ],
      "occupyPros":[ // 需要占用库存的新明细
        {
          "platform_id": 33266,
          "depot_id": 40,
          "order_id": "WO190626000405",
          "order_type": "OUT",  // 只接受OUT
          "third_order_id": "NO201906270005",
          "third_order_type": "OUT", // 'SA','SR','PA','PR','IN','OUT','TR' 别忘记将NI转为IN。NO转为OUT @刘森
          "paymode": "NONE",
          "supplier_id": 0,
          "product_id": 4450, // 仓储体系的产品ID，即lgt_product的third_pno
          "productunit_id": 7934, // 仓储体系的规格ID，即lgt_productunit的third_pno
          "is_gift": 0,
          "perunit": 12,
          "amount": 300,
          "convertamount": 3600 // 最小单位数量
        }
      ]
    }
#### 响应
    {
        "flg" : 1, // 1 成功  0 失败
        "code": 100000, // 100000 成功， 其余返回为失败
        "msg": "", // 错误信息
        "data": [ // 若flg = 0，且data不为空，则是库存不足。  若flg = 0，且data为空，则是普通错误，显示msg即可
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