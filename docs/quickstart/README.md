# 快速开始

## 引入 Shiro

### 从 Maven 引入
::: warning 注意
请访问 [Maven Repo](https://search.maven.org/search?q=com.mikuac.shiro) 查看最新版本，并替换 `version` 内的 `latest version`
:::
```xml
<dependency>
    <groupId>com.mikuac</groupId>
    <artifactId>shiro</artifactId>
    <version>latest version</version>
</dependency>
```

### 从 Gradle 引入
::: warning 注意
请访问 [Maven Repo](https://search.maven.org/search?q=com.mikuac.shiro) 查看最新版本，并替换 `latest version`
:::
```
implementation 'com.mikuac:shiro:latest version'
```

### 从 Release 下载 jar 包
从 [Release](https://github.com/MisakaTAT/Shiro/releases) 界面下载最新版本的 Shiro

## 配置文件
将项目的 `application.properties` 修改为 `resources/application.yml` 

### 基础配置
> 通常情况下，使用如下配置内容即可

```yaml
server:
  port: 5000
# Shiro 配置
shiro:
  # 插件列表
  plugin-list: 
    - com.mikuac.example.plugins.PluginOne
    - com.mikuac.example.plugins.PluginTwo
```

### 高级自定义配置
```yaml
server:
  port: 5000
shiro:
  # 插件列表
  plugin-list:
    - com.mikuac.example.plugins.PluginOne
    - com.mikuac.example.plugins.PluginTwo
  # WebSocket 配置
  ws-config:
    # WebSocket 地址
    ws-url: "/ws/shiro"
    # 超时回收，默认10秒
    do-request-timeout: 100000
    # 二进制消息的最大长度
    max-binary-message-buffer-size: 512000
    # 最大空闲时间，超过这个时间将close session
    max-session-idle-timeout: 900000
    # 最大文本消息缓冲区
    max-text-message-buffer-size: 512000
  # 限速器（令牌桶算法）
  limiter:
    # 是否启用限速器
    enable: false
    # 每秒生成的令牌数
    permits-per-second: 1
  # 线程池配置
  task-pool:
    # 核心线程数（默认线程数）
    core-pool-size: 10
    # 缓冲队列大小
    queue-capacity: 200
    # 允许线程空闲时间（单位：默认为秒）
    keep-alive-time: 10
    # 最大线程数
    max-pool-size: 30
    # 线程池名前缀
    thread-name-prefix: "ShiroTaskPool-"
```

## 示例插件

### 基础示例
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

## 连接 Shiro

### 下载 Client
::: tip 提示
Shiro 以 [OneBot-v11](https://github.com/howmanybots/onebot/tree/master/v11/specs) 标准协议进行开发，兼容所有支持反向WebSocket的OneBot协议客户端
:::
| 项目地址 | 平台 | 核心作者 | 备注 |
| --- | --- | --- | --- |
| [Yiwen-Chan/OneBot-YaYa](https://github.com/Yiwen-Chan/OneBot-YaYa) | [先驱](https://www.xianqubot.com/) | kanri |  |
| [richardchien/coolq-http-api](https://github.com/richardchien/coolq-http-api) | CKYU | richardchien | 可在 Mirai 平台使用 [mirai-native](https://github.com/iTXTech/mirai-native) 加载 |
| [Mrs4s/go-cqhttp](https://github.com/Mrs4s/go-cqhttp) | [MiraiGo](https://github.com/Mrs4s/MiraiGo) | Mrs4s |  |
| [yyuueexxiinngg/cqhttp-mirai](https://github.com/yyuueexxiinngg/cqhttp-mirai) | [Mirai](https://github.com/mamoe/mirai) | yyuueexxiinngg |  |
| [takayama-lily/onebot](https://github.com/takayama-lily/onebot) | [OICQ](https://github.com/takayama-lily/oicq) | takayama |  |

### 配置文件
::: tip 提示
这里以 `go-cqhttp` 为例，配置反向 `websocket` 连接到 `shiro`
:::
编辑 `go-cqhttp` 目录下的 `config.yml` 文件，并修改如下内容
```yaml
# 连接服务列表
servers:
  # 添加方式，同一连接方式可添加多个，具体配置说明请查看文档
  #- http: # http 通信
  #- ws:   # 正向 Websocket
  #- ws-reverse: # 反向 Websocket
  #- pprof: #性能分析服务器
  # 反向WS设置
  - ws-reverse:
      # 反向WS Universal 地址
      # 注意 设置了此项地址后下面两项将会被忽略
      universal: ws://127.0.0.1:5000/ws/shiro
      # 反向WS API 地址
      api: ws://your_websocket_api.server
      # 反向WS Event 地址
      event: ws://your_websocket_event.server
      # 重连间隔 单位毫秒
      reconnect-interval: 3000
      middlewares:
        <<: *default # 引用默认中间件
```