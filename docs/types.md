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
