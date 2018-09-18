(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{171:function(a,t,r){"use strict";r.r(t);var e=r(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",{staticClass:"content"},[r("h2",{attrs:{id:"权限接口"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#权限接口","aria-hidden":"true"}},[a._v("#")]),a._v(" 权限接口")]),a._v(" "),r("h3",{attrs:{id:"qx-1-开户"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-1-开户","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-1. 开户")]),a._v(" "),r("h4",{attrs:{id:"请求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("POST    /v2/userpower\n")])]),a._v(" "),r("h4",{attrs:{id:"参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v('{\n\t"id":517,               // * 用户id\n\t"workno":"0517",        // * 工号\n\t"mobile":"18666664848" // * 手机号\n}\n')])]),a._v(" "),r("h4",{attrs:{id:"响应"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n\t"code": 100000,\n\t"msg": "",\n\t"data": null\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-2-锁定、解锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-2-锁定、解锁","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-2. 锁定、解锁")]),a._v(" "),r("h4",{attrs:{id:"请求-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("PUT     /v2/userpower/{id}\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v('id // * 用户id\n{\n    "status": "lock" // * lock 锁定 normal 解锁\n}\n')])]),a._v(" "),r("h4",{attrs:{id:"响应-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n\t"code": 100000,\n\t"msg": "",\n\t"data": null\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-3-用户权限列表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-3-用户权限列表","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-3. 用户权限列表")]),a._v(" "),r("h4",{attrs:{id:"请求-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("GET     /v2/userpower\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v("keyword // 用户名/手机号\nstatus // 状态\nbuttonPermissionFlg // 0 不查询按钮权限 1 查询\npageNo  // 页码\npageSize // 页条数\n")])]),a._v(" "),r("h4",{attrs:{id:"响应-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n    "code": 100000,\n    "msg": "",\n    "data": {\n        "buttonPermissions": [\n            {\n                "bindDataPower": true,  // 绑定数据权限\n                "lockButton": true, // 锁定\n                "unlockButton": false,  // 解锁\n                "newAccountButton": false,  开户\n                "reset": true,  // 重置密码\n                "bindMenuPower": true   绑定功能权限\n            }\n        ],\n        "dataSums": null,\n        "datas": [\n            {\n                "authDataPowers": [\n                    {\n                        "gid": 0,\n                        "gname": "",    \n                        "rid": 1,   // 数据权限编号\n                        "rname": "",    // 数据权限名称\n                        "uid": 101\n                    }\n                ],\n                "authMenuPowers": [\n                    {\n                        "createTime": "",\n                        "gid": 11,  // 功能权限编号\n                        "id": 1,\n                        "isAuto": 0,\n                        "menuIds": null,\n                        "name": "系统管理员",   // 功能权限名称\n                        "remark": "",\n                        "status": "",\n                        "sys": "a",\n                        "uid": 101\n                    }\n                ],\n                "fullname": "樊嘉辉",   // 用户名\n                "id": 101,  // 用户ID\n                "isOpen": "1",  \n                "mobile": "13478445016",    // 手机号\n                "status": "normal", // 状态\n                "workno": "0101"    // 工号\n            }\n        ],\n        "pageNo": 1,\n        "total": 1\n    }\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-4-重置密码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-4-重置密码","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-4. 重置密码")]),a._v(" "),r("h4",{attrs:{id:"请求-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-4","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("PUT     /v2/userpower/reset/{id}\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-4","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v("id // * 用户id\n")])]),a._v(" "),r("h4",{attrs:{id:"响应-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-4","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n\t"code": 100000,\n\t"msg": "",\n\t"data": null\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-5-用户分配功能权限"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-5-用户分配功能权限","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-5. 用户分配功能权限")]),a._v(" "),r("h4",{attrs:{id:"请求-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-5","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("POST    /v2/userpower/menupower\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-5","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v('{\n    "uid":101,  // * 用户id\n    "gid":82    // * 功能权限id\n}\n')])]),a._v(" "),r("h4",{attrs:{id:"响应-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-5","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n\t"code": 100000,\n\t"msg": "",\n\t"data": null\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-6-用户取消分配功能权限"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-6-用户取消分配功能权限","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-6. 用户取消分配功能权限")]),a._v(" "),r("h4",{attrs:{id:"请求-6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-6","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("PUT     /v2/userpower/menupower/{id}\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-6","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v('id // * 用户id\n{\n    "gid":82    // * 功能权限id\n}\n')])]),a._v(" "),r("h4",{attrs:{id:"响应-6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-6","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n\t"code": 100000,\n\t"msg": "",\n\t"data": null\n} \n')])]),a._v(" "),r("h3",{attrs:{id:"qx-7-用户分配数据权限"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-7-用户分配数据权限","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-7. 用户分配数据权限")]),a._v(" "),r("h4",{attrs:{id:"请求-7"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-7","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("POST    /v2/userpower/datapower\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-7"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-7","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v('{\n    "uid":101, // * 用户id\n    "rid":82    // * 数据权限id\n}\n')])]),a._v(" "),r("h4",{attrs:{id:"响应-7"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-7","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n\t"code": 100000,\n\t"msg": "",\n\t"data": null\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-8-用户取消分配数据权限"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-8-用户取消分配数据权限","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-8. 用户取消分配数据权限")]),a._v(" "),r("h4",{attrs:{id:"请求-8"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-8","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("PUT     /v2/userpower/datapower/{id}\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-8"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-8","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v('id // * 用户id\n{\n    "rid":82    // * 数据权限id\n}\n')])]),a._v(" "),r("h4",{attrs:{id:"响应-8"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-8","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n\t"code": 100000,\n\t"msg": "",\n\t"data": null\n}    \n')])]),a._v(" "),r("h3",{attrs:{id:"qx-9-功能权限新增"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-9-功能权限新增","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-9. 功能权限新增")]),a._v(" "),r("h4",{attrs:{id:"请求-9"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-9","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("POST /v2/menupower\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-9"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-9","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v('{\n\t"name":"测试权限",  // * 权限名称\n\t"isAuto":1,         // * 0 非自动生成编号 1 自动生成编号\n\t"gid": 250,         // 权限编号，isAuto=0时，必选\n\t"remark":"备注",    // 备注\n\t"menuIds":[3,5,11]  // 菜单id列表\n}\n')])]),a._v(" "),r("h4",{attrs:{id:"响应-9"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-9","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n\t"code": 100000,\n\t"msg": "",\n\t"data": null\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-10-功能权限修改"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-10-功能权限修改","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-10. 功能权限修改")]),a._v(" "),r("h4",{attrs:{id:"请求-10"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-10","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("PUT /v2/menupower/{id}\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-10"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-10","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v('id // * 权限id\n{\n\t"name":"测试权限",  //  权限名称\n\t"remark":"备注",    // 备注\n\t"gid": 250,         // * 权限编号\n\t"menuIds":[3,5,11]  // 菜单id列表\n}\n')])]),a._v(" "),r("h4",{attrs:{id:"响应-10"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-10","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n\t"code": 100000,\n\t"msg": "",\n\t"data": null\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-11-功能权限的锁定、解锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-11-功能权限的锁定、解锁","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-11. 功能权限的锁定、解锁")]),a._v(" "),r("h4",{attrs:{id:"请求-11"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-11","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("PUT /v2/menupower/status/{id}\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-11"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-11","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v('id  // * 权限id\n{\n    "status":"lock" // * lock 锁定 normal 解锁\n}\n')])]),a._v(" "),r("h4",{attrs:{id:"响应-11"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-11","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n\t"code": 100000,\n\t"msg": "",\n\t"data": null\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-12-功能权限列表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-12-功能权限列表","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-12. 功能权限列表")]),a._v(" "),r("h4",{attrs:{id:"请求-12"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-12","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("GET /v2/menupower\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-12"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-12","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v("keyword // 权限编号/权限名称\nstatus  // 状态 lock 锁定 normal 解锁\nuid // 用户id，结合asigned使用\nasigned // yes 已绑定用户的列表 no 未绑定用户列表\nbuttonPermissionFlg // 0 不查询按钮权限 1 查询\npageNo  // 页码\npageSize    // 页条数\n")])]),a._v(" "),r("h4",{attrs:{id:"响应-12"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-12","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n    "code": 100000,\n    "msg": "",\n    "data": {\n        "buttonPermissions": [\n            {\n                "lockButton": false,    // 锁定\n                "unlockButton": true,   // 解锁\n                "editButton": true,     // 编辑\n            }\n        ],\n        "dataSums": null,\n        "datas": [\n            {\n                "createTime": "",\n                "gid": 1112,    // 权限编号\n                "id": 37,   // 权限id\n                "isAuto": 0,\n                "menuIds": null,\n                "name": "测试权限新增0",    // 权限名称\n                "remark": "",\n                "status": "lock",   // lock 锁定 normal 正常\n                "sys": "a",\n                "uid": 0\n            }\n        ],\n        "pageNo": 1,\n        "total": 1\n    }\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-13-功能权限详情"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-13-功能权限详情","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-13. 功能权限详情")]),a._v(" "),r("h4",{attrs:{id:"请求-13"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-13","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("GET /v2/menupower/detail\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-13"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-13","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v("id  // * 权限id\n")])]),a._v(" "),r("h4",{attrs:{id:"响应-13"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-13","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n    "code": 100000,\n    "msg": "",\n    "data": {\n        "createTime": "",\n        "gid": 42,  // 功能权限编号\n        "id": 18,\n        "isAuto": 0,\n        "menuIds": [    // 已绑定菜单列表\n            37,\n            55,\n            60\n        ],\n        "name": "客服", // 功能权限名称\n        "remark": "",   // 备注\n        "status": "normal",\n        "sys": "a",\n        "uid": 0\n    }\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-14-数据权限新增"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-14-数据权限新增","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-14. 数据权限新增")]),a._v(" "),r("h4",{attrs:{id:"请求-14"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-14","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("POST /v2/datapower\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-14"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-14","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v('{\n    "name":"陆贞逸",  // * 数据权限名称\n    "gid":42    // * 功能权限编号\n}\n')])]),a._v(" "),r("h4",{attrs:{id:"响应-14"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-14","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n\t"code": 100000,\n\t"msg": "",\n\t"data": null\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-15-数据权限修改"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-15-数据权限修改","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-15. 数据权限修改")]),a._v(" "),r("h4",{attrs:{id:"请求-15"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-15","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("PUT /v2/datapower/{id}\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-15"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-15","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v('id // * 数据权限id\n{\n    "name":"陆贞逸",    // 数据权限名称\n    "gid":42    // 功能权限编号\n}\n')])]),a._v(" "),r("h4",{attrs:{id:"响应-15"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-15","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n\t"code": 100000,\n\t"msg": "",\n\t"data": null\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-16-数据权限删除"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-16-数据权限删除","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-16. 数据权限删除")]),a._v(" "),r("h4",{attrs:{id:"请求-16"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-16","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("DELETE  /v2/datapower/{id}\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-16"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-16","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v("id // * 数据权限id\n")])]),a._v(" "),r("h4",{attrs:{id:"响应-16"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-16","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n\t"code": 100000,\n\t"msg": "",\n\t"data": null\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-17-数据权限列表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-17-数据权限列表","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-17. 数据权限列表")]),a._v(" "),r("h4",{attrs:{id:"请求-17"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-17","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("GET /v2/datapower\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-17"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-17","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v("keyword // 权限编号/权限名称\nuid     // 用户id，结合asigned使用\nasigned // yes 用户已分配的权限列表 no 用户未分配的权限列表\npageNo  // 页码\npageSize    // 页条数\n")])]),a._v(" "),r("h4",{attrs:{id:"响应-17"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-17","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n    "code": 100000,\n    "msg": "",\n    "data": {\n        "buttonPermissions": null,\n        "dataSums": null,\n        "datas": [\n            {\n                "gid": 32,              // 功能权限编号\n                "gname": "销售会计",    // 功能权限名称\n                "rid": 29001,           // 数据权限编号\n                "rname": "张晓丹",      // 数据权限名称\n                "uid": 0\n            }\n        ],\n        "pageNo": 1,\n        "total": 1\n    }\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-18-数据权限详情"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-18-数据权限详情","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-18. 数据权限详情")]),a._v(" "),r("h4",{attrs:{id:"请求-18"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-18","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("GET /v2/datapower/detail\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-18"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-18","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v("rid // * 数据权限编号\n")])]),a._v(" "),r("h4",{attrs:{id:"响应-18"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-18","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n    "code": 100000,\n    "msg": "",\n    "data": {\n        "gid": 32,              // 功能权限编号\n        "gname": "销售会计",    // 功能权限名称\n        "rid": 29001,           // 数据权限编号\n        "rname": "张晓丹",      // 数据权限名称\n        "uid": 0\n    }\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-19-菜单新增"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-19-菜单新增","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-19. 菜单新增")]),a._v(" "),r("h4",{attrs:{id:"请求-19"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-19","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("POST    /v2/menu\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-19"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-19","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v('{\n    "name":"商品统计",  // * 菜单名称\n    "level":1,          // * 菜单等级\n    "ctrl":"product",   // * 一级路由\n    "action":"store",   // 二级路由，level=2时，必选\n    "parentId":0,       // 上级菜单id,level=2时，必选\n    "icon":"aware-syn"  // 一级菜单图标，level=1时，必选\n}\n')])]),a._v(" "),r("h4",{attrs:{id:"响应-19"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-19","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n\t"code": 100000,\n\t"msg": "",\n\t"data": null\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-20-菜单修改"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-20-菜单修改","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-20. 菜单修改")]),a._v(" "),r("h4",{attrs:{id:"请求-20"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-20","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("PUT     /v2/menu/{id}\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-20"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-20","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v('id  // * 菜单id\n{\n    "name":"商品统计",  // * 菜单名称\n    "level":1,          // * 菜单等级\n    "ctrl":"product",   // * 一级路由\n    "action":"store",   // 二级路由，level=2时，必选\n    "parentId":0,       // 上级菜单id,level=2时，必选\n    "icon":"aware-syn" // 一级菜单图标，level=1时，必选\n}\n')])]),a._v(" "),r("h4",{attrs:{id:"响应-20"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-20","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n\t"code": 100000,\n\t"msg": "操作成功",\n\t"data": null\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-21-菜单显示、隐藏"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-21-菜单显示、隐藏","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-21. 菜单显示、隐藏")]),a._v(" "),r("h4",{attrs:{id:"请求-21"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-21","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("PUT     /v2/menu/status/{id}\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-21"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-21","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v('id  // * 菜单id\n{\n    "status":"hidden",  // * show 显示 hidden 隐藏\n}\n')])]),a._v(" "),r("h4",{attrs:{id:"响应-21"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-21","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n\t"code": 100000,\n\t"msg": "操作成功",\n\t"data": null\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-22-菜单排序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-22-菜单排序","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-22. 菜单排序")]),a._v(" "),r("h4",{attrs:{id:"请求-22"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-22","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("PUT     /v2/menu/sort/{id}\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-22"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-22","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v('id  // * 菜单id\n{\n    "sort":2,  // * 顺序\n}\n')])]),a._v(" "),r("h4",{attrs:{id:"响应-22"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-22","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n\t"code": 100000,\n\t"msg": "操作成功",\n\t"data": null\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-23-菜单删除"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-23-菜单删除","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-23. 菜单删除")]),a._v(" "),r("h4",{attrs:{id:"请求-23"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-23","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("DELETE     /v2/menu/{id}\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-23"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-23","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v("id  // * 菜单id\n")])]),a._v(" "),r("h4",{attrs:{id:"响应-23"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-23","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n\t"code": 100000,\n\t"msg": "操作成功",\n\t"data": null\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-24-菜单列表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-24-菜单列表","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-24. 菜单列表")]),a._v(" "),r("h4",{attrs:{id:"请求-24"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-24","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("GET     /v2/menu\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-24"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-24","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v("无\n")])]),a._v(" "),r("h4",{attrs:{id:"响应-24"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-24","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n    "code": 100000,\n    "msg": "",\n    "data": {\n        "buttonPermissions": [\n            {\n                "deleteButton": false,  // 删除\n                "editButton": true,     // 编辑\n            }\n        ],\n        "dataSums": null,\n        "datas": [\n            {\n                "action": "",               // 二级路由\n                "createTime": "",   \n                "ctrl": "depotmatchareas",  // 一级路由\n                "icon": "",         // 图标\n                "id": 140,          // 菜单id\n                "level": 1,         // 菜单等级\n                "name": "仓库管理", // 菜单名称\n                "params": "",\n                "parentId": 0,      // 上级菜单id\n                "sort": 0,          // 排序\n                "status": "show",   // show 显示 hidden 隐藏\n                "sys": ""\n            }\n            ......\n        ],\n        "pageNo": 1,\n        "total": 28\n    }\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-25-菜单详情"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-25-菜单详情","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-25. 菜单详情")]),a._v(" "),r("h4",{attrs:{id:"请求-25"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-25","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("GET     /v2/menu/detail\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-25"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-25","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v("id // * 菜单id\n")])]),a._v(" "),r("h4",{attrs:{id:"响应-25"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-25","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n    "code": 100000,\n    "msg": "",\n    "data": {\n        "action": "",           // 二级路由\n        "createTime": "",\n        "ctrl": "depotmatchareas",  // 一级路由\n        "icon": "",         // 菜单图标\n        "id": 140,          // 菜单id\n        "level": 1,         // 菜单等级\n        "name": "仓库管理", // 菜单名称\n        "params": "",\n        "parentId": 0,  // 上级菜单id\n        "sort": 0,\n        "status": "show",\n        "sys": ""\n    }\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-26-操作日志列表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-26-操作日志列表","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-26. 操作日志列表")]),a._v(" "),r("h4",{attrs:{id:"请求-26"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-26","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("GET     /v2/systemlog\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-26"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-26","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v("无\n")])]),a._v(" "),r("h4",{attrs:{id:"响应-26"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-26","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('操作类型说明：\n1 开户，2 用户锁定，3 用户解锁，4 重置密码，\n5 用户分配功能权限，6 用户取消分配功能权限，7 用户分配数据权限，\n8 用户取消分配数据权限，9 功能权限绑定菜单，\n10 功能权限取消绑定菜单\n{\n    "code": 100000,\n    "msg": "",\n    "data": {\n        "dataSums": null,\n        "datas": [\n            {\n                "id": 0,\n                "type": "9",             // 操作类型  \n                "action": "功能权限绑定菜单",  \n                "uid": 0,                   \n                "uname": "",            // 被操作的用户\n                "gid": 111,             \n                "gname": "测试修改",    // 被操作的功能权限\n                "sys": "",\n                "menuId": 82,\n                "mname": "供应商用户列表",// 被操作菜单\n                "roleId": 0,\n                "rname": "",            // 被操作数据权限\n                "createRole": 1,\n                "createTime": "2018-08-22 14:28:55.0", // 操作时间\n                "createUser": 101,\n                "createUserName": "樊嘉辉", // 操作人\n            }\n            ......\n        ],\n        "pageNo": 1,\n        "total": 28\n    }\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-28-根据ss-sr类型获取角色权限列表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-28-根据ss-sr类型获取角色权限列表","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-28. 根据SS\\SR类型获取角色权限列表")]),a._v(" "),r("h4",{attrs:{id:"请求-27"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-27","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("GET     /v2/datapower/roles\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-27"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-27","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v("type    // * 角色类型   可取值 ss  或  sr\n")])]),a._v(" "),r("h4",{attrs:{id:"响应-27"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-27","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n    "code":100000,\n    "msg":"",\n    "data":[\n        {\n            "gid":24,\n            "rid":40,                   // 角色id\n            "roleName":"高成举-SRM-T"   // 角色名称\n        },\n        {\n            "gid":24,\n            "rid":479,\n            "roleName":"王振华"\n        },\n        {\n            "gid":24,\n            "rid":856,\n            "roleName":"SRM-W-冯松"\n        }\n    ]\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-29-用户登陆后获取菜单"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-29-用户登陆后获取菜单","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-29. 用户登陆后获取菜单")]),a._v(" "),r("h4",{attrs:{id:"请求-28"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-28","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("GET     /v2/auth/getAllMenu\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-28"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-28","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v("token // * \nsource // * 系统类型 a A网 sta 统计\n")])]),a._v(" "),r("h4",{attrs:{id:"_29-4-请求示例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_29-4-请求示例","aria-hidden":"true"}},[a._v("#")]),a._v(" 29.4 请求示例")]),a._v(" "),r("pre",[r("code",[a._v("无\n")])]),a._v(" "),r("h4",{attrs:{id:"响应-28"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-28","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n    "code": 100000,\n    "msg": "",\n    "data": [\n        {\n            "action": "",       // 二级路由\n            "createTime": "",\n            "ctrl": "user",     // 一级路由\n            "id": 143,\n            "level": 1,         // 菜单等级\n            "name": "账号管理", // 菜单名称\n            "params": "",\n            "parentId": 0,      // 上级菜单\n            "sort": 0,          \n            "status": "",\n            "sys": "a",\n            "icon":"abcde"      // 图标\n        }\n        ......\n    ]\n}\n')])]),a._v(" "),r("h3",{attrs:{id:"qx-30-获取登录用户信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qx-30-获取登录用户信息","aria-hidden":"true"}},[a._v("#")]),a._v(" QX-30. 获取登录用户信息")]),a._v(" "),r("h4",{attrs:{id:"请求-29"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-29","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),r("pre",[r("code",[a._v("GET     /v2/auth/userInfo\n")])]),a._v(" "),r("h4",{attrs:{id:"参数-29"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数-29","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),r("pre",[r("code",[a._v("token // * \nsource // * 系统类型 a A网 sta 统计\n")])]),a._v(" "),r("h4",{attrs:{id:"响应-29"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应-29","aria-hidden":"true"}},[a._v("#")]),a._v(" 响应")]),a._v(" "),r("pre",[r("code",[a._v('{\n    "code": 100000,\n    "msg": "",\n    "data": {\n        "workno": "0101",       // 工号\n        "mobile": "13478445016",    // 手机\n        "id": 101,              // 用户id\n        "fullname": "樊嘉辉"    // 用户名\n    }\n}')])])])}],!1,null,null,null);n.options.__file="index.md";t.default=n.exports}}]);