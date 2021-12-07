"use strict";(self.webpackChunkshiro_docs=self.webpackChunkshiro_docs||[]).push([[293],{902:(t,d,n)=>{n.r(d),n.d(d,{data:()=>e});const e={key:"v-7ca4f50e",path:"/event/",title:"Event",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"序",slug:"序",children:[]},{level:2,title:"私聊消息",slug:"私聊消息",children:[]},{level:2,title:"群消息",slug:"群消息",children:[]},{level:2,title:"群文件上传",slug:"群文件上传",children:[]},{level:2,title:"群管理员变动",slug:"群管理员变动",children:[]},{level:2,title:"群成员减少",slug:"群成员减少",children:[]},{level:2,title:"群成员增加",slug:"群成员增加",children:[]},{level:2,title:"群禁言",slug:"群禁言",children:[]},{level:2,title:"好友添加",slug:"好友添加",children:[]},{level:2,title:"群消息撤回",slug:"群消息撤回",children:[]},{level:2,title:"好友消息撤回",slug:"好友消息撤回",children:[]},{level:2,title:"好友戳一戳",slug:"好友戳一戳",children:[]},{level:2,title:"群内戳一戳",slug:"群内戳一戳",children:[]},{level:2,title:"群红包运气王提示",slug:"群红包运气王提示",children:[]},{level:2,title:"群成员荣誉变更提示",slug:"群成员荣誉变更提示",children:[]},{level:2,title:"群成员名片更新",slug:"群成员名片更新",children:[]},{level:2,title:"接收到离线文件",slug:"接收到离线文件",children:[]},{level:2,title:"加好友请求",slug:"加好友请求",children:[]},{level:2,title:"加群请求／邀请",slug:"加群请求-邀请",children:[]}],filePathRelative:"event/README.md",git:{updatedTime:1638859106e3,contributors:[{name:"MisakaTAT",email:"i@mikuac.com",commits:1}]}}},562:(t,d,n)=>{n.r(d),n.d(d,{default:()=>a});const e=(0,n(252).uE)('<h1 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> Event</h1><h2 id="序" tabindex="-1"><a class="header-anchor" href="#序" aria-hidden="true">#</a> 序</h2><div class="custom-container warning"><p class="custom-container-title">提示</p><p>Event 所有的方法均由 <code>com.mikuac.shiro.core.BotPlugin</code> 类提供</p></div><h2 id="私聊消息" tabindex="-1"><a class="header-anchor" href="#私聊消息" aria-hidden="true">#</a> 私聊消息</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">onPrivateMessage</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Bot</span> bot<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">PrivateMessageEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> MESSAGE_IGNORE<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>事件数据</strong></p><table><thead><tr><th>字段名</th><th>数据类型</th><th>可能的值</th><th>说明</th></tr></thead><tbody><tr><td><code>time</code></td><td>int64</td><td>-</td><td>事件发生的时间戳</td></tr><tr><td><code>selfId</code></td><td>int64</td><td>-</td><td>收到事件的机器人 QQ 号</td></tr><tr><td><code>postType</code></td><td>string</td><td><code>message</code></td><td>上报类型</td></tr><tr><td><code>messageType</code></td><td>string</td><td><code>private</code></td><td>消息类型</td></tr><tr><td><code>subType</code></td><td>string</td><td><code>friend</code>、<code>group</code>、<code>group_self</code>、<code>other</code></td><td>消息子类型, 如果是好友则是 <code>friend</code>, 如果是群临时会话则是 <code>group</code>, 如果是在群中自身发送则是 <code>group_self</code></td></tr><tr><td><code>tempSource</code></td><td>int</td><td>-</td><td>临时会话来源</td></tr><tr><td><code>messageId</code></td><td>int32</td><td>-</td><td>消息 ID</td></tr><tr><td><code>userId</code></td><td>int64</td><td>-</td><td>发送者 QQ 号</td></tr><tr><td><code>message</code></td><td>message</td><td>-</td><td>消息内容</td></tr><tr><td><code>rawMessage</code></td><td>string</td><td>-</td><td>原始消息内容</td></tr><tr><td><code>font</code></td><td>int32</td><td>-</td><td>字体</td></tr><tr><td><code>sender</code></td><td>object</td><td>-</td><td>发送人信息</td></tr></tbody></table><p>其中 <code>sender</code> 字段的内容如下：</p><table><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>userId</code></td><td>int64</td><td>发送者 QQ 号</td></tr><tr><td><code>nickname</code></td><td>string</td><td>昵称</td></tr><tr><td><code>sex</code></td><td>string</td><td>性别, <code>male</code> 或 <code>female</code> 或 <code>unknown</code></td></tr><tr><td><code>age</code></td><td>int32</td><td>年龄</td></tr></tbody></table><p>需要注意的是, <code>sender</code> 中的各字段是尽最大努力提供的, 也就是说, 不保证每个字段都一定存在, 也不保证存在的字段都是完全正确的 ( 缓存可能过期 ) 。</p><p>其中 <code>tempSource</code> 的类型如下：</p><table><thead><tr><th>类型</th><th>来源</th></tr></thead><tbody><tr><td>0</td><td>群聊</td></tr><tr><td>1</td><td>QQ咨询</td></tr><tr><td>2</td><td>查找</td></tr><tr><td>3</td><td>QQ电影</td></tr><tr><td>4</td><td>热聊</td></tr><tr><td>6</td><td>验证消息</td></tr><tr><td>7</td><td>多人聊天</td></tr><tr><td>8</td><td>约会</td></tr><tr><td>9</td><td>通讯录</td></tr></tbody></table><p><strong>快速操作</strong></p><table><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th><th>默认情况</th></tr></thead><tbody><tr><td><code>reply</code></td><td>message</td><td>要回复的内容</td><td>不回复</td></tr><tr><td><code>autoEscape</code></td><td>boolean</td><td>消息内容是否作为纯文本发送 ( 即不解析 CQ 码 ) , 只在 <code>reply</code> 字段是字符串时有效</td><td>不转义</td></tr></tbody></table><h2 id="群消息" tabindex="-1"><a class="header-anchor" href="#群消息" aria-hidden="true">#</a> 群消息</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">onGroupMessage</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Bot</span> bot<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">GroupMessageEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> MESSAGE_IGNORE<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>事件数据</strong></p><table><thead><tr><th>字段名</th><th>数据类型</th><th>可能的值</th><th>说明</th></tr></thead><tbody><tr><td><code>time</code></td><td>int64</td><td>-</td><td>事件发生的时间戳</td></tr><tr><td><code>selfId</code></td><td>int64</td><td>-</td><td>收到事件的机器人 QQ 号</td></tr><tr><td><code>postType</code></td><td>string</td><td><code>message</code></td><td>上报类型</td></tr><tr><td><code>messageType</code></td><td>string</td><td><code>group</code></td><td>消息类型</td></tr><tr><td><code>subType</code></td><td>string</td><td><code>normal</code>、<code>anonymous</code>、<code>notice</code></td><td>消息子类型, 正常消息是 <code>normal</code>, 匿名消息是 <code>anonymous</code>, 系统提示 ( 如「管理员已禁止群内匿名聊天」 ) 是 <code>notice</code></td></tr><tr><td><code>messageId</code></td><td>int32</td><td>-</td><td>消息 ID</td></tr><tr><td><code>groupId</code></td><td>int64</td><td>-</td><td>群号</td></tr><tr><td><code>userId</code></td><td>int64</td><td>-</td><td>发送者 QQ 号</td></tr><tr><td><code>anonymous</code></td><td>object</td><td>-</td><td>匿名信息, 如果不是匿名消息则为 null</td></tr><tr><td><code>message</code></td><td>message</td><td>-</td><td>消息内容</td></tr><tr><td><code>rawMessage</code></td><td>string</td><td>-</td><td>原始消息内容</td></tr><tr><td><code>font</code></td><td>int32</td><td>-</td><td>字体</td></tr><tr><td><code>sender</code></td><td>object</td><td>-</td><td>发送人信息</td></tr></tbody></table><div class="custom-container warning"><p class="custom-container-title">注意</p><p><code>anonymous</code> 字段从 go-cqhttp-v0.9.36 开始支持</p></div><p>其中 <code>anonymous</code> 字段的内容如下：</p><table><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>id</code></td><td>int64</td><td>匿名用户 ID</td></tr><tr><td><code>name</code></td><td>string</td><td>匿名用户名称</td></tr><tr><td><code>flag</code></td><td>string</td><td>匿名用户 flag, 在调用禁言 API 时需要传入</td></tr></tbody></table><p><code>sender</code> 字段的内容如下：</p><table><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>userId</code></td><td>int64</td><td>发送者 QQ 号</td></tr><tr><td><code>nickname</code></td><td>string</td><td>昵称</td></tr><tr><td><code>card</code></td><td>string</td><td>群名片／备注</td></tr><tr><td><code>sex</code></td><td>string</td><td>性别, <code>male</code> 或 <code>female</code> 或 <code>unknown</code></td></tr><tr><td><code>age</code></td><td>int32</td><td>年龄</td></tr><tr><td><code>area</code></td><td>string</td><td>地区</td></tr><tr><td><code>level</code></td><td>string</td><td>成员等级</td></tr><tr><td><code>role</code></td><td>string</td><td>角色, <code>owner</code> 或 <code>admin</code> 或 <code>member</code></td></tr><tr><td><code>title</code></td><td>string</td><td>专属头衔</td></tr></tbody></table><p>需要注意的是, <code>sender</code> 中的各字段是尽最大努力提供的, 也就是说, 不保证每个字段都一定存在, 也不保证存在的字段都是完全正确的 ( 缓存可能过期 ) 。尤其对于匿名消息, 此字段不具有参考价值。</p><p><strong>快速操作</strong></p><table><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th><th>默认情况</th></tr></thead><tbody><tr><td><code>reply</code></td><td>message</td><td>要回复的内容</td><td>不回复</td></tr><tr><td><code>autoEscape</code></td><td>boolean</td><td>消息内容是否作为纯文本发送 ( 即不解析 CQ 码 ) , 只在 <code>reply</code> 字段是字符串时有效</td><td>不转义</td></tr><tr><td><code>atSender</code></td><td>boolean</td><td>是否要在回复开头 at 发送者 ( 自动添加 ) , 发送者是匿名用户时无效</td><td>at 发送者</td></tr><tr><td><code>delete</code></td><td>boolean</td><td>撤回该条消息</td><td>不撤回</td></tr><tr><td><code>kick</code></td><td>boolean</td><td>把发送者踢出群组 ( 需要登录号权限足够 ) , <strong>不拒绝</strong>此人后续加群请求, 发送者是匿名用户时无效</td><td>不踢</td></tr><tr><td><code>ban</code></td><td>boolean</td><td>把发送者禁言 <code>banDuration</code> 指定时长, 对匿名用户也有效</td><td>不禁言</td></tr><tr><td><code>banDuration</code></td><td>number</td><td>禁言时长</td><td>30 分钟</td></tr></tbody></table><h2 id="群文件上传" tabindex="-1"><a class="header-anchor" href="#群文件上传" aria-hidden="true">#</a> 群文件上传</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">onGroupUploadNotice</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Bot</span> bot<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">GroupUploadNoticeEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> MESSAGE_IGNORE<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>事件数据</strong></p><table><thead><tr><th>字段名</th><th>数据类型</th><th>可能的值</th><th>说明</th></tr></thead><tbody><tr><td><code>time</code></td><td>int64</td><td>-</td><td>事件发生的时间戳</td></tr><tr><td><code>selfId</code></td><td>int64</td><td>-</td><td>收到事件的机器人 QQ 号</td></tr><tr><td><code>postType</code></td><td>string</td><td><code>notice</code></td><td>上报类型</td></tr><tr><td><code>noticeType</code></td><td>string</td><td><code>group_upload</code></td><td>通知类型</td></tr><tr><td><code>groupId</code></td><td>int64</td><td>-</td><td>群号</td></tr><tr><td><code>userId</code></td><td>int64</td><td>-</td><td>发送者 QQ 号</td></tr><tr><td><code>file</code></td><td>object</td><td>-</td><td>文件信息</td></tr></tbody></table><p>其中 <code>file</code> 字段的内容如下：</p><table><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>id</code></td><td>string</td><td>文件 ID</td></tr><tr><td><code>name</code></td><td>string</td><td>文件名</td></tr><tr><td><code>size</code></td><td>int64</td><td>文件大小 ( 字节数 )</td></tr><tr><td><code>busid</code></td><td>int64</td><td>busid ( 目前不清楚有什么作用 )</td></tr></tbody></table><h2 id="群管理员变动" tabindex="-1"><a class="header-anchor" href="#群管理员变动" aria-hidden="true">#</a> 群管理员变动</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">onGroupAdminNotice</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Bot</span> bot<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">GroupAdminNoticeEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> MESSAGE_IGNORE<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>事件数据</strong></p><table><thead><tr><th>字段名</th><th>数据类型</th><th>可能的值</th><th>说明</th></tr></thead><tbody><tr><td><code>time</code></td><td>int64</td><td>-</td><td>事件发生的时间戳</td></tr><tr><td><code>selfId</code></td><td>int64</td><td>-</td><td>收到事件的机器人 QQ 号</td></tr><tr><td><code>postType</code></td><td>string</td><td><code>notice</code></td><td>上报类型</td></tr><tr><td><code>noticeType</code></td><td>string</td><td><code>group_admin</code></td><td>通知类型</td></tr><tr><td><code>subType</code></td><td>string</td><td><code>set</code>、<code>unset</code></td><td>事件子类型, 分别表示设置和取消管理员</td></tr><tr><td><code>groupId</code></td><td>int64</td><td>-</td><td>群号</td></tr><tr><td><code>userId</code></td><td>int64</td><td>-</td><td>管理员 QQ 号</td></tr></tbody></table><h2 id="群成员减少" tabindex="-1"><a class="header-anchor" href="#群成员减少" aria-hidden="true">#</a> 群成员减少</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">onGroupDecreaseNotice</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Bot</span> bot<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">GroupDecreaseNoticeEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> MESSAGE_IGNORE<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>事件数据</strong></p><table><thead><tr><th>字段名</th><th>数据类型</th><th>可能的值</th><th>说明</th></tr></thead><tbody><tr><td><code>time</code></td><td>int64</td><td>-</td><td>事件发生的时间戳</td></tr><tr><td><code>selfId</code></td><td>int64</td><td>-</td><td>收到事件的机器人 QQ 号</td></tr><tr><td><code>postType</code></td><td>string</td><td><code>notice</code></td><td>上报类型</td></tr><tr><td><code>noticeType</code></td><td>string</td><td><code>group_decrease</code></td><td>通知类型</td></tr><tr><td><code>subType</code></td><td>string</td><td><code>leave</code>、<code>kick</code>、<code>kick_me</code></td><td>事件子类型, 分别表示主动退群、成员被踢、登录号被踢</td></tr><tr><td><code>groupId</code></td><td>int64</td><td>-</td><td>群号</td></tr><tr><td><code>operatorId</code></td><td>int64</td><td>-</td><td>操作者 QQ 号 ( 如果是主动退群, 则和 <code>userId</code> 相同 )</td></tr><tr><td><code>userId</code></td><td>int64</td><td>-</td><td>离开者 QQ 号</td></tr></tbody></table><h2 id="群成员增加" tabindex="-1"><a class="header-anchor" href="#群成员增加" aria-hidden="true">#</a> 群成员增加</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">onGroupIncreaseNotice</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Bot</span> bot<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">GroupIncreaseNoticeEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> MESSAGE_IGNORE<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>事件数据</strong></p><table><thead><tr><th>字段名</th><th>数据类型</th><th>可能的值</th><th>说明</th></tr></thead><tbody><tr><td><code>time</code></td><td>int64</td><td>-</td><td>事件发生的时间戳</td></tr><tr><td><code>selfId</code></td><td>int64</td><td>-</td><td>收到事件的机器人 QQ 号</td></tr><tr><td><code>postType</code></td><td>string</td><td><code>notice</code></td><td>上报类型</td></tr><tr><td><code>noticeType</code></td><td>string</td><td><code>group_increase</code></td><td>通知类型</td></tr><tr><td><code>subType</code></td><td>string</td><td><code>approve</code>、<code>invite</code></td><td>事件子类型, 分别表示管理员已同意入群、管理员邀请入群</td></tr><tr><td><code>groupId</code></td><td>int64</td><td>-</td><td>群号</td></tr><tr><td><code>operatorId</code></td><td>int64</td><td>-</td><td>操作者 QQ 号</td></tr><tr><td><code>userId</code></td><td>int64</td><td>-</td><td>加入者 QQ 号</td></tr></tbody></table><h2 id="群禁言" tabindex="-1"><a class="header-anchor" href="#群禁言" aria-hidden="true">#</a> 群禁言</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">onGroupBanNotice</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Bot</span> bot<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">GroupBanNoticeEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> MESSAGE_IGNORE<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>事件数据</strong></p><table><thead><tr><th>字段名</th><th>数据类型</th><th>可能的值</th><th>说明</th></tr></thead><tbody><tr><td><code>time</code></td><td>int64</td><td>-</td><td>事件发生的时间戳</td></tr><tr><td><code>selfId</code></td><td>int64</td><td>-</td><td>收到事件的机器人 QQ 号</td></tr><tr><td><code>postType</code></td><td>string</td><td><code>notice</code></td><td>上报类型</td></tr><tr><td><code>noticeType</code></td><td>string</td><td><code>group_ban</code></td><td>通知类型</td></tr><tr><td><code>subType</code></td><td>string</td><td><code>ban</code>、<code>lift_ban</code></td><td>事件子类型, 分别表示禁言、解除禁言</td></tr><tr><td><code>groupId</code></td><td>int64</td><td>-</td><td>群号</td></tr><tr><td><code>operatorId</code></td><td>int64</td><td>-</td><td>操作者 QQ 号</td></tr><tr><td><code>userId</code></td><td>int64</td><td>-</td><td>被禁言 QQ 号</td></tr><tr><td><code>duration</code></td><td>int64</td><td>-</td><td>禁言时长, 单位秒</td></tr></tbody></table><h2 id="好友添加" tabindex="-1"><a class="header-anchor" href="#好友添加" aria-hidden="true">#</a> 好友添加</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">onFriendAddNotice</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Bot</span> bot<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">FriendAddNoticeEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> MESSAGE_IGNORE<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>事件数据</strong></p><table><thead><tr><th>字段名</th><th>数据类型</th><th>可能的值</th><th>说明</th></tr></thead><tbody><tr><td><code>time</code></td><td>int64</td><td>-</td><td>事件发生的时间戳</td></tr><tr><td><code>selfId</code></td><td>int64</td><td>-</td><td>收到事件的机器人 QQ 号</td></tr><tr><td><code>postType</code></td><td>string</td><td><code>notice</code></td><td>上报类型</td></tr><tr><td><code>noticeType</code></td><td>string</td><td><code>friend_add</code></td><td>通知类型</td></tr><tr><td><code>userId</code></td><td>int64</td><td>-</td><td>新添加好友 QQ 号</td></tr></tbody></table><h2 id="群消息撤回" tabindex="-1"><a class="header-anchor" href="#群消息撤回" aria-hidden="true">#</a> 群消息撤回</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">onGroupMsgDeleteNotice</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Bot</span> bot<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">GroupMsgDeleteNoticeEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> MESSAGE_IGNORE<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>事件数据</strong></p><table><thead><tr><th>字段名</th><th>数据类型</th><th>可能的值</th><th>说明</th></tr></thead><tbody><tr><td><code>time</code></td><td>int64</td><td>-</td><td>事件发生的时间戳</td></tr><tr><td><code>selfId</code></td><td>int64</td><td>-</td><td>收到事件的机器人 QQ 号</td></tr><tr><td><code>postType</code></td><td>string</td><td><code>notice</code></td><td>上报类型</td></tr><tr><td><code>noticeType</code></td><td>string</td><td><code>group_recall</code></td><td>通知类型</td></tr><tr><td><code>groupId</code></td><td>int64</td><td></td><td>群号</td></tr><tr><td><code>userId</code></td><td>int64</td><td></td><td>消息发送者 QQ 号</td></tr><tr><td><code>operatorId</code></td><td>int64</td><td></td><td>操作者 QQ 号</td></tr><tr><td><code>messageId</code></td><td>int64</td><td></td><td>被撤回的消息 ID</td></tr></tbody></table><h2 id="好友消息撤回" tabindex="-1"><a class="header-anchor" href="#好友消息撤回" aria-hidden="true">#</a> 好友消息撤回</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">onPrivateMsgDeleteNotice</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Bot</span> bot<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">PrivateMsgDeleteNoticeEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> MESSAGE_IGNORE<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>事件数据</strong></p><table><thead><tr><th>字段名</th><th>数据类型</th><th>可能的值</th><th>说明</th></tr></thead><tbody><tr><td><code>time</code></td><td>int64</td><td>-</td><td>事件发生的时间戳</td></tr><tr><td><code>selfId</code></td><td>int64</td><td>-</td><td>收到事件的机器人 QQ 号</td></tr><tr><td><code>postType</code></td><td>string</td><td><code>notice</code></td><td>上报类型</td></tr><tr><td><code>noticeType</code></td><td>string</td><td><code>friend_recall</code></td><td>通知类型</td></tr><tr><td><code>userId</code></td><td>int64</td><td></td><td>好友 QQ 号</td></tr><tr><td><code>messageId</code></td><td>int64</td><td></td><td>被撤回的消息 ID</td></tr></tbody></table><h2 id="好友戳一戳" tabindex="-1"><a class="header-anchor" href="#好友戳一戳" aria-hidden="true">#</a> 好友戳一戳</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">onPrivatePokeNotice</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Bot</span> bot<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">PokeNoticeEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> MESSAGE_IGNORE<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>事件数据</strong></p><table><thead><tr><th>字段名</th><th>数据类型</th><th>可能的值</th><th>说明</th></tr></thead><tbody><tr><td><code>postType</code></td><td>string</td><td><code>notice</code></td><td>上报类型</td></tr><tr><td><code>noticeType</code></td><td>string</td><td><code>notify</code></td><td>消息类型</td></tr><tr><td><code>subType</code></td><td>string</td><td><code>poke</code></td><td>提示类型</td></tr><tr><td><code>selfId</code></td><td>int64</td><td></td><td>BOT QQ 号</td></tr><tr><td><code>senderId</code></td><td>int64</td><td></td><td>发送者 QQ 号</td></tr><tr><td><code>userId</code></td><td>int64</td><td></td><td>发送者 QQ 号</td></tr><tr><td><code>targetId</code></td><td>int64</td><td></td><td>被戳者 QQ 号</td></tr><tr><td><code>time</code></td><td>int64</td><td></td><td>时间</td></tr></tbody></table><h2 id="群内戳一戳" tabindex="-1"><a class="header-anchor" href="#群内戳一戳" aria-hidden="true">#</a> 群内戳一戳</h2><div class="custom-container warning"><p class="custom-container-title">注意</p><p>此事件无法在手表协议上触发</p></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">onGroupPokeNotice</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Bot</span> bot<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">PokeNoticeEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> MESSAGE_IGNORE<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>事件数据</strong></p><table><thead><tr><th>字段</th><th>类型</th><th>可能的值</th><th>说明</th></tr></thead><tbody><tr><td><code>postType</code></td><td>string</td><td><code>notice</code></td><td>上报类型</td></tr><tr><td><code>noticeType</code></td><td>string</td><td><code>notify</code></td><td>消息类型</td></tr><tr><td><code>subType</code></td><td>string</td><td><code>poke</code></td><td>提示类型</td></tr><tr><td><code>groupId</code></td><td>int64</td><td></td><td>群号</td></tr><tr><td><code>userId</code></td><td>int64</td><td></td><td>发送者 QQ 号</td></tr><tr><td><code>targetId</code></td><td>int64</td><td></td><td>被戳者 QQ 号</td></tr></tbody></table><h2 id="群红包运气王提示" tabindex="-1"><a class="header-anchor" href="#群红包运气王提示" aria-hidden="true">#</a> 群红包运气王提示</h2><div class="custom-container warning"><p class="custom-container-title">注意</p><p>此事件无法在手表协议上触发</p></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">onGroupLuckyKingNotice</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Bot</span> bot<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">GroupLuckyKingNoticeEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> MESSAGE_IGNORE<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>事件数据</strong></p><table><thead><tr><th>字段</th><th>类型</th><th>可能的值</th><th>说明</th></tr></thead><tbody><tr><td><code>postType</code></td><td>string</td><td><code>notice</code></td><td>上报类型</td></tr><tr><td><code>noticeType</code></td><td>string</td><td><code>notify</code></td><td>消息类型</td></tr><tr><td><code>groupId</code></td><td>int64</td><td></td><td>群号</td></tr><tr><td><code>subType</code></td><td>string</td><td><code>lucky_king</code></td><td>提示类型</td></tr><tr><td><code>userId</code></td><td>int64</td><td></td><td>红包发送者id</td></tr><tr><td><code>targetId</code></td><td>int64</td><td></td><td>运气王id</td></tr></tbody></table><h2 id="群成员荣誉变更提示" tabindex="-1"><a class="header-anchor" href="#群成员荣誉变更提示" aria-hidden="true">#</a> 群成员荣誉变更提示</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">onGroupHonorChangeNotice</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Bot</span> bot<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">GroupHonorChangeNoticeEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> MESSAGE_IGNORE<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>此事件无法在手表协议上触发</p></div><p><strong>事件数据</strong></p><table><thead><tr><th>字段</th><th>类型</th><th>可能的值</th><th>说明</th></tr></thead><tbody><tr><td><code>postType</code></td><td>string</td><td><code>notice</code></td><td>上报类型</td></tr><tr><td><code>noticeType</code></td><td>string</td><td><code>notify</code></td><td>消息类型</td></tr><tr><td><code>groupId</code></td><td>int64</td><td></td><td>群号</td></tr><tr><td><code>subType</code></td><td>string</td><td><code>honor</code></td><td>提示类型</td></tr><tr><td><code>userId</code></td><td>int64</td><td></td><td>成员id</td></tr><tr><td><code>honor_type</code></td><td>string</td><td><code>talkative:龙王</code> <code>performer:群聊之火</code> <code>emotion:快乐源泉</code></td><td>荣誉类型</td></tr></tbody></table><h2 id="群成员名片更新" tabindex="-1"><a class="header-anchor" href="#群成员名片更新" aria-hidden="true">#</a> 群成员名片更新</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">onGroupCardChangeNotice</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Bot</span> bot<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">GroupCardChangeNotice</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> MESSAGE_IGNORE<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>此事件不保证时效性, 仅在收到消息时校验卡片</p></div><p><strong>事件数据</strong></p><table><thead><tr><th>字段</th><th>类型</th><th>可能的值</th><th>说明</th></tr></thead><tbody><tr><td><code>postType</code></td><td>string</td><td><code>notice</code></td><td>上报类型</td></tr><tr><td><code>noticeType</code></td><td>string</td><td><code>group_card</code></td><td>消息类型</td></tr><tr><td><code>groupId</code></td><td>int64</td><td></td><td>群号</td></tr><tr><td><code>userId</code></td><td>int64</td><td></td><td>成员id</td></tr><tr><td><code>card_new</code></td><td>string</td><td></td><td>新名片</td></tr><tr><td><code>card_old</code></td><td>string</td><td></td><td>旧名片</td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">PS</p><p>当名片为空时 <code>card_xx</code> 字段为空字符串, 并不是昵称</p></div><h2 id="接收到离线文件" tabindex="-1"><a class="header-anchor" href="#接收到离线文件" aria-hidden="true">#</a> 接收到离线文件</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">onReceiveOfflineFilesNotice</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Bot</span> bot<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">ReceiveOfflineFilesNoticeEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> MESSAGE_IGNORE<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>事件数据</strong></p><table><thead><tr><th>字段</th><th>类型</th><th>可能的值</th><th>说明</th></tr></thead><tbody><tr><td><code>postType</code></td><td>string</td><td><code>notice</code></td><td>上报类型</td></tr><tr><td><code>noticeType</code></td><td>string</td><td><code>offline_file</code></td><td>消息类型</td></tr><tr><td><code>userId</code></td><td>int64</td><td></td><td>发送者id</td></tr><tr><td><code>file</code></td><td>object</td><td></td><td>文件数据</td></tr></tbody></table><p><strong>file object</strong></p><table><thead><tr><th>字段</th><th>类型</th><th>可能的值</th><th>说明</th></tr></thead><tbody><tr><td><code>name</code></td><td>string</td><td></td><td>文件名</td></tr><tr><td><code>size</code></td><td>int64</td><td></td><td>文件大小</td></tr><tr><td><code>url</code></td><td>string</td><td></td><td>下载链接</td></tr></tbody></table><h2 id="加好友请求" tabindex="-1"><a class="header-anchor" href="#加好友请求" aria-hidden="true">#</a> 加好友请求</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">onFriendAddRequest</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Bot</span> bot<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">FriendAddRequestEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> MESSAGE_IGNORE<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>事件数据</strong></p><table><thead><tr><th>字段名</th><th>数据类型</th><th>可能的值</th><th>说明</th></tr></thead><tbody><tr><td><code>time</code></td><td>int64</td><td>-</td><td>事件发生的时间戳</td></tr><tr><td><code>selfId</code></td><td>int64</td><td>-</td><td>收到事件的机器人 QQ 号</td></tr><tr><td><code>postType</code></td><td>string</td><td><code>request</code></td><td>上报类型</td></tr><tr><td><code>requestType</code></td><td>string</td><td><code>friend</code></td><td>请求类型</td></tr><tr><td><code>userId</code></td><td>int64</td><td>-</td><td>发送请求的 QQ 号</td></tr><tr><td><code>comment</code></td><td>string</td><td>-</td><td>验证信息</td></tr><tr><td><code>flag</code></td><td>string</td><td>-</td><td>请求 flag, 在调用处理请求的 API 时需要传入</td></tr></tbody></table><p><strong>快速操作</strong></p><table><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th><th>默认情况</th></tr></thead><tbody><tr><td><code>approve</code></td><td>boolean</td><td>是否同意请求</td><td>不处理</td></tr><tr><td><code>remark</code></td><td>string</td><td>添加后的好友备注 ( 仅在同意时有效 )</td><td>无备注</td></tr></tbody></table><h2 id="加群请求-邀请" tabindex="-1"><a class="header-anchor" href="#加群请求-邀请" aria-hidden="true">#</a> 加群请求／邀请</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">onGroupAddRequest</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Bot</span> bot<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">GroupAddRequestEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> MESSAGE_IGNORE<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>事件数据</strong></p><table><thead><tr><th>字段名</th><th>数据类型</th><th>可能的值</th><th>说明</th></tr></thead><tbody><tr><td><code>time</code></td><td>int64</td><td>-</td><td>事件发生的时间戳</td></tr><tr><td><code>selfId</code></td><td>int64</td><td>-</td><td>收到事件的机器人 QQ 号</td></tr><tr><td><code>postType</code></td><td>string</td><td><code>request</code></td><td>上报类型</td></tr><tr><td><code>requestType</code></td><td>string</td><td><code>group</code></td><td>请求类型</td></tr><tr><td><code>subType</code></td><td>string</td><td><code>add</code>、<code>invite</code></td><td>请求子类型, 分别表示加群请求、邀请登录号入群</td></tr><tr><td><code>groupId</code></td><td>int64</td><td>-</td><td>群号</td></tr><tr><td><code>userId</code></td><td>int64</td><td>-</td><td>发送请求的 QQ 号</td></tr><tr><td><code>comment</code></td><td>string</td><td>-</td><td>验证信息</td></tr><tr><td><code>flag</code></td><td>string</td><td>-</td><td>请求 flag, 在调用处理请求的 API 时需要传入</td></tr></tbody></table><p><strong>快速操作</strong></p><table><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th><th>默认情况</th></tr></thead><tbody><tr><td><code>approve</code></td><td>boolean</td><td>是否同意请求／邀请</td><td>不处理</td></tr><tr><td><code>reason</code></td><td>string</td><td>拒绝理由 ( 仅在拒绝时有效 )</td><td>无理由</td></tr></tbody></table>',103),a={render:function(t,d){return e}}}}]);