"use strict";(self.webpackChunkshiro_docs=self.webpackChunkshiro_docs||[]).push([[827],{207:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-7465afa1",path:"/quickstart/",title:"快速开始",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"引入 Shiro",slug:"引入-shiro",children:[{level:3,title:"从 Maven 引入",slug:"从-maven-引入",children:[]},{level:3,title:"从 Gradle 引入",slug:"从-gradle-引入",children:[]}]},{level:2,title:"配置文件",slug:"配置文件",children:[{level:3,title:"基础配置",slug:"基础配置",children:[]},{level:3,title:"高级自定义配置",slug:"高级自定义配置",children:[]}]},{level:2,title:"示例插件",slug:"示例插件",children:[]},{level:2,title:"连接 Shiro",slug:"连接-shiro",children:[{level:3,title:"下载 Client",slug:"下载-client",children:[]},{level:3,title:"配置文件",slug:"配置文件-1",children:[]}]}],filePathRelative:"quickstart/README.md",git:{updatedTime:1642167022e3,contributors:[{name:"Zero",email:"i@mikuac.com",commits:1}]}}},379:(n,s,a)=>{a.r(s),a.d(s,{default:()=>un});var p=a(252);const t=(0,p.uE)('<h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h1><h2 id="引入-shiro" tabindex="-1"><a class="header-anchor" href="#引入-shiro" aria-hidden="true">#</a> 引入 Shiro</h2><h3 id="从-maven-引入" tabindex="-1"><a class="header-anchor" href="#从-maven-引入" aria-hidden="true">#</a> 从 Maven 引入</h3>',3),e={class:"custom-container warning"},l=(0,p._)("p",{class:"custom-container-title"},"注意",-1),o=(0,p.Uk)("请访问 "),c={href:"https://search.maven.org/search?q=com.mikuac.shiro",target:"_blank",rel:"noopener noreferrer"},u=(0,p.Uk)("Maven Repo"),i=(0,p.Uk)(" 查看最新版本，并替换 "),r=(0,p._)("code",null,"version",-1),k=(0,p.Uk)(" 内的 "),m=(0,p._)("code",null,"latest version",-1),b=(0,p.uE)('<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.mikuac<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>shiro<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>latest version<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="从-gradle-引入" tabindex="-1"><a class="header-anchor" href="#从-gradle-引入" aria-hidden="true">#</a> 从 Gradle 引入</h3>',2),d={class:"custom-container warning"},g=(0,p._)("p",{class:"custom-container-title"},"注意",-1),h=(0,p.Uk)("请访问 "),v={href:"https://search.maven.org/search?q=com.mikuac.shiro",target:"_blank",rel:"noopener noreferrer"},f=(0,p.Uk)("Maven Repo"),y=(0,p.Uk)(" 查看最新版本，并替换 "),_=(0,p._)("code",null,"latest version",-1),q=(0,p.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>implementation &#39;com.mikuac:shiro:latest version&#39;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>将项目的 <code>application.properties</code> 修改为 <code>resources/application.yml</code></p><h3 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置" aria-hidden="true">#</a> 基础配置</h3><blockquote><p>通常情况下，使用如下配置内容即可</p></blockquote><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>\n  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">5000</span>\n<span class="token comment"># Shiro 配置</span>\n<span class="token key atrule">shiro</span><span class="token punctuation">:</span>\n  <span class="token comment"># 插件列表 (顺序执行，如果前一个插件返回了MESSAGE_BLOCK，将不会执行后续插件)</span>\n  <span class="token comment"># 注解方式无需在此定义插件</span>\n  <span class="token key atrule">plugin-list</span><span class="token punctuation">:</span> \n    <span class="token punctuation">-</span> com.mikuac.example.plugins.PluginOne\n    <span class="token punctuation">-</span> com.mikuac.example.plugins.PluginTwo\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="高级自定义配置" tabindex="-1"><a class="header-anchor" href="#高级自定义配置" aria-hidden="true">#</a> 高级自定义配置</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>\n  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">5000</span>\n<span class="token key atrule">shiro</span><span class="token punctuation">:</span>\n  <span class="token comment"># 插件列表 (顺序执行，如果前一个插件返回了MESSAGE_BLOCK，将不会执行后续插件)</span>\n  <span class="token comment"># 注解方式无需在此定义插件</span>\n  <span class="token key atrule">plugin-list</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> com.mikuac.example.plugins.PluginOne\n    <span class="token punctuation">-</span> com.mikuac.example.plugins.PluginTwo\n  <span class="token comment"># WebSocket 配置</span>\n  <span class="token key atrule">ws-config</span><span class="token punctuation">:</span>\n    <span class="token comment"># 反向 Webscoket 连接地址，无需该配置字段可删除，将使用默认值 &quot;/ws/shiro&quot;</span>\n    <span class="token key atrule">ws-url</span><span class="token punctuation">:</span> <span class="token string">&quot;/ws/shiro&quot;</span>\n    <span class="token comment"># 访问密钥，强烈推荐在公网的服务器设置</span>\n    <span class="token key atrule">access-token</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>\n    <span class="token comment"># 插件列表</span>\n    <span class="token comment"># 超时回收，默认10秒</span>\n    <span class="token key atrule">do-request-timeout</span><span class="token punctuation">:</span> <span class="token number">100000</span>\n    <span class="token comment"># 二进制消息的最大长度</span>\n    <span class="token key atrule">max-binary-message-buffer-size</span><span class="token punctuation">:</span> <span class="token number">512000</span>\n    <span class="token comment"># 最大空闲时间，超过这个时间将close session</span>\n    <span class="token key atrule">max-session-idle-timeout</span><span class="token punctuation">:</span> <span class="token number">900000</span>\n    <span class="token comment"># 最大文本消息缓冲区</span>\n    <span class="token key atrule">max-text-message-buffer-size</span><span class="token punctuation">:</span> <span class="token number">512000</span>\n  <span class="token comment"># 限速器（令牌桶算法）</span>\n  <span class="token key atrule">limiter</span><span class="token punctuation">:</span>\n    <span class="token comment"># 是否启用限速器</span>\n    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n     <span class="token comment"># acquire 如果令牌获取失败，将会阻塞当前线程直到获取成功（后面的 action 将会等待处理，不会被丢弃）</span>\n     <span class="token comment"># tryAcquire 如果令牌获取失败，该 action 将被丢弃</span>\n    <span class="token key atrule">mode</span><span class="token punctuation">:</span> <span class="token string">&quot;acquire&quot;</span>\n    <span class="token comment"># 每秒生成的令牌数</span>\n    <span class="token key atrule">permits-per-second</span><span class="token punctuation">:</span> <span class="token number">1</span>\n  <span class="token comment"># 线程池配置</span>\n  <span class="token key atrule">task-pool</span><span class="token punctuation">:</span>\n    <span class="token comment"># 核心线程数（默认线程数）</span>\n    <span class="token key atrule">core-pool-size</span><span class="token punctuation">:</span> <span class="token number">10</span>\n    <span class="token comment"># 缓冲队列大小</span>\n    <span class="token key atrule">queue-capacity</span><span class="token punctuation">:</span> <span class="token number">200</span>\n    <span class="token comment"># 允许线程空闲时间（单位：默认为秒）</span>\n    <span class="token key atrule">keep-alive-time</span><span class="token punctuation">:</span> <span class="token number">10</span>\n    <span class="token comment"># 最大线程数</span>\n    <span class="token key atrule">max-pool-size</span><span class="token punctuation">:</span> <span class="token number">30</span>\n    <span class="token comment"># 线程池名前缀</span>\n    <span class="token key atrule">thread-name-prefix</span><span class="token punctuation">:</span> <span class="token string">&quot;ShiroTaskPool-&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h2 id="示例插件" tabindex="-1"><a class="header-anchor" href="#示例插件" aria-hidden="true">#</a> 示例插件</h2><p>支持 String 消息转换为 Array 消息 ( v1.1.7 及以上版本 )</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExamplePlugin</span> <span class="token keyword">extends</span> <span class="token class-name">BotPlugin</span> <span class="token punctuation">{</span>\n    \n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">onPrivateMessage</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Bot</span> bot<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">PrivateMessageEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        event<span class="token punctuation">.</span><span class="token function">getArrayMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>it <span class="token operator">-&gt;</span>\n                <span class="token string">&quot;image&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>it <span class="token operator">-&gt;</span>\n                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> MESSAGE_IGNORE<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>示例插件I：注解调用</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoPlugin</span> <span class="token keyword">extends</span> <span class="token class-name">BotPlugin</span> <span class="token punctuation">{</span>\n\n    <span class="token comment">// 符合 cmd 正则表达式的消息会被响应</span>\n    <span class="token annotation punctuation">@PrivateMessageHandler</span><span class="token punctuation">(</span>cmd <span class="token operator">=</span> <span class="token string">&quot;hi&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Bot</span> bot<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">PrivateMessageEvent</span> event<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Matcher</span> matcher<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 构建消息</span>\n        <span class="token class-name">MsgUtils</span> msgUtils <span class="token operator">=</span> <span class="token class-name">MsgUtils</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">face</span><span class="token punctuation">(</span><span class="token number">66</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, this is shiro demo.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// 发送私聊消息</span>\n        bot<span class="token punctuation">.</span><span class="token function">sendPrivateMsg</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> msgUtils<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// at 如果参数设定为 AtEnum.NEED 则只有 at 了机器人的消息会被响应，若参数为 NOT_NEED，消息内如果 at 机器人则会忽略此消息</span>\n    <span class="token annotation punctuation">@GroupMessageHandler</span><span class="token punctuation">(</span>cmd <span class="token operator">=</span> <span class="token string">&quot;hi&quot;</span><span class="token punctuation">,</span> at <span class="token operator">=</span> <span class="token class-name">AtEnum</span><span class="token punctuation">.</span>OFF<span class="token punctuation">)</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">GroupMessageEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 以注解方式调用可以根据自己的需要来为方法设定参数</span>\n        <span class="token comment">// 例如群组消息可以传递 GroupMessageEvent event, Bot bot, Matcher matcher 多余的参数会被设定为 null</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 同时监听群组及私聊消息 并根据消息类型（私聊，群聊）回复</span>\n    <span class="token annotation punctuation">@MessageHandler</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun3</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Bot</span> bot<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">WholeMessageEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        bot<span class="token punctuation">.</span><span class="token function">sendMsg</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>示例插件II：重写父类方法（需要在 application.yml 文件 plugin-list 定义插件）</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// 继承BotPlugin开始编写插件</span>\n<span class="token annotation punctuation">@Component</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExamplePlugin</span> <span class="token keyword">extends</span> <span class="token class-name">BotPlugin</span> <span class="token punctuation">{</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">onPrivateMessage</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Bot</span> bot<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">PrivateMessageEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">String</span> msg <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;hi&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token comment">// 构建消息</span>\n          <span class="token class-name">String</span> sendMsg <span class="token operator">=</span> <span class="token class-name">MsgUtils</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                  <span class="token punctuation">.</span><span class="token function">face</span><span class="token punctuation">(</span><span class="token number">66</span><span class="token punctuation">)</span>\n                  <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, this is shiro demo.&quot;</span><span class="token punctuation">)</span>\n                  <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token comment">// 发送私聊消息</span>\n          bot<span class="token punctuation">.</span><span class="token function">sendPrivateMsg</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> sendMsg<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">// 返回 MESSAGE_IGNORE 插件向下执行，返回 MESSAGE_BLOCK 则不执行下一个插件</span>\n        <span class="token keyword">return</span> MESSAGE_IGNORE<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  \n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">onGroupMessage</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Bot</span> bot<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">GroupMessageEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">String</span> msg <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;hi&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token comment">// 构建消息</span>\n          <span class="token class-name">MsgUtils</span> sendMsg <span class="token operator">=</span> <span class="token class-name">MsgUtils</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                  <span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n                  <span class="token punctuation">.</span><span class="token function">face</span><span class="token punctuation">(</span><span class="token number">66</span><span class="token punctuation">)</span>\n                  <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, this is shiro demo.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token comment">// 发送群消息</span>\n          bot<span class="token punctuation">.</span><span class="token function">sendGroupMsg</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getGroupId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> sendMsg<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">// 返回 MESSAGE_IGNORE 插件向下执行，返回 MESSAGE_BLOCK 则不执行下一个插件</span>\n        <span class="token keyword">return</span> MESSAGE_IGNORE<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="连接-shiro" tabindex="-1"><a class="header-anchor" href="#连接-shiro" aria-hidden="true">#</a> 连接 Shiro</h2><h3 id="下载-client" tabindex="-1"><a class="header-anchor" href="#下载-client" aria-hidden="true">#</a> 下载 Client</h3>',17),w={class:"custom-container tip"},M=(0,p._)("p",{class:"custom-container-title"},"提示",-1),x=(0,p.Uk)("Shiro 以 "),E={href:"https://github.com/howmanybots/onebot/tree/master/v11/specs",target:"_blank",rel:"noopener noreferrer"},S=(0,p.Uk)("OneBot-v11"),U=(0,p.Uk)(" 标准协议进行开发，兼容所有支持反向WebSocket的OneBot协议客户端"),N=(0,p._)("thead",null,[(0,p._)("tr",null,[(0,p._)("th",null,"项目地址"),(0,p._)("th",null,"平台"),(0,p._)("th",null,"核心作者"),(0,p._)("th",null,"备注")])],-1),G={href:"https://github.com/Yiwen-Chan/OneBot-YaYa",target:"_blank",rel:"noopener noreferrer"},W=(0,p.Uk)("Yiwen-Chan/OneBot-YaYa"),O={href:"https://www.xianqubot.com/",target:"_blank",rel:"noopener noreferrer"},P=(0,p.Uk)("先驱"),B=(0,p._)("td",null,"kanri",-1),I=(0,p._)("td",null,null,-1),A={href:"https://github.com/richardchien/coolq-http-api",target:"_blank",rel:"noopener noreferrer"},C=(0,p.Uk)("richardchien/coolq-http-api"),j=(0,p._)("td",null,"CKYU",-1),R=(0,p._)("td",null,"richardchien",-1),T=(0,p.Uk)("可在 Mirai 平台使用 "),Y={href:"https://github.com/iTXTech/mirai-native",target:"_blank",rel:"noopener noreferrer"},H=(0,p.Uk)("mirai-native"),D=(0,p.Uk)(" 加载"),K={href:"https://github.com/Mrs4s/go-cqhttp",target:"_blank",rel:"noopener noreferrer"},L=(0,p.Uk)("Mrs4s/go-cqhttp"),z={href:"https://github.com/Mrs4s/MiraiGo",target:"_blank",rel:"noopener noreferrer"},F=(0,p.Uk)("MiraiGo"),Q=(0,p._)("td",null,"Mrs4s",-1),X=(0,p._)("td",null,null,-1),Z={href:"https://github.com/yyuueexxiinngg/cqhttp-mirai",target:"_blank",rel:"noopener noreferrer"},J=(0,p.Uk)("yyuueexxiinngg/cqhttp-mirai"),V={href:"https://github.com/mamoe/mirai",target:"_blank",rel:"noopener noreferrer"},$=(0,p.Uk)("Mirai"),nn=(0,p._)("td",null,"yyuueexxiinngg",-1),sn=(0,p._)("td",null,null,-1),an={href:"https://github.com/takayama-lily/onebot",target:"_blank",rel:"noopener noreferrer"},pn=(0,p.Uk)("takayama-lily/onebot"),tn={href:"https://github.com/takayama-lily/oicq",target:"_blank",rel:"noopener noreferrer"},en=(0,p.Uk)("OICQ"),ln=(0,p._)("td",null,"takayama",-1),on=(0,p._)("td",null,null,-1),cn=(0,p.uE)('<h3 id="配置文件-1" tabindex="-1"><a class="header-anchor" href="#配置文件-1" aria-hidden="true">#</a> 配置文件</h3><div class="custom-container tip"><p class="custom-container-title">提示</p><p>这里以 <code>go-cqhttp</code> 为例，配置反向 <code>websocket</code> 连接到 <code>shiro</code></p></div><p>编辑 <code>go-cqhttp</code> 目录下的 <code>config.yml</code> 文件，并修改如下内容</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># 连接服务列表</span>\n<span class="token key atrule">servers</span><span class="token punctuation">:</span>\n  <span class="token comment"># 添加方式，同一连接方式可添加多个，具体配置说明请查看文档</span>\n  <span class="token comment">#- http: # http 通信</span>\n  <span class="token comment">#- ws:   # 正向 Websocket</span>\n  <span class="token comment">#- ws-reverse: # 反向 Websocket</span>\n  <span class="token comment">#- pprof: #性能分析服务器</span>\n  <span class="token comment"># 反向WS设置</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">ws-reverse</span><span class="token punctuation">:</span>\n      <span class="token comment"># 反向WS Universal 地址</span>\n      <span class="token comment"># 注意 设置了此项地址后下面两项将会被忽略</span>\n      <span class="token key atrule">universal</span><span class="token punctuation">:</span> ws<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>5000/ws/shiro\n      <span class="token comment"># 反向WS API 地址</span>\n      <span class="token key atrule">api</span><span class="token punctuation">:</span> ws<span class="token punctuation">:</span>//your_websocket_api.server\n      <span class="token comment"># 反向WS Event 地址</span>\n      <span class="token key atrule">event</span><span class="token punctuation">:</span> ws<span class="token punctuation">:</span>//your_websocket_event.server\n      <span class="token comment"># 重连间隔 单位毫秒</span>\n      <span class="token key atrule">reconnect-interval</span><span class="token punctuation">:</span> <span class="token number">3000</span>\n      <span class="token key atrule">middlewares</span><span class="token punctuation">:</span>\n        <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*default</span> <span class="token comment"># 引用默认中间件</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>',4),un={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,(0,p._)("div",e,[l,(0,p._)("p",null,[o,(0,p._)("a",c,[u,(0,p.Wm)(a)]),i,r,k,m])]),b,(0,p._)("div",d,[g,(0,p._)("p",null,[h,(0,p._)("a",v,[f,(0,p.Wm)(a)]),y,_])]),q,(0,p._)("div",w,[M,(0,p._)("p",null,[x,(0,p._)("a",E,[S,(0,p.Wm)(a)]),U])]),(0,p._)("table",null,[N,(0,p._)("tbody",null,[(0,p._)("tr",null,[(0,p._)("td",null,[(0,p._)("a",G,[W,(0,p.Wm)(a)])]),(0,p._)("td",null,[(0,p._)("a",O,[P,(0,p.Wm)(a)])]),B,I]),(0,p._)("tr",null,[(0,p._)("td",null,[(0,p._)("a",A,[C,(0,p.Wm)(a)])]),j,R,(0,p._)("td",null,[T,(0,p._)("a",Y,[H,(0,p.Wm)(a)]),D])]),(0,p._)("tr",null,[(0,p._)("td",null,[(0,p._)("a",K,[L,(0,p.Wm)(a)])]),(0,p._)("td",null,[(0,p._)("a",z,[F,(0,p.Wm)(a)])]),Q,X]),(0,p._)("tr",null,[(0,p._)("td",null,[(0,p._)("a",Z,[J,(0,p.Wm)(a)])]),(0,p._)("td",null,[(0,p._)("a",V,[$,(0,p.Wm)(a)])]),nn,sn]),(0,p._)("tr",null,[(0,p._)("td",null,[(0,p._)("a",an,[pn,(0,p.Wm)(a)])]),(0,p._)("td",null,[(0,p._)("a",tn,[en,(0,p.Wm)(a)])]),ln,on])])]),cn],64)}}}}]);