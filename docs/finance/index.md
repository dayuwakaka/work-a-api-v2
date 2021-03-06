## 财务接口

### CW-1 银行账号新增
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    POST /finance/account/bank
#### 参数
    {
        *"opAccount": 33315,         // 账户ID
        *"bankType":"CCB",    // ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
        *"bankName": "建设银行",      // 开户行名称
        *"bankAccount": "62281226881299875646",  // 开户行卡号
        *"bankAccountName": "苏小妹"    // 开户行户名
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }


### CW-2 银行账号列表
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    GET /finance/account/bank
#### 参数
    *opAccount  // 账户ID
    status      // 状态   NORMAL 正常 LOCK 锁定
    buttonPermissionFlg     // 是否查询按钮权限 1 查询 0 不查询
    pageNo          // 页码 默认1
    pageSize        // 页大小 默认25
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissionPage": {},
            "buttonPermissions": [
                {
                    "lockButton": true,     // 锁定
                    "unlockButton": false,  // 解锁
                    "editButton": true,     // 编辑
                    "logButton": true       // 日志
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "id": 16384,            // 银行账号ID
                    "platformId": 1,
                    "opAccount": 33314,     // 账户ID
                    "bankType": "CHAOS",    // ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
                    "bankTypeName":"其它",      // 银行类型名
                    "bankName": "建设银行",  // 开户行名称
                    "bankAccount": "62281226881299875646",  // 开户行卡号
                    "bankAccountName": "苏小妹",    // 开户行户名
                    "status": "NORMAL",     // 状态   NORMAL 正常 LOCK 锁定
                    "createRole": 0,
                    "createTime": "2019-07-12", // 创建日期
                    "createUser": 0,
                    "createUserName": "孙启萌",    // 创建人
                    "deleteFlg": 0
                }
            ],
            "pageNo": 0,
            "total": 0
        }
    }


### CW-3 银行账号列表(不分页)
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    GET /finance/account/bank/list
#### 参数
    opAccount  // 账户ID
    bankName        // 开户行名
    bankAccount     // 开户行账号
    bankAccountName     // 开户行户名
    status      // 状态   NORMAL 正常 LOCK 锁定
#### 响应   
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "id": 16384,            
                "platformId": 1,    
                "opAccount": 33314,         // 账号ID
                "status": "NORMAL",         // 状态
                "bankType": "CHAOS",    // ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
                "bankTypeName":"其它",      // 银行类型名
                "bankName": "工商银行",             // 开户行
                "bankAccount": "622812268819998777374", // 银行账号
                "bankAccountName": "苏小妹儿",          // 户名
                "createRole": 0,
                "createTime": "2019-07-12",
                "createUser": 0,
                "createUserName": "孙启萌",
                "deleteFlg": 0
            }
        ]
    }    

### CW-4 银行账号明细
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    GET /finance/account/bank/{id}
#### 参数
    *id 银行账号id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "id": 16384,
            "platformId": 1,
            "opAccount": 33314,    // 账户ID
            "bankType": "CHAOS",    // ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
            "bankTypeName":"其它",      // 银行类型名
            "bankName": "建设银行",  // 开户行名称
            "bankAccount": "62281226881299875646",  // 开户行卡号
            "bankAccountName": "苏小妹",    // 开户行户名
            "status": "NORMAL",     // 状态   NORMAL 正常 LOCK 锁定
            "createRole": 1,
            "createTime": "2019-07-12 10:52:07.0",
            "createUser": 518,
            "createUserName": "孙启萌",
            "deleteFlg": 0
        }
    }
    
    
### CW-5 银行账号修改
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    PUT /finance/account/bank/{id}
#### 参数
    *id     // 银行账号ID
    {
        *"opAccount": 33315,         // 账户ID
        *"bankType":"CCB",     // ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它         
        *"bankName": "建设银行",      // 开户行名称
        *"bankAccount": "62281226881299875646",  // 开户行卡号
        *"bankAccountName": "苏小妹"    // 开户行户名
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
 
### CW-6 银行账号锁定
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    PUT /finance/account/bank/lock/{id}
#### 参数
    *id     // 银行账号ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }    
     
### CW-7 银行账号解锁
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    PUT /finance/account/bank/unlock/{id}
#### 参数
    *id     // 银行账号ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }   
     
### CW-8 银行账号操作日志
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    GET /finance/account/bank/log/{bankId}
#### 参数
    *bankId 银行账号id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissionPage": {},
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "id": 3,
                    "bankId": 0,
                    "opInfo": "修改银行账号",     // 操作信息
                    "opRole": 0,
                    "opTime": "2019-07-12 11:28:35",     // 操作时间
                    "opUser": 0,
                    "opUserName": "孙启萌"         // 操作人
                }
            ],
            "pageNo": 0,
            "total": 0
        }
    } 
 
### CW-9 银行类型
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    GET /finance/account/bank/type
#### 参数
    无
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "id":"1",                      // id 
                "bankType": "ABC",              // 类型编码
                "bankTypeName": "农业银行"      // 类型名
            },
            {
                "id":"2",                      // id
                "bankType": "ICBC",
                "bankTypeName": "工商银行"
            },
            {
                "id":"3",                      // id
                "bankType": "CCB",
                "bankTypeName": "建设银行"
            }
        ]
    }
    
### CW-10 亚洲渔港银行账号列表
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    GET /finance/account/bank/asiasea/list
#### 参数
    无
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "bankAccount": "2120 1500 4000 5300 8645",  // 账号
                "bankAccountName": "亚洲渔港股份有限公司",    // 账户名
                "bankName": "中国建设银行大连沙河口支行",    // 银行名
                "bankType": "CCB",      // 银行类型
                "bankTypeName":"中国建设银行", // 银行类型名
                "createRole": 0,
                "createTime": "",
                "createUser": 0,
                "createUserName": "",
                "deleteFlg": 0,
                "id": 1,
                "opAccount": 0,
                "platformId": 0,
                "status": null
            }
        ]
    }

### CW-11 账期变动申请
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    POST /finance/payment/askfor
#### 参数
    {
        *"opAccount": "33314",              // 账户ID
        *"askforDebtBalance": "9000",       // 申请的账期额度
        *"effectEtime": "2019-07-31 23:59:59",  // 账期有效期
        "createRemark": "到本月末账期"            // 申请备注
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
    
### CW-12 账期变动申请列表
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    GET /finance/payment/askfor
#### 参数
    shortName   // 客户名
    status      // 状态   ASKFOR 待审核 PASS 通过 REFUSE 拒绝
    buttonPermissionFlg // 是否查询按钮权限 0 不查询 1 查询
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissionPage": {},
            "buttonPermissions": [
                {
                    "refuseButton": true,       // 拒绝
                    "passButton": true          // 通过
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "id": 2049,             // 申请ID
                    "opAccount": 33314,     // 账户ID
                    "shortname": "苏家屯走司",   // 客户名
                    "status": "ASKFOR",     // 状态 ASKFOR 待审核 PASS 通过 REFUSE 拒绝
                    "orignalPayment": "CASH",   // 原支付方式
                    "orignalDebtBalance": 0,    // 原账期额度
                    "askforPayment": "DEBT",    // 申请支付方式
                    "askforDebtBalance": 9000,  // 申请账期额度
                    "effectEtime": "2019-07-31 23:59:59",   // 申请账期有效期
                    "createRemark": "到本月末账期",   // 申请备注
                    "createRole": 0,
                    "createTime": "2019-07-12 15:24:50",    // 申请时间
                    "createUser": 0,
                    "createUserName": "孙启萌",        // 申请人
                    "checkRemark": "",              // 拒绝理由
                    "checkRole": 0,
                    "checkTime": "",                // 审核时间
                    "checkUser": 0,
                    "checkUserName": "",            // 审核人
                    "deleteFlg": 0
                }
            ],
            "pageNo": 1,
            "total": 0
        }
    }
      
