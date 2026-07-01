const subjects = {
  all: "全部",
  math: "数学",
  chinese: "语文",
  english: "基础英语",
  teacher: "教师工具",
};

const grades = {
  all: "全部",
  preschool: "幼小衔接",
  lower: "一二年级",
  middle: "三四年级",
  upper: "五六年级",
  teacher: "教师",
};

const modes = {
  child: "孩子模式",
  teacher: "老师模式",
};

const activities = [
  {
    id: "math-bubble",
    title: "数学泡泡",
    subject: "math",
    grade: "lower",
    type: "sum",
    skill: "加法与数感",
    teacherNote: "投屏后让学生轮流凑目标数，适合口算热身。",
    description: "点选数字泡泡，凑出目标数。",
  },
  {
    id: "hundred-chart",
    title: "百数表",
    subject: "math",
    grade: "lower",
    type: "hundred",
    skill: "数字规律",
    teacherNote: "讲奇偶、倍数、质数时可以直接高亮。",
    description: "观察 1 到 100 的数字规律。",
  },
  {
    id: "fraction-bars",
    title: "分数条",
    subject: "math",
    grade: "middle",
    type: "fraction",
    skill: "分数大小",
    teacherNote: "让学生对比 1/2、2/4、3/6 的等值关系。",
    description: "点亮分数条，理解几分之几。",
  },
  {
    id: "multiplication",
    title: "乘法口诀",
    subject: "math",
    grade: "middle",
    type: "quiz",
    skill: "乘法事实",
    teacherNote: "适合 1 分钟口算挑战。",
    description: "选择正确的乘法结果。",
    questions: [
      { prompt: "6 × 7 = ?", answer: "42", options: ["36", "42", "48", "49"] },
      { prompt: "8 × 4 = ?", answer: "32", options: ["24", "28", "32", "36"] },
      { prompt: "9 × 6 = ?", answer: "54", options: ["45", "48", "54", "63"] },
    ],
  },
  {
    id: "clock-time",
    title: "时钟练习",
    subject: "math",
    grade: "lower",
    type: "quiz",
    skill: "认识时间",
    teacherNote: "先看钟面，再让学生说出整点和半点。",
    description: "看提示，选出正确时间。",
    questions: [
      { prompt: "分针指向 12，时针指向 3", answer: "3:00", options: ["2:30", "3:00", "3:30", "12:03"] },
      { prompt: "分针指向 6，时针在 8 和 9 中间", answer: "8:30", options: ["6:08", "8:30", "9:30", "8:00"] },
      { prompt: "分针指向 12，时针指向 11", answer: "11:00", options: ["10:30", "11:00", "12:11", "11:30"] },
    ],
  },
  {
    id: "money-change",
    title: "人民币找零",
    subject: "math",
    grade: "middle",
    type: "quiz",
    skill: "金额计算",
    teacherNote: "适合生活化数学和购物情境练习。",
    description: "根据价格和付款金额选择找零。",
    questions: [
      { prompt: "买铅笔 3 元，付 10 元，应找？", answer: "7 元", options: ["5 元", "6 元", "7 元", "8 元"] },
      { prompt: "买本子 6 元，付 20 元，应找？", answer: "14 元", options: ["12 元", "13 元", "14 元", "16 元"] },
      { prompt: "买橡皮 2 元，付 5 元，应找？", answer: "3 元", options: ["2 元", "3 元", "4 元", "5 元"] },
    ],
  },
  {
    id: "shape-sort",
    title: "图形分类",
    subject: "math",
    grade: "lower",
    type: "quiz",
    skill: "几何分类",
    teacherNote: "让学生说明为什么这个图形属于这一类。",
    description: "按边数、形状和颜色分类。",
    questions: [
      { prompt: "哪一个是三角形？", answer: "▲", options: ["●", "■", "▲", "◆"] },
      { prompt: "哪一个有四条边？", answer: "□", options: ["○", "□", "△", "☆"] },
      { prompt: "哪一个最像圆？", answer: "●", options: ["◆", "●", "▲", "■"] },
    ],
  },
  {
    id: "number-line",
    title: "数轴跳跳",
    subject: "math",
    grade: "lower",
    type: "quiz",
    skill: "数轴与序数",
    teacherNote: "适合讲前后、加减和数轴位置。",
    description: "找到数字在数轴上的位置。",
    questions: [
      { prompt: "从 0 往右跳 5 格，到哪里？", answer: "5", options: ["3", "4", "5", "6"] },
      { prompt: "从 8 往左跳 3 格，到哪里？", answer: "5", options: ["4", "5", "6", "11"] },
      { prompt: "3 和 7 中间的数是？", answer: "5", options: ["4", "5", "6", "7"] },
    ],
  },
  {
    id: "pinyin-train",
    title: "拼音火车",
    subject: "chinese",
    grade: "preschool",
    type: "quiz",
    skill: "声韵拼读",
    teacherNote: "让学生先拼读，再选字。",
    description: "把声母、韵母和声调拼成汉字。",
    questions: [
      { prompt: "b + ao + 一声", answer: "包", options: ["包", "跑", "猫", "鸟"] },
      { prompt: "m + a + 一声", answer: "妈", options: ["妈", "马", "木", "目"] },
      { prompt: "h + ua + 一声", answer: "花", options: ["画", "话", "花", "瓜"] },
    ],
  },
  {
    id: "pinyin-match",
    title: "声母韵母配对",
    subject: "chinese",
    grade: "preschool",
    type: "match",
    skill: "拼音组合",
    teacherNote: "把拼音卡贴到黑板上，也能按这个规则玩。",
    description: "找出能组成常见音节的搭档。",
    pairs: [
      ["b", "ao"],
      ["m", "a"],
      ["sh", "ui"],
      ["x", "ue"],
    ],
  },
  {
    id: "hanzi-cards",
    title: "识字卡",
    subject: "chinese",
    grade: "lower",
    type: "flashcard",
    skill: "常用字识记",
    teacherNote: "正面读字，背面说词语。",
    description: "翻看常用汉字和词语。",
    cards: [
      { front: "山", back: "山坡、火山" },
      { front: "水", back: "喝水、河水" },
      { front: "明", back: "明亮、明天" },
      { front: "林", back: "树林、森林" },
    ],
  },
  {
    id: "word-pairs",
    title: "词语配对",
    subject: "chinese",
    grade: "lower",
    type: "match",
    skill: "反义词",
    teacherNote: "让学生配对后再造一个句子。",
    description: "找到反义词搭档。",
    pairs: [
      ["大", "小"],
      ["快", "慢"],
      ["高", "低"],
      ["冷", "热"],
      ["前", "后"],
      ["开", "关"],
    ],
  },
  {
    id: "idiom-puzzle",
    title: "成语拼图",
    subject: "chinese",
    grade: "middle",
    type: "order",
    skill: "成语积累",
    teacherNote: "排对后让学生解释成语意思。",
    description: "把打乱的字排成成语。",
    target: ["画", "龙", "点", "睛"],
  },
  {
    id: "poem-order",
    title: "古诗排序",
    subject: "chinese",
    grade: "middle",
    type: "order",
    skill: "诗句顺序",
    teacherNote: "先排序，再朗读整句。",
    description: "把诗句按正确顺序排好。",
    target: ["床前明月光", "疑是地上霜", "举头望明月", "低头思故乡"],
  },
  {
    id: "measure-words",
    title: "量词练习",
    subject: "chinese",
    grade: "lower",
    type: "quiz",
    skill: "量词搭配",
    teacherNote: "适合低年级口头表达训练。",
    description: "选择合适的量词。",
    questions: [
      { prompt: "一 ___ 书", answer: "本", options: ["只", "本", "条", "朵"] },
      { prompt: "一 ___ 鱼", answer: "条", options: ["条", "个", "把", "棵"] },
      { prompt: "一 ___ 花", answer: "朵", options: ["张", "朵", "匹", "支"] },
    ],
  },
  {
    id: "picture-sentence",
    title: "看图组句",
    subject: "chinese",
    grade: "lower",
    type: "builder",
    skill: "句子表达",
    teacherNote: "完成后让学生换一个主语再说一句。",
    description: "按顺序拼出完整句子。",
    target: ["小猫", "在", "树下", "睡觉"],
  },
  {
    id: "letter-match",
    title: "字母配对",
    subject: "english",
    grade: "preschool",
    type: "match",
    skill: "大小写字母",
    teacherNote: "适合英语启蒙第一课。",
    description: "找到大小写字母搭档。",
    pairs: [
      ["A", "a"],
      ["B", "b"],
      ["M", "m"],
      ["S", "s"],
      ["T", "t"],
      ["P", "p"],
    ],
  },
  {
    id: "alphabet-order",
    title: "字母排序",
    subject: "english",
    grade: "preschool",
    type: "order",
    skill: "字母顺序",
    teacherNote: "可以分组比赛谁排得更快。",
    description: "把字母排成正确顺序。",
    target: ["A", "B", "C", "D", "E", "F"],
  },
  {
    id: "initial-sound",
    title: "首字母找图",
    subject: "english",
    grade: "lower",
    type: "quiz",
    skill: "首音辨认",
    teacherNote: "先读图，再强调首字母音。",
    description: "根据单词选择首字母。",
    questions: [
      { prompt: "apple 的首字母是？", answer: "A", options: ["A", "B", "C", "D"] },
      { prompt: "cat 的首字母是？", answer: "C", options: ["A", "B", "C", "T"] },
      { prompt: "dog 的首字母是？", answer: "D", options: ["G", "B", "D", "P"] },
    ],
  },
  {
    id: "cvc-builder",
    title: "CVC 拼词",
    subject: "english",
    grade: "lower",
    type: "builder",
    skill: "自然拼读",
    teacherNote: "拼完后让学生读出 /c/ /a/ /t/。",
    description: "把字母拼成 CVC 单词。",
    target: ["c", "a", "t"],
  },
  {
    id: "sight-words",
    title: "高频词泡泡",
    subject: "english",
    grade: "lower",
    type: "quiz",
    skill: "Sight words",
    teacherNote: "读题后让学生快速点词。",
    description: "选出老师念到的高频词。",
    questions: [
      { prompt: "找到 can", answer: "can", options: ["cat", "can", "cap", "cup"] },
      { prompt: "找到 like", answer: "like", options: ["look", "like", "lake", "bike"] },
      { prompt: "找到 see", answer: "see", options: ["sea", "see", "she", "say"] },
    ],
  },
  {
    id: "word-cards",
    title: "单词图卡",
    subject: "english",
    grade: "lower",
    type: "flashcard",
    skill: "主题词汇",
    teacherNote: "正面读英文，背面说中文。",
    description: "翻看常见英语单词。",
    cards: [
      { front: "cat", back: "猫" },
      { front: "apple", back: "苹果" },
      { front: "book", back: "书" },
      { front: "school", back: "学校" },
    ],
  },
  {
    id: "color-number",
    title: "颜色数字",
    subject: "english",
    grade: "preschool",
    type: "quiz",
    skill: "颜色与数字",
    teacherNote: "适合低龄英语热身。",
    description: "选择正确的颜色或数字英文。",
    questions: [
      { prompt: "红色用英语怎么说？", answer: "red", options: ["red", "blue", "green", "yellow"] },
      { prompt: "数字 8 是？", answer: "eight", options: ["six", "seven", "eight", "ten"] },
      { prompt: "黄色用英语怎么说？", answer: "yellow", options: ["white", "yellow", "black", "blue"] },
    ],
  },
  {
    id: "sentence-builder",
    title: "简单句拼装",
    subject: "english",
    grade: "lower",
    type: "builder",
    skill: "基础句型",
    teacherNote: "完成后替换 apples 为其他词，做口语拓展。",
    description: "把英文单词拼成完整句子。",
    target: ["I", "like", "apples"],
  },
  {
    id: "class-timer",
    title: "课堂计时器",
    subject: "teacher",
    grade: "teacher",
    type: "timer",
    skill: "课堂节奏",
    teacherNote: "讨论、收纳、展示都可以用。",
    description: "设置 1、3、5 分钟倒计时。",
  },
  {
    id: "class-spinner",
    title: "课堂转盘",
    subject: "teacher",
    grade: "teacher",
    type: "spinner",
    skill: "随机任务",
    teacherNote: "随机抽题、选任务或决定小组活动。",
    description: "转盘随机选出课堂任务。",
    items: ["口算", "拼读", "朗读", "画图", "讲述", "挑战"],
  },
  {
    id: "name-picker",
    title: "随机点名",
    subject: "teacher",
    grade: "teacher",
    type: "picker",
    skill: "课堂互动",
    teacherNote: "把学生名粘贴进去，一键随机。",
    description: "随机抽取一个名字。",
  },
  {
    id: "scoreboard",
    title: "小组计分板",
    subject: "teacher",
    grade: "teacher",
    type: "scoreboard",
    skill: "小组激励",
    teacherNote: "适合分组竞赛和课堂积分。",
    description: "给 4 个小组加减分。",
  },
  {
    id: "card-board",
    title: "字母/拼音卡片",
    subject: "teacher",
    grade: "teacher",
    type: "flashcard",
    skill: "课堂卡片",
    teacherNote: "可投屏做快速认读。",
    description: "快速切换字母、拼音和词卡。",
    cards: [
      { front: "A a", back: "apple" },
      { front: "b", back: "b + ao = bao" },
      { front: "sh", back: "sh + ui = shui" },
      { front: "can", back: "I can read." },
    ],
  },
  {
    id: "whiteboard",
    title: "课堂白板",
    subject: "teacher",
    grade: "teacher",
    type: "whiteboard",
    skill: "板书演示",
    teacherNote: "投屏后直接圈画、连线、写关键词。",
    description: "一个简洁的可画白板。",
  },
];

