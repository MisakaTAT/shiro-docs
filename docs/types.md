# 类型

## GuildMemberInfo

| 字段     | 类型   | 描述           |
| -------- | :----- | -------------- |
| tinyId   | String | 成员 ID        |
| nickname | String | 成员昵称       |
| title    | String | 成员头衔       |
| roleId   | String | 所在权限组 ID  |
| roleName | String | 所在权限组名称 |

> 默认情况下频道管理员的权限组 ID 为 2，部分频道可能会另行创建，需自行判断，此方法仅展现最新的权限组，获取用户加入的所有权限组请调用 `bot.getGuildMemberProfile`

## Sender

| 字段     | 类型   | 描述       |
| -------- | :----- | ---------- |
| nickname | String | 发送者昵称 |
| userId   | long   | 发送者     |

## GuildSender

| 字段     | 类型   | 描述       |
| -------- | :----- | ---------- |
| nickname | String | 发送者昵称 |
| tinyId   | String | 发送者 ID  |
| userId   | long   | 发送者 ID  |

## FriendInfoResp

| 字段     | 类型   | 描述 |
| -------- | :----- | ---- |
| nickname | String | 昵称 |
| remark   | String | 备注 |
| userId   | long   | 账号 |

## GroupInfoResp

| 字段            | 类型   | 描述                 |
| --------------- | :----- | -------------------- |
| groupId         | long   | 群号                 |
| groupName       | String | 群名                 |
| groupMemo       | String | 群备注               |
| groupCreateTime | int    | 创建时间             |
| groupLevel      | int    | 群等级               |
| memberCount     | int    | 成员数               |
| maxMemberCount  | int    | 最大成员数（群容量） |

## Anonymous

| 字段 | 类型   | 描述 |
| ---- | :----- | ---- |
| id   | long   |      |
| name | String |      |
| flag | String |      |

## Clients

| 字段       | 类型   | 描述      |
| ---------- | :----- | --------- |
| appId      | long   | 客户端 ID |
| deviceName | String | 设备名称  |
| deviceKind | String | 设备类型  |

## TextDetection

| 字段        | 类型    | 描述   |
| ----------- | :------ | ------ |
| text        | String  | 文本   |
| confidence  | int     | 置信度 |
| coordinates | int[][] | 坐标   |

## UnidirectionalFriendListResp

| 字段     | 类型   | 描述     |
| -------- | :----- | -------- |
| userId   | long   | 目标用户 |
| nickname | String | 昵称     |
| source   | String | 来源     |

## EssenceMsgResp

| 字段         | 类型   | 描述         |
| ------------ | :----- | ------------ |
| senderId     | long   | 发送者       |
| senderNick   | String | 发送者昵称   |
| senderTime   | long   | 消息发送时间 |
| operatorId   | long   | 操作者       |
| operatorNick | String | 操作者昵称   |
| operatorTime | long   | 精华设置时间 |
| messageId    | int    | 消息 ID      |

## Files

| 字段          | 类型   | 描述       |
| ------------- | :----- | ---------- |
| fileId        | String | 文件 ID    |
| fileName      | String | 文件名     |
| busId         | int    | 文件类型   |
| fileSize      | long   | 文件大小   |
| uploadTime    | long   | 上传时间   |
| deadTime      | long   | 过期时间   |
| modifyTime    | long   | 修改时间   |
| downloadTimes | int    | 下载次数   |
| uploader      | long   | 上传者账号 |
| uploaderName  | String | 上传者名称 |

## Folders

| 字段           | 类型   | 描述       |
| -------------- | :----- | ---------- |
| folderId       | String | 文件夹 ID  |
| folderName     | String | 文件夹名称 |
| createTime     | long   | 创建时间   |
| creator        | long   | 创建者账号 |
| creatorName    | String | 创建者名称 |
| totalFileCount | int    | 文件总数   |

## GroupMemberInfoResp

| 字段            | 类型    | 描述               |
| --------------- | :------ | ------------------ |
| groupId         | long    | 群号               |
| userId          | long    | 目标用户           |
| nickname        | String  | 昵称               |
| card            | String  | 群名片             |
| sex             | String  | 性别               |
| age             | int     | 年龄               |
| area            | String  | 地区               |
| joinTime        | int     | 加群时间戳         |
| lastSentTime    | int     | 最后发言时间戳     |
| level           | String  | 成员等级           |
| role            | String  | 角色               |
| unfriendly      | boolean | 是否不良记录成员   |
| title           | String  | 专属头衔           |
| titleExpireTime | long    | 专属头衔过期时间戳 |
| cardChangeable  | boolean | 是否允许修改群名片 |

## OtherHonor

| 字段        | 类型   | 描述     |
| ----------- | :----- | -------- |
| userId      | long   | 目标用户 |
| nickname    | String | 昵称     |
| avatar      | String | 头像     |
| description | String | 荣誉描述 |

## CurrentTalkative

| 字段     | 类型   | 描述     |
| -------- | :----- | -------- |
| userId   | long   | 目标用户 |
| nickname | String | 昵称     |
| avatar   | String | 头像     |
| dayCount | int    | 持续天数 |

## GuildListResp

| 字段           | 类型   | 描述        |
| -------------- | :----- | ----------- |
| guildId        | String | 频道 ID     |
| guildName      | String | 频道名称    |
| guildDisplayId | String | 频道显示 ID |

## SlowModeInfo

| 字段           | 类型   | 描述               |
| -------------- | :----- | ------------------ |
| slowModeKey    | int    | 慢速模式 Key       |
| slowModeText   | String | 慢速模式说明       |
| speakFrequency | int    | 周期内发言频率限制 |
| slowModeCircle | int    | 单位周期时间（秒） |

## RoleInfo

| 字段     | 类型   | 描述       |
| -------- | :----- | ---------- |
| roleId   | String | 权限组 ID  |
| roleName | String | 权限组名称 |