### CW-13 账期变动申请拒绝
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    PUT /finance/payment/askfor/refuse/{id}
#### 参数
    *id     // 申请ID
    {
        *"reason": "未填写账期有效期"    // 拒绝理由
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
          
### CW-14 账期变动申请通过
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    PUT /finance/payment/askfor/pass/{id}
#### 参数
    *id     // 申请ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
    
### CW-15 总分关系变动申请
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    POST /finance/account/askfor
#### 参数
    {
        *"opAccount": "33314",           // 账户ID
        *"askforParentType": "0",        // 总分类型 0 普通 1 总公司  2 分公司
        "askforParentId": "0",           // 总公司ID   askforParentType=2时必传
        "askforSharePay": "0",          // 是否为分公司代付 askforParentType=1时必传
        "createRemark": "变成普通公司"    // 申请备注
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
     
### CW-16 总分关系变动申请列表
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    GET /finance/account/askfor
#### 参数
    shortName           // 客户名   
    status              // 状态 ASKFOR 待审核 PASS 通过 REFUSE 拒绝
    buttonPermissionFlg     // 是否查询按钮权限 0 不查询 1 查询 默认0
    pageNo          // 页码 默认1
    pageSize        // 页大小 默认25
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissionPage": {},
            "buttonPermissions": [
                {
                    "refuseButton": true,
                    "passUpButton": false
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "id": 258,                  // 申请ID
                    "opAccount": 33314,         // 账户ID
                    "shortname": "苏家屯走司",       // 客户名
                    "status": "ASKFOR"          // 申请状态     ASKFOR 待审核 PASS 通过 REFUSE 拒绝
                    "orignalParentId": 0,
                    "orignalParentType": 1,
                    "orignalSharePay": 0,
                    "askforParentId": 0,        // 总公司ID
                    "parentName": "",           // 总公司名
                    "askforParentType": 0,      // 总分类型 0 普通 1 总公司 2 分公司
                    "askforSharePay": 0,        // 是否为分公司代付 0 否 1 是
                    "createRemark": "变成普通公司",   // 申请备注
                    "createRole": 0,
                    "createTime": "2019-07-12 17:36:24",    // 申请时间
                    "createUser": 0,
                    "createUserName": "孙启萌",    // 申请人
                    "checkRemark": "",              // 审核备注
                    "checkRole": 0,
                    "checkTime": "",                // 审核时间
                    "checkUser": 0,
                    "checkUserName": "",            // 审核人
                    "deleteFlg": 0,
                }
            ],
            "pageNo": 1,
            "total": 0
        }
    }
    
    
### CW-17 总分关系变动申请拒绝
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    PUT /finance/account/askfor/refuse/{id}
#### 参数
    *id     // 申请ID
    {
        *"reason": "未填写账期有效期"    // 拒绝理由
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
          
### CW-18 总分关系变动申请通过
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    PUT /finance/account/askfor/pass/{id}
#### 参数
    *id     // 申请ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
 
 
### CW-19 预付款变动申请
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    POST /finance/handwork/askfor
#### 参数
##### 手动出入款参数说明
    {
        *"opAccount": "33314",
        *"money": "100",
        *"payTime": "2019-07-15 14:00:00",
        "createRemark": "手动充值100元"
    }
##### 银行汇款出入款参数说明
    {
        *"opAccount": "33314",      // 入款账户
        *"money": "100",            // 入款金额
        *"bankType": "ICBC",        // 银行类型
        *"bankAccount": "622812268819998777374",
        *"bankAccountName": "苏小妹儿",
        *"receiveBankType": "ICBC" // 收款银行类型
        *"receiveBankAccount": "262001040030059",
        *"receiveBankAccountName": "亚洲渔港供应链管理（大连）有限公司",
        *"payTime": "2019-07-15 14:00:00",  // 充值时间
        "createRemark": "手动充值100元"      // 备注
        *"ignoreFlg": "0",            // 2019-10-25修改 导出忽略 0 不忽略 1 忽略
        *"payRelationType": "P"      // 2019-10-25修改 付款人与付款单位关系 P 本人 C2C 公对公 CP 经营者
    }
##### 银企互联入款参数说明
    {
        *"opAccount": "33314",      // 入款账户
        *"relationSid": "0",        // matchId
        *"money": "100",            // 交易金额
        *"bankType": "ICBC",        // 汇款银行类型
        *"bankAccount": "622812268819998777374", // 汇款银行账号
        *"bankAccountName": "苏小妹儿",             // 汇款银行账户名
        *"receiveBankType": "ICBC", // 收款银行类型
        *"receiveBankAccount": "262001040030059",   // 收款银行账号
        *"receiveBankAccountName": "亚洲渔港供应链管理（大连）有限公司", // 收款银行账户名
        "bankSerialsid": "ABC-20161017090253125485155673739",  // 银行流水号
        *"payTime": "2019-07-15 14:00:00",              // 交易时间
        "createRemark": "手动充值100元"          // 备注
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
     
### CW-20 预付款变动申请列表
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    GET /finance/handwork/askfor
#### 参数
    shortName           // 客户名   
    status              // 状态 ASKFOR 待审核 PASS 通过 REFUSE 拒绝
    type                // HAND 手动 BANK 银行汇款
    buttonPermissionFlg     // 是否查询按钮权限 0 不查询 1 查询 默认0
    pageNo          // 页码 默认1
    pageSize        // 页大小 默认25
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissionPage": {},
            "buttonPermissions": [
                {
                    "refuseButton": true,       // 拒绝按钮
                    "passButton": true          // 通过按钮
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "id": 131071,              // 申请ID
                    "opAccount": 33314,         // 账户ID
                    "shortname": "苏家屯走司",       // 公司名
                    "status": "ASKFOR",         // 申请状态 ASKFOR 待审核 PASS 通过 REFUSE 拒绝
                    "type": "HAND",          // 类型 HAND 手工 BANK 银行汇款
                    "leftMoney": 0,         // 当前余额
                    "money": 300,           // 出入款额
                    "payTime": "2019-07-15 15:30:00",   // 支付时间
                    "relationSid": 37761,               // 银企互联 matchId
                    "bankSerialsid": "ABC-20190701150246028955413061379", // 银行流水
                    "bankType": "ABC", // 银行类型 ABC 农业银行 ICBC 供应商银行 CCB 建设银行 CHAOS 无法区分
                    "bankAccount": "122005517010010678",        // 打款银行账号
                    "bankAccountName": "广州市珑琥商贸发展有限公司", // 打款银行户名
                    "receiveBankAccount": "262001040030059",        // 收款银行账号
                    "receiveBankAccountName": "亚洲渔港供应链管理（大连）有限公司", // 收款银行户名
                    "createRemark": "银企互联充值300元",       // 申请备注
                    "createRole": 1,
                    "createTime": "2019-07-15 15:41:31",        // 申请时间
                    "createUser": 518,
                    "createUserName": "孙启萌",                // 申请人
                    "checkRemark": "",                  // 审核备注
                    "checkRole": 0,
                    "checkTime": "",                    // 审核时间
                    "checkUser": 0,
                    "checkUserName": "",                // 审核人
                    "deleteFlg": 0,
                    "ignoreFlg":1,                      //2019-11-04 导出忽略 0 不忽略 1 忽略
                    "payRelationType":"CB"              //2019-11-04 付款人与付款单位关系 P 本人 C2C 公对公 CP 经营者
                }
            ],
            "pageNo": 0,
            "total": 1
        }
    }
    
    
### CW-21 预付款变动申请拒绝
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    PUT /finance/handwork/askfor/refuse/{id}
#### 参数
    *id     // 申请ID
    {
        *"reason": "未填写账期有效期"    // 拒绝理由
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
          
### CW-22 预付款变动申请通过
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    PUT /finance/handwork/askfor/pass/{id}
#### 参数
    *id     // 申请ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
   
### CW-23 银行汇款信息
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    GET /finance/handwork/askfor/{id}
#### 参数
    *id     // 申请ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "id": 84473,        // 申请ID
            "bankType": "ABC",                  // 汇款银行类型 ABC 农业银行 ICBC 供应商银行 CCB 建设银行 CHAOS 无法区分
            "bankAccount": "6226191300216738",  // 汇款银行账号
            "bankAccountName": "爱新觉罗绪良",    // 汇款银行账户名
            "receiveBankName": "中国建设银行",        // 收款银行名
            "receiveBankAccount": "",               // 收款银行账号  
            "receiveBankAccountName": "",           // 收款银行账户名
            "money": 11033,             // 汇款金额
            "payTime": "",              // 汇款时间
            "bankSerialsid": "",
            "checkRemark": "",
            "checkRole": 0,
            "checkTime": "",
            "checkUser": 0,
            "checkUserName": "",
            "createRemark": "7.1工行",
            "createRole": 0,
            "createTime": "2019-07-01 15:29:55.0",
            "createUser": 685,
            "createUserName": "姜静",
            "deleteFlg": 0,
            "leftMoney": 0,
            "opAccount": 32122,
            "relationSid": 0,
            "shortname": "",
            "status": "ASKFOR",
            "type": "",
            "ignoreFlg":1,                      //2019-11-04 导出忽略 0 不忽略 1 忽略
            "payRelationType":"CB"              //2019-11-04 付款人与付款单位关系 P 本人 C2C 公对公 CP 经营者
        }
    }
 
         
