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

## 编写插件

### 注解方式
[点击跳转](../annotation_event/README.md#示例插件)

### 重写 BotPlugin
[点击跳转](../override_event/README.md#示例插件)

## 连接 Shiro

### 下载 Client
::: tip 提示
Shiro 以 [OneBot-v11](https://github.com/botuniverse/onebot-11) 标准协议进行开发，兼容所有支持反向WebSocket的OneBot协议客户端
:::
| 项目地址                                                                      | 平台                                          | 核心作者       | 备注                                                                             |
| ----------------------------------------------------------------------------- | --------------------------------------------- | -------------- | -------------------------------------------------------------------------------- |
| [Yiwen-Chan/OneBot-YaYa](https://github.com/Yiwen-Chan/OneBot-YaYa)           | [先驱](https://www.xianqubot.com/)            | kanri          |                                                                                  |
| [richardchien/coolq-http-api](https://github.com/richardchien/coolq-http-api) | CKYU                                          | richardchien   | 可在 Mirai 平台使用 [mirai-native](https://github.com/iTXTech/mirai-native) 加载 |
| [Mrs4s/go-cqhttp](https://github.com/Mrs4s/go-cqhttp)                         | [MiraiGo](https://github.com/Mrs4s/MiraiGo)   | Mrs4s          |                                                                                  |
| [yyuueexxiinngg/cqhttp-mirai](https://github.com/yyuueexxiinngg/cqhttp-mirai) | [Mirai](https://github.com/mamoe/mirai)       | yyuueexxiinngg |                                                                                  |
| [takayama-lily/onebot](https://github.com/takayama-lily/onebot)               | [OICQ](https://github.com/takayama-lily/oicq) | takayama       |                                                                                  |

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
