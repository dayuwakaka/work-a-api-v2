## 权限接口
### QX-1. 开户
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    POST    /v2/userpower
    
#### 参数

    {
    	"id":517,               // * 用户id
    	"workno":"0517",        // * 工号
    	"mobile":"18666664848" // * 手机号
    }

#### 响应

    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }


### QX-2. 锁定、解锁
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    PUT     /v2/userpower/{id}
    
#### 参数

    id // * 用户id
    {
        "status": "lock" // * lock 锁定 normal 解锁
    }

#### 响应

    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }


### QX-3. 用户权限列表
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    GET     /v2/userpower

#### 参数

    keyword // 用户名/手机号
    status // 状态  NORMAL 正常 LOCK 锁定 NOACCOUNT 未开户
    buttonPermissionFlg // 0 不查询按钮权限 1 查询
    pageNo  // 页码
    pageSize // 页条数

#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "bindDataPower": true,  // 绑定数据权限
                    "lockButton": true, // 锁定
                    "unlockButton": false,  // 解锁
                    "newAccountButton": false,  开户
                    "reset": true,  // 重置密码
                    "bindMenuPower": true   绑定功能权限
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "authDataPowers": [
                        {
                            "gid": 0,
                            "gname": "",    
                            "rid": 1,   // 数据权限编号
                            "rname": "",    // 数据权限名称
                            "uid": 101
                        }
                    ],
                    "authMenuPowers": [
                        {
                            "createTime": "",
                            "gid": 11,  // 功能权限编号
                            "id": 1,
                            "isAuto": 0,
                            "menuIds": null,
                            "name": "系统管理员",   // 功能权限名称
                            "remark": "",
                            "status": "",
                            "sys": "a",
                            "uid": 101
                        }
                    ],
                    "fullname": "樊嘉辉",   // 用户名
                    "id": 101,  // 用户ID
                    "isOpen": "1",  
                    "mobile": "13478445016",    // 手机号
                    "status": "normal", // 状态 NOACCOUNT 未开户 LOCK 锁定 NORMAL 解锁
                    "workno": "0101"    // 工号
                }
            ],
            "pageNo": 1,
            "total": 1
        }
    }
   
### QX-4. 重置密码
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    PUT     /v2/userpower/reset/{id}

#### 参数
    
    id // * 用户id

#### 响应

    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }


### QX-5. 用户分配功能权限
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    POST    /v2/userpower/menupower

#### 参数
    
    {
        "uid":101,  // * 用户id
        "gids":[82, 83]    // * 功能权限id列表
    }

#### 响应

    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }
    

    
### QX-7. 用户分配数据权限
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    POST    /v2/userpower/datapower

#### 参数

    {
        "uid":101, // * 用户id
        "rids":[82, 83]    // * 数据权限id列表
    }

#### 响应

    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }
    


### QX-9. 功能权限新增
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    POST /v2/menupower

#### 参数

    {
    	"name":"测试权限",  // * 权限名称
    	"isAuto":1,         // * 0 非自动生成编号 1 自动生成编号
    	"gid": 250,         // 权限编号，isAuto=0时，必选
    	"remark":"备注",    // 备注
    	"menuIds":[3,5,11]  // 菜单id列表
    }

#### 响应

    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }


### QX-10. 功能权限修改
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    PUT /v2/menupower/{id}

#### 参数

    id // * 权限id
    {
    	"name":"测试权限",  //  权限名称
    	"remark":"备注",    // 备注
    	"gid": 250,         // * 权限编号
    	"menuIds":[3,5,11]  // 菜单id列表
    }
    
#### 响应

    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }
    
### QX-11. 功能权限的锁定、解锁
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    PUT /v2/menupower/status/{id}
    
#### 参数

    id  // * 权限id
    {
        "status":"lock" // * lock 锁定 normal 解锁
    }

#### 响应

    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }

### QX-12. 功能权限列表
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    GET /v2/menupower

#### 参数

    keyword // 权限编号/权限名称
    status  // 状态 lock 锁定 normal 解锁
    buttonPermissionFlg // 0 不查询按钮权限 1 查询
    pageNo  // 页码
    pageSize    // 页条数

#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "lockButton": false,    // 锁定
                    "unlockButton": true,   // 解锁
                    "editButton": true,     // 编辑
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "createTime": "",
                    "gid": 1112,    // 权限编号
                    "id": 37,   // 权限id
                    "isAuto": 0,
                    "menuIds": null,
                    "name": "测试权限新增0",    // 权限名称
                    "remark": "",
                    "status": "lock",   // lock 锁定 normal 正常
                    "sys": "a",
                    "uid": 0
                }
            ],
            "pageNo": 1,
            "total": 1
        }
    }
    
