## 销售优惠

@(Markdown)




### XSYH-2.获取合同列表
#### 模块负责人
    梁铁骐
#### 请求url
    /v2/contract

#### 请求类型
    GET

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|name|合同主体名称、合同号、创建人名称|String
|contractType|合同类型|String|default-value: ALL, ALONE: 独立合同, SHARE: 共享合同, CONTINUE: 续接合同, P2P: P2P合同
|status|合同状态|String|default-value: ALL, DRAFT：草稿;ASKFOR：转正式待审核;FORMAL：正式;CANCELASKFOR：作废待审核;CANCEL：已作废;INVALID：过期|
|date|年份|String|2019|
|pageNo|当前页|Number|default-value: 1
|pageSize|页面容量|Number|default-value: 25
|buttonPermissionFlg|按钮权限|Number|1-查询按钮权限 0-不查询|

#### 返回值
##### datas返回值
|参数|名称|类型|描述|
|---|---|---|---|
|id|合同id|Number|
|contractNum|合同号|String|
|contractType|合同类型|String|ALONE: 独立合同, SHARE: 共享合同, CONTINUE: 续接合同, P2P: P2P合同|
|createUserName|创建人|String|
|createTime|创建时间|String|
|subjectName|合同主体名称|String|
|status|合同状态|String|DRAFT：草稿;ASKFOR：转正式待审核;FORMAL：正式;CANCELASKFOR：作废待审核;CANCEL：已作废;INVALID：过期|

##### buttonPermissions返回值
    返回的集合长度和数据集一样，取对应下标数据即可，true 显示；false 不显示
    deleteButton: 删除按钮 ,
    changeRegularButton: 转正式,
    changeRegularPassButton： 通过 转正式 按钮,
    changeRegularRefuseButton:  拒绝 转正式 按钮,
    cancelPassButton:  通过 作废申请 按钮,
    cancelRefuseButton: 拒绝 作废申请 按钮,
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
    
### XSYH-6.删除合同
#### 模块负责人
    梁铁骐
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
#### 模块负责人
    梁铁骐
#### 请求url
    /v2/contract/performance

#### 请求类型
    GET

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|name|合同主体名称、合同号、创建人名称|String
|performanceStatus|履约状态|String|default-value: ALL; NORMAL: 待履约; INVALID:待审核; PASS: 已履约|
|rebateNode|节点|String|default-value: ALL; FIRST:一季度; SECOND：二季度; THIRD：三季度; FOURTH：四季度; YEAR：年度|
|reach|达成状态|String|YES: 已达成; NO: 未达成
|pageNo|当前页|Number|default-value: 1
|pageSize|页面容量|Number|default-value: 25
|buttonPermissionFlg|按钮权限|Number|1-查询按钮权限 0-不查询|

