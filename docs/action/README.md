# Action

::: warning 提示
Action 所有的方法均由 `com.mikuac.shiro.core.Bot` 类提供
:::

## 发送私聊消息

**方法**

```java
sendPrivateMsg(long userId, String msg, boolean autoEscape)
```

**参数**

| 字段名         | 数据类型  | 默认值   | 说明                                                                   |
| ------------- | ------- | ------- | ---------------------------------------------------------------------- |
| `userId`     | long    | -       | 对方 QQ 号                                                              |
| `msg`         | string  | -       | 要发送的内容                                                             |
| `autoEscape`  | boolean | `false` | 消息内容是否作为纯文本发送 ( 即不解析 CQ 码 ) , 只在 `msg` 字段是字符串时有效 |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `messageId` | int | 消息 ID |

## 发送群消息

**方法**

```java
sendGroupMsg(long groupId, String msg, boolean autoEscape)
```

**参数**

| 字段名         | 数据类型  | 默认值   | 说明                                                                   |
| ------------- | ------- | ------- | ---------------------------------------------------------------------- |
| `groupId`     | long    | -       | 群号                                                              |
| `msg`         | string  | -       | 要发送的内容                                                             |
| `autoEscape`  | boolean | `false` | 消息内容是否作为纯文本发送 ( 即不解析 CQ 码 ) , 只在 `msg` 字段是字符串时有效 |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `messageId` | int | 消息 ID |

## 发送合并转发 ( 群 )

**方法**

```java
sendGroupForwardMsg(long groupId, JSONArray msg)
```

**参数**

