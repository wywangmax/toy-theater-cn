const games = [
  {
    title: "数学泡泡",
    category: "math",
    categoryLabel: "数学",
    level: "一年级起",
    tool: "bubble",
    color: "#dff3f6",
    description: "用几个数字凑出目标数，练习加法和数感。",
    icon: "bubbles",
  },
  {
    title: "百数表",
    category: "math",
    categoryLabel: "数学",
    level: "一年级起",
    tool: "hundred",
    color: "#fff2c6",
    description: "观察奇偶、倍数和质数的数字规律。",
    icon: "grid",
  },
  {
    title: "分数条",
    category: "math",
    categoryLabel: "数学",
    level: "三年级起",
    tool: "fraction",
    color: "#ede7ff",
    description: "用可视化色条理解二分之一、三分之一和四分之一。",
    icon: "strips",
  },
  {
    title: "拼音火车",
    category: "language",
    categoryLabel: "语文",
    level: "学前起",
    tool: "pinyin",
    color: "#ffe4e1",
    description: "把声母、韵母和声调组合成完整读音。",
    icon: "train",
  },
  {
    title: "词语配对",
    category: "language",
    categoryLabel: "语文",
    level: "二年级起",
    tool: "wordmatch",
    color: "#dff6ed",
    description: "在近义词、反义词和量词之间建立连接。",
    icon: "cards",
  },
  {
    title: "自由画板",
    category: "art",
    categoryLabel: "艺术",
    level: "全年级",
    tool: "paint",
    color: "#dff3f6",
    description: "用颜色、线条和网格创作图案。",
    icon: "paint",
  },
  {
    title: "对称花园",
    category: "art",
    categoryLabel: "艺术",
    level: "二年级起",
    tool: "symmetry",
    color: "#fff2c6",
    description: "画出左右或上下对称的图形。",
    icon: "symmetry",
  },
  {
    title: "节奏琴",
    category: "music",
    categoryLabel: "音乐",
    level: "全年级",
    tool: "piano",
    color: "#ede7ff",
    description: "用七个音阶做节奏、旋律和听辨练习。",
    icon: "piano",
  },
  {
    title: "图形记忆",
    category: "logic",
    categoryLabel: "益智",
    level: "一年级起",
    tool: "memory",
    color: "#ffe4e1",
    description: "根据颜色和形状寻找相同组合。",
    icon: "memory",
  },
  {
    title: "迷宫路径",
    category: "logic",
    categoryLabel: "益智",
    level: "二年级起",
    tool: "maze",
    color: "#dff6ed",
    description: "用方向、顺序和策略找出路线。",
    icon: "maze",
  },
  {
    title: "课堂计时器",
    category: "teacher",
    categoryLabel: "教师工具",
    level: "教师",
    tool: "timer",
    color: "#dff3f6",
    description: "给讨论、口算、收纳和展示设置倒计时。",
    icon: "timer",
  },
  {
    title: "课堂转盘",
    category: "teacher",
    categoryLabel: "教师工具",
    level: "教师",
    tool: "spinner",
    color: "#fff2c6",
    description: "随机选择小组、任务或复习主题。",
    icon: "spinner",
  },
];

