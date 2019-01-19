## 菜谱接口
### CB-1. 风格新增
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    POST /v2/cookbook/style
#### 参数
    {
      *"nameCn": "甜蜜城堡",       // 中文名
      "nameEn": "Sweet Town",   // 英文名
      *"url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg", // 图片
      "intro": "法式风总是给人浪漫的感觉，淡淡蓝注定的他的罗曼蒂克，不太复杂的造型，搭配相呼应的软装，彰显得淋淋尽职。", // 说明
      "businesstypes": [  
        {
          "businessTypeId": 16,     // 业态id
          "businessTypeCode": "-16-"    // 业态code
        },
        {
          "businessTypeId": 34,
          "businessTypeCode": "-34-"
        }
      ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
### CB-2. 风格修改
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/cookbook/style/{id}
#### 参数
    *id // 风格id
    {
      *"nameCn": "甜蜜城堡",       // 中文名
      "nameEn": "Sweet Town",   // 英文名
      *"url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg", // 图片
      "intro": "法式风总是给人浪漫的感觉，淡淡蓝注定的他的罗曼蒂克，不太复杂的造型，搭配相呼应的软装，彰显得淋淋尽职。", // 说明
      "businesstypes": [  
        {
          "businessTypeId": 16,     // 业态id
          "businessTypeCode": "-16-"    // 业态code
        },
        {
          "businessTypeId": 34,
          "businessTypeCode": "-34-"
        }
      ]
    }
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }    
    
     
### CB-3. 风格锁定
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/cookbook/style/lock/{id}
#### 参数
    *id // 风格id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }    
     
### CB-4. 风格解锁
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/cookbook/style/unlock/{id}
#### 参数
    *id // 风格id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }    
         
### CB-5. 风格删除
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    DELETE /v2/cookbook/style/{id}
#### 参数
    *id // 风格id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": null
    }       
           
### CB-6. 风格列表
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/cookbook/style
#### 参数
    businessTypeId  // 业态id 如：16
    name            // 中文名称或英文名称
    status          // 状态  字典：NORMAL 正常 LOCK 锁定
    buttonPermissionFlg         // 1 获取按钮权限 0 不获取按钮权限
    pageNo              // 页码
    pageSize            // 页条数
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "deleteButton": true,   // 删除
                    "cookBookButton": true, // 关联菜谱
                    "lockButton": true,     // 锁定
                    "editButton": true,     // 编辑
                    "normalButton": false,  // 解锁
                    "logButton": true       // 日志
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "businesstypes": [
                        {
                            "businessTypeCode": "-34-",
                            "businessTypeId": 34,
                            "businessTypeName": "农贸市集",     // 所属业态
                            "id": 4,
                            "styleId": 2
                        },
                        {
                            "businessTypeCode": "-16-",
                            "businessTypeId": 16,
                            "businessTypeName": "西餐西快",
                            "id": 3,
                            "styleId": 2
                        }
                    ],
                    "cookbookIds": [1,2,3],             // 关联的菜谱id，没有关联的菜谱时，为null
                    "createRole": 0,
                    "createTime": "2019-01-19",         // 创建时间
                    "createUser": 0,
                    "createUserName": "孙启萌",        // 创建人
                    "deleteFlg": 0,
                    "id": 2,                    // 风格id
                    "intro": "法式风总是给人浪漫的感觉，淡淡蓝注定的他的罗曼蒂克，不太复杂的造型，搭配相呼应的软装，彰显得淋淋尽职。", // 风格说明
                    "nameCn": "罗曼蒂克风",      // 中文名
                    "nameEn": "Romantic Love",  // 英文名
                    "status": "NORMAL",         // 状态 字典：NORMAL 正常 LOCK 锁定
                    "url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg" // 风格图片
                }
            ],
            "pageNo": 1,
            "total": 1
        }
    }   
              
### CB-7. 风格详情
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/cookbook/style/detail/{id}
#### 参数
    *id // 风格id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "businesstypes": [
                {
                    "businessTypeCode": "-34-",     // 业态code
                    "businessTypeId": 34,           // 业态id
                    "businessTypeName": "农贸市集",  // 业态名称
                    "id": 10,
                    "styleId": 6
                },
                {
                    "businessTypeCode": "-16-",
                    "businessTypeId": 16,
                    "businessTypeName": "西餐西快",
                    "id": 9,
                    "styleId": 6
                }
            ],
            "cookbookIds": null,
            "createRole": 0,
            "createTime": "2019-01-19",
            "createUser": 0,
            "createUserName": "孙启萌",
            "deleteFlg": 0,
            "id": 6,    // 风格id
            "intro": "法式风总是给人浪漫的感觉，淡淡蓝注定的他的罗曼蒂克，不太复杂的造型，搭配相呼应的软装，彰显得淋淋尽职。", // 风格说明
            "nameCn": "商务黑金风",              // 中文名
            "nameEn": "Black Business Meals",   // 英文名
            "status": "LOCK",
            "url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg" // 风格图片
        }
    }
             
