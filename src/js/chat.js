/* Portfolio Chat Widget - Keyword-based Q&A */

var PROFILE = {
  greeting: "Hi! I'm Kishan's portfolio assistant. Ask me anything about his experience, skills, projects, education, or how to get in touch!",

  name: "Kishan Kumar Maurya is a Mobile Engineer based in Bangalore with 9+ years of experience building scalable mobile applications across Android (Java/Kotlin), Flutter, and React Native. He specialises in SDK development and cross-platform architecture.",

  experience: "Kishan has 9+ years of professional mobile engineering experience and 2+ years of backend engineering with Node.js, TypeScript, and NestJS. He has worked at Cashfree Payments, Ola Electric, Gojek, Heady Technology, and Reliance Jio.",

  companies: "Kishan has worked at the following companies:\n1. Cashfree Payments — Mobile Engineer 3 (Aug 2022 – present)\n2. Ola Electric — Software Developer 2 (Jul 2021 – Aug 2022)\n3. Gojek — Android Consultant (Jun 2019 – Jul 2021)\n4. Heady Technology — Software Developer (Apr 2018 – Jun 2019)\n5. Reliance Jio — Associate Software Developer (Dec 2015 – Apr 2018)",

  current: "Kishan currently works at Cashfree Payments as Mobile Engineer 3 (August 2022 – present). He leads the Mobile SDK team — building and scaling SDKs that power 5,100+ merchants across 7,300+ apps handling 13.7M+ monthly transactions.",

  cashfree: "At Cashfree Payments (Aug 2022 – present), Kishan:\n• Built & scaled Mobile SDK powering 5,100+ merchants & 13.7M+ monthly transactions\n• Maintains Flutter & React Native SDK wrappers used by ~2,500 merchant apps\n• Architected automated CI/CD pipeline — cut release time from ~6 hours to under 30 mins\n• Built SDK observability framework with Grafana dashboards for version & traffic monitoring\n• Scaled SDK to support 1,500+ monthly active merchants processing ~3M weekly transactions\n• Reduced merchant integration time by 40%",

  ola: "At Ola Electric (July 2021 – August 2022), Kishan developed the Ola Electric companion app from scratch — achieving 1M+ installs. He built real-time BLE communication with scooters, scooter settings, user profile, and passcode management modules.",

  gojek: "At Gojek (June 2019 – July 2021) as Android Consultant, Kishan developed features for Go-Transport and GoCar driver apps — including multi-stop, trip feedback, and schedule ride modules.",

  heady: "At Heady Technology (April 2018 – June 2019), Kishan worked on Hibbett Sports and Curbside Driver App for a US client. He integrated SendBird SDK for chat and implemented CI/CD using Bitrise & Hockey.",

  hibbett: "Kishan worked on the Hibbett Sports app at Heady Technology — integrating SendBird SDK for the chat module and setting up CI/CD pipelines using Bitrise & Hockey App.",

  jio: "At Reliance Jio (December 2015 – April 2018) as Associate Software Developer, Kishan worked on JioNews — building PDF download & rendering, integrating Jio SSO SDK for login, and CleverTap & Madme for analytics.",

  jionews: "Kishan worked on JioNews at Reliance Jio — PDF download & rendering, Jio SSO login integration, and analytics with CleverTap and Madme.",

  android: "Kishan has 9+ years of Android development experience using Java and Kotlin. He is expert in Jetpack Compose, Android Architecture Components, MVVM/MVP patterns, Macro Benchmarking, Baseline Profiles, and App Security.",

  flutter: "Kishan builds and maintains Flutter SDK wrappers at Cashfree Payments, used by ~2,500 merchant applications in production. Flutter is one of his key cross-platform skills.",

  kotlin: "Kotlin is Kishan's primary Android language. He uses it across Cashfree SDK, Ola Electric, and all modern Android projects with Jetpack Compose and Architecture Components.",

  java: "Kishan has strong Java expertise for Android development and backend work, with 9+ years of hands-on experience.",

  backend: "Yes! Kishan has 2+ years of backend engineering experience. He has worked with:\n• Node.js & TypeScript — building scalable server-side applications\n• NestJS — building microservices and REST APIs\n• Databases: MySQL, MongoDB, and Amazon Redshift\n• Built internal tooling and APIs at Cashfree Payments to standardise SDK integration patterns and reduce merchant onboarding friction.",

  javascript: "Kishan is proficient in JavaScript and TypeScript for both backend (NestJS, Node.js) and cross-platform mobile (React Native, Cordova, Capacitor).",

  reactnative: "Kishan builds and maintains React Native SDK wrappers at Cashfree Payments — used by ~2,500 merchant apps in production.",

  skills: "Kishan's skill set:\n• Mobile: Android (Java/Kotlin), Flutter, React Native, Jetpack Compose\n• Backend: NestJS, Node.js, TypeScript, REST APIs\n• Architecture: MVVM, MVP, HLD, LLD, System Design\n• Databases: MySQL, MongoDB, Amazon Redshift\n• Analytics: Firebase, Crashlytics, CleverTap\n• CI/CD: GitHub Actions, Bitbucket Pipelines, Gradle\n• AI Tools: GitHub Copilot, ChatGPT for code review\n• Tools: Android Studio, VS Code, Jira, Confluence, Retool",

  architecture: "Kishan designs systems using MVVM and MVP patterns, and produces High-Level Design (HLD) and Low-Level Design (LLD) documents. He leads architecture reviews and performance-focused engineering standards.",

  cicd: "Kishan architected a fully automated CI/CD pipeline for Cashfree Mobile SDK releases (Android, React Native, Flutter) — eliminating manual Maven Central workflows and cutting release time from ~6 hours to under 30 minutes.",

  achievements: "Key achievements:\n• CI/CD pipeline reducing SDK release time from ~6 hours to 30 mins\n• SDK observability framework with Grafana dashboards for version & traffic monitoring\n• Scaled SDK to 1,500+ monthly active merchants, ~3M weekly transactions\n• Reduced merchant integration time by 40%\n• 5,100+ merchants, 7,300+ apps, 13.7M+ monthly transactions on Cashfree SDK",

  projects: "Kishan's featured projects:\n1. Cashfree Payments — Mobile SDK (5,100+ merchants, 13.7M+ monthly transactions)\n2. Ola Electric — Scooter companion app with BLE (1M+ installs)\n3. Gojek GoTransport — Ride-hailing consumer & driver app\n4. Hibbett Sports — E-commerce & raffle app (Heady Technology)\n5. JioNews — Regional news app (Reliance Jio)",

  education: "Kishan holds a B.Tech in Information Technology from Harcourt Butler Technical University, Kanpur (U.P), 2010–2014.",

  contact: "You can reach Kishan at:<br>• Email: <a href=\"mailto:kishankr.maurya@gmail.com\" target=\"_blank\">kishankr.maurya@gmail.com</a><br>• Phone: +91-8433719326<br>• LinkedIn: <a href=\"https://www.linkedin.com/in/kishan-maurya\" target=\"_blank\">linkedin.com/in/kishan-maurya</a><br>• GitHub: <a href=\"https://github.com/droiddevgeeks\" target=\"_blank\">github.com/droiddevgeeks</a><br>• Location: Bangalore, India",

  email: "You can email Kishan at <a href=\"mailto:kishankr.maurya@gmail.com\" target=\"_blank\">kishankr.maurya@gmail.com</a>",

  linkedin: "Kishan's LinkedIn profile: <a href=\"https://www.linkedin.com/in/kishan-maurya\" target=\"_blank\">linkedin.com/in/kishan-maurya</a>",

  github: "Kishan's GitHub: <a href=\"https://github.com/droiddevgeeks\" target=\"_blank\">github.com/droiddevgeeks</a>",

  blog: "Kishan is a technical writer at MindOrks and ProAndroidDev. Read his articles on Medium: <a href=\"https://kishankrmaurya.medium.com\" target=\"_blank\">kishankrmaurya.medium.com</a>",

  location: "Kishan is based in Bangalore, India.",

  resume: "Sure! You can download Kishan\'s resume here:<br><br><a href=\"/assets/resume/kishan_maurya_resume.pdf\" download style=\"display:inline-block;padding:6px 14px;background:#1a222c;color:#fff;border-radius:8px;text-decoration:none;font-size:13px;\">Download Resume</a>",

  sdk: "Kishan specialises in Mobile SDK development. At Cashfree, his SDK powers 5,100+ merchants across 7,300+ apps with 13.7M+ monthly transactions. He builds for Android (native), Flutter, React Native, Cordova, and Capacitor.",

  ble: "At Ola Electric, Kishan built Bluetooth Low Energy (BLE) connectivity between the scooter and the companion app — enabling real-time lock/unlock, proximity detection, and scooter status. The app has 1M+ installs.",

  payment: "At Cashfree Payments, Kishan leads Mobile SDK development for payment integration across Android, Flutter, React Native, Cordova, and Capacitor platforms.",

  observability: "Kishan architected an end-to-end SDK observability framework: instrumentation → ingestion → Grafana dashboards. It enables version-level traffic intelligence and proactive production monitoring across all Cashfree Mobile SDKs.",

  ai: "Kishan uses AI tools including GitHub Copilot and ChatGPT plugins for code review and test case generation to speed up development cycles and improve code quality.",

  fallback: "I'm not sure about that. Try asking about Kishan's experience, skills, projects, education, current company, or how to contact him!"
};