### CW-26 财务账户列表
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    GET /finance/account
#### 参数
    keyword // 客户名、客户号
    state   // 客户状态 NORMAL 正常 DELETE 休眠
    parentType // 客户类型 0:普通客户，1:总店， 2:分店， 不传：全部
    balanceStatus   // 预付款账户状态  NORMAL 正常 LOCK 锁定
    buttonPermissionFlg // 是否查询按钮权限  1 查询 0 不查询  默认0
    pageNo  // 页码 默认1
    pageSize    // 页大小 默认25
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissionPage": {},
            "buttonPermissions": [
                {
                    "payUpButton": true,        // 入款
                    "payDownButton": true,      // 出款
                    "lockButton": true,         // 锁定
                    "unlockButton": false,      // 解锁
                    "debtButton": true,         // 账期设置
                    "mainButton": true,         // 总分设置
                    "detailButton": true,       // 查看
                    "logButton": true           // 日志
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "id": 32772,
                    "platformId": 1,
                    "opAccount": 33315,                 // 账户ID
                    "shortName": "苏家屯走司沈阳分公司",  // 客户名
                    "state": "NORMAL",                  // 客户状态 NORMAL 正常 DELETE 休眠
                    "businessunit": 27,                 // 事业部ID
                    "businessunitName": "AH沈阳",         // 事业部名
                    "srRoleId": 4217,                   // sr role Id
                    "srRoleName": "许晓慧",            // sr role name
                    "ssRoleId": 29376,                  // ss role id
                    "ssRoleName": "测试数据权限（用完删除）",  // ss role name
                    "type": "P"                     // 客户类型 'A','P','P2P','C'
                    "parentId": 33314,              // 总公司ID
                    "parentName": "苏家屯走司",      // 总公司名
                    "parentType": 0,                // 公司类型 0 普通 1 总公司 2 分公司
                    "paymentType": "CASH",          // CASH 现款 LATER 到付 DEBT 账期
                    "sharePay": 0,                  // 是否为分公司代付 0 否  1 是
                    "status": "NORMAL",
                    "debtEffectEtime": "",          // 账期有效期
                    "debtMoney": 0,                 // 账期额度
                    "financeBalance": [
                        {
                            "id": 32785,
                            "opAccount": 33315,
                            "type": "BALANCE"       // BALANCE 预付款账户
                            "money": 0,             // 余额
                            "status": "NORMAL",     // 状态 NORMAL 正常 LOCK 锁定
                            "createTime": "2019-07-12 10:31:31",
                            "deleteFlg": 0,
                            "financeBalanceRule": null,
                            "platformId": 1,
                            "ruleId": 0
                        },
                        {
                            "id": 32785,
                            "opAccount": 33315,
                            "type": "DEPOSIT"       // DEPOSIT 定金账户
                            "money": 0,             // 余额
                            "status": "NORMAL",     // 状态 NORMAL 正常 LOCK 锁定
                            "createTime": "2019-07-12 10:31:31",
                            "deleteFlg": 0,
                            "financeBalanceRule": null,
                            "platformId": 1,
                            "ruleId": 0
                        },
                        {
                            "id": 32785,
                            "opAccount": 33315,
                            "type": "FREEZE"       // FREEZE 冻结账户
                            "money": 0,             // 余额
                            "status": "NORMAL",     // 状态 NORMAL 正常 LOCK 锁定
                            "createTime": "2019-07-12 10:31:31",
                            "deleteFlg": 0,
                            "financeBalanceRule": null,
                            "platformId": 1,
                            "ruleId": 0
                        }
                    ],
                    "bank": [
                        {
                            "bankAccount": "62281226881299875646",  // 开户行账号
                            "bankAccountName": "苏小妹",           // 开户行户名
                            "bankName": "建设银行",             // 开户行
                            "createRole": 0,
                            "createTime": "2019-07-12",         // 创建时间
                            "createUser": 0,
                            "createUserName": "孙启萌",        // 创建人
                            "deleteFlg": 0,
                            "id": 16385,
                            "opAccount": 33315,         
                            "platformId": 1,
                            "status": "NORMAL"          // 状态 NORMAL  LOCK
                        }
                    ],
                    "modifyTime": "",
                    "createTime": "",
                    "deleteFlg": 0
                }
            ],
            "pageNo": 0,
            "total": 0
        }
    } 
    
      
### CW-27 财务账户列表(不分页)
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    GET /finance/account/list
#### 参数
    keyword // 客户名、客户号
    state   // 客户状态 NORMAL 正常 DELETE 休眠
    parentType // 客户类型 0:普通客户，1:总店， 2:分店， 不传：全部
    balanceStatus   // 预付款账户状态  NORMAL 正常 LOCK 锁定
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "id": 32772,
                "platformId": 1,
                "opAccount": 33315,                 // 账户ID
                "shortName": "苏家屯走司沈阳分公司",  // 客户名
                "state": "NORMAL",                  // 客户状态 NORMAL 正常 DELETE 休眠
                "businessunit": 27,                 // 事业部ID
                "businessunitName": "AH沈阳",         // 事业部名
                "srRoleId": 4217,                   // sr role Id
                "srRoleName": "许晓慧",            // sr role name
                "ssRoleId": 29376,                  // ss role id
                "ssRoleName": "测试数据权限（用完删除）",  // ss role name
                "type": "P"                     // 客户类型 'A','P','P2P','C'
                "parentId": 33314,              // 总公司ID
                "parentName": "苏家屯走司",      // 总公司名
                "parentType": 0,                // 公司类型 0 普通 1 总公司 2 分公司
                "paymentType": "CASH",          // CASH 现款 LATER 到付 DEBT 账期
                "sharePay": 0,                  // 是否为分公司代付 0 否  1 是
                "status": "NORMAL",
                "debtEffectEtime": "",          // 账期有效期
                "debtMoney": 0,                 // 账期额度
                "financeBalance": [
                    {
                        "id": 32785,
                        "opAccount": 33315,
                        "type": "BALANCE"       // BALANCE 预付款账户
                        "money": 0,             // 余额
                        "status": "NORMAL",     // 状态 NORMAL 正常 LOCK 锁定
                        "createTime": "2019-07-12 10:31:31",
                        "deleteFlg": 0,
                        "financeBalanceRule": null,
                        "platformId": 1,
                        "ruleId": 0
                    },
                    {
                        "id": 32785,
                        "opAccount": 33315,
                        "type": "DEPOSIT"       // DEPOSIT 定金账户
                        "money": 0,             // 余额
                        "status": "NORMAL",     // 状态 NORMAL 正常 LOCK 锁定
                        "createTime": "2019-07-12 10:31:31",
                        "deleteFlg": 0,
                        "financeBalanceRule": null,
                        "platformId": 1,
                        "ruleId": 0
                    },
                    {
                        "id": 32785,
                        "opAccount": 33315,
                        "type": "FREEZE"       // FREEZE 冻结账户
                        "money": 0,             // 余额
                        "status": "NORMAL",     // 状态 NORMAL 正常 LOCK 锁定
                        "createTime": "2019-07-12 10:31:31",
                        "deleteFlg": 0,
                        "financeBalanceRule": null,
                        "platformId": 1,
                        "ruleId": 0
                    }
                ],
                "bank": null,
                "modifyTime": "",
                "createTime": "",
                "deleteFlg": 0
            }
        ]
    }

 
### CW-28 财务账户明细
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    GET /finance/account/{opAccount}
#### 参数
    *opAccount  // 账户ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "id": 32772,
            "platformId": 1,
            "opAccount": 33315,                 // 账户ID
            "shortName": "苏家屯走司沈阳分公司",  // 客户名
            "state": "NORMAL",                  // 客户状态 NORMAL 正常 DELETE 休眠
            "businessunit": 27,                 // 事业部ID
            "businessunitName": "AH沈阳",         // 事业部名
            "srRoleId": 4217,                   // sr role Id
            "srRoleName": "许晓慧",            // sr role name
            "ssRoleId": 29376,                  // ss role id
            "ssRoleName": "测试数据权限（用完删除）",  // ss role name
            "type": "P"                     // 客户类型 'A','P','P2P','C'
            "parentId": 33314,              // 总公司ID
            "parentName": "苏家屯走司",      // 总公司名
            "parentType": 0,                // 公司类型 0 普通 1 总公司 2 分公司
            "paymentType": "CASH",          // CASH 现款 LATER 到付 DEBT 账期
            "sharePay": 0,                  // 是否为分公司代付 0 否  1 是
            "status": "NORMAL",
            "debtEffectEtime": "",          // 账期有效期
            "debtMoney": 0,                 // 账期额度
            "financeBalance": {  &#10084;***BALANCE只能有一条，DEPOSIT可以有多条***   
                "rowPermissions": {
                    0: {
                        "buttonPermission": {
                            "reduce": true,
                            "unlock": false,
                            "lock": true,
                            "pay": true,
                            "rule": true
                        }
                    },
                    1: {
                        "buttonPermission": {
                            "reduce": true,
                            "unlock": false,
                            "lock": true,
                            "pay": true,
                            "rule": true
                        }
                    },
                    2: {
                        "buttonPermission": {
                            "reduce": true,
                            "unlock": false,
                            "lock": true,
                            "pay": true,
                            "rule": false
                        }
                    }
                },    
                rows:[
                    {
                        "createTime": "2019-07-12 10:31:31",
                        "deleteFlg": 0,
                        "financeBalanceRule": null,
                        "id": 32785,
                        "money": 0,             // 余额
                        "opAccount": 33315,
                        "platformId": 1,
                        "ruleId": 0,
                        "status": "NORMAL",     // 状态 NORMAL 正常 LOCK 锁定
                        "type": "BALANCE"       // BALANCE 预付款
                    },
                    {
                        "createTime": "2019-07-12 10:31:31",
                        "deleteFlg": 0,
                        "financeBalanceRule": null,
                        "id": 32785,
                        "money": 0,             // 余额
                        "opAccount": 33315,
                        "platformId": 1,
                        "ruleId": 0,            // 定金规则ID
                        "status": "NORMAL",     // 状态 NORMAL 正常 LOCK 锁定
                        "type": "DEPOSIT"       // 定金
                    },
                    {
                        "createTime": "2019-07-12 10:31:31",
                        "deleteFlg": 0,
                        "financeBalanceRule": null,
                        "id": 32785,
                        "money": 0,             // 余额
                        "opAccount": 33315,
                        "platformId": 1,
                        "ruleId": 0,            // 定金规则ID
                        "status": "NORMAL",     // 状态 NORMAL 正常 LOCK 锁定
                        "type": "DEPOSIT"       // 定金
                    }
                ]
            },
            "bank": [
                {
                    "bankAccount": "62281226881299875646",  // 开户行账号
                    "bankAccountName": "苏小妹",           // 开户行户名
                    "bankName": "建设银行",             // 开户行
                    "createRole": 0,
                    "createTime": "2019-07-12",         // 创建时间
                    "createUser": 0,
                    "createUserName": "孙启萌",        // 创建人
                    "deleteFlg": 0,
                    "id": 16385,
                    "opAccount": 33315,         
                    "platformId": 1,
                    "status": "NORMAL"          // 状态 NORMAL  LOCK
                }
            ],
            "modifyTime": "",
            "createTime": "",
            "deleteFlg": 0
        }
    }     
 
  
