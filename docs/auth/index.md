## 权限接口
### QX-1. 开户

#### 1.1 请求URL
    /v2/userpower

#### 1.2 请求类型
    POST

#### 1.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|用户id|必|
|workno|用户编号|必|
|mobile|用户手机号|

#### 1.4 请求示例
    {
    	"id":517,
    	"workno":"0517",
    	"mobile":"18666664848"
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


### QX-2. 锁定、解锁

#### 2.1 请求URL
    /v2/userpower/{id}

#### 2.2 请求类型
    PUT

#### 2.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|用户id|
|oper|操作标志|lock 锁定； normal 解锁|



#### 2.4 请求示例
    {
    	"oper": "lock"
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



### QX-3. 用户权限列表

#### 3.1 请求URL
    /v2/userpower

#### 3.2 请求类型
    GET

#### 3.3 请求参数
|参数|名称|描述|
|---|---|---|
|workno|工号|
|fullname|全名|
|mobile|手机号|
|sys|菜单所属系统|a A网 sta 统计|
|menuid|菜单id|
|buttonPermissionFlg|0 获取按钮权限 默认1不获取|
|pageNo|页码|默认1|
|pageSize|页条数|默认25|

#### 3.4 请求示例
    无


#### 3.5 返回值
|参数|名称|描述|
|---|---|---|
|id|用户id|
|workno|工号|
|oper|操作标志|用不到|
|fullname|姓名|
|mobile|手机号|
|email|邮箱|
|status|状态|normal 正常 lock 锁定|
|passwordBlake2|用不到|
|passwordMd5|用不到|
|createTime|创建时间|
|modifyTime|修改时间|
|authDataPowers|数据权限列表|
|-> rid|数据权限编号|
|-> name|数据权限名称|
|authMenuPowers|功能权限列表|
|-> gid|功能权限编号|
|-> name|功能权限名称|


#### 3.6 返回示例
    {
        "code":100000,
        "msg":"",
        "data":{
            "buttonPermissions": [
                {
                    "bindDataPower": true, // 编订数据权限
                    "lockButton": true, // 锁定
                    "unlockButton": false, // 解锁
                    "newAccountButton": false, // 开户
                    "reset": true, // 重置密码
                    "bindMenuPower": true // 绑定功能权限
                }
            ],
            "dataSums":null,
            "datas":[
                {
                    "id":275,
                    "workno":"0289",
                    "oper":"",
                    "fullname":"刘子阳",
                    "mobile":"13591807386",
                    "email":"",
                    "status":"normal",
                    "passwordBlake2":"",
                    "passwordMd5":"",
                    "createTime":"",
                    "modifyTime":"",
                    "authDataPowers":[
                        {
                            "uid":233,
                            "rid":5962,
                            "name":"刘子阳",
                            "deleteFlg":0,
                            "gid":51,
                            "createTime":"",
                            "modifyTime":""
                        }
                    ],
                    "authMenuPowers":[
                        {
                            "uid":233,
                            "id":0,
                            "gid":50,
                            "name":"销售代表",
                            "status":"",
                            "sys":"a",
                            "createTime":""
                        },
                        {
                            "uid":233,
                            "id":0,
                            "gid":50,
                            "name":"SR",
                            "status":"",
                            "sys":"sta",
                            "createTime":""
                        }
                    ]
                }
            ],
            "pageNo":1,
            "total":1
        }
    }

### QX-4. 获取用户已分配功能权限列表

#### 4.1 请求URL
    /v2/userpower/menupower

#### 4.2 请求类型
    GET

#### 4.3 请求参数
|参数|名称|描述|
|---|---|---|
|uid|用户id|必|
|sys|所属系统|
|gid|功能权限编号|
|name|功能权限名称|
|pageNo|页码|默认1|
|pageSize|页大小|默认25|

#### 4.4 请求示例
    无

#### 4.5 返回值
|参数|名称|描述|
|---|---|---|
|uid|用户id|
|id|权限ID|
|gid|权限编号|
|name|权限名称|
|sys|所属系统|


#### 4.6 返回示例
    {
        "code":100000,
        "msg":"",
        "data":{
            "dataSums":null,
            "datas":[
                {
                "uid":11,
                "id":52,
                "gid":1533,
                "name":"供应商管理",
                "status":"",
                "sys":"a",
                "createTime":"",
                }
            ],
            "pageNo":1,
            "total":1
        }
    }

    
### QX-5. 获取用户已分配数据权限列表

#### 5.1 请求URL
    /v2/userpower/datapower

#### 5.2 请求类型
    GET

#### 5.3 请求参数
|参数|名称|描述|
|---|---|---|
|uid|用户id|必|
|rid|数据权限id|
|name|数据权限名称|
|pageNo|页码|默认1|
|pageSize|每页条数|默认25|

#### 5.4 请求示例
    无

#### 5.5 返回值
|参数|名称|描述|
|---|---|---|
|uid|用户id|
|gid|功能权限编号|
|rid|数据权限编号|
|name|数据权限名称|


#### 5.6 返回示例
    {
        "code":100000,
        "msg":"",
        "data":{
            "dataSums":null,
            "datas":[
                {
                    "uid":11,
                    "rid":71,
                    "gid":41,
                    "name":"大牛",
                    "deleteflg":0,
                    "createTime":"",
                    "modifyTime":""
                },
                {
                    "uid":11,
                    "rid":70,
                    "gid":41,
                    "name":"小刘",
                    "deleteflg":0,
                    "createTime":"",
                    "modifyTime":""
                }
            ],
            "pageNo":1,
            "total":2
        }
    }




### QX-6. 用户分配功能权限

#### 6.1 请求URL
    /v2/userpower/menupower

#### 6.2 请求类型
    POST

#### 6.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|用户id|必|
|gid|功能权限编号|必|
|sys|功能权限所属系统|必|

#### 6.4 请求示例
    {
        "id":517,
        "gid":21,
        "sys":"a"
    }

#### 6.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 6.6 返回示例
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }
    

### QX-7. 用户取消分配功能权限

#### 7.1 请求URL
    /v2/userpower/menupower/{id}

#### 7.2 请求类型
    PUT

#### 7.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|菜单id|必|
|gid|功能权限编号|必|
|sys|功能权限所属系统|必|

#### 7.4 请求示例
    {
        
        "gid":21,
        "sys":"a"
    }

#### 7.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 7.6 返回示例
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    } 
    
    