var INTENTS = [
  { keywords: ['hello', 'hi', 'hey', 'start', 'help'], answer: 'greeting' },
  { keywords: ['who', 'about', 'introduce', 'yourself', 'kishan', 'name'], answer: 'name' },
  { keywords: ['experience', 'years', 'how long', 'career', 'background'], answer: 'experience' },
  { keywords: ['companies', 'employers', 'worked at', 'work history', 'all company', 'list of company', 'previous company', 'past company', 'where have you'], answer: 'companies' },
  { keywords: ['current', 'now', 'working', 'job', 'role'], answer: 'current' },
  { keywords: ['cashfree', 'payment sdk', 'payments'], answer: 'cashfree' },
  { keywords: ['ola', 'electric', 'scooter', 'ev'], answer: 'ola' },
  { keywords: ['gojek', 'gotransport', 'gocar', 'ride', 'cab', 'transport'], answer: 'gojek' },
  { keywords: ['sehatq', 'health', 'doctor', 'hospital', 'appstreet'], answer: 'hibbett' },
  { keywords: ['hibbett', 'sports', 'raffle', 'bopis', 'ropis', 'heady', 'curbside'], answer: 'hibbett' },
  { keywords: ['jio', 'news', 'jionews', 'reliance'], answer: 'jionews' },
  { keywords: ['android', 'mobile', 'app', 'application', 'jetpack', 'compose'], answer: 'android' },
  { keywords: ['flutter', 'dart'], answer: 'flutter' },
  { keywords: ['kotlin'], answer: 'kotlin' },
  { keywords: ['java', 'core java'], answer: 'java' },
  { keywords: ['backend', 'server', 'nestjs', 'nest', 'node', 'microservice', 'api', 'typescript', 'type script', 'rest'], answer: 'backend' },
  { keywords: ['javascript', 'typescript', 'js', 'ts'], answer: 'javascript' },
  { keywords: ['react native', 'reactnative', 'cordova', 'ionic', 'capacitor', 'cross platform'], answer: 'reactnative' },
  { keywords: ['skill', 'tech', 'stack', 'language', 'know', 'expertise', 'proficient'], answer: 'skills' },
  { keywords: ['architecture', 'mvvm', 'mvp', 'design pattern', 'hld', 'lld', 'system design'], answer: 'architecture' },
  { keywords: ['ci', 'cd', 'pipeline', 'devops', 'github actions', 'bitbucket', 'deploy', 'maven'], answer: 'cicd' },
  { keywords: ['achievement', 'accomplishment', 'impact', 'highlight', 'metric'], answer: 'achievements' },
  { keywords: ['project', 'work', 'built', 'portfolio', 'product'], answer: 'projects' },
  { keywords: ['contact', 'reach', 'get in touch', 'connect'], answer: 'contact' },
  { keywords: ['email', 'mail', 'gmail'], answer: 'email' },
  { keywords: ['linkedin'], answer: 'linkedin' },
  { keywords: ['github', 'code', 'repo'], answer: 'github' },
  { keywords: ['blog', 'article', 'write', 'medium', 'mindorks', 'proandr'], answer: 'blog' },
  { keywords: ['location', 'bangalore', 'city', 'where'], answer: 'location' },
  { keywords: ['resume', 'cv', 'download', 'pdf'], answer: 'resume' },
  { keywords: ['sdk', 'merchant', 'integration', 'wrapper'], answer: 'sdk' },
  { keywords: ['ble', 'bluetooth', 'lock', 'unlock', 'proximity'], answer: 'ble' },
  { keywords: ['payment', 'transaction', 'cashfree sdk'], answer: 'payment' },
  { keywords: ['observability', 'grafana', 'dashboard', 'monitoring', 'telemetry', 'analytics'], answer: 'observability' },
  { keywords: ['ai', 'copilot', 'chatgpt', 'gemini', 'artificial intelligence'], answer: 'ai' },
  { keywords: ['education', 'degree', 'college', 'university', 'btech', 'b.tech', 'study', 'academic'], answer: 'education' }
];

