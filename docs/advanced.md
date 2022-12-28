# 进阶

## Matcher

::: warning 注意
`Matcher` 类仅适用于注解方式开发，可以返回注解 `cmd` 参数正则的匹配结果
:::

::: tip 建议
`Matcher` 的用法基于你对正则的理解程度有多少

例如有一个场景为需要设计一个游戏战绩查询插件

正则设计：`^战绩查询\s(.*)?$`

匹配消息：`战绩查询 MisakaTAT`

此时只有匹配的消息内容可以触发此插件

通过 `matcher.group(1)` 则可以取出 `MisakaTAT` 这个游戏 ID
:::

```java
@Shiro
@Component
public class ExamplePlugin {

    @GroupMessageHandler(cmd = "开启|关闭")
    public void test1(@NotNull Bot bot, @NotNull GroupMessageEvent event, @NotNull Matcher matcher) {
        String action = matcher.group();
        switch (action) {
            case "开启":
                System.out.println("开启事件触发");
                break;
            case "关闭":
                System.out.println("关闭事件触发");
                break;
            default:
        }
    }

    @GroupMessageHandler(cmd = "^战绩查询\s(.*)?$")
    public void test2(@NotNull Bot bot, @NotNull GroupMessageEvent event, @NotNull Matcher matcher) {
        String gameID = matcher.group(1);
        queryGameStats(gameID)
    }

}
```

## 消息构建工具

:::tip 提示
`MsgUtils` 主要的用途是为了能够便捷的构建包含多种类型的组合消息

更多类型请见 `com.mikuac.shiro.common.utils.MsgUtils`
:::

```java
String msg = MsgUtils.builder()
        .atAll()                        // @全体成员
        .img("https://test.com/1.png")  // 包含一张图片
        .text("hello~")                 // 包含一段文本内容
        .build();                       // 构建消息
```

> 媒体文件发送

```java
MsgUtils.builder()
        .img("file:///C:/img/1.png")    // Windows 本地图片
        .img("file:///root/1.png")      // Linux   本地图片
        .img("base64://")               // Base64
        .img("https://test.com/1.png")  // 网络图片
        .build();
```

## 主动发送消息

> 在定时任务或者某些需要主动发送消息的场景下可以通过以下方式取出 Bot 对象

```java
// 注入 Bot 容器
@Resource
private BotContainer botContainer;

private void sendMsg() {
    // 机器人账号
    long botId = 123456789L;
    // 通过机器人账号取出 Bot 对象
    Bot bot = botContainer.robots.get(botId);
    // 调用 Bot 对象方法
    bot.sendPrivateMsg(12345L, "Hi~", false);
}
```

## 消息链

::: warning 注意
`此参数（ArrayMsg）` 在 `Shiro v1.1.7` 及以上版本提供

`类型枚举（MsgTypeEnum）` 在 `Shiro v1.4.5` 及以上版本提供

参数取值后续有时间会考虑优化
:::

> 以下示例为过滤出本次消息中的收到的所有图片并打印图片的链接

```java
@Component
public class ExamplePlugin extends BotPlugin {

    @Override
    public int onPrivateMessage(@NotNull Bot bot, @NotNull PrivateMessageEvent event) {
        event.getArrayMsg()
                .stream()
                .filter(item -> MsgTypeEnum.IMAGE == item.getType())
                .forEach(image -> System.out.println(image.getData().get("url")));
        return MESSAGE_IGNORE;
    }

}
```

## 辅助工具类

:::tip 提示
以下方法均由 `com.mikuac.shiro.common.utils.ShiroUtils` 提供

详细用法见方法 `ShiroUtils` 注释
:::

- **現在公開可能な情報（已支持的方法列表）**
  - 消息编码 `escape()`
  - 消息解码 `unescape()`
  - 获取用户昵称 `getNickname`
  - 判断是否为全体@ `isAtAll()`
  - 获取群头像 `getGroupAvatar()`
  - 获取用户头像 `getUserAvatar()`
  - 获取消息内所有图片链接 `getMsgImgUrlList()`
  - 获取消息内所有视频链接 `getMsgVideoUrlList()`
  - String 消息上报转消息链 `stringToMsgChain()`
  - 创建自定义消息合并转发 `generateForwardMsg()`
  - 从 MsgChainBean 生成 CQ Code `jsonToCode()`
  - 消息编码（转义 CQ 码防止文本注入） `escape2()`
  - 获取消息内所有@成员账号（不包含全体@） `getAtList()`

## 合并转发

```java
// 构建消息列表（可以填充 MsgUtils 构建的消息）
List<String> msgList = new ArrayList<String>() {{
    msgList.add("这是第一条消息");
    msgList.add("这是第二条消息");
    msgList.add("这是第三条消息");
}};

// 构建合并转发消息（selfId为合并转发消息显示的账号，nickname为显示的发送者昵称，msgList为消息列表）
List<Map<String, Object>> forwardMsg = ShiroUtils.generateForwardMsg(selfId, nickname, msgList)

// 发送合并转发内容到群（groupId为要发送的群）
bot.sendGroupForwardMsg(groupId, forwardMsg)

// 发送合并转发内容到私聊（userId为要发送的好友账号）
bot.sendPrivateForwardMsg(userId, forwardMsg)
```

