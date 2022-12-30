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
| event      | AnyMessageEvent | 事件                                       |
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
| sender     | [Sender](types.html#sender) | 发送者信息   |
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
| 直接返回 | List<[FriendInfoResp](types.html#friendinforesp)> | 好友信息列表 |

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
| 直接返回 | List<[GroupInfoResp](types.html#groupinforesp)> | 群信息列表 |

## 获取群成员信息

> bot.getGroupMemberInfo()

**参数**

| 参数    | 类型    | 描述         |
| ------- | :------ | ------------ |
| groupId | long    | 群号         |
| userId  | long    | 目标用户     |
| noCache | boolean | 是否禁用缓存 |

**返回值**

| 字段     | 类型                                                  | 描述     |
| -------- | :---------------------------------------------------- | -------- |
| 直接返回 | [GroupMemberInfoResp](types.html#groupmemberinforesp) | 成员信息 |

## 获取群成员列表

> bot.getGroupMemberList()

**参数**

| 参数    | 类型 | 描述 |
| ------- | :--- | ---- |
| groupId | long | 群号 |

**返回值**

| 字段     | 类型                                                        | 描述         |
| -------- | :---------------------------------------------------------- | ------------ |
| 直接返回 | List<[GroupMemberInfoResp](types.html#groupmemberinforesp)> | 成员信息列表 |

## 获取群荣誉信息

> bot.getGroupHonorInfo()

**参数**

| 参数    | 类型   | 描述       |
| ------- | :----- | ---------- |
| groupId | long   | 群号       |
| type    | String | 群荣誉类型 |

**返回值**

| 字段             | 类型                                            | 描述                             |
| ---------------- | :---------------------------------------------- | -------------------------------- |
| groupId          | long                                            | 群号                             |
| currentTalkative | [CurrentTalkative](types.html#currenttalkative) | 当前龙王 `talkative` `all`       |
| talkativeList    | List<[OtherHonor](types.html#otherhonor)>       | 历史龙王 `talkative` `all`       |
| performerList    | List<[OtherHonor](types.html#otherhonor)>       | 群聊之火 `performer` `all`       |
| legendList       | List<[OtherHonor](types.html#otherhonor)>       | 群聊炽焰 `legend` `all`          |
| strongNewbieList | List<[OtherHonor](types.html#otherhonor)>       | 冒尖小春笋 `strong_newbie` `all` |
| emotionList      | List<[OtherHonor](types.html#otherhonor)>       | 快乐之源 `emotion` `all`         |

::: tip 提示
`type` 可传入 `talkative` `performer` `legend` `strong_newbie` `emotion` 以分别获取单个类型的群荣誉数据或传入 `all` 获取所有数据
:::

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

**参数**

| 参数      | 类型                              | 描述           |
| --------- | :-------------------------------- | -------------- |
| groupId   | long                              | 群号           |
| anonymous | [Anonymous](types.html#anonymous) | 匿名用户对象   |
| duration  | String                            | 禁言时长（秒） |

::: tip 提示
此方法包含一个重载，`anonymous` 参数变为 `flag` 需从群消息上报的数据中获得
:::

## 发送合并转发（群）

> bot.sendGroupForwardMsg()

**参数**

| 参数    | 类型                      | 描述                                   |
| ------- | :------------------------ | -------------------------------------- |
| groupId | long                      | 群号                                   |
| msg     | List<Map<String, Object>> | [构建合并转发](advanced.html#合并转发) |

**返回值**

| 字段      | 类型 | 描述    |
| --------- | :--- | ------- |
| messageId | int  | 消息 ID |

## 获取群根目录文件列表

> bot.getGroupRootFiles()

**参数**

| 参数    | 类型 | 描述 |
| ------- | :--- | ---- |
| groupId | long | 群号 |

**返回值**

| 字段    | 类型                                | 描述         |
| ------- | :---------------------------------- | ------------ |
| files   | List<[Files](types.html#files)>     | 群文件列表   |
| folders | List<[Folders](types.html#folders)> | 群文件夹列表 |

## 获取群子目录文件列表

> bot.getGroupFilesByFolder()

**参数**

| 参数     | 类型   | 描述      |
| -------- | :----- | --------- |
| groupId  | long   | 群号      |
| folderId | String | 文件夹 ID |

**返回值**

| 字段    | 类型                                | 描述         |
| ------- | :---------------------------------- | ------------ |
| files   | List<[Files](types.html#files)>     | 群文件列表   |
| folders | List<[Folders](types.html#folders)> | 群文件夹列表 |

## 获取精华消息列表

> bot.getEssenceMsgList()

**参数**

| 参数    | 类型 | 描述 |
| ------- | :--- | ---- |
| groupId | long | 群号 |

**返回值**

| 字段     | 类型                                              | 描述         |
| -------- | :------------------------------------------------ | ------------ |
| 直接返回 | List<[EssenceMsgResp](types.html#essencemsgresp)> | 精华消息列表 |

## 设置精华消息

> bot.setEssenceMsg()

**参数**

| 参数  | 类型 | 描述    |
| ----- | :--- | ------- |
| msgId | int  | 消息 ID |

## 移出精华消息

> bot.deleteEssenceMsg()

**参数**

| 参数  | 类型 | 描述    |
| ----- | :--- | ------- |
| msgId | int  | 消息 ID |

## 设置机器人账号资料

> bot.setBotProfile()

**参数**

| 参数         | 类型   | 描述     |
| ------------ | :----- | -------- |
| nickname     | String | 昵称     |
| company      | String | 公司     |
| email        | String | 邮箱     |
| college      | String | 学校     |
| personalNote | String | 个性签名 |

## 发送合并转发（私聊）

> bot.sendPrivateForwardMsg()

**参数**

| 参数   | 类型                      | 描述                                   |
| ------ | :------------------------ | -------------------------------------- |
| userId | long                      | 目标用户                               |
| msg    | List<Map<String, Object>> | [构建合并转发](advanced.html#合并转发) |

**返回值**

| 字段      | 类型 | 描述    |
| --------- | :--- | ------- |
| messageId | int  | 消息 ID |

## 发送合并转发

> bot.sendForwardMsg()

**参数**

| 参数  | 类型                      | 描述                                   |
| ----- | :------------------------ | -------------------------------------- |
| event | AnyMessageEvent           | 事件                                   |
| msg   | List<Map<String, Object>> | [构建合并转发](advanced.html#合并转发) |

**返回值**

| 字段      | 类型 | 描述    |
| --------- | :--- | ------- |
| messageId | int  | 消息 ID |

## 获取中文分词

> bot.getWordSlices()

**参数**

| 参数    | 类型   | 描述 |
| ------- | :----- | ---- |
| content | String | 内容 |

**返回值**

| 字段   | 类型          | 描述 |
| ------ | :------------ | ---- |
| slices | List<String\> | 切片 |

## 获取当前账号在线客户端列表

> bot.getOnlineClients()

**返回值**

| 字段    | 类型                                | 描述 |
| ------- | :---------------------------------- | ---- |
| clients | List<[Clients](types.html#clients)> | 切片 |

## OCR

> bot.ocrImage()

**参数**

| 参数  | 类型   | 描述 |
| ----- | :----- | ---- |
| image | String | 图片 |

**返回值**

| 字段     | 类型                                            | 描述     |
| -------- | :---------------------------------------------- | -------- |
| texts    | List<[TextDetection](types.html#textdetection)> | OCR 结果 |
| language | String                                          | 语言     |

## 私聊发送文件

> bot.uploadPrivateFile()

**参数**

| 参数   | 类型   | 描述         |
| ------ | :----- | ------------ |
| userId | long   | 目标用户     |
| file   | String | 本地文件路径 |
| name   | String | 文件名       |

## 群打卡

> bot.sendGroupSign()

**参数**

| 参数    | 类型 | 描述 |
| ------- | :--- | ---- |
| groupId | long | 群号 |

## 删除单向好友

> bot.deleteUnidirectionalFriend()

**参数**

| 参数   | 类型 | 描述     |
| ------ | :--- | -------- |
| userId | long | 目标用户 |

## 获取单向好友列表

> bot.getUnidirectionalFriendList()

**参数**

| 参数     | 类型                                                                          | 描述     |
| -------- | :---------------------------------------------------------------------------- | -------- |
| 直接返回 | List<[UnidirectionalFriendListResp](types.html#UnidirectionalFriendListResp)> | 好友列表 |

## 获取群文件资源链接

> bot.getGroupFileUrl()

**参数**

| 参数    | 类型   | 描述     |
| ------- | :----- | -------- |
| groupId | long   | 群号     |
| fileId  | String | 文件 ID  |
| busId   | int    | 文件类型 |

**返回值**
| 字段 | 类型 | 描述 |
| ------ | :--- | ---- |
| url | String | 链接 |

## 创建群文件文件夹

> bot.createGroupFileFolder()

**参数**

| 参数       | 类型   | 描述       |
| ---------- | :----- | ---------- |
| groupId    | long   | 群号       |
| folderName | String | 文件夹名称 |

## 删除群文件文件夹

> bot.deleteGroupFileFolder()

**参数**

| 参数       | 类型   | 描述       |
| ---------- | :----- | ---------- |
| groupId    | long   | 群号       |
| folderName | String | 文件夹名称 |

## 删除群文件

> bot.deleteGroupFile()

**参数**

| 参数    | 类型   | 描述       |
| ------- | :----- | ---------- |
| groupId | long   | 群号       |
| fileId  | String | 文件夹名称 |
| busid   | int    | 文件类型   |

## 好友点赞

> bot.sendLike()

**参数**

| 参数   | 类型 | 描述     |
| ------ | :--- | -------- |
| userId | long | 目标用户 |
| times  | int  | 点赞次数 |

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
| members   | List<[GuildMemberInfo](types.html#guildmemberinfo)> | 成员信息列表 |
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

**返回值**

| 字段      | 类型   | 描述     |
| --------- | :----- | -------- |
| nickname  | String | 昵称     |
| tinyId    | String | 自身 ID  |
| avatarUrl | String | 头像链接 |

## 获取频道列表

> bot.getGuildList()

**返回值**

| 字段     | 类型                                            | 描述     |
| -------- | :---------------------------------------------- | -------- |
| 直接返回 | List<[GuildListResp](types.html#guildlistresp)> | 频道列表 |

## 通过访客获取频道元数据

> bot.getGuildMetaByGuest()

**参数**

| 参数    | 类型   | 描述    |
| ------- | :----- | ------- |
| guildId | String | 频道 ID |

**返回值**

| 字段           | 类型   | 描述               |
| -------------- | :----- | ------------------ |
| guildId        | String | 频道 ID            |
| guildName      | String | 频道名称           |
| guildProfile   | String | 频道简介           |
| createTime     | long   | 创建时间           |
| maxMemberCount | long   | 频道人数上限       |
| maxRobotCount  | long   | 频道 BOT 数上限    |
| maxAdminCount  | long   | 频道管理员人数上限 |
| memberCount    | long   | 已加入人数         |
| ownerId        | String | 创建者 ID          |

## 获取子频道列表

> bot.getGuildChannelList()

**参数**

| 参数    | 类型   | 描述         |
| ------- | :----- | ------------ |
| guildId | String | 频道 ID      |
| noCache | String | 是否禁用缓存 |

**返回值**

| 字段            | 类型                                          | 描述                       |
| --------------- | :-------------------------------------------- | -------------------------- |
| ownerGuildId    | String                                        | 所属频道 ID                |
| channelId       | String                                        | 子频道 ID                  |
| channelType     | int                                           | 子频道类型                 |
| channelName     | String                                        | 子频道名称                 |
| createTime      | long                                          | 创建时间                   |
| creatorTinyId   | String                                        | 创建者 ID                  |
| talkPermission  | int                                           | 发言权限类型               |
| visibleType     | int                                           | 可视性类型                 |
| currentSlowMode | int                                           | 当前启用的慢速模式 Key     |
| slowModes       | List<[SlowModeInfo](types.html#slowmodeinfo)> | 频道内可用慢速模式类型列表 |

## 单独获取频道成员信息

> bot.getGuildMemberProfile()

**参数**

| 参数    | 类型   | 描述     |
| ------- | :----- | -------- |
| guildId | String | 频道 ID  |
| userId  | String | 目标用户 |

**返回值**

| 字段      | 类型                                  | 描述             |
| --------- | :------------------------------------ | ---------------- |
| tinyId    | String                                | 用户 ID          |
| nickname  | String                                | 用户昵称         |
| avatarUrl | String                                | 头像地址         |
| joinTime  | long                                  | 加入时间         |
| roles     | List<[RoleInfo](types.html#roleinfo)> | 加入的所有权限组 |