function matchIntent(message) {
  var lower = message.toLowerCase();
  for (var i = 0; i < INTENTS.length; i++) {
    var intent = INTENTS[i];
    for (var j = 0; j < intent.keywords.length; j++) {
      if (lower.indexOf(intent.keywords[j]) !== -1) {
        return PROFILE[intent.answer];
      }
    }
  }
  return PROFILE.fallback;
}

function ChatWidget() {
  this.isOpen = false;
  this.container = null;
  this.messagesEl = null;
  this.inputEl = null;
  this.init();
}

ChatWidget.prototype.init = function () {
  var self = this;

  this.container = document.createElement('div');
  this.container.id = 'chat-widget';

  var btn = document.createElement('button');
  btn.id = 'chat-toggle-btn';
  btn.setAttribute('aria-label', 'Open chat');
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26" aria-hidden="true"><path d="M12 2a2 2 0 0 1 2 2v.5h2.5A2.5 2.5 0 0 1 19 7v8a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 15V7a2.5 2.5 0 0 1 2.5-2.5H10V4a2 2 0 0 1 2-2zm-2.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-4 4a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3z"/><rect x="2" y="11" width="2" height="4" rx="1"/><rect x="20" y="11" width="2" height="4" rx="1"/><line x1="12" y1="0" x2="12" y2="2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
  btn.addEventListener('click', function () { self.toggle(); });

  var panel = document.createElement('div');
  panel.id = 'chat-panel';
  panel.setAttribute('aria-hidden', 'true');

  var header = document.createElement('div');
  header.id = 'chat-header';
  header.innerHTML = '<span>Ask about Kishan</span><button id="chat-close-btn" aria-label="Close chat"><i class="fa fa-times" aria-hidden="true"></i></button>';

  this.messagesEl = document.createElement('div');
  this.messagesEl.id = 'chat-messages';

  var inputRow = document.createElement('div');
  inputRow.id = 'chat-input-row';
  this.inputEl = document.createElement('input');
  this.inputEl.type = 'text';
  this.inputEl.id = 'chat-input';
  this.inputEl.placeholder = 'Ask a question...';
  this.inputEl.setAttribute('aria-label', 'Chat message');
  var sendBtn = document.createElement('button');
  sendBtn.id = 'chat-send-btn';
  sendBtn.setAttribute('aria-label', 'Send message');
  sendBtn.innerHTML = '<i class="fa fa-paper-plane" aria-hidden="true"></i>';
  inputRow.appendChild(this.inputEl);
  inputRow.appendChild(sendBtn);

  panel.appendChild(header);
  panel.appendChild(this.messagesEl);
  panel.appendChild(inputRow);
  this.container.appendChild(panel);
  this.container.appendChild(btn);

  document.getElementById('chat-widget-mount').appendChild(this.container);

  header.querySelector('#chat-close-btn').addEventListener('click', function () { self.close(); });
  sendBtn.addEventListener('click', function () { self.send(); });
  this.inputEl.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') { self.send(); }
  });

  this.panel = panel;
};

