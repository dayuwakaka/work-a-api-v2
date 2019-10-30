
## 金蝶

### JD-1. 客户
#### 类型
  CUSTOMER
#### JSON结构
    {
      "customerId": 1 // 客户ID
      "authenNo":"xx" // 第三方认证号
      "customerType": "COMPANY" // 客户类型： COMPANY 公司 INDIVIDUALLY 个体工商 PERSON 个人
      "invoiceType": "NORMAL" // 发票类型： NORMAL 普票 SPECIAL 专票
      "deliverAddress": "xxx" // 邮寄地址
      "email": "xxx" // email
      "contactName": "xxx" // 联系人
      "mobile": "xxx" // 手机
      "status": "EMPYT" // 状态：EMPTY 待维护 NORMAL 正常 ASKFOR 待审核 REFUSE 拒绝
      "invoiceInfoCompany": {
        "name": "xxx" // 发票名头
        "taxCode": "xxx" // 发票税号
        "address": "xxx" // 地址
        "mobile": "xxx" // 联系电话
        "bankName": "xxx" // 开户行
        "bankNo": "xxx" // 银行账号
        "legalPerson": "xxx" // 法人
      },
      "invoiceInfoPerson": {
        "name": "xxx" // 发票名头
        "cardNo": "xxx" // 身份证号
      }
    }

### JD-2. 供应商
#### 类型
  SUPPLIER
#### JSON结构
  {
    "id": 1 // 供应商ID
    "name": "xxx" // 供应商简称
    "payMode": "INBUY" // 支付方式 INBUY 入结 OUTBUY 出结
    "account": "xxx" // 账号
    "status": "NORMAL" // 状态 NORMAL 正常 LOCK 锁定
    "taxCode": "xxx" // 税号
    "shortName": "xxx" // 供应商全称（注意，我们简称、全称是反着存的）
    "companies": [
      {
        "name": "xxx" // 公司名
        "code": "xxx" // 财务标识码
        "createTime": "xxx" // 创建时间
      }
    ],
    "supplierContacts": [
      {
        "supplierId": 1 // 供应商ID
        "contactName": "xxx" // 联系人
        "contactMobile": "xxx" // 手机号
        "contactPathId": "xxx" // 联系pathid
        "pathName": "xxx" // 联系pathid名
        "contactAddress": "xxx" // 联系地址
        "defaultFlg": 1 // 是否默认 1 默认 0 非默认
        "remark": "xxx" // 备注
      }
    ]
  }

### JD-3. 产品
#### 类型
  PRODUCT
#### JSON结构
  {
    "product": {
      "id": 1 // 产品ID
      "pno": "xxx" // 品号
      "name": "xxx" // 品名
      "longName": "xxx" // 产品长名
      "pyCode": "xxx" // 拼音简码
      "pyAll": "xxx" // 拼音全码
      "mainImg": "xxx" // 产品主图
      "mainBgImg": "xxx" // 产品背景图
      "customFlg": "xxx" // 是否定制 0 非定制 1 2 定制
      "status": "NORMAL" // 状态 NORMAL 正常 LOCK 锁定
      "productExtra": {
        "place": "xxx" // 产地
        "standards": "xxx" // 标准号ID
        "standardsName":"xxx" // 标准号名
        "attributes": "xxx" // 产品标准分类ID
        "attributeName": "xxx" //产品标准分类
        "material": "xxx" // 配料
        "cookWay": "xxx" // 烹饪方法
        "barCode": "xxx" // 条码
        "saveType": "NORMAL" // 存储类型 NORMAL 常温 ALL 无要求 FROZEN 冷冻
        "store": "xxx" // 保存方法
        "shelfLife": "xxx" // 保质期
        "description": "xxx" // 商品描述
      },
      "productUnits": [
        {
          "productId": 1 // 产品ID
          "guige": "xx" // 规格
          "unitId": 1 // 单位ID
          "unit": "件" // 单位名
          "perunit": 10 // 转化率
          "grossweight": 10 // 毛重
          "netweight": 10 // 净重
          "length": 1 // 长
          "width": 1 // 宽
          "height": 1 // 高
          "cubage": 1 // 体积
        }
      ]
    },
    "productTax": {
      "taxRate": 0.3 // 产品税率
      "taxCategory": 1 // 税收分类ID
      "taxCategoryGroup": "xxx" // 税收8大类
    }
  }