### CB-8. 风格日志
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/cookbook/style/log/{id}
#### 参数
    *id // 风格id
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
                    "opInfo": "锁定风格",       // 操作内容
                    "opRole": 0,
                    "opTime": "2019-01-19",     // 操作时间
                    "opUser": 0,
                    "opUserName": "孙启萌",        // 操作人
                    "styleId": 0
                },
                {
                    "id": 0,
                    "opInfo": "新增风格",
                    "opRole": 0,
                    "opTime": "2019-01-19",
                    "opUser": 0,
                    "opUserName": "孙启萌",
                    "styleId": 0
                }
            ],
            "pageNo": 1,
            "total": 8
        }
    }
               
### CB-9. 风格关联菜谱
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    POST /v2/cookbook/style/cookbook
#### 参数
    {
        "styleId": 6,       // 风格id
        "cookBookIds": [    // 菜谱id
            4,
            8,
            9
        ]
    }
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": null
    } 
                  
### CB-10. 风格关联菜谱调整优先显示
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/cookbook/style/cookbook/{id}
#### 参数
    *id // 风格菜谱关联id
    {
    	"priorityFlg":1         // 1 优先显示，0 不优先显示
    }
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": null
    } 
                    
### CB-11. 风格关联菜谱删除
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    DELETE /v2/cookbook/style/cookbook/{id}
#### 参数
    *id // 风格菜谱关联id
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": null
    }          
        
### CB-12. 风格关联菜谱列表
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/cookbook/style/cookbook/{id}
#### 参数
    *id // 风格id
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "cookBookId": 9,
                "id": 17,
                "intro": "樱桃乳酪慕斯裹上白巧克力创花,搭配丰富的水果,酸甜与美味融合,轻易征服你的味蕾.", // 菜谱描述
                "name": "水果全缤纷",        // 菜谱名称
                "priorityFlg": 1,           // 1 优先显示 0 非优先显示 
                "status": "LOCK",           // 状态 NORMAL 正常  LOCK 锁定
                "styleId": 6,
                "styleNameCn": "商务黑金风",
                "url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg" // 菜谱图片
            }
        ]
    }    
        
### CB-13. 风格关联一级业态
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    POST /v2/cookbook/style/businesstype
#### 参数
    {
        "styleIds": [ 风格id
            6,
            7
        ],
        "businesstypes": [
            {
                "businessTypeId": 95,   // 业态id
                "businessTypeCode": "-95-"  // 业态code
            },
            {
                "businessTypeId": 16,
                "businessTypeCode": "-16-"
            }
        ]
    }
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": null
    }     
### CB-14. 菜谱新增
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    POST /v2/cookbook
#### 参数
    {
        "cookBook": {
            *"name": "水果全缤纷",        // 菜谱名
            *"intro": "樱桃乳酪慕斯裹上白巧克力创花,搭配丰富的水果,酸甜与美味融合,轻易征服你的味蕾.",    // 菜谱说明
            *"url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg"     // 菜谱图片
        },
        "styleIds": [   // 所属风格
            2,      // 风格id
            6
        ],
        "cookBookFoods": [  // 食材
            {
                "name": "apple",    // 食材名
                "dosage": "2个"      // 用量
            },
            {
                "name": "沙拉",
                "dosage": "500ml"
            }
        ],
        "cookBookSteps": [
            {
                "intro": "苹果切碎",    // 步骤说明
                "cookBookStepImgs": [   // 步骤图
                    {
                        "url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg"
                    },
                    {
                        "url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg"
                    }
                ]
            },
            {
                "intro": "沙拉与苹果搅拌均匀"
            }
        ],
        "productIds": [ // 关联产品
            4537,       // 产品id
            4538
        ]
    }    
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
    
       
### CB-15. 菜谱修改
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/cookbook/{id}
#### 参数
    *id // 菜谱id 
    {
        "cookBook": {
            *"name": "水果全缤纷",        // 菜谱名
            *"intro": "樱桃乳酪慕斯裹上白巧克力创花,搭配丰富的水果,酸甜与美味融合,轻易征服你的味蕾.",    // 菜谱说明
            *"url": "http://asae.oss-cn-beijing.aliyuncs.com/ANET20190119115020082-9456.jpg"     // 菜谱图片
        },
        "styleIds": [   // 所属风格
            2,      // 风格id
            6
        ]
    }    
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
       
### CB-16. 菜谱锁定
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/cookbook/lock/{id}
#### 参数
    *id // 菜谱id  
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": null
    }
### CB-17. 菜谱解锁
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    PUT /v2/cookbook/unlock/{id}
#### 参数
    *id // 菜谱id  
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": null
    }

### CB-18. 菜谱删除
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求
    DELETE /v2/cookbook/{id}
#### 参数
    *id // 菜谱id  
#### 响应  
    {
        "code": 100000,
        "msg": "",
        "data": null
    }    