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

## 撤回消息

> bot.deleteMsg()

**参数**

| 参数  | 类型 | 描述    |
| ----- | :--- | ------- |
| msgId | int  | 消息 ID |

## 群组踢人

> bot.setGroupKick()

**参数**

| 参数             | 类型    | 描述                               |
| ---------------- | :------ | ---------------------------------- |
| groupId          | long    | 群号                               |
| userId           | long    | 目标用户                           |
| rejectAddRequest | boolean | 拒绝此人的加群请求（默认 `false`） |

## 群组单人禁言

> bot.setGroupBan()

**参数**

| 参数     | 类型 | 描述                                              |
| -------- | :--- | ------------------------------------------------- |
| groupId  | long | 群号                                              |
| userId   | long | 目标用户                                          |
| duration | int  | 禁言时长（单位/秒 默认 30 \* 60）`0` 表示取消禁言 |

## 全体禁言

> bot.setGroupWholeBan()

**参数**

| 参数    | 类型    | 描述                               |
| ------- | :------ | ---------------------------------- |
| groupId | long    | 群号                               |
| enable  | boolean | 是否禁言（`false` 为取消全体禁言） |

## 群组设置管理员

> bot.setGroupAdmin()

**参数**

| 参数    | 类型    | 描述                                   |
| ------- | :------ | -------------------------------------- |
| groupId | long    | 群号                                   |
| userId  | long    | 目标用户                               |
| enable  | boolean | 设置管理员（`false` 为取消管理员权限） |

## 群组匿名

> bot.setGroupAnonymous()

**参数**

| 参数    | 类型    | 描述             |
| ------- | :------ | ---------------- |
| groupId | long    | 群号             |
| enable  | boolean | 是否允许匿名聊天 |

## 设置群名片

> bot.setGroupCard()

**参数**

| 参数    | 类型   | 描述                             |
| ------- | :----- | -------------------------------- |
| groupId | long   | 群号                             |
| userId  | long   | 目标用户                         |
| card    | String | 群名片（空字符串表示删除群名片） |

## 设置群名

> bot.setGroupName()

**参数**

| 参数      | 类型   | 描述   |
| --------- | :----- | ------ |
| groupId   | long   | 群号   |
| groupName | String | 新群名 |

## 退出群组

> bot.setGroupLeave()

**参数**

| 参数      | 类型    | 描述                                                |
| --------- | :------ | --------------------------------------------------- |
| groupId   | long    | 群号                                                |
| isDismiss | boolean | 是否解散（如果登录号是群主 此项为 `true` 时解散群聊 |

## 设置群组专属头衔

> bot.setGroupSpecialTitle()

**参数**

| 参数         | 类型   | 描述                               |
| ------------ | :----- | ---------------------------------- |
| groupId      | long   | 群号                               |
| userId       | long   | 目标用户                           |
| specialTitle | String | 专属头衔（空字符串表示删除群名片） |
| duration     | int    | 专属头衔有效期（`-1` 表示永久）    |

## 处理加好友请求

> bot.setFriendAddRequest()

**参数**

| 参数    | 类型    | 描述                   |
| ------- | :------ | ---------------------- |
| flag    | String  | 需从好友请求事件中获得 |
| approve | boolean | 是否同意好友请求       |
| remark  | String  | 添加后的好友备注       |

## 处理加群请求

> bot.setGroupAddRequest()

**参数**

| 参数    | 类型    | 描述                                           |
| ------- | :------ | ---------------------------------------------- |
| flag    | String  | 需从加群请求事件中获得                         |
| subType | String  | 请求类型（需要和事件中的 `sub_type` 字段相符） |
| approve | boolean | 是否同意好友请求                               |
| reason  | String  | 拒绝理由                                       |

## 获取登录号信息

> bot.getLoginInfo()

**返回值**

| 字段     | 类型   | 描述 |
| -------- | :----- | ---- |
| userId   | long   | 账号 |
| nickname | String | 昵称 |

## 获取陌生人信息

> bot.getStrangerInfo()

**参数**

| 参数    | 类型    | 描述         |
| ------- | :------ | ------------ |
| userId  | long    | 目标用户     |
| noCache | boolean | 是否禁用缓存 |

**返回值**

| 字段      | 类型   | 描述     |
| --------- | :----- | -------- |
| userId    | long   | 账号     |
| nickname  | String | 昵称     |
| sex       | String | 性别     |
| age       | int    | 年龄     |
| qid       | String | 身份卡   |
| level     | int    | 等级     |
| loginDays | int    | 在线天数 |

## 获取好友列表

> bot.getFriendList()

**返回值**