### JD-4. 订单SA
#### 类型
  SA
#### JSON结构
  {
    "orderSa": {
      "orderId": "xxx" // 订单ID
      "customerId": 1 // 客户ID
      "fromDepotId": 1 // 出库仓ID
      "receiveId": 1 // 联系人ID
      "payFlg": 1 // 是否付款 0 未付款 1 付款
      "status": "SEND" // SEND 发出 COMPLETE 完成
      "jian": 1 // 件
      "san": 1 // 散
      "activeId": 1 // 活动ID
      "couponId": 1 // 优惠券ID
      "rebateId": 1 // 返利券ID
      "price": 10 // 价格
      "rebatePrice": 1.0 // 返利金额
      "discountPrice": 1.0 // 折扣金额
      "depositPrice": 1.0 // 订金金额
      "apPrice": 1.0 // 调价金额
      "freight": 1.0 // 运费
      "totalprice": 10 // 订单实收
      "paymentType": "CASH" // 支付方式 CASH 现金 CREDIT 账期 DAOFU 到付
      "deliveryType": "DELIVERY" // 配送方式 DELIVERY 配送 SELF 自提
      "splitFlg": 1 // 拆分标记 0 未拆分 1 已拆分
      "planSendTime": "xxxx" // 预计发货时间
      "payTime": "xxx" // 支付时间
      "runTime": "xxx" // 执行时间
      "sendTime": "xxx" // 发出时间
      "completeTime": "xxx" // 完成时间
      "modifyTime": "xxx" // 修改时间
      "remark": "xxx" // 备注
    },
    "orderSaPros": [
      {
        "productId": 1 // 产品ID
        "productUnitId": 1 // 产品规格ID
        "pcount": 10 // 数量
        "price": 1.0 // 成交单价
        "priceFlg":"T" // 成交价格类型 T 特价 S 签约价 Q 区域价 A A价 P P价
        "beforeAskPrice": 0 // 差价单价格
        "afterAskPrice": 0 // 调价单价格
        "beforeApOrderId": "xx" // 差价单号
        "afterApOrderId": "xx" // 调价单号
        "activeId": 1 // 满赠活动ID
        "giftFlg": 0 // 赠品标识 0 非赠品 1 2 赠品
        "beforeAskPriceRemark": "xxx" // 调价单备注
      },
    ],
    "productTaxs": [
      {
        "productId": 1 // 产品ID
        "taxRate": 0.3 // 产品税率
        "taxCategory": 1 // 税收分类ID
        "taxCategoryGroup": "xxx" // 税收8大类
      }
    ],
    "productUnits": [
      {
        "productId": 1 // 产品ID
        "name": "xxx" // 产品名
        "pno": "xxx" // 品号
        "guige": "xxx" // 规格
        "unit": "xxx" // 单位
        "perunit": "xxx" // 转化率
      }
    ]
  }

### JD-5. 订单PA
#### 类型
  PA