### QX-13. 功能权限详情
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    GET /v2/menupower/detail

#### 参数

    id  // * 权限id

#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": {
            "createTime": "",
            "gid": 42,  // 功能权限编号
            "id": 18,
            "isAuto": 0,
            "menuIds": [    // 已绑定菜单列表
                37,
                55,
                60
            ],
            "name": "客服", // 功能权限名称
            "remark": "",   // 备注
            "status": "normal",
            "sys": "a",
            "uid": 0
        }
    }

    
### QX-14. 数据权限新增
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    POST /v2/datapower

#### 参数

    {
        "name":"陆贞逸",  // * 数据权限名称
        "gid":42    // * 功能权限编号
    }

#### 响应

    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }


### QX-15. 数据权限修改
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    PUT /v2/datapower/{id}

#### 参数

    id // * 数据权限id
    {
        "name":"陆贞逸",    // 数据权限名称
        "gid":42    // 功能权限编号
    }


#### 响应

    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }


### QX-16. 数据权限删除
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    DELETE  /v2/datapower/{id}

#### 参数

    id // * 数据权限id

#### 响应

    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }



### QX-17. 数据权限列表
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    GET /v2/datapower

#### 参数

    keyword // 权限编号/权限名称
    pageNo  // 页码
    pageSize    // 页条数

#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": null,
            "dataSums": null,
            "datas": [
                {
                    "gid": 32,              // 功能权限编号
                    "gname": "销售会计",    // 功能权限名称
                    "rid": 29001,           // 数据权限编号
                    "rname": "张晓丹",      // 数据权限名称
                    "uid": 0
                }
            ],
            "pageNo": 1,
            "total": 1
        }
    }

### QX-18. 数据权限详情
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    GET /v2/datapower/detail

#### 参数

    rid // * 数据权限编号

#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": {
            "gid": 32,              // 功能权限编号
            "gname": "销售会计",    // 功能权限名称
            "rid": 29001,           // 数据权限编号
            "rname": "张晓丹",      // 数据权限名称
            "uid": 0
        }
    }


### QX-19. 菜单新增
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    POST    /v2/menu

#### 参数

    {
        "name":"商品统计",  // * 菜单名称
        "level":1,          // * 菜单等级
        "ctrl":"product",   // * 一级路由
        "action":"store",   // 二级路由，level=2时，必选
        "parentId":0,       // 上级菜单id,level=2时，必选
        "icon":"aware-syn"  // 一级菜单图标，level=1时，必选
    }

#### 响应

    {
    	"code": 100000,
    	"msg": "",
    	"data": null
    }


### QX-20. 菜单修改
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    PUT     /v2/menu/{id}

#### 参数

    id  // * 菜单id
    {
        "name":"商品统计",  // * 菜单名称
        "level":1,          // * 菜单等级
        "ctrl":"product",   // * 一级路由
        "action":"store",   // 二级路由，level=2时，必选
        "parentId":0,       // 上级菜单id,level=2时，必选
        "icon":"aware-syn" // 一级菜单图标，level=1时，必选
    }


#### 响应

    {
    	"code": 100000,
    	"msg": "操作成功",
    	"data": null
    }

### QX-21. 菜单显示、隐藏
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    PUT     /v2/menu/status

#### 参数

    {
        "ids":[3,5,7],      // 菜单id列表
        "status":"hidden",  // * show 显示 hidden 隐藏
    }


#### 响应

    {
    	"code": 100000,
    	"msg": "操作成功",
    	"data": null
    }

### QX-22. 菜单排序
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    PUT     /v2/menu/sort/{id}

#### 参数

    id  // * 菜单id
    {
        "sort":2,  // * 顺序
    }


#### 响应

    {
    	"code": 100000,
    	"msg": "操作成功",
    	"data": null
    }

### QX-23. 菜单删除
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    DELETE     /v2/menu/{id}

#### 参数

    id  // * 菜单id


#### 响应

    {
    	"code": 100000,
    	"msg": "操作成功",
    	"data": null
    }

### QX-24. 菜单列表
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    GET     /v2/menu

#### 参数

    level   // 1：只获取一级菜单 其它：全部获取
    buttonPermissionFlg //  1 查询按钮权限 0 不查询

