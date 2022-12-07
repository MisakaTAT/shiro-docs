# 事件

::: danger 警告
文档施工中···
:::

## 收到群聊或私聊消息
### 重写
```java
public int onAnyMessage(@NotNull Bot bot, @NotNull AnyMessageEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```
### 注解
```java
@MessageHandler
public void test(@NotNull Bot bot, @NotNull AnyMessageEvent event, @NotNull Matcher matcher){
    // do something···
}
```

## 收到私聊消息
### 重写
```java
public int onPrivateMessage(@NotNull Bot bot, @NotNull PrivateMessageEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```
### 注解
```java
@GroupMessageHandler
public void test(@NotNull Bot bot, @NotNull PrivateMessageEvent event, @NotNull Matcher matcher){
    // do something···
}
```

## 收到群聊消息
## 收到频道消息
## 群文件上传事件
## 管理员变动
## 退群事件
## 群成员增加事件
## 群禁言事件
## 好友添加事件
## 群消息撤回事件
## 私聊消息撤回事件
## 群戳一戳事件
## 私聊戳一戳事件
## 群红包运气王事件
## 群荣誉变动事件
## 群名片修改事件
## 收到离线文件
## 好友添加请求
## 加群请求
## 子频道创建
## 子频道删除
## 子频道信息更新
## 频道消息表情贴更新