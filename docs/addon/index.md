## 插件服务

### CJ-1.通过typeId和keyword获取Excel URL
#### 模块负责人
    梁铁骐
#### 请求
    GET /export{typeId}/{keyword}/url
#### 参数
    typeId： 类型id
    keyword：文件提取码
#### 返回
    {
        "code": 100000,
        "msg": "",
        "data": "http://asae-e.oss-cn-beijing.aliyuncs.com/20191008_CG201910080000002005599.xls" // Excel url
    }