const svgIcons = {
  bubbles: () => `
    <svg viewBox="0 0 260 150" aria-hidden="true">
      <rect width="260" height="150" fill="#dff3f6"/>
      <circle cx="70" cy="76" r="38" fill="#ffd166" stroke="#17202a" stroke-width="6"/>
      <circle cx="138" cy="54" r="30" fill="#fff" stroke="#17202a" stroke-width="6"/>
      <circle cx="182" cy="96" r="34" fill="#f25c54" stroke="#17202a" stroke-width="6"/>
      <text x="70" y="86" text-anchor="middle" font-size="34" font-weight="900" fill="#17202a">7</text>
      <text x="138" y="65" text-anchor="middle" font-size="28" font-weight="900" fill="#17202a">3</text>
      <text x="182" y="107" text-anchor="middle" font-size="30" font-weight="900" fill="#fff">10</text>
    </svg>`,
  grid: () => `
    <svg viewBox="0 0 260 150" aria-hidden="true">
      <rect width="260" height="150" fill="#fff2c6"/>
      ${Array.from({ length: 25 }, (_, index) => {
        const x = 36 + (index % 5) * 38;
        const y = 20 + Math.floor(index / 5) * 24;
        const active = [1, 4, 8, 12, 16, 20, 23].includes(index);
        return `<rect x="${x}" y="${y}" width="28" height="18" rx="3" fill="${active ? "#1f7a8c" : "#ffffff"}" stroke="#17202a" stroke-width="3"/>`;
      }).join("")}
    </svg>`,
  strips: () => `
    <svg viewBox="0 0 260 150" aria-hidden="true">
      <rect width="260" height="150" fill="#ede7ff"/>
      <rect x="38" y="32" width="184" height="22" rx="6" fill="#f25c54" stroke="#17202a" stroke-width="5"/>
      <rect x="38" y="66" width="92" height="22" rx="6" fill="#ffd166" stroke="#17202a" stroke-width="5"/>
      <rect x="130" y="66" width="92" height="22" rx="6" fill="#fff" stroke="#17202a" stroke-width="5"/>
      <rect x="38" y="100" width="46" height="22" rx="6" fill="#2a9d8f" stroke="#17202a" stroke-width="5"/>
      <rect x="84" y="100" width="46" height="22" rx="6" fill="#fff" stroke="#17202a" stroke-width="5"/>
      <rect x="130" y="100" width="46" height="22" rx="6" fill="#2a9d8f" stroke="#17202a" stroke-width="5"/>
      <rect x="176" y="100" width="46" height="22" rx="6" fill="#fff" stroke="#17202a" stroke-width="5"/>
    </svg>`,
  train: () => `
    <svg viewBox="0 0 260 150" aria-hidden="true">
      <rect width="260" height="150" fill="#ffe4e1"/>
      <rect x="36" y="62" width="58" height="42" rx="8" fill="#f25c54" stroke="#17202a" stroke-width="6"/>
      <rect x="104" y="50" width="54" height="54" rx="8" fill="#ffd166" stroke="#17202a" stroke-width="6"/>
      <rect x="168" y="62" width="58" height="42" rx="8" fill="#1f7a8c" stroke="#17202a" stroke-width="6"/>
      <circle cx="58" cy="113" r="11" fill="#17202a"/>
      <circle cx="138" cy="113" r="11" fill="#17202a"/>
      <circle cx="204" cy="113" r="11" fill="#17202a"/>
      <text x="65" y="91" text-anchor="middle" font-size="24" font-weight="900" fill="#fff">b</text>
      <text x="132" y="84" text-anchor="middle" font-size="22" font-weight="900" fill="#17202a">ao</text>
      <text x="197" y="91" text-anchor="middle" font-size="24" font-weight="900" fill="#fff">包</text>
    </svg>`,
  cards: () => `
    <svg viewBox="0 0 260 150" aria-hidden="true">
      <rect width="260" height="150" fill="#dff6ed"/>
      <rect x="48" y="34" width="70" height="86" rx="9" fill="#fff" stroke="#17202a" stroke-width="6"/>
      <rect x="142" y="34" width="70" height="86" rx="9" fill="#fff" stroke="#17202a" stroke-width="6"/>
      <path d="M118 77h24" stroke="#17202a" stroke-width="6" stroke-linecap="round"/>
      <path d="M134 66l12 11-12 11" fill="none" stroke="#17202a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="83" y="84" text-anchor="middle" font-size="22" font-weight="900" fill="#17202a">大</text>
      <text x="177" y="84" text-anchor="middle" font-size="22" font-weight="900" fill="#17202a">小</text>
    </svg>`,
  paint: () => `
    <svg viewBox="0 0 260 150" aria-hidden="true">
      <rect width="260" height="150" fill="#dff3f6"/>
      <path d="M55 102c42-54 80 18 126-36" fill="none" stroke="#f25c54" stroke-width="12" stroke-linecap="round"/>
      <circle cx="74" cy="50" r="16" fill="#ffd166" stroke="#17202a" stroke-width="5"/>
      <rect x="148" y="86" width="42" height="30" rx="6" fill="#2a9d8f" stroke="#17202a" stroke-width="5"/>
      <path d="M196 30l22 22-65 65-28 7 7-28z" fill="#fff" stroke="#17202a" stroke-width="5" stroke-linejoin="round"/>
    </svg>`,
  symmetry: () => `
    <svg viewBox="0 0 260 150" aria-hidden="true">
      <rect width="260" height="150" fill="#fff2c6"/>
      <path d="M130 20v110" stroke="#17202a" stroke-width="5" stroke-dasharray="9 8"/>
      <path d="M126 76c-28-48-72-34-68 6 3 34 41 31 68-6z" fill="#f25c54" stroke="#17202a" stroke-width="6"/>
      <path d="M134 76c28-48 72-34 68 6-3 34-41 31-68-6z" fill="#2a9d8f" stroke="#17202a" stroke-width="6"/>
    </svg>`,
  piano: () => `
    <svg viewBox="0 0 260 150" aria-hidden="true">
      <rect width="260" height="150" fill="#ede7ff"/>
      ${Array.from({ length: 7 }, (_, index) => {
        const x = 34 + index * 28;
        const fill = index % 2 ? "#dff3f6" : "#fff";
        return `<rect x="${x}" y="30" width="24" height="92" rx="5" fill="${fill}" stroke="#17202a" stroke-width="5"/>`;
      }).join("")}
      <path d="M68 24v38M124 24v38M180 24v38" stroke="#17202a" stroke-width="8" stroke-linecap="round"/>
    </svg>`,
  memory: () => `
    <svg viewBox="0 0 260 150" aria-hidden="true">
      <rect width="260" height="150" fill="#ffe4e1"/>
      <rect x="52" y="28" width="54" height="42" rx="8" fill="#ffd166" stroke="#17202a" stroke-width="5"/>
      <rect x="116" y="28" width="54" height="42" rx="8" fill="#1f7a8c" stroke="#17202a" stroke-width="5"/>
      <rect x="52" y="80" width="54" height="42" rx="8" fill="#1f7a8c" stroke="#17202a" stroke-width="5"/>
      <rect x="116" y="80" width="54" height="42" rx="8" fill="#ffd166" stroke="#17202a" stroke-width="5"/>
      <circle cx="203" cy="76" r="28" fill="#fff" stroke="#17202a" stroke-width="5"/>
    </svg>`,
  maze: () => `
    <svg viewBox="0 0 260 150" aria-hidden="true">
      <rect width="260" height="150" fill="#dff6ed"/>
      <path d="M44 35h160v82H70V62h106v30H98" fill="none" stroke="#17202a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="44" cy="35" r="12" fill="#ffd166" stroke="#17202a" stroke-width="5"/>
      <rect x="84" y="80" width="30" height="24" rx="6" fill="#f25c54" stroke="#17202a" stroke-width="5"/>
    </svg>`,
  timer: () => `
    <svg viewBox="0 0 260 150" aria-hidden="true">
      <rect width="260" height="150" fill="#dff3f6"/>
      <circle cx="130" cy="80" r="48" fill="#fff" stroke="#17202a" stroke-width="7"/>
      <path d="M130 80V48M130 80l28 18" stroke="#17202a" stroke-width="7" stroke-linecap="round"/>
      <rect x="108" y="18" width="44" height="18" rx="6" fill="#ffd166" stroke="#17202a" stroke-width="5"/>
      <path d="M88 32l-18 18M172 32l18 18" stroke="#17202a" stroke-width="6" stroke-linecap="round"/>
    </svg>`,
  spinner: () => `
    <svg viewBox="0 0 260 150" aria-hidden="true">
      <rect width="260" height="150" fill="#fff2c6"/>
      <circle cx="130" cy="76" r="50" fill="#fff" stroke="#17202a" stroke-width="7"/>
      <path d="M130 26a50 50 0 0 1 50 50h-50z" fill="#f25c54"/>
      <path d="M180 76a50 50 0 0 1-50 50V76z" fill="#ffd166"/>
      <path d="M130 126a50 50 0 0 1-50-50h50z" fill="#2a9d8f"/>
      <path d="M80 76a50 50 0 0 1 50-50v50z" fill="#7c3aed"/>
      <circle cx="130" cy="76" r="9" fill="#17202a"/>
      <path d="M130 76l36-28" stroke="#17202a" stroke-width="6" stroke-linecap="round"/>
    </svg>`,
};

const gameGrid = document.querySelector("#gameGrid");
const gameCount = document.querySelector("#gameCount");
const searchInput = document.querySelector("#siteSearch");
const searchForm = document.querySelector(".header-search");
const filterButtons = document.querySelectorAll(".filter-chip");
let activeFilter = "all";

function renderGames() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = games.filter((game) => {
    const matchesCategory = activeFilter === "all" || game.category === activeFilter;
    const searchable = `${game.title} ${game.categoryLabel} ${game.description} ${game.level}`.toLowerCase();
    return matchesCategory && searchable.includes(query);
  });

  gameCount.textContent = filtered.length ? `${filtered.length} 个可玩游戏` : "0 个结果";

  if (!filtered.length) {
    gameGrid.innerHTML = `
      <div class="empty-state" role="status">
        <strong>没有找到匹配的游戏</strong>
        <span>换一个关键词，或回到“全部”分类继续浏览。</span>
      </div>
    `;
    return;
  }

  gameGrid.innerHTML = filtered
    .map(
      (game) => `
        <button
          class="game-card"
          type="button"
          data-tool="${game.tool}"
        >
          <span class="game-thumb" style="background:${game.color}">
            ${svgIcons[game.icon]()}
          </span>
          <h3>${game.title}</h3>
          <p>${game.description}</p>
          <span class="game-meta">
            <span>${game.categoryLabel}</span>
            <span>${game.level}</span>
          </span>
        </button>
      `,
    )
    .join("");

  document.querySelectorAll(".game-card").forEach((card) => {
    card.addEventListener("click", () => {
      activateTool(card.dataset.tool);
      document.querySelector("#playLab").scrollIntoView({ behavior: "smooth" });
    });
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderGames();
  });
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

searchInput.addEventListener("input", renderGames);
renderGames();

const bubbleGames = new Map();

function createBubbleGame(config) {
  const board = document.querySelector(config.board);
  const target = document.querySelector(config.target);
  const status = document.querySelector(config.status);
  const score = config.score ? document.querySelector(config.score) : null;
  const roundButton = document.querySelector(config.roundButton);
  const state = {
    target: 10,
    numbers: [],
    selected: new Set(),
    score: 0,
  };

  function sumSelected() {
    return Array.from(state.selected).reduce((total, index) => total + state.numbers[index], 0);
  }

  function updateStatus() {
    const sum = sumSelected();
    if (sum === state.target) {
      status.textContent = "答对了，进入下一题";
      state.score += 1;
      if (score) score.textContent = String(state.score);
      window.setTimeout(newRound, 650);
      return;
    }

    status.textContent = sum > state.target ? `选中的和：${sum}，超出一点` : `选中的和：${sum}`;
  }

  function render() {
    target.textContent = String(state.target);
    board.innerHTML = state.numbers
      .map(
        (number, index) => `
          <button class="bubble-button" type="button" data-index="${index}" aria-pressed="${state.selected.has(index)}">
            ${number}
          </button>
        `,
      )
      .join("");

    board.querySelectorAll(".bubble-button").forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.index);
        if (state.selected.has(index)) {
          state.selected.delete(index);
        } else {
          state.selected.add(index);
        }
        button.classList.toggle("selected", state.selected.has(index));
        button.setAttribute("aria-pressed", String(state.selected.has(index)));
        updateStatus();
      });
    });

    status.textContent = "选中的和：0";
  }

  function newRound() {
    const a = rand(2, 9);
    const b = rand(2, 9);
    const c = rand(1, 6);
    state.target = a + b;
    state.selected.clear();
    state.numbers = shuffle([a, b, c, rand(1, 9), rand(1, 9), rand(1, 9), rand(1, 9), rand(1, 9)]);
    render();
  }

  roundButton.addEventListener("click", newRound);
  newRound();
  bubbleGames.set(config.name, { newRound });
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

createBubbleGame({
  name: "hero",
  board: "#bubbleBoard",
  target: "#bubbleTarget",
  status: "#bubbleStatus",
  score: "#bubbleScore",
  roundButton: "#newBubbleRound",
});

createBubbleGame({
  name: "lab",
  board: "#labBubbleBoard",
  target: "#labBubbleTarget",
  status: "#labBubbleStatus",
  roundButton: "#labNewBubbleRound",
});

const labTabs = document.querySelectorAll(".lab-tab");
const panels = document.querySelectorAll("[data-tool-panel]");

function activateTool(tool) {
  labTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.tool === tool));
  panels.forEach((panel) => panel.classList.toggle("active", panel.dataset.toolPanel === tool));
  if (tool === "paint") {
    resizeCanvas();
  }
}

labTabs.forEach((tab) => {
  tab.addEventListener("click", () => activateTool(tab.dataset.tool));
});

document.querySelectorAll("[data-tool-link]").forEach((link) => {
  link.addEventListener("click", () => {
    activateTool(link.dataset.toolLink);
  });
});

function activateToolFromHash() {
  const hashToolMap = {
    "#fraction": "fraction",
    "#pinyin": "pinyin",
    "#wordmatch": "wordmatch",
    "#symmetry": "symmetry",
    "#memory": "memory",
    "#maze": "maze",
    "#teacherTools": "timer",
    "#timer": "timer",
  };
  const tool = hashToolMap[window.location.hash];
  if (tool) {
    activateTool(tool);
    document.querySelector("#playLab").scrollIntoView();
  }
}

window.addEventListener("hashchange", activateToolFromHash);
activateToolFromHash();

const hundredGrid = document.querySelector("#hundredGrid");
const modeButtons = document.querySelectorAll(".segmented button");
let hundredMode = "all";

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
}

function shouldHighlight(number) {
  if (hundredMode === "even") return number % 2 === 0;
  if (hundredMode === "five") return number % 5 === 0;
  if (hundredMode === "prime") return isPrime(number);
  return true;
}

function renderHundredGrid() {
  hundredGrid.innerHTML = Array.from({ length: 100 }, (_, index) => {
    const number = index + 1;
    const active = shouldHighlight(number) ? "highlight" : "";
    return `<button class="hundred-cell ${active}" type="button" data-number="${number}">${number}</button>`;
  }).join("");

  hundredGrid.querySelectorAll(".hundred-cell").forEach((cell) => {
    cell.addEventListener("click", () => cell.classList.toggle("picked"));
  });
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    hundredMode = button.dataset.mode;
    modeButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderHundredGrid();
  });
});

renderHundredGrid();

const fractionBuilder = document.querySelector("#fractionBuilder");
const fractionReference = document.querySelector("#fractionReference");
const fractionStatus = document.querySelector("#fractionStatus");
const denominatorButtons = document.querySelectorAll("[data-denominator]");
const fractionState = {
  denominator: 2,
  filled: 1,
};

function fractionText(numerator, denominator) {
  return `${numerator}/${denominator}`;
}

function renderFractionTool() {
  fractionBuilder.innerHTML = Array.from({ length: fractionState.denominator }, (_, index) => {
    const active = index < fractionState.filled ? "active" : "";
    return `<button class="fraction-segment ${active}" type="button" data-segment="${index}">${index + 1}</button>`;
  }).join("");

  fractionBuilder.querySelectorAll(".fraction-segment").forEach((segment) => {
    segment.addEventListener("click", () => {
      fractionState.filled = Number(segment.dataset.segment) + 1;
      renderFractionTool();
    });
  });

  const references = [2, 3, 4, 6, 8];
  fractionReference.innerHTML = references
    .map((denominator) => {
      const cells = Array.from({ length: denominator }, (_, index) => {
        const active = index < Math.ceil((fractionState.filled / fractionState.denominator) * denominator);
        return `<span class="${active ? "active" : ""}"></span>`;
      }).join("");
      return `<div class="fraction-row"><strong>1/${denominator}</strong><div>${cells}</div></div>`;
    })
    .join("");

  fractionStatus.textContent = `当前：${fractionText(fractionState.filled, fractionState.denominator)}`;
}

denominatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    fractionState.denominator = Number(button.dataset.denominator);
    fractionState.filled = 1;
    denominatorButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderFractionTool();
  });
});

document.querySelector("#resetFraction").addEventListener("click", () => {
  fractionState.filled = 1;
  renderFractionTool();
});

renderFractionTool();

const pinyinQuestions = [
  { initial: "b", final: "ao", tone: "一声", answer: "包", choices: ["包", "跑", "猫", "鸟"], word: "书包" },
  { initial: "m", final: "a", tone: "一声", answer: "妈", choices: ["妈", "马", "木", "目"], word: "妈妈" },
  { initial: "h", final: "ua", tone: "一声", answer: "花", choices: ["画", "话", "花", "瓜"], word: "花朵" },
  { initial: "sh", final: "ui", tone: "三声", answer: "水", choices: ["水", "睡", "说", "谁"], word: "喝水" },
  { initial: "x", final: "ue", tone: "二声", answer: "学", choices: ["雪", "学", "月", "写"], word: "学习" },
];
let pinyinIndex = 0;
let pinyinScore = 0;

function renderPinyinQuestion() {
  const question = pinyinQuestions[pinyinIndex];
  document.querySelector("#pinyinInitial").textContent = question.initial;
  document.querySelector("#pinyinFinal").textContent = question.final;
  document.querySelector("#pinyinTone").textContent = question.tone;
  document.querySelector("#pinyinChoices").innerHTML = shuffle(question.choices)
    .map((choice) => `<button type="button" data-choice="${choice}">${choice}</button>`)
    .join("");
  document.querySelector("#pinyinStatus").textContent = `选出正确汉字，已答对 ${pinyinScore} 题`;

  document.querySelectorAll("#pinyinChoices button").forEach((button) => {
    button.addEventListener("click", () => {
      const correct = button.dataset.choice === question.answer;
      button.classList.add(correct ? "correct" : "wrong");
      document.querySelector("#pinyinStatus").textContent = correct
        ? `答对了：${question.word}`
        : `再想想：${question.initial}${question.final}`;
      if (correct) {
        pinyinScore += 1;
        window.setTimeout(nextPinyinQuestion, 600);
      }
    });
  });
}

function nextPinyinQuestion() {
  pinyinIndex = (pinyinIndex + 1) % pinyinQuestions.length;
  renderPinyinQuestion();
}

document.querySelector("#nextPinyin").addEventListener("click", nextPinyinQuestion);
renderPinyinQuestion();

const wordPairs = [
  ["大", "小"],
  ["快", "慢"],
  ["高", "低"],
  ["冷", "热"],
  ["开", "关"],
  ["前", "后"],
];
let wordCards = [];
let selectedWords = [];
let matchedPairs = new Set();
let wordMatchLocked = false;

function resetWordMatch() {
  wordCards = shuffle(
    wordPairs.flatMap((pair, pairId) => pair.map((word) => ({ word, pairId }))),
  );
  selectedWords = [];
  matchedPairs = new Set();
  wordMatchLocked = false;
  renderWordMatch();
}

function renderWordMatch() {
  document.querySelector("#wordMatchGrid").innerHTML = wordCards
    .map((card, index) => {
      const selected = selectedWords.includes(index);
      const matched = matchedPairs.has(card.pairId);
      return `
        <button class="match-card ${selected ? "selected" : ""} ${matched ? "matched" : ""}" type="button" data-index="${index}">
          ${card.word}
        </button>
      `;
    })
    .join("");
  document.querySelector("#wordMatchStatus").textContent = `已配对：${matchedPairs.size}/${wordPairs.length}`;

  document.querySelectorAll(".match-card").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);
      const card = wordCards[index];
      if (wordMatchLocked || matchedPairs.has(card.pairId) || selectedWords.includes(index)) return;

      selectedWords.push(index);
      renderWordMatch();

      if (selectedWords.length === 2) {
        const [first, second] = selectedWords.map((item) => wordCards[item]);
        if (first.pairId === second.pairId) {
          matchedPairs.add(first.pairId);
          selectedWords = [];
          renderWordMatch();
        } else {
          wordMatchLocked = true;
          document.querySelector("#wordMatchStatus").textContent = "不是一对，再试一次";
          window.setTimeout(() => {
            selectedWords = [];
            wordMatchLocked = false;
            renderWordMatch();
          }, 700);
        }
      }
    });
  });
}

document.querySelector("#resetWordMatch").addEventListener("click", resetWordMatch);
resetWordMatch();

const symmetryGrid = document.querySelector("#symmetryGrid");
const symmetryCells = new Set();

function renderSymmetryGrid() {
  symmetryGrid.innerHTML = Array.from({ length: 64 }, (_, index) => {
    const row = Math.floor(index / 8);
    const col = index % 8;
    const mirrorCol = col < 4 ? col : 7 - col;
    const active = symmetryCells.has(`${row}-${mirrorCol}`);
    return `<button class="symmetry-cell ${active ? "active" : ""} ${col === 3 ? "axis-left" : ""} ${col === 4 ? "axis-right" : ""}" type="button" data-row="${row}" data-col="${col}"></button>`;
  }).join("");

  symmetryGrid.querySelectorAll(".symmetry-cell").forEach((cell) => {
    cell.addEventListener("click", () => {
      const row = Number(cell.dataset.row);
      const col = Number(cell.dataset.col);
      const mirrorCol = col < 4 ? col : 7 - col;
      const key = `${row}-${mirrorCol}`;
      if (symmetryCells.has(key)) {
        symmetryCells.delete(key);
      } else {
        symmetryCells.add(key);
      }
      renderSymmetryGrid();
    });
  });

  document.querySelector("#symmetryStatus").textContent = `已点亮 ${symmetryCells.size} 对`;
}

document.querySelector("#clearSymmetry").addEventListener("click", () => {
  symmetryCells.clear();
  renderSymmetryGrid();
});

renderSymmetryGrid();

const memoryItems = [
  { key: "sun", label: "黄圆", symbol: "●", color: "#ffd166" },
  { key: "sky", label: "蓝方", symbol: "■", color: "#1f7a8c" },
  { key: "coral", label: "红星", symbol: "★", color: "#f25c54" },
  { key: "leaf", label: "绿菱", symbol: "◆", color: "#2a9d8f" },
  { key: "grape", label: "紫三角", symbol: "▲", color: "#7c3aed" },
  { key: "ink", label: "黑月", symbol: "◐", color: "#17202a" },
];
let memoryDeck = [];
let memoryRevealed = [];
let memoryMatched = new Set();
let memoryLocked = false;

function resetMemory() {
  memoryDeck = shuffle([...memoryItems, ...memoryItems]);
  memoryRevealed = [];
  memoryMatched = new Set();
  memoryLocked = false;
  renderMemory();
}

function renderMemory() {
  document.querySelector("#memoryGrid").innerHTML = memoryDeck
    .map((card, index) => {
      const visible = memoryRevealed.includes(index) || memoryMatched.has(card.key);
      return `
        <button class="memory-card ${visible ? "revealed" : ""}" type="button" data-index="${index}" aria-label="${visible ? card.label : "未翻开的卡片"}">
          <span style="color:${card.color}">${visible ? card.symbol : "?"}</span>
        </button>
      `;
    })
    .join("");
  document.querySelector("#memoryStatus").textContent = `已找到：${memoryMatched.size}/${memoryItems.length}`;

  document.querySelectorAll(".memory-card").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);
      const card = memoryDeck[index];
      if (memoryLocked || memoryMatched.has(card.key) || memoryRevealed.includes(index)) return;
      memoryRevealed.push(index);
      renderMemory();

      if (memoryRevealed.length === 2) {
        const [first, second] = memoryRevealed.map((item) => memoryDeck[item]);
        if (first.key === second.key) {
          memoryMatched.add(first.key);
          memoryRevealed = [];
          renderMemory();
        } else {
          memoryLocked = true;
          window.setTimeout(() => {
            memoryRevealed = [];
            memoryLocked = false;
            renderMemory();
          }, 760);
        }
      }
    });
  });
}

document.querySelector("#resetMemory").addEventListener("click", resetMemory);
resetMemory();

const mazeLayout = [
  [0, 0, 0, 1, 0],
  [1, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
];
const mazeGoal = { row: 4, col: 4 };
const mazeStart = { row: 0, col: 0 };
let mazePlayer = { ...mazeStart };
let mazeSteps = 0;

function renderMaze() {
  document.querySelector("#mazeGrid").innerHTML = mazeLayout
    .flatMap((row, rowIndex) =>
      row.map((cell, colIndex) => {
        const isPlayer = mazePlayer.row === rowIndex && mazePlayer.col === colIndex;
        const isGoal = mazeGoal.row === rowIndex && mazeGoal.col === colIndex;
        return `
          <span class="maze-cell ${cell ? "wall" : ""} ${isGoal ? "goal" : ""} ${isPlayer ? "player" : ""}">
            ${isPlayer ? "我" : isGoal ? "★" : ""}
          </span>
        `;
      }),
    )
    .join("");

  const finished = mazePlayer.row === mazeGoal.row && mazePlayer.col === mazeGoal.col;
  document.querySelector("#mazeStatus").textContent = finished ? `到达终点，用了 ${mazeSteps} 步` : `已走 ${mazeSteps} 步`;
}

function moveMaze(direction) {
  const deltas = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1],
  };
  const [rowDelta, colDelta] = deltas[direction];
  const next = {
    row: mazePlayer.row + rowDelta,
    col: mazePlayer.col + colDelta,
  };
  if (
    next.row < 0 ||
    next.row >= mazeLayout.length ||
    next.col < 0 ||
    next.col >= mazeLayout[0].length ||
    mazeLayout[next.row][next.col] === 1
  ) {
    document.querySelector("#mazeStatus").textContent = "这里走不通，换个方向";
    return;
  }
  mazePlayer = next;
  mazeSteps += 1;
  renderMaze();
}

document.querySelectorAll("[data-move]").forEach((button) => {
  button.addEventListener("click", () => moveMaze(button.dataset.move));
});

document.querySelector("#resetMaze").addEventListener("click", () => {
  mazePlayer = { ...mazeStart };
  mazeSteps = 0;
  renderMaze();
});

renderMaze();

const canvas = document.querySelector("#paintCanvas");
const ctx = canvas.getContext("2d");
const swatches = document.querySelectorAll(".swatch");
const brushSize = document.querySelector("#brushSize");
let currentColor = "#1f7a8c";
let isDrawing = false;
let lastPoint = null;

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  const snapshot = document.createElement("canvas");
  snapshot.width = canvas.width;
  snapshot.height = canvas.height;
  snapshot.getContext("2d").drawImage(canvas, 0, 0);

  canvas.width = Math.max(320, Math.round(rect.width * ratio));
  canvas.height = Math.max(240, Math.round(rect.height * ratio));
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.drawImage(snapshot, 0, 0, snapshot.width / ratio, snapshot.height / ratio);
}

function pointFromEvent(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

function drawLine(point) {
  if (!lastPoint) {
    lastPoint = point;
  }
  ctx.strokeStyle = currentColor;
  ctx.lineWidth = Number(brushSize.value);
  ctx.beginPath();
  ctx.moveTo(lastPoint.x, lastPoint.y);
  ctx.lineTo(point.x, point.y);
  ctx.stroke();
  lastPoint = point;
}

canvas.addEventListener("pointerdown", (event) => {
  isDrawing = true;
  lastPoint = pointFromEvent(event);
  canvas.setPointerCapture(event.pointerId);
});

canvas.addEventListener("pointermove", (event) => {
  if (!isDrawing) return;
  drawLine(pointFromEvent(event));
});

function stopDrawing() {
  isDrawing = false;
  lastPoint = null;
}

canvas.addEventListener("pointerup", stopDrawing);
canvas.addEventListener("pointerleave", stopDrawing);

swatches.forEach((swatch) => {
  swatch.addEventListener("click", () => {
    currentColor = swatch.dataset.color;
    swatches.forEach((item) => item.classList.toggle("active", item === swatch));
  });
});

document.querySelector("#clearCanvas").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

let audioContext = null;

function playNote(frequency, button) {
  const AudioEngine = window.AudioContext || window.webkitAudioContext;
  if (!AudioEngine) {
    button.classList.add("playing");
    window.setTimeout(() => button.classList.remove("playing"), 180);
    return;
  }

  audioContext = audioContext || new AudioEngine();
  audioContext.resume?.();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0.001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.24, audioContext.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.42);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.44);
  button.classList.add("playing");
  window.setTimeout(() => button.classList.remove("playing"), 180);
}

document.querySelectorAll(".piano-tool button").forEach((button) => {
  button.addEventListener("click", () => playNote(Number(button.dataset.note), button));
});

const timerDisplay = document.querySelector("#timerDisplay");
const presetButtons = document.querySelectorAll(".timer-presets button");
let timerSeconds = 180;
let timerDefault = 180;
let timerId = null;

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
}

function renderTimer() {
  timerDisplay.textContent = formatTime(timerSeconds);
}

function pauseTimer() {
  window.clearInterval(timerId);
  timerId = null;
}

presetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    pauseTimer();
    timerDefault = Number(button.dataset.minutes) * 60;
    timerSeconds = timerDefault;
    presetButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderTimer();
  });
});

document.querySelector("#startTimer").addEventListener("click", () => {
  if (timerId) return;
  timerId = window.setInterval(() => {
    timerSeconds = Math.max(0, timerSeconds - 1);
    renderTimer();
    if (timerSeconds === 0) pauseTimer();
  }, 1000);
});

document.querySelector("#pauseTimer").addEventListener("click", pauseTimer);
document.querySelector("#resetTimer").addEventListener("click", () => {
  pauseTimer();
  timerSeconds = timerDefault;
  renderTimer();
});

renderTimer();

const spinButton = document.querySelector("#spinButton");
const spinnerWheel = document.querySelector("#spinnerWheel");
const spinnerResult = document.querySelector("#spinnerResult");
const spinnerItems = ["口算", "拼读", "画图", "讲述"];
let spinCycles = 0;

spinButton.addEventListener("click", () => {
  const index = rand(0, spinnerItems.length - 1);
  const segmentCenter = index * 90 + 45;
  spinCycles += rand(4, 7);
  const finalRotation = spinCycles * 360 - segmentCenter;
  spinnerWheel.style.transform = `rotate(${finalRotation}deg)`;
  spinnerResult.textContent = spinnerItems[index];
});