#### JSON结构
  {
    "orderPa": {
      "orderId": "xxx" // 订单ID
      "supplierId": 1 // 供应商ID
      "supplierName": "xxx" // 供应商名
      "companyId": 1 // 所属公司
      "contactName": "xxx" // 联系人名
      "contactMobile": "xxx" // 联系电话
      "contactPathId": "xxx" // 联系pathid
      "pathName":"xxx" // 联系pathid名
      "contactAddress": "xxx" // 联系地址
      "depotId": 1 // 仓ID
      "depotName": "xx" // 仓名
      "paymode": "INBUY" // 结算类型 INBUY 入结 OUTBUY 出结
      "status": "SEND" // SEND 发出 COMPLETE 完成
      "jian": 1 // 件
      "san": 1 // 散
      "totalprice": 100 // 总价
      "priceFlg": 0 // 价格调整标识 0 未调整 1 申请中 2 同意
      "deliverType": "SELF" // 配送方式 SELF 子配送 THIRD 亚渔配送
      "planCompleteTime": "xxx" // 计划完成时间
      "planSendTime": "xxx" // 计划发出时间
      "createTime": "xxx" // 计划创建时间
      "runTime": "xxx" // 执行时间
      "sendTime": "xxx" // 发出时间
      "completeTime": "xxx" // 完成时间
      "remark": "xxx" // 备注
      "waybillInfo": "xxx" // 配送单信息
      "type": "NORMAL" // 单据类型 NORMAL 正常单据 CONTROL_PRODUCT 品控单据
    }
    "orderPaPro": [
      {
        "orderId": "xxx" // 订单号
        "productId": 1 // 产品ID
        "productUnitId": 1 // 规格ID
        "batchNo": "xxx" // 批号
        "pcount": 1 // 数量
        "price": 1.0 // 单价
        "totalprice": 1.0 // 小计
        "giftFlg": 0 // 赠品标识 0 非赠品 1 赠品
        "priceFlg": 0 // 价格调整标识 0 未调整 1 申请中 2 同意
        "priceType": 0 // 价格来源 0 定价 1 定量
      }
    ]
    "productTaxs": [
      {
        "productId": 1 // 产品ID
        "taxRate": 0.3 // 产品税率
        "taxCategory": 1 // 税收分类ID
        "taxCategoryGroup": "xxx" // 税收8大类
      }
    ],
    "productUnits": [
      {
        "productId": 1 // 产品ID
        "name": "xxx" // 产品名
        "pno": "xxx" // 品号
        "guige": "xxx" // 规格
        "unit": "xxx" // 单位
        "perunit": "xxx" // 转化率
      }
    ]
    "company": {
      "name": "xxx" // 所属公司名
      "code": "xxx" // 财务标识码
    }
  }

### JD-6. 订单PR
#### 类型
  PR
#### JSON结构
  {
    "orderPr": {
      "orderId": "xxx" // 订单ID
      "supplierId": 1 // 供应商ID
      "companyId": 1 // 公司ID
      "supplierName": "xxx" // 供应商名
      "contactName": "xxx" // 联系人
      "contactMobile": "xxx" // 联系电话
      "contactPathId": "xxx" // 联系pathid
      "pathName": "xxx" // 联系pathid名
      "contactAddress": "xxx" // 联系地址
      "depotId": 1 // 仓ID
      "depotName": "xxx" // 仓名
      "deliverType": "SELF" // 配送方式 SELF 自配送 THIRD 亚渔配送
      "jian": 1 // 件
      "san" : 1 // 散
      "totalprice": 1.0 // 总价
      "status": "SEND" // 状态 SEND 发出 COMPLETE 完成
      "remark": "xxx" // 备注
      "planTime": "xxx" // 计划出库时间
      "createTime": "xxx" // 创建时间
      "runTime": "xxx" // 确认时间
      "sendTime": "xxx" // 发出时间
      "completeTime": "xxx" // 完成时间
    },
    "orderPrPros": [
      {
        "orderId": "xxx" // 订单号
        "productId": 1 // 产品ID
        "productUnitId": 1 // 规格ID
        "pcount": 1 // 数量
        "price": 1.0 // 单价
        "totalprice": 1.0 // 小计
        "giftFlg": 0 // 赠品标识 0 非赠品 1 赠品
      }
    ],
    "productTaxs": [
      {
        "productId": 1 // 产品ID
        "taxRate": 0.3 // 产品税率
        "taxCategory": 1 // 税收分类ID
        "taxCategoryGroup": "xxx" // 税收8大类
      }
    ],
    "productUnits": [
      {
        "productId": 1 // 产品ID
        "name": "xxx" // 产品名
        "pno": "xxx" // 品号
        "guige": "xxx" // 规格
        "unit": "xxx" // 单位
        "perunit": "xxx" // 转化率
      }
    ],
    "company": {
      "name": "xxx" // 所属公司名
      "code": "xxx" // 财务标识码
    }
  }

