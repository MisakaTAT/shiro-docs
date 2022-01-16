# 事件

## 示例插件

>编写 `application.yml` 配置文件

```yaml
server:
  port: 5000
# Shiro 配置
shiro:
  # 插件列表（顺序执行 如果前一个插件返回了 MESSAGE_BLOCK 将不会执行后续插件）
  # 注解方式无需在此定义插件
  plugin-list: 
    - com.mikuac.example.plugins.ExamplePlugin
```

>重写父类方法（需要在 application.yml 文件 plugin-list 定义插件）

```java
// 继承BotPlugin开始编写插件
@Component
public class ExamplePlugin extends BotPlugin {

    @Override
    public int onPrivateMessage(@NotNull Bot bot, @NotNull PrivateMessageEvent event) {
        String msg = event.getMessage();
        if ("hi".equals(msg)) {
          // 构建消息
          String sendMsg = MsgUtils.builder()
                  .face(66)
                  .text("Hello, this is shiro demo.")
                  .build();
          // 发送私聊消息
          bot.sendPrivateMsg(event.getUserId(), sendMsg, false);
        }
        // 返回 MESSAGE_IGNORE 插件向下执行，返回 MESSAGE_BLOCK 则不执行下一个插件
        return MESSAGE_IGNORE;
    }
  
    @Override
    public int onGroupMessage(@NotNull Bot bot, @NotNull GroupMessageEvent event) {
        String msg = event.getMessage();
        if ("hi".equals(msg)) {
          // 构建消息
          MsgUtils sendMsg = MsgUtils.builder()
                  .at(event.getUserId())
                  .face(66)
                  .text("Hello, this is shiro demo.");
          // 发送群消息
          bot.sendGroupMsg(event.getGroupId(), sendMsg.build(), false);
        }
        // 返回 MESSAGE_IGNORE 插件向下执行，返回 MESSAGE_BLOCK 则不执行下一个插件
        return MESSAGE_IGNORE;
    }

}
```
## 已实现的事件

### 全部消息监听
```java
/**
  * 全部消息监听 （群聊与私聊）
  *
  * @param bot   {@link Bot}
  * @param event {@link WholeMessageEvent}
  * @return 是否执行下一个插件，MESSAGE_IGNORE 向下执行，MESSAGE_BLOCK 不向下执行
  */
public int onWholeMessage(@NotNull Bot bot, @NotNull WholeMessageEvent event) {
    return MESSAGE_IGNORE;
}
```

