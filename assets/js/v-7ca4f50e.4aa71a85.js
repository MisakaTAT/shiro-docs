"use strict";(self.webpackChunkshiro_docs=self.webpackChunkshiro_docs||[]).push([[293],{902:(t,d,e)=>{e.r(d),e.d(d,{data:()=>o});const o={key:"v-7ca4f50e",path:"/event/",title:"Event",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"序",slug:"序",children:[]},{level:2,title:"收到私聊消息",slug:"收到私聊消息",children:[]}],filePathRelative:"event/README.md",git:{updatedTime:163517732e4,contributors:[{name:"MisakaTAT",email:"i@mikuac.com",commits:1}]}}},528:(t,d,e)=>{e.r(d),e.d(d,{default:()=>a});const o=(0,e(252).uE)('<h1 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> Event</h1><h2 id="序" tabindex="-1"><a class="header-anchor" href="#序" aria-hidden="true">#</a> 序</h2><div class="custom-container warning"><p class="custom-container-title">提示</p><p>Event 所有的方法均由 <code>com.mikuac.shiro.core.BotPlugin</code> 类提供</p></div><h2 id="收到私聊消息" tabindex="-1"><a class="header-anchor" href="#收到私聊消息" aria-hidden="true">#</a> 收到私聊消息</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">onPrivateMessage</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Bot</span> bot<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">PrivateMessageEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>事件数据</strong></p><table><thead><tr><th>字段名</th><th>数据类型</th><th>可能的值</th><th>说明</th></tr></thead><tbody><tr><td><code>time</code></td><td>int64</td><td>-</td><td>事件发生的时间戳</td></tr><tr><td><code>self_id</code></td><td>int64</td><td>-</td><td>收到事件的机器人 QQ 号</td></tr><tr><td><code>post_type</code></td><td>string</td><td><code>message</code></td><td>上报类型</td></tr><tr><td><code>message_type</code></td><td>string</td><td><code>private</code></td><td>消息类型</td></tr><tr><td><code>sub_type</code></td><td>string</td><td><code>friend</code>、<code>group</code>、<code>group_self</code>、<code>other</code></td><td>消息子类型, 如果是好友则是 <code>friend</code>, 如果是群临时会话则是 <code>group</code>, 如果是在群中自身发送则是 <code>group_self</code></td></tr><tr><td><code>temp_source</code></td><td>int</td><td>-</td><td>临时会话来源</td></tr><tr><td><code>message_id</code></td><td>int32</td><td>-</td><td>消息 ID</td></tr><tr><td><code>user_id</code></td><td>int64</td><td>-</td><td>发送者 QQ 号</td></tr><tr><td><code>message</code></td><td>message</td><td>-</td><td>消息内容</td></tr><tr><td><code>raw_message</code></td><td>string</td><td>-</td><td>原始消息内容</td></tr><tr><td><code>font</code></td><td>int32</td><td>-</td><td>字体</td></tr><tr><td><code>sender</code></td><td>object</td><td>-</td><td>发送人信息</td></tr></tbody></table><p>其中 <code>sender</code> 字段的内容如下：</p><table><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>user_id</code></td><td>int64</td><td>发送者 QQ 号</td></tr><tr><td><code>nickname</code></td><td>string</td><td>昵称</td></tr><tr><td><code>sex</code></td><td>string</td><td>性别, <code>male</code> 或 <code>female</code> 或 <code>unknown</code></td></tr><tr><td><code>age</code></td><td>int32</td><td>年龄</td></tr></tbody></table><p>需要注意的是, <code>sender</code> 中的各字段是尽最大努力提供的, 也就是说, 不保证每个字段都一定存在, 也不保证存在的字段都是完全正确的 ( 缓存可能过期 ) 。</p><p>其中 <code>temp_source</code> 的类型如下：</p><table><thead><tr><th>类型</th><th>来源</th></tr></thead><tbody><tr><td>0</td><td>群聊</td></tr><tr><td>1</td><td>QQ咨询</td></tr><tr><td>2</td><td>查找</td></tr><tr><td>3</td><td>QQ电影</td></tr><tr><td>4</td><td>热聊</td></tr><tr><td>6</td><td>验证消息</td></tr><tr><td>7</td><td>多人聊天</td></tr><tr><td>8</td><td>约会</td></tr><tr><td>9</td><td>通讯录</td></tr></tbody></table><p><strong>快速操作</strong></p><table><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th><th>默认情况</th></tr></thead><tbody><tr><td><code>reply</code></td><td>message</td><td>要回复的内容</td><td>不回复</td></tr><tr><td><code>auto_escape</code></td><td>boolean</td><td>消息内容是否作为纯文本发送 ( 即不解析 CQ 码 ) , 只在 <code>reply</code> 字段是字符串时有效</td><td>不转义</td></tr></tbody></table>',14),a={render:function(t,d){return o}}}}]);