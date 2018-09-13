(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{163:function(a,n,e){"use strict";e.r(n);var t=e(0),r=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("div",{staticClass:"content"},[e("h3",{attrs:{id:"jc-1-上传接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jc-1-上传接口","aria-hidden":"true"}},[a._v("#")]),a._v(" JC-1.上传接口")]),a._v(" "),e("h4",{attrs:{id:"请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),e("pre",[e("code",[a._v("POST /v2/common/upload\n")])]),a._v(" "),e("h4",{attrs:{id:"参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),e("pre",[e("code",[a._v("用form-data方式上传多个文件\n")])]),a._v(" "),e("h4",{attrs:{id:"返回"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#返回","aria-hidden":"true"}},[a._v("#")]),a._v(" 返回")]),a._v(" "),e("pre",[e("code",[a._v('{\n    "code": 100000,\n    "msg": "",\n    "data": {\n        "1": "http://asae.oss-cn-beijing.aliyuncs.com/20180910145054951-timg.jpg", //返回的上传文件 key 是上传时名称，value是oss上传后名称\n        "2": "http://asae.oss-cn-beijing.aliyuncs.com/20180910145106937-timg.jpg"\n    }\n}\n')])]),a._v(" "),e("h3",{attrs:{id:"jc-2-地区接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jc-2-地区接口","aria-hidden":"true"}},[a._v("#")]),a._v(" JC-2.地区接口")]),a._v(" "),e("h4",{attrs:{id:"请求-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),e("pre",[e("code",[a._v("GET /v2/common/area/all\n")])]),a._v(" "),e("h4",{attrs:{id:"参数-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),e("pre",[e("code",[a._v("version: 1 // 目前客户端所持有的地区信息版本号\n")])]),a._v(" "),e("h4",{attrs:{id:"返回-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#返回-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 返回")]),a._v(" "),e("pre",[e("code",[a._v('{\n    "code": 100000,\n    "msg": "",\n    "data": {\n        "areas": [\n            {\n                "adcode": "110000",\n                "amap": "116.405285,39.904989",\n                "areaName": "北京", // 地区名\n                "children": [ // 地区下级区域 一共分3级 省、市、县\n                    {\n                        "adcode": "110100",\n                        "amap": "116.407395,39.904211",\n                        "areaName": "北京市",\n                        "children": [\n                            {\n                                "adcode": "0",\n                                "amap": "115.974848,40.456951",\n                                "areaName": "延庆县",\n                                "children": null,\n                                "id": 394,\n                                "parentId": 36,\n                                "pathid": "010118",\n                                "pycode": "YQX",\n                                "zipcode": "102100"\n                            }\n                        ],\n                        "id": 36,\n                        "parentId": 2,\n                        "pathid": "0101",\n                        "pycode": "BJS",\n                        "zipcode": "0"\n                    }\n                ],\n                "id": 0, // 地区ID\n                "parentId": 0, // 地区父ID\n                "pathid": "01", // 地区Pathid\n                "pycode": "BJ",\n                "zipcode": "0"\n            }\n            ...\n        ],\n        "version": 5 // 返回的版本号，需要客户端保存在缓存中\n    }\n}')])])])}],!1,null,null,null);r.options.__file="index.md";n.default=r.exports}}]);