#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissions": [
                {
                    "deleteButton": false,  // 删除
                    "editButton": true,     // 编辑
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "action": "",               // 二级路由
                    "createTime": "",   
                    "ctrl": "depotmatchareas",  // 一级路由
                    "icon": "",         // 图标
                    "id": 140,          // 菜单id
                    "level": 1,         // 菜单等级
                    "name": "仓库管理", // 菜单名称
                    "params": "",
                    "parentId": 0,      // 上级菜单id
                    "sort": 0,          // 排序
                    "status": "show",   // show 显示 hidden 隐藏
                    "sys": ""
                }
                ......
            ],
            "pageNo": 0,
            "total": 0
        }
    }



### QX-25. 菜单详情
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    GET     /v2/menu/detail

#### 参数

    id // * 菜单id

#### 响应

    {
        "code": 100000,
        "msg": "",
        "data": {
            "action": "",           // 二级路由
            "createTime": "",
            "ctrl": "depotmatchareas",  // 一级路由
            "icon": "",         // 菜单图标
            "id": 140,          // 菜单id
            "level": 1,         // 菜单等级
            "name": "仓库管理", // 菜单名称
            "params": "",
            "parentId": 0,  // 上级菜单id
            "sort": 0,
            "status": "show",
            "sys": ""
        }
    }
    
    
    
    

### QX-26. 操作日志列表
#### 对接负责人
    尹洪明
#### 模块负责人
    尹洪明
#### 请求

    GET     /v2/systemlog

#### 参数

    type    // 日志类型 请参考下面操作类型说明
    
#### 响应

    操作类型说明：
    1 开户，2 用户锁定，3 用户解锁，4 重置密码，
    5 用户分配功能权限，6 用户取消分配功能权限，7 用户分配数据权限，
    8 用户取消分配数据权限，9 功能权限绑定菜单，
    10 功能权限取消绑定菜单

    type 	操作内容
    1		用户 uname 开户，
    2		用户 uname 锁定，
    3		用户 uname 解锁，
    4		用户 uname 重置密码，
    5		用户 uname 分配功能权限 gname,
    6		用户 uname 取消分配功能权限 gname,
    7		用户 uname 分配数据权限 rname,
    8		用户 uname 取消分配数据权限 rname,
    9		功能权限 gname 绑定菜单 mname,
    10		功能权限 gname 取消绑定菜单 mname,
    {
        "code": 100000,
        "msg": "",
        "data": {
            "dataSums": null,
            "datas": [
                {
                    "id": 0,
                    "type": "9",             // 操作类型  
                    "action": "功能权限绑定菜单",  
                    "uid": 0,                   
                    "uname": "",            // 被操作的用户
                    "gid": 111,             
                    "gname": "测试修改",    // 被操作的功能权限
                    "sys": "",
                    "menuId": 82,
                    "mname": "供应商用户列表",// 被操作菜单
                    "roleId": 0,
                    "rname": "",            // 被操作数据权限
                    "createRole": 1,
                    "createTime": "2018-08-22 14:28:55.0", // 操作时间
                    "createUser": 101,
                    "createUserName": "樊嘉辉", // 操作人
                }
                ......
            ],
            "pageNo": 1,
            "total": 28
        }
    }
    
### QX-27. 不分页的功能权限列表
#### 模块负责人
    尹洪明
#### 请求
    GET     /v2/menupower/nopage
#### 参数
    asigned     // 是否分配 YES 分配 NO 未分配
    uid         // 用户id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "createTime": "",
                "gid": 22,
                "id": 9,
                "isAuto": 0,
                "menuIds": null,
                "name": "事业部总经理",
                "remark": "",
                "status": "NORMAL",
                "sys": "a",
                "uid": 0
            }
        ]
    }

    
### QX-31. 不分页的数据权限列表
#### 模块负责人
    尹洪明
#### 请求
    GET     /v2/datapower/nopage
#### 参数
    asigned     // 是否分配 YES 分配 NO 未分配
    uid         // 用户id
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "gid": 21,
                "gname": "CEO",
                "rid": 5046,
                "rname": "宁丽丽",
                "uid": 0
            }
        ]
    }
                    
### QX-32. 收款人、复核、开票人
#### 模块负责人
    尹洪明
#### 请求
    GET    /v2/userpower/employee
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
        ]
    }    
    

### QX-41. 关注列表

#### 模块负责人
    王子悦
#### 请求
    GET    /v2/authfollow/focus