### QX-8. 用户分配数据权限

#### 8.1 请求URL
    /v2/userpower/datapower

#### 8.2 请求类型
    POST

#### 8.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|用户id|必|
|rid|数据权限编号|必|

#### 8.4 请求示例
    {
        "id":517,
        "rid":23
    }

#### 8.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 8.6 返回示例
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }
    

### QX-9. 用户取消分配数据权限

#### 9.1 请求URL
    /v2/userpower/datapower/{id}

#### 9.2 请求类型
    PUT

#### 9.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|用户id|必|
|rid|数据权限编号|必|

#### 9.4 请求示例
    {
        "rid":23
    }

#### 9.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 9.6 返回示例
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }    
    
    
### QX-10. 重置密码

#### 10.1 请求URL
    /v2/userpower/reset/{id}

#### 10.2 请求类型
    PUT

#### 10.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|用户id|



#### 10.4 请求示例
    无


#### 10.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 10.6 返回示例
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }



### QX-11. 新增功能权限

#### 11.1 请求URL
    /v2/menupower

#### 11.2 请求类型
    POST

#### 11.3 请求参数
|参数|名称|描述|
|---|---|---|
|sys|所属系统|必|
|gid|权限编号|必|
|name|权限名称|必|

#### 11.4 请求示例
    {
    	"sys": "a",
    	"gid": 250,
    	"name":"测试权限"
    }

#### 11.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 11.6 返回示例
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }


### QX-12. 修改功能权限

#### 12.1 请求URL
    /v2/menupower/{id}

#### 12.2 请求类型
    PUT

