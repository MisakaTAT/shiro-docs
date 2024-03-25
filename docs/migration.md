# 迁移指南

## v1 ➡️ v2

### BotPlugin

> 移除 `BotPlugin` 中所有方法的 `@NotNull` 注解

```java
// v1
@Override
public int onAnyMessage(@NotNull Bot bot, @NotNull AnyMessageEvent event) {
    return MESSAGE_IGNORE;
}
```

```java
// v2
@Override
public int onAnyMessage(Bot bot, AnyMessageEvent event) {
    return MESSAGE_IGNORE;
}
```

### ArrayMsg

> 元素的类型由字符串变更为枚举

```java
// v1
event.getArrayMsg()
        .stream()
        .filter(it -> "image".equals(it.getType()))
        .forEach(it -> System.out.println(it.getData().get("url")));
```

```java
// v2
event.getArrayMsg()
        .stream()
        .filter(it -> MsgTypeEnum.image == it.getType())
        .forEach(it -> System.out.println(it.getData().get("url")));
```

### MessageHandler

> `@MessageHandler` 注解变更为 `@AnyMessageHandler`

```java
// v1
@MessageHandler
public void fun(Bot bot, AnyMessageEvent event) {}
```

```java
// v2
@AnyMessageHandler
public void fun(Bot bot, AnyMessageEvent event) {}
```

## v2.0.9 ➡️ v2.1.0

> `新增 @MessageHandlerFilter 注解`

```java
// v2.0.9
@AnyMessageHandler(cmd = "say hello")
public void fun(Bot bot, AnyMessageEvent event) {}
```

```java
// v2.1.0
@AnyMessageHandler
@MessageHandlerFilter(cmd = "say hello")
public void fun(Bot bot, AnyMessageEvent event) {}
```

## v2.1.8 ➡️ v2.2.0

> `新增正向 WebSocket 连接支持`

```yml
// v2.1.8
# 该配置为反向连接示例
shiro:
  ws-config:
    ws-url: "/ws/shiro"
```

```yml
// v2.2.0
shiro:
  ws:
    # 该配置为正向连接示例
    client:
      enable: false
      url: "ws://your-domain:port"
    # 该配置为反向连接示例
    server:
      enable: false
      url: "/ws/shiro"
```