const state = {
  subject: "all",
  grade: "all",
  mode: "child",
  query: "",
  activeId: "math-bubble",
  sound: true,
};

const runtime = {
  quizIndex: {},
  score: {},
  timerId: null,
  timerSeconds: 180,
  timerDefault: 180,
  selected: [],
  matched: new Set(),
  built: [],
  flashIndex: {},
  flashBack: false,
  scoreboard: [0, 0, 0, 0],
};

const gameGrid = document.querySelector("#gameGrid");
const gameCount = document.querySelector("#gameCount");
const dailyList = document.querySelector("#dailyList");
const teacherRail = document.querySelector("#teacherRail");
const activityPanel = document.querySelector("#activityPanel");
const searchForm = document.querySelector(".header-search");
const searchInput = document.querySelector("#siteSearch");

function subjectLabel(subject) {
  return subjects[subject] || subject;
}

function gradeLabel(grade) {
  return grades[grade] || grade;
}

function getActivity(id) {
  return activities.find((activity) => activity.id === id) || activities[0];
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function playTone(ok = true) {
  if (!state.sound) return;
  const AudioEngine = window.AudioContext || window.webkitAudioContext;
  if (!AudioEngine) return;
  const audio = new AudioEngine();
  const oscillator = audio.createOscillator();
  const gain = audio.createGain();
  oscillator.frequency.value = ok ? 660 : 220;
  oscillator.type = "sine";
  gain.gain.setValueAtTime(0.001, audio.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.16, audio.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 0.18);
  oscillator.connect(gain);
  gain.connect(audio.destination);
  oscillator.start();
  oscillator.stop(audio.currentTime + 0.2);
}

function cardArt(activity) {
  const palette = {
    math: ["#dff3f6", "#1f7a8c"],
    chinese: ["#ffe4e1", "#f25c54"],
    english: ["#dff6ed", "#2a9d8f"],
    teacher: ["#fff2c6", "#ad7a28"],
  };
  const [bg, accent] = palette[activity.subject] || palette.math;
  const short = activity.title.slice(0, 2);
  return `
    <svg viewBox="0 0 260 150" aria-hidden="true">
      <rect width="260" height="150" fill="${bg}"/>
      <circle cx="76" cy="76" r="36" fill="#ffd166" stroke="#17202a" stroke-width="6"/>
      <rect x="126" y="42" width="74" height="66" rx="12" fill="${accent}" stroke="#17202a" stroke-width="6"/>
      <path d="M66 112h132" stroke="#17202a" stroke-width="6" stroke-linecap="round"/>
      <text x="76" y="88" text-anchor="middle" font-size="24" font-weight="900" fill="#17202a">${short}</text>
      <text x="163" y="84" text-anchor="middle" font-size="28" font-weight="900" fill="#fff">${subjectLabel(activity.subject).slice(0, 1)}</text>
    </svg>
  `;
}

function renderFilters() {
  document.querySelector("#subjectFilters").innerHTML = Object.entries(subjects)
    .map(([key, label]) => `<button class="filter-chip ${state.subject === key ? "active" : ""}" type="button" data-subject="${key}">${label}</button>`)
    .join("");

  document.querySelector("#gradeFilters").innerHTML = Object.entries(grades)
    .map(([key, label]) => `<button class="filter-chip ${state.grade === key ? "active" : ""}" type="button" data-grade="${key}">${label}</button>`)
    .join("");

  document.querySelector("#modeFilters").innerHTML = Object.entries(modes)
    .map(([key, label]) => `<button class="filter-chip ${state.mode === key ? "active" : ""}" type="button" data-mode="${key}">${label}</button>`)
    .join("");

  document.querySelectorAll("[data-subject]").forEach((button) => {
    button.addEventListener("click", () => {
      state.subject = button.dataset.subject;
      renderAll();
      document.querySelector("#games").scrollIntoView({ behavior: "smooth" });
    });
  });

  document.querySelectorAll("[data-grade]").forEach((button) => {
    button.addEventListener("click", () => {
      state.grade = button.dataset.grade;
      renderAll();
      document.querySelector("#games").scrollIntoView({ behavior: "smooth" });
    });
  });

  document.querySelectorAll("[data-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.mode);
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      document.body.dataset.mode = state.mode;
      renderAll();
      renderActivity();
    });
  });
}