#### 12.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|权限id|
|sys|所属系统|
|gid|权限编号|
|name|权限名称|
|status|状态|normal 正常；lock 锁定|



#### 12.4 请求示例
    {
    	"sys": "a",
    	"gid": 250,
    	"name":"修改测试权限",
    	"status":"lock"
    }


#### 12.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 12.6 返回示例
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }



### QX-13. 功能权限管理列表/未分配功能权限列表

#### 13.1 请求URL
    /v2/menupower

#### 13.2 请求类型
    GET

#### 13.3 请求参数
|参数|名称|描述|
|---|---|---|
|sys|所属系统| a A网；sta 统计系统|
|gid|功能权限编号|
|name|功能权限名称|
|status|状态|normal 正常； lock 锁定|
|buttonPermissionFlg|0 获取按钮权限 默认1不获取|
|asigned|传 no |获取用户未分配功能权限使用|
|uid|用户id|获取用户未分配功能权限使用|
|pageNo|页码|默认1|
|pageSize|页条数|默认25|

#### 13.4 请求示例
    无


#### 13.5 返回值
|参数|名称|描述|
|---|---|---|
|id|功能权限ID||
|gid|功能权限编号|
|name|功能权限名称|
|sys|所属系统| a A网；sta 统计系统|
|status|状态|normal 正常；lock 锁定|
|createTime|创建时间|


#### 13.6 返回示例
    {
        "code":100000,
        "msg":"",
        "data":{
            "buttonPermissions": [
                {
                    "lockButton": false, // 锁定
                    "unlockButton": true, // 解锁
                    "editButton": true, // 编辑
                    "bindButton": false // 绑定菜单
                }
            ],
            "dataSums":null,
            "datas":[
                {
                    "uid":0,
                    "id":18,
                    "gid":42,
                    "name":"客服",
                    "sys":"a",
                    "status":"lock",
                    "createTime":""
                }
            ],
            "pageNo":1,
            "total":1
        }
    }

### QX-14. 功能权限详情

#### 14.1 请求URL
    /v2/menupower/detail

#### 14.2 请求类型
    GET

#### 14.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|权限ID|必|

#### 14.4 请求示例
    无

#### 14.5 返回值
|参数|名称|描述|
|---|---|---|
|id|权限ID|
|gid|权限编号|
|name|权限名称|
|sys|所属系统|
|status|状态|normal 正常；lock 锁定|
|createTime|创建时间|


#### 14.6 返回示例
    {
        "code":100000,
        "msg":"",
        "data":{
            "uid":0,
            "id":18,
            "gid":42,
            "name":"客服",
            "sys":"a",
            "status":"normal",
            "createTime":""
        }
    }

    
### QX-15. 获取功能权限已绑定的菜单列表

#### 15.1 请求URL
    /v2/menupower/binding

#### 15.2 请求类型
    GET

#### 15.3 请求参数
|参数|名称|描述|
|---|---|---|
|gid|权限编号|必|
|sys|所属系统|必|
|pid|上级菜单ID|
|menuid|菜单编号|
|name|菜单名称|
|pageNo|页码|默认1|
|pageSize|每页条数|默认25|

#### 15.4 请求示例
    无

#### 15.5 返回值
|参数|名称|描述|
|---|---|---|
|gid|功能权限编号|
|id|菜单编号|
|sys|所属系统|
|name|菜单名称|
|level|菜单等级|


#### 15.6 返回示例
    {
        "code":100000,
        "msg":"",
        "data":{
            "dataSums":null,
            "datas":[
                {
                    "gid":11,
                    "id":213,
                    "sys":"a",
                    "name":"经销商审核",
                    "level":2,
                }
            ],
            "pageNo":1,
        "total":1
        }
    }




### QX-16. 功能权限绑定菜单

#### 16.1 请求URL
    /v2/menupower/binding

#### 16.2 请求类型
    POST

#### 16.3 请求参数
|参数|名称|描述|
|---|---|---|
|powerid|权限编号|必|
|menuid|菜单id|必|