#### 返回值
    {
        code: 0,
        msg: "",
        data: {
            datas: [
                {
                     "contractNum": "ASA-C-3558798902117376", // 合同号
                     "contractType": "ALONE", // 合同类别
                     "createUserName": "", // 创建人
                     "detailPros": [ // 阶梯规则
                         {
                             "id": 1,
                             "ladderAmount": 20000, // 阶梯金额
                             "rebateRate": 2.1 // 阶梯返点率
                         },
                         ...
                     ],
                     "endDate": "2019-05-31 23:59:59", // 季度结束时间
                     "fileUrl": "", // 履约附件url 为null 或者 为"" 代表没有附件
                     "ladderFlg": 1, // 是否包含阶梯返点规则 0-否 1-是
                     "performanceStatus": "NORMAL", // 季度履约状态 NORMAL:待履约, INVALID:待审核, PASS:已履约, STOP:禁止申请履约
                     "preferentialAmt": 0, // 优惠金额
                     "rebateNode": "FIRST", // rebateNode FIRST:一季度; SECOND：二季度; THIRD：三季度; FOURTH：四季度; YEAR：年度
                     "rebateRate": 0, // 季度返点率 前端显示可以直接在此字段后面加%
                     "salesPercentage": "", // 销售达成比（即达成比）
                     "salesPlan": 0, // 季度目标
                     "shouldExistAmt": 0, // 应计入销售总额
                     "startDate": "2019-03-01 00:00:00", // 季度开始时间
                     "subjectName": "北京和合谷餐饮管理有限公司", // 合同主体名称
                ...
            ],
            buttonPermissions: [
                {
                    performanceButton: false, // 申请履约
                    passButton: false, // 通过按钮
                    refuseButton: false, // 拒绝按钮
                    detailButton: false, // 详情（优惠明细）
                    startButton: false, // 启用履约按钮
                    stopButton: false // 禁用履约按钮
                },
                ...
            ],
            total: 618 (总条数) - Number,
            pageNo: 6 (对应页码) - Number
        }
    }

### XSYH-8.获取返利详细数据
#### 模块负责人
    梁铁骐
#### 说明
    获取返利详细数据

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
|saleDetailPros|销售优惠金额明细|Array|

#### 强调
    销售优惠金额 为 saleDetail 信息里的 preferentialAmt

##### saleDetailPros信息
    [
        {
            contractNum: "ASA-C-3558798902117376"
            id: 11714
            ladderAmount: 400000 // 当前阶梯达标金额
            preferentialAmt: 13824 // 优惠金额
            rebateNode: "FOURTH" // 季度节点 FIRST:一季度; SECOND：二季度; THIRD：三季度; FOURTH：四季度; YEAR：年度
            rebateRate: 2 // 优惠比例（直接加%号即可）
            targetAmount: 0 // 合同目标起始金额
        }
    ]

##### contract信息
    {
        contractNum: "ASA-1000000029456196" (合同号) - String,
        createUserName: "刘璇" (销售支持) - String,
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
        rebateRate: 2 (优惠比例) - Number, // 作废于2020-02-25
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
#### 模块负责人
    梁铁骐
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
|*customerAmt|最少为一个客户！客户id和发放金额拼接的字符串|String|Example: 93159,10000;93330,8000 逗号前为客户id，逗号后为发放金额，分号为相隔符 两位小数，可以不发但是如果发放，那么发放金额不能为0 做好校验，客户不能重复
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


### XSYH-18.获取合同新增权限按钮
#### 模块负责人
    梁铁骐
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

### XSYH-19.合同转正式申请
#### 模块负责人
    梁铁骐
#### 请求url
    /v2/contract/formal/{contractNum}

#### 请求类型
    PUT

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*contractNum|合同号|String|

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|修改成功/异常信息|
|data|数据|

### XSYH-20.合同作废申请
#### 模块负责人
    梁铁骐
#### 请求url
    /v2/contract/invalid/{contractNum}

#### 请求类型
    PUT

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*contractNum|合同号|String|

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|修改成功/异常信息|
|data|数据|


### XSYH-21.合同转正式申请 通过
#### 模块负责人
    梁铁骐
#### 请求url
    /v2/contract/formal/pass/{contractNum}

#### 请求类型
    PUT

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*contractNum|合同号|String|

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|修改成功/异常信息|
|data|数据|

### XSYH-22.合同转正式申请 拒绝
#### 模块负责人
    梁铁骐
#### 请求url
    /v2/contract/formal/refuse/{contractNum}

#### 请求类型
    PUT

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*contractNum|合同号|String|
|remarks|备注|Stirng|200字符以内

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|修改成功/异常信息|
|data|数据|


### XSYH-23.合同作废申请 通过
#### 模块负责人
    梁铁骐
#### 请求url
    /v2/contract/invalid/pass/{contractNum}

#### 请求类型
    PUT

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*contractNum|合同号|String|

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|修改成功/异常信息|
|data|数据|


### XSYH-24.合同作废申请 拒绝
#### 模块负责人
    梁铁骐
#### 请求url
    /v2/contract/invalid/refuse/{contractNum}

#### 请求类型
    PUT

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*contractNum|合同号|String|
|remarks|备注|Stirng|200字符以内

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|修改成功/异常信息|
|data|数据|

### XSYH-25.履约申请 通过
#### 模块负责人
    梁铁骐
#### 请求url
    /v2/contract/performance/pass/{contractNum}/{rebateNode}

#### 请求类型
    PUT

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*contractNum|合同号|String|
|*rebateNode|季度节点|String||

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|修改成功/异常信息|
|data|数据|


### XSYH-26.履约申请 拒绝
#### 模块负责人
    梁铁骐
#### 请求url
    /v2/contract/performance/refuse/{contractNum}/{rebateNode}

#### 请求类型
    PUT

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*contractNum|合同号|String|
|*rebateNode|季度节点|String||
|remarks|备注|Stirng|200字符以内

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|修改成功/异常信息|
|data|数据|

### XSYH-27.禁用季度履约
#### 模块负责人
    梁铁骐
#### 请求url
    /v2/contract/performance/disable/{contractNum}/{rebateNode}

#### 请求类型
    PUT

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*contractNum|合同号|String|
|*rebateNode|季度节点|String||

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|修改成功/异常信息|
|data|数据|


### XSYH-28.启用季度履约
#### 模块负责人
    梁铁骐
#### 请求url
    /v2/contract/performance/enable/{contractNum}/{rebateNode}

#### 请求类型
    PUT

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*contractNum|合同号|String|
|*rebateNode|季度节点|String||

#### 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000：成功；0 ~ 99999：失败|
|msg|消息|修改成功/异常信息|
|data|数据|

### XSYH-30.获取合同所属的客户群体
#### 模块负责人
    梁铁骐
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
|id|客户id|Integer|
|companyName|客户名称|String|

#### 请求示例
    /v2/contract/performance/ASA-C-26988888686868/customers

#### 返回值示例
    {
        code: 0,
        msg: "",
        data: [
            {
                id: "768",
                companyName: "韩愈"
            },
            ...
        ]
    }

### XSYH-31. 新增合同
#### 模块负责人
    梁铁骐
#### 请求url
    /v2/contract

#### 请求类型
    POST

#### 请求参数(通用基础)
|参数|名称|类型|描述|
|---|---|---|---|
|*contractType|合同类别|String|ALONE-独立合同，SHARE-共享合同，CONTINUE-续接合同，P2P-P2P合同
|*startDate|合同开始日期|String|日期是客户所选，时间是固定在后面加00:00:00（年度起始时间， 如果合同是续接合同，这个就是续接起始时间）
|*endDate|合同结束日期|String|日期是客户所选，时间是固定在后面加23:59:59（年度结束时间， 如果合同是续接合同，这个就是续接结束时间）
|*formalUrl|合同扫描件URL|String|多张合同附件URL以','相隔
|*subjectName|合同主体名称|String
|remarks|备注|String|200字符以内|
|*onlyCode|本次提交携带的唯一码|String|防止重复提交用

#### 独立合同
    {
    	"contractType": "ALONE", // 合同类别 ALONE-独立合同，SHARE-共享合同，CONTINUE-续接合同，P2P-P2P合同
    	"startDate": "2020-03-01 00:00:00", // 合同开始日期 日期是客户所选，时间是固定在后面加00:00:00（年度起始时间， 如果合同是续接合同，这个就是续接起始时间）
    	"endDate": "2021-02-28 23:59:59", // 合同结束日期 日期是客户所选，时间是固定在后面加23:59:59（年度结束时间， 如果合同是续接合同，这个就是续接结束时间）
    	"formalUrl": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20200224114017253-8733.png", // 合同扫描件URL 多张合同附件URL以','相隔
    	"remarks": "", // 备注 200字符以内
    	"onlyCode": "_1155287232", // 本次提交携带的唯一码
    	"subjectName": "钟楼区凌家塘市场永富冷冻食品商行", // 合同主体名称
    	"customerId": 33679, // 客户id
    	"details": [{
    		"rebateNode": "FIRST", // 返利节点（FIRST、SECOND、THIRD、FOURTH、YEAR）
    		"salesPlan": 100000, // 目标
    		"rebateRate": 2, // 返点率（0~100）
    		"startDate": "2020-03-01 00:00:00", // 开始日期时间 日期是客户所选，时间是固定在后面加00:00:00
    		"endDate": "2020-05-31 23:59:59", // 结束日期时间 日期是客户所选 时间是固定在后面加23:59:59
    		"contractDetailPros": [ // 阶梯返点规则
    			{
    				"ladderAmount": 40000, // 阶梯金额
    				"rebateRate": 2.5 // 返点率 大于0小于100
    			},
    			...
    		]
    	},
    	...
    	]
    }

#### 共享合同
    {
    	"contractType": "SHARE", // 合同类别 ALONE-独立合同，SHARE-共享合同，CONTINUE-续接合同，P2P-P2P合同
    	"startDate": "2020-03-01 00:00:00", // 合同开始日期 日期是客户所选，时间是固定在后面加00:00:00（年度起始时间， 如果合同是续接合同，这个就是续接起始时间）
    	"endDate": "2021-02-28 23:59:59", // 合同结束日期 日期是客户所选，时间是固定在后面加23:59:59（年度结束时间， 如果合同是续接合同，这个就是续接结束时间）
    	"formalUrl": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20200224132010672-6825.png", // 合同扫描件URL 多张合同附件URL以','相隔
    	"remarks": "", // 备注 200字符以内
    	"onlyCode": "_1582521596891", // 本次提交携带的唯一码
    	"subjectName": "王冲3", // 合同主体名称
    	"customerId": 33359, // 主体客户id
    	"customerIds": [33360], // 共享客户id
    	"details": [{
    		"rebateNode": "FIRST", // 返利节点（FIRST、SECOND、THIRD、FOURTH、YEAR）
    		"salesPlan": 100000, // 目标
    		"rebateRate": 10, // 返点率（0~100）
    		"startDate": "2020-03-01 00:00:00", // 开始日期时间 日期是客户所选，时间是固定在后面加00:00:00
    		"endDate": "2020-05-31 23:59:59", // 结束日期时间 日期是客户所选 时间是固定在后面加23:59:59
    		"contractDetailPros": [ // 阶梯返点规则
            	{
            		"ladderAmount": 40000, // 阶梯金额
            		"rebateRate": 2.5 // 返点率 大于0小于100
            	},
            	...
            ]
    	}, 
    	...
    	]
    }

#### 请求参数(续接合同)
|参数|名称|类型|描述|
|---|---|---|---|
|*oldCustomerId|被续接客户id|String|
|*newCustomerId|续接客户id|String||

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

### XSYH-32.获取独立合同详情
#### 模块负责人
    梁铁骐
#### 请求url
    /v2/contract/alone/{contractNum}
    独立合同 - alone

#### 请求类型
    GET

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*contractNum|合同号|String|

#### 返回值
    {
        "contractNum": "ASA-C-2672664202232832", // 合同号
        "contractType": "ALONE", // 合同类型
        "createTime": "2018-04-28 09:50:19", // 合同创建时间
        "createUserName": "李欢欢", // 合同创建人
        "customerName": "3948", // 合同主体客户名
        "remarks": "2018年销售合同", // 备注
        "startDate": "2018-03-01 00:00:00", // 合同开始时间
        "endDate": "2019-02-28 23:59:59", // 合同结束时间
        "formalUrl": "http://omgzp8h38.bkt.clouddn.com/FqDXF7hibm2saEBxFLp9QcBNWCUh,http://dsafasdfasdfasdfasdf,http://sadfasdfasdfasdf", // 合同附件以逗号相隔
        "status": "FORMAL", // 合同状态 DRAFT：草稿;ASKFOR：转正式待审核;FORMAL：正式;CANCELASKFOR：作废待审核;CANCEL：已作废;INVALID:过期
        "details": [ // 合同明细
            {
                "checkStatus":"NORMAL" (当前季度的状态，NORMAL:初始状态, INVALID:待审核, PASS:审核通过, STOP:禁止申请履约) - String,
                "contractNum":"ASA-C-2719934593319936" (合同号) - String,
                "startDate":"2018-03-01 00:00:00" (当前季度的开始时间) - String,
                "endDate":"2018-05-31 23:59:59" (当前季度的结束时间) - String,
                "rebateNode":"FIRST" (季度节点 FIRST:第一季度,SECOND:第二季度,THIRD:第三季度,FOURTH:第四季度,YEAR:年度) - String,
                "rebateRate":2 (返点率，前端展示的时候后面加上'%') - Number
                "salesPlan":100000 (目标) - Number
                "ladderFlg": 1, // 是否包含阶梯返点规则 0-否 1-是
                "contractDetailPros": [
                    {
                        "id": 3,
                        "ladderAmount": 60000, // 阶梯金额
                        "rebateRate": 2.6 // 返点率
                    },
                    ...
                ],
            },
            ...
        ],
        "logs": [
            {
                contractNum:"ASA-C-2719934593319936" (合同号) - String,
                action:"用户：宁丽丽转正式审批通过" (动作行为) - String,
                createTime:"2018-05-31 20:11:22" (行为时间) - String,
                remarks: "" (备注) - String
            },
            ......
        ]
    }

### XSYH-33.获取共享合同详情
#### 模块负责人
    梁铁骐
#### 请求url
    /v2/contract/share/{contractNum}

#### 请求类型
    GET

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*contractNum|合同号|String|

#### 返回值
    {
        "contractNum": "ASA-C-2672664202232832", // 合同号
        "contractType": "SHARE", // 合同类型
        "createTime": "2018-04-28 09:50:19", // 合同创建时间
        "createUserName": "李欢欢", // 合同创建人
        "customerName": "3948", // 合同主体客户名
        "remarks": "2018年销售合同", // 备注
        "startDate": "2018-03-01 00:00:00", // 合同开始时间
        "endDate": "2019-02-28 23:59:59", // 合同结束时间
        "formalUrl": "http://omgzp8h38.bkt.clouddn.com/FqDXF7hibm2saEBxFLp9QcBNWCUh,http://dsafasdfasdfasdfasdf,http://sadfasdfasdfasdf", // 合同附件以逗号相隔
        "status": "FORMAL", // 合同状态 DRAFT：草稿;ASKFOR：转正式待审核;FORMAL：正式;CANCELASKFOR：作废待审核;CANCEL：已作废;INVALID:过期
        "customerName": "815", // 合同主体客户名
        "customerNameList": [ // 共享对象客户名
            "渭南水产品","民勤食品大海鲜"
        ],
        "details": [
            {
                "checkStatus":"NORMAL" (当前季度的状态，NORMAL:初始状态, INVALID:待审核, PASS:审核通过, STOP:禁止申请履约) - String,
                "contractNum":"ASA-C-2719934593319936" (合同号) - String,
                "startDate":"2018-03-01 00:00:00" (当前季度的开始时间) - String,
                "endDate":"2018-05-31 23:59:59" (当前季度的结束时间) - String,
                "rebateNode":"FIRST" (季度节点 FIRST:第一季度,SECOND:第二季度,THIRD:第三季度,FOURTH:第四季度,YEAR:年度) - String,
                "rebateRate":2 (返点率，前端展示的时候后面加上'%') - Number
                "salesPlan":100000 (目标) - Number
            },
            ......
        ],
        "logs": [
            {
                "action": "用户：许晓慧，创建合同",
                "contractNum": "ASA-C-2689689452200960",
                "createRole": 4217,
                "createTime": "2018-05-10 10:29:17",
                "createUser": 118,
                "id": 430,
                "remarks": ""
            },
            ......
        ]
    }


### XSYH-34.获取续接合同详情
#### 模块负责人
    梁铁骐
#### 请求url
    /v2/contract/continue/{contractNum}

#### 请求类型
    GET

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*contractNum|合同号|String|

#### 返回值
    {
        "contractNum": "ASA-C-2672664202232832", // 合同号
        "contractType": "CONTINUE", // 合同类型
        "createTime": "2018-04-28 09:50:19", // 合同创建时间
        "createUserName": "李欢欢", // 合同创建人
        "customerName": "3948", // 合同主体客户名
        "remarks": "2018年销售合同", // 备注
        "startDate": "2018-03-01 00:00:00", // 合同开始时间
        "endDate": "2019-02-28 23:59:59", // 合同结束时间
        "continueEndDate": "2019-02-28 23:59:59", // 续接开始时间
        "continueStartDate": "2018-03-01 00:00:00", // 续接结束时间
        "formalUrl": "http://omgzp8h38.bkt.clouddn.com/FqDXF7hibm2saEBxFLp9QcBNWCUh,http://dsafasdfasdfasdfasdf,http://sadfasdfasdfasdf", // 合同附件以逗号相隔
        "status": "FORMAL", // 合同状态 DRAFT：草稿;ASKFOR：转正式待审核;FORMAL：正式;CANCELASKFOR：作废待审核;CANCEL：已作废;INVALID:过期
        "newCustomerName": "30841", // 续接客户名称
        "oldCustomerName": "27426", // 被续接客户名称
        "customerNameList": [ // 如果为空则不必显示，不为空则为共享对象客户名
            "渭南水产品","民勤食品大海鲜"
        ],
        "details": [
            {
                "checkStatus":"NORMAL" (当前季度的状态，NORMAL:初始状态, INVALID:待审核, PASS:审核通过, STOP:禁止申请履约) - String,
                "contractNum":"ASA-C-2719934593319936" (合同号) - String,
                "startDate":"2018-03-01 00:00:00" (当前季度的开始时间) - String,
                "endDate":"2018-05-31 23:59:59" (当前季度的结束时间) - String,
                "rebateNode":"FIRST" (季度节点 FIRST:第一季度,SECOND:第二季度,THIRD:第三季度,FOURTH:第四季度,YEAR:年度) - String,
                "rebateRate":2 (返点率，前端展示的时候后面加上'%') - Number
                "salesPlan":100000 (目标) - Number
            },
            ......
        ],
        "logs": [
            {
                "action": "用户：许晓慧，创建合同",
                "contractNum": "ASA-C-2689689452200960",
                "createRole": 4217,
                "createTime": "2018-05-10 10:29:17",
                "createUser": 118,
                "id": 430,
                "remarks": ""
            },
            ......
        ]
    }



### XSYH-35. 返利券申请新增
#### 模块负责人
    尹洪明
#### 请求
    POST    /v2/rebates/askfor
#### 参数
    {
    	"type": "REBATE",               // * 返利券类型 REBATE 返利费  SPREAD 推广费   FREIGHT 运费补 OTHER 其它
    	"name": "2018年返利",           // 返利券名称
    	"customerId": 31000,            // * 客户id
    	"rate": 80,                     // * 折扣比率
    	"value":1000,                   // * 面值
    	"effectStime":"2018-09-25 00:00:00",    // * 开始时间
    	"effectEtime":"2018-12-25 23:59:59",    // * 结束时间
    	"onlyCode":"_2018-09_10-347"            // * 唯一码
    }
    
#### 响应  
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }  
    
### XSYH-36. 返利券申请列表
#### 模块负责人
    尹洪明
#### 请求
    GET     /v2/rebates/askfor  
#### 参数    
    keyword                 // 优惠券名称、客户名称
    buttonPermissionFlg     // 按钮权限 1 查询 0 不查询
    pageNo                  // 页码
    pageSize                // 页条数
    
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "approvalButton": true  // true 显示审批、拒绝按钮 false 不显示
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "askforType": "",
                    "checkRole": 0,
                    "checkTime": "",
                    "checkUser": 0,
                    "checkUserName": "",
                    "createRole": 0,
                    "createTime": "2018-09-25 20:04:54.0",  // 创建时间
                    "createUser": 0,
                    "createUserName": "樊嘉辉",             // 创建人
                    "customerId": 31000,
                    "customerName": "31000",                // 客户名称
                    "effectEtime": "2018-12-25 23:59:59.0", // 结束时间
                    "effectStime": "2018-09-25 00:00:00.0", // 开始时间
                    "id": 9909,
                    "leftValue": 1000,                      // 剩余额
                    "name": "2018年返利",                   // 返利券名称
                    "note": "",
                    "onlyCode": "",
                    "rangeValue": "",
                    "ranges": "ALL",
                    "rate": 80,                             // 折扣率
                    "source": "HANDWORK",               
                    "sourceValue": "101",
                    "status": "ASKFOR",     // 状态 askfor 待审核 PASS 通过 REFUSE 拒绝
                    "type": "REBATE",  // REBATE 返利费  SPREAD 推广费   FREIGHT 运费补 OTHER 其它
                    "value": 1000       // 面值
                }
            ],
            "pageNo": 1,
            "total": 2
        }
    }
    
