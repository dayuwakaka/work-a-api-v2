### 1.上传接口
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