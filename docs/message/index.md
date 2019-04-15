## 消息推送接口

### TS-1 获取消息推送列表
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
                    "relationValue": "354", // 关联值
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
    
### TS-2 新增消息推送
#### 模块负责人
    梁铁骐
#### 请求
    POST /v2/message
#### 参数
    {
    	"message": {
    		"title": "2019-04-12测试",
    		"content": "你好么志勇",
    		"relationValue": "https://www.baidu.com/",
    		"type": "NOTICE",
    		"pushTime": "2019-04-13 00:00:00",
    		"rangeType": "CUSTOMER"
    	},
    	"messageRanges": [
    		{
    			"type": "CUSTOMER",
    			"rangeId": 2434
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
    
### TS-3 获取消息推送日志列表
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