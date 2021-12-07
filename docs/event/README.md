# Event

## 序
::: warning 提示
Event 所有的方法均由 `com.mikuac.shiro.core.BotPlugin` 类提供
:::

## 私聊消息

```java
public int onPrivateMessage(@NotNull Bot bot, @NotNull PrivateMessageEvent event) { return MESSAGE_IGNORE; }
```

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| ----- | ------- | ------- | ---- |
| `time` | int64 | - | 事件发生的时间戳 |
| `selfId` | int64 | - | 收到事件的机器人 QQ 号 |
| `postType` | string | `message` | 上报类型 |
| `messageType` | string | `private` | 消息类型 |
| `subType` | string | `friend`、`group`、`group_self`、`other` | 消息子类型, 如果是好友则是 `friend`, 如果是群临时会话则是 `group`, 如果是在群中自身发送则是 `group_self` |
| `tempSource` | int | - | 临时会话来源 |
| `messageId` | int32 | - | 消息 ID |
| `userId` | int64 | - | 发送者 QQ 号 |
| `message` | message | - | 消息内容 |
| `rawMessage` | string | - | 原始消息内容 |
| `font` | int32 | - | 字体 |
| `sender` | object | - | 发送人信息 |

其中 `sender` 字段的内容如下：

| 字段名 | 数据类型 | 说明 |
| ----- | ------ | ---- |
| `userId` | int64 | 发送者 QQ 号 |
| `nickname` | string | 昵称 |
| `sex` | string | 性别, `male` 或 `female` 或 `unknown` |
| `age` | int32 | 年龄 |

需要注意的是, `sender` 中的各字段是尽最大努力提供的, 也就是说, 不保证每个字段都一定存在, 也不保证存在的字段都是完全正确的 ( 缓存可能过期 ) 。

其中 `tempSource` 的类型如下：

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
| `autoEscape` | boolean | 消息内容是否作为纯文本发送 ( 即不解析 CQ 码 ) , 只在 `reply` 字段是字符串时有效 | 不转义 |

## 群消息

```java
public int onGroupMessage(@NotNull Bot bot, @NotNull GroupMessageEvent event) { return MESSAGE_IGNORE; }
```

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| ----- | ------- | ------- | --- |
| `time` | int64 | - | 事件发生的时间戳 |
| `selfId` | int64 | - | 收到事件的机器人 QQ 号 |
| `postType` | string | `message` | 上报类型 |
| `messageType` | string | `group` | 消息类型 |
| `subType` | string | `normal`、`anonymous`、`notice` | 消息子类型, 正常消息是 `normal`, 匿名消息是 `anonymous`, 系统提示 ( 如「管理员已禁止群内匿名聊天」 ) 是 `notice` |
| `messageId` | int32 | - | 消息 ID |
| `groupId` | int64 | - | 群号 |
| `userId` | int64 | - | 发送者 QQ 号 |
| `anonymous` | object | - | 匿名信息, 如果不是匿名消息则为 null |
| `message` | message | - | 消息内容 |
| `rawMessage` | string | - | 原始消息内容 |
| `font` | int32 | - | 字体 |
| `sender` | object | - | 发送人信息 |

::: warning 注意
`anonymous` 字段从 go-cqhttp-v0.9.36 开始支持
:::

其中 `anonymous` 字段的内容如下：

| 字段名 | 数据类型 | 说明 |
| ----- | ------ | ---- |
| `id` | int64 | 匿名用户 ID |
| `name` | string | 匿名用户名称 |
| `flag` | string | 匿名用户 flag, 在调用禁言 API 时需要传入 |

`sender` 字段的内容如下：

| 字段名 | 数据类型 | 说明 |
| ----- | ------ | ---- |
| `userId` | int64 | 发送者 QQ 号 |
| `nickname` | string | 昵称 |
| `card` | string | 群名片／备注 |
| `sex` | string | 性别, `male` 或 `female` 或 `unknown` |
| `age` | int32 | 年龄 |
| `area` | string | 地区 |
| `level` | string | 成员等级 |
| `role` | string | 角色, `owner` 或 `admin` 或 `member` |
| `title` | string | 专属头衔 |

需要注意的是, `sender` 中的各字段是尽最大努力提供的, 也就是说, 不保证每个字段都一定存在, 也不保证存在的字段都是完全正确的 ( 缓存可能过期 ) 。尤其对于匿名消息, 此字段不具有参考价值。

**快速操作**

