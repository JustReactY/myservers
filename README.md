## 服务器
1. 购买服务器
2. ssh链接远程服务器

## 安装mongo
[brew安装mongo](https://developer.aliyun.com/article/760052)

**修改配置文件开启强制校验**
> open /usr/local/etc

mongod.conf 文件增加
```
#配置文件开启强制验证
 security:
   authorization: "enabled"
```

**设置超级管理员**

```
mongo
use admin  
db.createUser({
  user: 'admin',  // 用户名
  pwd: '123456',  // 密码
  roles:[{
    role: 'root',  // 角色
    db: 'admin'  // 数据库
  }]
})
```

**登录数据库**
```
mongo
use admin
db.auth('admin', '123456')
```

**常用命令**
```
show users  // 查看当前库下的用户

db.dropUser('testadmin')  // 删除用户

db.updateUser('admin', {pwd: '654321'})  // 修改用户密码

db.auth('admin', '654321')  // 密码认证
```


**参考文档**

[koa-body](http://www.ptbird.cn/koa-body.html)


