// SubSage Landing Page — Bilingual Copy Data

export const translations = {
  en: {
    // Nav
    navFeatures: 'Features',
    navScreenshots: 'Preview',
    navGithub: 'GitHub',
    navInstall: 'Install',
    langSwitch: '中',

    // Hero
    heroBadge: 'Open Source \u00b7 Self-Hosted \u00b7 Free Forever',
    heroTitle: 'Your AI Agent\'s',
    heroTitleHighlight: 'Subscription Memory',
    heroSubtitle: 'One sentence to set up. Manage everything in natural language.',
    heroCta: 'Get Started',
    heroCtaDemo: 'See Demo ↓',
    heroCtaGithub: 'Star on GitHub',

    // Hero Install Tabs (2 tabs only)
    installTabAgent: '🤖 AI Agent',
    installTabScript: '⚡ One-Line Install',
    installAgentHint: 'Copy this to your AI Agent:',
    installAgentCmd: '"Install SubSage by running curl -fsSL https://raw.githubusercontent.com/wangjc683/subsage/main/install.sh | bash — after it starts, open http://localhost:8321 in my browser."',
    installScriptCmd: 'curl -fsSL https://raw.githubusercontent.com/wangjc683/subsage/main/install.sh | bash',
    installCopy: 'Copy',
    installCopied: 'Copied!',

    // Hero Chat (typewriter)
    demo1User: 'I just subscribed to Claude Pro, $20/month, paying with Visa',
    demo1Ai: 'Done! Added Claude Pro — $20/mo, AI category. Your total monthly AI spending is now $65.',
    demo2User: 'What\'s renewing this week?',
    demo2Ai: '2 renewals coming up: Spotify ($9.99, tomorrow) and iCloud+ ($2.99, Friday).',
    demo3User: 'Cancel Netflix and pause Midjourney',
    demo3Ai: 'Done. Netflix → cancelled, Midjourney → paused. This saves you $28.98/month.',

    // Interfaces Section
    interfacesTitle: 'Talk to your Agent,',
    interfacesAccent: 'SubSage does the rest',
    termCmd: '> How much am I spending on AI tools?',
    termOutput: '5 AI subs totaling $89/mo\n  ChatGPT Plus   $20/mo\n  Claude Pro     $20/mo\n  Cursor Pro     $20/mo\n  Midjourney     $10/mo\n  GitHub Copilot $19/mo',
    ideUser: 'Cancel Netflix and pause Midjourney',
    ideAgent: 'Done. Netflix → cancelled, Midjourney → paused. This saves you $28.98/month.',
    visionUserText: 'Help me log this bill',
    visionNote: 'Detected from billing document',

    // Features
    featuresTitle: 'The foundation is here',
    featuresSubtitle: 'The rest is up to your Agent',
    feat1Title: 'AI Agent Native',
    feat1Desc: 'Works with OpenClaw, Claude Code, and any AI Agent. One-click Skill.md integration, zero config.',
    feat2Title: 'Multi-Currency',
    feat2Desc: 'Real exchange rates, updated daily. All spending unified to your base currency.',
    feat3Title: 'Smart Analytics',
    feat3Desc: 'Monthly, yearly, and daily breakdown with category insights.',
    feat4Title: 'Calendar View',
    feat4Desc: 'Visual renewal timeline. Never miss a billing date.',
    feat5Title: 'Self-Hosted',
    feat5Desc: 'Your data stays on your machine. No cloud, no tracking.',
    feat6Title: 'Import & Export',
    feat6Desc: 'One-click export to Excel or JSON. Backup and migrate anytime.',
    feat7Title: 'Themes',
    feat7Desc: 'Dark, light, and system mode. Easy on the eyes, any time.',
    feat8Title: 'PWA Ready',
    feat8Desc: 'Add to your home screen. Full-screen experience, no app store needed.',
    feat9Title: 'Infinite Possibilities',
    feat9Desc: 'Your Agent, your rules. Custom reminders, smart alerts, spending reports — if you can describe it, your Agent can do it.',

    // How It Works
    hiwTitle: 'How it works',
    hiwStep1Title: 'Install',
    hiwStep1Desc: 'Copy one sentence to your AI Agent. Deployed in 30 seconds.',
    hiwStep1Link: 'Try it →',
    hiwStep2Title: 'Connect',
    hiwStep2Desc: 'Copy the Skill from the SubSage setup page. Your Agent instantly learns to manage subscriptions.',
    hiwStep3Title: 'Go',
    hiwStep3Desc: 'Ask your Agent to manage, open the Dashboard to see it all.',

    // Screenshots
    screenshotsTitle: 'Built for Agents.',
    screenshotsSubtitle: 'Humans welcome',
    ssTabOverview: 'Overview',
    ssTabSubs: 'Subscriptions',
    ssTabCalendar: 'Calendar',
    ssTabAgent: 'Agent Setup',
    ssTabEditModal: 'Edit Modal',
    ssLight: 'Light',
    ssDark: 'Dark',

    // Quick Start
    qsTitle: 'Ready in 30 seconds',
    qsAgentTitle: 'Let your AI Agent do the work',
    qsAgentDesc: 'Copy this to your AI Agent — it handles the rest.',
    qsAgentTabScript: '🤖 Quick Install',
    qsAgentTabDocker: '🐳 Docker Install',
    installAgentDockerCmd: '"Install SubSage with Docker by running docker run -d --name subsage -p 8321:8321 -v subsage-data:/data wangjc683/subsage — after it starts, open http://localhost:8321 in my browser."',
    qsManualTitle: 'Or install yourself',
    qsTabScript: '⚡ One-Line Install',
    qsTabDockerRun: '🐳 Docker Run',
    qsTabCompose: '🐳 Docker Compose',
    qsScriptCmd: 'curl -fsSL https://raw.githubusercontent.com/wangjc683/subsage/main/install.sh | bash',
    qsDockerCmd: 'docker run -d --name subsage -p 8321:8321 -v subsage-data:/data wangjc683/subsage',
    qsComposeCmd: 'curl -O https://raw.githubusercontent.com/wangjc683/subsage/main/docker-compose.yml\ndocker compose up -d',
    qsPlatformSystems: 'Linux · macOS · Windows (Docker) · x86 · ARM · Apple Silicon',
    qsPlatformDevices: 'From your laptop to a Raspberry Pi or home NAS — it just works.',
    dockerHint: 'Available on Linux, macOS & Windows — Requires Docker, get it at',
    agentHint: 'Works with OpenClaw, or any other AI Agents',
    scriptHint: 'Available on Linux & macOS',

    // Footer
    footerStar: 'Star SubSage on GitHub',
    footerBrandDesc: 'Open-source subscription tracker for the AI Agent era.',
    footerLinks: 'Links',
    footerDocs: 'Documentation',
    footerCommunity: 'Community',
    footer15perf: 'An interactive guide to cinema\'s largest film format',
  },

  zh: {
    // Nav
    navFeatures: '功能',
    navScreenshots: '预览',
    navGithub: 'GitHub',
    navInstall: '安装',
    langSwitch: 'EN',

    // Hero
    heroBadge: '开源 · 自托管 · 永久免费',
    heroTitle: 'AI Agent 原生',
    heroTitleHighlight: '订阅管家',
    heroSubtitle: '一句话安装与配置，自然语言管理一切。',
    heroCta: '开始使用',
    heroCtaDemo: '查看演示 ↓',
    heroCtaGithub: 'GitHub Star',

    // Hero Install Tabs
    installTabAgent: '🤖 AI Agent',
    installTabScript: '⚡ 一键安装',
    installAgentHint: '复制这段话给你的 AI Agent:',
    installAgentCmd: '"帮我安装 SubSage，执行 curl -fsSL https://raw.githubusercontent.com/wangjc683/subsage/main/install.sh | bash，装好后帮我打开 http://localhost:8321"',
    installScriptCmd: 'curl -fsSL https://raw.githubusercontent.com/wangjc683/subsage/main/install.sh | bash',
    installCopy: '复制',
    installCopied: '已复制！',

    // Hero Chat (typewriter)
    demo1User: '我刚订阅了 Claude Pro，20 美元/月，Visa 付款',
    demo1Ai: '搞定！已添加 Claude Pro — $20/月，AI 类别。你的 AI 工具月支出已达 $65。',
    demo2User: '这周有什么要续费的？',
    demo2Ai: '这周有 2 笔续费：Spotify（$9.99，明天）和 iCloud+（$2.99，周五）。',
    demo3User: '取消 Netflix，暂停 Midjourney',
    demo3Ai: '搞定。Netflix → 已取消，Midjourney → 已暂停。每月为你省下 $28.98。',

    // Interfaces Section
    interfacesTitle: '对你的 Agent 说句话，',
    interfacesAccent: 'SubSage 搞定剩下的',
    termCmd: '> 我在 AI 工具上花了多少钱？',
    termOutput: '5 个 AI 订阅，合计 $89/月\n  ChatGPT Plus   $20/月\n  Claude Pro     $20/月\n  Cursor Pro     $20/月\n  Midjourney     $10/月\n  GitHub Copilot $19/月',
    ideUser: '取消 Netflix，暂停 Midjourney',
    ideAgent: '搞定。Netflix → 已取消，Midjourney → 已暂停。每月为你省下 $28.98。',
    visionUserText: '帮我录入这张账单',
    visionNote: '从账单文件中识别',

    // Features
    featuresTitle: '地基已打好',
    featuresSubtitle: '剩下的，交给你的 Agent',
    feat1Title: 'AI Agent 原生',
    feat1Desc: '兼容 OpenClaw、Claude Code 等任何 AI Agent。一键接入 Skill.md，零配置。',
    feat2Title: '多币种支持',
    feat2Desc: '真实汇率，每日自动更新。所有支出统一换算为你的基准货币',
    feat3Title: '智能分析',
    feat3Desc: '按月、年、日维度拆解，分类洞察一目了然。',
    feat4Title: '日历视图',
    feat4Desc: '可视化续费时间线，再也不错过续费日',
    feat5Title: '自托管',
    feat5Desc: '数据留在你自己的机器上。无云端，无追踪。',
    feat6Title: '导入导出',
    feat6Desc: '一键导出 Excel 或 JSON，随时备份和迁移',
    feat7Title: '主题切换',
    feat7Desc: '深色、浅色、跟随系统。怎么看都顺眼。',
    feat8Title: '移动就绪',
    feat8Desc: '添加到手机主屏幕，全屏体验，无需应用商店',
    feat9Title: '无限可能',
    feat9Desc: '你的 Agent，你的规则。定时提醒、智能告警、支出报告 — 想到就能做到。',

    // How It Works
    hiwTitle: '使用流程',
    hiwStep1Title: '安装',
    hiwStep1Desc: '复制一句话给你的 AI Agent，30 秒自动部署。',
    hiwStep1Link: '试试看 →',
    hiwStep2Title: '连接',
    hiwStep2Desc: '在 SubSage 配置页面一键复制 Skill，Agent 即刻获得管理订阅的能力。',
    hiwStep3Title: '开始使用',
    hiwStep3Desc: '用自然语言管理一切。想查就问 Agent，想看就开仪表板。',

    // Screenshots
    screenshotsTitle: '为 Agent 而生',
    screenshotsSubtitle: '人类也能用',
    ssTabOverview: '总览',
    ssTabSubs: '订阅管理',
    ssTabCalendar: '日历',
    ssTabAgent: 'Agent 设置',
    ssTabEditModal: '编辑弹窗',
    ssLight: '浅色',
    ssDark: '深色',

    // Quick Start
    qsTitle: '30 秒就绪',
    qsAgentTitle: '让你的 AI Agent 来安装',
    qsAgentDesc: '复制这段话给你的 AI Agent — 剩下的交给它。',
    qsAgentTabScript: '🤖 快速安装',
    qsAgentTabDocker: '🐳 Docker 安装',
    installAgentDockerCmd: '"帮我用 Docker 安装 SubSage，执行 docker run -d --name subsage -p 8321:8321 -v subsage-data:/data wangjc683/subsage，装好后帮我打开 http://localhost:8321"',
    qsManualTitle: '或者，自己动手',
    qsTabScript: '⚡ 一键安装',
    qsTabDockerRun: '🐳 Docker Run',
    qsTabCompose: '🐳 Docker Compose',
    qsScriptCmd: 'curl -fsSL https://raw.githubusercontent.com/wangjc683/subsage/main/install.sh | bash',
    qsDockerCmd: 'docker run -d --name subsage -p 8321:8321 -v subsage-data:/data wangjc683/subsage',
    qsComposeCmd: 'curl -O https://raw.githubusercontent.com/wangjc683/subsage/main/docker-compose.yml\ndocker compose up -d',
    qsPlatformSystems: 'Linux · macOS · Windows (Docker) · x86 · ARM · Apple Silicon',
    qsPlatformDevices: '从你的笔记本到树莓派、家用 NAS — 到处都能跑。',
    dockerHint: '适用于 Linux、macOS 和 Windows — 需要 Docker，前往',
    agentHint: '适用于 OpenClaw 或其他任何 AI Agent',
    scriptHint: '适用于 Linux 和 macOS',

    // Footer
    footerStar: '在 GitHub 上 Star SubSage',
    footerBrandDesc: 'AI Agent 时代的开源订阅管理工具',
    footerLinks: '链接',
    footerDocs: '文档',
    footerCommunity: '社区',
    footer15perf: '一个关于电影史上最大胶片格式的资料库',
  },
};

let currentLang = 'en';
export function getCurrentLang() { return currentLang; }
export function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}
export function t(key) {
  return translations[currentLang]?.[key] || translations.en[key] || key;
}