function filteredActivities() {
  const query = state.query.trim().toLowerCase();
  return activities.filter((activity) => {
    const subjectOk = state.subject === "all" || activity.subject === state.subject;
    const gradeOk = state.grade === "all" || activity.grade === state.grade;
    const haystack = `${activity.title} ${activity.description} ${activity.skill} ${subjectLabel(activity.subject)} ${gradeLabel(activity.grade)}`.toLowerCase();
    return subjectOk && gradeOk && haystack.includes(query);
  });
}

function renderCards() {
  const list = filteredActivities();
  gameCount.textContent = `${list.length} 个活动`;

  if (!list.length) {
    gameGrid.innerHTML = `
      <div class="empty-state" role="status">
        <strong>没有找到匹配活动</strong>
        <span>换一个关键词，或回到“全部”继续浏览。</span>
      </div>
    `;
    return;
  }

  gameGrid.innerHTML = list
    .map((activity) => `
      <button class="game-card subject-${activity.subject}" type="button" data-activity="${activity.id}">
        <span class="game-thumb">${cardArt(activity)}</span>
        <span class="game-subject">${subjectLabel(activity.subject)}</span>
        <h3>${activity.title}</h3>
        <p>${activity.description}</p>
        <span class="game-meta">
          <span>${gradeLabel(activity.grade)}</span>
          <span>${activity.skill}</span>
        </span>
      </button>
    `)
    .join("");

  document.querySelectorAll("[data-activity]").forEach((button) => {
    button.addEventListener("click", () => {
      startActivity(button.dataset.activity);
    });
  });
}