| 字段       | 类型           | 说明                          |
| ---------- | -------------- | ----------------------------- |
| `groupId` | long          | 群号                          |
| `messages` | forward node[] | 自定义转发消息, 具体看 [CQcode](https://docs.go-cqhttp.org/cqcode/#%E5%90%88%E5%B9%B6%E8%BD%AC%E5%8F%91%E6%B6%88%E6%81%AF%E8%8A%82%E7%82%B9) |


## 获取消息

**方法**

```java
getMsg(int msgId)
```

**参数**

| 字段         | 类型  | 说明   |
| ------------ | ----- | ------ |
| `msgId` | int | 消息id |

**响应数据**

| 字段          | 类型     | 说明       |
| ------------ | -------- | ---------- |
| `messageId` | int     | 消息id     |
| `realId`    | int     | 消息真实id  |
| `sender`     | object | 发送者     |
| `time`       | int    | 发送时间    |
| `message`    | string | 消息内容    |
| `rawMessage`| string  | 原始消息内容 |

## 撤回消息

**方法**

```java
deleteMsg(int msgId)
```

**参数**

| 字段名         | 数据类型  | 默认值   | 说明                                                                   |
| ------------- | ------- | ------- | ---------------------------------------------------------------------- |
| `msgId` | int | 消息 ID |

::: tip 提示
该 API 无响应数据
:::

## 群组踢人

**方法**

```java
setGroupKick(long groupId, long userId, boolean rejectAddRequest)
```

**参数**

| 字段名         | 数据类型  | 默认值   | 说明                                                                   |
| ------------- | ------- | ------- | ---------------------------------------------------------------------- |
| `groupId` | long |- | 群号|
| `userId` | long |- | 要踢的 QQ 号|
| `rejectAddRequest`|boolean | `false` | 拒绝此人的加群请求 |

::: tip 提示
该 API 无响应数据
:::

## 群组单人禁言

**方法**

```java
setGroupBan(long groupId, long userId, int duration)
```

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `groupId` | long | - | 群号 |
| `userId` | long | - | 要禁言的 QQ 号 |
| `duration` | int | `30 * 60` | 禁言时长, 单位秒, 0 表示取消禁言 |

::: tip 提示
该 API 无响应数据
:::

## 群组全体禁言

**方法**

```java
setGroupWholeBan(long groupId, boolean enable)
```

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `groupId` | long | - | 群号 |
| `enable` | boolean | `true` | 是否禁言 |

::: tip 提示
该 API 无响应数据
:::

## 群组设置管理员

**方法**

```java
setGroupAdmin(long groupId, long userId, boolean enable)
```

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `groupId` | long | - | 群号 |
| `userId` | long | - | 要设置管理员的 QQ 号 |
| `enable` | boolean | `true` | true 为设置, false 为取消 |

::: tip 提示
该 API 无响应数据
:::

## 设置群名片 ( 群备注 )

**方法**

```java
setGroupCard(long groupId, long userId, String card)
```

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `groupId` | long | - | 群号 |
| `userId` | long | - | 要设置的 QQ 号 |
| `card` | string | 空 | 群名片内容, 不填或空字符串表示删除群名片 |

::: tip 提示
该 API 无响应数据
:::

## 设置群名

**方法**

```java
setGroupName(long groupId, String groupName)
```

**参数**

| 字段名   | 数据类型 | 说明 |
| -------- | ------ | ---- |
| `groupId` | long | 群号 |
| `groupName` | string | 新群名 |

::: tip 提示
该 API 无响应数据
:::

## 退出群组

**方法**

```java
setGroupLeave(long groupId, boolean isDismiss)
```

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `groupId` | long | - | 群号 |
| `isDismiss` | boolean | `false` | 是否解散, 如果登录号是群主, 则仅在此项为 true 时能够解散 |

::: tip 提示
该 API 无响应数据
:::

## 设置群组专属头衔

**方法**

```java
setGroupSpecialTitle(long groupId, long userId, String specialTitle, int duration)
```

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `groupId` | long | - | 群号 |
| `userId` | long | - | 要设置的 QQ 号 |
| `specialTitle` | string | 空 | 专属头衔, 不填或空字符串表示删除专属头衔 |
| `duration` | int | `-1` | 专属头衔有效期, 单位秒, -1 表示永久, 不过此项似乎没有效果, 可能是只有某些特殊的时间长度有效, 有待测试 |

::: tip 提示
该 API 无响应数据
:::

## 处理加好友请求

**方法**

```java
setFriendAddRequest(String flag, boolean approve, String remark)
```

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `flag` | string | - | 加好友请求的 flag（需从上报的数据中获得） |
| `approve` | boolean | `true` | 是否同意请求 |
| `remark` | string | 空 | 添加后的好友备注（仅在同意时有效） |

::: tip 提示
该 API 无响应数据
:::

## 处理加群请求／邀请

**方法**

```java
setGroupAddRequest(String flag, String subType, boolean approve, String reason)
```

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `flag` | string | - | 加群请求的 flag（需从上报的数据中获得） |
| `subType` | string | - | `add` 或 `invite`, 请求类型（需要和上报消息中的 `subType` 字段相符） |
| `approve` | boolean | `true` | 是否同意请求／邀请 |
| `reason` | string | 空 | 拒绝理由（仅在拒绝时有效） |

::: tip 提示
该 API 无响应数据
:::

## 获取登录号信息

**方法**

```java
getLoginInfo()
```

::: tip 提示
该 API 无需参数
:::

## 获取陌生人信息

**方法**

```java
getStrangerInfo(long userId, boolean noCache)
```

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `userId` | long | - | QQ 号 |
| `noCache` | boolean | `false` | 是否不使用缓存（使用缓存可能更新不及时, 但响应更快） |

## 获取好友列表

**方法**

```java
getFriendList()
```

::: tip 提示
该 API 无需参数
:::

**响应数据**

响应内容为 `ActionList<FriendInfoResp>` 每个元素字段如下

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `userId` | long | QQ 号 |
| `nickname` | string | 昵称 |
| `remark` | string | 备注名 |

## 删除好友

**方法**

```java
deleteFriend(long friendId)
```

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `friendId` | long | - | 好友 QQ 号 |

::: tip 提示
该 API 无响应数据
:::

## 获取群信息

**方法**

```java
getGroupInfo(long groupId, boolean noCache) 
```

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `groupId` | long | - | 群号 |
| `noCache` | boolean | `false` | 是否不使用缓存（使用缓存可能更新不及时, 但响应更快） |

**响应数据**

::: tip 提示
如果机器人尚未加入群, `group_create_time`, `group_level`, `max_member_count` 和 `member_count` 将会为0
:::

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `group_id` | long | 群号 |
| `group_name` | string | 群名称 |
| `group_memo` | string | 群备注 |
| `group_create_time` | int | 群创建时间 |
| `group_level` | int | 群等级 |
| `member_count` | int | 成员数 |
| `max_member_count` | int | 最大成员数（群容量） |

## 获取群列表

**方法**

```java
getGroupList()
```

::: tip 提示
该 API 无需参数
:::

**响应数据**

响应内容为数组, 每个元素和上面的 `getGroupInfo` 接口相同。

## 获取群成员信息

**方法**

```java
getGroupMemberInfo(long groupId, long userId, boolean noCache)
```
**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `groupId` | long | - | 群号 |
| `userId`  | long | - | QQ 号 |
| `noCache` | boolean | `false` | 是否不使用缓存（使用缓存可能更新不及时, 但响应更快） |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `groupId` | long | 群号 |
| `userId` | long | QQ 号 |
| `nickname` | string | 昵称 |
| `card` | string | 群名片／备注 |
| `sex` | string | 性别, `male` 或 `female` 或 `unknown` |
| `age` | int | 年龄 |
| `area` | string | 地区 |
| `joinTime` | int | 加群时间戳 |
| `lastSentTime` | int | 最后发言时间戳 |
| `level` | string | 成员等级 |
| `role` | string | 角色, `owner` 或 `admin` 或 `member` |
| `unfriendly` | boolean | 是否不良记录成员 |
| `title` | string | 专属头衔 |
| `titleExpireTime` | long | 专属头衔过期时间戳 |
| `cardChangeable` | boolean | 是否允许修改群名片 |



## 获取群成员列表

**方法**

```java
getGroupMemberList(long groupId)
```

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `groupId` | long | - | 群号 |

**响应数据**

响应内容为数组, 每个元素的内容和上面的 `getGroupMemberInfo` 接口相同, 但对于同一个群组的同一个成员, 获取列表时和获取单独的成员信息时, 某些字段可能有所不同, 例如 `area`、`title` 等字段在获取列表时无法获得, 具体应以单独的成员信息为准。

## 获取群荣誉信息

**方法**

```java
getGroupHonorInfo(long groupId, String type)
```

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `groupId` | long | - | 群号 |
| `type` | string | - | 要获取的群荣誉类型, 可传入 `talkative` `performer` `legend` `strong_newbie` `emotion` 以分别获取单个类型的群荣誉数据, 或传入 `all` 获取所有数据 |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `groupId` | long | 群号 |
| `currentTalkative` | object | 当前龙王, 仅 `type` 为 `talkative` 或 `all` 时有数据 |
| `talkativeList` | array | 历史龙王, 仅 `type` 为 `talkative` 或 `all` 时有数据 |
| `performerList` | array | 群聊之火, 仅 `type` 为 `performer` 或 `all` 时有数据 |
| `legendList` | array | 群聊炽焰, 仅 `type` 为 `legend` 或 `all` 时有数据 |
| `strongNewbieList` | array | 冒尖小春笋, 仅 `type` 为 `strong_newbie` 或 `all` 时有数据 |
| `emotionList` | array | 快乐之源, 仅 `type` 为 `emotion` 或 `all` 时有数据 |

其中 `currentTalkative` 字段的内容如下：

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `userId` | long | QQ 号 |
| `nickname` | string | 昵称 |
| `avatar` | string | 头像 URL |
| `dayCount` | int | 持续天数 |

其它各 `*_list` 的每个元素是一个 json 对象, 内容如下：

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `userId` | long | QQ 号 |
| `nickname` | string | 昵称 |
| `avatar` | string | 头像 URL |
| `description` | string | 荣誉描述 |

## 检查是否可以发送图片

**方法**

```java
canSendImage()
```

::: tip 提示
该 API 无需参数
:::

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `yes` | boolean | 是或否 |

## 检查是否可以发送语音

**方法**

```java
canSendRecord()
```

::: tip 提示
该 API 无需参数
:::

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `yes` | boolean | 是或否 |

## 设置群头像

**方法**

```java
setGroupPortrait(long groupId, String file, int cache)
```

**参数**

| 字段       | 类型   | 说明                     |
| ---------- | ------ | ------------------------ |
| `groupId` | long  | 群号                     |
| `file`     | string | 图片文件名               |
| `cache`    | int    | 表示是否使用已缓存的文件 |

[1] `file` **参数**支持以下几种格式：

- 绝对路径, 例如 `file:///C:\\Users\Richard\Pictures\1.png`, 格式使用 [`file` URI](https://tools.ietf.org/html/rfc8089)
- 网络 URL, 例如 `http://i1.piimg.com/567571/fdd6e7b6d93f1ef0.jpg`
- Base64 编码, 例如 `base64://iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAIAAADJt1n/AAAAKElEQVQ4EWPk5+RmIBcwkasRpG9UM4mhNxpgowFGMARGEwnBIEJVAAAdBgBNAZf+QAAAAABJRU5ErkJggg==`

[2] `cache`**参数**: 通过网络 URL 发送时有效, `1`表示使用缓存, `0`关闭关闭缓存, 默认 为`1`

[3] 目前这个API在登录一段时间后因cookie失效而失效, 请考虑后使用

## 检查链接安全性

**方法**

```java
checkUrlSafely(String url)
```

**参数**

| 字段       | 类型   | 说明                      |
| ---------- | ------ | ------------------------- |
| `url` | string  | 需要检查的链接  |

**响应数据**

| 字段        | 类型       | 说明            |
| ---------- | ---------- | ------------ |
| `level`    | int       |  安全等级, 1: 安全 2: 未知 3: 危险  |

## 发送群公告

**方法**

```java
sendGroupNotice(long groupId, String content)
```

**参数**

| 字段名      | 数据类型  | 默认值 | 说明    |
| ---------- | ------- | ----- | ------ |
| `groupId  ` | long   |       | 群号    |
| `content`  | string  |       | 公告内容 |

::: tip 提示
该 API 没有响应数据
:::

## 获取群 @全体成员 剩余次数

**方法**

```java
getGroupAtAllRemain(long groupId)
```

**参数**

| 字段       | 类型   | 说明                      |
| ---------- | ------ | ------------------------- |
| `groupId` | long  | 群号                      |

**响应数据**

| 字段                             | 类型       | 说明                            |
| ------------------------------- | ---------- | ------------------------------- |
| `canAtAll`                    | boolean       | 是否可以 @全体成员               |
| `remainAtAllCountForGroup` | int      | 群内所有管理当天剩余 @全体成员 次数 |
| `remainAtAllCountForUin`   | int      | Bot 当天剩余 @全体成员 次数      |

## 上传群文件

**方法**

```java
uploadGroupFile(long groupId, String file, String name)
```

```java
uploadGroupFile(long groupId, String file, String name, String folder)
```

**参数**

| 字段       | 类型   | 说明                      |
| ---------- | ------ | ------------------------- |
| `groupId` | long  | 群号                      |
| `file`     | string |  本地文件路径       |
| `name`     | string | 储存名称         |
| `folder`   | string | 父目录ID           |

::: warning 注意
在不提供 `folder` 参数的情况下默认上传到根目录

只能上传本地文件, 需要上传 `http` 文件的话请先调用 [`download_file` API](#下载文件到缓存目录)下载
:::

## 群组匿名用户禁言

**方法**

```java
setGroupAnonymousBan(long groupId, Anonymous anonymous, boolean duration)
```

```java
setGroupAnonymousBan(long groupId, String flag, boolean duration)
```

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `groupId` | long | - | 群号 |
| `anonymous` | object | - | 可选, 要禁言的匿名用户对象（群消息上报的 `anonymous` 字段） |
| `anonymous_flag` 或 `flag` | string | - | 可选, 要禁言的匿名用户的 flag（需从群消息上报的数据中获得） |
| `duration` | number | `30 * 60` | 禁言时长, 单位秒, 无法取消匿名用户禁言 |

::: tip 提示
上面的 `anonymous` 和 `anonymous_flag` 两者任选其一传入即可, 若都传入, 则使用 `anonymous`。
:::

::: tip 提示
该 API 无响应数据
:::

## 调用 go-cqhttp 下载文件

**方法**

```java
downloadFile(String url)
```

```java
downloadFile(String url, int threadCount, String headers)
```

**参数**

| 字段       | 类型   | 说明                      |
| ---------- | ------ | ------------------------- |
| `url` | string  | 链接地址                      |
| `threadCount` | int  | 下载线程数            |
| `headers` | string or array  | 自定义请求头    |

**`headers`格式:**

字符串:

```
User-Agent=YOUR_UA[\r\n]Referer=https://www.baidu.com
```

::: tip 提示
`[\r\n]` 为换行符, 使用http请求时请注意编码
:::

JSON数组:

```json
[
    "User-Agent=YOUR_UA",
    "Referer=https://www.baidu.com"
]
```

**响应数据**

| 字段        | 类型       | 说明            |
| ---------- | ---------- | ------------ |
| `file`    | string       |  下载文件的*绝对路径*        |

::: tip 提示
通过这个API下载的文件能直接放入CQ码作为图片或语音发送

调用后会阻塞直到下载完成后才会返回数据，请注意下载大文件时的超时
:::