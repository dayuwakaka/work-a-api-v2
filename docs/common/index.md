## 基础服务接口

### JC-1.上传接口
#### 对接负责人
    刘宏宇
#### 模块负责人
    刘宏宇
#### 请求
    POST /v2/common/upload
#### 参数
    用form-data方式上传多个文件
#### 返回
    {
        "code": 100000,
        "msg": "",
        "data": {
            "1": "http://asae.oss-cn-beijing.aliyuncs.com/20180910145054951-timg.jpg", //返回的上传文件 key 是上传时名称，value是oss上传后名称
            "2": "http://asae.oss-cn-beijing.aliyuncs.com/20180910145106937-timg.jpg"
        }
    }

### JC-2.地区接口
#### 对接负责人
    刘宏宇
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/common/area/all
#### 参数
    version: 1 // 目前客户端所持有的地区信息版本号
#### 返回
    {
        "code": 100000,
        "msg": "",
        "data": {
            "areas": [
                {
                    "adcode": "110000",
                    "amap": "116.405285,39.904989",
                    "areaName": "北京", // 地区名
                    "children": [ // 地区下级区域 一共分3级 省、市、县
                        {
                            "adcode": "110100",
                            "amap": "116.407395,39.904211",
                            "areaName": "北京市",
                            "children": [
                                {
                                    "adcode": "0",
                                    "amap": "115.974848,40.456951",
                                    "areaName": "延庆县",
                                    "children": null,
                                    "id": 394,
                                    "parentId": 36,
                                    "pathid": "010118",
                                    "pycode": "YQX",
                                    "zipcode": "102100"
                                }
                            ],
                            "id": 36,
                            "parentId": 2,
                            "pathid": "0101",
                            "pycode": "BJS",
                            "zipcode": "0"
                        }
                    ],
                    "id": 0, // 地区ID
                    "parentId": 0, // 地区父ID
                    "pathid": "01", // 地区Pathid
                    "pycode": "BJ",
                    "zipcode": "0"
                }
                ...
            ],
            "version": 5 // 返回的版本号，需要客户端保存在缓存中
        }
    }

### JC-3
#### 对接负责人
    刘宏宇
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/common/download/token
#### 参数
    无
#### 响应
    {
        "code": 100000,
        "msg": "",
        "data": "1234" // 下载授权码 30秒有效
    }


### JC-4
#### 对接负责人
    刘宏宇
#### 模块负责人
    刘宏宇
#### 请求
    GET /v2/common/download
#### 参数
    *fileName:"" // 文件名
    readPath:"" // 定制路径 默认为空
#### 响应
    文件流

### 模版
#### 对接负责人
#### 模块负责人
#### 请求
#### 参数
#### 响应