function renderDaily() {
  const picks = ["math-bubble", "pinyin-train", "cvc-builder"].map(getActivity);
  dailyList.innerHTML = picks
    .map((activity) => `
      <button class="daily-card subject-${activity.subject}" type="button" data-daily="${activity.id}">
        <span>${subjectLabel(activity.subject)}</span>
        <strong>${activity.title}</strong>
        <small>${activity.skill}</small>
      </button>
    `)
    .join("");

  document.querySelectorAll("[data-daily]").forEach((button) => {
    button.addEventListener("click", () => startActivity(button.dataset.daily));
  });
}

function renderTeacherRail() {
  teacherRail.innerHTML = activities
    .filter((activity) => activity.subject === "teacher")
    .map((activity) => `
      <button class="rail-card" type="button" data-teacher-tool="${activity.id}">
        <strong>${activity.title}</strong>
        <span>${activity.description}</span>
      </button>
    `)
    .join("");

  document.querySelectorAll("[data-teacher-tool]").forEach((button) => {
    button.addEventListener("click", () => startActivity(button.dataset.teacherTool));
  });
}

function startActivity(id) {
  state.activeId = id;
  runtime.selected = [];
  runtime.built = [];
  runtime.matched = new Set();
  runtime.flashBack = false;
  window.clearInterval(runtime.timerId);
  runtime.timerId = null;
  renderActivity();
  document.querySelector("#playLab").scrollIntoView({ behavior: "smooth" });
}

