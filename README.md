# openlab-2

## 0、配置环境

### 安装依赖

```
npm install
```

### 以开发模式运行（支持热重载）
```
npm run serve
```

### 编译网页
```
npm run build
```

## 1、功能介绍

### 首页（排行榜页）

未登录用户无法查看首页的排行榜

用户登录后可查看首页排行榜

### 登录页

注册需要用户名、学号、密码三个参数

其中用户名和学号在后台都是唯一的，无法重复使用

无法在本页直接注册管理员账号

### 题目页

登录用户可以在这一页进行分数提交

（毕竟要是再做完完整的做题逻辑就变成小型OJ了...）

### 用户信息页

简单的查看当前登录用户的信息

### 管理页

该页面只有管理员可访问

该页面支持添加题目、删除题目和删除用户