### CW-29 财务账户操作日志
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    GET /finance/account/log/{opAccount}
#### 参数
    *opAccount  // 账户ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissionPage": {},
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "id": 5,
                    "opAccount": 33314,
                    "opInfo": "账期变更申请审批通过",     // 操作内容
                    "opRole": 0,
                    "opTime": "2019-07-12 16:04:06",    // 操作时间
                    "opUser": 0,
                    "opUserName": "孙启萌"         // 操作人
                },
                {
                    "id": 1,
                    "opAccount": 33314,
                    "opInfo": "账期变更申请",
                    "opRole": 0,
                    "opTime": "2019-07-12 15:22:51",
                    "opUser": 0,
                    "opUserName": "孙启萌"
                }
            ],
            "pageNo": 0,
            "total": 0
        }
    }

### CW-30 财务账户锁定
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    PUT /finance/account/lock/{opAccount}
#### 参数
    *opAccount  // 账户ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
   
### CW-31 财务账户解锁
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    PUT /finance/account/unlock/{opAccount}
#### 参数
    *opAccount  // 账户ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
    
### CW-32 资金账户锁定
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    PUT /finance/account/balance/lock/{id}
#### 参数
    *id // 资金账户ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }


### CW-33 资金账户解锁
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    PUT /finance/account/balance/unlock/{id}
#### 参数
    *id // 资金账户ID
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
    
### CW-34 资金账户导出
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    GET /finance/account/export
#### 参数
    keyword     // 客户编号、客户名称
    state           // 客户状态     NORMAL 正常 DELETE 休眠
    parentType // 账户类型 0:普通客户，1:总店， 2:分店， 不传：全部
    createTime  // 什么时间之后的资金账户
    *checkCode   // 校验码
#### 响应
    流

    
### CW-36 银企互联账户对比结果
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    GET /finance/bes/bankaccount/match
#### 参数
    bankAccount // 银行账户号
#### 响应
    {
        "code": 100000, // 成功，返回对比账户信息、失败返回错误信息
        "msg": "",
        "data": {
          "opAccount": xxx , // 客户资金账户号
          "customerLite" : {
            "shortName" : "xxx" // 客户名
          },
          "financeAccountBank": {
            "bankType":"ICBC" // 银行类型
            "bankTypeName": "工商银行" // 银行类型名
            "bankName":"工商银行大连支行" // 银行名称
            "bankAccountName": "李雪梅" // 开户名
          }
        }
    }


### CW-37 银企互联列表
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    GET /finance/bes
#### 参数
    keyword     // 客户名、客户编号
    status          // 状态   WAIT 待处理 ASKFOR 申请中 COMPLETE 已自动入款 IGNORE 忽略
    oppKeyword      // 对方户名、账户号
    buttonPermissionFlg // 是否查询按钮权限 0 不查询 1 查询  默认0
    pageNo              // 页码  默认1
    pageSize            // 页大小 默认25
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissionPage": {},
            "buttonPermissions": [
                {
                    "payInUpButton": false,
                    "matchButton": false
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "id": 37760,                // matchId
                    "relationSid": 37760,       // abcId
                    "accno": "262001040030059", // 入款账号
                    "accname": "亚洲渔港股份有限公司",    // 入款账户名
                    "oppaccno": "536701040018166",      // 打款账号
                    "oppname": "绍兴市咭味哆餐饮管理有限公司",    // 打款账户名
                    "bankSerialsid": "ABC-20190701144741265204401460571",   // 银行流水号
                    "amt": 45400,                   // 交易金额
                    "preamt": 11800464.34,          // 上笔余额
                    "bal": 11845864.34,             // 账户余额
                    "totchg": 0,                    // 手续费用
                    "bankType": "ABC",              // 银行类型
                    "bankTypeName": "中国农业银行"   // 银行类型中文名
                    "matchAccount": 33239,          // 系统比对账户
                    "matchAccountName": "绍兴市咭味哆餐饮管理有限公司", // 系统比对账户名
                    "opAccount": 33239,                     // 实际入款账户
                    "opAccountName": "绍兴市咭味哆餐饮管理有限公司",  // 时间入款账户名
                    "status": "COMPLETE", // 状态 WAIT 待处理 ASKFOR 申请中 COMPLETE 已自动入款 IGNORE 忽略
                    "abs": "0199",          // 摘要
                    "trdate": "20190701"    // 交易日期
                    "timestab": "2019-07-01 14:47:41",  // 交易时间
                    "postscript":"附言"
                }
            ],
            "pageNo": 0,
            "total": 0
        }
    }
    
  
### CW-38 银企互联手动对比
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    PUT /finance/bes/match/{abcId}
#### 参数
    *abcId      // CW-46已返回
#### 响应 
    {
        "code": 100000,
        "msg": "",
        "data": null
    }   
      
### CW-39 银企互联入款（其它）
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    PUT /finance/bes/ignore/{matchId}
#### 参数
    *matchId      // CW-46已返回
#### 响应 
    {
        "code": 100000,
        "msg": "",
        "data": null
    }  
    
### CW-40 银企互联明细
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    GET /finance/bes/{abcId}
#### 参数
    *abcId      // CW-46已返回
#### 响应 
    {
        "code": 100000,
        "msg": "",
        "data": {
            "id": 1,                        // matchId
            "relationSid": 1,               // abcId
            "abs": "0199",
            "accno": "262001040030059",                     // 收款银行账号
            "accname": "亚洲渔港供应链管理（大连）有限公司",     // 收款银行账户名
            "bankType": "ABC",                          // 汇款银行类型
            "oppaccno": "6228480298991950973",          // 汇款银行账号
            "oppname": "刘会军",                         // 汇款银行账户名
            "bankSerialsid": "ABC-20161017090253125485155673739",   // 银行流水号
            "matchAccount": 0,                          // 对比账户opAccount
            "matchAccountName": "比对有多个客户",         // 对比账户名
            "opAccount": 0,                         // 实际入款账户
            "opAccountName": "",                    // 时间入款账户名
            "amt": 42723,                               // 交易金额
            "bal": 4850507.1,
            "preamt": 4807784.1,
            "status": "WAIT",
            "timestab": "2016-10-17 09:02:53",              // 交易时间
            "totchg": 0,
            "trdate": "20161017"
        }
    }
  
        
### CW-41 主流水
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    GET /finance/flow
#### 参数
    *opAccount  // 账户ID
    opBalance   // 账户类型 BALANCE 预付款 DEPOSIT 定金
    payStime    // 开始时间
    payEtime    // 结束时间
    orderId     // 订单号 2019-09-18 添加查询条件
    serialsId   // 支付流水/第三方流水
    pageNo      // 页码 默认 1
    pageSize    // 页大小 默认25
#### 响应 
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissionPage": {},
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "id": 0,
                    "platformId": 1,
                    "opAccount": 27787,             // 账户ID
                    "opBalance": "BALANCE", // 账户类型 BALANCE 预付款 DEPOSIT 定金
                    "opBusiness": "ORDER", // 业务类型 WX ALI BANK ORDER TRANSFER HAND
                    "opBusinessName": "销售订单支付", // 摘要
                    "serialsid": "15619478510088497184247500831880-1", // 流水号
                    "thirdSerialsid": "4200000026201709203183289573",   // 第三方流水号
                    "payTime": "2019-07-01 10:25:05", // 支付时间
                    "money": -5596.4,       // 充值、扣款金额
                    "aftBalance": 0,        // 变动前余额
                    "preBalance": 5596.4,   // 变动后余额
                    "status": "NORMAL",
                    "orderType": "SA",      // SA 销售订单 SR 销售退 AP 调价
                    "orderId":"SA20190505050505", // 订单号、腿单号、调价单号
                    "trAccount": 27787
                    "createTime": "",
                    "deleteFlg": 0,
                    "oid": 831880,
                }
            ],
            "pageNo": 0,
            "total": 2
        }
    }
  
  