### XSYH-37. 返利券通过
#### 模块负责人
    尹洪明
#### 请求
    PUT     /v2/rebates/askfor/pass
#### 参数
    *ids // 数组
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

    
### XSYH-38. 返利券拒绝
#### 模块负责人
    尹洪明
#### 请求
    PUT     /v2/rebates/askfor/refuse
#### 参数
    *ids // 数组
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
### XSYH-13. 返利券列表
#### 模块负责人
    尹洪明
#### 请求
    GET     /v2/rebates
#### 参数
    keyword             // 优惠券名称，客户名称
    type                // 返利券类型 REBATE 返利 SPREAD 推广费 FREIGHT 运费补 OTHER 其它
    rate                // 折扣率
    status              // 状态 'NORMAL' 正常 'LOCK' 锁定
    buttonPermissionFlg // 按钮权限 1 查询权限 0 不查询
    pageNo              // 页码
    pageSize            // 页条数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissionPage": {},
            "buttonPermissions": [
                {
                    "deleteButton": false, // 删除
                    "lockButton": false,   // 锁定
                    "unlockButton": false, // 解锁
                    "logButton": true      // 日志
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "createRole": 0,
                    "createTime": "2019-03-18 15:36:07",    // 创建时间
                    "createUser": 0,
                    "createUserName": "崔洋洋",            // 创建人
                    "customerId": 27542,                        // 客户ID
                    "customerName": "东莞市大岭山龙鑫冻品批发行",    // 客户名
                    "effectEtime": "2019-05-28 23:59:59",       // 结束日期
                    "effectStime": "2019-03-01 00:00:00",       // 开始日期
                    "id": 15513,                    // 返利券ID
                    "leftValue": 4424.08,           // 剩余
                    "name": "2018年-年度返利",       // 返利券名
                    "note": "",
                    "ranges": "ALL",
                    "rate": 20,                 // 折扣比率
                    "rebate": 0,
                    "source": "CONTRACT",
                    "sourceExt": "",
                    "sourceValue": "ASA-C-2720880712369152",
                    "status": "NORMAL",         // 状态
                    "type": "REBATE",           // 类型 'REBATE' 返利,'SPREAD' 推广,'FREIGHT' 运费,'OTHER' 其他
                    "value": 4424.08            // 面值
                }
            ],
            "pageNo": 1,
            "total": 25
        }
    }
    