function playHeader(activity) {
  const teacherCopy = state.mode === "teacher" ? `<div class="teacher-note">${activity.teacherNote}</div>` : "";
  return `
    <div class="play-head subject-${activity.subject}">
      <div>
        <span class="game-subject">${subjectLabel(activity.subject)} · ${gradeLabel(activity.grade)}</span>
        <h3>${activity.title}</h3>
        <p>${activity.description}</p>
      </div>
      <div class="score-chip">
        <span>练习</span>
        <strong>${runtime.score[activity.id] || 0}</strong>
      </div>
    </div>
    ${teacherCopy}
  `;
}

function renderActivity() {
  const activity = getActivity(state.activeId);
  const renderer = {
    sum: renderSum,
    hundred: renderHundred,
    fraction: renderFraction,
    quiz: renderQuiz,
    match: renderMatch,
    order: renderOrder,
    flashcard: renderFlashcard,
    builder: renderBuilder,
    timer: renderTimer,
    spinner: renderSpinner,
    picker: renderPicker,
    scoreboard: renderScoreboard,
    whiteboard: renderWhiteboard,
  }[activity.type];

  activityPanel.innerHTML = playHeader(activity) + `<div class="play-body">${renderer(activity)}</div>`;
  bindActivity(activity);
}

function renderSum(activity) {
  const a = Math.floor(Math.random() * 8) + 2;
  const b = Math.floor(Math.random() * 8) + 2;
  const target = a + b;
  const distractors = Array.from({ length: 6 }, () => Math.floor(Math.random() * 9) + 1);
  const numbers = shuffle([a, b, ...distractors]);
  activity.current = { target, numbers, chosen: new Set() };
  return `
    <div class="target-panel"><span>目标</span><strong>${target}</strong></div>
    <div class="bubble-board compact">
      ${numbers.map((number, index) => `<button class="bubble-button" type="button" data-sum-index="${index}">${number}</button>`).join("")}
    </div>
    <div class="tool-actions">
      <strong id="activityStatus">选中的和：0</strong>
      <button type="button" data-next>换一题</button>
    </div>
  `;
}

function bindSum(activity) {
  activityPanel.querySelectorAll("[data-sum-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.sumIndex);
      if (activity.current.chosen.has(index)) activity.current.chosen.delete(index);
      else activity.current.chosen.add(index);
      button.classList.toggle("selected", activity.current.chosen.has(index));
      const sum = [...activity.current.chosen].reduce((total, item) => total + activity.current.numbers[item], 0);
      const status = activityPanel.querySelector("#activityStatus");
      if (sum === activity.current.target) {
        runtime.score[activity.id] = (runtime.score[activity.id] || 0) + 1;
        status.textContent = "答对了，进入下一题";
        playTone(true);
        window.setTimeout(renderActivity, 650);
      } else {
        status.textContent = sum > activity.current.target ? `选中的和：${sum}，超出一点` : `选中的和：${sum}`;
      }
    });
  });
}

function renderHundred() {
  return `
    <div class="segmented" aria-label="百数表模式">
      <button class="active" type="button" data-hundred="all">全部</button>
      <button type="button" data-hundred="even">偶数</button>
      <button type="button" data-hundred="five">5 的倍数</button>
      <button type="button" data-hundred="prime">质数</button>
    </div>
    <div class="hundred-grid" id="hundredGrid"></div>
  `;
}

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
}

function bindHundred() {
  const renderGrid = (mode) => {
    const shouldHighlight = (number) => {
      if (mode === "even") return number % 2 === 0;
      if (mode === "five") return number % 5 === 0;
      if (mode === "prime") return isPrime(number);
      return true;
    };
    activityPanel.querySelector("#hundredGrid").innerHTML = Array.from({ length: 100 }, (_, index) => {
      const number = index + 1;
      return `<button class="hundred-cell ${shouldHighlight(number) ? "highlight" : ""}" type="button">${number}</button>`;
    }).join("");
  };
  renderGrid("all");
  activityPanel.querySelectorAll("[data-hundred]").forEach((button) => {
    button.addEventListener("click", () => {
      activityPanel.querySelectorAll("[data-hundred]").forEach((item) => item.classList.toggle("active", item === button));
      renderGrid(button.dataset.hundred);
    });
  });
}

function renderFraction(activity) {
  activity.current = { denominator: 4, filled: 1 };
  return `
    <div class="segmented">
      ${[2, 3, 4, 6, 8].map((number) => `<button class="${number === 4 ? "active" : ""}" type="button" data-denominator="${number}">${number} 份</button>`).join("")}
    </div>
    <div class="fraction-builder" id="fractionBuilder"></div>
    <div class="fraction-reference" id="fractionReference"></div>
    <div class="tool-actions">
      <strong id="activityStatus">当前：1/4</strong>
      <button type="button" data-next>换活动</button>
    </div>
  `;
}

