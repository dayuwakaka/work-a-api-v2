## 财务接口
### CW-51. 订金管理-列表
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/finance/deposits
#### 参数
    keyword: "xxx" // 客户名称
    status: "NORMAL" // 状态 NORMAL 正常 LOCK 锁定
    opAccount: 1 // 客户账户ID
    buttonPermissionFlg: 1, // 是否获取权限按钮
    pageNo:"1" // 页码 默认1
    pageSize: "25" // 页面条数 默认25
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "reduceButton": true, // 扣款按钮
                    "addButton": true, // 充值按钮
                    "logButton": true, // 查看日志按钮
                    "modifyRuleButton": true // 修改规则按钮
                },
                ...
            ],
            "datas": [
                {
                    "createTime": "2012-03-14 11:08:27", // 创建时间
                    "customer": {
                        "shortName": "西安迈德思餐饮管理有限公司", // 客户名称
                    },
                    "deleteFlg": 0,
                    "effectEtime": "2019-06-17 23:59:59", // 订金有效期结束时间
                    "effectRange": "4417,122", // 订金产品范围（产品id，以','相隔）
                    "effectStime": "2019-06-04 00:00:00", // 订金有效期开始时间
                    "id": 32768, // 订金id
                    "money": 7.68, // 订金余额
                    "opAccount": 925, // 客户id（客户账户id）
                    "orignalAmount": 241920, // 订金原始金额
                    "platformId": 0,
                    "ratio": 100, // 订金比例
                    "status": "NORMAL", // 订金状态 NORMAL 正常 LOCK 锁定
                },
                ...
            ],
            "pageNo": 1,
            "total": 0
        }
    }

### CW-52. 订金管理-详情
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/finance/deposits/{id}
#### 参数
    id: 32769 // 订金id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "createTime": "2012-03-14 11:08:27", // 创建时间
            "customer": {
                "shortName": "西安迈德思餐饮管理有限公司", // 客户名称
            },
            "deleteFlg": 0,
            "effectEtime": "2019-06-17 23:59:59", // 订金有效期结束时间
            "effectRange": "4417,122", // 订金产品范围（产品id，以','相隔）
            "effectStime": "2019-06-04 00:00:00", // 订金有效期开始时间
            "id": 32768, // 订金id
            "products": [ // 产品范围列表
                {
                    "id": 274, // 产品id
                    "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190516153141129-7292.jpg", // 主图url
                    "name": "黄金蝴蝶虾（特制）", // 品名
                    "pno": "0181", // 品号
                }
            ],
            "money": 7.68, // 订金余额
            "opAccount": 925, // 客户id（客户账户id）
            "orignalAmount": 241920, // 订金原始金额
            "platformId": 0,
            "ratio": 100, // 订金比例
            "status": "NORMAL", // 订金状态 NORMAL 正常 LOCK 锁定
        }
    }

### CW-53. 订金管理-日志列表
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/finance/deposits/{id}/logs
#### 参数
    id: 32769 // 订金id
#### 着重说明
    effectStime、effectEtime、money、ratio 这四个个属性为【设计数据列】，有哪个就显示哪个
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "datas": [
                {
                    "effectStime": "2018-03-08 00:00:00", // 订金有效期开始时间
                    "effectEtime": "2018-03-30 23:59:59", // 订金有效期结束时间
                    "money": 24600, // 涉及金额
                    "opInfo": "预付款转新增订金", // 操作内容
                    "opTime": "2018-03-08 15:00:00", // 操作时间
                    "opUserName": "崔洋洋", // 操作人
                    "ratio": 100 // 订金比例
                }
            ],
            "pageNo": 1, // 页码
            "total": 0
        }
    }

### CW-54. 订金审核管理-列表
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/finance/deposit/askfors
#### 参数
    keyword: 客户名称
    actionType
    status,
    buttonPermissionFlg,
    pageNo,
    pageSize