### XSYH-15. 返利券锁定、解锁
#### 模块负责人
    尹洪明
#### 请求
    PUT     /v2/rebates/{id}
#### 参数
    *id  // 返利券id
    {
    	"status": "LOCK"    // * NORMAL 解锁 LOCK 锁定
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }


### XSYH-16. 客户返利券去重后折扣
#### 模块负责人
    尹洪明
#### 请求
    GET     /v2/rebates/rates
#### 参数
    无
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            100,
            90,
            80
        ]
    }


### XSYH-17. 返利券日志
#### 模块负责人
    尹洪明
#### 请求
    GET     /v2/rebates/log/{id}
#### 参数
    *id      // 返利券id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": null,
            "dataSums": null,
            "datas": [
                {
                    "action": "锁定",                       // 操作内容
                    "actionValue": "101",
                    "createRole": 0,
                    "createTime": "2018-09-25 21:55:18.0",  // 操作时间
                    "createUser": 0,
                    "createUserName": "樊嘉辉",         // 操作人
                    "customerId": 31000,
                    "id": 33043,
                    "leftValue": 0,
                    "rebateId": 9915,
                    "value": 0
                }
            ],
            "pageNo": 1,
            "total": 2
        }
    }
    
### XSYH-39. 客户返利券申请去重后折扣
#### 模块负责人
    尹洪明