### CW-42 微信子流水（opBusiness=WX）
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    GET /finance/flow/wx/{serialSid}
#### 参数
    *serialSid  // 流水号
#### 响应 
    {
        "code": 100000,
        "msg": "",
        "data": {
            "id": 16321,
            "opAccount": 27787,        // 账户ID
            "serialsid": "15619478510088497184247500831880", // 订单号
            "transactionId": "4200000313201907014386388531" // 微信支付订单号
            "tradeType": "APP",             //  微信交易类型
            "bankType": "CMB_CREDIT",       // 微信付款银行
            "appId": "wxd15f69fcf1f3a388",  // 公众号ID
            "cashFee": 5596.4,          // 交易金额
            "resultCode": "SUCCESS",        // 微信业务结果
            "mchId": "1484184462",      // 微信商户号
            "openId": "o2F0GxMapYIKhxrmZY_Ak18xD0G0",   // 唯一标识
            "payTime": "2019-07-01 10:25:05",     // 创建时间
        }
    }

### CW-43 支付宝子流水（opBusiness=ALI）
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    GET /finance/flow/ali/{serialSid}
#### 参数
    *serialSid  // 流水号
#### 响应 
    {
        "code": 100000,
        "msg": "",
        "data": {
            "id": 1,
            "opAccount": 2730,          // 账户ID
            "serialsid": "15057145010021063126888700605203", // 订单号
            "buyerId": "2088802666172422",  // 买家支付宝用户号
            "buyerLogonId": "",             // 买家支付宝号
            "sellerId": "2088211612270167",     // 卖家支付宝用户号
            "sellerEmail": "asagroup@aliyun.com",   // 卖家支付宝号
            "totalFee": 0.01,                       // 交易金额
            "payTime": "2017-09-18 14:01:54",       // 交易时间
            "tradeNo": "2017091821001004420248542003",  // 支付宝交易号
            "tradeStatus": "TRADE_SUCCESS"              // 交易状态
        }
    }
    
### CW-44 手工、银行、定金子流水（opBusiness in ('BANK','TRANSFER','HAND')）
#### 对接负责人
    尹洪明
#### 模块负责人
    王子悦
#### 请求
    GET /finance/flow/full/{serialSid}
#### 参数
    *serialSid  // 流水号
#### 响应 
    {
        "code": 100000,
        "msg": "",
        "data": {
            "opBalance": "BALANCE",    // 流程名称 BALANCE 预付款 DEPOSIT 定金
            "relationSid": 0,   // 流程id
            "money": 97100,     // 操作金额
            "opBusinessName": "预付款手工转入",   // 流程类型
            "opTime": "2015-08-28 08:24:40", // 操作时间
            "remark": " 8.27"           // 备注
            "checkTime": "",        // 审核时间
            "checkUserName": "",        // 审核人
            "createTime": "",       // 创建时间
            "createUserName": "",   // 创建人
            "bankType": "ABC",  //银行类型 ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
            "outBankAccount": "91210155300001256", //汇出账户
            "outBankAccountName": "湊湊餐饮管理有限公司", //汇出账户名
            "inBankAccount": "262001040030059", //汇入账户
            "inBankAccountName": "亚洲渔港供应链管理（大连）有限公司", //汇入账户名
        }
    }
  
### CW-45 订单子流水（opBusiness = 'ORDER' and orderType = 'SA')
#### 对接负责人
    尹洪明、梁铁骑
#### 模块负责人
    王子悦
#### 请求
    GET /finance/flow/order/sa/{serialSid}
#### 参数
    *serialSid  // 流水号  
#### 响应  
    参考 DD-106
      
### CW-46 退单子流水（opBusiness = 'ORDER' and orderType = 'SR')
#### 对接负责人
    尹洪明、梁铁骑
#### 模块负责人
    王子悦
#### 请求
    GET /finance/flow/order/sr/{serialSid}
#### 参数
    *serialSid  // 流水号   
#### 响应
    参考 DD-54
      
### CW-47 调价子流水（opBusiness = 'ORDER' and orderType = 'AP')
#### 对接负责人
    尹洪明、梁铁骑
#### 模块负责人
    王子悦
#### 请求
    GET /finance/flow/order/ap/{serialSid}
#### 参数
    *serialSid  // 流水号  
#### 响应 
    参考 DD-6
  
### CW-51. 定金管理-列表
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
    timeoutFlg: 1 // 定金是否过期 0-否 1-是
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
                    "lockButton": true, // 锁定按钮
                    "unlockButton": true, // 解锁按钮
                    "chooseButton": true // 选择按钮（只有在选择定金规则弹出层才做展示）
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
                    "effectEtime": "2019-06-17 23:59:59", // 定金有效期结束时间
                    "effectRange": "4417,122", // 定金产品范围（产品id，以','相隔）
                    "effectStime": "2019-06-04 00:00:00", // 定金有效期开始时间
                    "id": 32768, // 定金id
                    "money": 7.68, // 定金余额
                    "opAccount": 925, // 客户id（客户账户id）
                    "orignalAmount": 241920, // 定金原始金额
                    "timeout": 1, // 定金是否过期 0-否 1-是
                    "platformId": 0,
                    "ratio": 100, // 定金比例
                    "status": "NORMAL", // 定金状态 NORMAL 正常 LOCK 锁定
                    "productSize": 3 // 产品数量
                },
                ...
            ],
            "pageNo": 1,
            "total": 0
        }
    }

### CW-52. 定金管理-详情
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/finance/deposits/{id}
#### 参数
    id: 32769 // 定金id
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
            "effectEtime": "2019-06-17 23:59:59", // 定金有效期结束时间
            "effectRange": "4417,122", // 定金产品范围（产品id，以','相隔）
            "effectStime": "2019-06-04 00:00:00", // 定金有效期开始时间
            "id": 32768, // 定金id
            "products": [ // 产品范围列表
                {
                    "id": 274, // 产品id
                    "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190516153141129-7292.jpg", // 主图url
                    "name": "黄金蝴蝶虾（特制）", // 品名
                    "pno": "0181", // 品号
                }
            ],
            "money": 7.68, // 定金余额
            "balanceMoney": 1000, // 预付款余额
            "opAccount": 925, // 客户id（客户账户id）
            "orignalAmount": 241920, // 定金原始金额
            "platformId": 0,
            "ratio": 100, // 定金比例
            "status": "NORMAL", // 定金状态 NORMAL 正常 LOCK 锁定
        }
    }

### CW-53. 定金管理-日志列表
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/finance/deposits/{id}/logs
#### 参数
    id: 32769 // 定金id
#### 着重说明
    effectStime、effectEtime、money、ratio 这四个个属性为【涉及数据列】，有哪个就显示哪个
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "datas": [
                {
                    "effectStime": "2018-03-08 00:00:00", // 定金有效期开始时间
                    "effectEtime": "2018-03-30 23:59:59", // 定金有效期结束时间
                    "money": 24600, // 涉及金额
                    "opInfo": "预付款转新增定金", // 操作内容
                    "opTime": "2018-03-08 15:00:00", // 操作时间
                    "opUserName": "崔洋洋", // 操作人
                    "ratio": 100 // 定金比例
                }
            ],
            "pageNo": 1, // 页码
            "total": 0
        }
    }

### CW-54. 定金审核管理-列表
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
    DEPOSIT_ADD 定金新增
    DEPOSIT_HAND_ADD 定金手动充值
    DEPOSIT_HAND_REDUCE 定金手动扣款
    DEPOSIT_TRANSFER_BALANCE 定金转预付款
    BALANCE_TRANSFER_DEPOSIT 预付款转已有定金
    BALANCE_TRANSFER_NEW_DEPOSIT 预付款转新增定金
    DEPOSIT_TRANSFER_BANK 定金转出银行
    BANK_TRANSFER_NEW_DEPOSIT 银行转入新增定金
    BANK_TRANSFER_DEPOSIT 银行转入定金
    MODIFY_DEPOSIT_RULE 修改定金规则
#### 说明
    只有当action_type == MODIFY_DEPOSIT_RULE、DEPOSIT_ADD、BALANCE_TRANSFER_NEW_DEPOSIT、BANK_TRANSFER_NEW_DEPOSIT时， "规则调整" 列才做显示
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
                    "bankType": "CCB", // 汇款银行类别 ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
                    "receiveBankType": "CCB", // 收款银行类别 ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
                    "bankAccount": "", // 打款人账号
                    "bankAccountName": "", // 打款人名称
                    "receiveBankAccount": "", // 收款人账号
                    "receiveBankAccountName": "", // 收款人名称
                    "checkTime": "2019-07-10 12:00:00", // 审批时间
                    "checkUserName": "", // 审批人名称
                    "createRemark": "", // 创建备注
                    "createTime": "2019-06-18 13:54:12", // 创建时间
                    "createUserName": "张亚婕", // 创建人名称
                    "customer": {
                        "shortName": "常州协瑞国际贸易有限公司", // 客户名称
                    },
                    "depositId": 0,
                    "effectEtime": "2019-07-10 00:00:00", // 定金有效期结束时间
                    "effectRange": "111,333",
                    "effectStime": "2019-08-10 23:59:59", // 定金有效期开始时间
                    "id": 1, // 申请主键id
                    "money": -19292, // 金额
                    "payTime": "2019-07-15 12:30:00", // 充值/扣款时间
                    "opAccount": 3885, // 客户id（客户账户id）
                    "ratio": 20, // 比例
                    "relationSid": 0, // 大于0则为"银企"
                    "status": "PASS" // 审核状态 ASKFOR-待审核 PASS-通过 REFUSE-拒绝
                },
                ...
            ],
            "pageNo": 1,
            "total": 0
        }
    }