| 字段名 | 数据类型 | 说明 | 默认情况 |
| ----- | ------- | --- | ------- |
| `reply` | message | 要回复的内容 | 不回复 |
| `autoEscape` | boolean | 消息内容是否作为纯文本发送 ( 即不解析 CQ 码 ) , 只在 `reply` 字段是字符串时有效 | 不转义 |
| `atSender` | boolean | 是否要在回复开头 at 发送者 ( 自动添加 ) , 发送者是匿名用户时无效 | at 发送者 |
| `delete` | boolean | 撤回该条消息 | 不撤回 |
| `kick` | boolean | 把发送者踢出群组 ( 需要登录号权限足够 ) , **不拒绝**此人后续加群请求, 发送者是匿名用户时无效 | 不踢 |
| `ban` | boolean | 把发送者禁言 `banDuration` 指定时长, 对匿名用户也有效 | 不禁言 |
| `banDuration` | number | 禁言时长 | 30 分钟 |

## 群文件上传

```java
public int onGroupUploadNotice(@NotNull Bot bot, @NotNull GroupUploadNoticeEvent event) { return MESSAGE_IGNORE; }
```

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| ----- | ------ | ------- | ---- |
| `time` | int64 | - | 事件发生的时间戳 |
| `selfId` | int64 | - | 收到事件的机器人 QQ 号 |
| `postType` | string | `notice` | 上报类型 |
| `noticeType` | string | `group_upload` | 通知类型 |
| `groupId` | int64 | - | 群号 |
| `userId` | int64 | - | 发送者 QQ 号 |
| `file` | object | - | 文件信息 |

其中 `file` 字段的内容如下：

| 字段名 | 数据类型 | 说明 |
| ----- | ------ | ---- |
| `id` | string | 文件 ID |
| `name` | string | 文件名 |
| `size` | int64 | 文件大小 ( 字节数 )  |
| `busid` | int64 | busid ( 目前不清楚有什么作用 )  |

## 群管理员变动

```java
public int onGroupAdminNotice(@NotNull Bot bot, @NotNull GroupAdminNoticeEvent event) { return MESSAGE_IGNORE; }
```

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| ----- | ------ | -------- | --- |
| `time` | int64 | - | 事件发生的时间戳 |
| `selfId` | int64 | - | 收到事件的机器人 QQ 号 |
| `postType` | string | `notice` | 上报类型 |
| `noticeType` | string | `group_admin` | 通知类型 |
| `subType` | string | `set`、`unset` | 事件子类型, 分别表示设置和取消管理员 |
| `groupId` | int64 | - | 群号 |
| `userId` | int64 | - | 管理员 QQ 号 |

## 群成员减少

```java
public int onGroupDecreaseNotice(@NotNull Bot bot, @NotNull GroupDecreaseNoticeEvent event) { return MESSAGE_IGNORE; }
```

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| ----- | ------ | -------- | --- |
| `time` | int64 | - | 事件发生的时间戳 |
| `selfId` | int64 | - | 收到事件的机器人 QQ 号 |
| `postType` | string | `notice` | 上报类型 |
| `noticeType` | string | `group_decrease` | 通知类型 |
| `subType` | string | `leave`、`kick`、`kick_me` | 事件子类型, 分别表示主动退群、成员被踢、登录号被踢 |
| `groupId` | int64 | - | 群号 |
| `operatorId` | int64 | - | 操作者 QQ 号 ( 如果是主动退群, 则和 `userId` 相同 )  |
| `userId` | int64 | - | 离开者 QQ 号 |

## 群成员增加

```java
public int onGroupIncreaseNotice(@NotNull Bot bot, @NotNull GroupIncreaseNoticeEvent event) { return MESSAGE_IGNORE; }
```

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| ----- | ------ | -------- | --- |
| `time` | int64 | - | 事件发生的时间戳 |
| `selfId` | int64 | - | 收到事件的机器人 QQ 号 |
| `postType` | string | `notice` | 上报类型 |
| `noticeType` | string | `group_increase` | 通知类型 |
| `subType` | string | `approve`、`invite` | 事件子类型, 分别表示管理员已同意入群、管理员邀请入群 |
| `groupId` | int64 | - | 群号 |
| `operatorId` | int64 | - | 操作者 QQ 号 |
| `userId` | int64 | - | 加入者 QQ 号 |

## 群禁言

```java
public int onGroupBanNotice(@NotNull Bot bot, @NotNull GroupBanNoticeEvent event) { return MESSAGE_IGNORE; }
```

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| ----- | ------ | -------- | --- |
| `time` | int64 | - | 事件发生的时间戳 |
| `selfId` | int64 | - | 收到事件的机器人 QQ 号 |
| `postType` | string | `notice` | 上报类型 |
| `noticeType` | string | `group_ban` | 通知类型 |
| `subType` | string | `ban`、`lift_ban` | 事件子类型, 分别表示禁言、解除禁言 |
| `groupId` | int64 | - | 群号 |
| `operatorId` | int64 | - | 操作者 QQ 号 |
| `userId` | int64 | - | 被禁言 QQ 号 |
| `duration` | int64 | - | 禁言时长, 单位秒 |