#### 调整类型枚举
    DEPOSIT_ADD 订金新增
    DEPOSIT_HAND_ADD 订金手动充值
    DEPOSIT_HAND_REDUCE 订金手动扣款
    DEPOSIT_TRANSFER_BALANCE 订金转预付款
    BALANCE_TRANSFER_DEPOSIT 预付款转已有订金
    BALANCE_TRANSFER_NEW_DEPOSIT 预付款转新增订金
    DEPOSIT_TRANSFER_BANK 订金转出银行
    BANK_TRANSFER_NEW_DEPOSIT 银行转入新增订金
    BANK_TRANSFER_DEPOSIT 银行转入订金
    MODIFY_DEPOSIT_RULE 修改订金规则
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "refuseButton": false, // 拒绝按钮
                    "passButton": false // 通过按钮
                }
            ],
            "datas": [
                {
                    "actionType": "DEPOSIT_TRANSFER_BALANCE", // 调整类型
                    "checkRemark": "", // 审批备注
                    "checkTime": "2019-07-10 12:00:00", // 审批时间
                    "checkUserName": "", // 审批人名称
                    "createRemark": "", // 创建备注
                    "createTime": "2019-06-18 13:54:12", // 创建时间
                    "createUserName": "张亚婕", // 创建人名称
                    "customer": {
                        "shortName": "常州协瑞国际贸易有限公司", // 客户名称
                    },
                    "depositId": 0,
                    "effectEtime": "2019-07-10 00:00:00", // 订金有效期结束时间
                    "effectRange": "111,333",
                    "effectStime": "2019-08-10 23:59:59", // 订金有效期开始时间
                    "id": 0, // 申请主键id
                    "money": -19292, // 金额
                    "opAccount": 3885, // 客户id（客户账户id）
                    "ratio": 0, // 比例
                    "relationSid": 0,
                    "status": "PASS" // 审核状态 ASKFOR-待审核 PASS-通过 REFUSE-拒绝
                },
                ...
            ],
            "pageNo": 1,
            "total": 0
        }
    }