#### 16.4 请求示例
    [
    	{
    		"powerid":111,
    		"menuid":81
    	},
    	{
    		"powerid":111,
    		"menuid":82
    	}
    ]

#### 16.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 16.6 返回示例
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }
    

### QX-17. 功能权限解绑菜单

#### 17.1 请求URL
    /v2/menupower/binding/{id}

#### 17.2 请求类型
    PUT

#### 17.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|功能权限编号|必|
|menuid|菜单id|必|

#### 17.4 请求示例
    [
    	{
    		"menuid":81
    	},
    	{
    		"menuid":82
    	}
    ]

#### 17.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 17.6 返回示例
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }    
    
    
    
    

### QX-18. 新增数据权限

#### 18.1 请求URL
    /v2/datapower

#### 18.2 请求类型
    POST

#### 18.3 请求参数
|参数|名称|描述|
|---|---|---|
|name|数据权限名称|必|
|gid|功能权限编号|必|

#### 18.4 请求示例
    {
    	"name":"数据权限名称",
        "gid": 42
    }

#### 18.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 18.6 返回示例
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }


### QX-19. 修改数据权限

#### 19.1 请求URL
    /v2/datapower/{id}

#### 19.2 请求类型
    PUT

#### 19.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|数据权限编号|
|name|数据权限名称|
|gid|功能权限编号|


#### 19.4 请求示例
    {
    	"name":"修改数据权限",
        "gid": 11
    }


#### 19.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 19.6 返回示例
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }



### QX-20. 数据权限管理列表/未分配数据权限列表

#### 20.1 请求URL
    /v2/datapower

#### 20.2 请求类型
    GET

#### 20.3 请求参数
|参数|名称|描述|
|---|---|---|
|rid|权限编号|
|name|权限名称|
|asigned|传 no|获取未分配权限列表使用|
|uid|用户ID|获取用户未分配权限列表|
|pageNo|页码|默认1|
|pageSize|页条数|默认25|

#### 20.4 请求示例
    无


#### 20.5 返回值
|参数|名称|描述|
|---|---|---|
|rid|数据权限编号|
|name|数据权限名称|
|gid|功能权限编号|


#### 20.6 返回示例
    {
        "code":100000,
        "msg":"",
        "data":{
            "dataSums":null,
            "datas":[
                {
                    "uid":0,
                    "rid":29161,
                    "name":"采购管理角色",
                    "gid":1533,
                    "deleteflg":0,
                    "createTime":"",
                    "modifyTime":""
                }
            ],
            "pageNo":1,
            "total":1
        }
    }


### QX-21. 删除数据权限

#### 21.1 请求URL
    /v2/datapower/{id}

#### 21.2 请求类型
    DELETE

#### 21.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|权限ID|必|

#### 21.4 请求示例
    无


#### 21.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 21.6 返回示例
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }



### QX-22. 新增菜单

#### 22.1 请求URL
    /v2/menu

#### 22.2 请求类型
    POST

#### 22.3 请求参数
|参数|名称|描述|
|---|---|---|
|sys|菜单所属系统|必|
|name|菜单名称|必|
|parentId|上级菜单ID|必 0 无上级菜单 大于0 上级菜单ID|
|ctrl|控制器|
|action|方法|
|params|参数|
|sort|菜单排序|
|level|菜单等级|

#### 22.4 请求示例
    {
    	"sys":"a",
    	"name":"一级菜单",
    	"ctrl":"first",
    	"action":"second",
    	"params":"third",
    	"parentId":0,
    	"sort":2,
    	"level":1
    }

#### 22.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 22.6 返回示例
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }


### QX-23. 修改菜单

#### 23.1 请求URL
    /v2/menu/{id}

#### 23.2 请求类型
    PUT

#### 23.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|菜单id|必|
|sys|菜单所属系统|
|parentId|上级菜单ID|必 0 无上级菜单 大于0 上级菜单ID|
|name|菜单名称|
|ctrl|控制器|
|action|方法|
|params|参数|
|sort|菜单排序|
|level|菜单等级|
|status|状态|show 显示 hidden 隐藏|