## 好友添加

```java
public int onFriendAddNotice(@NotNull Bot bot, @NotNull FriendAddNoticeEvent event) { return MESSAGE_IGNORE; }
```

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| ----- | ------ | -------- | --- |
| `time` | int64 | - | 事件发生的时间戳 |
| `selfId` | int64 | - | 收到事件的机器人 QQ 号 |
| `postType` | string | `notice` | 上报类型 |
| `noticeType` | string | `friend_add` | 通知类型 |
| `userId` | int64 | - | 新添加好友 QQ 号 |

## 群消息撤回

```java
public int onGroupMsgDeleteNotice(@NotNull Bot bot, @NotNull GroupMsgDeleteNoticeEvent event) { return MESSAGE_IGNORE; }
```

**事件数据**

| 字段名          | 数据类型   | 可能的值       | 说明           |
| ------------- | ------ | -------------- | -------------- |
| `time` | int64 | - | 事件发生的时间戳 |
| `selfId` | int64 | - | 收到事件的机器人 QQ 号 |
| `postType`   | string | `notice`       | 上报类型       |
| `noticeType` | string | `group_recall` | 通知类型       |
| `groupId`    | int64  |                | 群号           |
| `userId`     | int64  |                | 消息发送者 QQ 号   |
| `operatorId` | int64  |                | 操作者 QQ 号  |
| `messageId`  | int64  |                | 被撤回的消息 ID |

## 好友消息撤回

```java
public int onPrivateMsgDeleteNotice(@NotNull Bot bot, @NotNull PrivateMsgDeleteNoticeEvent event) { return MESSAGE_IGNORE; }
```

**事件数据**

| 字段名          | 数据类型   | 可能的值       | 说明           |
| ------------- | ------ | -------------- | -------------- |
| `time` | int64 | - | 事件发生的时间戳 |
| `selfId` | int64 | - | 收到事件的机器人 QQ 号 |
| `postType`   | string | `notice`       | 上报类型       |
| `noticeType` | string | `friend_recall`| 通知类型       |
| `userId`     | int64  |                | 好友 QQ 号        |
| `messageId`  | int64  |                | 被撤回的消息 ID |

## 好友戳一戳

```java
public int onPrivatePokeNotice(@NotNull Bot bot, @NotNull PokeNoticeEvent event) { return MESSAGE_IGNORE; }
```

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| ----- | ------ | -------- | --- |
| `postType`   | string | `notice` | 上报类型       |
| `noticeType` | string | `notify` | 消息类型       |
| `subType` | string | `poke` | 提示类型 |
| `selfId` | int64 |  | BOT QQ 号 |
| `senderId` | int64 | | 发送者 QQ 号 |
| `userId`     | int64  | | 发送者 QQ 号 |
| `targetId` | int64 | | 被戳者 QQ 号 |
| `time` | int64 | | 时间 |

## 群内戳一戳

::: warning 注意
此事件无法在手表协议上触发
:::

```java
public int onGroupPokeNotice(@NotNull Bot bot, @NotNull PokeNoticeEvent event) { return MESSAGE_IGNORE; }
```

**事件数据**

| 字段          | 类型   | 可能的值       | 说明           |
| ------------- | ------ | -------------- | -------------- |
| `postType`   | string | `notice`       | 上报类型       |
| `noticeType` | string | `notify` | 消息类型       |
| `subType` | string | `poke` | 提示类型 |
| `groupId` | int64 |  | 群号 |
| `userId`     | int64  |                | 发送者 QQ 号 |
| `targetId` | int64 | | 被戳者 QQ 号 |

## 群红包运气王提示

::: warning 注意
此事件无法在手表协议上触发
:::

```java
public int onGroupLuckyKingNotice(@NotNull Bot bot, @NotNull GroupLuckyKingNoticeEvent event) { return MESSAGE_IGNORE; }
```

**事件数据**

| 字段          | 类型   | 可能的值     | 说明         |
| ------------- | ------ | ------------ | ------------ |
| `postType`   | string | `notice`     | 上报类型     |
| `noticeType` | string | `notify`     | 消息类型     |
| `groupId`    | int64  |              | 群号         |
| `subType`    | string | `lucky_king` | 提示类型     |
| `userId`     | int64  |              | 红包发送者id |
| `targetId`   | int64  |              | 运气王id     |

