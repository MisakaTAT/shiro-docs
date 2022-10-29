# 进阶

::: danger 警告
文档施工中···
:::

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

通过 `matcher.group(1)` 则可以取出 `MisakaTAT` 这个游戏ID
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

> `MsgUtils` 主要的用途是为了能够便捷的构建包含多种类型的组合消息

> 更多类型请见 `com.mikuac.shiro.common.utils.MsgUtils`

```java
String msg = MsgUtils.builder()
        .atAll()                        // @全体成员
        .img("https://test.com/1.png")  // 包含一张图片
        .text("hello~")                 // 包含一段文本内容
        .build();                       // 构建消息
```

## 主动发送消息

>在定时任务或者某些需要主动发送消息的场景下可以通过以下方式取出 Bot 对象

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
此参数仅在 `Shiro v1.1.7` 及以上版本提供
:::

>以下示例为过滤出本次消息中的收到的所有图片并打印图片的链接，更多类型可以打印 `event.getArrayMsg()` 自行查看，后续考虑加上类型枚举，欢迎PR

```java
@Component
public class ExamplePlugin extends BotPlugin {

    @Override
    public int onPrivateMessage(@NotNull Bot bot, @NotNull PrivateMessageEvent event) {
        event.getArrayMsg()
                .stream()
                .filter(type -> "image".equals(type.getType()))
                .forEach(image -> System.out.println(image.getData().get("url")));
        return MESSAGE_IGNORE;
    }

}
```