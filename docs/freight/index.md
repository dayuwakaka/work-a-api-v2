## 运费接口

### YF-1. 新增运费规则
#### 模块负责人
    梁铁骐
#### 1.1 请求URL
    /v2/freight

#### 1.2 请求类型
    POST

#### 1.3 请求参数
|参数|名称|描述|
|---|---|---|
|name|运费规则名称|必|
|isNew|客户类型|必 OLD 老客户 NEW 新客户 ALL 全部客户|
|businessunitType|事业部限定|必 ALL 无限定 GROUP 事业组级别 PART 部分事业部|
|businessunitGroupId|事业组ID|
|businessunits|事业部ID列表|
|areaType|区域限定|必 ALL 全部 PART部分|
|areas|区域ID列表|
|freight|运费基准|必 0 < 免值 < 100000000 |
|targetValue|免运费标准|必 0 < 满值 < 100000000 |

#### 1.4 请求示例
    {
    	"name": "测试新增",
    	"isNew": "NEW",
    	"businessunitType": "PART",
    	"businessunitGroupId":1,
    	"businessunits":[1,2],
    	"areaType": "ALL",
    	"areas":[],
    	"freight": 250,
    	"targetValue": 1000
    }

#### 1.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 1.6 返回示例
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }


### YF-2. 修改
#### 模块负责人
    梁铁骐
#### 2.1 请求URL
    /v2/freight/{id}

#### 2.2 请求类型
    PUT

#### 2.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|规则ID|
|name|运费规则名称|
|isNew|客户类型|必 OLD 老客户 NEW 新客户 ALL 全部客户|
|businessunitType|事业部限定|必 ALL 无限定 GROUP 事业组级别 PART 部分事业部|
|businessunitGroupId|事业组ID|
|businessunits|事业部ID列表|
|areaType|区域限定|必|
|areas|区域ID列表|
|freight|运费基准|最小值0|
|targetValue|免运费标准|最小值0|



#### 2.4 请求示例
    {
    	"name": "测试新增",
    	"isNew": "NEW",
    	"businessunitType": "PART",
    	"businessunitGroupId":1,
    	"businessunits":[1,2],
    	"areaType": "ALL",
    	"areas":[],
    	"freight": 250,
    	"targetValue": 1000
    }


#### 2.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 2.6 返回示例
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }

    
    
### YF-3. 作废
#### 模块负责人
    梁铁骐
#### 3.1 请求URL
    /v2/freight/cancel/{id}

#### 3.2 请求类型
    PUT

#### 3.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|规则ID|



#### 3.4 请求示例

    无


#### 3.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 3.6 返回示例
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }



### YF-4. 删除运费规则（作废）
#### 模块负责人
    梁铁骐
#### 4.1 请求URL
    /v2/freight/{id}

#### 4.2 请求类型
    DELETE

#### 4.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|规则ID|必|


#### 4.4 请求示例
    无


#### 4.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 4.6 返回示例
    {
    	"code": "100000",
    	"msg": "",
    	"data": null
    }



### YF-5. 运费规则列表
#### 模块负责人
    梁铁骐
#### 5.1 请求URL
    /v2/freight

#### 5.2 请求类型
    GET

#### 5.3 请求参数
|参数|名称|描述|
|---|---|---|
|name|运费规则名称|
|isNew|客户类型|OLD 老客户 NEW 新客户 ALL 全部|
|status|状态|PASS 正常 INVALID 作废|
|pageNo|页码|默认1|
|pageSize|页条数|默认25|
|buttonPermissionFlg|是否获取按钮权限列表|1 - 是 0 - 否|

#### 5.4 请求示例
    无

#### 5.5 返回值
|参数|名称|描述|
|---|---|---|
|id|运费规则ID|）|
|name|运费规则名称|
|isNew|客户类型|OLD 老客户 NEW 新客户 ALL 全部|
|status|状态|PASS 正常 INVALID 作废|
|deleteflg|删除标记|0 正常；1 已删除|
|freight|运费基准|满运费标准，则免运费，否则收此运费基准|
|targetValue|运费标准|
|createRole|创建人所属角色id|
|createUser|创建人id|
|createTime|创建时间|
|areaType|区域限定|ALL 全部 PART 部分|
|areas|区域列表|
|addFlg|运费累加属性|0-不累加 1-累加|
|businessunitType|事业部限定|ALL 全部 GROUP 事业组级别 PART 事业部级别|
|businessunitGroupId|事业组ID|
|businessunits|事业部列表|


