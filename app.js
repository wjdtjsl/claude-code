/* ==========================================================================
   다중지능 검사 (Gardner's Theory of Multiple Intelligences)
   8개 지능 x 6문항 = 48문항, 5점 리커트 척도
   ========================================================================== */

const INTELLIGENCES = [
  {
    id: "ling",
    name: "언어지능",
    emoji: "📝",
    color: "var(--c-ling)",
    intro: "말과 글로 생각과 감정을 표현하고 이해하는 능력이에요.",
    trait: "언어를 통해 생각과 감정을 정교하게 표현하고, 글과 말로 사람의 마음을 움직이는 힘이 있습니다.",
    careers: ["작가", "기자", "강사", "변호사", "마케터", "PD"],
    growthTip: "짧은 글쓰기, 다양한 장르의 독서, 발표 연습을 통해 언어 표현력을 조금씩 늘려보세요.",
    questions: [
      "글을 쓰거나 이야기하는 것을 즐긴다.",
      "책을 읽거나 새로운 단어를 배우는 것이 재미있다.",
      "말이나 글로 내 생각을 조리 있게 표현할 수 있다.",
      "말장난, 농담, 언어유희를 즐기는 편이다.",
      "다른 사람의 말이나 글에서 어색한 부분을 잘 찾아낸다.",
      "발표나 토론에서 논리적으로 주장을 펼칠 수 있다.",
    ],
  },
  {
    id: "logic",
    name: "논리수학지능",
    emoji: "🔢",
    color: "var(--c-logic)",
    intro: "숫자, 규칙, 인과관계를 분석하고 체계적으로 문제를 해결하는 능력이에요.",
    trait: "숫자와 논리적 구조를 다루는 데 능하고, 문제의 원인을 분석해 체계적으로 해결합니다.",
    careers: ["과학자", "엔지니어", "회계사", "프로그래머", "데이터 분석가"],
    growthTip: "퍼즐이나 전략 게임, 데이터를 분석하는 활동으로 논리적 사고를 훈련해보세요.",
    questions: [
      "숫자와 관련된 문제를 푸는 것을 좋아한다.",
      "어떤 일이든 원인과 결과를 따져보는 편이다.",
      "규칙이나 패턴을 빨리 찾아내는 편이다.",
      "복잡한 문제를 순서대로 나누어 해결하는 것을 좋아한다.",
      "실험, 퍼즐, 전략 게임을 즐기는 편이다.",
      "논리적으로 앞뒤가 맞지 않으면 쉽게 알아챈다.",
    ],
  },
  {
    id: "spatial",
    name: "공간지능",
    emoji: "🎨",
    color: "var(--c-spatial)",
    intro: "이미지, 도형, 공간을 시각적으로 인식하고 구성하는 능력이에요.",
    trait: "이미지와 공간을 시각적으로 구성하고 머릿속으로 상상하는 능력이 뛰어납니다.",
    careers: ["건축가", "디자이너", "예술가", "사진작가", "영상감독"],
    growthTip: "그림 그리기, 사진 찍기, 공간 배치를 구상해보는 활동으로 시각·공간 감각을 키워보세요.",
    questions: [
      "지도 없이도 길을 잘 찾는 편이다.",
      "그림, 사진, 도형을 보는 것을 좋아한다.",
      "머릿속으로 물건을 회전시키거나 배치를 상상할 수 있다.",
      "색감이나 디자인에 관심이 많다.",
      "그림을 그리거나 무언가를 만드는 것을 좋아한다.",
      "공간 배치나 인테리어를 구상하는 것을 즐긴다.",
    ],
  },
  {
    id: "body",
    name: "신체운동지능",
    emoji: "🏃",
    color: "var(--c-body)",
    intro: "몸을 정교하게 움직이고 조절하며 배우는 능력이에요.",
    trait: "몸을 정교하게 조절하고, 움직임을 통해 배우고 표현하는 능력이 뛰어납니다.",
    careers: ["운동선수", "무용가", "배우", "물리치료사", "외과의사"],
    growthTip: "운동이나 손으로 직접 만드는 활동 등, 몸을 움직이는 경험을 늘려보세요.",
    questions: [
      "몸을 움직이는 활동이나 운동을 좋아한다.",
      "손으로 무언가를 만들거나 조립하는 것을 잘한다.",
      "춤이나 운동 동작을 빠르게 따라 할 수 있다.",
      "가만히 앉아 있기보다 몸을 움직이며 생각하는 것이 편하다.",
      "균형감각과 순발력이 좋은 편이다.",
      "체육 활동이나 신체를 활용한 취미가 많다.",
    ],
  },
  {
    id: "music",
    name: "음악지능",
    emoji: "🎵",
    color: "var(--c-music)",
    intro: "소리, 리듬, 음의 패턴을 민감하게 느끼고 표현하는 능력이에요.",
    trait: "소리와 리듬, 음의 패턴을 민감하게 느끼고 표현하는 능력이 뛰어납니다.",
    careers: ["음악가", "작곡가", "음향 엔지니어", "음악 치료사"],
    growthTip: "악기를 연주하거나 다양한 장르의 음악을 들으며 음악적 감각을 길러보세요.",
    questions: [
      "노래를 부르거나 악기 연주를 즐긴다.",
      "음악을 들으면 리듬이나 멜로디가 쉽게 기억난다.",
      "소리나 음의 높낮이 차이를 잘 구별한다.",
      "노래 가사나 박자를 빠르게 익히는 편이다.",
      "배경 음악 없이 공부하거나 작업하면 허전하다.",
      "새로운 곡을 듣고 흥얼거리거나 리듬을 만들어본다.",
    ],
  },
  {
    id: "inter",
    name: "대인관계지능",
    emoji: "🤝",
    color: "var(--c-inter)",
    intro: "타인의 감정과 의도를 이해하고 관계를 맺는 능력이에요.",
    trait: "타인의 감정과 의도를 잘 파악하고, 관계를 맺고 협력하는 능력이 뛰어납니다.",
    careers: ["교사", "상담가", "영업/마케팅", "인사담당자", "정치인"],
    growthTip: "동아리나 팀 프로젝트처럼 사람들과 함께하는 활동을 늘려보세요.",
    questions: [
      "친구나 동료의 감정을 잘 알아차린다.",
      "다른 사람과 협력해서 일하는 것을 좋아한다.",
      "갈등 상황에서 중재하거나 설득하는 역할을 자주 맡는다.",
      "새로운 사람을 만나고 관계를 맺는 것이 편하다.",
      "상대방의 입장에서 생각하려고 노력한다.",
      "모임이나 팀 활동을 이끄는 것을 좋아한다.",
    ],
  },
  {
    id: "intra",
    name: "자기성찰지능",
    emoji: "🧘",
    color: "var(--c-intra)",
    intro: "자신의 감정과 동기를 깊이 이해하고 성찰하는 능력이에요.",
    trait: "자신의 감정과 동기를 깊이 이해하고, 스스로를 성찰하며 성장시키는 능력이 뛰어납니다.",
    careers: ["심리상담가", "작가", "연구자", "코치", "철학자"],
    growthTip: "일기 쓰기나 명상처럼 스스로를 돌아보는 시간을 가져보세요.",
    questions: [
      "나 자신의 감정과 생각을 자주 돌아본다.",
      "혼자만의 시간을 가지며 생각을 정리하는 것을 좋아한다.",
      "나의 장단점을 비교적 정확히 알고 있다.",
      "목표를 세우고 스스로 점검하는 습관이 있다.",
      "일기를 쓰거나 스스로에게 질문하는 것을 즐긴다.",
      "감정적으로 힘들 때 스스로 다스리는 방법을 알고 있다.",
    ],
  },
  {
    id: "nature",
    name: "자연친화지능",
    emoji: "🌿",
    color: "var(--c-nature)",
    intro: "자연과 생태계를 관찰하고 그 패턴을 이해하는 능력이에요.",
    trait: "자연과 생태계를 관찰하고 그 안의 패턴과 관계를 이해하는 능력이 뛰어납니다.",
    careers: ["생물학자", "수의사", "환경운동가", "농업전문가", "조경가"],
    growthTip: "야외활동이나 동식물을 관찰하는 시간을 늘려보세요.",
    questions: [
      "동물, 식물, 자연현상에 관심이 많다.",
      "날씨나 계절의 변화를 민감하게 느낀다.",
      "여행이나 야외활동에서 자연을 관찰하는 것을 좋아한다.",
      "동식물의 종류나 특징을 구분하는 것을 잘한다.",
      "환경 문제나 생태계에 관심이 있다.",
      "캠핑, 등산, 정원 가꾸기 같은 활동을 즐긴다.",
    ],
  },
];