function bindFraction(activity) {
  const draw = () => {
    const { denominator, filled } = activity.current;
    activityPanel.querySelector("#fractionBuilder").innerHTML = Array.from({ length: denominator }, (_, index) =>
      `<button class="fraction-segment ${index < filled ? "active" : ""}" type="button" data-fill="${index + 1}">${index + 1}</button>`,
    ).join("");
    activityPanel.querySelector("#fractionReference").innerHTML = [2, 3, 4, 6, 8].map((denominatorItem) => {
      const activeCount = Math.round((filled / denominator) * denominatorItem);
      return `
        <div class="fraction-row">
          <strong>/${denominatorItem}</strong>
          <div>${Array.from({ length: denominatorItem }, (_, index) => `<span class="${index < activeCount ? "active" : ""}"></span>`).join("")}</div>
        </div>
      `;
    }).join("");
    activityPanel.querySelector("#activityStatus").textContent = `当前：${filled}/${denominator}`;
    activityPanel.querySelectorAll("[data-fill]").forEach((button) => {
      button.addEventListener("click", () => {
        activity.current.filled = Number(button.dataset.fill);
        draw();
      });
    });
  };
  activityPanel.querySelectorAll("[data-denominator]").forEach((button) => {
    button.addEventListener("click", () => {
      activity.current.denominator = Number(button.dataset.denominator);
      activity.current.filled = 1;
      activityPanel.querySelectorAll("[data-denominator]").forEach((item) => item.classList.toggle("active", item === button));
      draw();
    });
  });
  draw();
}

function getQuestion(activity) {
  const index = runtime.quizIndex[activity.id] || 0;
  return activity.questions[index % activity.questions.length];
}

function renderQuiz(activity) {
  const question = getQuestion(activity);
  return `
    <div class="question-card">
      <span>${activity.skill}</span>
      <strong>${question.prompt}</strong>
    </div>
    <div class="option-grid">
      ${shuffle(question.options).map((option) => `<button type="button" data-choice="${option}">${option}</button>`).join("")}
    </div>
    <div class="tool-actions">
      <strong id="activityStatus">请选择答案</strong>
      <button type="button" data-next>下一题</button>
    </div>
  `;
}

function bindQuiz(activity) {
  const question = getQuestion(activity);
  activityPanel.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      const ok = button.dataset.choice === question.answer;
      button.classList.add(ok ? "correct" : "wrong");
      activityPanel.querySelector("#activityStatus").textContent = ok ? "答对了" : `再想想，正确答案是 ${question.answer}`;
      if (ok) runtime.score[activity.id] = (runtime.score[activity.id] || 0) + 1;
      playTone(ok);
    });
  });
}

function renderMatch(activity) {
  const deck = shuffle(activity.pairs.flatMap((pair, pairId) => pair.map((text) => ({ text, pairId }))));
  activity.current = { deck };
  runtime.selected = [];
  runtime.matched = new Set();
  return `
    <div class="match-grid">
      ${deck.map((card, index) => `<button class="match-card" type="button" data-match="${index}">${card.text}</button>`).join("")}
    </div>
    <div class="tool-actions">
      <strong id="activityStatus">已配对：0/${activity.pairs.length}</strong>
      <button type="button" data-next>重新洗牌</button>
    </div>
  `;
}

function bindMatch(activity) {
  activityPanel.querySelectorAll("[data-match]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.match);
      const card = activity.current.deck[index];
      if (runtime.matched.has(card.pairId) || runtime.selected.includes(index)) return;
      runtime.selected.push(index);
      button.classList.add("selected");
      if (runtime.selected.length === 2) {
        const cards = runtime.selected.map((item) => activity.current.deck[item]);
        if (cards[0].pairId === cards[1].pairId) {
          runtime.matched.add(cards[0].pairId);
          runtime.selected.forEach((item) => activityPanel.querySelector(`[data-match="${item}"]`).classList.add("matched"));
          runtime.selected = [];
          runtime.score[activity.id] = runtime.matched.size;
          activityPanel.querySelector("#activityStatus").textContent = `已配对：${runtime.matched.size}/${activity.pairs.length}`;
          playTone(true);
        } else {
          activityPanel.querySelector("#activityStatus").textContent = "不是一对，再试一次";
          playTone(false);
          window.setTimeout(() => {
            runtime.selected.forEach((item) => activityPanel.querySelector(`[data-match="${item}"]`)?.classList.remove("selected"));
            runtime.selected = [];
          }, 600);
        }
      }
    });
  });
}

function renderOrder(activity) {
  runtime.built = [];
  const tokens = shuffle(activity.target);
  return `
    <div class="build-target" id="buildTarget">请按顺序点击</div>
    <div class="tile-bank">
      ${tokens.map((token, index) => `<button type="button" data-token="${index}" data-value="${token}">${token}</button>`).join("")}
    </div>
    <div class="tool-actions">
      <strong id="activityStatus">目标：${activity.target.length} 步</strong>
      <button type="button" data-next>重来</button>
    </div>
  `;
}