## 群成员荣誉变更提示

```java
public int onGroupHonorChangeNotice(@NotNull Bot bot, @NotNull GroupHonorChangeNoticeEvent event) { return MESSAGE_IGNORE; }
```

::: warning 注意
此事件无法在手表协议上触发
:::

**事件数据**

| 字段          | 类型   | 可能的值                                                 | 说明     |
| ------------- | ------ | -------------------------------------------------------- | -------- |
| `postType`   | string | `notice`                                                 | 上报类型 |
| `noticeType` | string | `notify`                                                 | 消息类型 |
| `groupId`    | int64  |                                                          | 群号     |
| `subType`    | string | `honor`                                                  | 提示类型 |
| `userId`     | int64  |                                                          | 成员id   |
| `honor_type`  | string | `talkative:龙王` `performer:群聊之火` `emotion:快乐源泉` | 荣誉类型 |

## 群成员名片更新

```java
public int onGroupCardChangeNotice(@NotNull Bot bot, @NotNull GroupCardChangeNotice event) { return MESSAGE_IGNORE; }
```

::: warning 注意
此事件不保证时效性, 仅在收到消息时校验卡片
:::

**事件数据**

| 字段          | 类型   | 可能的值     | 说明     |
| ------------- | ------ | ------------ | -------- |
| `postType`   | string | `notice`     | 上报类型 |
| `noticeType` | string | `group_card` | 消息类型 |
| `groupId`    | int64  |              | 群号     |
| `userId`     | int64  |              | 成员id   |
| `card_new`    | string  |              | 新名片   |
| `card_old`    | string  |              | 旧名片   |

::: tip PS
当名片为空时 `card_xx` 字段为空字符串, 并不是昵称
:::

## 接收到离线文件

```java
public int onReceiveOfflineFilesNotice(@NotNull Bot bot, @NotNull ReceiveOfflineFilesNoticeEvent event) { return MESSAGE_IGNORE; }
```

**事件数据**

| 字段          | 类型   | 可能的值       | 说明     |
| ------------- | ------ | -------------- | -------- |
| `postType`   | string | `notice`       | 上报类型 |
| `noticeType` | string | `offline_file` | 消息类型 |
| `userId`     | int64  |                | 发送者id |
| `file`        | object |                | 文件数据 |

**file object**

| 字段   | 类型   | 可能的值 | 说明     |
| ------ | ------ | -------- | -------- |
| `name` | string |          | 文件名   |
| `size` | int64  |          | 文件大小 |
| `url`  | string |          | 下载链接 |

## 加好友请求

```java
public int onFriendAddRequest(@NotNull Bot bot, @NotNull FriendAddRequestEvent event) { return MESSAGE_IGNORE; }
```

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| ----- | ------ | -------- | --- |
| `time` | int64 | - | 事件发生的时间戳 |
| `selfId` | int64 | - | 收到事件的机器人 QQ 号 |
| `postType` | string | `request` | 上报类型 |
| `requestType` | string | `friend` | 请求类型 |
| `userId` | int64 | - | 发送请求的 QQ 号 |
| `comment` | string | - | 验证信息 |
| `flag` | string | - | 请求 flag, 在调用处理请求的 API 时需要传入 |

**快速操作**

| 字段名 | 数据类型 | 说明 | 默认情况 |
| ----- | ------- | --- | ------- |
| `approve` | boolean | 是否同意请求 | 不处理 |
| `remark` | string  | 添加后的好友备注 ( 仅在同意时有效 )  | 无备注 |

## 加群请求／邀请

```java
public int onGroupAddRequest(@NotNull Bot bot, @NotNull GroupAddRequestEvent event) { return MESSAGE_IGNORE; }
```

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| ----- | ------ | -------- | --- |
| `time` | int64 | - | 事件发生的时间戳 |
| `selfId` | int64 | - | 收到事件的机器人 QQ 号 |
| `postType` | string | `request` | 上报类型 |
| `requestType` | string | `group` | 请求类型 |
| `subType` | string | `add`、`invite` | 请求子类型, 分别表示加群请求、邀请登录号入群 |
| `groupId` | int64 | - | 群号 |
| `userId` | int64 | - | 发送请求的 QQ 号 |
| `comment` | string | - | 验证信息 |
| `flag` | string | - | 请求 flag, 在调用处理请求的 API 时需要传入 |

**快速操作**

| 字段名 | 数据类型 | 说明 | 默认情况 |
| ----- | ------- | --- | ------- |
| `approve` | boolean | 是否同意请求／邀请 | 不处理 |
| `reason` | string | 拒绝理由 ( 仅在拒绝时有效 )  | 无理由 |