const LIKERT_LABELS = ["전혀 아니다", "아니다", "보통이다", "그렇다", "매우 그렇다"];

/* 지능 조합(2개)별 시너지 해설. 상위 3개 지능에서 가능한 3가지 쌍을 조합해 문단을 구성한다. */
const SYNERGY = {
  "ling-logic": "언어지능과 논리수학지능이 만나면, 복잡한 개념을 명확한 논리로 풀어내 글이나 말로 설득력 있게 전달하는 힘이 생깁니다.",
  "ling-spatial": "언어지능과 공간지능이 만나면, 이미지와 이야기를 함께 구성하는 능력이 뛰어나 스토리텔링이나 시각 콘텐츠 기획에 강점을 보입니다.",
  "ling-body": "언어지능과 신체운동지능이 만나면, 말과 몸짓을 함께 활용해 생생하고 인상 깊게 전달하는 표현력이 강화됩니다.",
  "ling-music": "언어지능과 음악지능이 만나면, 리듬감 있는 언어 표현과 가사, 이야기를 감각적으로 풀어내는 능력이 돋보입니다.",
  "ling-inter": "언어지능과 대인관계지능이 만나면, 말로 사람의 마음을 움직이고 설득하는 소통 능력이 뛰어납니다.",
  "ling-intra": "언어지능과 자기성찰지능이 만나면, 자신의 내면을 언어로 정교하게 풀어내는 글쓰기나 표현에 강점을 보입니다.",
  "ling-nature": "언어지능과 자연친화지능이 만나면, 자연을 관찰한 내용을 글과 이야기로 풍부하게 전달하는 능력이 돋보입니다.",
  "logic-spatial": "논리수학지능과 공간지능이 만나면, 구조와 패턴을 시각적으로 설계하고 분석하는 능력이 뛰어나 설계나 데이터 시각화에 강점을 보입니다.",
  "logic-body": "논리수학지능과 신체운동지능이 만나면, 동작을 체계적으로 분석하고 전략적으로 훈련하는 능력이 돋보입니다.",
  "logic-music": "논리수학지능과 음악지능이 만나면, 음악의 구조와 패턴을 논리적으로 분석하고 조합하는 능력이 뛰어납니다.",
  "logic-inter": "논리수학지능과 대인관계지능이 만나면, 복잡한 상황을 논리적으로 분석하면서도 사람들을 설득력 있게 조율하는 능력을 갖춥니다.",
  "logic-intra": "논리수학지능과 자기성찰지능이 만나면, 스스로의 생각과 행동을 논리적으로 점검하고 개선해나가는 능력이 뛰어납니다.",
  "logic-nature": "논리수학지능과 자연친화지능이 만나면, 자연현상의 원리와 패턴을 체계적으로 분석하는 능력이 돋보입니다.",
  "spatial-body": "공간지능과 신체운동지능이 만나면, 몸의 움직임과 공간을 함께 인식하는 능력이 뛰어나 운동, 무용, 조형 활동에 강점을 보입니다.",
  "spatial-music": "공간지능과 음악지능이 만나면, 소리와 이미지를 함께 다루는 감각이 뛰어나 영상, 공연 연출 등에 강점을 보입니다.",
  "spatial-inter": "공간지능과 대인관계지능이 만나면, 공간과 분위기를 고려해 사람들과 소통하고 협업 환경을 설계하는 능력이 돋보입니다.",
  "spatial-intra": "공간지능과 자기성찰지능이 만나면, 내면의 생각을 이미지나 상징으로 표현하는 창의적 감각이 뛰어납니다.",
  "spatial-nature": "공간지능과 자연친화지능이 만나면, 자연의 형태와 구조를 시각적으로 포착하고 표현하는 능력이 돋보입니다.",
  "body-music": "신체운동지능과 음악지능이 만나면, 리듬에 맞춰 몸을 움직이는 능력이 뛰어나 무용이나 공연 예술에 강점을 보입니다.",
  "body-inter": "신체운동지능과 대인관계지능이 만나면, 몸으로 소통하며 팀과 협력하는 능력이 뛰어나 팀 스포츠나 협업 활동에 강점을 보입니다.",
  "body-intra": "신체운동지능과 자기성찰지능이 만나면, 몸의 감각을 통해 자신의 상태를 민감하게 알아차리고 조절하는 능력이 돋보입니다.",
  "body-nature": "신체운동지능과 자연친화지능이 만나면, 자연 속에서 몸을 활발히 움직이며 배우는 능력이 뛰어납니다.",
  "music-inter": "음악지능과 대인관계지능이 만나면, 음악을 매개로 사람들과 감정을 나누고 분위기를 이끄는 능력이 돋보입니다.",
  "music-intra": "음악지능과 자기성찰지능이 만나면, 음악을 통해 자신의 감정을 깊이 이해하고 표현하는 능력이 뛰어납니다.",
  "music-nature": "음악지능과 자연친화지능이 만나면, 자연의 소리와 리듬을 민감하게 느끼고 창작에 활용하는 능력이 돋보입니다.",
  "inter-intra": "대인관계지능과 자기성찰지능이 만나면, 자신과 타인을 모두 깊이 이해하는 균형 잡힌 통찰력으로 관계를 이끄는 능력이 뛰어납니다.",
  "inter-nature": "대인관계지능과 자연친화지능이 만나면, 사람과 자연 모두를 세심하게 돌보고 연결하는 능력이 돋보입니다.",
  "intra-nature": "자기성찰지능과 자연친화지능이 만나면, 자연 속에서 스스로를 성찰하고 안정감을 찾는 능력이 뛰어납니다.",
};

