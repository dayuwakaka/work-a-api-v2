## 销售优惠

@(Markdown)


### XSYH-1. 新增合同

#### 请求url
    /v2/contract

#### 请求类型
    POST

#### 请求参数(独立合同、共享合同、P2P合同)
|参数|名称|类型|描述|
|---|---|---|---|
|*contractType|合同类别|String|ALONE-独立合同，SHARE-共享合同，CONTINUE-续接合同，P2P-P2P合同
|*customerIds|客户ids|String|合同主体客户id排在第一位，其余依次排列
|*details|合同四个季度及年度明细|Array|[{<br/>rebateNode:"FIRST",<br/>rebateRate:0,<br/>salesPlan:0,<br/>startDate:"2018-03-01 00:00:00",<br/>endDate:"2018-05-31 23:59:59"<br/>},<br/>...]<br/> rebateNode: 返利节点（FIRST、SECOND、THIRD、FOURTH、YEAR），<br/>rebateRate:返点率（0~100），<br/>salesPlan: 目标，<br/>startDate:开始日期时间 日期是客户所选，时间是固定在后面加00:00:00，<br/>endDate:结束日期时间 日期是客户所选 时间是固定在后面加23:59:59
|*startDate|合同开始日期|String|日期是客户所选，时间是固定在后面加00:00:00
|*endDate|合同结束日期|String|日期是客户所选，时间是固定在后面加23:59:59
|*formalUrl|合同附件URL|String|多张合同附件URL以','相隔
|*subjectName|合同主体名称|String
|remarks|备注|String|200字符以内|
|*onlyCode|本次提交携带的唯一码|String|防止重复提交用

#### 请求参数(续接合同)
|参数|名称|类型|描述|
|---|---|---|---|
|*contractType|合同类别|String|CONTINUE-续接合同
|*customerIds|客户ids|String|被续接主体排在第一位，续接主体排在第二位，以","相隔连接
|*formalUrl|合同附件URL|String|多张合同附件URL以','相隔
|*continueStartDate|续接合同时，设置的开始时间|String|日期是客户所选，时间是固定在后面加00:00:00
|*continueEndDate|续接合同时，设置的结束时间|String|日期是客户所选，时间是固定在后面加23:59:59
|*subjectName|续接合同主体名称|String
|remarks|备注|String
|*onlyCode|本次提交携带的唯一码|String|防止重复提交用

    请判断好四个季度的起始时间和结束时间，如例：
    *各季度时间不允许重叠，时间段必须在年度时间段内，各季度之间的时间可以不连贯！各季度时间为用户选择，非固定时间段
    *返点率可以0 范围：0 ~ 100 两位小数
    *目标可以为0 范围：0 ~ 1000000000 两位小数
    *年度目标不能为0
    *四个季度目标之和必须等于年度目标
