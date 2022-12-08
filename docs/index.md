# 快速开始

## 基础信息

::: tip 提示
- 本文档默认您了解并熟悉 **Java/Kotlin** 基本语法以及 **SpringBoot** 开发体系
- QQ群：860346522
:::

::: warning 注意
- 开发环境仅支持 `JDK 1.8` 及以上版本
- 客户端需要支持 `websocket reverse` 即反向websocket连接
- 支持 `Onebot V11` 标准及 `go-cqhttp` 拓展
:::

## 项目创建

1. 首先创建一个空的 `SpringBoot` 项目（什么？不会？可以右上角关闭本页面了）
2. [引入依赖](#依赖引入)
3. [服务端配置](#服务端配置)
4. [客户端配置](#客户端配置)
5. [编写插件](#第一个插件)

## 依赖引入

<a href="https://search.maven.org/search?q=com.mikuac.shiro"><img src="https://img.shields.io/maven-central/v/com.mikuac/shiro.svg?label=Maven%20Central&style=flat-square" alt="maven" /></a>

::: warning 注意
引入依赖时请替换版本 `latest` 为 `Maven Central` 实际的最新版本
:::

### Maven

```xml
<dependency>
  <groupId>com.mikuac</groupId>
  <artifactId>shiro</artifactId>
  <version>latest</version>
</dependency>
```

### Gradle Kotlin DSL

```kotlin
implementation("com.mikuac:shiro:latest")
```

### Gradle Groovy DSL

```groovy
implementation 'com.mikuac:shiro:latest'
```

## 服务端配置

`SpringBoot` 项目默认的配置文件路径应为 `resources/application.prorperties`，推荐变更为 `yaml` 格式的配置文件，以提供一个较为良好的编写与阅读体验

::: tip 提示
以下配置文件为最小实例

更多配置项见 [进阶配置](advanced.html#进阶配置文件)
:::

```yaml
server:
  # SpringBoot 项目的运行端口即为客户端反向 Websocket 连接端口
  port: 5555
```

## 客户端配置

::: tip 提示
客户端配置文件使用 `go-cqhttp` 为例，配置反向 `websocket` 连接服务端
:::

```yaml
# 连接服务列表
servers:
  # 反向WS设置
  - ws-reverse:
      # 反向WS Universal 地址
      # 注意 设置了此项地址后下面两项将会被忽略
      universal: ws://127.0.0.1:5555/ws/shiro
      # 反向WS API 地址
      api: ws://your_websocket_api.server
      # 反向WS Event 地址
      event: ws://your_websocket_event.server
      # 重连间隔 单位毫秒
      reconnect-interval: 3000
      middlewares:
        <<: *default # 引用默认中间件
```

## 第一个插件

### 注解事件

```java
@Shiro
@Component
public class ExamplePlugin {

    // 符合 cmd 正则表达式的消息会被响应
    @PrivateMessageHandler(cmd = "hi")
    public void fun1(@NotNull Bot bot, @NotNull PrivateMessageEvent event, @NotNull Matcher matcher) {
        // 构建消息
        String sendMsg = MsgUtils.builder().face(66).text("Hello, this is shiro demo.").build();
        // 发送私聊消息
        bot.sendPrivateMsg(event.getUserId(), sendMsg, false);
    }

    // 如果 at 参数设定为 AtEnum.NEED 则只有 at 了机器人的消息会被响应
    @GroupMessageHandler(at = AtEnum.NEED)
    public void fun2(@NotNull GroupMessageEvent event) {
        // 以注解方式调用可以根据自己的需要来为方法设定参数
        // 例如群组消息可以传递 GroupMessageEvent, Bot, Matcher 多余的参数会被设定为 null
        System.out.println(event.getMessage());
    }

    // 同时监听群组及私聊消息 并根据消息类型（私聊，群聊）回复
    @MessageHandler
    public void fun3(@NotNull Bot bot, @NotNull AnyMessageEvent event) {
        bot.sendMsg(event, "hello", false);
    }

}
```

### 重写事件

::: tip 提示
- 注解方式编写的插件无需在插件列表（plugin-list）定义
- 服务端配置文件 `resources/application.yaml` 追加如下内容
- 插件列表为顺序执行，如果前一个插件返回了 `MESSAGE_BLOCK` 将不会执行后续插件
:::

```yaml
shiro:
  plugin-list: 
    - com.example.bot.plugins.ExamplePlugin
```

```java
@Component
public class ExamplePlugin extends BotPlugin {

    @Override
    public int onPrivateMessage(@NotNull Bot bot, @NotNull PrivateMessageEvent event) {
        if ("hi".equals(event.getMessage())) {
            // 构建消息
            String sendMsg = MsgUtils.builder()
                    .face(66)
                    .text("hello, this is shiro example plugin.")
                    .build();
            // 发送私聊消息
            bot.sendPrivateMsg(event.getUserId(), sendMsg, false);
        }
        // 返回 MESSAGE_IGNORE 执行 plugin-list 下一个插件，返回 MESSAGE_BLOCK 则不执行下一个插件
        return MESSAGE_IGNORE;
    }

    @Override
    public int onGroupMessage(@NotNull Bot bot, @NotNull GroupMessageEvent event) {
        if ("hi".equals(event.getMessage())) {
            // 构建消息
            String sendMsg = MsgUtils.builder()
                    .at(event.getUserId())
                    .face(66)
                    .text("hello, this is shiro example plugin.")
                    .build();
            // 发送群消息
            bot.sendGroupMsg(event.getGroupId(), sendMsg, false);
        }
        // 返回 MESSAGE_IGNORE 执行 plugin-list 下一个插件，返回 MESSAGE_BLOCK 则不执行下一个插件
        return MESSAGE_IGNORE;
    }

}
```