## OneBotMedia

- 支持的参数
  - file
  - cache
  - proxy
  - timeout

```java
// 该示例构建了一条图片消息，并且告诉客户端不要使用缓存
OneBotMedia img = OneBotMedia.builder().file("https://example.com/1.jpg").cache(false);
// 构建消息
String msg = MsgUtils.builder().img(img).build();
```

## 拦截器

> 配置文件指定拦截器实例

```yaml
shiro:
  interceptor: com.mikuac.example.interceptor.InterceptorExample
```

```java
@Component
public class InterceptorExample implements BotMessageEventInterceptor {

    @Override
    public boolean preHandle(Bot bot, MessageEvent event) throws Exception {
        // 预处理方法，可以在触发事件前做一些处理，返回值为 false 时本次事件将会被拦截
        // 使用场景可以是黑名单检查或检查权限等等，具体的使用场景可以发挥自己的想象力
        // MessageEvent 可能为右边这三种类型 PrivateMessageEvent、GroupMessageEvent、GuildMessageEvent
        return false;
    }

    @Override
    public void afterCompletion(Bot bot, MessageEvent event) throws Exception {
        // 当 preHandle 返回值为 true 时则会执行 plugin-list，执行完毕后进入到 afterCompletion
    }

}
```

## CoreEvent

::: warning 注意
`CoreEvent` 仅在 `Shiro v1.3.9` 及以上版本提供
:::

```java
@Primary
@Component
public class MyCoreEvent extends CoreEvent {

    @Override
    public void online(@NotNull Bot bot) {
        // 客户端上线事件
        // 例如上线后发送消息给指定的群或好友
        // 如需获取上线的机器人账号可以调用 bot.getSelfId()
        bot.sendPrivateMsg(123456789, "我上线啦～", false);
    }

    @Override
    public void offline(long account) {
        // 客户端离线事件
        System.out.println("诶～我又离线了");
    }

    @Override
    public boolean session(@NotNull WebSocketSession session) {
        // 可以通过 session.getHandshakeHeaders().getFirst("x-self-id") 获取上线的机器人账号
        // 例如当服务端为开放服务时，并且只有白名单内的账号才允许连接，此时可以检查账号是否存在于白名内
        // 不存在的话返回 false 即可禁止连接
        return true;
    }

}
```

## 自定义请求

::: tip 提示
当客户端提供了某些 `Action` 请求，但是 `Shiro` 尚未支持时，可以发起自定义请求，以下代码为对 `go-cqhttp` 的 `删除好友` 动作的示范
:::

> 自定义一个枚举类型并实现 `ActionPath`

```java
@Getter
public enum CustomActionPath implements ActionPath {

    // 定义 Endpoint
    DELETE_FRIEND("delete_friend");

    private final String path;

    CustomActionPath(String path) {
        this.path = path;
    }

    @Override
    public String getPath() {
        return this.path;
    }

}
```

> 发起请求

```java
// 定义需要删除的好友账号
val friend = 12345678L;
// 获取 Endpoint
val action = CustomActionPath.DELETE_FRIEND;
// 构建请求参数
val params = new JSONObject() {{
    put("friend_id", friend);
}};
// 参考 Bot 类对响应结果进行处理
val result = bot.customRequest(action, params);
```

## 进阶配置文件

:::tip 提示
以下配置文件为进阶配置，如有遗漏欢迎补充

`ws-config` `task-pool` 大多数情况下保持默认即可
:::

```yaml
shiro:
  # 注解方式编写的插件无需在插件列表（plugin-list）定义
  # 插件列表为顺序执行，如果前一个插件返回了 MESSAGE_BLOCK 将不会执行后续插件
  plugin-list:
    - com.mikuac.example.plugins.PluginOne
    - com.mikuac.example.plugins.PluginTwo
  # 拦截器
  interceptor: com.mikuac.example.interceptor.InterceptorExample
  # WebSocket 配置
  ws-config:
    # 反向 Websocket 连接地址，无需该配置字段可删除，将使用默认值 "/ws/shiro"
    ws-url: "/ws/shiro"
    # 访问密钥，强烈推荐在公网的服务器设置
    access-token: ""
    # 超时回收，默认10秒
    do-request-timeout: 100000
    # 二进制消息的最大长度
    max-binary-message-buffer-size: 512000
    # 最大空闲时间，超过这个时间将关闭会话
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
    capacity:
      1
      # 如果该值为 false 时，当令牌获取失败则会直接丢次本次请求
      # 如果该值为 true 时，当令牌获取失败则会阻塞当前线程，后续任务将被添加到等待队列
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

## 注解事件排序

::: warning 注意
`@Order` 注解仅在 `Shiro v1.4.2` 及以上版本提供
:::

```java
@Order(1)
@GroupMessageHandler
public void test1(@NotNull Bot bot, @NotNull GroupMessageEvent event, @NotNull Matcher matcher) {
    System.out.println("我将被第一个触发");
}

@Order(2)
@GroupMessageHandler
public void test2(@NotNull Bot bot, @NotNull GroupMessageEvent event, @NotNull Matcher matcher) {
    System.out.println("我将被第二个触发");
}
```