![avatar](http://omgzp8h38.bkt.clouddn.com/Fg_HtWJKA_c0F--3bntTBUOIDPfI)
![avatar](http://omgzp8h38.bkt.clouddn.com/FsIEEtwAr48sLDKvnzEBP0MZ7g4q)

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|新增成功/异常信息|
|data|数据||

#### 返回示例
    {
        "code": "100000",
        "msg": ""
    }

### XSYH-2.获取合同列表

#### 请求url
    /v2/contract

#### 请求类型
    GET

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|name|合同主体名称、合同号、创建人名称|String
|contractType|合同类别|String|default-value: ALL, ALONE: 独立合同, SHARE: 共享合同, CONTINUE: 续接合同, P2P: P2P合同
|status|合同状态|String|default-value: ALL, DRAFT：草稿;ASKFOR：转正式待审核;FORMAL：正式;CANCELASKFOR：作废待审核;CANCEL：已作废;INVALID：过期|
|pageNo|当前页|Number|default-value: 1
|pageSize|页面容量|Number|default-value: 25
|buttonPermissionFlg|按钮权限|Number|0-查询按钮权限 1-不查询|

#### 返回值
##### datas返回值
|参数|名称|类型|描述|
|---|---|---|---|
|id|合同id|Number|
|contractNum|合同号|String|
|contractType|合同类别|String|
|createUserName|创建人|String|
|createTime|创建时间|String|
|subjectName|合同主体名称|String|
|status|合同状态|String|DRAFT：草稿;ASKFOR：转正式待审核;FORMAL：正式;CANCELASKFOR：作废待审核;CANCEL：已作废;INVALID：过期|

##### buttonPermissions返回值
    返回的集合长度和数据集一样，取对应下标数据即可，true 显示；false 不显示
    deleteButton: 删除按钮 ,
    changeRegularButton: 转正式,
    approvalButton: 审批,
    cancelButton: 作废,
    detailButton: 详情查看按钮

#### 请求示例
    /v2/contract?pageNo=1&pageSize=25&status=&contractType=&name=

#### 返回示例
    {
        code: 0,
        msg: "",
        data: {
            datas: [
                        {
                            id: 1,
                            contractNum: "ASA-c-123456789",
                            contractType: "ALONE",
                            createUserName: "苏轼",
                            createTime: "2018-08-13 00:12:12",
                            subjectName: "陶渊明",
                            status: "DRAFT"
                        },
                        ...
            ],
            buttonPermissions:[
                        {
                            deleteButton: false,
                            changeRegularButton: false,
                            approvalButton: false,
                            cancelButton: false
                        },
                        ...
            ],
            total: 1200 (总条数) - Number,
            pageNo: 6 (对应的页码) - Number
        }
    }

### XSYH-3.修改合同状态

#### 说明
    包括合同的转正式申请、作废申请

#### 请求url
    /v2/contract/{id}

#### 请求类型
    PUT

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*contractNum|合同号|String
|*result|审核结果|String|草稿状态合同转正式申请传递ASKFOR；正式合同申请作废传递CANCELASKFOR；
|remarks|备注|String
|cancelUrl|作废文件URL|String|作废合同时（必传）传递

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|修改成功/异常信息|
|data|数据|

### XSYH-4.申请审核

#### 说明
    包括合同转正式审核、作废审核

#### 请求url
    /v2/contract/approval/{id}

#### 请求类型
    PUT

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*contractNum|合同号|String|
|*result|审核结果|String|PASS：通过；REFUSE：拒绝
|remarks|备注|String|200 字符以内

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|修改成功/异常信息|
|data|数据|

### XSYH-5.获取合同详情

#### 请求url
    /v2/contract/{contractNum}

#### 请求类型
    GET

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*contractNum|合同号|String|

#### 返回值
|参数|名称|类型|描述|
|---|---|---|---|
|contract|合同基本信息|Object|
|details|合同各季度信息|Array|
|logs|合同日志|Array|
|subjects|合同下属客户|Array|
|continueInfo|续接信息|Object|如果是续接合同会返回此字段否则不会返回

##### contract信息
    {
         contractNum: "ASA-C-2719934593319936" (合同号) - String,
         contractType: "ALONE" (合同类别) - String,
         createUserName: "刘璇" (合同创建人名称) - String,
         createTime: "2018-05-31 19:16:14" (合同创建时间) - String,
         startDate: "2018-03-01 00:00:00" (合同开始时间) - String,
         endDate: "2019-02-28 23:59:59" (合同结束时间) - String,
         formalUrl: "http://omgzp8h38.bkt.clouddn.com/Fsi9JfiEO2V22wxaEzrL5s0QiPiA" (合同附件url以','相隔) - String
    }
##### details (合同明细)信息
    [
        {
            checkStatus:"NORMAL" (当前季度的状态，NORMAL:初始状态, INVALID:待审核, PASS:审核通过, STOP:禁止申请履约) - String,
            contractNum:"ASA-C-2719934593319936" (合同号) - String,
            startDate:"2018-03-01 00:00:00" (当前季度的开始时间) - String,
            endDate:"2018-05-31 23:59:59" (当前季度的结束时间) - String,
            id:6541,
            rebateNode:"FIRST" (季度节点 FIRST:第一季度,SECOND:第二季度,THIRD:第三季度,FOURTH:第四季度,YEAR:年度) - String,
            rebateRate:2 (返点率，前端展示的时候后面加上'%') - Number
            salesPlan:100000 (目标) - Number
        },
        ...
     ]
##### logs (操作日志)信息
    [
        {
            contractNum:"ASA-C-2719934593319936" (合同号) - String,
            action:"用户：宁丽丽转正式审批通过" (动作行为) - String,
            createTime:"2018-05-31 20:11:22" (行为时间) - String,
            remarks: "" (备注) - String
        },
        ...
    ]
##### subjects (附属客户)信息
    [
        {
            customerId： 1 (客户编号) - Number,
            name:"苏州工业园区肉食品市场厨多食品经营部" (下属客户名称) - String
        },
        ...
    ]
##### * 着重强调 如果合同是续接合同还会传递
    continueInfo: {
        startDate: 续接起始时间,
        endDate: 续接结束时间
    }

#### 请求示例
    /v2/contract/ASA-C-2719934593319936

#### 返回值示例
    {
        code: 0,
        msg: "",
        data: {
            contract: {...},
            details: [...]
            logs: [...]
            subjects: [...]
            continueInfo: {...}
        }
    }

### XSYH-6.删除合同
#### 请求url
    /v2/contract/{id}

#### 请求类型
    DELETE

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*id|合同id|Number

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0：失败；|
|msg|消息|删除成功/异常信息|
|data|数据||

#### 请求示例
     /v2/contract/66585

### XSYH-7.获取履约列表

#### 请求url
    /v2/contract/performance

#### 请求类型
    GET

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|name|合同主体名称、合同号、创建人名称|String
|checkStatus|履约状态|String|default-value: ALL; NORMAL: 待履约; INVALID:待审核; PASS: 已履约|
|rebateNode|节点|String|default-value: ALL; FIRST:一季度; SECOND：二季度; THIRD：三季度; FOURTH：四季度; YEAR：年度|
|reach|达成状态|String|YES: 已达成; NO: 未达成
|pageNo|当前页|Number|default-value: 1
|pageSize|页面容量|Number|default-value: 25
|buttonPermissionFlg|按钮权限|Number|0-查询按钮权限 1-不查询|

#### 返回值
##### datas返回值
|参数|名称|类型|描述|
|---|---|---|---|
|contractNum|合同号|String|
|contractType|合同类别|String|
|createUserName|创建人|String|
|startDate|季度开始时间|String|
|endDate|季度结束时间|String|
|subjectName|合同主体名称|String|
|rebateNode|季度节点|String|FIRST:一季度; SECOND：二季度; THIRD：三季度; FOURTH：四季度; YEAR：年度|
|performanceStatus|季度履约状态|String|NORMAL:待履约, INVALID:待审核, PASS:已履约, STOP:禁止申请履约|
|salesPlan|季度目标|Number|
|rebateRate|季度返点率|Number|前端显示可以直接在此字段后面加%|
|canUsePreferentialAmt|优惠金额|Number|
|fileUrl|履约附件url|String|为null 或者 为"" 代表没有附件|

##### buttonPermissions返回值
    返回的集合长度和数据集一样，取对应下标数据即可，true 显示；false 不显示
    performanceButton: 申请履约,
    approvalButton: 审批

#### 请求示例
    /v2/contract/performance?pageNo=1&pageSize=25&checkStatus=&rebateNode=&name=&reach=&name=

#### 返回值示例
    {
        code: 0,
        msg: "",
        data: {
            datas: [
                        {
                            contractNum: "ASA-1000000010848751",
                            startDate: "2017-03-01 00:00:00",
                            endDate: "2017-05-31 23:59:59",
                            subjectName: "汕头市金平区木屋食品行",
                            rebateNode: "FIRST",
                            performanceStatus: "NORMAL",
                            salesPlan: 100000,
                            rebateRate: 2,
                            canUsePreferentialAmt: 0,
                            fileUrl: "",
                            canApply: 0
                        },
                        ...
            ],
            buttonPermissions: [
                        {
                            performanceButton: false,
                            approvalButton: false
                        },
                        ...
            ],
            total: 618 (总条数) - Number,
            pageNo: 6 (对应页码) - Number
        }
    }

### XSYH-8.获取返利详细数据

#### 说明
    获取返利列表

#### 请求url
    /v2/contract/performance/{contractNum}/{rebateNode}

#### 请求类型
    GET

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*contractNum|合同号|String|
|*rebateNode|季度节点|String|FIRST、SECOND、THIRD、FOURTH、YEAR|

#### 返回值
|参数|名称|类型|描述|
|---|---|---|---|
|contract|合同基本信息|Object|
|contractDetail|合同季度信息|Object|
|saleDetail|销售优惠金额确认|Object|
|saleExists|订购并计入销售优惠客户明细|Array|
|saleNotExists|订购但不计入销售优惠产品明细|Array|

##### contract信息
    {
        contractNum: "ASA-1000000029456196" (合同号) - String,
        createUserName: "刘璇" (ss客服) - String,
        startDate: "2017-03-01 00:00:00" (开始时间) - String,
        endDate: "2018-02-28 23:59:59" (结束时间) - String,
        subjectName: "南京浩方食品贸易有限公司" (合同主体客户名称) - String
    }

##### contractDetail信息
    {
        rebateNode: "THIRD" (季度节点) - String
    }

##### saleDetail信息
    {
        preferentialAmt: 6047.38 (优惠金额) - Number,
        rebateRate: 2 (优惠比例) - Number,
        saleAmt: 306144.64 (总额) - Number,
        saleNotExistAmt: 3775.8 (不计入优惠金额) - Number,
        salesPlan: 150000 (任务额) - Number,
        shouldExistAmt: 302368.84 (应记优惠金额) - Number
    }

##### salesExists信息
    [
        {
            customerId: 27843 (客户编号) - Number,
            customerName: "南京浩方食品贸易有限公司" (客户名称) - String,
            orderAmt: 306144.64 (订单金额) - Number,
            apAmt: 0 (调价单金额) - Number,
            refundAmt: 0 (退单金额) - Number,
            saleAmt: 306144.64 (总额) - Number
        },
        ...
    ]

##### saleNotExists信息
    [
        {
            pno: "A526" (品号) - String,
            pname: "金装原壳鲍鱼" (品名) - String,
            specs: "210g(10枚）/袋*12袋" (规格) - String,
            count: 5 (数量) - Number,
            amount: 2394 (金额) - Number,
            saleNotExistRatio: 0.7 (不计入比例) - Number,
            saleNotExistAmt: 1675.8 (不计入金额) - Number
        },
        ...
    ]

#### 请求示例
    /v2/contract/performance/ASA-C-1000000029456196/THIRD

#### 返回值示例
    {
        code: 0,
        msg: "",
        data: {
            contract: {...},
            contractDetail: {...},
            saleDetail: {...},
            salesExists: {...},
            saleNotExists: {...}
        }
    }


### XSYH-9.申请履约

#### 说明
    客服为客户申请履约

#### 请求url
    /v2/contract/performance

#### 请求类型
    POST

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*contractNum|合同号|String
|*rebateNode|季度节点|String|FIRST、SECOND、THIRD、FOURTH、YEAR
|*customerAmt|客户id和发放金额拼接的字符串|String|Example: 93159,10000;93330,8000 逗号前为客户id，逗号后为发放金额 两位小数，可以不发但是如果发放，那么发放金额不能为0 做好校验
|*fileUrl|履约附件url|String|
|*onlyCode|本次提交携带的唯一码|String|防止重复提交用

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|修改成功/异常信息|
|data|数据|


#### 请求示例
    /v2/contract/performance

### XSYH-10.履约审批

#### 说明
    客服SS申请履约后，由财务会计进行审核

#### 请求url
    /v2/contract/performance/{contractNum}/{rebateNode}

#### 请求类型
    PUT

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*contractNum|合同号|String|
|*rebateNode|季度节点|String|
|*result|审核结果|String|PASS: 通过; REFUSE: 拒绝|
|remarks|备注|String|200字符以内|

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|修改成功/异常信息|
|data|数据|

#### 请求示例
    /v2/contract/performance/ASA-C-2736619920458752/FIRST


### XSYH-11.设置季度能否履约

#### 说明
    销售会计设置合同的某一季度能否履约

#### 请求url
    /v2/contract/performance/disable

#### 请求类型
    PUT

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*contractNum|合同号|String
|*rebateNode|季度节点|String
|*status|状态|String|NORMAL: 正常; STOP: 禁止履约

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0：失败；|
|msg|消息|删除成功/异常信息|
|data|数据|null|

#### 请求示例
    /v2/contract/performance/disable


### XSYH-12.获取合同所属的客户群体

#### 说明
    当申请履约时，要获取该合同下的所属客户以便进行返利券的发放

#### 请求url
    /v2/contract/performance/{contractNum}/customers

#### 请求类型
    GET

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*contractNum|合同号|String

#### 返回值
|参数|名称|类型|描述|
|---|---|---|---|
|customerId|客户id|Integer|
|customerName|客户名称|String|

#### 请求示例
    /v2/contract/performance/ASA-C-26988888686868/customers

#### 返回值示例
    {
        code: 0,
        msg: "",
        data: [
            {
                customerId: "768",
                customerName: "韩愈"
            },
            ...
        ]
    }

### XSYH-13.获取客户返利券列表

#### 请求url
    /v2/rebates

#### 请求类型
    GET

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|name|客户名、返利券名称|String
|source|返利券来源|String|contract: 合同返利; handwork: 手工发放|
|status|返利券状态|String|normal: 正常; lock: 锁定|
|rate|返利券折扣比例|Number|
|type|返利券类别|String|rebate: 返利, spread: 推广费, freight: 运费, other: 其它|
|pageNo|页码|Number|default-value: 1|
|pageSize|页面容量|Number|default-value: 25|
|buttonPermissionFlg|按钮权限|Number|0-查询按钮权限 1-不查询|

#### 返回值
##### datas返回值
|参数|名称|类型|描述|
|---|---|---|---|
|id|返利券id|Number|
|name|返利券名称|String|
|type|返利券类别|String|REBATE: 返利,SPREAD: 推广费,FREIGHT: 运费补,OTHER: 其它
|source|返利券来源 contract: 合同返利; handwork: 手工发放|String|
|sourceExt|如果返利券是合同返利生成的，这个字段存储的是合同的季度信息|String|FIRST：一季度 SECOND：二季度 THIRD：三季度 FOURTH：四季度 YEAR：年度|
|sourceValue|如果返利券是合同返利生成的，这个字段存储的是合同号|String|
|rate|折扣比率 前端展示直接在此值后面加 % 即可|Number|
|value|返利券面值|Number|
|leftValue|返利券剩余金额|Number|
|effectStime|返利券有效起始日期 yyyy-MM-dd HH:mm:ss|String|
|effectEtime|返利券有效结束日期 yyyy-MM-dd HH:mm:ss|String|
|customerName|客户名称|String|
|createUserName|创建人名称|String|
|createTime|返利券发放日期 yyyy-MM-dd HH:mm:ss|String|

##### buttonPermissions返回值
    返回的集合长度和数据集一样，取对应下标数据即可，true 显示；false 不显示
    deleteButton 作废按钮
    lockButton 锁定按钮
    unlockButton 解锁按钮
    logButton 日志查看按钮

#### 请求示例
    /v2/rebates?name=&status=&source=&pageNo=&pageSize=

#### 返回值示例
    {
        code: 0,
        msg: "",
        data: {
            datas: [
                        {
                            ...
                        },
                        ...
                   ],
            buttonPermissions:[
                        {
                            deleteButton: false,
                            lockButton: false,
                            unlockButton: false,
                            logButton: false
                        },
                        ...
            ],
            total: 93330 (总条数) - Number,
            pageNo: 12 (对应的页码) - Number
        }
    }

### XSYH-14.新增客户返利券

#### 请求url
    /v2/rebates

#### 请求类型
    POST

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*name|返利券名称|String|
|*customerId|客户id|Number|
|*customerName|客户名称|Stirng|
|*rate|折扣比率 20% -> 20|Number|
|*type|返利类别|String|REBATE: 返利, SPREAD: 推广费, FREIGHT: 运费, OTHER: 其它,|
|*value|面值|Number|
|*effectStime|返利券有效期起始日期|String|日期为客户所选 时间为自动补全 00:00:00
|*effectEtime|返利券有效期结束日期|String|日期为客户所选 时间为自动补全 23:59:59
|note|考虑了一下还是把备注加上吧|String|备注长度不得超过200
|*onlyCode|本次提交携带的唯一码|String|防止重复提交用

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|修改成功/异常信息|
|data|数据|

### XSYH-15.客户返利券解锁或锁定

#### 请求url
    /v2/rebates

#### 请求类型
    PUT

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*id|返利券id|Number|
|*result|操作行为|String|NORMAL: 解锁; LOCK: 锁定|

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|修改成功/异常信息|
|data|数据|

### XSYH-16.获取客户返利券去重后的折扣比例列表

#### 请求url
    /v2/rebates/rates

### 请求类型
    GET

#### 请求参数
    无

#### 返回值示例
    {
        code: 0,
        msg: "",
        data: [
            100,
            88,
            66
            60,
            20
        ]
    }


### XSYH-17.获取返利券日志列表

#### 请求url
    /v2/rebates/{id}/log

#### 请求类型
    GET

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*id|返利券id|Number|

#### 返回值
|参数|名称|类型|描述|
|---|---|---|---|
|actionValue|订单号|String|
|action|动作名称|String|
|createTime|操作时间|String|yyyy-MM-dd HH:mm:ss|
|createUserName|操作人|String|
|value|使用金额|Number|
|leftValue|返利券剩余金额|Number|

### XSYH-18.获取合同新增权限按钮

#### 请求url
    /v2/contract/buttons

#### 请求类型
    GET

#### 请求参数
    无

#### 返回值
|参数|名称|类型|描述|
|---|---|---|---|
|insertButton|新增按钮|Boolean|true - 显示；false - 不显示