function bindOrder(activity) {
  bindBuilderLike(activity);
}

function renderBuilder(activity) {
  runtime.built = [];
  return `
    <div class="build-target" id="buildTarget">请拼出：${activity.target.join(" ")}</div>
    <div class="tile-bank">
      ${shuffle(activity.target).map((token, index) => `<button type="button" data-token="${index}" data-value="${token}">${token}</button>`).join("")}
    </div>
    <div class="tool-actions">
      <strong id="activityStatus">点击词卡开始</strong>
      <button type="button" data-next>重来</button>
    </div>
  `;
}

function bindBuilder(activity) {
  bindBuilderLike(activity);
}

function bindBuilderLike(activity) {
  activityPanel.querySelectorAll("[data-token]").forEach((button) => {
    button.addEventListener("click", () => {
      runtime.built.push(button.dataset.value);
      button.disabled = true;
      activityPanel.querySelector("#buildTarget").textContent = runtime.built.join(" ");
      const complete = runtime.built.length === activity.target.length;
      if (complete) {
        const ok = runtime.built.join("|") === activity.target.join("|");
        activityPanel.querySelector("#activityStatus").textContent = ok ? "顺序正确" : "顺序不对，再试一次";
        if (ok) runtime.score[activity.id] = (runtime.score[activity.id] || 0) + 1;
        playTone(ok);
      }
    });
  });
}

function renderFlashcard(activity) {
  const index = runtime.flashIndex[activity.id] || 0;
  const card = activity.cards[index % activity.cards.length];
  return `
    <button class="flashcard" type="button" id="flashcard">
      <span>${runtime.flashBack ? "背面" : "正面"}</span>
      <strong>${runtime.flashBack ? card.back : card.front}</strong>
    </button>
    <div class="tool-actions">
      <strong id="activityStatus">点击卡片翻面</strong>
      <button type="button" id="nextCard">下一张</button>
    </div>
  `;
}

function bindFlashcard(activity) {
  activityPanel.querySelector("#flashcard").addEventListener("click", () => {
    runtime.flashBack = !runtime.flashBack;
    renderActivity();
  });
  activityPanel.querySelector("#nextCard").addEventListener("click", () => {
    runtime.flashIndex[activity.id] = (runtime.flashIndex[activity.id] || 0) + 1;
    runtime.flashBack = false;
    renderActivity();
  });
}

function renderTimer() {
  runtime.timerSeconds = runtime.timerDefault;
  return `
    <div class="timer-display" id="timerDisplay">${formatTime(runtime.timerSeconds)}</div>
    <div class="timer-presets">
      <button type="button" data-minutes="1">1 分钟</button>
      <button class="active" type="button" data-minutes="3">3 分钟</button>
      <button type="button" data-minutes="5">5 分钟</button>
    </div>
    <div class="tool-actions">
      <button type="button" id="startTimer">开始</button>
      <button type="button" id="pauseTimer">暂停</button>
      <button type="button" id="resetTimer">重置</button>
    </div>
  `;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
}

function bindTimer() {
  const display = activityPanel.querySelector("#timerDisplay");
  const render = () => {
    display.textContent = formatTime(runtime.timerSeconds);
  };
  const pause = () => {
    window.clearInterval(runtime.timerId);
    runtime.timerId = null;
  };
  activityPanel.querySelectorAll("[data-minutes]").forEach((button) => {
    button.addEventListener("click", () => {
      pause();
      runtime.timerDefault = Number(button.dataset.minutes) * 60;
      runtime.timerSeconds = runtime.timerDefault;
      activityPanel.querySelectorAll("[data-minutes]").forEach((item) => item.classList.toggle("active", item === button));
      render();
    });
  });
  activityPanel.querySelector("#startTimer").addEventListener("click", () => {
    if (runtime.timerId) return;
    runtime.timerId = window.setInterval(() => {
      runtime.timerSeconds = Math.max(0, runtime.timerSeconds - 1);
      render();
      if (runtime.timerSeconds === 0) pause();
    }, 1000);
  });
  activityPanel.querySelector("#pauseTimer").addEventListener("click", pause);
  activityPanel.querySelector("#resetTimer").addEventListener("click", () => {
    pause();
    runtime.timerSeconds = runtime.timerDefault;
    render();
  });
}

function renderSpinner(activity) {
  return `
    <div class="spinner-tool">
      <div class="spinner-wheel" id="spinnerWheel">
        ${activity.items.slice(0, 6).map((item) => `<span>${item}</span>`).join("")}
      </div>
      <div class="tool-actions">
        <strong id="activityStatus">准备</strong>
        <button type="button" id="spinButton">转一下</button>
      </div>
    </div>
  `;
}

function bindSpinner(activity) {
  let degrees = 0;
  activityPanel.querySelector("#spinButton").addEventListener("click", () => {
    const item = activity.items[Math.floor(Math.random() * activity.items.length)];
    degrees += 1440 + Math.floor(Math.random() * 360);
    activityPanel.querySelector("#spinnerWheel").style.transform = `rotate(${degrees}deg)`;
    activityPanel.querySelector("#activityStatus").textContent = item;
    playTone(true);
  });
}