#### 23.4 请求示例
    {
    	"sys":"a",
    	"name":"二级菜单",
    	"ctrl":"first",
    	"action":"second",
    	"params":"third",
    	"parentId":1,
    	"sort":2,
    	"level":2,
    	"status":"show"
    }


#### 23.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 23.6 返回示例
    {
    	"code": 100000,
    	"msg": "操作成功",
    	"data": null
    }



### QX-24. 菜单管理列表/功能权限获取未绑定菜单列表

#### 24.1 请求URL
    /v2/menu

#### 24.2 请求类型
    GET

#### 24.3 请求参数
|参数|名称|描述|
|---|---|---|
|sys|所属系统|
|menuid|菜单ID|
|name|菜单名称|
|ctrl|路由一|
|pid|上级菜单ID|
|status|状态|
|level|菜单等级|获取一级菜单是可以传 1 |
|buttonPermissionFlg|0 获取按钮权限 默认1不获取|
|asigned|传 no|功能权限获取未绑定菜单列表使用|
|gid|功能权限编号|功能权限获取未绑定菜单列表使用|
|pageNo|页码|默认1|
|pageSize|页条数|默认25|

#### 24.4 请求示例
    无


#### 24.5 返回值
|参数|名称|描述|
|---|---|---|
|id|菜单id|
|name|菜单名称|
|sys|所属系统|
|ctrl|路由一|
|action|路由二|
|params|参数|
|parentId|上级菜单ID|
|sort|排序|
|level|等级|
|status|状态|show 显示 hidden 隐藏|
|createTime|创建时间|


#### 24.6 返回示例
    {
        "code":100000,
        "msg":"",
        "data":{
            "buttonPermissions": [
                {
                    "hiddenButton": true, // 隐藏
                    "editButton": true, // 编辑
                    "showButton": false, // 显示
                    "deleteButton": false // 删除
                }
            ],
            "dataSums":null,
            "datas":[
                {
                    "id":308,
                    "name":"特价管理",
                    "sys":"a",
                    "ctrl":"rebates",
                    "action":"special",
                    "params":"",
                    "parentId":32,
                    "sort":5,
                    "level":2,
                    "status":"show",
                    "createTime":""
                }
            ],
            "pageNo":1,
            "total":1
        }
    }



### QX-25. 删除菜单

#### 25.1 请求URL
    /v2/menu/{id}

#### 25.2 请求类型
    DELETE

#### 25.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|菜单ID|必|

#### 25.4 请求示例
    无


#### 25.5 返回值
|参数|名称|描述|
|---|---|---|
|code|编号|100000成功；0 失败；|
|msg|消息|异常信息|
|data|null|


#### 25.6 返回示例
    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }



### QX-26. 菜单信息

#### 26.1 请求URL
    /v2/menu/detail

#### 26.2 请求类型
    GET

#### 26.3 请求参数
|参数|名称|描述|
|---|---|---|
|id|菜单id|必|

#### 26.4 请求示例
    无


#### 26.5 返回值
|参数|名称|描述|
|---|---|---|
|id|菜单id|
|name|菜单名称|
|sys|所属系统|
|ctrl|路由一|
|action|路由二|
|params|参数|
|parentId|上级菜单ID|
|sort|排序|
|level|等级|
|status|状态|show 显示 hidden 隐藏|
|createTime|创建时间|


#### 26.6 返回示例
    {
        "code":100000,
        "msg":"",
        "data":{
            "id":318,
            "name":"产品管理",
            "sys":"a",
            "ctrl":"supplier",
            "action":"prsupplier",
            "params":"",
            "parentId":32,
            "sort":3,
            "level":2,
            "status":"show",
            "createTime":""
        }
    }
    
    
    
    

### QX-27. 操作日志列表

#### 27.1 请求URL
    /v2/systemlog

#### 27.2 请求类型
    GET

#### 27.3 请求参数
|参数|名称|描述|
|---|---|---|
|type|操作类型|

#### 27.4 请求示例
    无