function getSynergy(idA, idB) {
  const order = INTELLIGENCES.map((i) => i.id);
  const [a, b] = order.indexOf(idA) < order.indexOf(idB) ? [idA, idB] : [idB, idA];
  return SYNERGY[`${a}-${b}`];
}

/* ==========================================================================
   상태
   ========================================================================== */

const state = {
  step: 0, // 0 = intro, 1..8 = quiz sections, 9 = results
  answers: {}, // { [intelligenceId]: [num|null, ...] }
};

INTELLIGENCES.forEach((intel) => {
  state.answers[intel.id] = new Array(intel.questions.length).fill(null);
});

/* ==========================================================================
   DOM refs
   ========================================================================== */

const screenIntro = document.getElementById("screen-intro");
const screenQuiz = document.getElementById("screen-quiz");
const screenResults = document.getElementById("screen-results");

const btnStart = document.getElementById("btnStart");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
const btnRestart = document.getElementById("btnRestart");

const quizStepLabel = document.getElementById("quizStepLabel");
const quizCatLabel = document.getElementById("quizCatLabel");
const progressFill = document.getElementById("progressFill");
const quizCatIntro = document.getElementById("quizCatIntro");
const questionList = document.getElementById("questionList");
const quizHint = document.getElementById("quizHint");