| 字段     | 类型                                              | 描述         |
| -------- | :------------------------------------------------ | ------------ |
| 直接返回 | List<[FriendInfoResp](types.html#FriendInfoResp)> | 好友信息列表 |

## 删除好友

> bot.deleteFriend()

**参数**

| 参数   | 类型 | 描述     |
| ------ | :--- | -------- |
| userId | long | 目标用户 |

## 获取群信息

> bot.getGroupInfo()

**参数**

| 参数    | 类型    | 描述     |
| ------- | :------ | -------- |
| groupId | long    | 群号     |
| noCache | boolean | 禁用缓存 |

## 获取群列表

> bot.getGroupList()

**返回值**

| 字段     | 类型                                            | 描述       |
| -------- | :---------------------------------------------- | ---------- |
| 直接返回 | List<[GroupInfoResp](types.html#GroupInfoResp)> | 群信息列表 |

## 获取群成员信息

> bot.getGroupMemberInfo()

## 获取群成员列表

> bot.getGroupMemberList()

## 获取群荣誉信息

> bot.getGroupHonorInfo()

## 检查是否可以发送图片

> bot.canSendImage()

**返回值**

| 字段 | 类型    | 描述         |
| ---- | :------ | ------------ |
| yes  | boolean | 是否支持发送 |

## 检查是否可以发送语音

> bot.canSendRecord()

**返回值**

| 字段 | 类型    | 描述         |
| ---- | :------ | ------------ |
| yes  | boolean | 是否支持发送 |

## 设置群头像

> bot.setGroupPortrait()

**参数**

| 参数    | 类型   | 描述                                                        |
| ------- | :----- | ----------------------------------------------------------- |
| groupId | long   | 群号                                                        |
| file    | String | 图片                                                        |
| cache   | int    | 是否使用缓存（图片为 `URL` 时有效 `1` 为使用缓存 `0` 反之） |

## 检查链接安全性

> bot.checkUrlSafely()

**参数**

| 参数 | 类型   | 描述 |
| ---- | :----- | ---- |
| url  | String | 链接 |

**返回值**

| 字段  | 类型 | 描述                       |
| ----- | :--- | -------------------------- |
| level | int  | `1` 安全 `2` 未知 `3` 危险 |

## 发送群公告

> bot.sendGroupNotice()

**参数**

| 参数    | 类型   | 描述     |
| ------- | :----- | -------- |
| groupId | long   | 群号     |
| content | String | 公告内容 |

## 获取群 @全体成员 剩余次数

> bot.getGroupAtAllRemain()

**参数**

| 参数    | 类型 | 描述 |
| ------- | :--- | ---- |
| groupId | long | 群号 |

**返回值**

| 字段                     | 类型    | 描述                              |
| ------------------------ | :------ | --------------------------------- |
| canAtAll                 | boolean | 是否可以 `@全体成员`              |
| remainAtAllCountForGroup | int     | 该群当天剩余 `@全体成员` 次数     |
| remainAtAllCountForUin   | int     | 登录账号当天剩余 `@全体成员` 次数 |

## 上传群文件

> bot.uploadGroupFile()

**参数**

| 参数    | 类型   | 描述         |
| ------- | :----- | ------------ |
| groupId | long   | 群号         |
| file    | String | 本地文件路径 |
| name    | String | 储存名称     |
| folder  | String | 父目录 ID    |

::: tip 提示
此方法包含一个重载，支持不传入 `folder` 参数，将默认上传到根目录
:::

## 群组匿名用户禁言

> bot.setGroupAnonymousBan()

## 发送合并转发（群）

> bot.sendGroupForwardMsg()

## 获取群根目录文件列表

> bot.getGroupRootFiles()

## 获取群子目录文件列表

> bot.getGroupFilesByFolder()

## 获取精华消息列表

> bot.getEssenceMsgList()

## 设置精华消息

> bot.setEssenceMsg()

## 移出精华消息

> bot.deleteEssenceMsg()

## 设置机器人账号资料

> bot.setBotProfile()

## 发送合并转发（私聊）

> bot.sendPrivateForwardMsg()

## 发送合并转发

> bot.sendForwardMsg()

## 获取中文分词

> bot.getWordSlices()

## 获取当前账号在线客户端列表

> bot.getOnlineClients()

## OCR

> bot.ocrImage()

## 私聊发送文件

> bot.uploadPrivateFile()

## 群打卡

> bot.sendGroupSign()

## 删除单向好友

> bot.deleteUnidirectionalFriend()

## 获取单向好友列表

> bot.getUnidirectionalFriendList()

## 获取群文件资源链接

> bot.getGroupFileUrl()

## 创建群文件文件夹

> bot.createGroupFileFolder()

## 删除群文件文件夹

> bot.deleteGroupFileFolder()

## 删除群文件

> bot.deleteGroupFile()

## 好友点赞

> bot.sendLike()

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

## 获取频道内 BOT 资料

> bot.getGuildServiceProfile()

## 获取频道列表

> bot.getGuildList()

## 通过访客获取频道元数据

> bot.getGuildMetaByGuest()

## 获取子频道列表

> bot.getGuildChannelList()

## 单独获取频道成员信息

> bot.getGuildMemberProfile()
