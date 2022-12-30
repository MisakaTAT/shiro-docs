# 动作

::: tip 提示
`Bot（动作）` 对象通常随着 `Event（事件）` 分发

如果需要手动获取请参考 [主动发送消息](advanced.html#主动发送消息)
:::

## 发送消息

> bot.sendMsg()

**参数**

| 参数       | 类型            | 描述                                       |
| ---------- | :-------------- | ------------------------------------------ |
| event      | AnyMessageEvent | 监听事件                                   |
| msg        | String          | 要发送的内容                               |
| autoEscape | boolean         | 消息内容是否作为纯文本发送（不解析 CQ 码） |

**返回值**

| 字段      | 类型 | 描述    |
| --------- | :--- | ------- |
| messageId | int  | 消息 ID |

## 获取消息

> bot.getMsg()

**参数**

| 参数  | 类型 | 描述    |
| ----- | :--- | ------- |
| msgId | int  | 消息 ID |

**返回值**

| 字段       | 类型                        | 描述         |
| ---------- | :-------------------------- | ------------ |
| messageId  | int                         | 消息 ID      |
| realId     | boolean                     | 消息真实 ID  |
| sender     | [Sender](types.html#Sender) | 发送者信息   |
| time       | int                         | 发送时间     |
| message    | String                      | 消息内容     |
| rawMessage | String                      | 原始消息内容 |

## 发送私聊消息

> bot.sendPrivateMsg()

**参数**

| 参数       | 类型    | 描述                                       |
| ---------- | :------ | ------------------------------------------ |
| userId     | long    | 目标用户                                   |
| msg        | String  | 要发送的内容                               |
| autoEscape | boolean | 消息内容是否作为纯文本发送（不解析 CQ 码） |

**返回值**

| 字段      | 类型 | 描述    |
| --------- | :--- | ------- |
| messageId | int  | 消息 ID |

## 发起临时会话

> bot.sendPrivateMsg()

**参数**

| 参数       | 类型    | 描述                                                |
| ---------- | :------ | --------------------------------------------------- |
| groupId    | long    | 主动发起临时会话群号（机器人本身必须是管理员/群主） |
| userId     | long    | 目标用户                                            |
| msg        | String  | 要发送的内容                                        |
| autoEscape | boolean | 消息内容是否作为纯文本发送（不解析 CQ 码）          |

**返回值**

| 字段      | 类型 | 描述    |
| --------- | :--- | ------- |
| messageId | int  | 消息 ID |

## 发送群聊消息

> bot.sendGroupMsg()

**参数**

| 参数       | 类型    | 描述                                       |
| ---------- | :------ | ------------------------------------------ |
| groupId    | long    | 目标群号                                   |
| msg        | String  | 要发送的内容                               |
| autoEscape | boolean | 消息内容是否作为纯文本发送（不解析 CQ 码） |

**返回值**

| 字段      | 类型 | 描述    |
| --------- | :--- | ------- |
| messageId | int  | 消息 ID |

## 获取频道成员列表

::: warning 注意
由于频道人数可能会很多，请尽量不要全量拉取成员列表，这将会导致严重的性能问题

尽量使用 `bot.getGuildMemberProfile` 方法代替全量拉取
:::

> bot.getGuildMemberList()

**参数**

| 参数      | 类型   | 描述       |
| --------- | :----- | ---------- |
| guildId   | String | 频道 ID    |
| nextToken | String | 翻页 Token |

> `nextToken` 为空的情况下，将返回第一页的数据，并在返回值附带下一页的 `token`

**返回值**

| 字段      | 类型                                                | 描述         |
| --------- | :-------------------------------------------------- | ------------ |
| members   | List<[GuildMemberInfo](types.html#GuildMemberInfo)> | 成员信息列表 |
| finished  | boolean                                             | 是否最终页   |
| nextToken | String                                              | 翻页 Token   |

## 发送信息到子频道

> bot.sendGuildMsg()

**参数**

| 参数      | 类型   | 描述         |
| --------- | :----- | ------------ |
| guildId   | String | 频道 ID      |
| channelId | String | 子频道 ID    |
| msg       | String | 要发送的内容 |

**返回值**

| 字段      | 类型   | 描述    |
| --------- | :----- | ------- |
| messageId | String | 消息 ID |

## 获取频道消息

> bot.getGuildMsg()

**参数**

| 参数       | 类型   | 描述           |
| ---------- | :----- | -------------- |
| guildMsgId | String | 频道消息 ID    |
| noCache    | String | 是否不使用缓存 |

**返回值**

| 字段          | 类型                                  | 描述       |
| ------------- | :------------------------------------ | ---------- |
| guildId       | String                                | 频道 ID    |
| channelId     | String                                | 子频道 ID  |
| message       | String                                | 消息内容   |
| messageId     | String                                | 消息 ID    |
| messageSeq    | int                                   | 消息序号   |
| messageSource | String                                | 消息来源   |
| sender        | [GuildSender](types.html#guildsender) | 发送人信息 |
| time          | long                                  | 发送时间戳 |