btnStart.addEventListener("click", () => goToStep(1));
btnPrev.addEventListener("click", () => goToStep(state.step - 1));
btnNext.addEventListener("click", onNext);
btnRestart.addEventListener("click", restart);

/* ==========================================================================
   화면 전환 & 렌더링
   ========================================================================== */

function goToStep(step) {
  state.step = step;
  screenIntro.hidden = step !== 0;
  screenQuiz.hidden = step === 0 || step > INTELLIGENCES.length;
  screenResults.hidden = step <= INTELLIGENCES.length;

  if (step >= 1 && step <= INTELLIGENCES.length) {
    renderQuizStep(step);
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  } else if (step > INTELLIGENCES.length) {
    renderResults();
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }
}

function renderQuizStep(step) {
  const intel = INTELLIGENCES[step - 1];
  quizStepLabel.textContent = `${step} / ${INTELLIGENCES.length}`;
  quizCatLabel.textContent = intel.name;
  progressFill.style.width = `${((step - 1) / INTELLIGENCES.length) * 100 + (100 / INTELLIGENCES.length) * 0.15}%`;

  quizCatIntro.innerHTML = `
    <span class="emoji">${intel.emoji}</span>
    <span>${intel.intro}</span>
  `;

  questionList.innerHTML = intel.questions
    .map((q, qi) => {
      const current = state.answers[intel.id][qi];
      const options = LIKERT_LABELS.map((label, i) => {
        const val = i + 1;
        const checked = current === val ? "checked" : "";
        return `
          <label class="likert-option">
            <input type="radio" name="${intel.id}-${qi}" value="${val}" ${checked}>
            <span class="likert-dot">${val}</span>
          </label>
        `;
      }).join("");

      return `
        <div class="question-card">
          <p class="question-text">${qi + 1}. ${q}</p>
          <div class="likert">${options}</div>
          <div class="likert-ends"><span>전혀 아니다</span><span>매우 그렇다</span></div>
        </div>
      `;
    })
    .join("");

  questionList.querySelectorAll("input[type=radio]").forEach((input) => {
    input.addEventListener("change", (e) => {
      const [, qi] = e.target.name.split("-");
      state.answers[intel.id][Number(qi)] = Number(e.target.value);
      quizHint.textContent = "";
    });
  });

  btnPrev.style.visibility = step === 1 ? "hidden" : "visible";
  btnNext.textContent = step === INTELLIGENCES.length ? "결과 보기" : "다음";
  quizHint.textContent = "";
}