#### 参数
    name   //角色名称
    status //状态 INVALID 未通过 REFUSE 拒绝 PASS 通过
    pageNo //页码
    pageSize //页条数
    
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissionPage": {},
            "buttonPermissions": [
                {
                "cancelButton": false  //作废按钮
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "befocusName": "樊嘉辉",//被关注人角色
                    "checkRole": 0,
                    "checkTime": "",
                    "checkUser": 0,
                    "createRole": 29319,
                    "createTime": "2019-04-24 15:46:58",//创建时间
                    "createUser": 518,
                    "createUsername": "孙启萌",//创建人
                    "deleteFlg": 0,
                    "focusName": "孙启萌",//关注人角色
                    "followRid": 1,
                    "id": 138,
                    "rid": 29319,
                    "status": "PASS"//状态 INVALID 未通过 REFUSE 拒绝 PASS 通过
                }
            ],
            "pageNo": 1,
            "total": 1
        }
    }
### QX-42. 被关注列表

#### 模块负责人
    王子悦
#### 请求
    GET    /v2/authfollow/befocus
#### 参数
    name   //角色名称
    status //状态 INVALID 未通过 REFUSE 拒绝 PASS 通过
    pageNo //页码
    pageSize //页条数
    
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "buttonPermissionPage": {},
            "buttonPermissions": [
                {
                    "refuseButton": false,  //拒绝按钮
                    "agreeButton": false    //通过按钮
                }
            ],
            "dataSums": null,
            "datas": [
                {
                    "befocusName": "樊嘉辉",//被关注人角色
                    "checkRole": 1,
                    "checkTime": "2019-04-24 15:39:27",
                    "checkUser": 518,
                    "createRole": 29319,
                    "createTime": "2019-04-24 15:16:49",//创建时间
                    "createUser": 518,
                    "createUsername": "孙启萌",//创建人
                    "deleteFlg": 0,
                    "focusName": "孙启萌",//关注人角色
                    "followRid": 1,
                    "id": 137,
                    "rid": 29319,
                    "status": "REFUSE"//状态 INVALID 未通过 REFUSE 拒绝 PASS 通过
                }
            ],
            "pageNo": 1,
            "total": 1
        }
    }

### QX-43. 添加关注

#### 模块负责人
    王子悦
#### 请求
    POST    /v2/authfollow/
#### 参数
    {
	    "followRoleIds":[29365,29364,29363]   //关注角色集合
    }
    
#### 响应
    {"code":100000,"msg":"","data":null}

### QX-44. 通过关注

#### 模块负责人
    王子悦
#### 请求
    PUT    /v2/authfollow/agree/{id}
#### 参数
    无
#### 响应
    {"code":100000,"msg":"","data":null}

### QX-45. 拒绝关注

#### 模块负责人
    王子悦
#### 请求
    PUT    /v2/authfollow/refuse/{id}
#### 参数
    无
#### 响应
    {"code":100000,"msg":"","data":null}

### QX-46. 作废关注

#### 模块负责人
    王子悦
#### 请求
    DELETE    /v2/authfollow/cancel/{id}
#### 参数
    无
#### 响应
    {"code":100000,"msg":"","data":null}

### QX-47. 角色列表

#### 模块负责人
    王子悦
#### 请求
    GET    /v2/authfollow/roles
#### 参数

    name      //角色名称
    pageNo    //页码
    pageSize  //页条数

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
                    "gid": 42,
                    "rid": 2200,//角色编号
                    "roleName": "李欢欢1"  //角色名称
                }
            ],
            "pageNo": 1,
            "total": 18
        }
    }

### QX-48. 提供当前SS拥有的，关注SS所拥有的客户ID集合

#### 模块负责人
    王子悦
#### 请求
    GET    /v2/authfollow/customerIds
#### 参数
    无

#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [//依据角色id找出的客户id集合
            30943,
            31010,
            31012
        ]
    }

### QX-100. 微信code解析
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/wx/code2session
#### 参数
    *code   // 微信授权code
#### 响应    
    {
        "code": 100000,
        "msg": "",
        "data": {
            "openId": "***",            // 绑定employee使用
            "accessToken": "***",   // 获取userinfo使用
            "refreshToken": "***"   // 刷新过期accessToken使用
        }
    }
    
### QX-101. 微信refreshToken
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/wx/refreshToken
#### 参数
    *refreshToken   // code2session获得
#### 响应    
    {
        "code": 100000,
        "msg": "",
        "data": {
            "openId": "***",            // 绑定employee使用
            "accessToken": "***",   // 获取userinfo使用
            "refreshToken": "***"   // 刷新过期accessToken使用
        }
    }
    
    
### QX-102. 微信扫码登录
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/wx/login
#### 参数
    *code   // 微信授权码