function renderPicker() {
  return `
    <textarea class="picker-input" id="pickerInput" rows="6">小明
小红
小宇
小雨
小安</textarea>
    <div class="picker-result" id="pickerResult">准备点名</div>
    <div class="tool-actions">
      <strong>每行一个名字</strong>
      <button type="button" id="pickName">随机抽取</button>
    </div>
  `;
}

function bindPicker() {
  activityPanel.querySelector("#pickName").addEventListener("click", () => {
    const names = activityPanel.querySelector("#pickerInput").value.split(/\n+/).map((item) => item.trim()).filter(Boolean);
    const name = names[Math.floor(Math.random() * names.length)] || "请先输入名字";
    activityPanel.querySelector("#pickerResult").textContent = name;
    playTone(true);
  });
}

function renderScoreboard() {
  return `
    <div class="scoreboard">
      ${runtime.scoreboard.map((score, index) => `
        <div class="team-score">
          <strong>${index + 1} 组</strong>
          <span>${score}</span>
          <button type="button" data-team-plus="${index}">+1</button>
          <button type="button" data-team-minus="${index}">-1</button>
        </div>
      `).join("")}
    </div>
  `;
}

function bindScoreboard() {
  activityPanel.querySelectorAll("[data-team-plus]").forEach((button) => {
    button.addEventListener("click", () => {
      runtime.scoreboard[Number(button.dataset.teamPlus)] += 1;
      renderActivity();
    });
  });
  activityPanel.querySelectorAll("[data-team-minus]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.teamMinus);
      runtime.scoreboard[index] = Math.max(0, runtime.scoreboard[index] - 1);
      renderActivity();
    });
  });
}

function renderWhiteboard() {
  return `
    <div class="paint-toolbar">
      <button class="swatch active" type="button" data-color="#1f7a8c" aria-label="蓝绿色"></button>
      <button class="swatch" type="button" data-color="#f25c54" aria-label="红色"></button>
      <button class="swatch" type="button" data-color="#ffd166" aria-label="黄色"></button>
      <button type="button" id="clearCanvas">清空</button>
    </div>
    <canvas id="paintCanvas" width="920" height="420" aria-label="课堂白板"></canvas>
  `;
}

function bindWhiteboard() {
  const canvas = activityPanel.querySelector("#paintCanvas");
  const ctx = canvas.getContext("2d");
  let drawing = false;
  let color = "#1f7a8c";
  let last = null;

  const resizeCanvas = () => {
    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.max(320, Math.round(rect.width * ratio));
    canvas.height = Math.max(240, Math.round(rect.height * ratio));
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  };

  const point = (event) => {
    const rect = canvas.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };

  resizeCanvas();
  activityPanel.querySelectorAll("[data-color]").forEach((button) => {
    button.addEventListener("click", () => {
      color = button.dataset.color;
      activityPanel.querySelectorAll("[data-color]").forEach((item) => item.classList.toggle("active", item === button));
    });
  });
  canvas.addEventListener("pointerdown", (event) => {
    drawing = true;
    last = point(event);
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener("pointermove", (event) => {
    if (!drawing) return;
    const next = point(event);
    ctx.strokeStyle = color;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(next.x, next.y);
    ctx.stroke();
    last = next;
  });
  canvas.addEventListener("pointerup", () => {
    drawing = false;
    last = null;
  });
  activityPanel.querySelector("#clearCanvas").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
}

function bindActivity(activity) {
  const binders = {
    sum: bindSum,
    hundred: bindHundred,
    fraction: bindFraction,
    quiz: bindQuiz,
    match: bindMatch,
    order: bindOrder,
    flashcard: bindFlashcard,
    builder: bindBuilder,
    timer: bindTimer,
    spinner: bindSpinner,
    picker: bindPicker,
    scoreboard: bindScoreboard,
    whiteboard: bindWhiteboard,
  };
  binders[activity.type]?.(activity);

  activityPanel.querySelectorAll("[data-next]").forEach((button) => {
    button.addEventListener("click", () => {
      runtime.quizIndex[activity.id] = (runtime.quizIndex[activity.id] || 0) + 1;
      renderActivity();
    });
  });
}

function renderAll() {
  renderFilters();
  renderCards();
  renderDaily();
  renderTeacherRail();
}

searchForm.addEventListener("submit", (event) => event.preventDefault());
searchInput.addEventListener("input", () => {
  state.query = searchInput.value;
  if (state.query.trim()) {
    state.subject = "all";
    state.grade = "all";
    renderFilters();
  }
  renderCards();
});

document.querySelectorAll("[data-entry-subject]").forEach((button) => {
  button.addEventListener("click", () => {
    state.subject = button.dataset.entrySubject;
    state.grade = "all";
    state.query = "";
    searchInput.value = "";
    renderAll();
    document.querySelector("#games").scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelector("#soundToggle").addEventListener("click", (event) => {
  state.sound = !state.sound;
  event.currentTarget.textContent = state.sound ? "声音开" : "声音关";
  event.currentTarget.setAttribute("aria-pressed", String(state.sound));
});

document.querySelector("#fullscreenButton").addEventListener("click", () => {
  activityPanel.requestFullscreen?.();
});

document.body.dataset.mode = state.mode;
renderAll();
renderActivity();