#### 5.6 返回示例
    {
        "code":100000,
        "msg":"",
        "data":{
            "buttonPermissions": [
                {
                    "deleteButton": false, // 删除
                    "editButton": true, // 编辑
                    "invalidButton": true, // 作废
                    "logButton": true // 操作日志
                }
            ],
            "dataSums":null,
            "datas":[
                {
                    "id":103,
                    "name":"测试修改",
                    "isNew":"NEW",
                    "status":"INVALID",
                    "deleteflg":0,
                    "freight":250.00,
                    "targetValue":800.00,
                    "createRole":1,
                    "createUser":101,
                    "createTime":"2018-08-14 22:42:15.0",
                    "areaType":"PART",
                    "areas":["06","060201","060202"],
                    "businessunitType":"PART",
                    "businessunitGroupId":1,
                    "businessunits":[5,3,1]
                }
            ],
            "pageNo":1,
            "total":1
        }
    }

### YF-6. 运费规则详情
#### 模块负责人
    梁铁骐
#### 6.1 请求URL
    /v2/freight/detail

#### 6.2 请求类型
    GET

#### 6.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|运费规则ID|必|

#### 6.4 请求示例
    无

#### 6.5 返回值
|参数|名称|描述|
|---|---|---|
|id|运费规则ID|请看示例（外层=103的id，不是内层的）|
|name|运费规则名称|
|isNew|客户类型|OLD 老客户 NEW 新客户 ALL 全部|
|status|状态|PASS 正常 INVALID 作废|
|deleteflg|删除标记|0 正常；1 已删除|
|freight|运费基准|满运费标准，则免运费，否则收此运费基准|
|targetValue|运费标准|
|createRole|创建人所属角色id|
|createUser|创建人id|
|createTime|创建时间|
|areaType|区域限定|ALL 全部 PART 部分|
|areas|区域列表|
|businessunitType|事业部限定|ALL 全部 GROUP 事业组级别 PART 事业部级别|
|businessunitGroupId|事业组ID|
|businessunits|事业部列表|


#### 6.6 返回示例
    {
        "code":100000,
        "msg":"",
        "data":{,
            "id":103,
            "name":"测试修改",
            "isNew":2,
            "status":"invalid",
            "deleteflg":0,
            "freight":250.00,
            "targetValue":800.00
            "createRole":1,
            "createUser":101,
            "createTime":"2018-08-14 22:42:15.0",
            "areaType":"PART",
            "areas":["06","060201","060202"],
            "businessunitType":"PART",
            "businessunitGroupId":1,
            "businessunits":[5,3,1]
        }
    }
    
### YF-7. 运费规则操作日志
#### 模块负责人
    梁铁骐
#### 7.1 请求URL
    /v2/freight/log

#### 7.2 请求类型
    GET

#### 7.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|运费规则ID|必|
|pageNo|页码|默认1|
|pageSize|每页条数|默认25|

#### 7.4 请求示例
    无

#### 7.5 返回值
|参数|名称|描述|
|---|---|---|
|id|日志id|暂不需要|
|freightId|运费规则id|
|freightName|运费规则名称|
|content|操作内容|
|createTime|操作时间|
|createUser|操作人id|
|createUserName|操作人姓名|


#### 7.6 返回示例
    {
        "code":100000,
        "msg":"",
        "data":{
        "dataSums":null,
        "datas":[
                {
                    "id":0,
                    "freightId":103,
                    "freightName":"测试新增",
                    "content":"新增运费规则",
                    "createTime":"2018-08-15 13:50:29.0",
                    "createUser":101,
                    "createUserName":"樊嘉辉"
                },
                {
                    "id":0,
                    "freightId":103,
                    "freightName":"测试新增",
                    "content":"作废运费规则",
                    "createTime":"2018-08-15 13:50:29.0",
                    "createUser":101,
                    "createUserName":"樊嘉辉"
                },
                {
                    "id":0,
                    "freightId":103,
                    "freightName":"测试新增",
                    "content":"删除运费规则",
                    "createTime":"2018-08-15 13:50:29.0",
                    "createUser":101,
                    "createUserName":"樊嘉辉"
                }
            ],
            "pageNo":1,
            "total":3
        }
    }


