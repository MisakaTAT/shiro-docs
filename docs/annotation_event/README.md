# 事件

## 示例插件

>编写 `application.yml` 配置文件

```yaml
server:
  port: 5000
shiro:
  # 反向 Websocket 连接地址，无需该配置字段可删除，将使用默认值 "/ws/shiro"
  # ws-url: "/ws/shiro"
```

::: warning 注意
`@Shiro` 注解仅在 `v1.2.7` 及以上版本被支持，`v1.2.7` 以下版本版本请继承 `BotPlugin`
:::

```java
@Shiro
@Component
public class DemoPlugin {

    // 符合 cmd 正则表达式的消息会被响应
    @PrivateMessageHandler(cmd = "hi")
    public void fun1(@NotNull Bot bot, @NotNull PrivateMessageEvent event, @NotNull Matcher matcher) {
        // 构建消息
        MsgUtils msgUtils = MsgUtils.builder().face(66).text("Hello, this is shiro demo.");
        // 发送私聊消息
        bot.sendPrivateMsg(event.getUserId(), msgUtils.build(), false);
    }

    // 如果 at 参数设定为 AtEnum.NEED 则只有 at 了机器人的消息会被响应
    @GroupMessageHandler(at = AtEnum.NEED)
    public void fun2(@NotNull GroupMessageEvent event) {
        // 以注解方式调用可以根据自己的需要来为方法设定参数
        // 例如群组消息可以传递 GroupMessageEvent event, Bot bot, Matcher matcher 多余的参数会被设定为 null
        System.out.println(event.getMessage());
    }

    // 同时监听群组及私聊消息 并根据消息类型（私聊，群聊）回复
    @MessageHandler
    public void fun3(@NotNull Bot bot, @NotNull WholeMessageEvent event) {
        bot.sendMsg(event, "hello", false);
    }

}
```

## 已实现的注解

### 全部消息监听
```java
@MessageHandler
public void fun(Bot bot, WholeMessageEvent event, Matcher matcher) {}
```

```java
@Documented
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface MessageHandler {

    /**
     * 触发命令，支持正则
     *
     * @return 正则表达式
     */
    String cmd() default "none";

    /**
     * 检查是否被at
     * 如果值为 NEED 只处理带有at机器人的消息
     * 如果值为 NOT_NEED 若消息中at了机器人此条消息会被忽略
     *
     * @return at枚举
     */
    AtEnum at() default AtEnum.OFF;

}
```

### 收到私聊消息
```java
@PrivateMessageHandler
public void fun(Bot bot, PrivateMessageEvent event, Matcher matcher) {}
```

```java
@Documented
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface PrivateMessageHandler {

    /**
     * 触发命令，支持正则
     *
     * @return 正则表达式
     */
    String cmd() default "none";

}
```

### 收到群聊消息
```java
@GroupMessageHandler
public void fun(Bot bot, GroupMessageEvent event, Matcher matcher) {}
```

```java
@Documented
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface GroupMessageHandler {

    /**
     * 触发命令，支持正则
     *
     * @return 正则表达式
     */
    String cmd() default "none";

    /**
     * 检查是否被at
     * 如果值为 NEED 只处理带有at机器人的消息
     * 如果值为 NOT_NEED 若消息中at了机器人此条消息会被忽略
     *
     * @return at枚举
     */
    AtEnum at() default AtEnum.OFF;

}
```

### 群成员增加事件
```java
@GroupIncreaseHandler
public void fun(Bot bot, GroupIncreaseNoticeEvent event) {}
```

```java
@Documented
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface GroupIncreaseHandler {}
```

### 群成员减少事件
```java
@GroupDecreaseHandler
public void fun(Bot bot, GroupDecreaseNoticeEvent event) {}
```

```java
@Documented
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface GroupDecreaseHandler {}
```

### 管理员变动
```java
@GroupAdminHandler
public void fun(Bot bot, GroupAdminNoticeEvent event) {}
```

```java
@Documented
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface GroupAdminHandler {

    /**
     * 通知类型
     * 默认为 ALL 即设置管理员与取消管理员都会通知
     * 若值为 SET 仅通知设置管理员
     * 若值为 UNSET 仅通知取消管理员
     *
     * @return 通知类型
     */
    AdminNoticeTypeEnum type() default AdminNoticeTypeEnum.ALL;

}
```

### 好友添加事件
```java
@FriendAddHandler
public void fun(Bot bot, FriendAddNoticeHandler event) {}
```

```java
@Documented
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface FriendAddNoticeHandler {}
```

### 群消息撤回事件
```java
@GroupMsgDeleteNoticeHandler
public void fun(Bot bot, GroupMsgDeleteNoticeEvent event) {}
```

```java
@Documented
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface GroupMsgDeleteNoticeHandler {}
```

### 私聊消息撤回事件
```java
@PrivateMsgDeleteNoticeHandler
public void fun(Bot bot, PrivateMsgDeleteNoticeEvent event) {}
```

```java
@Documented
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface PrivateMsgDeleteNoticeHandler {}
```