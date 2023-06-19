# 事件

::: tip 提示
注解事件可以根据需要填写方法入参或注解参数，详见 [注解事件](/#注解事件)

重写事件需要继承 `BotPlugin` 类，并且在项目配置文件定义插件列表，详见 [重写事件](/#重写事件)
:::

## 收到群聊或私聊消息

```java
public int onAnyMessage(Bot bot, AnyMessageEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}

@AnyMessageHandler
public void example(Bot bot, AnyMessageEvent event, Matcher matcher){
    // do something···
}
```

## 收到私聊消息

```java
public int onPrivateMessage(Bot bot, PrivateMessageEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}

@PrivateMessageHandler
public void example(Bot bot, PrivateMessageEvent event, Matcher matcher){
    // do something···
}
```

## 收到群聊消息

```java
public int onGroupMessage(Bot bot, GroupMessageEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}

@GroupMessageHandler
public void example(Bot bot, GroupMessageEvent event, Matcher matcher){
    // do something···
}
```

## 收到频道消息

```java
public int onGuildMessage(Bot bot, GuildMessageEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}

@GuildMessageHandler
public void example(Bot bot, GuildMessageEvent event, Matcher matcher){
    // do something···
}
```

## 群文件上传事件

```java
public int onGroupUploadNotice(Bot bot, GroupUploadNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}

@GroupUploadNoticeHandler
public void example(Bot bot, GroupUploadNoticeEvent event){
    // do something···
}
```

## 管理员变动

```java
public int onGroupAdminNotice(Bot bot, GroupAdminNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}

@GroupAdminHandler
public void example(Bot bot, GroupAdminNoticeEvent event){
    // do something···
}
```

## 退群事件

```java
public int onGroupDecreaseNotice(Bot bot, GroupDecreaseNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}

@GroupDecreaseHandler
public void example(Bot bot, GroupDecreaseNoticeEvent event){
    // do something···
}
```

## 群成员增加事件

```java
public int onGroupIncreaseNotice(Bot bot, GroupIncreaseNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}

@GroupIncreaseHandler
public void example(Bot bot, GroupIncreaseNoticeEvent event){
    // do something···
}
```

## 群禁言事件

```java
public int onGroupBanNotice(Bot bot, GroupBanNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}

@GroupBanNoticeHandler
public void example(Bot bot, GroupBanNoticeEvent event){
    // do something···
}
```

## 好友添加事件

```java
public int onFriendAddNotice(Bot bot, FriendAddNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}

@FriendAddNoticeHandler
public void example(Bot bot, FriendAddNoticeEvent event){
    // do something···
}
```

## 群消息撤回事件

```java
public int onGroupMsgDeleteNotice(Bot bot, GroupMsgDeleteNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}

@GroupMsgDeleteNoticeHandler
public void example(Bot bot, GroupMsgDeleteNoticeEvent event){
    // do something···
}
```

## 私聊消息撤回事件

```java
public int onPrivateMsgDeleteNotice(Bot bot, PrivateMsgDeleteNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}

@PrivateMsgDeleteNoticeHandler
public void example(Bot bot, PrivateMsgDeleteNoticeEvent event){
    // do something···
}
```

## 群戳一戳事件

```java
public int onGroupPokeNotice(Bot bot, PokeNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}

@GroupPokeNoticeHandler
public void example(Bot bot, PokeNoticeEvent event){
    // do something···
}
```

## 私聊戳一戳事件

```java
public int onPrivatePokeNotice(Bot bot, PokeNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}

@PrivatePokeNoticeHandler
public void example(Bot bot, PokeNoticeEvent event){
    // do something···
}
```

## 群红包运气王事件

```java
public int onGroupLuckyKingNotice(Bot bot, GroupLuckyKingNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```

## 群荣誉变动事件

```java
public int onGroupHonorChangeNotice(Bot bot, GroupHonorChangeNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```

## 群名片修改事件

```java
public int onGroupCardChangeNotice(Bot bot, GroupCardChangeNotice event) {
    // do something···
    return MESSAGE_IGNORE;
}

@GroupCardChangeNoticeHandler
public void example(Bot bot, GroupCardChangeNotice event){
    // do something···
}
```

## 收到离线文件

```java
public int onReceiveOfflineFilesNotice(Bot bot, ReceiveOfflineFilesNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```

## 好友添加请求

```java
public int onFriendAddRequest(Bot bot, FriendAddRequestEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}

@FriendAddRequestHandler
public void example(Bot bot, FriendAddRequestEvent event){
    // do something···
}
```

## 加群请求

```java
public int onGroupAddRequest(Bot bot, GroupAddRequestEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}

@GroupAddRequestHandler
public void example(Bot bot, GroupAddRequestEvent event){
    // do something···
}
```

## 子频道创建

```java
public int onChannelCreatedNotice(Bot bot, ChannelCreatedNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```

## 子频道删除

```java
public int onChannelDestroyedNotice(Bot bot, ChannelDestroyedNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```

## 子频道信息更新

```java
public int onChannelUpdatedNotice(Bot bot, ChannelUpdatedNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```

## 频道消息表情贴更新

```java
public int onMessageReactionsUpdatedNotice(Bot bot, MessageReactionsUpdatedNoticeEvent event) {
    // do something···
    return MESSAGE_IGNORE;
}
```