### YF-8. 新增订单免运费申请
#### 模块负责人
    梁铁骐
#### 8.1 请求URL
    /v2/freight/ask

#### 8.2 请求类型
    POST

#### 8.3 请求参数
|参数|名称|描述|
|---|---|---|
|orderId|订单ID|必|
|remark|备注|最大长度不能超过250|

#### 8.4 请求示例
    {
    	"orderId": "SA180418000758",
    	"remark":"从订单上拿到的备注"
    }

#### 8.5 返回值
|参数|名称|描述|
|---|---|---|
|code|成功与否的标志|100000 成功；0 失败|
|msg|异常信息|
|data||


#### 8.6 返回示例
    {
        "code":100000,
        "msg":"",
        "data": null
    }


### YF-9. 通过
#### 模块负责人
    梁铁骐
#### 9.1 请求URL
    /v2/freight/ask/pass/{orderId}

#### 9.2 请求类型
    PUT

#### 9.3 请求参数
|参数|名称|描述|
|---|---|---|
|orderId|订单ID|必|

#### 9.4 请求示例
    无

#### 9.5 返回值
|参数|名称|描述|
|---|---|---|
|code|成功与否的标志|100000 成功；0 失败|
|msg|异常信息|
|data||


#### 9.6 返回示例
    {
        "code":100000,
        "msg":"",
        "data": null
    }



### YF-10. 拒绝
#### 模块负责人
    梁铁骐
#### 10.1 请求URL
    /v2/freight/ask/cancel/{orderId}

#### 10.2 请求类型
    PUT

#### 10.3 请求参数
|参数|名称|描述|
|---|---|---|
|orderId|订单ID|必|
|noReason|必 不通过原因|拒绝时必须录入不拒绝原因|

#### 10.4 请求示例
    {
    	"noReason":"拒绝时必须录入决绝原因"
    }

#### 10.5 返回值
|参数|名称|描述|
|---|---|---|
|code|成功与否的标志|100000 成功；0 失败|
|msg|异常信息|
|data||


#### 10.6 返回示例
    {
        "code":100000,
        "msg":"",
        "data": null
    }


### YF-11. 订单免运费申请列表
#### 模块负责人
    梁铁骐
#### 11.1 请求URL
    /v2/freight/ask

#### 11.2 请求类型
    GET

#### 11.3 请求参数
|参数|名称|描述|
|---|---|---|
|keyword|订单号/客户名称/申请人|
|isPass|是否通过标志|1：通过，2：未通过
|pageNo|页码|默认1|
|pageSize|每页条数|默认25|
|buttonPermissionFlg|是否获取按钮权限列表|1 - 是 0 - 否|

#### 11.4 请求示例
    无

#### 11.5 返回值
|参数|名称|描述|
|---|---|---|
|id|申请id|
|orderId|订单id|
|freight|免运费金额运费|
|isPass|申请状态|0 待审核； 1 通过； 2 未通过|
|noReason|拒绝时录入的原因|
|remark|申请原因||
|createTime|申请时间|
|createUserName|申请人|
|total|条数|
|pageNo|页码|

#### 权限按钮
    passButton： 通过按钮
    refuseButton： 拒绝按钮
    logBtton： 日志查看

#### 11.6 返回示例
    {
        "code":100000,
        "msg":"",
        "data":{
            "buttonPermissions": [
                {
                    "passButton：": false,
                    "refuseButton"： false,
                    "logButton": true // 操作日志
                }
            ],
            "dataSums":null,
            "datas":[
                {
                    "id":0,
                    "orderId":"SA170504322711",
                    "freight":250,
                    "isPass":0,
                    "noReason":"",
                    "remark":"从订单上拿到的备注",
                    "checkedTime":"",
                    "checkedUser":0,
                    "createTime":"2018-08-16",
                    "createUser":101,
                    "deleteFlg":0,
                    "deleteTime":"",
                    "deleteUser":0
                },
                {
                    "id":0,
                    "orderId":"SA180418000758",
                    "freight":250,
                    "isPass":2,
                    "noReason":"订单已结款，审批状态直接变为未通过",
                    "remark":"从订单上拿到的备注",
                    "checkedTime":"2018-08-16",
                    "checkedUser":101,
                    "createTime":"2018-08-16",
                    "createUser":101,
                    "deleteFlg":0,
                    "deleteTime":"",
                    "deleteUser":0,
                },
                {
                    "id":0,
                    "orderId":"SA180418000759",
                    "freight":250,
                    "isPass":2,
                    "noReason":"拒绝时必须录入决绝原因",
                    "remark":"",
                    "checkedTime":"2018-08-16",
                    "checkedUser":101,
                    "createTime":"2018-08-16",
                    "createUser":101,
                    "deleteFlg":0,
                    "deleteTime":"",
                    "deleteUser":0,
                }
            ],
            "pageNo":1,
            "total":3
        }
    }