ChatWidget.prototype.toggle = function () {
  if (this.isOpen) { this.close(); } else { this.open(); }
};

ChatWidget.prototype.open = function () {
  this.isOpen = true;
  this.panel.classList.add('chat-open');
  this.panel.setAttribute('aria-hidden', 'false');
  if (this.messagesEl.children.length === 0) {
    this.addMessage('bot', PROFILE.greeting);
  }
  this.inputEl.focus();
};

ChatWidget.prototype.close = function () {
  this.isOpen = false;
  this.panel.classList.remove('chat-open');
  this.panel.setAttribute('aria-hidden', 'true');
};

ChatWidget.prototype.send = function () {
  var text = this.inputEl.value.trim();
  if (!text) { return; }
  this.addMessage('user', text);
  this.inputEl.value = '';
  this.showTyping();
  var self = this;
  setTimeout(function () {
    self.removeTyping();
    self.addMessage('bot', matchIntent(text));
  }, 600);
};

ChatWidget.prototype.addMessage = function (role, text) {
  var msg = document.createElement('div');
  msg.className = 'chat-msg chat-msg-' + role;
  msg.innerHTML = text.replace(/\n/g, '<br>');
  this.messagesEl.appendChild(msg);
  this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
};

ChatWidget.prototype.showTyping = function () {
  var typing = document.createElement('div');
  typing.className = 'chat-msg chat-msg-bot chat-typing';
  typing.id = 'chat-typing-indicator';
  typing.innerHTML = '<span></span><span></span><span></span>';
  this.messagesEl.appendChild(typing);
  this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
};

ChatWidget.prototype.removeTyping = function () {
  var el = document.getElementById('chat-typing-indicator');
  if (el) { el.parentNode.removeChild(el); }
};

document.addEventListener('DOMContentLoaded', function () {
  new ChatWidget();
});
