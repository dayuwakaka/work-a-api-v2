## 消息推送接口

### XXTS-1 获取消息推送列表
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/message
#### 参数
    *buttonPermissionFlg: 是否获取按钮权限
    title: 推送名称
    startDate: 开始时间
    endDate: 结束时间
    marketId：活动id
    status：状态
    pageNo：
    pageSize：
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "delButton": true // 删除按钮
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "content": "你好么志勇", // 推送内容
                    "createTime": "2019-04-12 11:35:47", // 创建时间
                    "createUserName": "系统操作", // 创建人
                    "id": 4, // 主键id
                    "pushTime": "2019-04-13 00:00:00", // 推送时间
                    "rangeType": "CUSTOMER",
                    "readNum": 0, // 查看数
                    "relationName": "阶梯转每满测试", // 关联活动/公告
                    "relationValue": "354", // 关联值 （url、活动id）
                    "marketType": "GIFT", // 活动类别
                    "sentNum": 1, // 到达数
                    "status": "UNSENT", // 状态 UNSENT：未发送 SENT：已发送
                    "title": "2019-04-12测试", // 推送名称
                    "totalNum": 1, // 总数
                    "type": "ACTIVITY" // 推送类别
                },
                ...
            ],
        }
    }
    
### XXTS-2 新增消息推送
#### 模块负责人
    梁铁骐
#### 请求
    POST /v2/message
#### 参数
    {
    	"message": {
    		"title": "2019-04-12测试", // 名称
    		"content": "你好么志勇", // 内容
    		"relationValue": "https://www.baidu.com/", // 关联内容 （系统公告-url 优惠促销-活动id）
    		"type": "NOTICE", // 类型 ACTIVITY-优惠促销 NOTICE-系统公告
    		"pushTime": "2019-04-13 00:00:00", // 推送时间（如果选择的是优惠促销，应在活动时间范围内）
    		"rangeType": "CUSTOMER" // 范围类别 ALL - 全部客户，BUSINESSUNIT - 事业部，CUSTOMER - 指定客户，MARKET - 取指定活动范围（当选择优惠促销时默认为MARKET）
    	},
    	"messageRanges": [ // 消息范围， 全部客户 和 优惠促销 不必传范围
    		{
    			"rangeId": 2434 // 范围值
    		}
    	],
    	"onlyCode": "20081210"
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
### XXTS-3 消息推送-作废
#### 模块负责人
    梁铁骐
#### 请求
    DELETE /v2/message/{id}
#### 参数
    *id: 主键id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
### XXTS-4 获取消息推送日志列表
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/message/log
#### 参数
    title: 推送名称
    customerName: 客户名称
    startDate: 开始时间
    endDate: 结束时间
    readFlg：0：未查看 1:已查看
    pageNo：
    pageSize：
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "total": 1, // 总数
            "datas": [
                {
                    "createTime": "2019-04-15 09:13:05", // 到达时间
                    "customer": {
                        "shortName": "么志勇", // 客户名称
                        "type": "P" // 客户类型
                    },
                    "customerId": 2434,
                    "id": 0,
                    "messageId": 0,
                    "readFlg": 0, // 0：未查看 1：已查看
                    "readTime": "", // 查看时间
                    "title": "2019-04-12测试" // 推送名称
                }
            ],
        }
    }

### XXTS-5 消息中心首页数据 for app
#### 模块负责人
    梁铁骐
#### 请求
    GET /router/v5/message/{customerId}/index
#### 参数
    *customerId: 客户id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "ACTIVITY": { // 消息类别 优惠促销
                "createTime": "2019-04-15 09:13:05", // 时间
                "messageNum": 1, // 消息数据
                "title": "2019-04-12测试", // 标题
                "type": "ACTIVITY"
            },
            "NOTICE": { // 消息类别 系统公告
                "createTime": "2019-04-15 09:13:05", // 时间
                "messageNum": 1, // 消息数据
                "title": "2019-04-12测试", // 标题
                "type": "ACTIVITY"
            },
            "ORDER": { // 消息类别 订单通知
                "createTime": "2019-04-15 09:13:05", // 时间
                "messageNum": 1, // 消息数据
                "title": "2019-04-12测试", // 标题
                "type": "ACTIVITY"
            }
        }
    }

### XXTS-6 全部标记已读 for app
#### 模块负责人
    梁铁骐
#### 请求
    PUT /router/v5/message/{customerId}
#### 参数
    *customerId: 客户id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### XXTS-7 标记已读 for app
#### 模块负责人
    梁铁骐
#### 请求
    PUT /router/v5/message/{customerId}/{messageId}
#### 参数
    *customerId: 客户id
    *messageId: 消息id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### XXTS-8 获取优惠促销通知列表 for app
#### 模块负责人
    梁铁骐
#### 请求
    GET /router/v5/message/{customerId}/active
#### 参数
    *customerId: 客户id
    *pageNo: 页码
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "content": "你好么志勇", // 内容
                "pushTime": "2091-05-19 00:00:00", // 推送时间
                "readFlg": 0, // 0：未读 1:已读
                "readTime": "",
                "type": "INVOICE_ASK_FOR" // 消息类别 INVOICE_ASK_FOR：发票信息审核 ORDER：订单通知 ACTIVITY：优惠促销 NOTICE：系统公告
                "relationValue": "354", // 对应的关联值 优惠促销：活动id 系统公告：url 订单通知：订单号
                "title": "2019-04-12测试" // 标题
            }
        ]
    }

### XXTS-9 获取系统公告通知列表 for app
#### 模块负责人
    梁铁骐
#### 请求
    GET /router/v5/message/{customerId}/notice
#### 参数
    *customerId: 客户id
    *pageNo: 页码
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "content": "你好么志勇", // 内容
                "pushTime": "2091-05-19 00:00:00", // 推送时间
                "readFlg": 0, // 0：未读 1:已读
                "readTime": "",
                "type": "INVOICE_ASK_FOR" // 消息类别 INVOICE_ASK_FOR：发票信息审核 ORDER：订单通知 ACTIVITY：优惠促销 NOTICE：系统公告
                "relationValue": "354", // 对应的关联值 优惠促销：活动id 系统公告：url 订单通知：订单号
                "title": "2019-04-12测试" // 标题
            }
        ]
    }

### XXTS-10 获取订单其它通知列表 for app
#### 模块负责人
    梁铁骐
#### 请求
    GET /router/v5/message/{customerId}/other
#### 参数
    *customerId: 客户id
    *pageNo: 页码
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "content": "你好么志勇", // 内容
                "pushTime": "2091-05-19 00:00:00", // 推送时间
                "readFlg": 0, // 0：未读 1:已读
                "readTime": "",
                "type": "INVOICE_ASK_FOR" // 消息类别 INVOICE_ASK_FOR：发票信息审核 ORDER：订单通知 ACTIVITY：优惠促销 NOTICE：系统公告
                "relationValue": "354", // 对应的关联值 优惠促销：活动id 系统公告：url 订单通知：订单号
                "title": "2019-04-12测试" // 标题
            }
        ]
    }

### XXTS-11 app接收消息体
#### 模块负责人
    梁铁骐

    {
        msgType: "ORDER" // 消息类别 INVOICE_ASK_FOR：发票信息审核 ORDER：订单通知 ACTIVITY：优惠促销 NOTICE：系统公告
        title: "订单发货通知",
        body: 您的订单：SA1904100001已发车，请注意查收",
        value: "SA1904100001", // 订单通知时存放订单号 优惠促销时存放活动id 系统公告时存放url
    }



