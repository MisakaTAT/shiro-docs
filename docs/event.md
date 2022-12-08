# 事件

::: tip 提示
注解事件可以根据需要填写方法入参或注解参数，详见 [注解事件](/#注解事件)

重写事件需要继承 `BotPlugin` 类，并且在项目配置文件定义插件列表，详见 [重写事件](/#重写事件)
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
public void example(@NotNull Bot bot, @NotNull AnyMessageEvent event, @NotNull Matcher matcher){
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
@PrivateMessageHandler
public void example(@NotNull Bot bot, @NotNull PrivateMessageEvent event, @NotNull Matcher matcher){
    // do something···
}
```

## 收到群聊消息
### 重写
```java
public int onGroupMessage(@NotNull Bot bot, @NotNull GroupMessageEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```
### 注解
```java
@GroupMessageHandler
public void example(@NotNull Bot bot, @NotNull GroupMessageEvent event, @NotNull Matcher matcher){
    // do something···
}
```

## 收到频道消息
### 重写
```java
public int onGuildMessage(@NotNull Bot bot, @NotNull GuildMessageEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```
### 注解
```java
@GuildMessageHandler
public void example(@NotNull Bot bot, @NotNull GuildMessageEvent event, @NotNull Matcher matcher){
    // do something···
}
```

## 群文件上传事件
### 重写
```java
public int onGroupUploadNotice(@NotNull Bot bot, @NotNull GroupUploadNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```

## 管理员变动
### 重写
```java
public int onGroupAdminNotice(@NotNull Bot bot, @NotNull GroupAdminNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```
### 注解
```java
@GroupAdminHandler
public void example(@NotNull Bot bot, @NotNull GroupAdminNoticeEvent event, @NotNull Matcher matcher){
    // do something···
}
```

## 退群事件
### 重写
```java
public int onGroupDecreaseNotice(@NotNull Bot bot, @NotNull GroupDecreaseNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```
### 注解
```java
@GroupDecreaseHandler
public void example(@NotNull Bot bot, @NotNull GroupDecreaseNoticeEvent event, @NotNull Matcher matcher){
    // do something···
}
```

## 群成员增加事件
### 重写
```java
public int onGroupIncreaseNotice(@NotNull Bot bot, @NotNull GroupIncreaseNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```
### 注解
```java
@GroupIncreaseHandler
public void example(@NotNull Bot bot, @NotNull GroupIncreaseNoticeEvent event, @NotNull Matcher matcher){
    // do something···
}
```

## 群禁言事件
### 重写
```java
public int onGroupBanNotice(@NotNull Bot bot, @NotNull GroupBanNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```

## 好友添加事件
### 重写
```java
public int onFriendAddNotice(@NotNull Bot bot, @NotNull FriendAddNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```
### 注解
```java
@FriendAddNoticeHandler
public void example(@NotNull Bot bot, @NotNull FriendAddNoticeEvent event, @NotNull Matcher matcher){
    // do something···
}
```

## 群消息撤回事件
### 重写
```java
public int onGroupMsgDeleteNotice(@NotNull Bot bot, @NotNull GroupMsgDeleteNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```
### 注解
```java
@GroupMsgDeleteNoticeHandler
public void example(@NotNull Bot bot, @NotNull GroupMsgDeleteNoticeEvent event, @NotNull Matcher matcher){
    // do something···
}
```

## 私聊消息撤回事件
### 重写
```java
public int onPrivateMsgDeleteNotice(@NotNull Bot bot, @NotNull PrivateMsgDeleteNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```
### 注解
```java
@PrivateMsgDeleteNoticeHandler
public void example(@NotNull Bot bot, @NotNull PrivateMsgDeleteNoticeEvent event, @NotNull Matcher matcher){
    // do something···
}
```

## 群戳一戳事件
### 重写
```java
public int onGroupPokeNotice(@NotNull Bot bot, @NotNull PokeNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```

## 私聊戳一戳事件
### 重写
```java
public int onPrivatePokeNotice(@NotNull Bot bot, @NotNull PokeNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```

## 群红包运气王事件
### 重写
```java
public int onGroupLuckyKingNotice(@NotNull Bot bot, @NotNull GroupLuckyKingNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```

## 群荣誉变动事件
### 重写
```java
public int onGroupHonorChangeNotice(@NotNull Bot bot, @NotNull GroupHonorChangeNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```

## 群名片修改事件
### 重写
```java
public int onGroupCardChangeNotice(@NotNull Bot bot, @NotNull GroupCardChangeNotice event) {
    // do something···
    return MESSAGE_IGNORE;
}
```

## 收到离线文件
### 重写
```java
public int onReceiveOfflineFilesNotice(@NotNull Bot bot, @NotNull ReceiveOfflineFilesNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```

## 好友添加请求
### 重写
```java
public int onFriendAddRequest(@NotNull Bot bot, @NotNull FriendAddRequestEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```

## 加群请求
### 重写
```java
public int onGroupAddRequest(@NotNull Bot bot, @NotNull GroupAddRequestEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```

## 子频道创建
### 重写
```java
public int onChannelCreatedNotice(@NotNull Bot bot, @NotNull ChannelCreatedNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```

## 子频道删除
### 重写
```java
public int onChannelDestroyedNotice(@NotNull Bot bot, @NotNull ChannelDestroyedNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```

## 子频道信息更新
### 重写
```java
public int onChannelUpdatedNotice(@NotNull Bot bot, @NotNull ChannelUpdatedNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```

## 频道消息表情贴更新
### 重写
```java
public int onMessageReactionsUpdatedNotice(@NotNull Bot bot, @NotNull MessageReactionsUpdatedNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```