### CW-55. 定金审核管理-拒绝
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    PUT /v2/finance/deposit/askfors/{id}/refuse
#### 参数
    id: 定金申请id
    body: 
    {
        remark: "123"
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CW-56. 定金审核管理-通过
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    PUT /v2/finance/deposit/askfors/{id}/pass
#### 参数
    id: 定金申请id
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

### CW-57. 定金审核管理-新增
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    POST /v2/finance/deposit/askfors
#### 参数
    页面各节点对应的请求数据结构
    1、定金管理 - 新增
    	（充值方式）手动充值: 
    		{
    			*opAccount: 1, // 客户账户id
    			*actionType: "DEPOSIT_ADD" // 固定传
    			*money: 10000, // 金额
    			*ratio: 90, // 比例 90%
    			*effectRange: "111,222" // 产品id范围 以","相隔
    			*effectStime: "2019-07-11 10:10:00" // 定金有效期开始时间
    			*effectEtime: "2019-09-11 10:10:00" // 定金有效期结束时间
    			*payTime: "2019-07-10 00:00:00" // 充值时间
    			createRemark: "" // 备注
    		}
    	（充值方式）银行转入
    		{
    			*opAccount: 1, // 客户账户id
    			*actionType: "BANK_TRANSFER_NEW_DEPOSIT" //固定传
    			*money: 10000, // 金额
    			*ratio: 90, // 比例 90%
    			*bankType: "CCB", // 汇款人银行类别 ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
                *receiveBankType: "CCB", // 收款人银行类别 ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
    			*bankAccount: "", // 汇款人账号
    			*bankAccountName: "", // 汇款人名
    			*receiveBankAccount: "", // 收款账号
    			*receiveBankAccountName: "", // 收款人名
    			*effectRange: "111,222" // 产品id范围 以","相隔
    			*effectStime: "2019-07-11 10:10:00" // 定金有效期开始时间
    			*effectEtime: "2019-09-11 10:10:00" // 定金有效期结束时间
    			*payTime: "2019-07-10 00:00:00" // 充值时间
    			createRemark: "" // 备注
    		}
    	（充值方式）预付款转入
    		{
    			*opAccount: 1, // 客户账户id
    			*actionType: "BALANCE_TRANSFER_NEW_DEPOSIT" // 固定传
    			*money: 10000, // 金额
    			*ratio: 90, // 比例 90%
    			*effectRange: "111,222" // 产品id范围 以","相隔
    			*effectStime: "2019-07-11 10:10:00" // 定金有效期开始时间
    			*effectEtime: "2019-09-11 10:10:00" // 定金有效期开始时间
    			*payTime: "2019-07-10 00:00:00" // 充值时间
    			createRemark: "" // 备注
    		}
    2、定金管理 - 充值
    	（充值方式）手动充值
    		{
    			*depositId: 1 // 定金账户id
    			*opAccount: 1, // 客户账户id
    			*actionType: "DEPOSIT_HAND_ADD" // 固定传
    			*money: 10000, // 金额
    			*payTime: "2019-07-10 00:00:00" // 充值时间
    			createRemark: "" // 备注
    		}
    	（充值方式）银行转入
    		{
    			*depositId: 1, // 定金账户id
    			*opAccount: 1, // 客户账户id
    			*actionType: "BANK_TRANSFER_DEPOSIT" // 固定传
    			*money: 10000, // 金额
    			*bankType: "CCB", // 汇款人银行类别 ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
                *receiveBankType: "CCB", // 收款人银行类别 ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
    			*bankAccount: "", // 汇款账号
    			*bankAccountName: "", // 汇款人名称
    			*receiveBankAccount: "", // 收款账号
    			*receiveBankAccountName: "", // 收款人名称
    			*payTime: "2019-07-10 00:00:00" // 充值时间
    			createRemark: "" // 备注
    		}
    	（充值方式）预付款转入
    		{
    			*depositId: 1, // 定金id
    			*opAccount: 1, // 客户账户id
    			*actionType: "BALANCE_TRANSFER_DEPOSIT" // 固定传
    			*money: 10000, // 金额
    			*payTime: "2019-07-10 00:00:00" // 充值时间
    			createRemark: "" // 备注
    		}
    3、定金管理 - 扣款
    	（扣款方式）手动扣款
    		{
    			*depositId: 1, // 定金id
    			*opAccount: 1, // 客户账户id
    			*actionType: "DEPOSIT_HAND_REDUCE" // 固定传
    			*money: 10000, // 金额
    			*payTime: "2019-07-10 00:00:00" // 扣款时间
    			createRemark: "" // 备注
    		}
    	（扣款方式）转出至银行
    		{
    			*depositId: 1, // 定金id
    			*opAccount: 1, // 客户账户id
    			*actionType: "DEPOSIT_TRANSFER_BANK" // 固定传
    			*money: 10000, // 金额
    			*bankType: "CCB", // 收款人银行类别 ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
                *receiveBankType: "CCB", // 转出银行类别 ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
    			*bankAccount: "", // 收款账号
    			*bankAccountName: "", // 收款人名称
    			*receiveBankAccount: "", // 转出账号
    			*receiveBankAccountName: "", // 转出人名称
    			createRemark: "" // 备注
    		}
    	（扣款方式）转出至预付款
    		{
    			*depositId: 1, // 定金id
    			*opAccount: 1, // 客户账户id
    			*actionType: "DEPOSIT_TRANSFER_BALANCE" // 固定传
    			*money: 10000, // 金额
    			*payTime: "2019-07-10 00:00:00" // 扣款时间
    			createRemark: "" // 备注
    		}
    4、定金管理 - 修改规则信息
    	{
    		*depositId: 1, // 定金id
    		*opAccount: 2, // 客户账号id
    		*actionType: "MODIFY_DEPOSIT_RULE" // 固定传
    		*ratio: 90, // 比例 90%
    		*effectRange: "111,222" // 产品id范围 以","相隔
    		*effectStime: "2019-07-11 10:10:00" // 定金有效期开始时间
    		*effectEtime: "2019-09-11 10:10:00" // 定金有效期结束时间
    		createRemark: "" // 备注
    	}
    5、资金账户 - 账户信息 - 定金充值
    	（充值方式）手动充值
    			{
    				*depositId: 1, // 定金id
    				*opAccount: 1, // 客户账户id
    				*actionType: "DEPOSIT_HAND_ADD" // 固定传
    				*money: 10000, // 金额
    				*payTime: "2019-07-10 00:00:00" // 充值时间
    				createRemark: "" // 备注
    			}
    	（充值方式）银行转入
    			{
    				*depositId: 1, // 定金id
    				*opAccount: 1, // 客户账户id
    				*actionType: "BANK_TRANSFER_DEPOSIT" // 固定传
    				*money: 10000, // 金额
    				*bankType: "CCB", // 汇款人银行类别 ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
                    *receiveBankType: "CCB", // 收款人银行类别 ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
    				*bankAccount: "", // 汇款账号
    				*bankAccountName: "", // 汇款人名称
    				*receiveBankAccount: "", // 收款账户
    				*receiveBankAccountName: "", // 收款人名称
    				*payTime: "2019-07-10 00:00:00" // 充值时间
    				createRemark: "" // 备注
    			}
    	（充值方式）预付款转入
    			{
    				*depositId: 1, // 定金id
    				*opAccount: 1, // 客户账户id
    				*actionType: "BALANCE_TRANSFER_DEPOSIT" // 固定传
    				*money: 10000, // 金额
    				*payTime: "2019-07-10 00:00:00" // 充值时间
    				createRemark: "" // 备注
    			}
    6、资金账户 - 账户信息 - 定金扣款
    	（扣款方式）手动扣款
    		{
    			*depositId: 1, // 定金id
    			*opAccount: 1, // 客户账户id
    			*actionType: "DEPOSIT_HAND_REDUCE" // 固定传
    			*money: 10000, // 金额
    			*payTime: "2019-07-10 00:00:00" // 扣款时间
    			createRemark: "" // 备注
    		}
    	（扣款方式）转出至银行
    		{
    			*depositId: 1, // 定金id
    			*opAccount: 1, // 客户账户id
    			*actionType: "DEPOSIT_TRANSFER_BANK" // 固定传
    			*money: 10000, // 金额
    			*bankType: "CCB", // 收款人银行类别 ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
                *receiveBankType: "CCB", // 转出银行类别 ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
    			*bankAccount: "", // 收款账号
    			*bankAccountName: "", // 收款人名称
    			*payTime: "2019-07-10 00:00:00" // 扣款时间
    			*receiveBankAccount: "", // 转出帐号
    			*receiveBankAccountName: "", // 转出人名称
    			createRemark: "" // 备注
    		}
    	（扣款方式）转出至预付款
    		{
    			*depositId: 1, // 定金id
    			*opAccount: 1, // 客户账户id
    			*actionType: "DEPOSIT_TRANSFER_BALANCE" // 固定传
    			*money: 10000, // 金额
    			*payTime: "2019-07-10 00:00:00" // 扣款时间
    			createRemark: "" // 备注
    		}
    7、银企互联 - 入款
    	（充值账户）定金 - （定金类型）充值至已有定金
    		{
    			*depositId: 1, // 定金id
    			*opAccount: 1, // 客户账户id
    			*actionType: "BANK_TRANSFER_DEPOSIT" // 固定传
    			*money: 10000, // 金额
    			*bankType: "ABC", // 固定传
                *receiveBankType: "ABC", // 固定传
    			*bankAccount: "", // 汇款账号
    			*bankAccountName: "", // 汇款人名称 
    			*receiveBankAccount: "", // 收款账号
    			*receiveBankAccountName: "", // 收款人名称
    			*payTime: "2019-07-10 00:00:00" // 充值时间
    			*************
    		    *****relationSid: 1 // 银企互联数据id
    			*************
    			createRemark: "" // 备注
    		}
    	（充值账户）定金 - （定金类型）充值至新增定金
    		{
    			*opAccount: 1, // 客户账户id
    			*actionType: "BANK_TRANSFER_NEW_DEPOSIT" // 固定传
    			*money: 10000, // 金额
    			*ratio: 90, // 比例90%
    			*money: 10000, // 金额
                *bankType: "ABC", // 固定传
                *receiveBankType: "ABC", // 固定传
    			*bankAccount: "", // 汇款账号
    			*bankAccountName: "", // 汇款人名称
    			*receiveBankAccount: "", // 收款账号
    			*receiveBankAccountName: "", // 收款人名称
    			*effectRange: "111,222" // 产品id范围 以","相隔
    			*effectStime: "2019-07-11 10:10:00" // 定金有效期开始时间
    			*effectEtime: "2019-09-11 10:10:00" // 定金有效期结束时间
    			*payTime: "2019-07-10 00:00:00" // 充值时间
    			*************
    		    *****relationSid: 1 // 银企互联数据id
    			*************
    			createRemark: "" // 备注
    		}
    8、资金账户 - 账户信息 - 预付款扣款
        （扣款方式）转出至定金 -（定金类型）转出至已有定金
        	{
        		*depositId: 1, // 定金id
        		*opAccount: 1, // 客户账户id
        		*actionType: "BALANCE_TRANSFER_DEPOSIT" // 固定传
        		*money: 10000, // 金额
        		*payTime: "2019-07-10 00:00:00" // 充值时间
        		createRemark: "" // 备注
        	}
        （扣款方式）转出至定金 - （定金类型）转出至新增定金
        	{
        		*opAccount: 1, // 客户账户id
        		*actionType: "BALANCE_TRANSFER_NEW_DEPOSIT" // 固定传
        		*money: 10000, // 金额
        		*ratio: 90, // 比例90%
        		*effectRange: "111,222" // 产品id范围 以","相隔
        		*effectStime: "2019-07-11 10:10:00" // 定金有效期开始时间
        		*effectEtime: "2019-09-11 10:10:00" // 定金有效期结束时间
        		*payTime: "2019-07-10 00:00:00" // 充值时间
        		createRemark: "" // 备注
        	}
    9、资金账户 - 账户信息 - 预付款充值
        （充值方式）定金转入
            {
            	*depositId: 1, // 定金id
            	*opAccount: 1, // 客户账户id
            	*actionType: "DEPOSIT_TRANSFER_BALANCE" // 固定传
            	*money: 10000, // 金额
            	*payTime: "2019-07-10 00:00:00" // 扣款时间
            	createRemark: "" // 备注
            }
    10、资金账户 - 充值
        （充值账户）预付款 - （充值方式）定金转入
                {
                	*depositId: 1, // 定金id
                	*opAccount: 1, // 客户账户id
                	*actionType: "DEPOSIT_TRANSFER_BALANCE" // 固定传
                	*money: 10000, // 金额
                	*payTime: "2019-07-10 00:00:00" // 扣款时间
                	createRemark: "" // 备注
                }
        （充值账户）定金 - （充值方式）手动充值 - （定金类型）充值至已有定金
                {
                	*depositId: 1 // 定金账户id
                	*opAccount: 1, // 客户账户id
                	*actionType: "DEPOSIT_HAND_ADD" // 固定传
                	*money: 10000, // 金额
                	*payTime: "2019-07-10 00:00:00" // 充值时间
                	createRemark: "" // 备注
                }
        （充值账户）定金 - （充值方式）手动充值 - （定金类型）充值至新增定金
                {
                	*opAccount: 1, // 客户账户id
                	*actionType: "DEPOSIT_ADD" // 固定传
                	*money: 10000, // 金额
                	*ratio: 90, // 比例 90%
                	*effectRange: "111,222" // 产品id范围 以","相隔
                	*effectStime: "2019-07-11 10:10:00" // 定金有效期开始时间
                	*effectEtime: "2019-09-11 10:10:00" // 定金有效期结束时间
                	*payTime: "2019-07-10 00:00:00" // 充值时间
                	createRemark: "" // 备注
                }
        （充值账户）定金 - （充值方式）银行转入 - （定金类型）充值至已有定金
                {
                	*depositId: 1, // 定金id
                	*opAccount: 1, // 客户账户id
                	*actionType: "BANK_TRANSFER_DEPOSIT" // 固定传
                	*money: 10000, // 金额
                	*bankType: "CCB", // 汇款人银行类别 ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
                    *receiveBankType: "CCB", // 收款银行类别 ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
                	*bankAccount: "", // 汇款账号
                	*bankAccountName: "", // 汇款人名称
                	*receiveBankAccount: "", // 收款账户
                	*receiveBankAccountName: "", // 收款人名称
                	*payTime: "2019-07-10 00:00:00" // 充值时间
                	createRemark: "" // 备注
                }
        （充值账户）定金 - （充值方式）银行转入 - （定金类型）充值至新增定金
                {
                	*opAccount: 1, // 客户账户id
                	*actionType: "BANK_TRANSFER_NEW_DEPOSIT" // 固定传
                	*money: 10000, // 金额
                	*ratio: 90, // 比例90%
                	*effectRange: "111,222" // 产品id范围 以","相隔
                	*effectStime: "2019-07-11 10:10:00" // 定金有效期开始时间
                	*effectEtime: "2019-09-11 10:10:00" // 定金有效期结束时间
                	*payTime: "2019-07-10 00:00:00" // 充值时间
                	*bankType: "CCB", // 汇款人银行类别 ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
                    *receiveBankType: "CCB", // 收款银行类别 ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
                	*bankAccount: "", // 汇款账号
                	*bankAccountName: "", // 汇款人名称
                	*receiveBankAccount: "", // 收款账号
                	*receiveBankAccountName: "", // 收款人名称
                	createRemark: "" // 备注
                }
        （充值账户）订金 - （充值方式）预付款转入 - （定金类型）充值至已有订金
                {
                	*depositId: 1, // 订金id
                	*opAccount: 1, // 客户账户id
                	*actionType: "BALANCE_TRANSFER_DEPOSIT" // 固定传
                	*money: 10000, // 金额
                	*payTime: "2019-07-10 00:00:00" // 充值时间
                	createRemark: "" // 备注
                }
        （充值账户）订金 - （充值方式）预付款转入 - （定金类型）充值至新增订金
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
    11、资金账户 - 扣款
        （扣款账户）预付款 - （扣款方式）转出至订金 - （定金类型）转出至已有订金
            {
            	*depositId: 1 // 订金账户id
            	*opAccount: 1, // 客户账户id
            	*actionType: "BALANCE_TRANSFER_DEPOSIT" // 固定传
            	*money: 10000, // 金额
            	*payTime: "2019-07-10 00:00:00" // 充值时间
            	createRemark: "" // 备注
            }
        （扣款账户）预付款 - （扣款方式）转出至订金 - （定金类型）转出至新增订金
            {
            	*opAccount: 1, // 客户账户id
            	*actionType: "BALANCE_TRANSFER_NEW_DEPOSIT" // 固定传
            	*money: 10000, // 金额
            	*ratio: 90, // 比例 90%
            	*effectRange: "111,222" // 产品id范围 以","相隔
            	*effectStime: "2019-07-11 10:10:00" // 订金有效期开始时间
            	*effectEtime: "2019-09-11 10:10:00" // 订金有效期结束时间
            	*payTime: "2019-07-10 00:00:00" // 充值时间
            	createRemark: "" // 备注
            }
        （扣款账户）订金 - （扣款方式）手动扣款
            {
            	*depositId: 1, // 订金id
            	*opAccount: 1, // 客户账户id
            	*actionType: "DEPOSIT_HAND_REDUCE" // 固定传
            	*money: 10000, // 金额
            	*payTime: "2019-07-10 00:00:00" // 扣款时间
            	createRemark: "" // 备注
            }
        （扣款账户）订金 - （扣款方式）转出至银行
            {
            	*depositId: 1, // 订金id
            	*opAccount: 1, // 客户账户id
            	*actionType: "DEPOSIT_TRANSFER_BANK" // 固定传
            	*money: 10000, // 金额
            	*bankType: "CCB", // 收款人银行类别 ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
                *receiveBankType: "CCB", // 转出银行类别 ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
            	*bankAccount: "", // 收款账号
            	*bankAccountName: "", // 收款人名称
            	*receiveBankAccount: "", // 转出账号
            	*receiveBankAccountName: "", // 转出人名称
            	createRemark: "" // 备注
            }
        （扣款账户）订金 - （扣款方式）转出至预付款
            {
            	*depositId: 1, // 订金id
            	*opAccount: 1, // 客户账户id
            	*actionType: "DEPOSIT_TRANSFER_BALANCE" // 固定传
            	*money: 10000, // 金额
            	*payTime: "2019-07-10 00:00:00" // 扣款时间
            	createRemark: "" // 备注
            }
    12、银企互联 - 银行汇款
        	（充值账户）定金 - （定金类型）充值至已有定金
        		{
        			*depositId: 1, // 定金id
        			*opAccount: 1, // 客户账户id
        			*actionType: "BANK_TRANSFER_DEPOSIT" // 固定传
        			*money: 10000, // 金额
        			*bankType: "ABC", // 汇款人银行类别 ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
                    *receiveBankType: "ABC", // 收款人银行类别 ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
        			*bankAccount: "", // 汇款账号
        			*bankAccountName: "", // 汇款人名称 
        			*receiveBankAccount: "", // 收款账号
        			*receiveBankAccountName: "", // 收款人名称
        			*payTime: "2019-07-10 00:00:00" // 充值时间
        			createRemark: "" // 备注
        		}
        	（充值账户）定金 - （定金类型）充值至新增定金
        		{
        			*opAccount: 1, // 客户账户id
        			*actionType: "BANK_TRANSFER_NEW_DEPOSIT" // 固定传
        			*money: 10000, // 金额
        			*ratio: 90, // 比例90%
        			*money: 10000, // 金额
                    *bankType: "ABC", // 汇款人银行类别 ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
                    *receiveBankType: "ABC", // 收款人银行类别 ABC 农业银行 ICBC 工商银行 CCB 建设银行 CHAOS 其它
        			*bankAccount: "", // 汇款账号
        			*bankAccountName: "", // 汇款人名称
        			*receiveBankAccount: "", // 收款账号
        			*receiveBankAccountName: "", // 收款人名称
        			*effectRange: "111,222" // 产品id范围 以","相隔
        			*effectStime: "2019-07-11 10:10:00" // 定金有效期开始时间
        			*effectEtime: "2019-09-11 10:10:00" // 定金有效期结束时间
        			*payTime: "2019-07-10 00:00:00" // 充值时间
        			createRemark: "" // 备注
        		}
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CW-58. 订金审核管理-获取规则详情
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/finance/deposit/askfors/{id}/rules
#### 参数
    id: 111 // 申请id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "checkUser": 518,
            "checkUserName": "系统操作",
            "createRemark": "我就是测试撒", // 备注
            "createRole": 1,
            "createTime": "2019-07-12 14:15:54",
            "createUser": 518,
            "createUserName": "孙启萌",
            "customer": {
                "shortName": "珠海恒海食品有限公司", // 客户名称
            },
            "deleteFlg": 0,
            "depositId": 0,
            "effectEtime": "2019-09-11 10:10:00", // 订金有效期结束时间
            "effectRange": "4691,4687",
            "effectStime": "2019-07-11 10:10:00", // 订金有效期开始时间
            "id": 544,
            "money": 10000,
            "opAccount": 1,
            "payTime": "2019-07-10 00:00:00.0",
            "products": [ // 产品列表
                {
                    "customFlgMore": 1, // 0 普通品  1 普通定制品  2 专属定制品
                    "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190314104529003-3509.jpg", // 主图
                    "name": "洋风椰蓉榴莲大福 ", // 品名
                    "pno": "1935", // 品号
                    "status": "LOCK", // NORMAL 上架 LOCK 下架
                },
                ...
            ],
            "ratio": 90, // 订金比例
        }
    }

