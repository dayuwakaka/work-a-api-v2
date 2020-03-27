(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{172:function(a,t,e){"use strict";e.r(t);var r=e(0),s=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"content"},[e("h2",{attrs:{id:"消息推送接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#消息推送接口","aria-hidden":"true"}},[a._v("#")]),a._v(" 消息推送接口")]),a._v(" "),e("h3",{attrs:{id:"xxts-1-获取消息推送列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xxts-1-获取消息推送列表","aria-hidden":"true"}},[a._v("#")]),a._v(" XXTS-1 获取消息推送列表")]),a._v(" "),e("h4",{attrs:{id:"模块负责人"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块负责人","aria-hidden":"true"}},[a._v("#")]),a._v(" 模块负责人")]),a._v(" "),e("pre",[e("code",[a._v("梁铁骐\n")])]),a._v(" "),e("h4",{attrs:{id:"请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),e("pre",[e("code",[a._v("GET /v2/message\n")])]),a._v(" "),e("h4",{attrs:{id:"参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),e("pre",[e("code",[a._v("*buttonPermissionFlg: 是否获取按钮权限\ntitle: 推送名称\nstartDate: 开始时间\nendDate: 结束时间\nmarketId：活动id\nstatus：状态\npageNo：\npageSize：\n")])]),a._v(" "),e("h4",{attrs:{id:"响应"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),e("pre",[e("code",[a._v('{\n    "code": 100000,\n    "msg": "",\n    "data": {\n        "buttonPermissions": [\n            {\n                "delButton": true // 删除按钮\n            }\n        ],\n        "dataSums": null,\n        "datas": [\n            {\n                "content": "你好么志勇", // 推送内容\n                "createTime": "2019-04-12 11:35:47", // 创建时间\n                "createUserName": "系统操作", // 创建人\n                "id": 4, // 主键id\n                "pushTime": "2019-04-13 00:00:00", // 推送时间\n                "rangeType": "CUSTOMER",\n                "readNum": 0, // 查看数\n                "relationName": "阶梯转每满测试", // 关联活动/公告\n                "relationValue": "354", // 关联值 （url、活动id）\n                "marketType": "GIFT", // 活动类别\n                "sentNum": 1, // 到达数\n                "status": "UNSENT", // 状态 UNSENT：未发送 SENT：已发送\n                "title": "2019-04-12测试", // 推送名称\n                "totalNum": 1, // 总数\n                "type": "ACTIVITY" // 推送类别\n            },\n            ...\n        ],\n    }\n}\n')])]),a._v(" "),e("h3",{attrs:{id:"xxts-2-新增消息推送"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xxts-2-新增消息推送","aria-hidden":"true"}},[a._v("#")]),a._v(" XXTS-2 新增消息推送")]),a._v(" "),e("h4",{attrs:{id:"模块负责人-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块负责人-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 模块负责人")]),a._v(" "),e("pre",[e("code",[a._v("梁铁骐\n")])]),a._v(" "),e("h4",{attrs:{id:"请求-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),e("pre",[e("code",[a._v("POST /v2/message\n")])]),a._v(" "),e("h4",{attrs:{id:"参数-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),e("pre",[e("code",[a._v('{\n\t"message": {\n\t\t"title": "2019-04-12测试", // 名称\n\t\t"content": "你好么志勇", // 内容\n\t\t"relationValue": "https://www.baidu.com/", // 关联内容 （系统公告-url 优惠促销-活动id）\n\t\t"type": "NOTICE", // 类型 ACTIVITY-优惠促销 NOTICE-系统公告\n\t\t"pushTime": "2019-04-13 00:00:00", // 推送时间（如果选择的是优惠促销，应在活动时间范围内）\n\t\t"rangeType": "CUSTOMER" // 范围类别 ALL - 全部客户，BUSINESSUNIT - 事业部，CUSTOMER - 指定客户，MARKET - 取指定活动范围（当选择优惠促销时默认为MARKET）\n\t},\n\t"messageRanges": [ // 消息范围， 全部客户 和 优惠促销 不必传范围\n\t\t{\n\t\t\t"rangeId": 2434 // 范围值\n\t\t}\n\t],\n\t"onlyCode": "20081210"\n}\n')])]),a._v(" "),e("h4",{attrs:{id:"响应-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),e("pre",[e("code",[a._v('{\n    "code": 100000,\n    "msg": "",\n    "data": null\n}\n')])]),a._v(" "),e("h3",{attrs:{id:"xxts-3-消息推送-作废"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xxts-3-消息推送-作废","aria-hidden":"true"}},[a._v("#")]),a._v(" XXTS-3 消息推送-作废")]),a._v(" "),e("h4",{attrs:{id:"模块负责人-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块负责人-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 模块负责人")]),a._v(" "),e("pre",[e("code",[a._v("梁铁骐\n")])]),a._v(" "),e("h4",{attrs:{id:"请求-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),e("pre",[e("code",[a._v("DELETE /v2/message/{id}\n")])]),a._v(" "),e("h4",{attrs:{id:"参数-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),e("pre",[e("code",[a._v("*id: 主键id\n")])]),a._v(" "),e("h4",{attrs:{id:"响应-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),e("pre",[e("code",[a._v('{\n    "code": 100000,\n    "msg": "",\n    "data": null\n}\n')])]),a._v(" "),e("h3",{attrs:{id:"xxts-4-获取消息推送日志列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xxts-4-获取消息推送日志列表","aria-hidden":"true"}},[a._v("#")]),a._v(" XXTS-4 获取消息推送日志列表")]),a._v(" "),e("h4",{attrs:{id:"模块负责人-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块负责人-4","aria-hidden":"true"}},[a._v("#")]),a._v(" 模块负责人")]),a._v(" "),e("pre",[e("code",[a._v("梁铁骐\n")])]),a._v(" "),e("h4",{attrs:{id:"请求-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求-4","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),e("pre",[e("code",[a._v("GET /v2/message/log\n")])]),a._v(" "),e("h4",{attrs:{id:"参数-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数-4","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),e("pre",[e("code",[a._v("title: 推送名称\ncustomerName: 客户名称\nstartDate: 开始时间\nendDate: 结束时间\nreadFlg：0：未查看 1:已查看\npageNo：\npageSize：\n")])]),a._v(" "),e("h4",{attrs:{id:"响应-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应-4","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),e("pre",[e("code",[a._v('{\n    "code": 100000,\n    "msg": "",\n    "data": {\n        "buttonPermissions": [],\n        "dataSums": null,\n        "total": 1, // 总数\n        "datas": [\n            {\n                "createTime": "2019-04-15 09:13:05", // 到达时间\n                "customer": {\n                    "shortName": "么志勇", // 客户名称\n                    "type": "P" // 客户类型\n                },\n                "customerId": 2434,\n                "id": 0,\n                "messageId": 0,\n                "readFlg": 0, // 0：未查看 1：已查看\n                "readTime": "", // 查看时间\n                "title": "2019-04-12测试" // 推送名称\n            }\n        ],\n    }\n}\n')])]),a._v(" "),e("h3",{attrs:{id:"xxts-5-消息中心首页数据-for-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xxts-5-消息中心首页数据-for-app","aria-hidden":"true"}},[a._v("#")]),a._v(" XXTS-5 消息中心首页数据 for app")]),a._v(" "),e("h4",{attrs:{id:"模块负责人-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块负责人-5","aria-hidden":"true"}},[a._v("#")]),a._v(" 模块负责人")]),a._v(" "),e("pre",[e("code",[a._v("梁铁骐\n")])]),a._v(" "),e("h4",{attrs:{id:"请求-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求-5","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),e("pre",[e("code",[a._v("GET /router/v5/message/{customerId}/index\n")])]),a._v(" "),e("h4",{attrs:{id:"参数-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数-5","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),e("pre",[e("code",[a._v("*customerId: 客户id\n")])]),a._v(" "),e("h4",{attrs:{id:"响应-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应-5","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),e("pre",[e("code",[a._v('{\n    "code": 100000,\n    "msg": "",\n    "data": {\n        "ACTIVITY": { // 消息类别 优惠促销\n            "createTime": "2019-04-15 09:13:05", // 时间\n            "messageNum": 1, // 消息数据\n            "title": "2019-04-12测试", // 标题\n            "type": "ACTIVITY"\n        },\n        "NOTICE": { // 消息类别 系统公告\n            "createTime": "2019-04-15 09:13:05", // 时间\n            "messageNum": 1, // 消息数据\n            "title": "2019-04-12测试", // 标题\n            "type": "ACTIVITY"\n        },\n        "OTHER": { // 消息类别 其它消息\n            "createTime": "2019-04-15 09:13:05", // 时间\n            "messageNum": 1, // 消息数据\n            "title": "2019-04-12测试", // 标题\n            "type": "ACTIVITY"\n        }\n    }\n}\n')])]),a._v(" "),e("h3",{attrs:{id:"xxts-6-全部标记已读-for-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xxts-6-全部标记已读-for-app","aria-hidden":"true"}},[a._v("#")]),a._v(" XXTS-6 全部标记已读 for app")]),a._v(" "),e("h4",{attrs:{id:"模块负责人-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块负责人-6","aria-hidden":"true"}},[a._v("#")]),a._v(" 模块负责人")]),a._v(" "),e("pre",[e("code",[a._v("梁铁骐\n")])]),a._v(" "),e("h4",{attrs:{id:"请求-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求-6","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),e("pre",[e("code",[a._v("PUT /router/v5/message/{customerId}/all\n")])]),a._v(" "),e("h4",{attrs:{id:"参数-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数-6","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),e("pre",[e("code",[a._v("*customerId: 客户id\n")])]),a._v(" "),e("h4",{attrs:{id:"响应-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应-6","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),e("pre",[e("code",[a._v('{\n    "code": 100000,\n    "msg": "",\n    "data": null\n}\n')])]),a._v(" "),e("h3",{attrs:{id:"xxts-7-标记已读-for-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xxts-7-标记已读-for-app","aria-hidden":"true"}},[a._v("#")]),a._v(" XXTS-7 标记已读 for app")]),a._v(" "),e("h4",{attrs:{id:"模块负责人-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块负责人-7","aria-hidden":"true"}},[a._v("#")]),a._v(" 模块负责人")]),a._v(" "),e("pre",[e("code",[a._v("梁铁骐\n")])]),a._v(" "),e("h4",{attrs:{id:"请求-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求-7","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),e("pre",[e("code",[a._v("PUT /router/v5/message/{customerId}/{messageId}\n")])]),a._v(" "),e("h4",{attrs:{id:"参数-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数-7","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),e("pre",[e("code",[a._v("*messageId: 消息id\n*customerId: 客户id\n")])]),a._v(" "),e("h4",{attrs:{id:"响应-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应-7","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),e("pre",[e("code",[a._v('{\n    "code": 100000,\n    "msg": "",\n    "data": null\n}\n')])]),a._v(" "),e("h3",{attrs:{id:"xxts-8-获取优惠促销通知列表-for-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xxts-8-获取优惠促销通知列表-for-app","aria-hidden":"true"}},[a._v("#")]),a._v(" XXTS-8 获取优惠促销通知列表 for app")]),a._v(" "),e("h4",{attrs:{id:"模块负责人-8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块负责人-8","aria-hidden":"true"}},[a._v("#")]),a._v(" 模块负责人")]),a._v(" "),e("pre",[e("code",[a._v("梁铁骐\n")])]),a._v(" "),e("h4",{attrs:{id:"请求-8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求-8","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),e("pre",[e("code",[a._v("GET /router/v5/message/{customerId}/active\n")])]),a._v(" "),e("h4",{attrs:{id:"参数-8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数-8","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),e("pre",[e("code",[a._v("*customerId: 客户id\n*pageNo: 页码\n")])]),a._v(" "),e("h4",{attrs:{id:"响应-8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应-8","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),e("pre",[e("code",[a._v('{\n    "code": 100000,\n    "msg": "",\n    "data": [\n        {\n            "id": 78348, // 消息id\n            "content": "你好么志勇", // 内容\n            "pushTime": "2091-05-19 00:00:00", // 推送时间\n            "readFlg": 0, // 0：未读 1:已读\n            "readTime": "",\n            "marketType":"SPECIAL" // COUPON:领券, GIFT: 满赠, REDUCE: 满减, DISCOUNT: 满折, COLUMN: 专栏（产品列表）, SPECIAL: 专题（自己设置页面图片）\n            "type": "INVOICE_ASK_FOR" // 消息类别 INVOICE_ASK_FOR：发票信息审核 ORDER：订单通知 ACTIVITY：优惠促销 NOTICE：系统公告\n            "relationValue": "354", // 对应的关联值 优惠促销：活动id 系统公告：url 订单通知：订单号\n            "title": "2019-04-12测试" // 标题\n        }\n    ]\n}\n')])]),a._v(" "),e("h3",{attrs:{id:"xxts-9-获取系统公告通知列表-for-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xxts-9-获取系统公告通知列表-for-app","aria-hidden":"true"}},[a._v("#")]),a._v(" XXTS-9 获取系统公告通知列表 for app")]),a._v(" "),e("h4",{attrs:{id:"模块负责人-9"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块负责人-9","aria-hidden":"true"}},[a._v("#")]),a._v(" 模块负责人")]),a._v(" "),e("pre",[e("code",[a._v("梁铁骐\n")])]),a._v(" "),e("h4",{attrs:{id:"请求-9"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求-9","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),e("pre",[e("code",[a._v("GET /router/v5/message/{customerId}/notice\n")])]),a._v(" "),e("h4",{attrs:{id:"参数-9"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数-9","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),e("pre",[e("code",[a._v("*customerId: 客户id\n*pageNo: 页码\n")])]),a._v(" "),e("h4",{attrs:{id:"响应-9"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应-9","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),e("pre",[e("code",[a._v('{\n    "code": 100000,\n    "msg": "",\n    "data": [\n        {\n            "id": 78348, // 消息id\n            "content": "你好么志勇", // 内容\n            "pushTime": "2091-05-19 00:00:00", // 推送时间\n            "readFlg": 0, // 0：未读 1:已读\n            "readTime": "",\n            "type": "INVOICE_ASK_FOR" // 消息类别 INVOICE_ASK_FOR：发票信息审核 ORDER：订单通知 ACTIVITY：优惠促销 NOTICE：系统公告\n            "relationValue": "354", // 对应的关联值 优惠促销：活动id 系统公告：url 订单通知：订单号\n            "title": "2019-04-12测试" // 标题\n        }\n    ]\n}\n')])]),a._v(" "),e("h3",{attrs:{id:"xxts-10-获取订单其它通知列表-for-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xxts-10-获取订单其它通知列表-for-app","aria-hidden":"true"}},[a._v("#")]),a._v(" XXTS-10 获取订单其它通知列表 for app")]),a._v(" "),e("h4",{attrs:{id:"模块负责人-10"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块负责人-10","aria-hidden":"true"}},[a._v("#")]),a._v(" 模块负责人")]),a._v(" "),e("pre",[e("code",[a._v("梁铁骐\n")])]),a._v(" "),e("h4",{attrs:{id:"请求-10"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求-10","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),e("pre",[e("code",[a._v("GET /router/v5/message/{customerId}/other\n")])]),a._v(" "),e("h4",{attrs:{id:"参数-10"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数-10","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),e("pre",[e("code",[a._v("*customerId: 客户id\n*pageNo: 页码\n")])]),a._v(" "),e("h4",{attrs:{id:"响应-10"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应-10","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),e("pre",[e("code",[a._v('{\n    "code": 100000,\n    "msg": "",\n    "data": [\n        {\n            "id": 78348, // 消息id\n            "content": "你好么志勇", // 内容\n            "pushTime": "2091-05-19 00:00:00", // 推送时间\n            "readFlg": 0, // 0：未读 1:已读\n            "readTime": "",\n            "type": "INVOICE_ASK_FOR" // 消息类别 INVOICE_ASK_FOR：发票信息审核 ORDER：订单通知 ACTIVITY：优惠促销 NOTICE：系统公告\n            "relationValue": "354", // 对应的关联值 优惠促销：活动id 系统公告：url 订单通知：订单号\n            "title": "2019-04-12测试" // 标题\n        }\n    ]\n}\n')])]),a._v(" "),e("h3",{attrs:{id:"xxts-11-app接收消息体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xxts-11-app接收消息体","aria-hidden":"true"}},[a._v("#")]),a._v(" XXTS-11 app接收消息体")]),a._v(" "),e("h4",{attrs:{id:"模块负责人-11"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块负责人-11","aria-hidden":"true"}},[a._v("#")]),a._v(" 模块负责人")]),a._v(" "),e("pre",[e("code",[a._v('梁铁骐\n\n{\n    msgType: "ORDER" // 消息类别 INVOICE_ASK_FOR：发票信息审核 ORDER：订单通知 ACTIVITY：优惠促销 NOTICE：系统公告\n    title: "订单发货通知",\n    body: 您的订单：SA1904100001已发车，请注意查收",\n    id: 1, // 客户消息id\n    value: "SA1904100001", // 订单通知时存放订单号 优惠促销时存放活动id 系统公告时存放url\n}\n')])])])}],!1,null,null,null);t.default=s.exports}}]);