### JD-7. 订单SR
#### 类型
  SR
#### JSON结构
  {
    "orderSr": {
      "orderId": "xxx" // 订单ID
      "saOrderId": "xxx" // 销售订单ID
      "toDepotId": 1 // 仓ID
      "toDepotName": "xxx" // 仓名
      "status": "COMPLETE" // 完成
      "jian": 1 // 件
      "san": 1 // 散
      "rebatePrice": 1.0 // 返利金额
      "discountPrice": 1.0 // 优惠金额
      "freight": 1.0 // 运费
      "price": 1.0 // 退款额
      "totalPrice": 1.0 // 最终退款额 （退货总额+运费-折扣）
      "remark": "xxx" // 备注
      "passTime": "xxx" // 审核通过时间
      "receiveTime": "xxx" // 签收时间
      "completeTime": "xxx" // 完成时间
      "isFreight": 0 // 是否包含运费 0 不包含 1 包含
    },
    "orderSrPros": [
      {
        "orderId": "xxx" // 订单号
        "productId": 1 // 产品ID
        "productUnitId": 1 // 规格ID
        "pcount": 1 // 数量
        "oldPrice": 1.0 // 原单价
        "price": 1.0 // 退款单价
        "totalprice": 1.0 // 小计
        "giftFlg": 0 // 赠品标识 0 非赠品 1 赠品
      }
    ],
    "productTaxs": [
      {
        "productId": 1 // 产品ID
        "taxRate": 0.3 // 产品税率
        "taxCategory": 1 // 税收分类ID
        "taxCategoryGroup": "xxx" // 税收8大类
      }
    ],
    "productUnits": [
      {
        "productId": 1 // 产品ID
        "name": "xxx" // 产品名
        "pno": "xxx" // 品号
        "guige": "xxx" // 规格
        "unit": "xxx" // 单位
        "perunit": "xxx" // 转化率
      }
    ]
  }

### JD-8. 订单TR
#### 类型
  TR
#### JSON结构
  {
    "orderTr": {
      "orderId": "xxx" // 订单ID
      "fromDepotId": 1 // 出库仓ID
      "fromDepotName": "xxx" // 出库仓名
      "toDepotId": 2 // 入库仓ID
      "toDepotName": "xxx" // 入库仓名
      "status": "SEND" // 状态 SEND 发出 COMPLETE 完成
      "jian": 1 // 件
      "san": 1 // 散
      "runTime": "xxx" // 确认时间
      "sendTime": "xxx" // 发出时间
      "completeTime": "xxx" // 完成时间
      "planSendTime": "xxx" // 计划发出时间
      "planCompleteTime": "xxx" // 计划完成时间
      "remark": "xxx" // 备注
      "waybillInfo": "xxx" // 配送单信息
    },
    "orderTrPros": [
      {
        "orderId": "xxx" // 订单号
        "productId": 1 // 产品ID
        "productUnitId": 1 // 规格ID
        "pcount": 1 // 数量
    ],
    "productTaxs":[
      {
        "productId": 1 // 产品ID
        "taxRate": 0.3 // 产品税率
        "taxCategory": 1 // 税收分类ID
        "taxCategoryGroup": "xxx" // 税收8大类
      }
    ],
    "productUnits": [
      {
        "productId": 1 // 产品ID
        "name": "xxx" // 产品名
        "pno": "xxx" // 品号
        "guige": "xxx" // 规格
        "unit": "xxx" // 单位
        "perunit": "xxx" // 转化率
      }
    ]
  }