### 收到私聊消息
[事件数据](https://github.com/botuniverse/onebot-11/blob/master/event/message.md#私聊消息)
```java
/**
  * 收到私聊消息
  *
  * @param bot   {@link Bot}
  * @param event {@link PrivateMessageEvent}
  * @return 是否执行下一个插件，MESSAGE_IGNORE 向下执行，MESSAGE_BLOCK 不向下执行
  */
public int onPrivateMessage(@NotNull Bot bot, @NotNull PrivateMessageEvent event) {
    return MESSAGE_IGNORE;
}
```    

### 收到群聊消息
[事件数据](https://github.com/botuniverse/onebot-11/blob/master/event/message.md#群消息)
```java
/**
  * 收到群聊消息
  *
  * @param bot   {@link Bot}
  * @param event {@link GroupMessageEvent}
  * @return 是否执行下一个插件，MESSAGE_IGNORE 向下执行，MESSAGE_BLOCK 不向下执行
  */
public int onGroupMessage(@NotNull Bot bot, @NotNull GroupMessageEvent event) {
    return MESSAGE_IGNORE;
}
```

### 群文件上传事件
[事件数据](https://github.com/botuniverse/onebot-11/blob/master/event/notice.md#群文件上传)
```java
/**
  * 群文件上传事件
  *
  * @param bot   {@link Bot}
  * @param event {@link GroupUploadNoticeEvent}
  * @return 是否执行下一个插件，MESSAGE_IGNORE 向下执行，MESSAGE_BLOCK 不向下执行
  */
public int onGroupUploadNotice(@NotNull Bot bot, @NotNull GroupUploadNoticeEvent event) {
    return MESSAGE_IGNORE;
}
```

### 管理员变动
[事件数据](https://github.com/botuniverse/onebot-11/blob/master/event/notice.md#群管理员变动)
```java
/**
  * 管理员变动
  *
  * @param bot   {@link Bot}
  * @param event {@link GroupAdminNoticeEvent}
  * @return 是否执行下一个插件，MESSAGE_IGNORE 向下执行，MESSAGE_BLOCK 不向下执行
  */
public int onGroupAdminNotice(@NotNull Bot bot, @NotNull GroupAdminNoticeEvent event) {
    return MESSAGE_IGNORE;
}
```

### 退群事件
[事件数据](https://github.com/botuniverse/onebot-11/blob/master/event/notice.md#群成员减少)
```java
/**
  * 退群事件
  *
  * @param bot   {@link Bot}
  * @param event {@link GroupDecreaseNoticeEvent}
  * @return 是否执行下一个插件，MESSAGE_IGNORE 向下执行，MESSAGE_BLOCK 不向下执行
  */
public int onGroupDecreaseNotice(@NotNull Bot bot, @NotNull GroupDecreaseNoticeEvent event) {
    return MESSAGE_IGNORE;
}
```

### 群成员增加事件
[事件数据](https://github.com/botuniverse/onebot-11/blob/master/event/notice.md#群成员增加)
```java
/**
  * 群成员增加事件
  *
  * @param bot   {@link Bot}
  * @param event {@link GroupIncreaseNoticeEvent}
  * @return 是否执行下一个插件，MESSAGE_IGNORE 向下执行，MESSAGE_BLOCK 不向下执行
  */
public int onGroupIncreaseNotice(@NotNull Bot bot, @NotNull GroupIncreaseNoticeEvent event) {
    return MESSAGE_IGNORE;
}
```

### 群禁言事件
[事件数据](https://github.com/botuniverse/onebot-11/blob/master/event/notice.md#群禁言)
```java
/**
  * 群禁言事件
  *
  * @param bot   {@link Bot}
  * @param event {@link GroupBanNoticeEvent}
  * @return 是否执行下一个插件，MESSAGE_IGNORE 向下执行，MESSAGE_BLOCK 不向下执行
  */
public int onGroupBanNotice(@NotNull Bot bot, @NotNull GroupBanNoticeEvent event) {
    return MESSAGE_IGNORE;
}
```

### 好友添加事件
[事件数据](https://github.com/botuniverse/onebot-11/blob/master/event/notice.md#好友添加)
```java
/**
  * 好友添加事件
  *
  * @param bot   {@link Bot}
  * @param event {@link FriendAddNoticeEvent}
  * @return 是否执行下一个插件，MESSAGE_IGNORE 向下执行，MESSAGE_BLOCK 不向下执行
  */
public int onFriendAddNotice(@NotNull Bot bot, @NotNull FriendAddNoticeEvent event) {
    return MESSAGE_IGNORE;
}
```

### 群消息撤回事件
[事件数据](https://github.com/botuniverse/onebot-11/blob/master/event/notice.md#群消息撤回)
```java
/**
  * 群消息撤回事件
  *
  * @param bot   {@link Bot}
  * @param event {@link GroupMsgDeleteNoticeEvent}
  * @return 是否执行下一个插件，MESSAGE_IGNORE 向下执行，MESSAGE_BLOCK 不向下执行
  */
public int onGroupMsgDeleteNotice(@NotNull Bot bot, @NotNull GroupMsgDeleteNoticeEvent event) {
    return MESSAGE_IGNORE;
}
```

### 私聊消息撤回事件
[事件数据](https://github.com/botuniverse/onebot-11/blob/master/event/notice.md#好友消息撤回)
```java
/**
  * 私聊消息撤回事件
  *
  * @param bot   {@link Bot}
  * @param event {@link PrivateMsgDeleteNoticeEvent}
  * @return 是否执行下一个插件，MESSAGE_IGNORE 向下执行，MESSAGE_BLOCK 不向下执行
  */
public int onPrivateMsgDeleteNotice(@NotNull Bot bot, @NotNull PrivateMsgDeleteNoticeEvent event) {
    return MESSAGE_IGNORE;
}
```

### 群戳一戳事件
[事件数据](https://github.com/botuniverse/onebot-11/blob/master/event/notice.md#群内戳一戳)
```java
/**
  * 群戳一戳事件
  *
  * @param bot   {@link Bot}
  * @param event {@link PokeNoticeEvent}
  * @return 是否执行下一个插件，MESSAGE_IGNORE 向下执行，MESSAGE_BLOCK 不向下执行
  */
public int onGroupPokeNotice(@NotNull Bot bot, @NotNull PokeNoticeEvent event) {
    return MESSAGE_IGNORE;
}
```

### 私聊戳一戳事件
```java
/**
  * 私聊戳一戳事件
  *
  * @param bot   {@link Bot}
  * @param event {@link PokeNoticeEvent}
  * @return 是否执行下一个插件，MESSAGE_IGNORE 向下执行，MESSAGE_BLOCK 不向下执行
  */
public int onPrivatePokeNotice(@NotNull Bot bot, @NotNull PokeNoticeEvent event) {
    return MESSAGE_IGNORE;
}
```

### 群红包运气王事件
[事件数据](https://github.com/botuniverse/onebot-11/blob/master/event/notice.md#群红包运气王)
 ```java
/**
  * 群红包运气王事件
  *
  * @param bot   {@link Bot}
  * @param event {@link GroupLuckyKingNoticeEvent}
  * @return 是否执行下一个插件，MESSAGE_IGNORE 向下执行，MESSAGE_BLOCK 不向下执行
  */
public int onGroupLuckyKingNotice(@NotNull Bot bot, @NotNull GroupLuckyKingNoticeEvent event) {
    return MESSAGE_IGNORE;
}
```

### 群荣誉变动事件
[事件数据](https://github.com/botuniverse/onebot-11/blob/master/event/notice.md#群成员荣誉变更)
 ```java
/**
  * 群荣誉变动事件
  *
  * @param bot   {@link Bot}
  * @param event {@link GroupHonorChangeNoticeEvent}
  * @return 是否执行下一个插件，MESSAGE_IGNORE 向下执行，MESSAGE_BLOCK 不向下执行
  */
public int onGroupHonorChangeNotice(@NotNull Bot bot, @NotNull GroupHonorChangeNoticeEvent event) {
    return MESSAGE_IGNORE;
}
```

### 群名片修改事件
 ```java
/**
  * 群名片修改事件
  *
  * @param bot   {@link Bot}
  * @param event {@link GroupCardChangeNotice}
  * @return 是否执行下一个插件，MESSAGE_IGNORE 向下执行，MESSAGE_BLOCK 不向下执行
  */
public int onGroupCardChangeNotice(@NotNull Bot bot, @NotNull GroupCardChangeNotice event) {
    return MESSAGE_IGNORE;
}
```

### 收到离线文件
 ```java
/**
  * 收到离线文件
  *
  * @param bot   {@link Bot}
  * @param event {@link ReceiveOfflineFilesNoticeEvent}
  * @return 是否执行下一个插件，MESSAGE_IGNORE 向下执行，MESSAGE_BLOCK 不向下执行
  */
public int onReceiveOfflineFilesNotice(@NotNull Bot bot, @NotNull ReceiveOfflineFilesNoticeEvent event) {
    return MESSAGE_IGNORE;
}
```

### 好友添加请求
[事件数据](https://github.com/botuniverse/onebot-11/blob/master/event/request.md#加好友请求)
```java
/**
  * 好友添加请求
  *
  * @param bot   {@link Bot}
  * @param event {@link FriendAddRequestEvent}
  * @return 是否执行下一个插件，MESSAGE_IGNORE 向下执行，MESSAGE_BLOCK 不向下执行
  */
public int onFriendAddRequest(@NotNull Bot bot, @NotNull FriendAddRequestEvent event) {
    return MESSAGE_IGNORE;
}
```

### 加群请求
[事件数据](https://github.com/botuniverse/onebot-11/blob/master/event/request.md#加群请求邀请)
 ```java
/**
  * 加群请求
  *
  * @param bot   {@link Bot}
  * @param event {@link GroupAddRequestEvent}
  * @return 是否执行下一个插件，MESSAGE_IGNORE 向下执行，MESSAGE_BLOCK 不向下执行
  */
public int onGroupAddRequest(@NotNull Bot bot, @NotNull GroupAddRequestEvent event) {
    return MESSAGE_IGNORE;
}
```