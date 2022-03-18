# 进阶

## MsgUtils
```java
// 以下简单示例为构建一条 at 全体群成员并包含图片与文本内容的消息
// 更多使用方法请见 com.mikuac.shiro.common.utils.MsgUtils
MsgUtils msgUtils = MsgUtils.builder()
        .atAll()
        .img("https://test.com/1.png")
        .text("hello~")
        .build();
```

## 内置工具类

### QQ号获取昵称
```java
ShiroUtils.getNickname(12345678L)
```

### 判断是否为全体 @
```java
ShiroUtils.isAtAll(String msg)
ShiroUtils.isAtAll(List<MsgChainBean> arrayMsg)
```

### 获取所有被 @ 的用户

::: warning 注意
不包含全体 at
:::

```java
/**
  * @param arrayMsg 消息链
  * @return at 对象列表
  */
ShiroUtils.getAtList(List<MsgChainBean> arrayMsg)
```

### 获取消息内所有图片链接
```java
/**
  * @param arrayMsg 消息链
  * @return 图片链接列表
  */
ShiroUtils.getMsgImgUrlList(List<MsgChainBean> arrayMsg)
```

### 获取消息内所有视频链接
```java
/**
  * @param arrayMsg 消息链
  * @return 视频链接列表
  */
ShiroUtils.getMsgVideoUrlList(List<MsgChainBean> arrayMsg)
```

### 获取群头像
```java
/**
  * @param groupId 群号
  * @param size    头像尺寸
  * @return 头像链接 （size为0返回真实大小, 40(40*40), 100(100*100), 640(640*640)）
  */
ShiroUtils.getGroupAvatar(long groupId, int size)
```

### 获取用户头像
```java
/**
  * @param userId QQ号
  * @param size   头像尺寸
  * @return 头像链接 （size为0返回真实大小, 40(40*40), 100(100*100), 640(640*640)）
  */
ShiroUtils.getUserAvatar(long userId, int size)
```

### 创建自定义消息合并转发
```java
/**
  * @param uin     发送者QQ号
  * @param name    发送者显示名字
  * @param msgList 消息列表，每个元素视为一个消息节点
  *                https://docs.go-cqhttp.org/cqcode/#%E5%90%88%E5%B9%B6%E8%BD%AC%E5%8F%91
  * @return 转发消息
  */
ShiroUtils.generateForwardMsg(long uin, String name, List<String> msgList)
```

## 消息链

::: warning 注意
支持 `String` 消息转换为 `Array` 消息（`v1.1.7` 及以上版本）
:::

```java
@Component
public class ExamplePlugin extends BotPlugin {
    
    @Override
    public int onPrivateMessage(@NotNull Bot bot, @NotNull PrivateMessageEvent event) {
        event.getArrayMsg().stream().filter(it ->
                "image".equals(it.getType())
        ).forEach(it ->
                System.out.println(it.getData().get("url"))
        );
        return MESSAGE_IGNORE;
    }
    
}
```

## 主动发送
```java
// 注入 Bot 容器
private BotContainer botContainer;

@Autowired
public void setBotContainer(BotContainer botContainer) {
    this.botContainer = botContainer;
}

private void sendMsg() {
    // 机器人账号
    val botId = 123456789L;
    // 取出 Bot 对象
    val bot = botContainer.robots.get(botId);
    // 调用 Bot 对象方法
    bot.sendPrivateMsg(12345L, "Hi~", false);
}
```

## 高级自定义配置
```yaml
server:
  port: 5000
shiro:
  # 插件列表 (顺序执行，如果前一个插件返回了MESSAGE_BLOCK，将不会执行后续插件)
  # 注解方式无需在此定义插件
  plugin-list:
    - com.mikuac.example.plugins.PluginOne
    - com.mikuac.example.plugins.PluginTwo
  # 拦截器
  interceptor:
    - com.mikuac.example.interceptor.Test
  # WebSocket 配置
  ws-config:
    # 反向 Websocket 连接地址，无需该配置字段可删除，将使用默认值 "/ws/shiro"
    ws-url: "/ws/shiro"
    # 访问密钥，强烈推荐在公网的服务器设置
    access-token: ""
    # 插件列表
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
    # 补充速率（每秒补充的令牌数量）
    rate: 1
    # 令牌桶容量
    capacity: 1
     # 如果该值为 true 时，当令牌获取失败则会阻塞当前线程，后续任务将被添加到等待队列。
     # 如果该值为 false 时，当令牌获取失败则会直接丢次本次请求。
    awaitTask: true
    # 等待超时
    timeout: 10
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