/* English presentation layer. The Chinese site remains the source of truth; this
   file translates the mirrored /en/ routes without changing layout or behavior. */
(function () {
  // Next.js hydration can restore the source document's zh-CN marker. Keep the
  // mirrored route explicitly English so its language-specific typography and
  // accessibility metadata remain active after hydration.
  document.documentElement.lang = 'en';

  const PHRASES = {
    '靳博文的游戏世界 · Portfolio': 'Bowen Jin’s Game World',
    '吃豆人大作战 | 靳博文作品集': 'Chomper Rush | Jin Bowen Portfolio',
    '吃豆人大作战': 'Chomper Rush',
    'Tennis Video Coach Report | 靳博文作品集': 'Tennis Video Coach Report | Jin Bowen Portfolio',
    '网球动作报告：脚下支撑到拍头释放': 'Tennis movement report: from ground support to racquet-head release',
    '小市集 go - 市集报名与交易信任平台 | 靳博文作品集': 'Little Market go — Market applications and transaction trust | Jin Bowen Portfolio',
    '跳到案例正文': 'Skip to case study content',
    '靳博文作品集': 'Jin Bowen Portfolio',
    '重构学习起点，让孩子愿意回来 | Senior UX Case Study': 'Rebuilding the learning starting point so children want to come back | Senior UX Case Study',
    'Jiligaga 服务 2–8 岁海外儿童。我把 Onboarding 从注册步骤重构为第一节课的准备过程，并从 V1.5 起用全链路漏斗追踪注册、进课、完课与 D3 / D7 回访，让每次迭代都回答同一个问题：孩子为什么愿意继续学？': 'Jiligaga serves children aged 2–8 overseas. I reframed onboarding from a registration step into preparation for the first lesson, then tracked sign-up, lesson entry, completion, and D3 / D7 return rates from V1.5 onward. Every iteration answers one question: why would a child keep learning?',
    '要让孩子进入首课，必须先化解三重阻力': 'To get children into the first lesson, we first had to remove three barriers',
    '家长需要理解信息为何被收集，孩子需要尽快感知课程价值；仍处在拓展早期的业务，则需要先让更多家庭顺利进课。': 'Parents needed to understand why information was collected, children needed to feel the value of the course quickly, and an early-stage business needed more families to reach the first lesson.',
    '收集孩子的年龄与英语基础，是为了匹配适合孩子的学习内容，并推荐对应的课程级别。': 'Collecting a child’s age and English level helps match learning content and recommend the right course level.',
    'Jiligaga 仍处于市场拓展早期。相比先收费，更重要的是让家庭先进入课程、理解产品价值。': 'Jiligaga was still expanding into new markets. Getting families into the course and helping them understand its value mattered more than charging first.',
    '真正的问题不是删掉几页，而是让入口、信息用途、级别推荐与首课价值形成连续承接。': 'The real problem was not deleting a few screens; it was connecting the entry point, information purpose, level recommendation, and first-lesson value into one continuous handoff.',
    '证据来自 4 组台湾家庭访谈、Onboarding 竞品调研，以及 V1.6–V1.10 版本漏斗。它们共同指向：先解释价值与信息用途，再让用户进入首课。': 'Evidence came from four Taiwanese family interviews, onboarding competitor research, and version funnels from V1.6–V1.10. Together they pointed to one move: explain value and information purpose before sending users into the first lesson.',
    '把一段网球训练视频，转化为可复核的动作证据、动力链诊断、训练建议和可分享报告。': 'Turn a tennis training video into reviewable movement evidence, kinetic-chain diagnosis, training advice, and a shareable report.',
    '每一条技术判断都尽量对应时间戳、关键帧或慢动作片段，并明确可见证据、影响、口令、练习方法与置信度。': 'Every technical judgment is tied where possible to a timestamp, key frame, or slow-motion clip, with visible evidence, impact, cue, drill, and confidence made explicit.',
    '从长视频中识别候选击球、练习段或回合，生成可播放、收藏和下载的复盘页面。': 'Identify candidate contacts, practice segments, or rallies in long videos and generate review pages that can be played, saved, and downloaded.',
    '生成候选帧、联系表和代表性动作序列，覆盖准备、触球窗口、随挥与回位。': 'Generate candidate frames, contact sheets, and representative movement sequences covering preparation, contact window, follow-through, and recovery.',
    '把经典吃豆重构为资源争夺、成长反杀与限时冲榜的移动横屏竞技体验。': 'Rebuild classic Pac-Man as a landscape mobile competition about resource capture, growth comebacks, and timed leaderboard climbs.',
    '面向手机横屏的复古港口竞技原型。玩家从收集豆子开始，靠成长、道具和路线判断冲榜；排名越高，越容易成为 AI 猎手的目标。': 'A retro harbor competition prototype for landscape phones. Players collect pellets, grow through items and route choices, and climb the leaderboard—while higher ranks make them more attractive targets for AI hunters.',
    '小市集 go 是连接主办方、摊主与消费者的微信小程序。我从一次真实摆摊经历出发，把分散在微信群、表格和私下转账里的流程，重构为可追踪的报名与交易闭环。': 'Little Market go is a WeChat Mini Program connecting organizers, vendors, and visitors. Starting from a real market-vending experience, I rebuilt flows scattered across group chats, spreadsheets, and private transfers into a trackable application and transaction loop.',
    '第一次找摊位时，我没有找到统一的官方入口，只能加入付费群、私聊主办方、线下转账。进一步收集到的摊主经历反复指向同一个问题：流程不可见，押金无保障。': 'When I first looked for a booth, there was no official entry point. I had to join a paid group, message an organizer privately, and transfer money offline. Vendor stories kept pointing to the same problem: the process was invisible and deposits were unprotected.',
    '以报名交易为入口，用 SaaS、内容、AI 与现场连接能力，逐步形成可复用的市集经营闭环。': 'Use applications and transactions as the entry point, then build a reusable market-operations loop through SaaS, content, AI, and on-site connections.',
    '靳博文的': 'Bowen Jin’s',
    '游戏世界': 'Game World',
    '插入卡带，进入我的游戏世界。': 'Insert a cartridge and enter my game world.',
    '13 年用户体验 / 产品设计经验。': '13 years of UX / product design experience.',
    '擅长 0-1 孵化、商业化设计与 AI 产品设计。': 'I specialize in 0→1 incubation, monetization, and AI product design.',
    '曾任职于 阿里·美味不用等 / 微盟 / 喜马拉雅 / 叽里呱啦。': 'Formerly at Alibaba · Meiweibuyongdeng / Weimob / Himalaya / Jiligaga.',
    '请先插卡': 'INSERT A CARTRIDGE',
    '退出卡带 EJECT': 'EJECT CARTRIDGE',
    '拖拽旋转 · DRAG': 'DRAG TO ROTATE',
    '‹ BACK · 返回': '‹ BACK',
    '个人履历': 'RESUME',
    '用户体验作品集': 'UX PORTFOLIO',
    '编程小游戏': 'CODING GAMES',
    '已复制': 'COPIED',
    '电话': 'PHONE',
    '微信': 'WECHAT',
    '邮箱': 'EMAIL',
    '复制电话': 'Copy phone number',
    '复制微信': 'Copy WeChat ID',
    '复制邮箱': 'Copy email address',
    '开始游戏': 'START GAME',
    '已插入：': 'INSERTED: ',
    '加载失败，请用本地服务器打开': 'LOAD FAILED — OPEN WITH A LOCAL SERVER',
    '关于我': 'ABOUT ME',
    '靳博文 · 13 年用户体验 / 产品设计经验。': 'Jin Bowen · Product Designer with 13 years of experience across UX, product design, and digital products.',
    '电话 15618969646 · 邮箱 249197662@qq.com': 'Phone +86 156 1896 9646 · Email 249197662@qq.com',
    '① 拥有「创始人」视角的商业设计师': '① A product designer with a founder’s mindset',
    '13 年全链路设计经验，具备从 0 到 1 独立孵化 SaaS + 交易平台并跑通盈利闭环的实战能力，擅长商业化设计落地，从 ROI、商业模式、获客成本维度制定设计策略。近期主导 AI 标书 SaaS 产品的商业化设计，独立规划按量计费（Token）模式与增值服务增长路径，持续强化「设计驱动商业」的核心能力。': 'Over 13 years of end-to-end product design, I have independently taken SaaS and transaction-based products from concept to launch and helped build sustainable revenue models. I translate business goals into product and design strategies informed by ROI, business models, and customer acquisition costs. Most recently, I led the commercialization strategy for an AI bidding SaaS product, defining token-based usage pricing and new revenue opportunities alongside the core product experience.',
    '② B/C 端双核驱动': '② B2B systems thinking × B2C growth design',
    '拥有稀缺的「SaaS 复杂逻辑 + C 端增长裂变」双重架构能力。曾主导出海教育产品「沉浸式游戏化体验」的战略级重构（Jiligaga），也曾搭建多行业通用的 SaaS 装修组件库（微盟）。同时具备 AI 产品落地设计经验，完成 AI 标书智能生成与审查平台的产品定义、核心工作台设计及 RAG 知识库增强、AI 改写降重等能力的完整方案落地。': 'I combine complex SaaS systems thinking with consumer growth design. I led the strategic redesign of Jiligaga into an immersive, game-based learning experience and built a reusable SaaS storefront component library serving multiple industries at Weimob. I also defined and designed an AI bid-generation and review platform, including its core workspace, RAG-enhanced knowledge base, AI rewriting, and similarity-checking capabilities.',
    '③ 数据驱动增长': '③ Data-driven growth',
    '拒绝主观臆断，习惯用数据说话。通过本地化视觉策略与漏斗优化，成功将获客转化率提升 131%，协助业务达成 ROI > 1.2 的目标。': 'I replace subjective assumptions with evidence. A localized visual strategy and funnel optimization increased conversion by 131% and helped the business achieve an ROI above 1.2.',
    '上海屹道晟辉信息服务有限公司 · 产品设计负责人': 'Shanghai Yidao Shenghui Information Services · Product Design Lead',
    '2024.02 — 至今': 'Feb 2024 — Present',
    '2022.04 — 2024.02': 'Apr 2022 — Feb 2024',
    '2021.05 — 2021.11': 'May 2021 — Nov 2021',
    '2019.10 — 2021.05': 'Oct 2019 — May 2021',
    '2015.11 — 2019.05': 'Nov 2015 — May 2019',
    '小市集 go（数字化市集报名平台）': 'Little Market Go (event application and marketplace platform)',
    '：针对「报名流程复杂、押金风险高、私域营销弱」三大痛点，搭建主办方 + 摊主双端架构，覆盖活动发布、在线报名、资金担保、UGC 社区等核心模块；验证「C 端会员订阅 + B 端招商服务费 + 课程」多元盈利模型。': ': Addressed complex application processes, deposit-payment risks, and limited owned-channel customer engagement through a two-sided organizer/vendor platform covering event publishing, online applications, payment protection, and UGC community features. The product validated a diversified revenue model combining consumer subscriptions, organizer service fees, and paid courses.',
    '领标 AI（AI 标书智能生成与审查平台）': 'LeadBid AI (AI bid-generation and review platform)',
    '：切入招投标行业人均 3-5 天、查重合规风险高的痛点，主导产品定位、用户旅程与核心工作台设计，搭建「上传 → AI 解析 → 参数配置 → 大纲确认 → 正文生成 → 审查降重 → 知识库沉淀」7 步完整闭环；规划 RAG 知识库增强、查重审查、AI 改写降重等核心 AI 能力，设计按量计费（Token）的商业模式。': ': To address a three-to-five-day bid-writing cycle and high compliance risk, I led product positioning, user journeys, and the core workspace. I created a seven-step flow from upload and AI parsing through configuration, outline approval, drafting, review, rewriting, and knowledge capture. I also planned the RAG-enhanced knowledge base, similarity checking, AI rewriting, and token-based usage pricing.',
    '业绩': 'OUTCOMES',
    '：小市集 go 上海试点上线首月取得 37.34% 支付转化率、19.77% 会员复购率，形成早期付费验证；领标 AI 完成从 0 到 1 的产品定义与核心方案，形成覆盖 6 大模块的完整产品交付方案。': ': During its first month of the Shanghai pilot, Little Market Go achieved a 37.34% payment conversion rate and a 19.77% repeat-purchase rate among members, providing early evidence of willingness to pay. LeadBid AI progressed from concept to a fully defined product, with a delivery plan covering six core modules.',
    '叽里呱啦文化传播（上海）有限公司 · 资深产品设计师': 'Jiligaga Culture Communication (Shanghai) · Senior Product Designer',
    '作为海外业务（Jiligaga）核心设计负责人，主导产品从 0 到 1 孵化与迭代，推动产品形态从「教育工具」向「沉浸式游戏化体验」转型。': 'As the core designer for Jiligaga’s international business, I led product incubation and iteration from concept through launch, transforming the product from an educational utility into an immersive game-based experience.',
    '产品架构重构': 'Product architecture redesign',
    '：对标 Lingokids、Khan Kids 等竞品与本地用户画像，将课程定位从「在线课程」转为「寓教于乐的数字玩具」，设计横向关卡地图，用「探索旅程」心智驱动孩子的学习动力。': ': Drawing on competitor research into Lingokids and Khan Academy Kids, along with local user personas, I repositioned the product from an online class into a play-based digital learning experience. A horizontal level map transformed the learning journey into an experience of exploration and progression.',
    '商业增长设计': 'Commercial growth design',
    '：视觉本地化与转化闭环 — 重构信息层级、台湾本地化视觉策略、优化「领取 → 加好友 → 付费」漏斗。': ': Reworked the information hierarchy and Taiwan-specific visual language, then optimized the claim → contact → payment funnel.',
    '体验优化与留存': 'Experience optimization and retention',
    '：数据驱动迭代 Onboarding，简化出生年份输入、A/B 测试优化录音反馈交互。': ': Used data to iterate onboarding, simplify birth-year input, and A/B test recording-feedback interactions.',
    '：安卓端领课率暴增 131%、iOS 增长 62%；激活至首页转化率突破 60%、首日完课率提升 30%、D1 留存率提升至 42.7%。': ': Lesson-claim conversion increased by 131% on Android and by 62% on iOS; activation-to-home conversion exceeded 60%; first-day lesson completion increased by 30%; and D1 retention reached 42.7%.',
    '喜马拉雅 · 资深 UX 设计师': 'Himalaya · Senior UX Designer',
    '从 0 到 1 搭建面向企业培训市场的 B 端产品，解决用户场景单一、功能覆盖不足、缺乏独立后台与品牌感知弱的问题。主导用户端（APP/H5）学习路径与管理端（B 端后台）数据看板全链路设计，沉淀 Button States、多选控件、卡片式设计等组件规范。': 'Built a B2B enterprise-training product from concept to MVP, expanding its use cases, completing the core feature set, establishing an independent admin system, and strengthening product branding. I led the learner experience across the mobile app and mobile web, as well as the admin dashboard, and established reusable component standards for button states, multi-select controls, and cards.',
    '：改版后学员体验综合评分 9.42（高于同主题往期均分 8.46）；MVP 验证中完课率 92%、复购/再次参与意愿率 91%。': ': After the redesign, the learner experience scored 9.42/10, compared with the previous category average of 8.46. MVP validation showed a 92% course-completion rate and 91% intent to repurchase or re-enroll.',
    '上海微盟企业发展有限公司 · 资深 UX 设计师': 'Shanghai Weimob Enterprise Development · Senior UX Designer',
    '微商城 C 端组件改版': 'WeShop consumer component redesign',
    '：针对装修模板类型单一、风格不统一、C 端转化不理想等痛点，对直播、商品、图文导航等基础组件标准化重构；打造「千人千面」装修体验，设计适配生鲜、家居、美妆等行业的梯度模板，大幅降低商家装修门槛与学习成本。': ': Standardized livestream commerce and visual-navigation components to address limited template options, inconsistent styling, and low conversion. Personalized storefront options and tiered templates for grocery, home, and beauty merchants substantially reduced setup effort and the learning curve for merchants.',
    '星巴克 KA 定制 · 支付裂变设计': 'Starbucks customization · Post-purchase referral design',
    '：将分享入口升级为「弹窗 + Banner」强引导，引入「咖啡教室」游戏化概念，结合节日氛围采用精致贴纸化插画风格。': ': Redesigned the post-purchase sharing experience with a modal and banner, introduced a gamified Coffee Classroom concept, and used refined sticker-style illustrations for seasonal campaigns.',
    '：星巴克会员支付后分享意愿从 8% 显著提升至 23%，优化「下单 → 分享 → 领福利」闭环路径。': ': Post-purchase sharing intent among Starbucks members increased from 8% to 23%, strengthening the order → share → reward loop.',
    '阿里本地生活（美味不用等）· 高级 UX 设计师': 'Alibaba Local Services (Meiweibuyongdeng) · Senior UX Designer',
    '负责餐饮生态核心产品体验设计，横跨 C 端会员产品与 B 端商家 SaaS（美收银），推动 GMV 与商家效率双重提升。': 'Designed core experiences across consumer membership products and merchant SaaS for the restaurant ecosystem, improving both GMV and merchant efficiency.',
    'C 端增长 · 霸王卡会员权益体系': 'Consumer growth · Bawang Card membership benefits',
    '：基于用户调研（89.1% 用户关注价格）确立「更划算、性价比」心智主张，结构化展示权益、门店详情页强化底部悬浮购买入口，显著提升「浏览 → 领券 → 支付」开卡转化率。': ': Research found that price was a key consideration for 89.1% of users, leading to a clearer value-for-money proposition, more structured benefit presentation, and a persistent purchase CTA on store pages. These changes improved conversion across the browse → coupon claim → payment funnel.',
    'B 端 SaaS · 美收银智能收银重构': 'B2B SaaS · Meishouyin smart POS redesign',
    '：推动产品从「支付工具」向「经营管家」转型，新增自动对账、会员营销及经营报表模块，重新设计 Dashboard 核心指标（今日收入、订单量、流水路径），提升商家高频操作效率。': ': Redesigned the product from a payment tool into an operations assistant with automated reconciliation, member marketing, and business reporting. Redesigned dashboard metrics—including today’s revenue, order volume, and transaction trends—to streamline high-frequency merchant workflows.',
    '黑龙江科技大学 · 工业设计': 'Heilongjiang University of Science and Technology · Industrial Design',
    '个人优势': 'STRENGTHS',
    '工作经历': 'EXPERIENCE',
    '学历': 'EDUCATION',
    '编程作品 · Vibe Coding': 'CODING WORK · VIBE CODING',
    '从 0→1 孵化到商业化设计，从出海儿童教育到 AI SaaS — 覆盖 B / C 端的核心体验与转化。': 'From 0→1 incubation to commercialization, and from international children’s education to AI SaaS—covering the core experiences and conversion systems across B2B and B2C.',
    '精选项目': 'selected projects',
    '年经验': 'years of experience',
    '双端': 'B2B / B2C',
    '教育出海 · 儿童英语启蒙': 'International EdTech · English learning for children',
    '叽里呱啦海外英语启蒙产品 · 主导出海业务核心体验设计，台湾市场 0→1 落地': 'Jiligaga international English-learning product · Led the core experience and 0→1 launch in Taiwan',
    '资深产品设计师': 'Senior Product Designer',
    '资深 UX 设计师': 'Senior UX Designer',
    '市场': 'Market',
    '台湾 / 日本': 'Taiwan / Japan',
    '企业培训 / B端 SaaS': 'Enterprise training / B2B SaaS',
    '喜马拉雅 · 轻学堂': 'Himalaya · Light Learning',
    'From 0 To 1 · 轻课项目 — 用音频内容重新定义碎片化学习': 'From 0 to 1 · A lightweight learning product that redefined fragmented learning through audio content',
    '完课率': 'Completion rate',
    '电商SaaS / 项目合集': 'E-commerce SaaS / Project collection',
    '微盟项目合集': 'Weimob project collection',
    '在微盟期间主导的三大 C 端项目：微商城组件改版、星巴克会员支付裂变、OFF-WHITE 购物模块': 'Three consumer projects led at Weimob: WeShop component redesign, Starbucks member-payment referrals, and the OFF-WHITE shopping module',
    '分享率': 'Share rate',
    'AI SaaS / B端': 'AI SaaS / B2B',
    '面向企业投标的 AI 撰写工作台 — 把一份标书的 12 天，变成一个下午': 'An AI writing workspace for enterprise bidding—turning a 12-day bid-document process into one afternoon',
    '主导体验设计': 'Lead experience designer',
    'O2O / C端+B端': 'O2O / B2C + B2B',
    '市集报名与交易信任平台 — 连接主办方、摊主与消费者': 'A trusted market application and transaction platform connecting organizers, vendors, and visitors',
    '验证': 'Validation',
    '上海首月上线': 'First month live in Shanghai',
    '网球视频教练报告 Skill': 'Tennis Video Coach Report Skill',
    '把训练视频转化为有证据链的动作诊断、动力链分析、慢动作片段与可分享报告。': 'Turn training videos into evidence-backed movement diagnosis, kinetic-chain analysis, slow-motion clips, and shareable reports.',
    '视频分析': 'Video analysis',
    '街机竞技': 'Arcade competition',
    'AI 对手': 'AI opponents',
    '小满 · AI 陪伴记录 App': 'Xiaoman · AI companion journal app',
    '通过每日记录与情绪标签形成趋势分析，并生成对明天状态的概率预感。': 'Use daily entries and mood tags to identify trends and generate a probabilistic forecast for tomorrow.',
    'AI 陪伴': 'AI companion',
    '用 AI 辅助编程，把专业方法、设计判断和可运行代码组合成真正可以使用的产品。': 'I use AI-assisted coding to turn design methods and product judgment into working products.',
    '跳到正文': 'Skip to content',
    '返回作品集': 'Back to portfolio',
    '案例导航': 'Case study navigation',
    '概览': 'Overview',
    '循环': 'Loop',
    '体验': 'Experience',
    '系统': 'System',
    '在线试玩': 'Play online',
    '查看 GitHub': 'View GitHub',
    '查看示例报告': 'View sample report',
    '查看系统自动拆出的候选片段，支持慢放、加速、收藏、下载，也可以把喜欢的片段合成一条精选视频。': 'Review candidate clips automatically extracted by the system. Slow down, speed up, save, download, or combine favorites into a highlight reel.',
    '当前模式：': 'Current mode:',
    '练习小段模式': 'Practice clip mode',
    '片段数：': 'Clips:',
    '已收藏片段：': 'Saved clips:',
    '还没有收藏': 'No saved clips yet',
    '收藏几个片段后，可以把这里的命令交给 Codex 合成精选视频。': 'Save a few clips, then hand the command here to Codex to create a highlight video.',
    '收藏': 'SAVE',
    '下载片段': 'DOWNLOAD CLIP',
    '动作分析说明': 'Movement analysis',
    '正常速度': 'Normal speed',
    '慢动作': 'Slow motion',
    '慢动作复核': 'Slow-motion review',
    '回到顶部': 'Back to top',
    '作品集': 'Portfolio',
    '页面章节': 'Chapters',
    '背景': 'Context',
    '策略': 'Strategy',
    '产品': 'Product',
    '结果': 'Results',
    '扫码体验': 'Scan to try',
    '让每一次市集报名，': 'Make every market application',
    '都值得被信任。': 'worthy of trust.',
    '角色': 'Role',
    '范围': 'Scope',
    '状态': 'Status',
    '创始人 / 产品设计': 'Founder / Product design',
    '策略、体验、增长': 'Strategy, experience, growth',
    '上海上线首月': 'First month after Shanghai launch',
    '主办方': 'Organizer',
    '摊主': 'Vendor',
    '消费者': 'Visitor',
    '发布 · 审核 · 管理': 'Publish · review · manage',
    '发现 · 报名 · 参展': 'Discover · apply · exhibit',
    '浏览 · 关注 · 互动': 'Browse · follow · interact',
    '报名 + 交易 + 内容': 'Applications + transactions + content',
    '支付转化率': 'Payment conversion',
    '报名与押金': 'Applications and deposits',
    '真实起点': 'Real starting point',
    '一次摆摊，把行业的信任缺口暴露出来': 'One market visit exposed the industry’s trust gap',
    '用户说': 'USER VOICES',
    '摊主们怎么说': 'What vendors say',
    '项目介绍': 'Project overview',
    '行业背景': 'Industry context',
    '用户画像': 'User profiles',
    '用户旅程': 'User journey',
    '四条关键洞察': 'Four key insights',
    '设计挑战': 'Design challenges',
    '设计策略': 'Design strategy',
    '优先级': 'Priority',
    '竞争选择': 'Competitive choice',
    '上线验证': 'Launch validation',
    '数据验证': 'Data validation',
    '解决方案': 'Solution',
    '产品架构': 'Product architecture',
    '证据边界': 'Evidence boundary',
    '不变的核心': 'The core stays the same',
    '动作阶段与动力链维度': 'Movement phases and kinetic-chain dimensions',
    'HTML / PNG / PDF 报告格式': 'HTML / PNG / PDF report formats',
    '从原始视频到训练处方的完整流程': 'A complete path from raw video to training prescription',
    '具备什么能力': 'CAPABILITIES',
    '分析流程': 'WORKFLOW',
    '可以生成什么报告': 'OUTPUTS',
    '一份报告，同时服务复盘、训练和分享': 'One report for review, training, and sharing',
    '读取视频': 'Read video',
    '切分与抽帧': 'Segment and extract frames',
    '动作诊断': 'Movement diagnosis',
    '证据标注': 'Evidence annotation',
    '报告输出': 'Report output',
    '测评得分': 'Assessment score',
    '动作链综合评定': 'Kinetic-chain assessment',
    '进阶': 'Advanced',
    '分析置信度：中高': 'Analysis confidence: medium-high',
    '动作能力分项': 'Movement capabilities',
    '能力雷达': 'Capability radar',
    '准备启动': 'Ready position',
    '动力链': 'Kinetic chain',
    '击球时机': 'Contact timing',
    '挥速释放': 'Racquet-head release',
    '随挥收拍': 'Follow-through recovery',
    '身体稳定': 'Body stability',
    '动力链分析': 'Kinetic-chain analysis',
    '逐帧姿态跟踪': 'Frame-by-frame pose tracking',
    '稳定性': 'Stability',
    '脚步与击球距离': 'Footwork and contact distance',
    '腿髋加载': 'Leg and hip loading',
    '髋躯干与肩': 'Hip, trunk, and shoulder',
    '手臂与拍头': 'Arm and racquet head',
    '技能点得分分析': 'Skill-point score analysis',
    '亮点': 'Strengths',
    '待改进': 'To improve',
    '网球动作报告：脚下支撑到拍头释放': 'Tennis movement report: from ground support to racquet-head release',
    '网球动作能力测试': 'Tennis movement capability test',
    '网球片段浏览器': 'Tennis clip browser',
    '把经典吃豆，重构成一场会成长、会反杀的资源争夺战': 'Reframing classic Pac-Man as a resource battle with growth and comebacks',
    '移动端横屏竞技游戏': 'Landscape mobile arcade game',
    '资源争夺、成长、反杀、冲榜': 'Resource capture, growth, comebacks, and leaderboard climbs',
    '横屏开始游戏': 'START IN LANDSCAPE',
    '建议使用手机横屏体验 · 桌面端支持方向键 / WASD 与空格键': 'Best experienced in landscape on mobile · Desktop supports arrow keys / WASD and Space',
    '首页把角色、模式和玩家资产压缩在一个横屏视野内，减少进入对局前的层级。': 'The home screen compresses character, mode, and player assets into one landscape view, reducing pre-game steps.',
    '让每一次收集，': 'Make every pickup',
    '都改变下一步风险': 'change the next risk',
    '独立设计 + 开发': 'Independent design + development',
    '可试玩原型': 'Playable prototype',
    '技术': 'Technology',
    '时间': 'Time',
    '在线体验': 'LIVE PROTOTYPE',
    '项目尚未正式上线，下面是可交互的原型，可以直接走一遍标书生成流程。': 'The product is not launched yet. This interactive prototype lets you walk through the bid-generation workflow.',
    '完整标书生成流程': 'Complete bid-generation workflow',
    '返回': 'BACK',
    '下一个': 'NEXT',
    '上一个': 'PREVIOUS',
    '已是第一个': 'FIRST PROJECT',
    '已是最后一个': 'LAST PROJECT',
    '返回项目列表': 'BACK TO PROJECTS',
    '关于我': 'ABOUT ME',
    '拥有「创始人」视角的商业设计师': 'A commercial designer with a founder’s perspective',
    'B/C 端双核驱动': 'Dual strength across B2B and B2C',
    '数据驱动增长': 'Data-driven growth',
    '领标 AI': 'LeadBid AI',
    '小市集 go': 'Little Market go',
    '叽里呱啦': 'Jiligaga',
    '喜马拉雅': 'Himalaya',
    '微盟': 'Weimob',
    '阿里本地生活': 'Alibaba Local Services',
    '今天': 'Today',
    '记录': 'Journal',
    '回看': 'Review',
    '一封小满写给你的信': 'A letter from Xiaoman',
    '小满的预感': 'Xiaoman’s forecast',
    '情绪预测': 'Mood forecast',
    'MVP 已上线': 'MVP live',
    '在线试玩 ↗': 'PLAY ONLINE ↗',
    '查看 GitHub ↗': 'VIEW GITHUB ↗',
    '重构学习起点，': 'Rebuilding the learning starting point,',
    '让孩子愿意回来': 'so children want to come back',
    '重构学习起点，让孩子愿意回来': 'Rebuilding the learning starting point so children want to come back',
    '面向 2–8 岁儿童的海外英语教育产品案例': 'An overseas English-learning product for children aged 2–8',
    'ANCHOR CASE · SENIOR UX / OVERSEAS EDTECH': 'ANCHOR CASE · SENIOR UX / OVERSEAS EDTECH',
    '项目状态': 'Project status',
    '查看案例证据': 'VIEW THE EVIDENCE',
    '已上线': 'LIVE',
    '台湾 / 泰国': 'Taiwan / Thailand',
    '为什么开始学习前，需要先了解孩子的信息？': 'Why collect information about a child before learning begins?',
    '业务需要扩大进课，但不能照搬成熟产品的付费链路。': 'The business needed more first lessons, without copying a mature product’s payment funnel.',
    '如何在更短路径里，先建立预期，再收集必要信息？': 'How might we set expectations first, then collect only the information we need?',
    '调研没有给出一条标准链路，而是帮我们决定什么该先发生。': 'Research did not reveal one standard flow. It helped us decide what needed to happen first.',
    '研究没有给出一条标准链路，而是帮我们决定什么该先发生。': 'Research did not reveal one standard flow. It helped us decide what needed to happen first.',
    '用户更愿意参与互动，家长更在意教学反馈': 'Children engage more with interaction; parents care more about learning feedback',
    '整体提升后，年龄页仍暴露预期断点': 'Even after the overall lift, the age screen still exposed an expectation gap',
    '把 Onboarding 从入口竞争，重构为课程推荐的第一步。': 'Reframe onboarding from an entry-point contest into the first step of course recommendation.',
    '启动页只建立预期': 'The landing screen sets expectations',
    '按年龄推荐课程': 'Recommend a course by age',
    '入口分工': 'Separate the entry points',
    '年龄本地化': 'Localize age input',
    '课程价值前置': 'Surface course value early',
    '用户需要知道下一步会发生什么': 'Users need to know what happens next',
    '小市集 go 是连接主办方、摊主与消费者的微信小程序。': 'Little Market go is a WeChat Mini Program connecting organizers, vendors, and visitors.',
    '我从一次真实摆摊经历出发': 'Starting from a real market-vending experience',
    '把分散在微信群、表格和私下转账里的流程，重构为可追踪的报名与交易闭环。': 'I rebuilt flows scattered across group chats, spreadsheets, and private transfers into a trackable application and transaction loop.',
    '流动摊位正在成为轻创业入口，基础设施却仍停留在群聊里。': 'Pop-up markets are becoming a low-barrier path into entrepreneurship, while their infrastructure is still stuck in group chats.',
    '先建立信任，再让内容和增长发生': 'Establish trust first, then let content and growth follow',
    '不与内容社区争夺“好看”，而是争夺“可信与高频”': 'Do not compete with content communities on looks; compete on trust and frequency',
    '上海上线首月，支付意愿先被验证': 'The first month in Shanghai validated willingness to pay',
    '小市集 go 与内容型市集平台定位对比': 'Little Market go versus content-led market platforms',
    '一笔押金的完整可见路径': 'A fully visible journey for one deposit',
    '提交报名': 'Submit application',
    '支付押金': 'Pay deposit',
    '主办方审核': 'Organizer review',
    '生成摊位图': 'Generate booth map',
    '签到参展': 'Check in and exhibit',
    '押金退回': 'Deposit returned',
    '一份标书耗时': 'Time per bid document',
    '历史素材复用率': 'Historical material reuse',
    '返工次数': 'Rework cycles',
    '行业背景': 'Industry context',
    '用户画像': 'User profiles',
    '用户旅程': 'User journey',
    '四条关键洞察': 'Four key insights',
    '如何让 AI 像“专家协作者”而不是“黑盒生成器”？': 'How might AI feel like an expert collaborator rather than a black box?',
    '如何在一个工作台里同时服务“专家”和“新手”？': 'How might one workspace serve both experts and beginners?',
    '默认即可用': 'Useful by default',
    '风险前置': 'Surface risk early',
    '可中断、可恢复': 'Interruptible and recoverable',

    // Jiligaga case study — complete English copy.
    '跳到案例正文': 'Skip to case study',
    '‹ BACK · 返回': '‹ BACK',
    '背景': 'Context',
    '证据': 'Evidence',
    '漏斗': 'Funnel',
    '方案': 'Solution',
    '结果': 'Results',
    '靳博文 / JIN BOWEN — PORTFOLIO 2026': 'JIN BOWEN — PORTFOLIO 2026',
    '重构学习起点，': 'Rebuilding the learning starting point,',
    '让孩子愿意回来': 'so children want to come back',
    'Jiligaga 服务 2–8 岁海外儿童。我把 Onboarding 从注册步骤重构为第一节课的准备过程，并从 V1.5 起用全链路漏斗追踪注册、进课、完课与 D3 / D7 回访，让每次迭代都回答同一个问题：孩子为什么愿意继续学？': 'Jiligaga serves children aged 2–8 overseas. I reframed onboarding from a registration step into preparation for the first lesson, then tracked sign-up, lesson entry, completion, and D3 / D7 returns from V1.5 onward. Every iteration answered the same question: why would a child want to keep learning?',
    '已上线': 'LIVE',
    '台湾 / 泰国': 'Taiwan / Thailand',
    '查看案例证据': 'VIEW THE EVIDENCE',
    'Onboarding 整体提升 · V1.9 → V1.10': 'Overall onboarding lift · V1.9 → V1.10',
    '要让孩子进入首课，必须先化解三重阻力': 'Three barriers had to be removed before children could enter their first lesson',
    '家长需要理解信息为何被收集，孩子需要尽快感知课程价值；仍处在拓展早期的业务，则需要先让更多家庭顺利进课。': 'Parents needed to understand why information was collected, children needed to feel the course value quickly, and the early-stage business needed more families to reach a first lesson.',
    '收集孩子的年龄与英语基础，是为了匹配适合孩子的学习内容，并推荐对应的课程级别。': 'Age and English proficiency are collected to match each child with suitable content and recommend the right course level.',
    'Jiligaga 仍处于市场拓展早期。相比先收费，更重要的是让家庭先进入课程、理解产品价值。': 'Jiligaga was still in an early market-expansion stage. Getting families into a lesson and helping them understand the product mattered more than charging them first.',
    '真正的问题不是删掉几页，而是让入口、信息用途、级别推荐与首课价值形成连续承接。': 'The real problem was not removing a few screens. It was creating continuity from entry point and data purpose to level recommendation and first-lesson value.',
    '证据来自 4 组台湾家庭访谈、Onboarding 竞品调研，以及 V1.6–V1.10 版本漏斗。它们共同指向：先解释价值与信息用途，再让用户进入首课。': 'Evidence came from four Taiwanese family interviews, competitor onboarding research, and funnels from V1.6–V1.10. Together they pointed to one move: explain value and data purpose before sending users into the first lesson.',
    '证据边界': 'Evidence boundary',
    '家庭访谈样本为 4 组；版本数据为横向对比，包含同期变量，仅用于定位问题和指导迭代，不作为严格因果证明。': 'The interview sample included four families. Version data is a directional comparison with concurrent variables; it locates problems and guides iteration, but does not establish strict causality.',
    '孩子更愿意参与互动，家长更在意教学反馈': 'Children engage more with interaction; parents care more about learning feedback',
    '4 组台湾家庭体验中，孩子对游戏互动的反应比影片更积极；家长更认可描写、口语等强教学环节。': 'Across four Taiwanese families, children responded more positively to game interactions than videos, while parents valued teaching-intensive activities such as writing and speaking.',
    '因此：': 'Therefore:',
    '把课程价值放进可操作、可反馈的学习环节。': 'Put course value into learning activities that are interactive and responsive.',
    '课程难度取决于孩子已有的英语基础': 'Course difficulty depends on a child\'s existing English proficiency',
    '无基础家庭认为内容量合适，有基础家庭则觉得偏简单；同一套内容会产生相反判断。': 'Beginners found the content appropriate, while experienced learners found the same content too easy.',
    '结合年龄与英语基础推荐级别，并解释推荐理由与学习结果。': 'Combine age and English proficiency to recommend a level, then explain the rationale and learning outcomes.',
    '竞品做法不能直接复制到早期市场': 'Competitor patterns cannot simply be copied into an early-stage market',
    '竞品 Onboarding 平均 4 步、约 1 分 45 秒；但 Jiligaga 仍处于拓展用户的初级阶段，业务模式并不相同。': 'Competitor onboarding averaged four steps and about 1 minute 45 seconds, but Jiligaga was still acquiring its earliest users under a different business model.',
    '不照搬先付费链路，优先缩短进课路径并提前传递课程价值。': 'Do not copy a pay-first funnel; shorten the route to a lesson and communicate course value earlier.',
    'V1.10 Onboarding 整体较 V1.9 提升 15.86%，但年龄页仍有 7% 流失；页面缺少进度与信息用途说明。': 'V1.10 onboarding improved 15.86% over V1.9, but the age screen still lost 7% of users and did not explain progress or data purpose.',
    '在索取年龄前解释用途，并建立清晰的流程预期。': 'Explain the purpose before asking for age and set clear expectations for the flow.',
    '“已有账号”入口点击率从 4% 升至 15%，结合注册首段约 10% 的流失，我们将它视为路径分流信号，而非增长结果。V1.10 因此围绕「明确新用户主路径—解释信息用途—直接按年龄推荐级别」重构 Onboarding。': 'The Have an Account click rate rose from 4% to 15%. Combined with roughly 10% loss at the start of sign-up, we treated this as a routing signal rather than a growth result. V1.10 therefore clarified the new-user path, explained data purpose, and recommended a level directly by age.',
    '分析判断': 'Design judgment',
    '入口需要分工；信息收集必须被理解为课程推荐，而不是注册阻断。': 'Entry points needed distinct roles; data collection had to feel like course recommendation, not a sign-up barrier.',
    '已有账号入口点击率': 'Have an Account click-through rate',
    'V1.6 → V1.8 · 行为信号，不等于增长': 'V1.6 → V1.8 · behavioral signal, not growth',
    'V1.10 仅 Android 投放 · 至少 +15pp · 已达阶段低标': 'V1.10 Android only · at least +15pp · stage floor reached',
    'iOS 基线 / 目标区间': 'iOS baseline / target range',
    '目标待验证 · 不作为上线结果': 'Target pending validation · not a launch result',
    '4% → 15% 仅表示账户入口点击变化；iOS 87%–90% 与 Android 79%–85% 是目标区间。当前只确认 Android V1.10 已达到 79% 阶段低标；60% 来自内部竞品调研，仅作方向信号。': '4% → 15% reflects only account-entry clicks. iOS 87%–90% and Android 79%–85% are target ranges. Only Android V1.10 is confirmed at the 79% stage floor; 60% comes from internal competitor research and is directional.',
    'V1.10 之前': 'Before V1.10',
    'BEFORE · 预期被打断': 'BEFORE · expectations interrupted',
    '“开始学习”的承诺，被双入口与年份填写连续打断。': 'The promise to start learning was repeatedly interrupted by competing entry points and birth-year input.',
    '新老用户入口并列': 'New and returning entry points compete',
    '账户入口与新用户主按钮同屏竞争。': 'The account entry competed with the main new-user action on the same screen.',
    '按出生年份选择': 'Select a birth year',
    '点击开始后立即索取信息，并增加年份换算成本。': 'Information was requested immediately after Start, adding calendar-conversion effort.',
    'AFTER · 推荐路径': 'AFTER · recommendation path',
    '入口先建立学习预期，年龄信息再用于推荐课程级别。': 'Set learning expectations first, then use age to recommend a course level.',
    '启动页只建立预期': 'The landing screen sets expectations',
    '聚焦品牌与英语学习旅程，不再承载双入口竞争。': 'Focus on the brand and English-learning journey instead of competing entry points.',
    '按年龄推荐课程': 'Recommend a course by age',
    '直接选择年龄，并解释信息用于匹配合适级别。': 'Select age directly and explain that it is used to match the right level.',
    '入口分工': 'Separate the entry points',
    '保留已有账号，但不再与新用户主路径并列。': 'Keep Have an Account without placing it beside the primary new-user path.',
    '年龄本地化': 'Localize age input',
    '内部竞品调研约 60% 直接选年龄；以方向信号替代跨历法换算。': 'About 60% of internally reviewed competitors selected age directly, providing a directional alternative to calendar conversion.',
    '推荐可解释': 'Make recommendations explainable',
    '先说明信息用途，再进入对应课程级别。': 'Explain the data purpose before entering the corresponding course level.',
    '从“完成一次转化”，转向观察一段真实的学习旅程。': 'Shift from one conversion to observing a real learning journey.',
    '从 V1.5 起，我和产品、数据团队不再只是观察 Onboarding 单点转化，而是持续追踪一条完整漏斗：从进入产品、注册登录、进课与完课，一直延伸到第 3 天和第 7 天的回访完课。': 'From V1.5 onward, Product, Data, and I tracked a complete funnel rather than a single onboarding conversion: product entry, sign-up, lesson entry, completion, and completed return lessons on D3 and D7.',
    '漏斗显示，用户能够完成首课，但从第 3 天开始人数明显收缩。问题由“能不能开始”转为“能否有足够清晰的节奏，帮助家庭把一次体验变成连续学习”。': 'The funnel showed that users could finish a first lesson, but numbers contracted sharply from day three. The question shifted from whether they could start to whether a clear rhythm could turn one experience into continuous learning.',
    '版本': 'Version',
    '周期': 'Period',
    'V1.5（2021年01月）': 'V1.5 (Jan 2021)',
    '访问首页': 'Home visits',
    '注册 / 登录': 'Sign-ups / login',
    '进入课程': 'Enter course',
    '完成首课': 'Complete first lesson',
    'D3 回访完课': 'D3 return lesson',
    'D7 回访完课': 'D7 return lesson',
    '整体提升': 'Overall lift',
    'V1.10（2021年08月）': 'V1.10 (Aug 2021)',
    'V1.10 学习旅程漏斗': 'V1.10 learning-journey funnel',
    '从访问首页到第 7 天回访完课，六个阶段逐层收窄。': 'Six stages narrow from the first home visit to a completed return lesson on day seven.',
    '整体转化提升': 'Overall conversion lift',
    '访问 → 注册': 'Visits → sign-ups',
    '注册 → 进课': 'Sign-ups → lesson entry',
    '进课 → 首课': 'Lesson entry → first lesson',
    '首课 → D3 回访': 'First lesson → D3 return',
    'D3 → D7 回访': 'D3 → D7 return',
    '价值分析：漏斗背后的关键机会点': 'Value analysis: the key opportunities behind the funnel',
    '广告投放与渠道策略优化': 'Optimize media and channel strategy',
    '机会占比': 'Opportunity share',
    '注册流程与登录体验优化': 'Optimize sign-up and login',
    '课程推荐与内容吸引力优化': 'Improve recommendation and content appeal',
    '首课体验与教学引导优化': 'Improve first-lesson guidance',
    '学习节奏与提醒机制优化': 'Improve learning rhythm and reminders',
    '长期激励与习惯养成优化': 'Build long-term motivation and habits',
    '因此，我们不再把优化拆成孤立页面，而是将“完成一次”升级为“持续学习旅程”：先解决入口与推荐，再把进课、完课和 D3 / D7 回访连接成一条连续路径。': 'We stopped treating optimization as isolated screens and reframed one completion as an ongoing learning journey: solve entry and recommendation first, then connect lesson entry, completion, and D3 / D7 returns.',
    '价值方法论': 'Value framework',
    '设备覆盖：iOS / Android / Pad': 'Device coverage: iOS / Android / iPad',
    '机会占比来自当期漏斗诊断与版本复盘，用于识别迭代优先级；不作为单点功能的严格因果结论。': 'Opportunity share comes from funnel diagnosis and version reviews. It prioritizes iteration and is not a strict causal claim for any single feature.',
    '把抽象策略，': 'Turn an abstract strategy',
    '落在一条连续体验里。': 'into one continuous experience.',
    '入口分工，明确开始路径': 'Separate entry points and clarify the starting path',
    '课程衔接，让下一步可理解': 'Connect courses so the next step is clear',
    '完课回访，建立 7 天学习节奏': 'Use post-lesson returns to build a seven-day rhythm',
    '阶段 1': 'Phase 1',
    '注册与理解': 'Sign-up and understanding',
    '明确起点': 'Clarify the starting point',
    '从“注册”切换为开始学习': 'Shift from sign-up to starting learning',
    '本地化年龄': 'Localize age input',
    '降低跨市场方法换算': 'Remove cross-market calendar conversion',
    '收集画像': 'Collect a learner profile',
    '只保留影响推荐的信息': 'Keep only information that affects recommendation',
    '解释推荐': 'Explain the recommendation',
    '回答孩子会学到什么': 'Show what the child will learn',
    '阶段 2': 'Phase 2',
    '学习与持续': 'Learning and continuity',
    '进入匹配级别的课程路径': 'Enter the course path for the matched level',
    '用互动任务完成第一次学习': 'Complete the first learning session through an interactive task',
    '承接回访': 'Create a return path',
    '在完课后建立 7 天节奏': 'Build a seven-day rhythm after lesson completion',
    'Part 1 · 视觉与信息升级': 'Part 1 · Visual and information upgrade',
    '从课程首页，重构为孩子看得懂的学习地图。': 'Rebuild the course home as a learning map children can understand.',
    '这不是一次换肤，而是同时重构产品定位、信息层级与进入课程的路径。': 'This was not a reskin. It reworked product positioning, information hierarchy, and the route into a course.',
    '0–1 孵化': '0–1 incubation',
    '产品架构': 'Product architecture',
    '视觉本地化': 'Visual localization',
    '转化路径': 'Conversion path',
    '旧版': 'Before',
    '以课程售卖为中心的首页': 'A home centered on selling courses',
    '新版': 'After',
    '以探索路径组织课程的横向关卡地图': 'A horizontal level map that organizes courses as exploration',
    '产品架构重构': 'Product architecture redesign',
    '对照 Lingokids、Khan Kids 与本地家庭画像，把产品从“在线课程”转向寓教于乐的数字玩具，并建立横向关卡地图与全屏沉浸式交互规范。': 'Using Lingokids, Khan Kids, and local family profiles as references, we repositioned the product from online courses to an educational digital toy, with a horizontal level map and full-screen interaction standards.',
    '台湾市场视觉调研显示，原有高饱和表达难以建立本地信任；因此转向马卡龙绿色、圆润字体与更亲和的角色语言。': 'Visual research in Taiwan showed that the original high-saturation style did not build local trust, so the system shifted to pastel green, rounded type, and friendlier character language.',
    '转化闭环': 'Conversion loop',
    '串联站外广告、App 内领取、LINE 私域与订阅路径，并用骨架屏承接加载等待，降低中途跳失风险。': 'Connect off-site ads, in-app claims, LINE retention, and subscription paths, while using skeleton states to reduce abandonment during loading.',
    'Part 2 · 学习节奏与回访激励': 'Part 2 · Learning rhythm and return motivation',
    '把一次完课，延伸为可持续的 7 天学习节奏。': 'Extend one completed lesson into a sustainable seven-day learning rhythm.',
    '完成首课后生成本周任务，让每日进度、连续挑战与完成奖励共同承接下一次回访。': 'After the first lesson, generate a weekly mission so daily progress, streak challenges, and completion rewards lead into the next visit.',
    '7 天打卡': 'Seven-day check-in',
    '即时反馈': 'Immediate feedback',
    '连续挑战': 'Streak challenge',
    '回访触发': 'Return trigger',
    '01 · 打卡计划': '01 · Check-in plan',
    '任务与当日进度保持可见': 'Keep the mission and today\'s progress visible',
    '02 · 完成任务': '02 · Mission complete',
    '用奖章反馈确认本周进步': 'Use medal feedback to confirm progress this week',
    '一周节奏可见': 'Make the weekly rhythm visible',
    '用 7 天日历、Today 状态与本周进度，让孩子和家长理解今天做到哪一步。': 'A seven-day calendar, Today state, and weekly progress show children and parents exactly where they are.',
    '完成即刻有回应': 'Respond immediately to completion',
    '打卡后以勋章、彩带和完成态回应努力，把抽象进度转成可感知的奖励。': 'Medals, ribbons, and a completed state acknowledge effort and turn abstract progress into a tangible reward.',
    '为回访留下目标': 'Leave a goal for the next visit',
    '持续挑战周数与勋章累计保持下一阶段目标可见，为 D3 / D7 回访提供明确触发点。': 'Visible streak weeks and medal totals keep the next goal in view and create a clear trigger for D3 / D7 returns.',
    'SUMMARY · 设计之道': 'SUMMARY · DESIGN PRINCIPLE',
    '“真正的设计价值，来自持续解决真实问题。”': '“Real design value comes from continuously solving real problems.”',
    '清晰的入口': 'A clear entry point',
    '可理解的流程': 'An understandable flow',
    '可感知的价值': 'Tangible value',
    '持续的学习动力': 'Sustained motivation to learn',
    '回到顶部 ↑': 'BACK TO TOP ↑'
  };

  const FINAL_PHRASES = {
    // Chomper Rush
    '无尽 / 排位模式': 'Endless / ranked modes',
    '最高活跃 AI 数量': 'Maximum active AI',
    '战术道具type': 'Tactical power-up types',
    '排位单局时长': 'Ranked match duration',
    'PROTOTYPE CONFIG · 数据来自当前Version代码配置，不代表user或商业Results': 'PROTOTYPE CONFIG · Values come from the current build and are not user or business outcomes',
    '分数既是奖励，': 'Score is both a reward',
    '也是被围猎的理由': 'and a reason to be hunted',
    '传统吃豆的goal是清场；这个原型把goal改成动态排名。玩家需要在“继续发育”和“主动攻击”之间不断选择。': 'Classic maze games ask players to clear the board; this prototype replaces that goal with a live ranking. Players continually choose between growing and attacking.',
    'coredesign张力：你越强，拾取Scope和战斗收益越高，但高分也会吸引更多猎手，安全路线随排名实时变化。': 'Core tension: strength expands pickup range and combat rewards, but a high score attracts more hunters and changes the safest route in real time.',
    '输入': 'Input',
    '虚拟摇杆 + BOOST': 'Virtual joystick + BOOST',
    'Technology边界': 'Technical boundary',
    '原生 Canvas 单页原型': 'Native Canvas single-page prototype',
    '玩法不是“吃得越多越好”的单线成长，而是一条持续升压的反馈回路：发育带来能力，也把玩家暴露给更强的追击。': 'The loop is not simply eat more to grow. Growth grants power while exposing the player to stronger pursuit.',
    '收集': 'Collect',
    '豆子、金币与高价值资源点提供得分和成长。': 'Pellets, coins, and high-value resource points provide score and growth.',
    '成长': 'Grow',
    '体型、拾取Scope与战斗收益随成长值提升。': 'Size, pickup range, and combat rewards rise with growth.',
    '武装': 'Power up',
    '能量豆与道具把追逐关系暂时反转。': 'Power pellets and items temporarily reverse the chase.',
    '冲榜': 'Climb the ranking',
    '排名上升带来更高goal价值和悬赏收益。': 'A higher rank raises target value and bounty rewards.',
    '被围猎': 'Get hunted',
    '高分玩家触发更多 AI 猎手，迫使路线重新规划。': 'High-scoring players trigger more AI hunters and must replan their routes.',
    '一个横屏里，同时看见操作、成长、威胁和排名': 'See controls, growth, threats, and ranking in one landscape view',
    'HUD 把高频判断放在画面上缘；排行榜保持在左侧；摇杆与 BOOST 分居两端，减少拇指遮挡中心战场。': 'Frequent HUD decisions sit along the top, the ranking stays left, and joystick and BOOST sit at opposite edges to keep thumbs off the arena.',
    '真实原型画面 · 无尽模式实战': 'Live prototype · endless mode',
    '拇指操作不遮战场': 'Thumb controls keep the arena visible',
    '左右控制布局可在settings中互换，兼顾不同握持习惯；桌面端同步支持键盘。': 'Left and right control layouts can be swapped for different grips; desktop also supports keyboard input.',
    'Status常驻而非临时弹窗': 'Keep status visible instead of using interruptions',
    '分数、生命、连击、能量、成长、online人数与排名保持可见，避免战斗中断读。': 'Score, health, combo, energy, growth, player count, and rank remain visible without interrupting combat.',
    '危险通过追逐关系表达': 'Express danger through pursuit',
    '守卫、精英 AI 和高分猎手不是静态障碍，而是会根据玩家Status切换goal的对手。': 'Guards, elite AI, and score hunters are opponents that switch targets according to player state.',
    '同一套coreLoop，服务两种game节奏': 'One core loop supports two game rhythms',
    '无尽模式强调持续发育和生存；排位模式把Time压缩到 180 秒，让资源点、悬赏和击败时机更关键。': 'Endless mode emphasizes long-term growth and survival; ranked mode compresses play into 180 seconds, making resources, bounties, and attack timing decisive.',
    '持续成长': 'Persistent growth',
    '开放地图内长期积累，适合熟悉操作、道具和成长节奏。': 'Accumulate over time in an open map while learning controls, items, and growth rhythm.',
    '限时抢榜': 'Timed ranking sprint',
    '有限Time放大路线efficiency、击败收益和最后stage的风险判断。': 'Limited time magnifies route efficiency, combat rewards, and late-stage risk decisions.',
    'AI 不只追你，': 'AI does more than chase you,',
    '它们有不同生存Strategy': 'each agent has a survival strategy',
    'AI 每约 400ms 重算一次意图，在生存、争夺资源、伏击和发育之间选择。不同性格让场上压力不只来自速度差。': 'AI recalculates intent roughly every 400ms, choosing among survival, resource competition, ambush, and growth. Distinct personalities make pressure about more than speed.',
    '猎手': 'Hunter',
    '主动追击玩家和高分goal；拥有战斗资源时更倾向持续锁定。': 'Actively pursues players and high-value targets, maintaining lock when combat resources are available.',
    '发育者': 'Grower',
    '优先收集豆子和金币，靠stability资源efficiency进入中后期竞争。': 'Prioritizes pellets and coins, using steady resource efficiency to compete later.',
    '掠夺者': 'Raider',
    '绕行获取能量豆或控制道具，再寻找伏击和反杀机会。': 'Detours for power pellets or control items before seeking ambush and reversal opportunities.',
    '逃生者与精英': 'Evaders and elites',
    '一类主动规避威胁，另一类制造高位排名压力，让战局保持层次。': 'One avoids threats while the other creates pressure near the top of the ranking.',
    '加速': 'Speed boost', '护盾': 'Shield', '磁吸': 'Magnet', '冰冻': 'Freeze', '伪装': 'Disguise',
    '用原生 Web Technology，把design判断直接变成可玩的Version': 'Turn design decisions directly into a playable build with native web technology',
    '没有框架和服务端依赖。当前Version聚焦横屏渲染、触控反馈、AI 决策、音效和本地进度，适合快速Validationcore玩法。': 'With no framework or server dependency, the current build focuses on landscape rendering, touch feedback, AI decisions, audio, and local progression to validate the core loop quickly.',
    '摇杆、BOOST、WASD 与方向键': 'Joystick, BOOST, WASD, and arrow keys',
    '成长、道具、碰撞、排名与 AI 意图': 'Growth, power-ups, collision, ranking, and AI intent',
    '迷宫、Role、资源、粒子与摄像机': 'Maze, characters, resources, particles, and camera',
    '程序化Context音乐和拾取、攻击音效': 'Procedural background music plus pickup and attack sounds',
    '金币、段位、皮肤和操作settings': 'Coins, ranks, skins, and control settings',
    '当前Version证明了什么，仍缺什么': 'What the current build proves—and what remains',
    '已在原型中实现': 'Implemented in the prototype',
    '手机横屏布局与双侧触控': 'Landscape mobile layout with bilateral touch controls',
    '吃豆成长、道具、战斗与冲榜闭环': 'A complete growth, power-up, combat, and ranking loop',
    '多性格 AI、精英、守卫与悬赏压力': 'Multiple AI personalities, elites, guards, and bounty pressure',
    '结算、settings、段位与本地存档': 'Results, settings, ranks, and local saves',
    '下一stageValidation': 'Next-stage validation',
    '当前对手为 AI 模拟，不是真实联网匹配': 'Current opponents are AI simulations, not real online matchmaking.',
    '尚未进行正式玩家测试与留存测量': 'Formal player testing and retention measurement have not yet been conducted.',
    '需补充服务端Status、反作弊和多设备同步': 'Server state, anti-cheat, and multi-device sync are still needed.',
    '继续Validation局长、成长速度与追击强度平衡': 'Continue validating match length, growth speed, and pursuit intensity.',
    '最好的description，是亲手吃掉第一颗豆子': 'The best explanation is eating the first pellet yourself',
    'GitHub 仓库 ↗': 'GITHUB REPOSITORY ↗',

    // Tennis Video Coach overview
    '不是简单剪video，而是建立可追溯的教练Evidence链': 'More than video editing: a traceable coaching evidence chain',
    '自动切分练习clip': 'Automatically segment practice clips',
    '提取关键movementEvidence': 'Extract key movement evidence',
    'movementstage诊断': 'Movement-phase diagnosis',
    '识别正手、反手、发球、截击等movement，并按准备、转体、步法、contact和恢复逐段分析。': 'Identify forehands, backhands, serves, and volleys, then analyze preparation, rotation, footwork, contact, and recovery.',
    'Kinetic chain与姿态辅助': 'Kinetic-chain and pose support',
    '分析脚下支撑、髋躯干传递、Arm and racquet head释放；画面条件允许时generation姿态与动态标注。': 'Analyze ground support, hip–trunk transfer, and arm and racquet-head release; generate pose and motion annotations when footage permits.',
    '基于Evidence的评分': 'Evidence-based scoring',
    'Capability radar和movement总分来自video中的可见movement，不使用固定样例分数；不可读project会标记未知。': 'Capability radar and movement scores come from visible evidence, not fixed sample values; unreadable dimensions are marked unknown.',
    'training处方与下一步': 'Training prescription and next step',
    '将主要problem转化为简洁口令、专项练习和复查goal，优先给出一项高价值改进，而不是泛化清单。': 'Turn the main issue into a concise cue, focused drill, and review goal, prioritizing one high-value improvement over a generic list.',
    '从video到report，五步形成闭环': 'Five steps from video to report',
    '保留原文件，建立independent分析目录。': 'Preserve the source and create an independent analysis directory.',
    'generation练习clip、关键帧和联系表。': 'Generate practice clips, keyframes, and contact sheets.',
    '确认movementtype、stage与主要problem。': 'Confirm movement type, phase, and primary issue.',
    '绑定Time戳、画面、Slow motion和限制。': 'Bind timestamps, frames, slow motion, and limitations.',
    'generation网页、长图、PDF 与复盘素材。': 'Generate web, long-image, PDF, and review assets.',
    '示例report包含movement能力评分、Kinetic-chain analysis、技能点得分、关键clip、training反馈与下一stage练习重点。': 'The sample report includes movement scores, kinetic-chain analysis, skill-point scores, key clips, coaching feedback, and next-stage priorities.',
    '响应式 HTML': 'Responsive HTML',
    '手机和桌面浏览，video可直接播放': 'Mobile and desktop viewing with inline video playback',
    '移动端长图 PNG': 'Mobile long-image PNG',
    '适合教练反馈与社交分享': 'For coaching feedback and social sharing',
    '适合归档、打印和stage对比': 'For archiving, printing, and phase comparison',
    '复盘素材包': 'Review asset pack',
    '回合video、Slow motion、标注帧与姿态叠加': 'Rally video, slow motion, annotated frames, and pose overlays',
    'open这份示例report': 'OPEN THE SAMPLE REPORT',
    '示例report · movement能力测试与Kinetic-chain analysis': 'Sample report · movement capability and kinetic-chain analysis',
    'INTERACTIVE ASSET / 交互分析素材': 'INTERACTIVE ASSET / CLIP ANALYSIS',
    'report之外，还能generation可播放的clip浏览器': 'Beyond the report: a playable clip browser',
    'System把原始trainingvideo自动整理为Normal speed、Slow motion和复核clip。每段都绑定Time区间、movementdescription与Evidence boundary，user可以直接播放、调速、SAVE或download。': 'The system organizes raw training video into normal-speed, slow-motion, and review clips. Each is bound to a time range, movement note, and evidence boundary for playback, speed control, saving, and download.',
    '自动切分': 'Automatic segmentation',
    '从长video中提取可independent复盘的候选clip': 'Extract independently reviewable clips from long video',
    '分段分析': 'Segment analysis',
    '按准备、动力传导、触球与回位descriptionmovement': 'Explain preparation, kinetic transfer, contact, and recovery',
    '复盘操作': 'Review controls',
    '支持 0.5x-2x 倍速、SAVE与clipdownload': 'Support 0.5x–2x speed, saving, and clip downloads',
    'open交互式clip浏览器': 'OPEN THE INTERACTIVE CLIP BROWSER',
    '3 个候选clip': '3 candidate clips',
    'Slow motion分析': 'Slow-motion analysis',
    'movement复核': 'Movement review',
    '0.5x-2x 倍速': '0.5x–2x speed',
    '只分析画面真正支持的content': 'Analyze only what the footage supports',
    '可以观察：movementstage、body间距、下肢支撑、随挥完整度、恢复节奏和明显的Kinetic chain衔接。': 'Observable: movement phases, body spacing, lower-body support, follow-through completeness, recovery rhythm, and visible kinetic-chain connections.',
    '不会臆测：精确拍面角度、球速与旋转、三维关节旋转、受伤风险或医疗结论。': 'Not inferred: exact racquet-face angle, ball speed or spin, 3D joint rotation, injury risk, or medical conclusions.',
    '当人物过小、遮挡、模糊或缺少触球画面时，report会降低置信度或不评分。': 'When the player is too small, occluded, blurred, or contact is missing, the report lowers confidence or withholds a score.',
    '直接view这次真实videogeneration的report': 'VIEW THE REPORT GENERATED FROM THIS VIDEO',
    'coredesign张力：你越强，拾取Scope和战斗收益越高，但高分也会吸引更多Hunter，安全路线随排名实时变化。': 'Core tension: strength expands pickup range and combat rewards, but a high score attracts more hunters and changes the safest route in real time.',
    '体型、拾取Scope与战斗收益随Grow值提升。': 'Size, pickup range, and combat rewards rise with growth.',
    '分数、生命、连击、能量、Grow、online人数与排名保持可见，避免战斗中断读。': 'Score, health, combo, energy, growth, player count, and rank remain visible without interrupting combat.',
    '守卫、精英 AI 和高分Hunter不是静态障碍，而是会根据玩家Status切换goal的对手。': 'Guards, elite AI, and score hunters switch targets according to player state.',
    '优先Collect豆子和金币，靠stability资源efficiency进入中后期竞争。': 'Prioritizes pellets and coins, using steady resource efficiency to compete later.',
    '继续Validation局长、Grow速度与追击强度平衡': 'Continue validating match length, growth speed, and pursuit intensity.',
    'Automatic segmentation练习clip': 'Automatically segment practice clips',
    '支持 0.5x–2x speed、SAVE与clipdownload': 'Support 0.5x–2x speed, saving, and clip downloads',

    // Tennis rally viewer
    '← BACK Skill 详情': '← BACK TO SKILL',
    '判断依据：依据录屏中的两次画面转场，自动整理为Normal speed、Slow motion和Slow-motion review三段。': 'Basis: two visible transitions in the recording were used to organize normal-speed, slow-motion, and slow-motion review clips.',
    '练习小段 001': 'Practice clip 001',
    'Normal speed：完整正手节奏': 'Normal speed: complete forehand rhythm',
    '这一段用于观察movement是否连贯。球员在移动中提前转肩，外侧腿完成加载，contact后拍头顺畅跨体并回到平衡。': 'This clip checks continuity. The player turns the shoulders early while moving, loads the outside leg, and returns to balance after a smooth cross-body follow-through.',
    '拍面保持在body前方，判断来球后立即用调整步进入正手侧。': 'The racquet stays in front, and adjustment steps move immediately to the forehand side.',
    '动力传导': 'Kinetic transfer',
    '腿部加载后髋躯干开始转动，Arm and racquet head随后进入contact区。': 'After the legs load, the hips and trunk rotate before the arm and racquet head enter the contact zone.',
    '触球空间': 'Contact spacing',
    '触球位于body前侧，contact臂有伸展空间，没有明显被球挤住。': 'Contact occurs in front of the body with comfortable extension and no visible crowding.',
    '随挥回位': 'Follow-through and recovery',
    '拍头完成跨体随挥，body没有在触球后失去平衡。': 'The racquet completes a cross-body follow-through without losing balance.',
    '慢速 0.75x': 'Slow 0.75x', '正常 1x': 'Normal 1x', '轻快 1.25x': 'Quick 1.25x', '冲刺 2x': 'Sprint 2x',
    '练习小段 002': 'Practice clip 002',
    'Slow motion：Kinetic chain顺序': 'Slow motion: kinetic-chain sequence',
    '慢放能看清脚下加载、髋肩open、contact臂释放的先后关系。主要strengths是拍头并非由手臂单独硬推。': 'Slow motion reveals the sequence from foot loading to hip and shoulder opening and arm release. A key strength is that the racquet is not pushed by the arm alone.',
    '外侧腿加载': 'Outside-leg load',
    '膝髋保持屈曲，重心先进入支撑腿，为转体提供基础。': 'The knee and hip stay flexed as weight enters the support leg before rotation.',
    '髋肩连接': 'Hip–shoulder connection',
    '髋部和躯干先open，肩带随后把contact臂带向前方。': 'The hips and trunk open first; the shoulder girdle then carries the hitting arm forward.',
    '拍头释放': 'Racquet-head release',
    '拍头先下降再加速通过，触球后继续向前上方释放。': 'The racquet head drops, accelerates through contact, and continues forward and upward.',
    '判断边界': 'Evidence boundary',
    '背后机位不能精确测量拍面角度、旋转量或真实拍速。': 'A rear camera cannot measure exact racquet-face angle, spin, or true racquet speed.',
    '练习小段 003': 'Practice clip 003',
    'Slow-motion review：触球与收拍': 'Slow-motion review: contact and finish',
    '第三段重复同一movement，用于确认触球位置、头部stability和收拍完整性；它不是新的independentcontact样本。': 'The third clip repeats the same stroke to confirm contact position, head stability, and finish. It is not another independent contact sample.',
    '触球位置': 'Contact position',
    '球位于body前侧和侧前方，contact臂保持舒适伸展。': 'The ball is in front and slightly to the side with comfortable arm extension.',
    '上身stability': 'Upper-body stability',
    '触球附近头部和躯干没有明显提前抬起或后仰。': 'The head and trunk do not visibly lift early or lean back around contact.',
    '减速收拍': 'Deceleration and finish',
    '拍头跨体完成减速，结束姿态仍保持在支撑Scope内。': 'The racquet decelerates across the body and finishes within the base of support.',
    '样本description': 'Sample note',
    '该段与前两段属于同一拍回放，不能当作第三次independent命中。': 'This is another replay of the same stroke and cannot count as a third independent hit.',

    // Tennis sample report
    '已进入movement链高效stage（Advanced+），本评分基于Ready position、Kinetic chain传导、Contact timing、Racquet-head release、随挥回收与Body stability的综合movement评定。': 'The movement chain has reached an efficient Advanced+ stage. The score combines ready position, kinetic transfer, contact timing, racquet-head release, follow-through, and body stability.',
    '示范movement，不估级': 'Demonstration stroke · no level estimate',
    '提前转肩、外侧腿加载、body前侧触球和完整随挥连接成了清晰的正手Kinetic chain。': 'Early shoulder turn, outside-leg loading, contact in front, and a complete follow-through form a clear forehand kinetic chain.',
    'Kinetic chain顺序清楚：外侧腿先承重，髋胸open，contact臂和拍头最后进入加速区。 这是一拍的三次回放，能descriptionmovement结构，但不能代表不同落点、旋转和压力下的重复性。': 'The sequence is clear: the outside leg bears weight, hips and chest open, and the hitting arm and racquet accelerate last. Three replays describe one stroke, not repeatability under varied placement, spin, or pressure.',
    '分数基于 1 个完整正手movement、Normal speed回放、2 段Slow motion和 8fps 关键帧generation；重复回放不重复计分。': 'Scores use one complete forehand, one normal-speed replay, two slow-motion clips, and 8 fps keyframes; repeated replays are not scored again.',
    'movement分析': 'Movement analysis',
    '可见顺序为footwork调整 → 外侧腿加载 → 髋躯干open → contact臂与拍头释放 → 跨体随挥和恢复。Slow motion中没有看到明显断链，主要限制来自单一movement样本而非movement结构。': 'Visible sequence: adjustment steps → outside-leg load → hip and trunk opening → arm and racquet release → cross-body follow-through and recovery. No clear break appears; the main limitation is the single-stroke sample.',
    '关节点依据Slow motion关键帧校准，并随body逐帧进行二维跟踪；黄色高亮仅用于辅助观察movement传导顺序。 本clip采用关键帧校准后的二维跟踪，仅用于观察movement顺序，不代表精确三维角度或受力测量。': 'Joint points are calibrated from slow-motion keyframes and tracked in 2D. Yellow highlights show sequence only; they are not exact 3D angles or force measurements.',
    '先找到距离。': 'Find the spacing first.', '外侧腿先压住。': 'Load the outside leg first.', '髋先开，胸口跟上。': 'Open the hips; let the chest follow.', '手臂放松，拍头最后释放。': 'Relax the arm; release the racquet head last.',
    'Kinetic chain顺序清晰': 'Clear kinetic-chain sequence',
    '外侧腿建立支撑后，髋躯干带动contact臂，拍头最后通过contact区。': 'After the outside leg establishes support, the hips and trunk drive the arm and the racquet passes through last.',
    '待Validation：变化来球下的重复性': 'To validate: repeatability against varied balls',
    '不能据此判断连续多拍、移动Scope扩大或被动来球下是否仍能保持同样Kinetic chain。': 'This sample cannot show whether the same chain holds across rallies, wider movement, or defensive balls.',
    '下一步': 'Next step', '同节奏三落点迁移': 'Transfer the same rhythm across three targets',
    '三落点正手各 8 球：保持脚下先到位、髋胸带动、拍头最后释放。': 'Hit eight forehands to each of three targets: feet arrive first, hips and chest drive, racquet head releases last.',
    '挥速分析': 'Racquet-speed analysis', '分段加速清楚，释放完整': 'Clear staged acceleration and complete release',
    '这里评估的是video中可见的拍头释放质量，不是实测拍速。外侧腿和躯干先建立速度，拍头在contact区完成最后释放。': 'This rates visible racquet-head release, not measured speed. The outside leg and trunk create speed before the racquet releases through contact.',
    '启动加速': 'Initiate acceleration', '前挥由腿髋和躯干启动，contact臂没有过早抢先。': 'Legs, hips, and trunk initiate the forward swing without the arm rushing ahead.',
    'contact区释放': 'Release through contact', '拍头下降、滞后并快速通过body前侧的contact窗口。': 'The racquet head drops, lags, and accelerates through the contact window in front.',
    '拍头跨体完成减速，肩带和body继续自然转动。': 'The racquet decelerates across the body as the shoulder girdle continues naturally.',
    '关键clip分析': 'Key-clip analysis', '完整节奏下，准备、加载、释放和随挥连接顺畅。': 'Preparation, loading, release, and follow-through connect smoothly at full rhythm.',
    'Normal speed适合判断整体节奏，但不适合单独测量精确拍面角度。': 'Normal speed shows overall rhythm but cannot measure exact racquet-face angle.',
    '慢放清楚显示腿髋、躯干、手臂和拍头的先后传导。': 'Slow motion clearly shows transfer from legs and hips through trunk, arm, and racquet.',
    '这是同一拍回放，不能用来判断多拍重复性。': 'This replay cannot establish multi-stroke repeatability.',
    '教练反馈': 'Coach feedback', '打球风格': 'Playing style', '保持脚、髋、胸、拍头的传导顺序': 'Keep the sequence: feet, hips, chest, racquet head', '球路组织': 'Shot construction',
    '正手结构完整：准备提前、下盘加载明确、触球位于body前侧、拍头释放和跨体随挥连续。': 'The forehand is structurally complete: early preparation, clear lower-body load, contact in front, racquet release, and continuous cross-body follow-through.',
    'training边界': 'Training boundary', 'Slow motion正手完整回放': 'Complete slow-motion forehand replay',
    '个回放clip': ' replay clips', '按录屏转场完成分段': 'Segmented from visible recording transitions',
    '分别为Normal speed、Slow motion和Slow-motion review，顶部与底部app界面已从分析画面中裁除。': 'Normal speed, slow motion, and slow-motion review; top and bottom app chrome were cropped from analysis.',
    '个independent正手movement': ' independent forehand stroke', '评分样本description': 'Scoring sample note',
    '三段是同一拍的重复回放，因此评分按一个完整movementgeneration，不按三次命中计算。': 'All three clips replay one stroke, so the score uses one complete movement rather than three hits.',
    '个可读反手': ' readable backhands', '反手未采样': 'Backhand not sampled',
    'video没有完整反手序列，反手准备、触球和Kinetic chain均不评分。': 'The video contains no complete backhand sequence, so preparation, contact, and kinetic chain are not scored.',
    '该clip保留准备、加载、前挥、触球、随挥和恢复，用于观察Kinetic chain的完整顺序。': 'The clip preserves preparation, loading, forward swing, contact, follow-through, and recovery to show the complete kinetic-chain sequence.',
    'training处方与Next step': 'Training prescription and next step',
    '按准备、Kinetic transfer、触球与回位descriptionmovement': 'Explain preparation, kinetic transfer, contact, and recovery',
    '第三段重复同一movement，用于确认Contact position、头部stability和收拍完整性；它不是新的independentcontact样本。': 'The third clip repeats the same stroke to confirm contact position, head stability, and finish. It is not another independent contact sample.',
    '提前转肩、Outside-leg load、body前侧触球和完整随挥连接成了清晰的正手Kinetic chain。': 'Early shoulder turn, outside-leg loading, contact in front, and a complete follow-through form a clear forehand kinetic chain.',
    'Kinetic chain顺序清楚：外侧腿先承重，髋胸open，contact臂和拍头最后进入Speed boost区。 这是一拍的三次回放，能descriptionmovement结构，但不能代表不同落点、旋转和压力下的重复性。': 'The sequence is clear: the outside leg bears weight, hips and chest open, and the hitting arm and racquet accelerate last. Three replays describe one stroke, not repeatability under varied placement, spin, or pressure.',
    '可见顺序为footwork调整 → Outside-leg load → 髋躯干open → contact臂与Racquet-head release → 跨体随挥和恢复。Slow motion中没有看到明显断链，主要限制来自单一movement样本而非movement结构。': 'Visible sequence: adjustment steps, outside-leg load, hip and trunk opening, arm and racquet release, then cross-body follow-through and recovery. No clear break appears; the main limitation is the single-stroke sample.',
    '这里评估的是video中可见的Racquet-head release质量，不是实测拍速。外侧腿和躯干先建立速度，拍头在contact区完成最后释放。': 'This rates visible racquet-head release, not measured speed. The outside leg and trunk create speed before the racquet releases through contact.',
    '正手结构完整：准备提前、下盘加载明确、触球位于body前侧、Racquet-head release和跨体随挥连续。': 'The forehand is structurally complete: early preparation, clear lower-body load, contact in front, racquet release, and continuous cross-body follow-through.'
  };

  const WORDS = {
    '项目': 'project', '案例': 'case study', '页面': 'page', '核心': 'core', '用户': 'user', '产品': 'product',
    '设计': 'design', '体验': 'experience', '增长': 'growth', '研究': 'research', '方案': 'solution', '结果': 'results',
    '问题': 'problem', '目标': 'goal', '阶段': 'stage', '类型': 'type', '工作台': 'workspace', '企业': 'enterprise',
    '投标': 'bidding', '标书': 'bid document', '知识库': 'knowledge base', '生成': 'generation', '审查': 'review',
    '改写': 'rewrite', '降重': 'similarity reduction', '用户旅程': 'user journey', '洞察': 'insight', '挑战': 'challenge',
    '策略': 'strategy', '流程': 'flow', '系统': 'system', '内容': 'content', '功能': 'feature', '效率': 'efficiency',
    '信任': 'trust', '押金': 'deposit', '报名': 'application', '市集': 'market', '主办方': 'organizer', '摊主': 'vendor',
    '消费者': 'visitor', '平台': 'platform', '支付': 'payment', '复购': 'repeat purchase', '访问': 'visits', '注册': 'sign-ups',
    '会员': 'member', '收入': 'revenue', '课程': 'course', '学习': 'learning', '孩子': 'children', '家长': 'parents',
    '年龄': 'age', '推荐': 'recommendation', '级别': 'level', '首课': 'first lesson', '证据': 'evidence', '训练': 'training',
    '动作': 'movement', '击球': 'contact', '脚步': 'footwork', '身体': 'body', '稳定': 'stability', '报告': 'report',
    '片段': 'clip', '视频': 'video', '正常速度': 'normal speed', '慢动作': 'slow motion', '收藏': 'save', '下载': 'download',
    '编辑': 'edit', '首页': 'home', '设置': 'settings', '返回': 'back', '查看': 'view', '打开': 'open', '关闭': 'close',
    '说明': 'description', '优势': 'strengths', '经历': 'experience', '学历': 'education', '电话': 'phone', '邮箱': 'email',
    '复制': 'copy', '已上线': 'live', '待上线': 'not launched', '独立': 'independent', '开发': 'development', '应用': 'app',
    '每天': 'daily', '明天': 'tomorrow', '趋势': 'trend', '预感': 'forecast', '游戏': 'game', '在线': 'online', '试玩': 'playable',
    '小满': 'Xiaoman'
  };

  const PAGE_TEXT = {
    '/en/case-studies/xiaoshiji/': [
      'WECHAT MINI PROGRAM', 'LITTLE MARKET', 'MEASURED · FIRST MONTH',
      'Instead of building another market-content community, solve the most urgent and risky link first:',
      'THREE-SIDED O2O PLATFORM', 'SHANGHAI',
      'Qualitative evidence from early vendor experiences: three quotes reveal the same trust gap.',
      'Deposit refund experience', '“I always paid on time, but my RMB 500 deposit kept being delayed. They only said finance had not transferred it.”',
      'Problem signal', 'Refund progress is invisible', 'Repeat application experience',
      '“To get my deposit back, I had to apply for the next market. Even after applying, the refund was still delayed.”',
      'Refund tied to another application', 'MULTIPLE', 'VENDORS', 'Similar money-related experiences',
      '“After I paid a RMB 2,000 deposit, the organizer disappeared.”', 'No protection for funds',
      'Fragmented entry points', 'WeChat groups, Moments, and spreadsheets form a temporary flow that is hard to search or compare.',
      'Invisible progress', 'Applications, reviews, payment, and booth assignment lack a shared status, creating repeated communication.',
      'Unprotected funds', 'Deposits rely on personal credit; refund rules, timing, and accountable parties are unclear.',
      'OPPORTUNITY / MARKET SIGNAL',
      'Policy support for the night economy and flexible work is bringing students, freelancers, and career switchers into markets. Growth creates demand for trusted transaction infrastructure, not just traffic.',
      'The figures below come from industry sources and public estimates cited in the business plan. They provide market context, not Little Market go operating results.',
      'RMB 80B+', 'Estimated 2024 curated-market size in China', 'Source cited in BP: iResearch',
      'ABOUT 760K', 'Vendors in tier-one and emerging tier-one cities', 'Estimate from platform heat maps and public data cited in BP',
      '02 · STRATEGY / PRODUCT JUDGMENT',
      'Competitors behave like brand showcases and content communities. Little Market go should enter through the frequent, essential need: an application tool plus transaction platform, acting as a trusted third party for one deposit, one event, and one fulfillment.',
      'Make deposit escrow the core experience', 'Put refund conditions, current status, and accountable parties into the flow so users never need to chase the location of their money.',
      'Three parties collaborate around one market', 'Organizers publish and review, vendors apply and attend, and visitors browse and interact around the same event object.',
      'Use QR codes to connect on-site behavior', 'Bring booths, check-ins, content sharing, and transaction data online as reusable operating assets.',
      'Rules are visible', 'Platform records funds', 'Results sync promptly', 'On-site locations are clear', 'Fulfillment leaves a trace', 'Conditions and progress are searchable',
      'One event object carries the tasks of three roles',
      'The product is not three disconnected clients. It establishes shared state around a market event; each role sees what matters to its decisions, while the platform closes the transaction, content, and data loops.',
      'ORGANIZER', 'Create markets and booth rules', 'Review applications and payment status', 'Generate booth maps and manage the venue', 'View business and event data',
      'VENDOR', 'Find suitable markets', 'Apply, pay, and check progress', 'Publish photo and video updates', 'Generate booth posters for sharing',
      'VISITOR', 'Browse nearby markets', 'Follow brands and vendors', 'View live updates', 'Check in and interact',
      'Application review', 'Deposit supervision', 'QR connection', 'Data assets',
      'Connect three-sided services and growth around one market',
      'AI enablement: differentiate through an AI + policy dual engine',
      'Foundation AI: generate copy, imagery, and market descriptions; pre-screen subsidy eligibility and match policies.',
      'Advanced AI: assist product selection, marketing strategy, and organizer curation.',
      'Consumer side: upgrade the experience to upgrade the market', 'Browse nearby markets and save vendors', 'View updates and check in', 'AI enablement', 'Visitor community', 'Smart hardware',
      'End-to-end organizer services', 'Create markets and configure booth information', 'Review vendor applications and supervise payments', 'Use SaaS to manage booths and analyze operations',
      'End-to-end vendor services', 'Browse markets, apply to exhibit, and publish UGC for discovery', 'Generate booth posters, accept payments, and close the data loop', 'Later extend into brand franchises and course training',
      'Scan to connect on-site and online', 'Online applications and on-site QR scans work together to build durable operating data.',
      'SOURCE 02', 'Business-plan solution page · original three-sided capabilities and platform layer',
      'PRIORITY / TRADE-OFF', 'Start with application transactions, not full e-commerce',
      'E-commerce would amplify supply, fulfillment, and after-sales complexity while weakening the product\'s role as a market tool. Phase one therefore validates applications, membership, and transaction trust; content, courses, AI, and brand incubation follow as growth layers.',
      'Validate urgent need and willingness to pay', 'Improve retention and supply efficiency', 'AI + hardware + brand incubation', 'Build data and a city network',
      'Comparison', 'Content-led market platform', 'Core task', 'Event display, content publishing, and commerce referrals', 'Applications, review, deposits, and on-site collaboration',
      'Trust mechanism', 'Relies mainly on organizer credibility', 'Platform records funds and fulfillment status', 'Depends on branded events and content reach', 'Organizer supply → vendor application → visitor interaction',
      'Commercial entry', 'Brand partnerships and commerce referrals', 'Membership, transaction services, SaaS, and courses',
      'The following first-month figures are recorded in the business plan. They indicate early willingness to pay, but do not prove long-term retention, city replication, or causality from a specific design change.',
      'First-month payment conversion', 'Member repeat-purchase rate', 'Membership mix', 'Monthly', 'Annual', 'Six-month',
      'The high monthly-plan share indicates that low-commitment trial was the dominant early choice. Cohort data is still needed to validate renewal and lifetime value.',
      'Core metrics in the first month after the Shanghai launch', 'User scale', 'SOURCE 04', 'Business-plan validation page · first month after Shanghai launch',
      'BUSINESS MODEL / DESIGN CONSTRAINT', 'Membership is the starting point, not the destination',
      'The business model means the product cannot optimize only one application. The experience must gradually support subscriptions, event transactions, organizer tools, and brand growth; projected revenue remains a BP model and must not be mixed with validated results.',
      'FOUNDATION', 'Use low-friction subscriptions to establish cash flow, user profiles, and repeat-purchase entry.', 'MODEL / BP annual revenue forecast RMB 2.94M',
      'ENHANCEMENT', 'Exposure + transaction services', 'Provide advertising and transaction services around high-value traffic and fulfillment.', 'MODEL / BP annual revenue forecast RMB 2.34M',
      'ECOSYSTEM', 'SaaS + brand incubation', 'Turn city-market operations into tools, data, and brand-growth services.', 'MODEL / BP annual revenue forecast RMB 3.92M+',
      'REFLECTION / RETROSPECTIVE', 'The true product moat is not a feature list, but the trust record left by every transaction.',
      'VALIDATED', 'Users showed willingness to pay for more centralized and controllable market services; membership has an early signal.',
      'TO VALIDATE', 'Refund-dispute rate, organizer handling efficiency, membership cohort retention, and the cost of replicating across cities.',
      'Complete fulfillment and refund data first, then expand SaaS, AI matching, and on-site hardware so growth never outruns trust.',
      'TRY THE PRODUCT / WECHAT QR CODE', 'Experience real market discovery and application in the mini program.',
      'Open WeChat and scan the mini-program code. Browse markets, view event details, and experience the Little Market go entry flow.',
      'WECHAT MINI PROGRAM · SCAN WITH MOBILE WECHAT', 'SCAN WITH WECHAT TO TRY THE MINI PROGRAM'
    ]
  };

  const DYNAMIC_TEXT = {
    ximalaya: [
      'B2B SaaS', 'Himalaya · Light Learning · project cover',
      'Himalaya had a vast audio library and a major opportunity in enterprise training. The 0–1 task was to connect content, enterprises, and learners across procurement, distribution, learning, and management.',
      'Design steps', 'The project moved through four phases —', 'exploratory research → design delivery → acceptance and review → continuous optimization', '. Each phase had clear outputs and goals.',
      'Design Steps · four-phase path', 'Design entry point · Exploratory',
      'Three primary problems: narrow scenarios and feature coverage, no independent admin for convenient data access, and weak brand perception. These problems defined the design goals:',
      'modularize the product, build an accessible independent admin, and strengthen brand perception.',
      'Exploratory · mapping problems to design goals', 'Mood board', 'After defining the global problems, three keywords emerged —', 'easy, immersive, joyful', '. They formed the mood board and visual direction.',
      'Mood Board · easy / immersive / joyful', 'Goal derivation', 'Young, optimistic professionals', ' needed learning that was', 'efficient and sustainable', ', supported by', 'authentic, practical content.',
      'Goal Derivation · path from user insight', 'Industry product analysis', 'Deep analysis of leading products produced three strategies:',
      'create peak moments, establish differentiated design, and carry the brand across scenarios.', 'These became the three core strategies.', 'Product Analysis · leading product experiences',
      'Home page', 'The learning path follows the user mental model. Course themes configure the page color; a smaller hero banner improves information density, a location menu shows progress, and the primary action returns directly to the last learning task.',
      'Home Page · structure and interaction notes', 'Pages and components · Delivery',
      'Question feedback and content playback are the two core scenarios. 3D illustration, medals, and ribbons reinforce a joyful emotional response at every step.',
      'Delivery · quiz and result flow', 'Delivery · course detail and player', 'Component specification', 'A systematic component library was established —',
      'covering every scenario. Each component defines dimensions, states, and interaction boundaries.', 'Component Specification · systematic component standards',
      'Data summary', 'After the MVP launched, key indicators exceeded expectations: experience score 9.42 versus 8.46 for comparable prior programs, participation 92% versus a 65% goal, and 91% willingness to repurchase.',
      'Project outcomes', 'Learner experience score', 'Participation rate', 'Willingness to repurchase', '▶ MVP retrospective',
      'Productizing knowledge cards improved perceived value, but interaction still needed work. Next steps included competitor analysis, a knowledge-card redesign, and continued player improvements.',
      'Enterprise training', '0→1 incubation', 'Design standards', 'Learning path', 'Component library', 'Audio learning'
    ],
    'weimob-0': [
      'Weimob Storefront consumer-component redesign', 'OFF-WHITE shopping module', 'Projects', '3', 'Storefront component redesign · cover',
      'The SaaS storefront offered limited, inconsistent templates. Merchants struggled to differentiate their stores, and the quality of the consumer experience varied. The component library needed a standardized rebuild.',
      'Component standardization', 'Rebuild core live-stream, product, and visual-navigation components with unified interaction and visual rules.',
      'Personalization', 'Support recommendation components driven by user tags to improve click-through.',
      'Graduated options', 'Provide large, medium, and small presets to lower the barrier to merchant customization.',
      'Redesign strategy', 'Design process', 'Current-state analysis', 'Review 80+ storefront templates, separate common and unique patterns, and extract component primitives.',
      'Component design', 'Button states, multi-select controls, card patterns, and other components cover all scenarios.',
      'Document standards', 'Create a unified design standard and component library with implementation documentation.',
      'Merchant training', 'Lower the setup barrier so merchants without design experience can still build professional stores.',
      'Root-cause analysis', '▶ Key result', 'The component library expanded across the Weimob product line, substantially reducing setup effort and learning cost.',
      'Page showcase', 'Delivered storefront redesign: upgraded admin configuration and improved consumer components.',
      'Admin redesign 1', 'Admin redesign 2', 'Admin redesign 3', 'Admin redesign 4', 'Consumer redesign 1', 'Consumer redesign 2', 'Consumer redesign 3',
      'Results', 'Final redesigned experience and overall benefits.', 'E-commerce SaaS', 'Component library', 'Design standards', 'Visual storefront builder'
    ],
    'weimob-1': [
      'Weimob Storefront consumer-component redesign', 'OFF-WHITE shopping module', 'Projects', '3', 'OFF-WHITE shopping module · cover',
      'For OFF-WHITE China, the Weimob storefront had to reflect the fashion label while reusing platform components. The challenge was balancing exacting brand expression with existing platform capability.',
      'Brand expression first', 'Use the brand visual language as the anchor for a dedicated shopping module.',
      'Component reuse', 'Extend a skin layer over standardized components to reduce development cost.',
      'Mobile first', 'Optimize browsing and checkout for mobile use.',
      'Design process', 'Brand research', 'Deconstruct OFF-WHITE visual language and e-commerce content patterns.',
      'Shopping-module design', 'Hero banner, product list, cart, and the complete checkout journey.',
      'Custom standards', 'Define a dedicated skin and typography rules on top of shared components.',
      'Delivery collaboration', 'Work with brand and development teams to ensure faithful implementation.',
      '▶ Key result', 'Successfully launched the OFF-WHITE China storefront module, creating a benchmark for Weimob luxury and streetwear clients.',
      'Page showcase', 'Delivered OFF-WHITE China storefront pages across product detail, orders, home, and categories.',
      'Product detail / wishlist — title bar, SKU wheel, and image-information switching',
      'Order detail — confirmation, product information, and order hierarchy',
      'Homepage — Tannin Series / Spring Limited / Band News',
      'Efficient components — product cards, SKU popups, and cart item controls',
      'Luxury e-commerce', 'Shopping module', 'Brand customization', 'Mobile'
    ],
    lingbiao: [
      'B2B SaaS',
      'LeadBid AI is an enterprise bidding workspace covering tender-document parsing, enterprise knowledge-base training, proposal generation, similarity review, and version management. I led the complete experience design from user research and information architecture to interaction and visual systems. The core of enterprise proposals is not writing faster but increasing the chance of winning through a compliant, controllable, reusable workflow.',
      '◆ What user problem do I solve?',
      'Help users parse tender documents, generate proposals, review similarity, rewrite with AI, and build a knowledge base—lowering the barrier to proposal writing while improving delivery speed, content quality, completeness, originality, and compliance.',
      '12.3 days → 1 day', 'Time per proposal',
      'Bidding is an entry point for B2B business. China sees more than RMB 30 trillion in bids annually, yet proposal writing still depends heavily on people. One technical proposal averages',
      '12.3 days', ', needs 3–5 collaborators; about', 'of its content comes from earlier proposals but is still found and copied manually; average failed-bid rework reaches', '3.2 cycles.',
      'Twelve interviews, three field observations, nine competitor reviews, and 218 survey responses produced three core user profiles.',
      'WANG', 'Proposal engineer · Manager Wang', 'P1 · frequent user', 'State-owned enterprise · bidding team · 5 years’ experience',
      'DAILY WORK', 'Owns 80+ bidding documents per year. Strong writer, limited energy, and highly intolerant of repetitive work.',
      'CARES MOST', 'Efficiency, control, professional expression, and traceability. AI cannot invent facts or it creates more repair work.',
      'WILLINGNESS TO PAY', '“Turning a week into a day saves 80 hours every month—I can calculate exactly what that is worth.”',
      'LI', 'Sales director · Director Li', 'P2 · medium-frequency user', 'Mid-size technology company · sales lead · also writes technical proposals',
      'Sales comes first, but 5–10 times per quarter he personally writes a proposal. He is not a specialist, but the work must be done.',
      'Low effort and high-quality deliverables. Template polish and image quality directly affect persuasion.',
      '“I cannot hire a proposal consultant every week. Just give me a first draft I can use.”',
      'ZHANG', 'Business owner · Mr. Zhang', 'P3 · infrequent, high-stakes decision maker', 'SME owner · occasional proposal writer',
      'There is no dedicated specialist. He writes important proposals himself fewer than ten times a year, and every one matters.',
      'Win rate. He will pay for features that improve the chance of winning and is highly sensitive to learning cost.',
      '“I may use it only a few times, but each time concerns a contract worth millions. It is worth it.”',
      'Together with Manager Wang, I reconstructed the twelve-day journey for a smart-campus proposal.',
      'Receive the task', 'KEY MOVEMENT', 'Download the tender, scan a 200+ page PDF, and mark scoring criteria.', 'PRIMARY PAIN', 'The PDF is not searchable and critical criteria are buried in attachments.',
      'Decompose requirements', 'Organize evaluation criteria, divide internal ownership, and create folders.', 'The structure is rebuilt every time with no standard template.',
      'Find historical material', 'Search past proposals for similar projects, solutions, imagery, and qualifications.', 'Historical proposals are scattered; finding material consumes 35% of the flow.',
      'Write the body', 'Draft by chapter, merge work from multiple people, and repeatedly adjust images and tables.', 'Rigid language, missing imagery, and inconsistent style.',
      'Similarity review and layout', 'Compare past proposals manually and adjust type size, spacing, and page numbers.', 'No similarity tool, no layout standard—everything depends on visual inspection.',
      'Submit and wait', 'Submit the PDF to the tendering party and wait for results.', 'After a loss, the team cannot trace which step failed.',
      'Users do not want AI to finish everything in one click. They want to review every step.',
      'Users are not opposed to AI writing; they do not trust it. They need a layered, interruptible, editable collaboration flow.',
      'Historical proposals are an enterprise’s most valuable and least manageable asset.',
      'Seventy-eight percent of respondents said finding past material takes the most time. The knowledge base is a core product, not an add-on.',
      'A 20% match with a previous proposal is an increasingly regulated gray area.',
      'Similarity control must be a product capability, not an afterthought: surface risk during generation and make it editable and rewritable.',
      'Experts and beginners expect fundamentally different things from the same tool.',
      'Experts need every parameter; beginners need useful defaults. One product must serve both through layered design.',
      'This is not simply building A because users asked for A. Conflicting needs require design trade-offs.',
      'How might AI feel like an expert collaborator rather than a black-box generator?',
      'Generating hundreds of pages is easy, but users may not understand or trust the result. Break generation into participatory, editable, trustworthy steps.',
      'Build trust', 'Control the flow', 'AI interaction pattern',
      'How can one workspace serve experts and beginners?', 'Experts want every parameter and speed; beginners fear choices and need defaults.',
      'Layered information architecture', 'Default-value design', 'Progressive disclosure',
      'How can abstract enterprise knowledge-building become concrete and visible?',
      '“Train AI to learn the company tone” is engineering language. Translate it into an experience users understand, want to complete, and can value.',
      'Visualize value', 'Control action cost', 'Close the feedback loop',
      'How should long workflows handle waiting and failure?',
      'Parsing and generating a proposal can take more than ten minutes. If any step fails or the network drops, how does the state resume?',
      'Long-task experience', 'Recoverable state', 'Surface errors early',
      'Four principles run through the product from the largest module to the smallest button.',
      'Layer, do not stack', 'Never make one screen generate, edit, and configure at once. Each step solves one task.',
      'Every option has a sensible default. Beginners can continue directly; experts can expand controls.',
      'Place similarity, compliance, and length checks before generation—do not reveal errors afterward.',
      'Interruptible and resumable', 'Long tasks can pause, roll back, and preserve state.',
      'Upload and parse', 'Upload tender documents, choose an industry, add materials, and attach a knowledge base.',
      'Configure and confirm', 'Length / quality, style / tables / imagery, similarity checks, and risk strategy.',
      'Generate and edit outline', 'AI-generated chapter outline, key-section markers, editing, reordering, and AI suggestions.',
      'Draft and review body', 'Streaming generation, selected-text rewrite, chapter expansion or compression, similarity review, and export.',
      'Page showcase', 'Eight core pages consolidate into three mental paths: four-step generation → knowledge capture → similarity review. Every screen resolves a specific user conflict.',
      'Lower the barrier to AI writing', 'Turn starting a new proposal from a five-minute flow into a thirty-second decision.',
      'Three-step progress', 'Upload / AI Parse / Generate labels show users where they are and how many steps remain, reducing long-flow anxiety.',
      'Drag and click entry points', 'Serve different habits: drag into the drop zone or click to choose a file.',
      'Import from project history', 'A shortcut for heavy users reduces repeated setup from five minutes to thirty seconds.',
      'Configure everything on one screen', 'Place six decisions—length, quality, style, tables, imagery, and similarity—on one screen so the end-to-end choice happens once.',
      'Smart defaults', 'Every option has a useful default. Beginners continue; experts expand parameters, serving both on one screen.',
      'Mark similarity and length risks before generation so users never discover afterward that the draft is unusable.',
      'Parameters made visible', 'A live preview shows the output style of each parameter and makes abstract writing quality perceptible.',
      'Let users review before AI runs', 'Core differentiation: users review and adjust the chapter outline before the body is generated.',
      'AI drafts the outline, users confirm or reorder it, then the body is generated—turning a black box into participatory, editable, trustworthy steps.',
      'Highlight key chapters', 'Color blocks flag high-scoring sections so attention goes to the highest-ROI content.',
      'AI adjustment suggestions', 'Selecting a chapter surfaces merge, split, and supplement suggestions, turning a blocked user into a guided user.',
      'An AI writing advisor can intervene at any time', 'Turn AI from a one-shot generator into a continuous collaborator.',
      'Streaming generation', 'Content remains readable as it generates, while chapter anchors keep users oriented in long documents.',
      'Rewrite selections', 'Select any text to rewrite, expand, or shorten it, reducing editing to one selection.',
      'Advisor support', 'The AI advisor remains available for compliance checks, expression suggestions, and citation completion across the workflow.',
      'Manage the enterprise’s most valuable asset', 'The knowledge base is a core product, not an add-on. Historical proposals are both the hardest and most valuable enterprise asset to manage.',
      'Dual-track structure', '“My proposals + Template library” captures company history while adding industry best practices for cold start.',
      'Smart classification', 'Automatic tags by industry, year, and purpose cut search time from 35% of the flow to 5%.',
      'Tone training', 'Uploaded documents teach the system the company’s voice so generated content sounds like the company, not a generic press release.',
      'Make similarity review a product capability', 'Similarity is not an afterthought. During generation, make risk visible, editable, and rewritable.',
      'Side-by-side document comparison', 'Compare tender and proposal side by side with automatic duplicate highlighting instead of manual page-by-page inspection.',
      'Three-level risk color', 'Red, yellow, and green separate must-fix from should-fix issues so attention is allocated efficiently.',
      'Statistics dashboard', 'Overall similarity, risk distribution, and source count appear at the top, surfacing risk the moment the page opens.',
      'Risk is visible, controllable, and editable', 'Each duplicate explains why it is risky and how to change it, compressing problem discovery and resolution to three seconds.',
      'Sort by risk', 'The left risk list prioritizes high-risk issues so users start with what matters most.',
      'Trace similar sources', 'Every match identifies the historical proposal source, preventing repeated mistakes with the same material.',
      'Preview rewrites', 'The right side shows the rewritten version and similarity change in real time, eliminating repeated navigation for validation.',
      'Make payment decisions clear', 'Turn remaining usage and renewal needs from mental arithmetic into an immediate answer.',
      'Visualize usage', 'A word-usage progress bar translates an abstract remainder into how many proposals can still be written.',
      'Proactive plan reminders', 'Show membership expiry and remaining days together with one-click renewal so work is never blocked midstream.',
      'Transparent, traceable spending', 'Purchase history supports time filters and visible states—paid or refunded—to build long-term payment trust.',
      '◉ LIVE · ONLINE VERSION', '▶ LAUNCH LIVE PROTOTYPE',
      '※ bolt.host security policy blocks iframe embedding; the prototype opens in a new window.',
      'LIVE PROTOTYPE · complete the full proposal-generation flow (Vibe Coding prototype)',
      'B2B product', 'Information architecture'
    ],
    vibecoding: [
      '▌ Vibe Coding / AI companion and forecasting',
      'An AI companion journal that forecasts tomorrow — inspired by Black Mirror and shipped full-stack by a designer with no handwritten code.',
      '◆ What is Xiaoman?',
      'Xiaoman is an AI companion journal that forecasts tomorrow. Inspired by Black Mirror, it asks: what if software could predict your future? With current technology, prediction requires understanding the present. Xiaoman therefore turns prediction into companionship: record one sentence now and it reveals an emotional trend.',
      '◆ How does it work?',
      'Say one thing each day by text or voice. Xiaoman remembers, organizes, and writes back. From journal entries and mood tags it produces Today’s Trend and Xiaoman’s Forecast: a probabilistic view of tomorrow’s mood that can support decisions or offer a little lottery-like inspiration. Companionship is the entry; prediction is the reward.',
      '0 lines', 'Handwritten code', '1 person', 'Design + development + deployment', 'LIVE and accessible',
      'Product principles', 'Journal entries feed the forecast', 'Understanding the present is the prerequisite for forecasting the future. One sentence or eight seconds of voice becomes data for tomorrow.',
      'Forecast, not assertion', 'Use probabilistic language such as 70% confidence—a friend’s intuition, not a fortune teller’s claim.',
      'Restrained companionship', 'AI does not interrupt or lecture. When you speak it keeps the thought; when you do not, it waits quietly.',
      'Vibe Coding workflow', 'Product definition', 'Start from a Black Mirror future-prediction hypothesis and derive the practical path of a companion journal.',
      'Design-driven', 'Create high-fidelity designs first, then give AI a visual specification: warm cream, rounded corners, generous space, and serif accents.',
      'Conversation as programming', 'Use Claude Code to build a Next.js App Router + Tailwind full-stack app with pluggable Supabase, AI, and SMS modules.',
      'Iterate and ship', 'Produce one usable version each day, test it on a real phone, then return to the conversation to revise—no waiting between design and validation.',
      'Page showcase', 'Three core screens: today’s forecast, a one-sentence journal, and a letter from Xiaoman.',
      'TODAY · FORECAST', 'Weather greeting + 60% trend + Xiaoman’s Forecast, predicting tomorrow’s mood from journal history.',
      'JOURNAL · SAY ONE THING', '“It does not need to be complete; one sentence is enough.” Type or speak and tag the current mood.',
      'REVIEW · A LETTER FROM XIAOMAN', 'AI turns fragments into a letter: words to keep, what Xiaoman noticed, and your journal.',
      'Prediction software works in Black Mirror because it knows enough about you. With current technology, users must willingly provide input. Xiaoman packages prediction as companionship: one sentence each day makes the forecast more accurate. Companionship is the method; prediction is the product’s soul.',
      'The Xiaoman MVP is deployed and available to experience.', '◉ LIVE · ONLINE VERSION', 'Xiaoman · online MVP', '▶ LAUNCH LIVE PROTOTYPE',
      '※ Hosted overseas; access from mainland China requires a VPN or other international connection.', 'LIVE PROTOTYPE · Xiaoman MVP (VPN required)',
      'No-code full-stack', 'Design-driven development'
    ]
  };

  function applyOrderedCopy(root, copy) {
    if (!copy) return false;
    const nodes = [];
    const uniqueSource = [];
    const seen = new Set();
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!node.parentElement || /^(SCRIPT|STYLE|NOSCRIPT|TEMPLATE)$/.test(node.parentElement.tagName)) continue;
      const source = node.nodeValue.trim();
      if (!hasChinese.test(source)) continue;
      nodes.push(node);
      if (!seen.has(source)) {
        seen.add(source);
        uniqueSource.push(source);
      }
    }
    if (uniqueSource.length !== copy.length) return false;
    const translated = new Map(uniqueSource.map((source, index) => [source, polishEnglish(copy[index])]));
    nodes.forEach((node) => {
      const source = node.nodeValue.trim();
      node.nodeValue = node.nodeValue.replace(source, translated.get(source));
    });
    return true;
  }

  function dynamicDetailKey(detail) {
    if (!detail) return '';
    const title = detail.querySelector('.pf-hero-title')?.textContent.trim() || '';
    return /(领标|LeadBid)/i.test(title) ? 'lingbiao'
      : /(喜马拉雅|Himalaya)/i.test(title) ? 'ximalaya'
      : title.includes('OFF-WHITE') ? 'weimob-1'
      : /(微商城|Weimob Storefront)/i.test(title) ? 'weimob-0'
      : /(小满|Xiaoman)/i.test(title) ? 'vibecoding'
      : '';
  }

  const replacements = Object.entries({ ...WORDS, ...PHRASES, ...FINAL_PHRASES })
    .sort((a, b) => b[0].length - a[0].length);
  const hasChinese = /[\u3400-\u9fff]/;
  // English pages combine authored case-study copy with dynamically translated
  // Chinese source text. Keep terminology consistent across both sources.
  const ENGLISH_POLISH = new Map([
    ['Jin Bowen', 'Bowen Jin'],
    ['JIN BOWEN — PORTFOLIO 2026', 'BOWEN JIN — PORTFOLIO 2026'],
    ['projectContext', 'Project context'],
    ['coreStrategy', 'Core strategy'],
    ['A commercial designer with a founder’s perspective', 'A product designer with a founder’s mindset'],
    ['Dual strength across B2B and B2C', 'B2B systems thinking × B2C growth design'],
    ['independently incubated SaaS and transaction platforms from 0 to 1', 'taken SaaS and transaction-based products from concept to launch'],
    ['viable revenue loops', 'sustainable revenue models'],
    ['commercialization design', 'commercialization strategy'],
    ['value-added growth paths', 'new revenue opportunities'],
    ['increased acquisition conversion by 131%', 'increased conversion by 131%'],
    ['increased 131% on Android and 62% on iOS', 'increased by 131% on Android and by 62% on iOS'],
    ['Payment conversion', 'Payment conversion rate'],
    ['payment conversion.', 'payment conversion rate.'],
    ['overseas English-learning product', 'international English-learning product'],
    ['Khan Kids', 'Khan Academy Kids'],
    ['educational digital toy', 'play-based digital learning experience'],
    ['learning cost', 'learning curve'],
    ['stage floor', 'lower bound of the target'],
    ['First-month payment conversion', 'First-month payment conversion rate'],
    ['ANCHOR CASE · SENIOR UX / OVERSEAS EDTECH', 'ANCHOR CASE · SENIOR UX / INTERNATIONAL EDTECH'],
    ['I specialize in 0→1 incubation, monetization, and AI product design.', 'I design and launch products from 0→1, with a focus on monetization and AI-powered experiences.'],
    ['Formerly at Alibaba · Meiweibuyongdeng / Weimob / Himalaya / Jiligaga.', 'Previously at Alibaba Local Services (Meiweibuyongdeng), Weimob, Himalaya, and Jiligaga.'],
    ['From 0→1 incubation to commercialization, and from international children’s education to AI SaaS—covering the core experiences and conversion systems across B2B and B2C.', 'From 0→1 product building to commercialization, and from international children’s education to AI SaaS—covering core experiences and conversion systems across B2B and B2C.'],
    ['Rebuilding the learning starting point so children want to come back', 'Redesigning onboarding to turn a first lesson into continued learning'],
    ['Jiligaga serves children aged 2–8 overseas.', 'Jiligaga is an English-learning product for children aged 2–8 in international markets.'],
    ['preparation for the first lesson', 'the first step of the learning journey'],
    ['Overall onboarding lift · V1.9 → V1.10', 'Overall onboarding completion increased by 15.86% · V1.9 → V1.10'],
    ['The interview sample included four families. Version data is a directional comparison with concurrent variables; it locates problems and guides iteration, but does not establish strict causality.', 'The interview sample included four families. Version-to-version comparisons are directional and include confounding factors, so they were used to identify problems and guide iteration rather than establish causality.'],
    ['experienced learners', 'children with prior English exposure'],
    ['The Have an Account click rate rose from 4% to 15%. Combined with roughly 10% loss at the start of sign-up, we treated this as a routing signal rather than a growth result.', 'The “Already have an account?” click-through rate increased from 4% to 15%. Combined with roughly 10% drop-off at the start of sign-up, we treated this as a routing signal rather than a growth result.'],
    ['Have an Account click-through rate', '“Already have an account?” click-through rate'],
    ['V1.10 Android only · at least +15pp · stage floor reached', 'V1.10 Android only · +15pp · minimum target reached'],
    ['Only Android V1.10 is confirmed at the 79% stage floor;', 'Only Android V1.10 is confirmed at the 79% lower bound of the target;'],
    ['BEFORE · expectations interrupted', 'BEFORE · Learning intent interrupted'],
    ['adding calendar-conversion effort', 'adding unnecessary calendar-conversion effort'],
    ['From V1.5 onward, Product, Data, and I tracked a complete funnel rather than a single onboarding conversion: product entry, sign-up, lesson entry, completion, and completed return lessons on D3 and D7.', 'From V1.5 onward, I worked with the product and data teams to track the full learning funnel: product entry, sign-up, lesson entry, completion, and whether users returned and completed another lesson on D3 and D7.'],
    ['The funnel showed that users could finish a first lesson, but numbers contracted sharply from day three.', 'The funnel showed that users could finish a first lesson, but it dropped sharply from D3 onward.'],
    ['Little Market go — Market applications and transaction trust', 'Little Market Go — Building trust into market applications and payments'],
    ['Little Market go is a WeChat Mini Program connecting organizers, vendors, and visitors. Starting from a real market-vending experience, I rebuilt flows scattered across group chats, spreadsheets, and private transfers into a trackable application and transaction loop.', 'Little Market Go is a WeChat Mini Program connecting organizers, vendors, and visitors. Starting from my own experience as a pop-up market vendor, I rebuilt flows scattered across group chats, spreadsheets, and private transfers into an end-to-end application and payment flow.'],
    ['One market visit exposed the industry’s trust gap', 'One experience as a vendor exposed a wider trust gap'],
    ['my RMB 500 deposit kept being delayed. They only said finance had not transferred it.', 'my RMB 500 deposit refund kept getting delayed. They just kept saying the finance team hadn’t processed it yet.'],
    ['acting as a trusted third party for one deposit, one event, and one fulfillment', 'acting as a trusted third party across each application, deposit, and event'],
    ['around the same event object', 'around the same event'],
    ['One event object carries the tasks of three roles', 'One event connects the workflows of all three roles'],
    ['while the platform closes the transaction, content, and data loops.', 'while the platform connects transactions, content, and operational data.'],
    ['AI enablement', 'AI-assisted operations'],
    ['AI enablement: differentiate through an AI + policy dual engine', 'AI-assisted operations: differentiate through an AI and policy engine'],
    ['Consumer side: upgrade the experience to upgrade the market', 'Visitor experience: improve discovery and on-site engagement'],
    ['repeat-purchase entry', 'repeat usage'],
    ['Rebuild classic Pac-Man as a landscape mobile competition about resource capture, growth comebacks, and timed leaderboard climbs.', 'Rebuild classic Pac-Man as a landscape mobile competition about resource capture, growth, counterattacks, and timed leaderboard climbs.'],
    ['Make every pickup change the next risk', 'Every pickup changes the risk landscape'],
    ['Climb the ranking', 'Climb the leaderboard'],
    ['Timed ranking sprint', 'Timed leaderboard sprint'],
    ['Grower', 'Farmer'],
    ['Landscape mobile layout with bilateral touch controls', 'Landscape mobile layout with dual-side touch controls'],
    ['Native Canvas single-page prototype', 'Vanilla JavaScript + Canvas prototype'],
    ['movement diagnosis', 'stroke analysis'],
    ['movement evidence', 'visual evidence'],
    ['movement scores', 'technique scores'],
    ['movement phases', 'stroke phases'],
    ['Capability radar and movement scores come from visible evidence, not fixed sample values; unreadable dimensions are marked unknown.', 'Capability radar and technique scores come from visible evidence, not fixed sample values; dimensions without sufficient visual evidence are left unscored.'],
    ['The sample report includes movement scores, kinetic-chain analysis, skill-point scores, key clips, coaching feedback, and next-stage priorities.', 'The sample report includes technique scores, kinetic-chain analysis, skill-point scores, key clips, coaching feedback, and next-stage priorities.'],
    ['Turn a tennis training video into reviewable movement evidence, kinetic-chain diagnosis, training advice, and a shareable report.', 'Turn a tennis training video into reviewable visual evidence, kinetic-chain diagnosis, practice plans, and a shareable report.'],
    ['Identify candidate contacts, practice segments, or rallies', 'Identify candidate strokes, practice segments, or rallies'],
    ['representative movement sequences', 'representative stroke sequences'],
    ['unreadable dimensions are marked unknown.', 'Dimensions without sufficient visual evidence are left unscored.'],
    ['Bind timestamps, frames, slow motion, and limitations.', 'Link each finding to timestamps, key frames, slow-motion evidence, and stated limitations.'],
    ['Training prescription and next step', 'Practice plan and next step'],
    ['Mobile long-image PNG', 'Scrollable PNG report'],
    ['This clip checks continuity.', 'This clip is used to assess stroke continuity.'],
    ['It is not another independent contact sample.', 'It is not a separate stroke sample.'],
    ['cannot count as a third independent hit.', 'should not be treated as a third independent stroke.'],
    ['Slow 0.75x', '0.75× Slow'], ['Normal 1x', '1× Normal'], ['Quick 1.25x', '1.25× Fast'], ['Sprint 2x', '2× Fast'],
    ['The movement chain has reached an efficient Advanced+ stage. The score combines ready position, kinetic transfer, contact timing, racquet-head release, follow-through, and body stability.', 'Technique assessment: strong kinetic-chain efficiency in the observed forehand. The score combines ready position, kinetic transfer, contact timing, racquet-head release, follow-through, and body stability.'],
    ['Three replays describe one stroke, not repeatability under varied placement, spin, or pressure.', 'The three clips are replays of the same stroke and do not demonstrate repeatability across different balls or situations.'],
    ['Scores use one complete forehand, one normal-speed replay, two slow-motion clips, and 8 fps keyframes;', 'Scores are based on one complete forehand, one normal-speed replay, two slow-motion replays, and key frames extracted at 8 fps;'],
    ['The outside leg and trunk create speed', 'The outside leg and trunk generate momentum'],
    ['Training boundary', 'Evidence limits'],
    ['From 0 to 1 · A lightweight learning product that redefined fragmented learning through audio content', 'From concept to MVP · A lightweight product designed for bite-sized learning through audio'],
    ['exploratory research', 'discovery'], ['Exploratory', 'Discovery'],
    ['modularize the product, build an accessible independent admin, and strengthen brand perception.', 'build a modular product architecture, create an accessible independent admin, and strengthen product branding.'],
    ['The learning path follows the user mental model. Course themes configure the page color;', 'The learning path mirrors how users think about their learning journey. Page colors adapt to course themes;'],
    ['Productizing knowledge cards improved perceived value', 'Turning knowledge cards into a reusable product feature improved perceived value'],
    ['0→1 incubation', '0→1 product building'],
    ['Weimob Storefront consumer-component redesign', 'Weimob Storefront · Consumer-Facing Component Redesign'],
    ['Graduated options', 'Tiered options'], ['learning cost.', 'learning curve.'],
    ['exacting brand expression', 'distinctive brand expression'],
    ['Extend a skin layer over standardized components to reduce development cost.', 'Apply a branded skin to standardized platform components to reduce development cost.'],
    ['Mobile first', 'Mobile-first'],
    ['enterprise knowledge-base training', 'enterprise knowledge-base management'],
    ['The core of enterprise proposals is not writing faster but increasing the chance of winning through a compliant, controllable, reusable workflow.', 'The goal is not simply to write faster, but to produce proposals that are compliant, controllable, reusable, and easier for teams to trust.'],
    ['◆ What user problem do I solve?', '◆ The problem'],
    ['Owns 80+ bidding documents per year. Strong writer, limited energy, and highly intolerant of repetitive work.', 'Handles 80+ bid documents per year. A strong writer with limited bandwidth who has little tolerance for repetitive work.'],
    ['each time concerns a contract worth millions', 'each bid may determine a multimillion-RMB contract'],
    ['Historical proposals are an enterprise’s most valuable and least manageable asset.', 'Historical proposals are among an enterprise’s most valuable—and hardest-to-manage—knowledge assets.'],
    ['A 20% match with a previous proposal is an increasingly regulated gray area.', 'High similarity with previous proposals can create compliance and originality risks.'],
    ['Default-value design', 'Smart defaults'], ['Control action cost', 'Reduce interaction cost'],
    ['Eight core pages consolidate into three mental paths:', 'Eight core screens map to three primary user journeys:'],
    ['turning a blocked user into a guided user.', 'helping users move forward when they get stuck.'],
    ['Tone training', 'Voice adaptation'],
    ['※ bolt.host security policy blocks iframe embedding; the prototype opens in a new window.', 'Prototype opens in a new tab due to hosting restrictions.'],
    ['An AI companion journal that forecasts tomorrow — inspired by Black Mirror and shipped full-stack by a designer with no handwritten code.', 'An AI companion journal that forecasts tomorrow’s mood — inspired by Black Mirror and designed and shipped end-to-end through AI-assisted coding.'],
    ['record one sentence now and it reveals an emotional trend.', 'record one sentence, and Xiaoman turns it into part of an emotional trend.'],
    ['offer a little lottery-like inspiration.', 'offer a small sense of playful anticipation.'],
    ['Forecast, not assertion', 'Forecast, not certainty'],
    ['When you speak it keeps the thought; when you do not, it waits quietly.', 'When you speak, it keeps the thought; when you don’t, it waits quietly.'],
    ['No-code full-stack', 'AI-assisted full-stack development']
  ]);
  const englishPolishReplacements = Array.from(ENGLISH_POLISH.entries()).sort((a, b) => b[0].length - a[0].length);
  let homeRoutingInstalled = false;
  let hashRoutingInstalled = false;
  let pageTextApplied = false;

  function polishEnglish(value) {
    let result = value;
    for (const [from, to] of englishPolishReplacements) result = result.split(from).join(to);
    return result;
  }

  function translate(value) {
    if (!value) return value;
    if (!hasChinese.test(value)) return polishEnglish(value);
    let result = value;
    // Two passes let polished whole-string fixes replace an intermediate
    // phrase created by the legacy word-level compatibility dictionary.
    for (let pass = 0; pass < 2; pass += 1) {
      for (const [from, to] of replacements) result = result.split(from).join(to);
    }
    return polishEnglish(result);
  }

  function includingRoot(root, selector) {
    const elements = root.querySelectorAll ? Array.from(root.querySelectorAll(selector)) : [];
    if (root.matches?.(selector)) elements.unshift(root);
    return elements;
  }

  const WEIMOB_VISUALS = {
    'img12.png': `
      <section class="wm-visual wm-cover" aria-label="Weimob Mall Revision overview">
        <div class="wm-topline"><span>WEIMOB · MALL REVISION</span><span>DESIGN SYSTEM / 2020</span></div>
        <div class="wm-cover-copy"><span class="wm-index">01 / CASE STUDY</span><h4>Storefront building,<br><em>rebuilt as a system.</em></h4><p>A component architecture that gives merchants stronger defaults, clearer decisions, and faster paths from an empty canvas to a credible store.</p></div>
        <div class="wm-cover-map"><div class="wm-core">MALL<br>REVISION</div><div class="wm-orbit wm-o1">Research</div><div class="wm-orbit wm-o2">Components</div><div class="wm-orbit wm-o3">Templates</div><div class="wm-orbit wm-o4">Outcomes</div></div>
      </section>`,
    'img13.png': `
      <section class="wm-visual wm-strategy" aria-label="Mall Revision strategy map">
        <div class="wm-topline"><span>STRATEGY MAP</span><span>FROM COMPLEXITY TO CONFIDENCE</span></div>
        <header><span class="wm-index">01 / SYSTEM DIRECTION</span><h4>One framework, four coordinated moves.</h4><p>We reframed storefront decoration as a guided publishing system—not a toolbox merchants had to decipher.</p></header>
        <div class="wm-strategy-flow"><div class="wm-strategy-root">Storefront<br>System</div><article><b>01</b><h5>Context</h5><p>Fragmented structures and inconsistent visual language.</p></article><article><b>02</b><h5>Evidence</h5><p>Merchant interviews and competitor workflow reviews.</p></article><article><b>03</b><h5>Capability</h5><p>Clear taxonomy, reusable bundles, and scenario templates.</p></article><article><b>04</b><h5>Outcome</h5><p>Lower setup cost and more consistent consumer pages.</p></article></div>
      </section>`,
    'img14.png': `
      <section class="wm-visual wm-diagnosis" aria-label="Problem diagnosis matrix">
        <div class="wm-topline"><span>DIAGNOSIS</span><span>SIGNAL → CAUSE → DESIGN RESPONSE</span></div>
        <header><span class="wm-index">02 / ROOT-CAUSE ANALYSIS</span><h4>We traced surface complaints back to structural causes.</h4></header>
        <div class="wm-matrix"><div class="wm-matrix-head"><span>Observed signal</span><span>System cause</span><span>Design response</span></div><div class="wm-matrix-row"><b>Too few useful page templates</b><p>Templates were treated as isolated pages rather than repeatable scenarios.</p><strong>Scenario-based template families</strong></div><div class="wm-matrix-row"><b>Admin tools felt difficult</b><p>Navigation followed platform logic instead of merchant tasks.</p><strong>Task-led builder architecture</strong></div><div class="wm-matrix-row"><b>Low consumer conversion</b><p>Too many weak entry points interrupted the purchase path.</p><strong>Intent-based storefront modules</strong></div><div class="wm-matrix-row"><b>Inconsistent visual quality</b><p>Component rules and page rules were disconnected.</p><strong>Shared tokens and governed defaults</strong></div></div>
      </section>`,
    'img15.png': `
      <section class="wm-visual wm-workspace" aria-label="Storefront builder workspace">
        <div class="wm-topline"><span>ADMIN REDESIGN 01</span><span>LIVE BUILDER</span></div>
        <header><span class="wm-index">03 / WORKSPACE</span><h4>Build the page while seeing the customer experience.</h4><p>Components, preview, and settings stay in one continuous workspace.</p></header>
        <div class="wm-builder"><aside class="wm-palette"><div class="wm-pane-title">Components <i>18</i></div><div class="wm-search">Search components</div><div class="wm-tool-grid"><span>Hero</span><span>Product</span><span>Gallery</span><span>Text</span><span>Coupon</span><span>Tabs</span><span>Video</span><span>Store</span><span>Divider</span></div></aside><main class="wm-canvas"><div class="wm-canvas-bar"><span>Mobile preview</span><b>Saved</b></div><div class="wm-phone-ui"><div class="wm-phone-nav">Store Home ···</div><div class="wm-phone-hero">SUMMER<br><b>MARKET</b></div><div class="wm-phone-products"><i></i><i></i><i></i><i></i></div></div></main><aside class="wm-inspector"><div class="wm-pane-title">Product grid</div><label>Layout <span>2 columns</span></label><div class="wm-segment"><b>2</b><b>3</b><b>4</b></div><label>Alignment <span>Left</span></label><label>Price <span>Visible</span></label><label>Cart action <span>Visible</span></label><button>Publish changes</button></aside></div>
      </section>`,
    'img16.png': `
      <section class="wm-visual wm-taxonomy" aria-label="Component taxonomy redesign">
        <div class="wm-topline"><span>ADMIN REDESIGN 02</span><span>COMPONENT TAXONOMY</span></div>
        <header><span class="wm-index">04 / FINDABILITY</span><h4>Organize by merchant intent, not by internal ownership.</h4><p>A small number of predictable families makes a large library easier to scan and teach.</p></header>
        <div class="wm-family-tabs"><b>Foundation</b><span>Commerce</span><span>Marketing</span><span>Content</span><span>Operations</span></div><div class="wm-component-grid"><article><i>H</i><b>Heading</b><small>FOUNDATION</small></article><article><i>▦</i><b>Product grid</b><small>COMMERCE</small></article><article><i>%</i><b>Coupon</b><small>MARKETING</small></article><article><i>◫</i><b>Gallery</b><small>CONTENT</small></article><article><i>⌕</i><b>Search</b><small>COMMERCE</small></article><article><i>◎</i><b>Membership</b><small>OPERATIONS</small></article><article><i>▶</i><b>Video</b><small>CONTENT</small></article><article><i>↗</i><b>Store entry</b><small>OPERATIONS</small></article></div>
      </section>`,
    'img17.png': `
      <section class="wm-visual wm-bundles" aria-label="Reusable component bundle workflow">
        <div class="wm-topline"><span>ADMIN REDESIGN 03</span><span>REUSABLE BUNDLES</span></div>
        <header><span class="wm-index">05 / REPEATABILITY</span><h4>Turn a good configuration into a reusable building block.</h4><p>Merchants can save proven combinations and apply them across pages without starting over.</p></header>
        <div class="wm-bundle-flow"><article><span>01</span><h5>Compose</h5><div class="wm-mini-stack"><i></i><i></i><i></i></div><p>Combine product, navigation, and campaign modules.</p></article><b>→</b><article><span>02</span><h5>Save as bundle</h5><div class="wm-bundle-card">Weekend sale<br><small>4 components</small></div><p>Name and govern the configuration once.</p></article><b>→</b><article><span>03</span><h5>Reuse</h5><div class="wm-page-stack"><i></i><i></i><i></i></div><p>Deploy consistently across storefront scenarios.</p></article></div>
      </section>`,
    'img18.png': `
      <section class="wm-visual wm-governance" aria-label="Component governance model">
        <div class="wm-topline"><span>ADMIN REDESIGN 04</span><span>GOVERNED FLEXIBILITY</span></div>
        <header><span class="wm-index">06 / DEFAULTS</span><h4>Freedom where it matters. Guardrails where it protects quality.</h4></header>
        <div class="wm-govern-grid"><article><span>FIXED</span><h5>Interaction rules</h5><p>Tap areas, states, accessibility, and purchase behavior.</p><div class="wm-meter"><i style="width:92%"></i></div></article><article><span>GUIDED</span><h5>Layout options</h5><p>Curated density, alignment, and merchandising presets.</p><div class="wm-meter"><i style="width:68%"></i></div></article><article><span>FLEXIBLE</span><h5>Brand expression</h5><p>Color, imagery, copy, and campaign-level styling.</p><div class="wm-meter"><i style="width:45%"></i></div></article></div>
      </section>`,
    'img19.png': `
      <section class="wm-visual wm-audience" aria-label="Consumer storefront intent model">
        <div class="wm-topline"><span>CONSUMER REDESIGN 01</span><span>INTENT MODEL</span></div>
        <header><span class="wm-index">07 / STOREFRONT STRATEGY</span><h4>Design the home page for three levels of shopping intent.</h4></header>
        <div class="wm-intent"><article class="is-hot"><b>HIGH INTENT</b><span>Search and direct product entry</span><strong>Find it fast</strong></article><article><b>DEFINED CATEGORY</b><span>Category navigation and promotions</span><strong>Compare with confidence</strong></article><article><b>OPEN DISCOVERY</b><span>Recommendations and editorial content</span><strong>Discover what fits</strong></article></div>
      </section>`,
    'img20.png': `
      <section class="wm-visual wm-storefront" aria-label="Fresh food storefront template">
        <div class="wm-topline"><span>CONSUMER REDESIGN 02</span><span>FRESH MARKET TEMPLATE</span></div>
        <div class="wm-store-layout"><div class="wm-store-copy"><span class="wm-index">08 / SCENARIO TEMPLATE</span><h4>Merchandising that adapts to customer intent.</h4><p>Direct buyers see search and repeat purchases first. Browsers receive category cues, seasonal offers, and curated discovery.</p><div class="wm-store-notes"><span>Intent-led hierarchy</span><span>Campaign-ready modules</span><span>Reusable category patterns</span></div></div><div class="wm-shop-phone"><div class="wm-shop-nav">FRESH MARKET <b>⌕</b></div><div class="wm-shop-banner">SEASONAL<br><strong>FRESH PICKS</strong></div><div class="wm-shop-cats"><i>Fruit</i><i>Dairy</i><i>Bakery</i><i>Drinks</i></div><div class="wm-shop-grid"><span><i></i><b>Market box</b><small>$24</small></span><span><i></i><b>Daily fruit</b><small>$12</small></span><span><i></i><b>Cold brew</b><small>$8</small></span><span><i></i><b>Fresh bread</b><small>$6</small></span></div></div></div>
      </section>`,
    'img21.png': `
      <section class="wm-visual wm-templates" aria-label="Scenario template family">
        <div class="wm-topline"><span>CONSUMER REDESIGN 03</span><span>TEMPLATE FAMILY</span></div>
        <header><span class="wm-index">09 / SCALABLE EXPRESSION</span><h4>One system, distinct storefront personalities.</h4><p>Shared structure preserves usability while scenario presets create credible category-specific expression.</p></header>
        <div class="wm-template-grid"><article class="wm-tpl-gold"><span>FOOD & DRINK</span><div><b>Golden Hour</b><small>Discovery-led editorial template</small></div></article><article class="wm-tpl-green"><span>HOME & LIVING</span><div><b>Quiet Utility</b><small>Category-led collection template</small></div></article><article class="wm-tpl-pink"><span>BEAUTY</span><div><b>New Rituals</b><small>Campaign-led launch template</small></div></article></div>
      </section>`,
    'img22.png': `
      <section class="wm-visual wm-results" aria-label="Mall Revision results dashboard">
        <div class="wm-topline"><span>RESULTS</span><span>POST-LAUNCH SIGNALS</span></div>
        <div class="wm-results-grid"><div class="wm-results-copy"><span class="wm-index">10 / OUTCOME</span><h4>Better defaults shifted adoption toward scenario templates.</h4><p>Within the observed period, merchants increasingly selected governed industry templates instead of rebuilding generic pages from scratch.</p><div class="wm-result-stats"><span><b>80+</b>legacy templates audited</span><span><b>5</b>component families</span><span><b>1</b>shared storefront system</span></div></div><div class="wm-chart"><div class="wm-chart-label"><span>Generic template</span><span>Scenario template</span></div><svg viewBox="0 0 520 220" role="img" aria-label="Template adoption trend"><path d="M20 38 C130 52 220 70 300 116 S430 160 500 176"/><path class="is-up" d="M20 192 C105 184 150 126 230 116 S360 66 500 46"/></svg><div class="wm-chart-axis"><span>APR</span><span>MAY</span><span>JUN</span></div></div></div>
      </section>`,
    'img24.png': `
      <section class="wm-visual ow-cover" aria-label="OFF-WHITE commerce module overview"><div class="ow-grid"></div><div class="ow-mark">WEIMOB × OFF-WHITE</div><div class="ow-cover-copy"><span>PROJECT 02 / BRAND COMMERCE</span><h4>COMMERCE<br>IN QUOTES™</h4><p>A mobile shopping layer that translates a distinct fashion language without breaking platform reuse.</p></div><div class="ow-code">MODULE_02<br>CHINA / MOBILE<br>2020</div></section>`,
    'img25.png': `
      <section class="wm-visual ow-product" aria-label="OFF-WHITE product detail experience"><div class="wm-topline"><span>OFF-WHITE / PRODUCT DETAIL</span><span>01 / 04</span></div><div class="ow-layout"><div class="ow-copy"><span class="wm-index">PRODUCT SYSTEM</span><h4>Make selection feel editorial, not mechanical.</h4><p>Image-led storytelling, a persistent wishlist, and a focused SKU selector preserve the brand while keeping purchase decisions clear.</p><ul><li>Immersive product gallery</li><li>Wheel-based size selection</li><li>Persistent save state</li></ul></div><div class="ow-phone"><div class="ow-nav">← <b>PRODUCT</b> ♡</div><div class="ow-product-art"><span>“OBJECT”</span></div><h5>Diagonal Arrow Sneaker</h5><p>White / Black · Limited release</p><div class="ow-sizes"><b>39</b><b class="on">40</b><b>41</b><b>42</b></div><button>ADD TO BAG — ¥4,600</button></div></div></section>`,
    'img26.png': `
      <section class="wm-visual ow-order" aria-label="OFF-WHITE order flow"><div class="wm-topline"><span>OFF-WHITE / ORDER FLOW</span><span>02 / 04</span></div><header><span class="wm-index">CHECKOUT HIERARCHY</span><h4>Reduce the order to the decisions that matter.</h4></header><div class="ow-checkout"><article><span>01</span><h5>Delivery</h5><p>Shanghai · Jing’an District</p><b>EDIT</b></article><article><span>02</span><h5>Items</h5><p>Diagonal Arrow Sneaker · EU 40</p><b>1 × ¥4,600</b></article><article><span>03</span><h5>Payment</h5><p>WeChat Pay</p><b>SELECTED</b></article><div class="ow-total"><span>TOTAL</span><strong>¥4,600</strong><button>PLACE ORDER</button></div></div></section>`,
    'img27.png': `
      <section class="wm-visual ow-home" aria-label="OFF-WHITE storefront home"><div class="wm-topline"><span>OFF-WHITE / HOME</span><span>03 / 04</span></div><div class="ow-home-grid"><div class="ow-home-hero"><span>“SPRING / SUMMER”</span><h4>NEW<br>OBJECTS</h4><button>EXPLORE COLLECTION →</button></div><div class="ow-home-tile is-black"><span>01</span><b>TANNIN<br>SERIES</b></div><div class="ow-home-tile is-white"><span>02</span><b>BAND<br>NEWS</b></div><div class="ow-home-tile is-accent"><span>03</span><b>LIMITED<br>DROP</b></div></div></section>`,
    'img28.png': `
      <section class="wm-visual ow-system" aria-label="OFF-WHITE mobile commerce system"><div class="wm-topline"><span>OFF-WHITE / SYSTEM DELIVERY</span><span>04 / 04</span></div><header><span class="wm-index">CONNECTED EXPERIENCE</span><h4>Four views. One unmistakable system.</h4><p>Category, home, profile, and product detail share hierarchy, tokens, and interaction behavior.</p></header><div class="ow-screen-grid"><article><span>01</span><div class="ow-screen-lines"><i></i><i></i><i></i></div><b>CATEGORY</b></article><article><span>02</span><div class="ow-screen-hero-mini">“NEW”</div><b>HOME</b></article><article><span>03</span><div class="ow-screen-menu"><i></i><i></i><i></i><i></i></div><b>PROFILE</b></article><article><span>04</span><div class="ow-screen-product-mini"></div><b>PRODUCT</b></article></div></section>`
  };

  const WEIMOB_ENGLISH_IMAGE_SOURCES = {
    'img12.png': 'assets/en-weimob-img12.jpg',
    'img13.png': 'assets/en-weimob-img13.jpg',
    'img14.png': 'assets/en-weimob-img14.jpg',
    'img15.png': 'assets/en-weimob-img15.jpg',
    'img16.png': 'assets/en-weimob-img16.jpg',
    'img17.png': 'assets/en-weimob-img17.jpg',
    'img18.png': 'assets/en-weimob-img18.jpg',
    'img19.png': 'assets/en-weimob-img19.jpg',
    'img20.png': 'assets/en-weimob-img20.jpg',
    'img21.png': 'assets/en-weimob-img21.jpg',
    'img22.png': 'assets/en-weimob-img22.jpg',
    'img25.png': 'assets/en-offwhite-img25.jpg',
    'img26.png': 'assets/en-offwhite-img26.jpg',
    'img28.png': 'assets/en-offwhite-img28.jpg',
  };

  function useWeimobEnglishImages(detail) {
    detail.querySelectorAll('.pf-figure img[src]').forEach((img) => {
      const raw = img.getAttribute('src') || '';
      const [assetPath, suffix = ''] = raw.split(/(?=[?#])/u, 2);
      const filename = assetPath.slice(assetPath.lastIndexOf('/') + 1);
      const replacement = WEIMOB_ENGLISH_IMAGE_SOURCES[filename];
      if (!replacement) return;
      img.setAttribute('src', `${replacement}${suffix}`);
      img.dataset.englishProfileImage = 'true';
    });
  }

  function renderWeimobEnglishVisuals(detail) {
    detail.querySelectorAll('.pf-figure img[src]').forEach((img) => {
      const filename = (img.getAttribute('src') || '').split('/').pop().split(/[?#]/)[0];
      const visual = WEIMOB_VISUALS[filename];
      if (!visual) return;
      const figure = img.closest('.pf-figure');
      if (figure) figure.outerHTML = visual;
    });
    const headingCopy = ['Project context', 'Core strategy', 'Design process', 'Page showcase', 'Results'];
    detail.querySelectorAll('.pf-h').forEach((heading, index) => {
      if (headingCopy[index]) heading.textContent = headingCopy[index];
    });
    const backLabel = detail.querySelector('.pf-back');
    if (backLabel) {
      Array.from(backLabel.childNodes)
        .filter((node) => node.nodeType === Node.TEXT_NODE)
        .forEach((node) => node.remove());
      backLabel.append(document.createTextNode(' BACK TO PROJECTS'));
    }
    detail.classList.add('pf-weimob-en');
  }

  function repairJiligagaAsset(element, attribute = 'src') {
    if (!location.pathname.includes('/en/case-studies/jiligaga/')) return false;
    const raw = element.getAttribute?.(attribute);
    if (!raw) return false;
    if (!/(?:^|\/)jiligaga\//.test(raw)) return false;
    const [assetPath, suffix = ''] = raw.split(/(?=[?#])/u, 2);
    const filename = assetPath.slice(assetPath.lastIndexOf('/') + 1);
    if (!filename) return false;
    const englishRoot = location.pathname.indexOf('/en/');
    const siteBase = englishRoot >= 0 ? location.pathname.slice(0, englishRoot) : '';
    const repaired = `${siteBase}/case-studies/jiligaga/jiligaga/${filename}${suffix}`;
    if (raw === repaired) return false;
    element.setAttribute(attribute, repaired);
    return true;
  }

  function optimizeMedia(root) {
    includingRoot(root, 'img').forEach((img) => {
      repairJiligagaAsset(img);
      img.decoding = 'async';
      const isCritical = Boolean(img.closest('.hero, .hero-logo, .hero-character, .case-logo'));
      if (!isCritical && !img.hasAttribute('loading')) img.loading = 'lazy';
    });
    includingRoot(root, 'video:not([autoplay])').forEach((video) => {
      video.preload = 'none';
    });
    includingRoot(root, 'link[rel="preload"][as="image"][href]').forEach((link) => {
      repairJiligagaAsset(link, 'href');
    });
  }

  function normalizeLocaleLinks(root) {
    const pathname = location.pathname;
    const englishRoute = pathname.includes('/en/') || pathname.endsWith('/en/index.html');
    const englishMarker = pathname.indexOf('/en/');
    const siteRoot = englishMarker >= 0
      ? pathname.slice(0, englishMarker)
      : pathname.replace(/\/(?:index\.html)?$/, '').replace(/\/$/, '');
    const localeCaseRoot = `${siteRoot}${englishRoute ? '/en' : ''}/case-studies/`;
    includingRoot(root, 'a[href]').forEach((link) => {
      const raw = link.getAttribute('href') || '';
      if (!raw || raw.startsWith('#') || /^(?:https?:|mailto:|tel:|javascript:)/i.test(raw)) return;
      if (englishRoute) {
        const normalized = raw.replace(/^\/?case-studies\//, localeCaseRoot);
        if (normalized !== raw) link.setAttribute('href', normalized);
      } else {
        const normalized = raw.replace(/^\/?en\/case-studies\//, localeCaseRoot);
        if (normalized !== raw) link.setAttribute('href', normalized);
      }
    });
  }

  function installCaseBack(root) {
    const back = root.querySelector?.('.case-back');
    if (!back || back.dataset.localeBackInstalled) return;
    back.dataset.localeBackInstalled = 'true';
    back.addEventListener('click', () => {
      const pathname = location.pathname;
      const englishRoute = pathname.includes('/en/');
      const englishMarker = pathname.indexOf('/en/');
      const siteRoot = englishMarker >= 0
        ? pathname.slice(0, englishMarker)
        : pathname.replace(/\/(?:index\.html)?$/, '').replace(/\/$/, '');
      window.location.href = `${siteRoot}${englishRoute ? '/en/' : '/'}`;
    });
  }

  function englishAttributeFallback(el, attr) {
    if (attr === 'alt') {
      const caption = el.closest('figure')?.querySelector('figcaption')?.textContent.trim();
      if (caption && !hasChinese.test(caption)) return `Project visual: ${caption}`;
      return 'Project case-study visual';
    }
    if (attr === 'aria-label') {
      if (el.matches('nav, [role="navigation"]')) return 'Page navigation';
      if (el.matches('[role="progressbar"]')) return 'Progress indicator';
      if (el.matches('a, button')) return 'Open project detail';
      return 'Case-study section';
    }
    if (attr === 'title') return 'Project detail';
    if (el.matches('meta')) return 'Jin Bowen UX portfolio case study';
    return 'Project information';
  }

  function process(root) {
    document.documentElement.lang = 'en';
    // Weimob keeps the source case-study slides in both locales so the Chinese visual language stays intact.
    const initialDetail = root.matches?.('.pf-detail') ? root : root.querySelector?.('.pf-detail');
    if (initialDetail && !initialDetail.dataset.englishProcessed) {
      const initialKey = dynamicDetailKey(initialDetail);
      if (initialKey && applyOrderedCopy(initialDetail, DYNAMIC_TEXT[initialKey])) {
        initialDetail.dataset.englishProcessed = initialKey;
      }
    }
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!node.parentElement || /^(SCRIPT|STYLE|NOSCRIPT|TEMPLATE)$/.test(node.parentElement.tagName)) continue;
      textNodes.push(node);
    }
    textNodes.forEach((node) => {
      const next = translate(node.nodeValue);
      if (next !== node.nodeValue) node.nodeValue = next;
    });
    if (!pageTextApplied && root === document) {
      const route = location.pathname.endsWith('index.html')
        ? location.pathname.slice(0, -'index.html'.length)
        : location.pathname;
      const copy = PAGE_TEXT[route];
      if (copy) {
        const nodes = [];
        const uniqueSource = [];
        const seen = new Set();
        const pageWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        while (pageWalker.nextNode()) {
          const node = pageWalker.currentNode;
          if (!node.parentElement || /^(SCRIPT|STYLE|NOSCRIPT|TEMPLATE)$/.test(node.parentElement.tagName)) continue;
          const source = node.nodeValue.trim();
          if (!hasChinese.test(source)) continue;
          nodes.push(node);
          if (!seen.has(source)) {
            seen.add(source);
            uniqueSource.push(source);
          }
        }
        pageTextApplied = applyOrderedCopy(document.body, copy);
      }
    }
    const detail = root.matches?.('.pf-detail') ? root : root.querySelector?.('.pf-detail');
    if (detail) {
      const key = dynamicDetailKey(detail);
      if (!detail.dataset.englishProcessed && applyOrderedCopy(detail, DYNAMIC_TEXT[key])) {
        detail.dataset.englishProcessed = key;
      }
      if (/^weimob(?:-|$)/.test(key || '')) useWeimobEnglishImages(detail);
    }
    root.querySelectorAll?.('[aria-label], [title], [alt], meta[content]').forEach((el) => {
      for (const attr of ['aria-label', 'title', 'alt', 'content']) {
        if (!el.hasAttribute(attr)) continue;
        const translated = translate(el.getAttribute(attr));
        el.setAttribute(attr, hasChinese.test(translated) ? englishAttributeFallback(el, attr) : translated);
      }
    });
    optimizeMedia(root);
    normalizeLocaleLinks(root);
    installCaseBack(root);
    if (!hashRoutingInstalled) {
      hashRoutingInstalled = true;
      document.addEventListener('click', (event) => {
        const link = event.target.closest?.('a[href^="#"]');
        const hash = link?.getAttribute('href');
        if (!hash || hash === '#') return;
        const target = document.getElementById(hash.slice(1));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', `${location.pathname}${location.search}${hash}`);
      }, true);
    }
    if (location.pathname.includes('/en/') || location.pathname.endsWith('/en/index.html')) {
      root.querySelectorAll?.('a[href^="case-studies/"]').forEach((link) => {
        const pathname = location.pathname;
        const marker = pathname.indexOf('/en/');
        const siteRoot = marker >= 0 ? pathname.slice(0, marker) : '';
        link.setAttribute('href', `${siteRoot}/en/${link.getAttribute('href')}`);
      });
      if (!homeRoutingInstalled) {
        homeRoutingInstalled = true;
        document.addEventListener('click', (event) => {
          const card = event.target.closest?.('[data-key]');
          if (!card) return;
          const pathname = location.pathname;
          const marker = pathname.indexOf('/en/');
          const siteRoot = marker >= 0 ? pathname.slice(0, marker) : '';
          const destinations = {
            jiligaga: `${siteRoot}/en/case-studies/jiligaga/`,
            xiaoshiji: `${siteRoot}/en/case-studies/xiaoshiji/`
          };
          if (destinations[card.dataset.key]) {
            event.preventDefault();
            event.stopImmediatePropagation();
            window.location.href = destinations[card.dataset.key];
          }
        }, true);
      }
    }
  }

  process(document);
  document.addEventListener('error', (event) => {
    if (event.target?.matches?.('img[src]')) repairJiligagaAsset(event.target);
  }, true);
  const pendingRoots = new Set();
  let processingScheduled = false;
  function flushPendingRoots() {
    processingScheduled = false;
    const roots = Array.from(pendingRoots);
    pendingRoots.clear();
    roots
      .filter((root) => !roots.some((candidate) => candidate !== root && candidate.contains?.(root)))
      .forEach(process);
    document.documentElement.lang = 'en';
  }
  new MutationObserver((records) => {
    for (const record of records) {
      record.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) pendingRoots.add(node);
        else if (node.nodeType === Node.TEXT_NODE) {
          const next = translate(node.nodeValue);
          if (next !== node.nodeValue) node.nodeValue = next;
        }
      });
    }
    if (pendingRoots.size && !processingScheduled) {
      processingScheduled = true;
      requestAnimationFrame(flushPendingRoots);
    }
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
