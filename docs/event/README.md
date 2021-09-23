# Event

## 序
::: warning 提示
Event 所有的方法均由 `com.mikuac.shiro.core.BotPlugin` 类提供
:::


## 收到私聊消息

```java
public int onPrivateMessage(@NotNull Bot bot, @NotNull PrivateMessageEvent event) {}
```

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| ----- | ------- | ------- | ---- |
| `time` | int64 | - | 事件发生的时间戳 |
| `self_id` | int64 | - | 收到事件的机器人 QQ 号 |
| `post_type` | string | `message` | 上报类型 |
| `message_type` | string | `private` | 消息类型 |
| `sub_type` | string | `friend`、`group`、`group_self`、`other` | 消息子类型, 如果是好友则是 `friend`, 如果是群临时会话则是 `group`, 如果是在群中自身发送则是 `group_self` |
| `temp_source` | int | - | 临时会话来源 |
| `message_id` | int32 | - | 消息 ID |
| `user_id` | int64 | - | 发送者 QQ 号 |
| `message` | message | - | 消息内容 |
| `raw_message` | string | - | 原始消息内容 |
| `font` | int32 | - | 字体 |
| `sender` | object | - | 发送人信息 |

其中 `sender` 字段的内容如下：

| 字段名 | 数据类型 | 说明 |
| ----- | ------ | ---- |
| `user_id` | int64 | 发送者 QQ 号 |
| `nickname` | string | 昵称 |
| `sex` | string | 性别, `male` 或 `female` 或 `unknown` |
| `age` | int32 | 年龄 |

需要注意的是, `sender` 中的各字段是尽最大努力提供的, 也就是说, 不保证每个字段都一定存在, 也不保证存在的字段都是完全正确的 ( 缓存可能过期 ) 。

其中 `temp_source` 的类型如下：

| 类型 | 来源 |
| --- | --- |
| 0 | 群聊 |
| 1 | QQ咨询 |
| 2 | 查找 |
| 3 | QQ电影 |
| 4 | 热聊 |
| 6 | 验证消息 |
| 7 | 多人聊天 |
| 8 | 约会 |
| 9 | 通讯录 |

**快速操作**

| 字段名 | 数据类型 | 说明 | 默认情况 |
| ----- | ------- | --- | ------- |
| `reply` | message | 要回复的内容 | 不回复 |
| `auto_escape` | boolean | 消息内容是否作为纯文本发送 ( 即不解析 CQ 码 ) , 只在 `reply` 字段是字符串时有效 | 不转义 |