### YF-12. 免运费申请审核日志列表
#### 模块负责人
    梁铁骐
#### 12.1 请求URL
    /v2/freight/ask/log

#### 12.2 请求类型
    GET

#### 12.3 请求参数
|参数|名称|描述|
|---|---|---|
|orderId|订单ID|必|
|pageNo|页码|默认1|
|pageSize|每页条数|默认25|

#### 12.4 请求示例
    无

#### 12.5 返回值
|参数|名称|描述|
|---|---|---|
|id|日志id|暂不需要|
|orderId|订单id|
|totalprice|订单金额|
|freight|订单运费|
|content|操作内容|
|remark|备注|
|createTime|操作时间|
|createUser|操作人id|
|createUserName|操作人姓名|


#### 12.6 返回示例
    {
        "code":100000,
        "msg":"",
        "data":{
            "dataSums":null,
            "datas":[
                {
                    "id":0,
                    "orderId":"SA170620354606",
                    "totalprice":300.00,
                    "freight":100.00,
                    "content":"通过",
                    "remark":"测试获取数据日志",
                    "createTime":"2018-08-15 17:29:00.0",
                    "createUser":1,
                    "createUserName":"刘希"
                }
            ],
            "pageNo":1,
            "total":1
        }
    }


### YF-13. 获取订单详情（免运费审核点击订单号）
#### 模块负责人
    梁铁骐
#### 请求URL
    /v2/order/sa/{orderId}

#### 请求类型
    GET

#### 请求参数
|参数|名称|描述|
|---|---|---|
|orderId|订单ID|必（直接拼在url即可 不用放在"?" 后面再传一遍）|

#### 请求示例
    无

#### 返回值
|参数|名称|描述|
|---|---|---|
|jian|件数||
|bulk|散数||
|totalprice|订单金额||
|cusotmerName|客户名||
|fromDepotName|出库仓名称||
|status|订单状态|INVALID - 订单未生效； RUN - 订单生效； LOCK - 锁定； STOCKUP - 备货完成； SEND - 已发出； COMPLETE - 已签收|
|isPay|付款状态|0 - 未付款; 1 - 已结款|

#### 返回示例
    {
        "code":100000,
        "msg":"",
        "data":{
            "bulk": 0,
            "customerName": "0惠",
            "deleteFlg": 0,
            "freight": 0,
            "fromDepotName": "DC（大连天联仓）",
            "isPay": 1,
            "jian": 20,
            "status": "INVALID",
            "totalprice": 4000
        }
    }
    
### YF-14. 获取运费金额
#### 模块负责人
    梁铁骐
#### 请求
    GET /v2/freight/amount
#### 参数
    customerid 客户id
    pathid 区域id
    amount 金额订单金额（不含优惠券、返利券、活动（满减、满折））的金额
#### 响应
    {
        "code":100000,
        "msg":"",
        "data": 123 // 运费
    }


### YF-15. 获取运费金额 (APP)
#### 模块负责人
    梁铁骐
#### 请求
    GET /router/v5/freight/amount
#### 参数
    customerid 客户id
    pathid 区域id
    amount 金额订单金额（不含优惠券、返利券、活动（满减、满折））的金额
#### 响应
    {
        "code":100000,
        "msg":"",
        "data": 123 // 运费
    }
    
    
### YF-16. 修改运费累加属性
#### 模块负责人
    梁铁骐
#### 请求
    PUT /v2/freight/{id}/add-flg
#### 参数
    id 运费主键
#### 响应
    {
        "code":100000,
        "msg":"",
        "data": 
    }