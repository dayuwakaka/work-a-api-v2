## 消息通知接口

### XXTZ-1.消息列表
#### 模块负责人
    梁铁骑
#### 1.1 请求URL
    /router/v5/notice

#### 1.2 请求类型
    GET

#### 1.3 请求参数
|参数|名称|描述|
|---|---|---|
|*customerId|客户id|
|*msgType|消息类别|ORDER 订单通知 ACTIVITY 优惠促销|
|pageNo|页码|默认1|
|pageSize|页条数|默认25|

#### 1.4 返回示例
    {
        "code": 100000,
        "msg": "",
        "data": [
                {
                    "body": "您的订单号：SA1709，共1475元订单已发出，请留意订单信息。点击推送消息时，进入该订单详情页面。", // 消息内容
                    "createTime": "2017-09-26 14:35:57", // 时间
                    "customerId": 2730,
                    "deleteFlg": 0,
                    "id": 11,
                    "msgType": "ORDER",
                    "msgValue": "SA19012600001", // if msgType=ORDER msgValue就是订单号 else if msgType=ACTIVITY msgValue就是活动id（老数据没有活动id）
                    "pushId": 0,
                    "readFlg": 1, // 是否已读 0 - 否 1 - 是
                    "title": "订单通知" // title 标题
                }
            ]
    }