function onNext() {
  const intel = INTELLIGENCES[state.step - 1];
  const unanswered = state.answers[intel.id].some((v) => v === null);
  if (unanswered) {
    quizHint.textContent = "모든 문항에 응답해주세요.";
    return;
  }
  goToStep(state.step + 1);
}

function restart() {
  state.step = 0;
  INTELLIGENCES.forEach((intel) => {
    state.answers[intel.id] = new Array(intel.questions.length).fill(null);
  });
  goToStep(0);
}

/* ==========================================================================
   결과 계산 & 렌더링
   ========================================================================== */

function computeScores() {
  return INTELLIGENCES.map((intel) => {
    const answers = state.answers[intel.id];
    const avg = answers.reduce((a, b) => a + b, 0) / answers.length;
    return { ...intel, score: avg };
  }).sort((a, b) => b.score - a.score);
}

function renderResults() {
  const ranked = computeScores();
  const strengths = ranked.slice(0, 3);
  const weaknesses = ranked.slice(-3).reverse();

  renderChart(ranked);
  renderProfileGrid(document.getElementById("strengthGrid"), strengths, true);
  renderProfileGrid(document.getElementById("weaknessGrid"), weaknesses, false);
  renderCombo(strengths);
}

function renderChart(ranked) {
  const chart = document.getElementById("chart");
  const max = 5;
  chart.innerHTML = ranked
    .map((intel) => {
      const pct = (intel.score / max) * 100;
      return `
        <div class="chart-row">
          <div class="chart-row-label"><span>${intel.emoji}</span><span>${intel.name}</span></div>
          <div class="chart-track">
            <div class="chart-fill" style="width:${pct}%; background:${intel.color};"></div>
          </div>
          <div class="chart-row-value">${intel.score.toFixed(1)}</div>
        </div>
      `;
    })
    .join("");
}

function renderProfileGrid(container, list, isStrength) {
  container.innerHTML = list
    .map((intel, i) => {
      const rankColor = isStrength ? intel.color : "var(--text-muted)";
      const detail = isStrength
        ? `<p class="profile-trait">${intel.trait}</p>
           <p class="profile-careers"><b>추천 진로</b> · ${intel.careers.join(", ")}</p>`
        : `<p class="profile-trait">${intel.growthTip}</p>`;
      return `
        <div class="profile-item">
          <div class="profile-name">
            <span class="profile-rank" style="background:${rankColor}">${i + 1}</span>
            <span>${intel.emoji} ${intel.name}</span>
            <span class="profile-score">${intel.score.toFixed(1)} / 5</span>
          </div>
          ${detail}
        </div>
      `;
    })
    .join("");
}

function renderCombo(strengths) {
  const [a, b, c] = strengths;
  const pairs = [
    [a, b],
    [a, c],
    [b, c],
  ];

  const careerSet = [];
  strengths.forEach((intel) => {
    intel.careers.forEach((career) => {
      if (!careerSet.includes(career)) careerSet.push(career);
    });
  });

  const comboEl = document.getElementById("comboExplain");
  comboEl.innerHTML = `
    <p class="combo-names">
      당신의 대표 강점 지능은 <b>${a.emoji} ${a.name}</b>, <b>${b.emoji} ${b.name}</b>, <b>${c.emoji} ${c.name}</b>입니다.
      이 세 지능이 결합될 때 다음과 같은 특징이 나타나요.
    </p>
    <ul class="combo-list">
      ${pairs.map(([x, y]) => `<li>${getSynergy(x.id, y.id)}</li>`).join("")}
    </ul>
    <p class="combo-careers"><b>이 조합이 특히 빛나는 분야</b> · ${careerSet.slice(0, 7).join(", ")}</p>
  `;
}