### CW-59. 订金管理-获取定金对应的产品列表
#### 模块负责人
    王子悦
#### 对接负责人
    梁铁骐
#### 请求
    GET /v2/finance/deposits/{id}/products
#### 参数
    id: 111 // 定金主键id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "datas": [
                {
                    "customFlgMore": 1, // 0 普通品  1 普通定制品  2 专属定制品
                    "mainImg": "http://asae.oss-cn-beijing.aliyuncs.com/uploads/product/201803/146fb8cee80515f7178d086966cae4d7.jpg", // 主图
                    "name": "原味羊肉串", // 品名
                    "pno": "A471", // 品号
                    "status": "LOCK" // NORMAL 上架 LOCK 下架
                }
            ],
        }
    }


### CW-71. 支付管理-PC端支付，不允许补款
#### 模块负责人
    王子悦
#### 请求
    PUT /v2/finance/paystrategy/pay
#### 参数
    {
	"orderId":"SA19081500001",
	"opAccount":"33303"
    }
#### 响应
    {"code":100000,"msg":"","data":null}

### CW-72. 支付管理-SA单取消结款
#### 模块负责人
    王子悦
#### 请求
    PUT /v2/finance/paystrategy/cancelPay
#### 参数
    {
	"orderId":"SA19081500001",
	"opAccount":"33303"
    }