### CW-55. 订金审核管理-拒绝
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    PUT /v2/finance/deposit/askfors/{id}/refuse
#### 参数
    id: 订金申请id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CW-56. 订金审核管理-通过
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    PUT /v2/finance/deposit/askfors/{id}/pass
#### 参数
    id: 订金申请id
    json body:
        {
            remark: 备注
        }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CW-57. 订金审核管理-新增
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    POST /v2/finance/deposit/askfors
#### 参数
    页面各节点对应的请求数据结构
    1、订金管理 - 新增 - 充值方式
    	1-1 手动充值: 
    		{
    			*opAccount: 1, // 客户账户id
    			*actionType: "DEPOSIT_ADD" // 固定传
    			*money: 10000, // 金额
    			*ratio: 90, // 比例 90%
    			*effectRange: "111,222" // 产品id范围 以","相隔
    			*effectStime: "2019-07-11 10:10:00" // 订金有效期开始时间
    			*effectEtime: "2019-09-11 10:10:00" // 订金有效期结束时间
    			*payTime: "2019-07-10 00:00:00" // 充值时间
    			createRemark: "" // 备注
    		}
    	1-2 银行转入
    		{
    			*opAccount: 1, // 客户账户id
    			*actionType: "BANK_TRANSFER_NEW_DEPOSIT" //固定传
    			*money: 10000, // 金额
    			*ratio: 90, // 比例 90%
    			*bankAccount: "", // 汇款人账号
    			*bankAccountName: "", // 汇款人名
    			*receiveBankAccount: "", // 收款账号
    			*receiveBankAccountName: "", // 收款人名
    			*effectRange: "111,222" // 产品id范围 以","相隔
    			*effectStime: "2019-07-11 10:10:00" // 订金有效期开始时间
    			*effectEtime: "2019-09-11 10:10:00" // 订金有效期结束时间
    			*payTime: "2019-07-10 00:00:00" // 充值时间
    			createRemark: "" // 备注
    		}
    	1-3 预付款转入
    		{
    			*opAccount: 1, // 客户账户id
    			*actionType: "BALANCE_TRANSFER_NEW_DEPOSIT" // 固定传
    			*money: 10000, // 金额
    			*ratio: 90, // 比例 90%
    			*effectRange: "111,222" // 产品id范围 以","相隔
    			*effectStime: "2019-07-11 10:10:00" // 订金有效期开始时间
    			*effectEtime: "2019-09-11 10:10:00" // 订金有效期开始时间
    			*payTime: "2019-07-10 00:00:00" // 充值时间
    			createRemark: "" // 备注
    		}
    2、订金管理 - 充值 - 充值方式
    	2-1 手动充值
    		{
    			*depositId: 1 // 订金账户id
    			*opAccount: 1, // 客户账户id
    			*actionType: "DEPOSIT_HAND_ADD" // 固定传
    			*money: 10000, // 金额
    			*payTime: "2019-07-10 00:00:00" // 充值时间
    			createRemark: "" // 备注
    		}
    	2-2 银行转入
    		{
    			*depositId: 1, // 订金账户id
    			*opAccount: 1, // 客户账户id
    			*actionType: "BANK_TRANSFER_DEPOSIT" // 固定传
    			*money: 10000, // 金额
    			*bankAccount: "", // 汇款账号
    			*bankAccountName: "", // 汇款人名称
    			*receiveBankAccount: "", // 收款账号
    			*receiveBankAccountName: "", // 收款人名称
    			*payTime: "2019-07-10 00:00:00" // 充值时间
    			createRemark: "" // 备注
    		}
    	2-3 预付款转入
    		{
    			*depositId: 1, // 订金id
    			*opAccount: 1, // 客户账户id
    			*actionType: "BALANCE_TRANSFER_DEPOSIT" // 固定传
    			*money: 10000, // 金额
    			*payTime: "2019-07-10 00:00:00" // 充值时间
    			createRemark: "" // 备注
    		}
    3、订金管理 - 扣款 - 充值方式
    	3-1 手动扣款
    		{
    			*depositId: 1, // 订金id
    			*opAccount: 1, // 客户账户id
    			*actionType: "DEPOSIT_HAND_REDUCE" // 固定传
    			*money: 10000, // 金额
    			*payTime: "2019-07-10 00:00:00" // 扣款时间
    			createRemark: "" // 备注
    		}
    	3-2 转出至银行
    		{
    			*depositId: 1, // 订金id
    			*opAccount: 1, // 客户账户id
    			*actionType: "DEPOSIT_TRANSFER_BANK" // 固定传
    			*money: 10000, // 金额
    			*bankAccount: "", // 收款账号
    			*bankAccountName: "", // 收款人名称
    			*receiveBankAccount: "", // 转出账号
    			*receiveBankAccountName: "", // 转出人名称
    			createRemark: "" // 备注
    		}
    	3-3 转出至预付款
    		{
    			*depositId: 1, // 订金id
    			*opAccount: 1, // 客户账户id
    			*actionType: "DEPOSIT_TRANSFER_BALANCE" // 固定传
    			*money: 10000, // 金额
    			*payTime: "2019-07-10 00:00:00" // 扣款时间
    			createRemark: "" // 备注
    		}
    4、订金管理 - 修改规则信息
    	{
    		*depositId: 1,
    		*actionType: "MODIFY_DEPOSIT_RULE" // 固定传
    		*ratio: 90, // 比例 90%
    		*effectRange: "111,222" // 产品id范围 以","相隔
    		*effectStime: "2019-07-11 10:10:00" // 订金有效期开始时间
    		*effectEtime: "2019-09-11 10:10:00" // 订金有效期结束时间
    		createRemark: "" // 备注
    	}
    5、资金账户 - 账户信息 - 订金充值 - 充值方式
    	5-1 手动充值
    		5-1-1 充值至已有订金
    			{
    				*depositId: 1, // 订金id
    				*opAccount: 1, // 客户账户id
    				*actionType: "DEPOSIT_HAND_ADD" // 固定传
    				*money: 10000, // 金额
    				*payTime: "2019-07-10 00:00:00" // 充值时间
    				createRemark: "" // 备注
    			}
    		5-1-2 充值至新增订金
    			{
    				*opAccount: 1, // 客户账户id
    				*actionType: "DEPOSIT_ADD" // 固定传
    				*money: 10000, // 金额
    				*ratio: 90, // 比例 90%
    				*effectRange: "111,222" // 产品id范围 以","相隔
    				*effectStime: "2019-07-11 10:10:00" // 订金有效期开始时间
    				*effectEtime: "2019-09-11 10:10:00" // 订金有效期结束时间
    				*payTime: "2019-07-10 00:00:00" // 充值时间
    				createRemark: "" // 备注
    			}
    	5-2 银行转入
    		5-2-1 充值至已有订金
    			{
    				*depositId: 1, // 订金id
    				*opAccount: 1, // 客户账户id
    				*actionType: "BANK_TRANSFER_DEPOSIT" // 固定传
    				*money: 10000, // 金额
    				*bankAccount: "", // 汇款账号
    				*bankAccountName: "", // 汇款人名称
    				*receiveBankAccount: "", // 收款账户
    				*receiveBankAccountName: "", // 收款人名称
    				createRemark: "" // 备注
    			}
    		5-2-2 充值至新增订金
    			{
    				*opAccount: 1, // 客户账户id
    				*actionType: "BANK_TRANSFER_NEW_DEPOSIT" // 固定传
    				*money: 10000, // 金额
    				*ratio: 90, // 比例90%
    				*effectRange: "111,222" // 产品id范围 以","相隔
    				*effectStime: "2019-07-11 10:10:00" // 订金有效期开始时间
    				*effectEtime: "2019-09-11 10:10:00" // 订金有效期结束时间
    				*payTime: "2019-07-10 00:00:00" // 充值时间
    				*bankAccount: "", // 汇款账号
    				*bankAccountName: "", // 汇款人名称
    				*receiveBankAccount: "", // 收款账号
    				*receiveBankAccountName: "", // 收款人名称
    				createRemark: "" // 备注
    			}
    	5-3 预付款转入
    		5-3-1 充值至已有订金
    			{
    				*depositId: 1, // 订金id
    				*opAccount: 1, // 客户账户id
    				*actionType: "BALANCE_TRANSFER_DEPOSIT" // 固定传
    				*money: 10000, // 金额
    				*payTime: "2019-07-10 00:00:00" // 充值时间
    				createRemark: "" // 备注
    			}
    		5-3-2 充值至新增订金
    			{
    				*opAccount: 1, // 客户账户id
    				*actionType: "BALANCE_TRANSFER_NEW_DEPOSIT" // 固定传
    				*money: 10000, // 金额
    				*ratio: 90, // 比例90%
    				*effectRange: "111,222" // 产品id范围 以","相隔
    				*effectStime: "2019-07-11 10:10:00" // 订金有效期开始时间
    				*effectEtime: "2019-09-11 10:10:00" // 订金有效期结束时间
    				*payTime: "2019-07-10 00:00:00" // 充值时间
    				createRemark: "" // 备注
    			}
    6、资金账户 - 账户信息 - 订金扣款 - 充值方式
    	6-1 手动扣款
    		{
    			*depositId: 1, // 订金id
    			*opAccount: 1, // 客户账户id
    			*actionType: "DEPOSIT_HAND_REDUCE" // 固定传
    			*money: 10000, // 金额
    			*payTime: "2019-07-10 00:00:00" // 扣款时间
    			createRemark: "" // 备注
    		}
    	6-2 转出至银行
    		{
    			*depositId: 1, // 订金id
    			*opAccount: 1, // 客户账户id
    			*actionType: "DEPOSIT_TRANSFER_BANK" // 固定传
    			*money: 10000, // 金额
    			*bankAccount: "", // 收款账号
    			*bankAccountName: "", // 收款人名称
    			*receiveBankAccount: "", // 转出帐号
    			*receiveBankAccountName: "", // 转出人名称
    			createRemark: "" // 备注
    		}
    	6-3 转出至预付款
    		{
    			*depositId: 1, // 订金id
    			*opAccount: 1, // 客户账户id
    			*actionType: "DEPOSIT_TRANSFER_BALANCE" // 固定传
    			*money: 10000, // 金额
    			*payTime: "2019-07-10 00:00:00" // 扣款时间
    			createRemark: "" // 备注
    		}
    7、银企互联 - 入款
    	7-1 充值至已有订金
    		{
    			*depositId: 1, // 订金id
    			*opAccount: 1, // 客户账户id
    			*actionType: "BANK_TRANSFER_DEPOSIT" // 固定传
    			*money: 10000, // 金额
    			*bankAccount: "", // 汇款账号
    			*bankAccountName: "", // 汇款人名称 
    			*receiveBankAccount: "", // 收款账号
    			*receiveBankAccountName: "", // 收款人名称
    			*************
    		*****relationSid: 1 // 银企互联数据id
    			*************
    			createRemark: "" // 备注
    		}
    	7-2 充值至新增订金
    		{
    			*opAccount: 1, // 客户账户id
    			*actionType: "BANK_TRANSFER_NEW_DEPOSIT" // 固定传
    			*money: 10000, // 金额
    			*ratio: 90, // 比例90%
    			*bankAccount: "", // 汇款账号
    			*bankAccountName: "", // 汇款人名称
    			*receiveBankAccount: "", // 收款账号
    			*receiveBankAccountName: "", // 收款人名称
    			*effectRange: "111,222" // 产品id范围 以","相隔
    			*effectStime: "2019-07-11 10:10:00" // 订金有效期开始时间
    			*effectEtime: "2019-09-11 10:10:00" // 订金有效期结束时间
    			*payTime: "2019-07-10 00:00:00" // 充值时间
    			*************
    		*****relationSid: 1 // 银企互联数据id
    			*************
    			createRemark: "" // 备注
    		}
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }







