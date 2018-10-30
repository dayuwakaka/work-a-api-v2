## 发票
### FP-1. 发票版本新增
#### 请求

    POST    /v2/invoice/version
    
#### 参数

    {
    	*"version":"1.0.0",
    	*"effectTime":"2018-10-24 14:22:30"
    }
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
### FP-2. 发票版本修改
#### 请求

    PUT    /v2/invoice/version/{id}
    
#### 参数

    *id  //版本id
    // json body
    {
    	*"version":"1.0.0",
    	*"effectTime":"2018-10-24 14:22:30"
    }
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": null
    }

    
### FP-3. 发票版本列表-分页
#### 请求

    GET    /v2/invoice/version
    
#### 参数

    version // 版本号 
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "createRole": 0,
                    "createTime": "2018-10-24", // 创建时间
                    "createUser": 0,
                    "createUserName": "樊嘉辉", // 创建人
                    "deleteFlg": 0,
                    "effectTime": "2018-10-26", // 启用时间
                    "id": 1,                    // 版本id
                    "modifyTime": "",
                    "version": "1.0.4"          // 版本号
                }
            ],
            ......
            "pageNo": 1,
            "total": 1
        }
    }       
    
    
### FP-4. 发票版本删除
#### 请求

    DELETE    /v2/invoice/version/{id}
    
#### 参数

    *id     //版本id
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": null
    }


### FP-5. 发票版本详情
#### 请求

    GET    /v2/invoice/version/{id}
    
#### 参数

    *id // 版本id
    
#### 响应
   
    {
        "code": 100000,
        "msg": "",
        "data": {
            "createRole": 0,
            "createTime": "2018-10-24", // 创建时间
            "createUser": 0,
            "createUserName": "樊嘉辉", // 创建人
            "deleteFlg": 0,
            "effectTime": "2018-10-24", // 启用时间
            "id": 1,                    // 版本id
            "modifyTime": "",
            "version": "1.0.4"          // 版本号
        }
    }


### FP-10. 税收分类新增
#### 请求

    POST    /v2/invoice/category
    
#### 参数

    {
        *"name":"方便食品类",
        *"code":"1293847324"
    }
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": null
    }        


### FP-11. 税收分类修改
#### 请求

    PUT    /v2/invoice/category/{id}
    
#### 参数

    *id  //版本id
    // json body
    {
        *"name":"方便食品类",
        *"code":"1293847324"
    }
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": null
    }    


### FP-12. 税收分类列表-分页
#### 请求

    GET    /v2/invoice/category
    
#### 参数

    name // 分类名称
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "code": "1888847324",       // 分类编号
                    "createRole": 0,
                    "createTime": "2018-10-24", // 创建时间
                    "createUser": 0,
                    "createUserName": "樊嘉辉", // 创建人
                    "deleteFlg": 0,
                    "id": 5,                    // 分类id
                    "modifyTime": "",
                    "name": "油炸食品类2"       // 分类名称
                }
            ],
            ......
            "pageNo": 1,
            "total": 1
        }
    }  


### FP-13. 税收分类列表-不分页
#### 请求

    GET    /v2/invoice/category/all
    
#### 参数

    name // 分类名称
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "code": "1888847324",       // 分类编号
                "createRole": 0,
                "createTime": "2018-10-24", // 创建时间
                "createUser": 0,
                "createUserName": "樊嘉辉", // 创建人
                "deleteFlg": 0,
                "id": 5,                    // 分类id
                "modifyTime": "",
                "name": "油炸食品类2"       // 分类名称
            }
            ......
        ]
    }


### FP-14. 税收分类详情
#### 请求

    GET    /v2/invoice/category/{id}
    
#### 参数

    *id // 分类id
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": {
            "code": "100010102302",      // 分类编号
            "createRole": 0,
            "createTime": "2018-10-22", // 创建时间
            "createUser": 0,
            "createUserName": "小米", // 创建人
            "deleteFlg": 0,
            "id": 1,                   // 分类id
            "modifyTime": "",
            "name": "方便食品"       // 分类名称
        }
    }

  
### FP-15. 税收分类删除
#### 请求

    DELETE    /v2/invoice/category/{id}
    
#### 参数

    *id     //版本id
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": null
    }

  
### FP-16. 税收分类下载模板
#### 请求

    GET    /v2/invoice/category/template
    
#### 参数

    无
    
#### 响应

    excel
 
  
### FP-17. 税收分类导出
#### 请求

    GET    /v2/invoice/category/export
    
#### 参数

    name // 分类名称
    
#### 响应

    excel
  
### FP-18. 税收分类导入
#### 请求

    POST    /v2/invoice/category/import
    
#### 参数

    选择的excel文件
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": null            // 失败时，返回带有标记的Excel文件路径,并且下载该文件到此路径, 嗯 似乎是这样的 ^_^
    }
                                         
                                          
### FP-20. 企业信息新增
#### 请求

    POST    /v2/invoice/company
    
#### 参数
    // json body
    {
        *"name":"亚洲渔港股份有限公司",          // 企业名称
        *"taxCode":"234857293845",               // 纳税人识别号
        *"pathid":"060101",                      // 省市区（县）路径
        *"address":"北京街果戈里1234号",         // 详细地址
        *"tel":"4008181888",                     // 电话
        *"bankName":"中国工商银行",              // 开户行
        *"bankAccount":"62145555666677778888",   // 银行账号
        *"showFlg":1,                            // 是否显示
        *"payeeUser":154,                        // 收款人
        *"checkUser":101,                        // 复核
        *"actionUser":101                        // 开票
    }
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": null
    }
                                      
                                          
### FP-21. 企业信息修改
#### 请求

    PUT    /v2/invoice/company/{id}
    
#### 参数
    *id     //企业信息id
    // json body
    {
        *"name":"亚洲渔港股份有限公司",          // 企业名称
        *"taxCode":"234857293845",               // 纳税人识别号
        *"pathid":"060101",                      // 省市区（县）路径
        *"address":"北京街果戈里1234号",         // 详细地址
        *"tel":"4008181888",                     // 电话
        *"bankName":"中国工商银行",              // 开户行
        *"bankAccount":"62145555666677778888",   // 银行账号
        *"showFlg":1,                            // 是否显示    0 显示 1 隐藏
        *"payeeUser":154,                        // 收款人
        *"checkUser":101,                        // 复核
        *"actionUser":101                        // 开票
    }
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": null
    }
                                        
### FP-22. 企业信息显示、隐藏
#### 请求

    PUT    /v2/invoice/company/modifyState/{id}
    
#### 参数
    *id     //企业信息id
    // json body
    {
        *"showFlg":1                            // 是否显示  0 显示 1 隐藏
    }
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": null
    }
                                          
### FP-23. 企业信息列表-分页
#### 请求

    GET    /v2/invoice/company
    
#### 参数
    
    name    //企业名称
    buttonPermissionFlg // 0 不查询按钮权限 1 查询 ；默认 0
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "deleteButton": false,  //删除      true 显示   false 不显示
                    "editButton": true,     //编辑
                    "logButton": true       //日志
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "actionUser": 0,
                    "address": "北京街果戈里1234号",                //详细地址
                    "bankAccount": "62145555666677779999",          //银行账号
                    "bankName": "中国建设银行",                     //开户行
                    "checkUser": 0,
                    "createRole": 0,
                    "createTime": "",
                    "createUser": 0,
                    "createUserName": "",
                    "deleteFlg": 0,
                    "id": 3,
                    "modifyTime": "",
                    "name": "亚洲渔港股份有限33",               //企业名称
                    "pathName": "辽宁大连市西岗区",             //省市区
                    "pathid": "",
                    "payeeUser": 0,
                    "showFlg": 0,                               // 0 显示 1 隐藏
                    "taxCode": "6666666666666666",              //纳税人识别号
                    "tel": "4008181811"                         //电话
                }
            ],
            "pageNo": 1,
            "total": 1
        }
    }

                                      
### FP-24. 企业信息列表-不分页
#### 请求

    GET    /v2/invoice/company/all
    
#### 参数
    
    无
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "actionUser": 0,
                "address": "北京街果戈里1234号",                //详细地址
                "bankAccount": "62145555666677779999",          //银行账号
                "bankName": "中国建设银行",                     //开户行
                "checkUser": 0,
                "createRole": 0,
                "createTime": "",
                "createUser": 0,
                "createUserName": "",
                "deleteFlg": 0,
                "id": 3,
                "modifyTime": "",
                "name": "亚洲渔港股份有限33",               //企业名称
                "pathName": "辽宁大连市西岗区",             //省市区
                "pathid": "",
                "payeeUser": 0,
                "showFlg": 0,                               // 0 显示 1 隐藏
                "taxCode": "6666666666666666",              //纳税人识别号
                "tel": "4008181811"                         //电话
            }
        ]
    }

                                  
### FP-25. 企业信息详情
#### 请求

    GET    /v2/invoice/company/{id}
    
#### 参数
    
    *id     // 企业信息id
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "actionUser": 0,
                "address": "北京街果戈里1234号",                //详细地址
                "bankAccount": "62145555666677779999",          //银行账号
                "bankName": "中国建设银行",                     //开户行
                "checkUser": 0,
                "createRole": 0,
                "createTime": "",
                "createUser": 0,
                "createUserName": "",
                "deleteFlg": 0,
                "id": 3,
                "modifyTime": "",
                "name": "亚洲渔港股份有限33",               //企业名称
                "pathName": "辽宁大连市西岗区",             //省市区
                "pathid": "060202",                         //省市区编码
                "pathid": "",
                "payeeUser": 0,
                "showFlg": 0,                               // 0 显示 1 隐藏
                "taxCode": "6666666666666666",              //纳税人识别号
                "tel": "4008181811"                         //电话
            }
        ]
    }
                                
### FP-26. 企业信息删除
#### 请求

    DELETE    /v2/invoice/company/{id}
    
#### 参数
    
    *id     // 企业信息id
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": null
    }
                               
### FP-27. 企业信息操作日志
#### 请求

    GET    /v2/invoice/company/log
    
#### 参数
    
    *id     // 企业信息id
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "companyId": 0,
                    "id": 0,
                    "opInfo": "亚洲渔港股份有限公司：新增",     //操作内容
                    "opRole": 0,
                    "opTime": "2018-10-24 18:54:05",        //操作时间
                    "opUser": 0,
                    "opUserName": "樊嘉辉"                  //操作人
                },
                {
                    "companyId": 0,
                    "id": 0,
                    "opInfo": "企业名称：亚洲渔港股份有限公司->亚洲渔港股份有限公司纳税人识别号：6666666666666666->6666666666666666开户行：中国建设银行->中国建设银行银行账号：62145555666677779999->62145555666677779999收款人：154->154复核：101->101开票人：101->101",
                    "opRole": 0,
                    "opTime": "2018-10-25 08:33:42",
                    "opUser": 0,
                    "opUserName": "樊嘉辉"
                },
                {
                    "companyId": 0,
                    "id": 0,
                    "opInfo": "企业名称：亚洲渔港股份有限公司->亚洲渔港股份有限33;",
                    "opRole": 0,
                    "opTime": "2018-10-25 08:53:22",
                    "opUser": 0,
                    "opUserName": "樊嘉辉"
                }
            ],
            "pageNo": 1,
            "total": 5
        }
    }

                               
### FP-28. 收款人、复核、开票人
#### 请求

    GET    /v2/invoice/company/employee
    
#### 参数
    
    keyword     // 员工编号、姓名、手机号
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "authDataPowers": null,
                "authMenuPowers": null,
                "fullname": "李文英",       //姓名
                "id": 221,                  //员工id
                "isOpen": "1",
                "mobile": "15142359472",    //手机
                "status": "NORMAL",
                "workno": "0229"            //工号
            }
            ......
        ]
    }


                               
### FP-30. 产品发票新增（单个品）--此接口PHP产品模块调用
#### 请求

    POST    /v2/invoice/product
    
#### 参数
    
    {
        *"productId":17      //产品id
    }
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": null
    }

                               
### FP-31. 产品发票新增（批量新增）--此接口PHP产品模块调用
#### 请求

    POST    /v2/invoice/product/multi
    
#### 参数
    
    [
        {
            *"productId":18      //产品id
        },
        {
            *"productId":21
        },
        {
            *"productId":22
        }
    ]
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": null
    }    

                               
### FP-32. 产品发票删除（单品） --此接口PHP产品模块调用
#### 请求

    DELETE    /v2/invoice/product/{id}
    
#### 参数
    
    *id //产品id
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": null
    }        

                                           
### FP-33. 产品发票删除（批量删除） --此接口PHP产品模块调用
#### 请求

    DELETE    /v2/invoice/product/multi
    
#### 参数
    
    *productIds[] //产品列表
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": null
    }        



### FP-34. 产品发票修改
#### 请求

    POST    /v2/invoice/product/{id}
    
#### 参数
    
    *id //产品发票id
    // json body
    {
        "taxRate":0.15,     //税率
        "taxCategory":6     //税收分类
    }
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": null
    }    

                                 
### FP-35. 产品发票列表--分页
#### 请求

    GET    /v2/invoice/product
    
#### 参数
    
    keyword     // 品号或品名
    productName // 品名
    pno         // 品号
    producttype // 产品类型id
    businesstype // 餐饮业态id
    taxCategory // 税收分类id
    productStatus   // 产品状态     NORMAL 上架 LOCK 下架   CUSTOM 定制     LACK 断货
    isStage         // 是否前台显示 0 不显示 1显示
    pageNo          // 页码
    pageSize        // 页大小
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "createTime": "2018-10-25",           //创建时间
                    "deleteFlg": 0,
                    "id": 10,                               //发票产品id
                    "isStage": 1,                           //0 不显示 1显示
                    "lackEndTime": "2018-10-15",            //断货结束时间
                    "lackStartTime": "2018-10-15",          //断货开始时间
                    "mainPic": "uploads/product/201803/70b105e1f977ad746777484bb2529695.jpg",   //产品主图
                    "modifyTime": "",                       
                    "pno": "0170",                          //产品编号
                    "productId": 4,                         //产品id
                    "productName": "COCO虾(冻裹面包屑虾）",     //产品名称
                    "productStatus": "NORMAL",                  //产品状态  NORMAL 上架 LOCK 下架 CUSTOM 定制 LACK 断货
                    "status": null,
                    "taxCategory": 2,                              //税收分类id
                    "taxCategoryName": "方便食品类",               //税收分类名称
                    "taxRate": 0.17,                               //税率
                    "unitGuige": "盒:1kg/盒,件:1kg/盒*9盒"      //单位规格
                }
            ],
            "pageNo": 1,
            "total": 10
        }
    }

                                
### FP-36. 产品发票详情
#### 请求

    GET    /v2/invoice/product/{id}
    
#### 参数
    
    *id //产品发票id
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": {
            "createTime": "2018-10-25",
            "deleteFlg": 0,
            "id": 4,                                                                     //产品发票id
            "isStage": 1,
            "lackEndTime": "",
            "lackStartTime": "",
            "mainPic": "uploads/product/201803/da76bb195f0abf084db978ea80b3881b.jpg",
            "modifyTime": "",
            "pno": "1040",
            "productId": 3193,
            "productName": "抹茶红豆大福",
            "productStatus": "NORMAL",
            "status": null,
            "taxCategory": 0,                                                           //税收分类
            "taxCategoryName": "冷冻半成品",                                             //税率
            "taxRate": 0.16,
            "unitGuige": "盒:500g（20枚）/盒,件:500g（20枚）/盒*10盒"
        }
    }
                              
### FP-37. 产品发票日志
#### 请求

    GET    /v2/invoice/product/log
    
#### 参数
    
    *productId //产品id
    
#### 响应
{
    "code": 100000,
    "msg": "",
    "data": {
        "buttonPermissions": [],
        "dataSums": null,
        "datas": [
            {
                "id": 0,
                "opInfo": "新增发票产品",           //操作内容
                "opRole": 0,
                "opTime": "2018-10-25 10:48:02",    //操作时间
                "opUser": 0,
                "opUserName": "樊嘉辉",             //操作人
                "productId": 0
            },
            {
                "id": 0,
                "opInfo": "税率：0.16->0.1700;",
                "opRole": 0,
                "opTime": "2018-10-25 11:31:22",
                "opUser": 0,
                "opUserName": "樊嘉辉",
                "productId": 0
            }
            ......
        ],
        "pageNo": 1,
        "total": 2
    }
}

                            
### FP-41. 发票信息变更(维护)
#### 请求

    PUT    /v2/invoice/info/modifyAll/{id}
    
#### 参数
    
    *id //发票id
    // json body    invoiceInfo 必须有，invoiceInfoCompany和invoiceInfoPerson根据客户类型 企业、个体商户、个人选择传递
    {
        "change":true,                              // true 变更 false 维护
        "invoiceInfo": {
            *"customerType": "COMPANY",              // 公司类型： COMPANY 公司 INDIVIDUALLY 个体工商 PERSON 个人
            *"authenNo": "21983712398453245978MM",   // 第三方认证号
            *"invoiceCompanyId": 3,                  // 开具方公司名头ID
            *"invoiceType": "SPECIAL",               // 发票类型：NORMAL 普票 SPECIAL 专票
            *"deliverAddress": "香炉礁物流商贸大厦",     // 邮寄地址
            *"email": "liang.qitie@yahoo.cn",        // 邮箱
            "contactName": "liang.qitie",               // 联系人
            "mobile": "16888889999"                 // 手机号
        },
        "invoiceInfoCompany": {
            *"name":"心有猛虎，细嗅蔷薇，他人勿动",      // 发票名
            *"taxCode":"234752934758sadk",           // 纳税人识别码
            "address":"河北秦皇岛。。。",               // 地址
            "mobile":"16788883333",                 // 手机号
            "bankName":"中国农业银行",                  // 开户行
            "bankNo":"62148888373737372723",            // 银行账户
            *"legalPerson":"梁总"                        // 法人
        },
        "invoiceInfoPerson": {
            *"name":"梁总",                              // 发票名
            *"cardNo":"125255199012093211"               // 身份证号
        },
        // 图片类型  'CARDFRONT' 身份证正面,'CARDBACK' 身份证背面,'CHANGE' 变更附件,'SPECIAL' 专票证明附件
        "invoiceInfoImgs": [{
            *"type":"CARDFRONT",   // 客户类型=个人，必传身份证正面
            *"imgUrl":"http://omgzp8h38.bkt.clouddn.com/Fpye2K9ygMMiLKwCDFE3xYA4z927"    // 图片URL
        },{
            *"type":"CARDBACK",  //客户类型=个人，必传身份证背面
            *"imgUrl":"http://omgzp8h38.bkt.clouddn.com/Fpye2K9ygMMiLKwCDFE3xYA4z927"    // 图片URL
        },{
            *"type":"CHANGE",  //发票变更，必传变更附件
            *"imgUrl":"http://omgzp8h38.bkt.clouddn.com/Fpye2K9ygMMiLKwCDFE3xYA4z927"    // 图片URL
        },{
            *"type":"SPECIAL",   //增值税专用发票，必传专票证明附件
            *"imgUrl":"http://omgzp8h38.bkt.clouddn.com/Fpye2K9ygMMiLKwCDFE3xYA4z927"    // 图片URL
        }]
    }    
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": null
    }    


                            
### FP-42. 发票信息修改
#### 请求

    PUT    /v2/invoice/info/modify/{id}
    
#### 参数
    
    *id //发票id
    // json body
    {
        "deliverAddress": "香炉礁物流商贸大厦3333",                 //邮寄地址
        "email": "liang.qitieTTTT@yahoo.cn",                        //邮箱
        "contactName": "liang.qitieASDFASDFASDFASD",                //联系人
        "mobile": "16888889999425345",                                 //联系人手机
            //以下四项是 企业或个体商户信息，客户类型为个人的，无此信息
        "address": "河北秦皇岛新力大街闪客快打抗衰老的浪费了。。。",
        "tel": "16788883333",
        "bankName": "中国农业银行大连香炉礁分行",
        "bankNo": "62148888373737372723"
    }
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": null
    }        

                          
### FP-43. 发票开票类型切换
#### 请求

    PUT    /v2/invoice/info/switch/{id}
    
#### 参数
    
    *id //发票id
    // json body
    {
        "actionType": "HANDWORK"        //发票开票触发方式： AUTO 自动 HANDWORK 手工
    }
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": null
    }        


                          
### FP-44. 获取第三方认证系统企业列表
#### 请求

    GET    /v2/invoice/info/auth
    
#### 参数
    
    *keyword //搜索关键字
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "base": "辽宁",                     //所在省
                "companyType": "1",
                "estiblishTime": "2002-06-11 00:00:00.0",
                "id": 3064166877,                     //第三方系统编号 对应我们系统的 "authenNo"
                "legalPersonName": "姜晓",          //法人
                "name": "亚洲渔港股份有限公司",     //公司名称
                "regCapital": "10000万人民币",
                "regStatus": "",
                "type": "1"
            },
            {
                "base": "辽宁",
                "companyType": "1",
                "estiblishTime": "2014-11-05 00:00:00.0",
                "id": 1161403150,
                "legalPersonName": "孙海贺",
                "name": "亚洲渔港电子商务（大连）有限公司",
                "regCapital": "100万人民币",
                "regStatus": "",
                "type": "1"
            },
            ......
        ]
    }    

### FP-45. 获取第三方认证系统企业详情
#### 请求

    GET    /v2/invoice/info/auth/{id}
    
#### 参数
    
    *id //企业id
    
#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": {
            "actualCapital": "10000万人民币",
            "alias": "亚洲渔港",
            "approvedTime": 1498406400000,
            "base": "ln",
            "businessScope": "供应链管理；冷冻海产品、预包装食品销售；农副产品收购；国内一般贸易；食品技术开发、技术转让；软件技术开发、技术转让；互联网信息服务；普通货物仓储；国内货运代理。（依法须经批准的项目，经相关部门批准后方可开展经营活动。）",
            "companyId": 127710579,
            "companyOrgType": "其他股份有限公司(非上市)",
            "companyType": 0,
            "correctCompanyId": "",
            "creditCode": "91210200736441730M",
            "estiblishTime": 1522583552,
            "flag": 1,
            "fromTime": 1023724800000,
            "historyNames": "大连美姿克特食品有限公司\t",
            "id": 3064166877,                                                                           //第三方系统编号 对应我们系统的 "authenNo"
            "industry": "商务服务业",
            "legalPersonId": 1873819571,
            "legalPersonName": "姜晓",                                                                      //法人
            "logo": "http://img.tianyancha.com/logo/lll/262742baec8e4c4fdd18b6c0df561105.png@!f_200x200",
            "name": "亚洲渔港股份有限公司",                                                                 //发票名称
            "orgNumber": "736441730",
            "percentileScore": 8898,
            "regCapital": "10000万人民币",
            "regInstitute": "大连市工商行政管理局",
            "regLocation": "辽宁省大连市西岗区海达北街91号6层",                                             //地址
            "regNumber": "210200000128379",
            "regStatus": "存续",
            "socialStaffNum": 145,
            "sourceFlag": "http://qyxy.baic.gov.cn/",
            "staffNumRange": "100-499人",
            "taxNumber": "91210200736441730M",                                                             //纳税人识别号
            "type": "1",
            "updateTimes": 1540525649000,
            "updatetime": 1540525651784
        }
    }


### FP-46. 发票信息(审核)列表
#### 请求

    GET    /v2/invoice/info
    
#### 参数
    
    customerType    //公司类型： COMPANY 公司 INDIVIDUALLY 个体工商 PERSON 个人
    invoiceType     //发票类型：NORMAL 普票 SPECIAL 专票
    actionType      //发票开票触发方式： AUTO 自动 HANDWORK 手工
    status          //状态 EMPYT 待维护, NORMAL 正常, ASKFOR 待审核
    *statuses[]        //状态 EMPYT 待维护, NORMAL 正常, ASKFOR 待审核  发票列表传:EMPTY,NORMAL数组，审核列表传：ASKFOR
    name            //客户名称
    buttonPermissionFlg // 0 不查询按钮权限 1查询按钮权限

#### 响应
    // invoiceInfoCompany 和 invoiceInfoPerson 二者根据customerType返其一
    // invoiceInfoImgs 附件列表，返回新增时上传的附件
    // buttonPermissions 只应用在发票信息列表
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "historyButton": true,      //历史版本
                    "detailButton": true,       //查看
                    "editButton": true,         //编辑
                    "logButton": true,          //日志
                    "emptyButton": false,       //维护
                    "changeButton": true        //变更
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "actionType": "AUTO",       //开票类型      AUTO 自动 HANDWORK 手工
                    "authenNo": "21893745891",  //第三方系统编号             
                    "change": false,
                    "checkRole": 0,
                    "checkTime": "",
                    "checkUser": 0,
                    "checkUserName": "",
                    "contactName": "梁铁骑",        //联系人
                    "createRole": 0,
                    "createTime": "2018-10-23",
                    "createUser": 0,
                    "createUserName": "庄园园",
                    "customerId": 29841,                    //客户id
                    "customerName": "孙健-泊头",            //客户名称
                    "customerType": "COMPANY",              //公司类型  COMPANY 公司 INDIVIDUALLY 个体工商 PERSON 个人
                    "deleteFlg": 0,
                    "deliverAddress": "河北省秦皇岛昌黎县test", //邮寄地址
                    "email": "liang.qitie@god.com",     //邮箱
                    "id": 1,                                //发票id
                    "invoiceCompanyId": 1,                  //开票公司id
                    "invoiceInfoCompany": {
                        "address": "河北省秦皇岛昌黎县test",        //公司地址
                        "bankName": "中国工商银行",                 //开户行
                        "bankNo": "6214888899996666",               //银行账号
                        "deleteFlg": 0,
                        "id": 1,
                        "invoiceId": 1,
                        "legalPerson": "liang.qitie",               //法人
                        "mobile": "13356565656",                    //公司电话
                        "name": "心有猛虎，细嗅蔷薇，他人勿动",         //发票名称
                        "taxCode": "23458939458927"                 //税收编号
                    },
                    "invoiceInfoImgs": [{
                            *"type":"CARDFRONT",   // 客户类型=个人
                            *"imgUrl":"http://omgzp8h38.bkt.clouddn.com/Fpye2K9ygMMiLKwCDFE3xYA4z927"    // 图片URL
                        },{
                            *"type":"CARDBACK",  //客户类型=个人
                            *"imgUrl":"http://omgzp8h38.bkt.clouddn.com/Fpye2K9ygMMiLKwCDFE3xYA4z927"    // 图片URL
                        },{
                            *"type":"CHANGE",  //发票变更
                            *"imgUrl":"http://omgzp8h38.bkt.clouddn.com/Fpye2K9ygMMiLKwCDFE3xYA4z927"    // 图片URL
                        },{
                            *"type":"SPECIAL",   //增值税专用发票
                            *"imgUrl":"http://omgzp8h38.bkt.clouddn.com/Fpye2K9ygMMiLKwCDFE3xYA4z927"    // 图片URL
                        }],
                    "invoiceInfoPerson": {
                        "id":1,
                        "invoiceId":1,
                        "name":"梁铁骑",                            //发票名称
                        "cardNo":"239124199012121345",              //身份证号
                        "deleteFlg":0
                    },
                    "invoiceType": "NORMAL",        //发票类型：NORMAL 普票 SPECIAL 专票
                    "mobile": "13356565656",    //联系人电话
                    "modifyTime": "",
                    "rollbackId": 0,
                    "status": "NORMAL"          状态 EMPYT 待维护, NORMAL 正常
                }
            ],
            "pageNo": 1,
            "total": 1
        }
    }
    

### FP-47. 发票历史版本
#### 请求

    GET    /v2/invoice/info/history
    
#### 参数
    
    *customerId //客户id

#### 响应    
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "actionType": "AUTO",       //开票类型      AUTO 自动 HANDWORK 手工
                "authenNo": "21893745891",  //第三方系统编号             
                "change": false,
                "checkRole": 0,
                "checkTime": "",
                "checkUser": 0,
                "checkUserName": "",
                "contactName": "梁铁骑",        //联系人
                "createRole": 0,
                "createTime": "2018-10-23",
                "createUser": 0,
                "createUserName": "庄园园",
                "customerId": 29841,                    //客户id
                "customerName": "孙健-泊头",            //客户名称
                "customerType": "COMPANY",              //公司类型  COMPANY 公司 INDIVIDUALLY 个体工商 PERSON 个人
                "deleteFlg": 0,
                "deliverAddress": "河北省秦皇岛昌黎县test", //邮寄地址
                "email": "liang.qitie@god.com",     //邮箱
                "id": 1,                                //发票id
                "invoiceCompanyId": 1,                  //开票公司id
                "invoiceInfoCompany": {
                    "address": "河北省秦皇岛昌黎县test",        //公司地址
                    "bankName": "中国工商银行",                 //开户行
                    "bankNo": "6214888899996666",               //银行账号
                    "deleteFlg": 0,
                    "id": 1,
                    "invoiceId": 1,
                    "legalPerson": "liang.qitie",               //法人
                    "mobile": "13356565656",                    //公司电话
                    "name": "心有猛虎，细嗅蔷薇，他人勿动",         //发票名称
                    "taxCode": "23458939458927"                 //税收编号
                },
                "invoiceInfoImgs": [{
                        *"type":"CARDFRONT",   // 客户类型=个人
                        *"imgUrl":"http://omgzp8h38.bkt.clouddn.com/Fpye2K9ygMMiLKwCDFE3xYA4z927"    // 图片URL
                    },{
                        *"type":"CARDBACK",  //客户类型=个人
                        *"imgUrl":"http://omgzp8h38.bkt.clouddn.com/Fpye2K9ygMMiLKwCDFE3xYA4z927"    // 图片URL
                    },{
                        *"type":"CHANGE",  //发票变更
                        *"imgUrl":"http://omgzp8h38.bkt.clouddn.com/Fpye2K9ygMMiLKwCDFE3xYA4z927"    // 图片URL
                    },{
                        *"type":"SPECIAL",   //增值税专用发票
                        *"imgUrl":"http://omgzp8h38.bkt.clouddn.com/Fpye2K9ygMMiLKwCDFE3xYA4z927"    // 图片URL
                    }],
                "invoiceInfoPerson": {
                    "id":1,
                    "invoiceId":1,
                    "name":"梁铁骑",                            //发票名称
                    "cardNo":"239124199012121345",              //身份证号
                    "deleteFlg":0
                },
                "invoiceType": "NORMAL",        //发票类型：NORMAL 普票 SPECIAL 专票
                "mobile": "13356565656",    //联系人电话
                "modifyTime": "",
                "rollbackId": 0,
                "status": "NORMAL"          状态 EMPYT 待维护, NORMAL 正常
            }
        ]
    }

### FP-48. 发票详情
#### 请求

    GET    /v2/invoice/info/{id}
    
#### 参数
    
    *id //发票id

#### 响应    

    {
        "code": 100000,
        "msg": "",
        "data": {
            "actionType": "AUTO",       //开票类型      AUTO 自动 HANDWORK 手工
            "authenNo": "21893745891",  //第三方系统编号             
            "change": false,
            "checkRole": 0,
            "checkTime": "",
            "checkUser": 0,
            "checkUserName": "",
            "contactName": "梁铁骑",        //联系人
            "createRole": 0,
            "createTime": "2018-10-23",
            "createUser": 0,
            "createUserName": "庄园园",
            "customerId": 29841,                    //客户id
            "customerName": "孙健-泊头",            //客户名称
            "customerType": "COMPANY",              //公司类型  COMPANY 公司 INDIVIDUALLY 个体工商 PERSON 个人
            "deleteFlg": 0,
            "deliverAddress": "河北省秦皇岛昌黎县test", //邮寄地址
            "email": "liang.qitie@god.com",     //邮箱
            "id": 1,                                //发票id
            "invoiceCompanyId": 1,                  //开票公司id
            "invoiceInfoCompany": {
                "address": "河北省秦皇岛昌黎县test",        //公司地址
                "bankName": "中国工商银行",                 //开户行
                "bankNo": "6214888899996666",               //银行账号
                "deleteFlg": 0,
                "id": 1,
                "invoiceId": 1,
                "legalPerson": "liang.qitie",               //法人
                "mobile": "13356565656",                    //公司电话
                "name": "心有猛虎，细嗅蔷薇，他人勿动",         //发票名称
                "taxCode": "23458939458927"                 //税收编号
            },
            "invoiceInfoImgs": [{
                    *"type":"CARDFRONT",   // 客户类型=个人
                    *"imgUrl":"http://omgzp8h38.bkt.clouddn.com/Fpye2K9ygMMiLKwCDFE3xYA4z927"    // 图片URL
                },{
                    *"type":"CARDBACK",  //客户类型=个人
                    *"imgUrl":"http://omgzp8h38.bkt.clouddn.com/Fpye2K9ygMMiLKwCDFE3xYA4z927"    // 图片URL
                },{
                    *"type":"CHANGE",  //发票变更
                    *"imgUrl":"http://omgzp8h38.bkt.clouddn.com/Fpye2K9ygMMiLKwCDFE3xYA4z927"    // 图片URL
                },{
                    *"type":"SPECIAL",   //增值税专用发票
                    *"imgUrl":"http://omgzp8h38.bkt.clouddn.com/Fpye2K9ygMMiLKwCDFE3xYA4z927"    // 图片URL
                }],
            "invoiceInfoPerson": {
                "id":1,
                "invoiceId":1,
                "name":"梁铁骑",                            //发票名称
                "cardNo":"239124199012121345",              //身份证号
                "deleteFlg":0
            },
            "invoiceType": "NORMAL",        //发票类型：NORMAL 普票 SPECIAL 专票
            "mobile": "13356565656",    //联系人电话
            "modifyTime": "",
            "rollbackId": 0,
            "status": "NORMAL"          状态 EMPYT 待维护, NORMAL 正常
        }
    }

    
### FP-49. 发票日志列表--分页
#### 请求

    GET    /v2/invoice/info/log
    
#### 参数
    
    *id //发票id

#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [],
            "dataSums": null,
            "datas": [
                {
                    "id": 8,
                    "invoiceId": 6,
                    "opInfo": "新增客户发票信息",           //操作信息
                    "opRole": 1,
                    "opTime": "2018-10-26 09:46:09.0",      //操作时间
                    "opUser": 101,
                    "opUserName": "樊嘉辉"                  操作人
                },
                {
                    "id": 12,
                    "invoiceId": 6,
                    "opInfo": "维护发票信息",
                    "opRole": 1,
                    "opTime": "2018-10-26 11:31:41.0",
                    "opUser": 101,
                    "opUserName": "樊嘉辉"
                },
                {
                    "id": 14,
                    "invoiceId": 6,
                    "opInfo": "邮箱：liang.qitie@yahoo.cn->liang.qitieTTTT@yahoo.cn;邮寄地址：香炉礁物流商贸大厦->香炉礁物流商贸大厦3333;开户行：中国农业银行->中国农业银行大连香炉礁分行;",
                    "opRole": 1,
                    "opTime": "2018-10-26 13:14:05.0",
                    "opUser": 101,
                    "opUserName": "樊嘉辉"
                }
            ],
            "pageNo": 1,
            "total": 5
        }
    }

    
### FP-50. 发票审核通过
#### 请求

    PUT    /v2/invoice/info/pass/{id}
    
#### 参数
    
    *id: 发票信息ID

#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": null
    }

    
### FP-51. 发票审核拒绝
#### 请求

    PUT    /v2/invoice/info/refuse/{id}
    
#### 参数
    
    *id: 发票信息ID

#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": null
    }    


#请把FP-60以内留给我