#### 响应
    {"code":100000,"msg":"","data":null}

### CW-73. 支付管理-销售退单(SR单)
#### 模块负责人
    王子悦
#### 请求
    PUT /v2/finance/paystrategy/srReturnPay
#### 参数
    {
	"orderId":"SA19081500001",
	"opAccount":"33303"
    }
#### 响应
    {"code":100000,"msg":"","data":null}

### CW-74. 支付管理-调价单(AP单)
#### 模块负责人
    王子悦
#### 请求
    PUT /v2/finance/paystrategy/apReturnPay
#### 参数
    {
	"orderId":"SA19081500001",
	"opAccount":"33303"
    }
#### 响应
    {"code":100000,"msg":"","data":null}

### CW-75.资金账户流水导出
#### 模块负责人
    王子悦
#### 请求
    GET /finance/flow/export
#### 参数
    keyword  //客户名称/客户手机号
    status   //客户状态 NORMAL 正常 DELETE 删除
    sDate    //查询开始日期 2019-08-15
    eDate    //查询结束日期
    opAccount   //客户id
    *checkCode //下载授权码
#### 响应
    导出文件

### CW-76.app端根据customerId获取用户流水信息
#### 模块负责人
    王子悦
#### 请求
    GET /user/transaction
#### 参数
    customerId  //客户id
    page //页码  默认1  如果page不等于1，  响应内容为空集合
#### 响应
    [
        {
            "list": [ //流水集合
                {
                    "in_amount": 91580, //入账金额
                    "out_amount": 0, //出账金额
                    "paytime": "2018-04-27 17:11:06", //支付时间
                    "reason": "人工操作 4.27建行", //备注
                    "remark": ""
                }
                ],
            "month": "04", //月份
            "year": "2018" //年份
        } 
    ]

### CW-77.根据银行账户号查询关联的客户信息
#### 模块负责人
    王子悦
#### 请求
    GET /finance/bes/bankaccount/list
#### 参数
    account //银行账户号
    pageNo  //页码
    pageSize //页数据数
#### 响应    
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissionPage": {},
            "buttonPermissions": null,
            "dataSums": null,
            "datas": [
                {
                    "customerLite": {
                        "businessunit": 89,
                        "businessunitName": "东北",
                        "companyName": "沈阳市大东区碧明水果批发商行\t \t",
                        "customerId": 32922,  //客户编号
                        "isParent": 0,
                        "isStockLimit": 0,
                        "platformId": 1,
                        "shortName": "沈阳市大东区碧明水果批发商行\t \t", // 客户名称
                        "srRoleId": 40,
                        "srRoleName": "高成举",
                        "ssRoleId": 29296,
                        "ssRoleName": "赵馨妍",
                        "state": "NORMAL",  //客户状态 NORMAL 正常 DELETE 删除
                        "type": "P"
                    },
                    "financeAccountBank": {
                        "bankAccount": "622908426071716410",
                        "bankAccountName": "魏娜", // 开户名
                        "bankName": "建行", // 银行名称
                        "bankType": "CHAOS", // 银行类型 ABC 农行 ICBC 工商银行 CCB 建设银行 CHAOS 未区分
                        "bankTypeName": "其它", // 银行类型名
                        "createRole": 0,
                        "createTime": "2019-03-16",
                        "createUser": 0,
                        "createUserName": "刘路敏",
                        "deleteFlg": 0,
                        "id": 8933,
                        "opAccount": 32922,
                        "platformId": 1,
                        "status": "NORMAL"
                    },
                    "opAccount": 32922 //客户资金账户号
                }
                ],
            "pageNo": 0,
            "total": 0
        }
    }