#### 27.5 返回值
|参数|名称|描述|
|---|---|---|
|type|操作类型|
|action|操作内容|
|uid|用户id|
|uname|用户姓名|
|gid|功能权限编号|
|gname|功能权限名称|
|sys|所属系统|
|menuId|菜单id|
|mname|菜单名称|
|roleId|数据权限编号|
|rname|数据权限名称|
|createRole|操作人角色id|
|createUser|操作人id|
|createUserName|操作人姓名|
|createTime|操作时间|


#### 27.6 返回示例
    {
        "code": 100000,
        "msg": "",
        "data": {
            "dataSums": null,
            "datas": [
                {
                    "id": 0,
                    "type": "9",
                    "action": "功能权限绑定菜单",
                    "uid": 0,
                    "uname": "",
                    "gid": 111,
                    "gname": "测试修改",
                    "sys": "",
                    "menuId": 82,
                    "mname": "供应商用户列表",
                    "roleId": 0,
                    "rname": "",
                    "createRole": 1,
                    "createTime": "2018-08-22 14:28:55.0",
                    "createUser": 101,
                    "createUserName": "樊嘉辉",
                },
                {
                    "id": 0,
                    "type": "1",
                    "action": "用户开户",
                    "uid": 517,
                    "uname": "",
                    "gid": 0,
                    "gname": "",
                    "sys": "",
                    "menuId": 0,
                    "mname": "",
                    "roleId": 0,
                    "rname": "",
                    "createRole": 1,
                    "createTime": "2018-08-20 17:08:08.0",
                    "createUser": 101,
                    "createUserName": "樊嘉辉",
                }
            ],
            "pageNo": 1,
            "total": 2
        }
    }


### QX-28. 根据SS\SR类型获取角色权限列表

#### 28.1 请求URL
    /v2/datapower/roles

#### 28.2 请求类型
    GET

#### 28.3 请求参数
|参数|名称|描述|
|---|---|---|
|type|角色类型|必 可取值 ss  或  sr|

#### 28.4 请求示例
    无


#### 28.5 返回值
|参数|名称|描述|
|---|---|---|
|rid|角色ID|
|roleName|角色名称|
|gid|功能权限ID|


#### 28.6 返回示例
    {
        "code":100000,
        "msg":"",
        "data":[
            {
                "gid":24,
                "rid":40,
                "roleName":"高成举-SRM-T"
            },
            {
                "gid":24,
                "rid":479,
                "roleName":"王振华"
            },
            {
                "gid":24,
                "rid":856,
                "roleName":"SRM-W-冯松"
            }
        ]
    }


### QX-29. 用户登陆后获取菜单

#### 29.1 请求URL
    /v2/auth/getMenus

#### 29.2 请求类型
    GET

#### 29.3 请求参数
|参数|名称|描述|
|---|---|---|
|token|必|
|source|系统类型|必 a A网 sta 统计|
|ctrl|

#### 29.4 请求示例
    无


#### 29.5 返回值
|参数|名称|描述|
|---|---|---|
|id|菜单id|
|name|菜单名称|
|sys|所属系统|
|ctrl|路由一|
|action|路由二|
|params|参数|
|parentId|上级菜单ID|
|level|等级|


#### 29.6 返回示例
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "action": "",
                "createTime": "",
                "ctrl": "oldmppr",
                "id": 151,
                "level": 1,
                "name": "MPPR",
                "params": "",
                "parentId": 0,
                "sort": 0,
                "status": "",
                "sys": "a"
            },
            {
                "action": "",
                "createTime": "",
                "ctrl": "mppr",
                "id": 281,
                "level": 1,
                "name": "备货管理",
                "params": "",
                "parentId": 0,
                "sort": 0,
                "status": "",
                "sys": "a"
            },
            {
                "action": "",
                "createTime": "",
                "ctrl": "user",
                "id": 143,
                "level": 1,
                "name": "账号管理",
                "params": "",
                "parentId": 0,
                "sort": 0,
                "status": "",
                "sys": "a"
            }
        ]
    }