#### 请求
    GET     /v2/rebates/askfor/rates
#### 参数
    无
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            100,
            90
        ]
    }

### XSYH-40.获取P2P合同详情
#### 模块负责人
    梁铁骐
#### 请求url
    /v2/contract/p2p/{contractNum}
    P2P合同 - p2p

#### 请求类型
    GET

#### 请求参数
|参数|名称|类型|描述|
|---|---|---|---|
|*contractNum|合同号|String|

#### 返回值
    {
        "contractNum": "ASA-C-2672664202232832", // 合同号
        "contractType": "P2P", // 合同类型
        "createTime": "2018-04-28 09:50:19", // 合同创建时间
        "createUserName": "李欢欢", // 合同创建人
        "customerName": "3948", // 合同主体客户名
        "remarks": "2018年销售合同", // 备注
        "startDate": "2018-03-01 00:00:00", // 合同开始时间
        "endDate": "2019-02-28 23:59:59", // 合同结束时间
        "formalUrl": "http://omgzp8h38.bkt.clouddn.com/FqDXF7hibm2saEBxFLp9QcBNWCUh,http://dsafasdfasdfasdfasdf,http://sadfasdfasdfasdf", // 合同附件以逗号相隔
        "status": "FORMAL", // 合同状态 DRAFT：草稿;ASKFOR：转正式待审核;FORMAL：正式;CANCELASKFOR：作废待审核;CANCEL：已作废;INVALID:过期
        "details": [ // 合同明细
            {
                "checkStatus":"NORMAL" (当前季度的状态，NORMAL:初始状态, INVALID:待审核, PASS:审核通过, STOP:禁止申请履约) - String,
                "contractNum":"ASA-C-2719934593319936" (合同号) - String,
                "startDate":"2018-03-01 00:00:00" (当前季度的开始时间) - String,
                "endDate":"2018-05-31 23:59:59" (当前季度的结束时间) - String,
                "rebateNode":"FIRST" (季度节点 FIRST:第一季度,SECOND:第二季度,THIRD:第三季度,FOURTH:第四季度,YEAR:年度) - String,
                "rebateRate":2 (返点率，前端展示的时候后面加上'%') - Number
                "salesPlan":100000 (目标) - Number
            },
            ......
        ],
        "logs": [
            {
                contractNum:"ASA-C-2719934593319936" (合同号) - String,
                action:"用户：宁丽丽转正式审批通过" (动作行为) - String,
                createTime:"2018-05-31 20:11:22" (行为时间) - String,
                remarks: "" (备注) - String
            },
            ......
        ]
    }
    
    