#### 响应    
    {
        "code": 100000,
        "msg": "",
        "data": {
            "hasBind": true,            // false 未绑定，跳转到输入工号&密码页    true 已绑定 
            "loginInfo": {
                "token": "***",         // token
                "rid": [                 // 数据权限
                    {
                        "rid": 1,
                        "rname": "***"
                    }
                ],
                "gid": [                // 功能权限
                    {
                        "gid": 42,
                        "gname": "***"
                    }
                ],
                "userinfo": {          // 登录用户信息
                    "id": 1,               // employeeId
                    "workno": "***",    // 工号
                    "fullname": "***",  // 全名
                    "mobile": "***",    // 手机号
                    "wxNickName": "***",    // 微信昵称
                    "wxHeadUrl": "***"          // 微信头像
                }
            }
        }
    }
   
   
### QX-103. 微信绑定登录
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/wx/bindLogin
#### 参数
    *openId   // code2session获得
    *accessToken    // code2session获得
    *loginName      // 登录名（工号）
    *password       // 密码
#### 响应     
    {
        "code": 100000,
        "msg": "",
        "data": {
            "token": "***",        // token
            "rid": [                 // 数据权限
                {
                    "rid": 1,
                    "rname": "***"
                }
            ],
            "gid": [                // 功能权限
                {
                    "gid": 42,
                    "gname": "***"
                }
            ],
            "userinfo": {          // 登录用户信息
                "id": 1,                // employeeId
                "workno": "***",   // 工号
                "fullname": "***", // 全名
                "mobile": "***",   // 手机号
                "wxNickName": "***",   // 微信昵称
                "wxHeadUrl": "***"         // 微信头像
            }
        }
    }
    

### QX-104. 微信解绑
#### 模块负责人
    尹洪明
#### 请求
    DELETE /v2/wx/unbinding/{workno}
#### 参数
    *workno   // 工号
#### 响应     
    {
        "code": 100000,
        "msg": "",
        "data": null
    }


### QX-150. 权限切换
#### 模块负责人
    尹洪明
#### 请求
    GET /v2/auth/switchToken
#### 参数
    *token
    *rid    // 数据权限ID
    *gid    // 功能权限ID
#### 响应    
    {
        "code": 100000,
        "msg": "",
        "data": "***"   // 切换权限后的token
    }
    
### QX-151. 用户菜单权限获取
#### 模块负责人
    尹洪明
#### 请求
    GET     /v2/auth/getAllMenu
#### 参数
    *token  // token
    *source //  系统类型 a A网 sta 统计
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": [
            {
                "action": "",       // 二级路由
                "createTime": "",
                "ctrl": "user",     // 一级路由
                "id": 143,
                "level": 1,         // 菜单等级
                "name": "账号管理", // 菜单名称
                "params": "",
                "parentId": 0,      // 上级菜单
                "sort": 0,          
                "status": "",
                "sys": "a",
                "icon":"abcde"      // 图标
            }
        ]
    }
    
    
### QX-152. 登录用户信息获取
#### 模块负责人
    尹洪明
#### 请求
    GET     /v2/auth/userInfo
#### 参数
    *token // token 
    *source // 系统类型 a A网 sta 统计
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "workno": "0101",               // 工号
            "mobile": "13478445016",    // 手机
            "id": 101,                          // 用户id
            "fullname": "樊嘉辉"           // 用户名
        }
    }
    
### QX-153. 角色权限列表获取(SS\SR)
#### 模块负责人
    尹洪明
#### 请求
    GET     /v2/datapower/roles
#### 参数
    *type    // 角色类型   可取值 ss  或  sr
#### 响应
    {
        "code":100000,
        "msg":"",
        "data":[
            {
                "gid":24,                   // gid
                "rid":40,                   // rid
                "roleName":"高成举-SRM-T"   // 角色名称
            }
        ]
    }   
    
    
### QX-154. 登录走个小后门
#### 模块负责人
    尹洪明
#### 请求
    GET     /v2/auth/backdoor/login
#### 参数
    *loginName      // 登录名
    *password       // 密码
    *code           // 后门钥匙
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": {
            "gid": [                // 功能权限
                {
                    "gid": 11,
                    "gname": "系统管理员"
                }
            ],
            "rid": [                // 数据权限
                {
                    "rid": 1,
                    "rname": "管理员"
                }
            ],
            "token": "95261ce28b7cf1f10e7a4ddfb2158e1a",        // 假token
            "userinfo": {
                "fullname": "孙启萌",          // 用户名
                "id": 518,                  // 用户ID
                "mobile": "13212216966",        // 用户手机号
                "workno": "0299"            // 工号
            }
        }
    }         