### XSYH-41. 同步合同履约数据 for 小石
#### 模块负责人
    梁铁骐
#### 请求url
    POST /v2/contract/performance/rebate
#### 请求参数
    [
        {
            "contractNum": "123", // 合同号
            "rebateNode": "FIRST", // 季度节点
            "saleAmount": 123, // 销售额
            "salesPercentage": "190%", // 达成比 
            "preferentialAmount": 123 // 优惠金额
        },
        {
            "contractNum": "123",
        	"rebateNode": "FIRST",
        	"saleAmount": 123,
        	"salesPercentage": "190%",
        	"preferentialAmount": 123
        },
        ...
    ]
#### 响应
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }
    
### XSYH-42. 删除合同履约数据 for 小石
#### 模块负责人
    梁铁骐
#### 请求url
    DELETE /v2/contract/performance/rebate
#### 请求参数
    无
#### 响应
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }
    
### XSYH-43. 通过客户id获取合同履约数据 for app
#### 模块负责人
    梁铁骐
#### 请求url
    GET /router/v5/contract/rebate/{customerId}
#### 请求参数
    customerId: 客户id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "completedAmt": 0, // 已完成金额
                "completedPercentage": 0, // 已完成比例
                "contractNum": "ASA-C-2886440289797120", // 合同号
                "contractType": "CONTINUE", // 合同类型
                "createUserName": "",
                "endDate": "2018-05-31 23:59:59", // 季度或年度结束时间
                "fileUrl": "",
                "performanceStatus": "PASS",
                "preferentialAmt": 0, // 优惠金额
                "rebateEndDate": "",
                "rebateNode": "FIRST",
                "rebateRate": 2,
                "rebateStartDate": "",
                "salesPercentage": "0.00%",
                "salesPlan": 200000, // 目标
                "shouldExistAmt": 0,
                "startDate": "2018-03-01 00:00:00", // 季度或年度结束时间
                "subjectName": "惠州市隆冠丰商贸有限公司",
                "uncompletedAmt": 200000, // 未完成金额
                "uncompletedPercentage": 1 // 未完成比例
            },
            {
                "completedAmt": 0,
                "completedPercentage": 0,
                "contractEndDate": "2019-02-28 23:59:59",
                "contractNum": "ASA-C-2886440289797120",
                "contractStartDate": "2018-03-01 00:00:00",
                "contractType": "CONTINUE",
                "createUserName": "",
                "endDate": "2018-08-31 23:59:59",
                "fileUrl": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20181025144309122-7680",
                "performanceStatus": "PASS",
                "preferentialAmt": 0,
                "rebateEndDate": "",
                "rebateNode": "SECOND",
                "rebateRate": 2,
                "rebateStartDate": "",
                "salesPercentage": "0.00%",
                "salesPlan": 200000,
                "shouldExistAmt": 0,
                "startDate": "2018-06-01 00:00:00",
                "subjectName": "惠州市隆冠丰商贸有限公司",
                "uncompletedAmt": 200000,
                "uncompletedPercentage": 1
            },
            {
                "completedAmt": 0,
                "completedPercentage": 0,
                "contractEndDate": "2019-02-28 23:59:59",
                "contractNum": "ASA-C-2886440289797120",
                "contractStartDate": "2018-03-01 00:00:00",
                "contractType": "CONTINUE",
                "createUserName": "",
                "endDate": "2018-11-30 23:59:59",
                "fileUrl": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190112112003309-2365",
                "performanceStatus": "PASS",
                "preferentialAmt": 5363.31,
                "rebateEndDate": "",
                "rebateNode": "THIRD",
                "rebateRate": 2,
                "rebateStartDate": "",
                "salesPercentage": "1.340826",
                "salesPlan": 200000,
                "shouldExistAmt": 0,
                "startDate": "2018-09-01 00:00:00",
                "subjectName": "惠州市隆冠丰商贸有限公司",
                "uncompletedAmt": 200000,
                "uncompletedPercentage": 1
            },
            {
                "completedAmt": 0,
                "completedPercentage": 0,
                "contractEndDate": "2019-02-28 23:59:59",
                "contractNum": "ASA-C-2886440289797120",
                "contractStartDate": "2018-03-01 00:00:00",
                "contractType": "CONTINUE",
                "createUserName": "",
                "endDate": "2019-02-28 23:59:59",
                "fileUrl": "",
                "performanceStatus": "NORMAL",
                "preferentialAmt": 5589.75,
                "rebateEndDate": "",
                "rebateNode": "FOURTH",
                "rebateRate": 2,
                "rebateStartDate": "",
                "salesPercentage": "1.397438",
                "salesPlan": 200000,
                "shouldExistAmt": 0,
                "startDate": "2018-12-01 00:00:00",
                "subjectName": "惠州市隆冠丰商贸有限公司",
                "uncompletedAmt": 200000,
                "uncompletedPercentage": 1
            },
            {
                "completedAmt": 0,
                "completedPercentage": 0,
                "contractEndDate": "2019-02-28 23:59:59",
                "contractNum": "ASA-C-2886440289797120",
                "contractStartDate": "2018-03-01 00:00:00",
                "contractType": "CONTINUE",
                "createUserName": "",
                "endDate": "2019-02-28 23:59:59",
                "fileUrl": "",
                "performanceStatus": "NORMAL",
                "preferentialAmt": 5217.36,
                "rebateEndDate": "",
                "rebateNode": "YEAR",
                "rebateRate": 0.5,
                "rebateStartDate": "",
                "salesPercentage": "1.304339",
                "salesPlan": 800000,
                "shouldExistAmt": 0,
                "startDate": "2018-03-01 00:00:00",
                "subjectName": "惠州市隆冠丰商贸有限公司",
                "uncompletedAmt": 800000,
                "uncompletedPercentage": 1
            }
        ]
    }