const DATASET_URL = "./data/naviom_dataset.json";
const DATASET_MANIFEST_URL = "./data/naviom_dataset_manifest.json";
const ADMISSION_URL = "./data/admission_docs_index.json";
const WORKNET_URL = "./data/worknet_taxonomy.json";
const LESSON_SAMPLE_URL = "./data/lesson_ppt_sample.json";
const DEFAULT_PERFORMANCE_SOURCE = "[양식] 통합사회 수행평가 독후감.pdf";
const DEFAULT_PERFORMANCE_TEXT =
  "통합사회 독후록 (5/31 일요일까지, 분량 2700~3300자 사이) 도서명(저자), 학번/이름, 나의 감상. 선정 동기: 왜 이 책인가? 500자 내외. 단순히 유명해서가 아니라 나의 구체적인 경험을 녹여내세요. 줄거리 및 요약: 핵심만 700자 내외. 내가 설정한 문제의식과 관련된 부분 위주로 요약하세요. 생각 및 성찰: 내 생각 1300자 내외. 수업 시간에 배운 교과 개념(문화 상대주의, 통합적 관점, 철학 등)을 쓰면 좋습니다. 추가 탐구 과제: 호기심의 확장 200자 내외. 이 책을 읽고 나니 무엇이 궁금해졌고 나중에 무엇을 조사하고 싶은지 연결 고리를 만드세요.";

const uiLangLabel = {
  ko: "한국어",
  vi: "Tiếng Việt",
  zh: "中文",
  en: "English",
  ru: "Русский",
  ja: "日本語",
};

const uiText = {
  ko: {
    jobTitle: "관심 있는 일을 누르며 취업 길을 찾아봐요",
    jobSubtitle: "큰 분야부터 하나씩 내려가면 직업 설명, 필요한 자격, 채용정보 링크를 같이 볼 수 있어요.",
    majorGroup: "대분류",
    middleClass: "중분류",
    jobDetail: "소분류 직업",
    jobDescription: "직업 설명",
    qualifications: "관련 자격",
    jobSearch: "채용 자리 찾기",
    work24Search: "고용24 채용검색 바로가기",
    work24Main: "고용24 메인",
  },
  vi: {
    jobTitle: "Nhấn nhóm lớn, nhóm giữa, nghề chi tiết để tìm lộ trình việc làm",
    jobSubtitle: "Đi theo phân loại để xem mô tả nghề, chứng chỉ liên quan và liên kết tìm việc.",
    majorGroup: "Nhóm lớn",
    middleClass: "Nhóm giữa",
    jobDetail: "Nghề chi tiết",
    jobDescription: "Mô tả nghề",
    qualifications: "Chứng chỉ liên quan",
    jobSearch: "Tìm việc",
    work24Search: "Tìm việc trên Work24",
    work24Main: "Trang chính Work24",
  },
  ru: {
    jobTitle: "Выберите крупную, среднюю и детальную категорию, чтобы найти путь к работе",
    jobSubtitle: "По классификации можно увидеть описание профессии, квалификации и ссылки на вакансии.",
    majorGroup: "Крупная категория",
    middleClass: "Средняя категория",
    jobDetail: "Профессия",
    jobDescription: "Описание профессии",
    qualifications: "Квалификации",
    jobSearch: "Поиск вакансий",
    work24Search: "Поиск вакансий Work24",
    work24Main: "Главная Work24",
  },
  en: {
    jobTitle: "Choose job categories to find an employment pathway",
    jobSubtitle: "Follow the category tree to see job descriptions, qualifications, and job-search links.",
    majorGroup: "Major group",
    middleClass: "Middle group",
    jobDetail: "Job title",
    jobDescription: "Job description",
    qualifications: "Qualifications",
    jobSearch: "Find jobs",
    work24Search: "Search Work24 jobs",
    work24Main: "Work24 home",
  },
  zh: {
    jobTitle: "点击大类、中类和职业，寻找就业路径",
    jobSubtitle: "按照分类查看职业说明、相关资格证和招聘信息链接。",
    majorGroup: "大类",
    middleClass: "中类",
    jobDetail: "职业",
    jobDescription: "职业说明",
    qualifications: "相关资格",
    jobSearch: "找工作",
    work24Search: "Work24 招聘搜索",
    work24Main: "Work24 首页",
  },
  ja: {
    jobTitle: "大分類・中分類・職業をクリックして就職経路を探します",
    jobSubtitle: "分類に沿って職業説明、関連資格、求人検索リンクを確認できます。",
    majorGroup: "大分類",
    middleClass: "中分類",
    jobDetail: "職業",
    jobDescription: "職業説明",
    qualifications: "関連資格",
    jobSearch: "求人を探す",
    work24Search: "Work24求人検索",
    work24Main: "Work24メイン",
  },
};

const lessonTerms = {
  performance: {
    label: "수행평가",
    easyKo: "시험만 보는 것이 아니라, 조사하고 쓰고 발표하는 과정을 함께 평가하는 방식입니다.",
    actions: ["평가 기준 3가지를 먼저 쓰기", "보고서 기본 틀 만들기", "근거 자료 2개를 확인하기"],
  },
  diversity: {
    label: "생물 다양성",
    easyKo: "한 지역에 여러 종류의 생물이 함께 살아가는 정도를 뜻합니다.",
    actions: ["관찰 대상 생물 5개 기록", "변화 원인 1개 가설 세우기", "사진 또는 표로 정리하기"],
  },
  hypothesis: {
    label: "가설",
    easyKo: "자료로 확인할 수 있는 예측 문장입니다.",
    actions: ["'만약 A라면 B일 것이다' 문장 만들기", "측정할 항목 정하기", "반례 가능성 적기"],
  },
  control: {
    label: "변인 통제",
    easyKo: "결과 비교가 가능하도록 다른 조건을 같게 맞추는 과정입니다.",
    actions: ["바꿀 조건 1개만 선택", "나머지 조건 고정", "측정 방법 동일하게 유지"],
  },
  standard: {
    label: "성취기준",
    easyKo: "수업 뒤 학생이 할 수 있어야 하는 목표를 말합니다.",
    actions: ["기준 문장에서 핵심 동사 찾기", "평가에 필요한 결과물 적기", "모르는 동사는 질문하기"],
  },
  admission: {
    label: "외국인 특별전형",
    easyKo: "대학이 외국인 또는 재외국민 지원자를 위해 따로 운영하는 전형입니다.",
    actions: ["지원자격 항목 확인", "서류 목록 만들기", "희망 대학 요강 비교"],
  },
  documents: {
    label: "전형자료",
    easyKo: "지원할 때 제출해야 하는 성적, 활동, 증빙 자료를 뜻합니다.",
    actions: ["필수/선택 서류 구분", "발급기관 체크", "마감일 일정 등록"],
  },
  nursing: {
    label: "간호학과",
    easyKo: "건강 회복과 돌봄을 배우는 학과로 과학, 보건, 의사소통 역량이 중요합니다.",
    actions: ["관련 과목 확인", "면허 및 실습 정보 정리", "유사 학과와 비교"],
  },
  contract: {
    label: "근로계약서",
    easyKo: "임금, 근로시간, 업무, 휴식 등 일의 조건을 적는 문서입니다.",
    actions: ["임금과 지급일 확인", "근무시간 확인", "모르는 항목 질문 후 서명"],
  },
  qualification: {
    label: "국가기술자격",
    easyKo: "국가 시험으로 기술 능력을 인정받는 자격입니다.",
    actions: ["필기·실기 구분", "시험 일정 확인", "준비 과목 체크"],
  },
  visa: {
    label: "체류자격",
    easyKo: "한국 체류와 진학·취업 선택에 연결되는 법적 자격 정보입니다.",
    actions: ["현재 자격 확인", "학교 상담 요청", "지원 전 공식 조건 확인"],
  },
};

let dataset;
let admissionIndex;
let worknetData;

let state = {
  tab: "classroom",
  language: "ko",
  region: "",
  activeLessonTerm: "culture",
  lessonSource: "",
  lessonSlides: [],
  supportSource: "",
  supportText: "",
  performanceSource: "",
  performanceText: "",
  selectedSlideIndex: 0,
  currentLessonTerms: [],
  collegeMode: "university",
  selectedMajorRegion: "",
  selectedUniversity: null,
  selectedGuide: null,
  collegeQuery: "",
  selectedMajorName: "",
  selectedMajorCode: null,
  selectedMidCode: null,
  selectedJobName: null,
  saved: { lessons: [], colleges: [], jobs: [], performances: [], questions: [], metrics: { questions: 0, quizzes: 0, contracts: 0, performanceUploads: 0 } },
};

const translationCache = new Map();
const $ = (id) => document.getElementById(id);

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function normalizeSchool(name) {
  return String(name || "")
    .replace(/\(.*?\)/g, "")
    .replace(/대학교|대학/g, "")
    .replace(/[^0-9A-Za-z가-힣]/g, "");
}

function compactText(text = "", max = 180) {
  return String(text).replace(/\s+/g, " ").trim().slice(0, max);
}

function cleanAdmissionText(text = "") {
  return String(text)
    .replace(/[\u0000-\u001f]+/g, " ")
    .replace(/[【】\[\]{}]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractForeignerAdmissionText(text = "") {
  const clean = cleanAdmissionText(text);
  const keywords = [
    "외국인", "재외국민", "국적", "부모", "체류", "해외", "수학",
    "외국", "비자", "여권", "출입국", "어학", "한국어능력", "TOPIK",
    "지원자격", "제출서류", "모집인원", "전형방법", "서류평가", "면접"
  ];
  const chunks = clean
    .split(/(?=\d+\.|[가-힣]\.|[ⅠⅡⅢⅣⅤ]|[①-⑳]|\s[-•])/g)
    .map((part) => part.trim())
    .filter(Boolean);
  const relevant = chunks.filter((part) => keywords.some((keyword) => part.includes(keyword)));
  const source = relevant.length ? relevant.join(" ") : clean;
  return compactText(source, 1600);
}

function pickAdmissionSnippet(text, keywords, max = 150) {
  const clean = cleanAdmissionText(text);
  const index = keywords
    .map((keyword) => clean.indexOf(keyword))
    .filter((value) => value >= 0)
    .sort((a, b) => a - b)[0];
  if (index === undefined) return "";
  const start = Math.max(0, index - 18);
  return clean.slice(start, start + max).replace(/\s+/g, " ").trim();
}

function buildAdmissionBullets(text = "") {
  const clean = cleanAdmissionText(text);
  const hasQuota = /정원외|모집인원|이내/.test(clean);
  const hasMethod = /서류평가|면접|실기|수능|학생부|전형방법/.test(clean);
  const hasDocs = /제출서류|서류|증명|여권|성적|졸업/.test(clean);
  const hasSchedule = /원서접수|접수|마감|등록|합격|발표|일정/.test(clean);
  return [
    "• 지원자격: 외국인·재외국민 전형은 학생 국적, 부모 국적, 해외 수학 기간, 체류자격 기준을 먼저 확인해요.",
    hasQuota
      ? "• 모집단위·모집인원: ‘재외국민과 외국인’ 정원외 모집 여부와 학과별 인원을 원문 표에서 확인해요."
      : "• 모집단위·모집인원: 외국인 전형 모집 학과와 인원은 대학별 원문 표에서 확인해요.",
    hasDocs
      ? "• 제출서류: 여권, 외국인등록, 가족관계, 성적·졸업 증명, 한국어능력 관련 서류가 필요한지 확인해요."
      : "• 제출서류: 원문 요강의 외국인·재외국민 제출서류 표를 먼저 확인해요.",
    hasMethod
      ? "• 전형방법: 서류평가, 면접, 실기, 수능·학생부 반영 여부가 있는지 확인해요."
      : "• 전형방법: 외국인 전형에서 무엇을 평가하는지 원문 요강에서 확인해요.",
    hasSchedule
      ? "• 일정: 원서접수, 서류제출, 합격자 발표, 등록 마감일을 따로 적어두어요."
      : "• 일정: 원서접수와 서류제출 마감일은 반드시 따로 확인해요.",
    "• 지금 할 일: 원문 파일을 열어 위 항목의 표를 확인한 뒤 담임·진로 선생님 또는 입학처와 함께 최종 확인해요.",
  ].join("\n");
}

function cleanLessonText(text = "") {
  return String(text)
    .replace(/^또 나는.*?증명합니다\s*/u, "")
    .replace(/\s+/g, " ")
    .trim();
}

function joinKoreanList(values) {
  const items = values.filter(Boolean);
  if (items.length <= 1) return items[0] || "";
  return `${items.slice(0, -1).join(", ")} 및 ${items[items.length - 1]}`;
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function normalizeRegion(value = "") {
  return String(value)
    .replace(/특별시|광역시|특별자치시|특별자치도|자치도|도/g, "")
    .replace("전라북", "전북")
    .replace("전라남", "전남")
    .replace("경상북", "경북")
    .replace("경상남", "경남")
    .replace("충청북", "충북")
    .replace("충청남", "충남")
    .replace("강원특별", "강원")
    .trim();
}

function getCurrentSlide() {
  return state.lessonSlides[state.selectedSlideIndex] || null;
}

function buildLessonAiPlan(slideText = "", terms = []) {
  const main = terms[0]?.label || "오늘 개념";
  const sub = terms[1]?.label || "예시";
  return [
    {
      title: "AI가 만든 질문",
      body: `${main}이 무엇인지 내 말로 설명해볼까요? 설명이 어렵다면 ${sub}와 비교해서 말해봐요.`,
    },
    {
      title: "학습 경로 추천",
      body: `${main}의 뜻을 확인한 뒤, 수업 자료에서 같은 개념이 쓰인 문장과 사례를 연결해 봐요.`,
    },
    {
      title: "형성평가",
      body: `${main}와 연결되는 설명을 고르고, 왜 그렇게 생각했는지 한 문장으로 적어봐요.`,
    },
  ];
}

function buildQuizItems(terms = [], supportPreview = "") {
  const mainTerm = terms[0] || { label: "문화권", example: "언어, 종교, 음식, 의복, 생활양식" };
  const subTerm = terms[1] || { label: "종교", example: "크리스트교, 이슬람교, 불교" };
  const main = mainTerm.label;
  const sub = subTerm.label;
  const example = mainTerm.example || "언어, 종교, 음식, 의복, 생활양식";
  const evidenceOption = supportPreview
    ? "현재 슬라이드와 추가 자료에서 같은 개념이 쓰인 문장을 함께 근거로 표시한다."
    : `${example}처럼 생활 모습이 넓은 지역에서 비슷하게 나타나는 사례를 근거로 든다.`;
  return [
    {
      question: `통합사회에서 '${main}'을 설명한 내용으로 가장 알맞은 것은 무엇인가요?`,
      answer: 1,
      options: [
        `${main}은 한 나라의 행정구역을 뜻하며 자연환경과는 관련이 없습니다.`,
        `${main}은 언어·종교·생활양식처럼 비슷한 문화 요소가 넓은 지역에 나타나는 범위입니다.`,
        `${main}은 개인의 취미나 성격처럼 사람마다 다르게 나타나는 특징만 말합니다.`,
      ],
    },
    {
      question: `'${main}'을 구분할 때 함께 살펴볼 교과 개념 조합으로 가장 적절한 것은 무엇인가요?`,
      answer: 0,
      options: [
        `자연환경, ${sub}, 언어, 생활양식, 상호작용`,
        "시험 점수, 좌석 위치, 출석번호, 학급 번호",
        "가격, 광고 문구, 브랜드 로고, 판매량",
      ],
    },
    {
      question: `자료에서 '${main}'을 설명하는 근거를 찾을 때 가장 좋은 방식은 무엇인가요?`,
      answer: 2,
      options: [
        "번역문만 읽고 원문 속 핵심어는 확인하지 않는다.",
        "어려운 말은 모두 외우고 사례는 따로 보지 않는다.",
        evidenceOption,
      ],
    },
  ];
}

function buildAdmissionAiPlan() {
  const school = state.selectedUniversity?.school || "고른 대학";
  const major = state.selectedMajorName || state.selectedUniversity?.majors?.[0] || "관심 학과";
  return [
    `• AI 질문: ${school}에서 ${major}에 지원하려면 가장 먼저 확인해야 할 자격은 무엇일까요?`,
    "• 준비 추천: 지원자격 → 제출서류 → 전형방법 → 일정 순서로 체크해요.",
    "• 확인 문제: 외국인 전형에서 대학마다 달라질 수 있는 기준 2가지를 골라봐요. 예: 국적, 체류자격, 해외 수학 기간, 제출서류.",
  ].join("\n");
}

function buildJobAiPlan(jobName = "관심 직업") {
  return [
    `• AI 질문: ${jobName} 일을 하려면 어떤 능력과 자격이 먼저 필요할까요?`,
    "• 학습 추천: 직업 설명을 읽고 관련 자격 1개, 채용 키워드 1개, 근로계약 질문 1개를 저장해요.",
    "• 확인 문제: 근로계약서에서 임금, 근로시간, 업무, 휴게시간 중 빠지면 위험한 항목을 골라봐요.",
  ].join("\n");
}

function getTermLibrary() {
  return [
    ["cultureArea", "문화권", "문화적 특성이 비슷하게 나타나는 넓은 지역입니다. 언어, 종교, 음식, 의복, 생활 방식이 함께 나타납니다.", "유럽 문화권, 이슬람 문화권"],
    ["lifestyle", "생활양식", "사람들이 먹고 입고 살고 일하고 믿는 방식처럼 일상에서 반복되는 삶의 모습입니다.", "옷, 음식, 집, 종교, 언어"],
    ["interaction", "상호작용", "사람이나 사회, 환경이 서로 영향을 주고받는 과정입니다.", "기후가 의복에 영향을 주고, 사람의 생활이 경관을 바꾸는 일"],
    ["boundary", "경계", "서로 다른 지역이나 문화권이 만나는 선 또는 지대입니다.", "유럽 문화권과 아시아 문화권이 만나는 튀르키예"],
    ["transitionZone", "점이지대", "두 지역의 특성이 함께 나타나는 중간 지대입니다.", "동서양 문화가 함께 나타나는 지역"],
    ["geographicRange", "지리적 범위", "어떤 현상이 나타나는 공간적 넓이나 구역입니다.", "문화권이 퍼져 있는 지역"],
    ["trait", "특성", "다른 것과 구별되는 고유한 특징입니다.", "종교, 언어, 음식, 건축 양식"],
    ["similar", "유사", "완전히 같지는 않지만 서로 비슷하다는 뜻입니다.", "비슷한 종교 경관이 여러 나라에 나타남"],
    ["naturalEnv", "자연환경", "기후, 지형, 위치, 토양, 물처럼 인간이 만들지 않은 환경 조건입니다.", "건조 지역의 의복과 주거"],
    ["humanEnv", "인문환경", "종교, 언어, 산업, 교통, 도시처럼 인간 활동으로 만들어진 환경입니다.", "크리스트교 문화 경관"],
    ["religion", "종교", "사람들이 삶의 의미와 신념을 공유하며 의례와 생활 방식을 만드는 문화 요소입니다.", "크리스트교, 이슬람교, 불교"],
    ["mission", "포교 대상", "종교를 전하거나 믿음을 함께 나누려고 하는 사람이나 집단입니다.", "모든 민족, 특정 민족"],
    ["universalReligion", "보편 종교", "민족이나 국가를 넘어 누구에게나 적용되는 가르침을 강조하는 종교입니다.", "크리스트교, 이슬람교, 불교"],
    ["ethnicReligion", "민족 종교", "특정 민족이나 국가의 역사와 생활 방식에 깊게 연결된 종교입니다.", "힌두교, 유대교"],
    ["christianity", "크리스트교", "예수를 구원자로 믿는 종교이며 가톨릭교, 개신교, 동방 정교 등으로 나뉩니다.", "성당, 교회, 십자가, 종탑"],
    ["sect", "종파", "같은 종교 안에서 교리나 예배 방식이 달라 나뉜 갈래입니다.", "가톨릭교, 개신교, 동방 정교"],
    ["believer", "신자수", "어떤 종교를 믿는 사람의 수입니다.", "세계에서 신자수가 많은 종교"],
    ["spire", "첨탑", "성당이나 교회 지붕 위로 뾰족하게 솟은 탑입니다.", "고딕 성당의 높은 첨탑"],
    ["catholic", "가톨릭교", "교황과 바티칸을 중심으로 한 크리스트교 종파입니다.", "바티칸 시국, 대성당"],
    ["protestant", "개신교", "종교 개혁 이후 형성된 크리스트교 종파입니다.", "북서부 유럽과 북아메리카"],
    ["orthodox", "동방 정교", "동유럽과 러시아 등에서 강하게 나타나는 크리스트교 종파입니다.", "러시아 정교회 성당"],
    ["sacredPlace", "성지", "종교적으로 특별한 의미를 지닌 장소입니다.", "예루살렘, 베들레헴, 바티칸"],
    ["culturalLandscape", "문화 경관", "종교, 산업, 생활 방식이 땅 위의 건축물과 공간 형태로 드러난 모습입니다.", "성당, 사원, 전통 마을"],
    ["culture", "문화", "사람들이 함께 살아가며 만든 생활 방식, 가치, 규범, 상징을 말합니다.", "음식, 의복, 종교, 언어"],
    ["change", "문화 변동", "새로운 문화 요소가 생기거나 다른 문화와 만나 사회의 문화가 달라지는 현상입니다.", "전파, 발명, 발견"],
  ];
}

function inferLessonTerms(text) {
  const matched = getTermLibrary()
    .filter(([, label]) => text.includes(label.replace(" ", "")) || text.includes(label))
    .map(([key, label, easyKo, example]) => ({ key, label, easyKo, example }));
  if (matched.length) return matched;
  return [
    { key: "summary", label: "핵심 내용", easyKo: "이 슬라이드에서 가장 중요한 문장을 먼저 찾고, 그 문장을 쉬운 말로 바꾸어 이해합니다." },
    { key: "question", label: "확인 질문", easyKo: "수업 내용을 이해했는지 스스로 확인하기 위한 질문입니다." },
  ];
}

function getLessonSummary(text) {
  const terms = inferLessonTerms(text);
  const labels = joinKoreanList(terms.map((term) => term.label));
  const core = compactText(text, 95);
  return `슬라이드 핵심은 "${core}"입니다. 연결되는 개념은 ${labels || "수업 핵심 개념"}입니다. 먼저 어려운 개념을 쉬운 말로 바꾸고, 예시와 비교해 보면 이해하기 쉽습니다.`;
}

function parseTranslatePayload(payload) {
  try {
    if (!Array.isArray(payload) || !Array.isArray(payload[0])) return "";
    return payload[0]
      .map((part) => (Array.isArray(part) ? part[0] : ""))
      .join("")
      .trim();
  } catch {
    return "";
  }
}

function localTranslateFallback(text, targetLang) {
  if (targetLang !== "ru") return text;
  const phrases = [
    ["사람들이 함께 살아가며 만든 생활 방식, 가치, 규범, 상징을 말합니다.", "Это образ жизни, ценности, нормы и символы, созданные людьми в совместной жизни."],
    ["이 슬라이드는 문화, 문화 변동을 다룹니다.", "Этот слайд объясняет культуру и культурные изменения."],
    ["먼저 어려운 개념을 쉬운 말로 바꾸고, 예시와 비교해 보면 이해하기 쉽습니다.", "Сначала замените сложные понятия простыми словами и сравните их с примерами."],
    ["문화의 뜻을 한 문장으로 말하기", "Объяснить значение культуры одним предложением"],
    ["슬라이드 속 예시를 하나 고르기", "Выбрать один пример из слайда"],
    ["비슷하지만 다른 개념과 비교하기", "Сравнить с похожим, но другим понятием"],
    ["'문화' 개념을 쉬운 말로 설명한 문장을 고르세요.", "Выберите предложение, которое простыми словами объясняет понятие «культура»."],
    ["발명, 발견, 전파 중 이 슬라이드 사례와 가장 가까운 문화 변동 원인을 고르세요.", "Выберите причину культурных изменений: изобретение, открытие или распространение."],
    ["문화 병존, 문화 동화, 문화 융합을 각각 구분할 수 있는 생활 속 예시를 하나씩 쓰세요.", "Напишите по одному примеру из жизни для культурного сосуществования, ассимиляции и слияния."],
  ];
  let result = text;
  for (const [ko, ru] of phrases) result = result.replaceAll(ko, ru);
  const words = [
    ["문화 변동", "культурные изменения"],
    ["문화 다양성", "культурное разнообразие"],
    ["문화 병존", "культурное сосуществование"],
    ["문화 동화", "культурная ассимиляция"],
    ["문화 융합", "культурное слияние"],
    ["문화", "культура"],
    ["발명", "изобретение"],
    ["발견", "открытие"],
    ["전파", "распространение"],
    ["대학", "университет"],
    ["학과", "специальность"],
    ["직업", "профессия"],
    ["자격", "квалификация"],
    ["채용", "вакансия"],
  ];
  for (const [ko, ru] of words) result = result.replaceAll(ko, ru);
  return result;
}

async function extractPptxSlides(file) {
  if (!window.JSZip) throw new Error("PPTX 파서가 아직 로드되지 않았습니다.");
  const zip = await window.JSZip.loadAsync(file);
  const names = Object.keys(zip.files)
    .filter((name) => /^ppt\/slides\/slide\d+\.xml$/.test(name))
    .sort((a, b) => Number(a.match(/slide(\d+)\.xml/)?.[1] || 0) - Number(b.match(/slide(\d+)\.xml/)?.[1] || 0));
  const parser = new DOMParser();
  const slides = [];
  for (const [index, name] of names.entries()) {
    const xml = await zip.files[name].async("text");
    const doc = parser.parseFromString(xml, "application/xml");
    const text = [...doc.getElementsByTagName("a:t")]
      .map((node) => node.textContent.trim())
      .filter(Boolean)
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
    if (text) slides.push({ slide: index + 1, text });
  }
  return slides;
}

async function extractDocxText(file) {
  if (!window.JSZip) throw new Error("DOCX 파서가 아직 로드되지 않았습니다.");
  const zip = await window.JSZip.loadAsync(file);
  const xml = await zip.files["word/document.xml"]?.async("text");
  if (!xml) return "";
  const doc = new DOMParser().parseFromString(xml, "application/xml");
  return [...doc.getElementsByTagName("w:t")]
    .map((node) => node.textContent.trim())
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

async function extractPdfText(file) {
  const pdfjs = await import("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.min.mjs");
  pdfjs.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs";
  const buffer = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({ data: buffer }).promise;
  const pages = [];
  for (let pageNo = 1; pageNo <= pdf.numPages; pageNo += 1) {
    const page = await pdf.getPage(pageNo);
    const content = await page.getTextContent();
    const text = content.items.map((item) => item.str).join(" ").replace(/\s+/g, " ").trim();
    if (text) pages.push(`${pageNo}쪽: ${text}`);
  }
  return pages.join("\n");
}

async function extractSupportText(file) {
  const name = file.name.toLowerCase();
  if (name.endsWith(".pptx")) {
    const slides = await extractPptxSlides(file);
    return slides.map((slide) => `${slide.slide}번: ${slide.text}`).join("\n");
  }
  if (name.endsWith(".docx")) return extractDocxText(file);
  if (name.endsWith(".pdf")) return extractPdfText(file);
  return file.text();
}

async function translateText(sourceKo, targetLang) {
  const text = String(sourceKo || "").trim();
  if (!text) return "";
  if (targetLang === "ko") return text;
  const cacheKey = `${targetLang}:${text}`;
  if (translationCache.has(cacheKey)) return translationCache.get(cacheKey);

  const url =
    "https://translate.googleapis.com/translate_a/single?client=gtx&sl=ko&dt=t&tl=" +
    encodeURIComponent(targetLang) +
    "&q=" +
    encodeURIComponent(text);
  try {
    const response = await fetch(url);
    const payload = await response.json();
    const translated = parseTranslatePayload(payload) || text;
    const result = targetLang !== "ko" && translated === text ? localTranslateFallback(text, targetLang) : translated;
    translationCache.set(cacheKey, result);
    return result;
  } catch {
    const fallback = localTranslateFallback(text, targetLang);
    translationCache.set(cacheKey, fallback);
    return fallback;
  }
}

async function translateFast(sourceKo, targetLang, timeoutMs = 900) {
  if (targetLang === "ko") return sourceKo;
  const timeout = new Promise((resolve) => setTimeout(() => resolve(sourceKo), timeoutMs));
  return Promise.race([translateText(sourceKo, targetLang), timeout]);
}

function chunkText(text, size = 900) {
  const chunks = [];
  let rest = String(text || "").trim();
  while (rest.length) {
    let cut = Math.min(size, rest.length);
    const near = rest.slice(0, cut).lastIndexOf(". ");
    if (near > 250) cut = near + 1;
    chunks.push(rest.slice(0, cut).trim());
    rest = rest.slice(cut).trim();
  }
  return chunks;
}

function switchTab(tabId) {
  state.tab = tabId;
  document.querySelectorAll(".tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabId);
  });
  $("classroomSection").classList.toggle("active", tabId === "classroom");
  $("performanceSection").classList.toggle("active", tabId === "performance");
  $("collegeSection").classList.toggle("active", tabId === "college");
  $("jobSection").classList.toggle("active", tabId === "job");
  $("sitesSection").classList.toggle("active", tabId === "sites");
  $("dashboardSection").classList.toggle("active", tabId === "dashboard");
  if (tabId === "performance") renderPerformanceCoach();
  if (tabId === "sites") renderRelatedSites();
  if (tabId === "dashboard") renderDashboard();
}

function renderCollegeLinks() {
  $("collegeLinks").innerHTML = [
    ["어디가 대학입학정보", "https://www.adiga.kr/"],
    ["대입상담포털", "https://adiga.kr/PageLinkAll.do?link=/kcue/ast/eip/eis/inf/sjinf/SjinfGnrl.do"],
    ["대학알리미", "https://www.academyinfo.go.kr/"],
    ["한국장학재단 장학금", "https://www.kosaf.go.kr/"],
  ]
    .map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`)
    .join("");
}

const relatedSiteData = [
  {
    name: "다누리 포털·다누리콜센터",
    url: "https://www.liveinkorea.kr/",
    phone: "1577-1366",
    summary: "다문화가족 생활정보, 가족상담, 통번역 상담을 여러 언어로 연결합니다.",
  },
  {
    name: "외국인종합안내센터 Hi Korea",
    url: "https://www.hikorea.go.kr/",
    phone: "1345",
    summary: "체류자격, 비자, 출입국 민원, 외국인 등록 관련 정보를 확인합니다.",
  },
  {
    name: "이주배경청소년지원재단 무지개청소년센터",
    url: "https://www.rainbowyouth.or.kr/",
    phone: "기관 안내 확인",
    summary: "이주배경 청소년 초기 적응, 진로, 상담, 교육 프로그램을 찾습니다.",
  },
  {
    name: "중앙다문화교육센터",
    url: "https://www.nime.or.kr/",
    phone: "기관 안내 확인",
    summary: "학교의 다문화교육 자료, 교원 연수, 정책 자료를 확인합니다.",
  },
  {
    name: "다문화교육포털",
    url: "https://www.edu4mc.or.kr/",
    phone: "기관 안내 확인",
    summary: "이주배경 학생 지원 자료, 다문화 이해교육 콘텐츠, 학교용 자료를 찾습니다.",
  },
  {
    name: "국립국어원 한국어교수학습샘터",
    url: "https://kcenter.korean.go.kr/",
    phone: "기관 안내 확인",
    summary: "한국어 학습 자료와 교사용 한국어 교육 자료를 확인합니다.",
  },
  {
    name: "청소년상담 1388",
    url: "https://www.1388.go.kr/",
    phone: "1388",
    summary: "정서적 어려움, 학교 적응, 위기 상황 상담을 받을 수 있습니다.",
  },
  {
    name: "고용노동부 고객상담센터",
    url: "https://www.moel.go.kr/",
    phone: "1350",
    summary: "근로계약, 임금, 노동조건, 청소년·외국인 근로 상담을 확인합니다.",
  },
  {
    name: "EPS 외국인고용관리시스템",
    url: "https://www.eps.go.kr/index.jsp",
    phone: "기관 안내 확인",
    summary: "외국인 근로자 고용허가, 체류 지원, 표준근로계약 관련 정보를 확인합니다.",
  },
  {
    name: "워크24",
    url: "https://www.work24.go.kr/",
    phone: "1350",
    summary: "채용정보, 직업훈련, 고용서비스를 직업 선택과 연결합니다.",
  },
  {
    name: "어디가 대학입학정보",
    url: "https://www.adiga.kr/",
    phone: "대입상담 안내 확인",
    summary: "대학·학과·전형 정보를 비교하고 대입 상담 자료를 확인합니다.",
  },
  {
    name: "한국장학재단",
    url: "https://www.kosaf.go.kr/",
    phone: "1599-2000",
    summary: "국가장학금, 멘토링 장학, 학자금 지원 정보를 확인합니다.",
  },
];

function renderRelatedSites() {
  const target = $("relatedSites");
  if (!target) return;
  target.innerHTML = relatedSiteData
    .map(
      (site) => `
        <article class="site-card">
          <div>
            <strong>${escapeHtml(site.name)}</strong>
            <p>${escapeHtml(site.summary)}</p>
          </div>
          <div class="site-meta">
            <span>전화: ${escapeHtml(site.phone)}</span>
            <a href="${site.url}" target="_blank" rel="noreferrer">사이트 열기</a>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderLessonDocument() {
  const slide = getCurrentSlide();
  if (!slide) {
    $("lessonDoc").classList.add("empty");
    $("lessonDoc").innerHTML = `
      <span class="doc-chip">수업 자료</span>
      <p><strong>PPTX 파일을 업로드하거나 샘플 수업을 불러오세요.</strong></p>
      <p>업로드한 슬라이드의 텍스트를 추출해 번역, 쉬운 설명, 확인 문제로 바꿉니다.</p>
    `;
    $("slideSelect").innerHTML = "";
    return;
  }

  $("lessonDoc").classList.remove("empty");
  state.currentLessonTerms = inferLessonTerms(slide.text);
  const termButtons = state.currentLessonTerms.map((term) => {
    const active = term.key === state.activeLessonTerm ? " active" : "";
    return `<button class="hot${active}" data-term="${term.key}">${escapeHtml(term.label)}</button>`;
  });
  const highlighted = state.currentLessonTerms.reduce((text, term) => {
    return text.replaceAll(term.label, `<button class="hot${term.key === state.activeLessonTerm ? " active" : ""}" data-term="${term.key}">${escapeHtml(term.label)}</button>`);
  }, escapeHtml(slide.text));
  const imageHtml = slide.image ? `<img class="lesson-image" src="${escapeHtml(slide.image)}" alt="${escapeHtml(slide.slide)}번 자료 페이지" />` : "";

  $("slideSelect").innerHTML = state.lessonSlides
    .map((item, index) => `<option value="${index}" ${index === state.selectedSlideIndex ? "selected" : ""}>${item.slide}번 페이지</option>`)
    .join("");
  $("lessonDoc").innerHTML = `
    <span class="doc-chip">${escapeHtml(state.lessonSource || "업로드 수업")}</span>
    <p><strong>${escapeHtml(slide.slide)}번 페이지</strong></p>
    ${imageHtml}
    <p>${highlighted}</p>
    <div class="mini-btn-row">${termButtons.join("")}</div>
  `;
}

async function renderLessonInsight() {
  const slide = getCurrentSlide();
  const term = state.currentLessonTerms.find((item) => item.key === state.activeLessonTerm) || lessonTerms[state.activeLessonTerm] || lessonTerms.performance;
  const easyKo = slide ? `${term.easyKo} 예: ${term.example || "수업 자료 속 사례"}. ${getLessonSummary(slide.text)}` : term.easyKo;
  $("lessonEasyKo").textContent = easyKo;
  $("lessonLangLabel").textContent = uiLangLabel[state.language] || "번역";
  $("lessonLangText").textContent = "번역 중...";
  const translated = await translateText(easyKo, state.language);
  $("lessonLangText").textContent = translated;

  const actionsKo = slide
    ? [
        `${term.label}의 뜻을 한 문장으로 말하기`,
        "슬라이드 속 예시를 하나 고르기",
        "비슷하지만 다른 개념과 비교하기",
      ]
    : term.actions;
  $("lessonActions").innerHTML = "";
  const dictionaryHtml = state.currentLessonTerms
    .slice(0, 5)
    .map((item) => `<div class="dictionary-card"><strong>${escapeHtml(item.label)}</strong><p>${escapeHtml(item.easyKo)}</p><p>예: ${escapeHtml(item.example || "수업 자료 속 사례")}</p></div>`)
    .join("");
  $("lessonActions").insertAdjacentHTML("afterbegin", `<div class="dictionary-list">${dictionaryHtml}</div>`);
}

async function renderLessonSupport() {
  const slide = getCurrentSlide();
  const slideText = slide?.text || "";
  const terms = inferLessonTerms(slideText);
  const query = encodeURIComponent(terms[0]?.label || compactText(slideText, 24) || "통합사회 문화권");
  const supportPreview = compactText(state.supportText, 420);
  const questions = [
    `'${terms[0]?.label || "핵심 개념"}' 개념을 쉬운 말로 설명한 문장을 고르세요.`,
    "발명, 발견, 전파 중 이 슬라이드 사례와 가장 가까운 문화 변동 원인을 고르세요.",
    supportPreview
      ? `업로드한 자료에서 이 슬라이드와 연결되는 문장을 찾아 근거로 표시하세요: ${supportPreview.slice(0, 80)}`
      : "문화 병존, 문화 동화, 문화 융합을 각각 구분할 수 있는 생활 속 예시를 하나씩 쓰세요.",
  ];

  const supportHtml = state.supportText
    ? `<div class="card"><strong>${escapeHtml(state.supportSource)}</strong><p>${escapeHtml(supportPreview)}</p></div>`
    : `<div class="card"><strong>문제·읽기자료를 추가할 수 있습니다.</strong><p>모의고사, 읽기자료, 활동지, 요약문을 업로드하면 현재 슬라이드와 연결된 확인 문제로 바꿉니다.</p></div>`;
  const ebsLink = `
    <a class="job-link" href="https://ai-plus.ebs.co.kr/onestop/high/main_high.ebs" target="_blank" rel="noreferrer">EBS AI Plus 고교 원스톱에서 통합사회 문제 찾기</a>
    <a class="job-link" href="https://www.ebsi.co.kr" target="_blank" rel="noreferrer">EBSi 강의·문항 검색</a>
  `;
  $("lessonStandards").innerHTML = supportHtml + ebsLink;
  $("lessonMediaLinks").innerHTML = `
    <a class="job-link" href="https://www.google.com/search?tbm=isch&q=${query}" target="_blank" rel="noreferrer">관련 이미지 찾기</a>
    <a class="job-link" href="https://www.youtube.com/results?search_query=${query}%20%ED%86%B5%ED%95%A9%EC%82%AC%ED%9A%8C" target="_blank" rel="noreferrer">YouTube 설명 영상 찾기</a>
  `;

  const quizItems = buildQuizItems(terms, supportPreview);
  const questionHtml = [];
  for (const item of quizItems) {
    const translated = await translateText(item.question, state.language);
    const secondary = state.language === "ko" ? "" : `<small>${escapeHtml(translated)}</small>`;
    const options = item.options
      .map((option, index) => `<button class="quiz-option" data-correct="${index === item.answer ? "true" : "false"}">${escapeHtml(option)}</button>`)
      .join("");
    questionHtml.push(`<div class="quiz-card"><strong>${escapeHtml(item.question)}</strong>${secondary}<div class="quiz-options">${options}</div></div>`);
  }
  const aiPlan = buildLessonAiPlan(slideText, terms)
    .map((item) => `<div class="ai-card"><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.body)}</p></div>`)
    .join("");
  $("lessonQuestions").innerHTML = `<div class="ai-coach">${aiPlan}</div>${questionHtml.join("")}`;
  $("lessonQuestions").querySelectorAll(".quiz-option").forEach((node) => {
    node.addEventListener("click", () => {
      node.closest(".quiz-options").querySelectorAll(".quiz-option").forEach((button) => button.classList.remove("selected", "correct", "wrong"));
      node.classList.add("selected", node.dataset.correct === "true" ? "correct" : "wrong");
      incrementMetric("quizzes");
    }, { once: true });
  });
}

function buildUniversityCatalog() {
  const map = new Map();
  for (const row of dataset.academyInfo?.departments || []) {
    const school = row["학교명"];
    if (!school) continue;
    if (!map.has(school)) {
      map.set(school, {
        school,
        schoolNorm: normalizeSchool(school),
        regions: new Set(),
        majors: new Set(),
        degree: new Set(),
      });
    }
    const item = map.get(school);
    if (row["지역"]) item.regions.add(normalizeRegion(row["지역"]));
    if (row["학부_과(전공)명"]) item.majors.add(row["학부_과(전공)명"]);
    if (row["학위과정"]) item.degree.add(row["학위과정"]);
  }
  return [...map.values()]
    .map((item) => ({
      school: item.school,
      schoolNorm: item.schoolNorm,
      regions: [...item.regions],
      majors: [...item.majors],
      degree: [...item.degree],
      majorCount: item.majors.size,
    }))
    .sort((a, b) => a.school.localeCompare(b.school, "ko"));
}

function filterUniversities() {
  const universities = buildUniversityCatalog();
  const query = state.collegeQuery.trim();
  const region = normalizeRegion(state.selectedMajorRegion || state.region);
  return universities.filter((uni) => {
    const regionOk = !region || uni.regions.some((item) => normalizeRegion(item) === region);
    if (!regionOk) return false;
    if (state.collegeMode === "major" && state.selectedMajorName) {
      return uni.majors.some((major) => major.includes(state.selectedMajorName) || state.selectedMajorName.includes(major));
    }
    if (!query) return true;
    const haystack = `${uni.school} ${uni.majors.slice(0, 80).join(" ")}`;
    return haystack.includes(query);
  });
}

function buildMajorCatalog() {
  const map = new Map();
  for (const row of dataset.academyInfo?.departments || []) {
    const major = row["학부_과(전공)명"];
    if (!major) continue;
    if (!map.has(major)) map.set(major, { major, schools: new Set(), regions: new Set() });
    map.get(major).schools.add(row["학교명"]);
    map.get(major).regions.add(normalizeRegion(row["지역"]));
  }
  const query = state.collegeQuery.trim();
  const region = normalizeRegion(state.region);
  return [...map.values()]
    .map((item) => ({
      major: item.major,
      schoolCount: item.schools.size,
      regions: [...item.regions].filter(Boolean),
    }))
    .filter((item) => (!query || item.major.includes(query)) && (!region || item.regions.includes(region)))
    .sort((a, b) => b.schoolCount - a.schoolCount || a.major.localeCompare(b.major, "ko"));
}

function universitiesForSelectedMajor() {
  if (!state.selectedMajorName) return [];
  return buildUniversityCatalog().filter((uni) => {
    const region = normalizeRegion(state.selectedMajorRegion || state.region);
    const regionOk = !region || uni.regions.some((item) => normalizeRegion(item) === region);
    const majorOk = uni.majors.some((major) => major.includes(state.selectedMajorName) || state.selectedMajorName.includes(major));
    return regionOk && majorOk;
  });
}

function findGuidesBySchool(schoolName) {
  if (!schoolName) return [];
  const norm = normalizeSchool(schoolName);
  const direct = admissionIndex.schoolGuideMap?.[norm] || [];
  if (direct.length) return direct;
  return (admissionIndex.universityGuides || []).filter((doc) => {
    if (doc.schoolNorm === norm) return true;
    return norm.includes(doc.schoolNorm) || doc.schoolNorm.includes(norm);
  });
}

function renderCollegeList() {
  $("collegeSearchTitle").textContent = state.collegeMode === "major" ? "학과 찾기" : "대학 찾기";
  $("collegeSearchInput").placeholder = state.collegeMode === "major" ? "예: 간호학과, 컴퓨터공학과" : "대학명 또는 학과 키워드";
  document.querySelectorAll("[data-college-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.collegeMode === state.collegeMode);
  });

  if (state.collegeMode === "major") {
    const majors = buildMajorCatalog().slice(0, 220);
    const html = majors
      .map((item) => {
        const active = state.selectedMajorName === item.major ? " active" : "";
        return `<button class="uni${active}" data-major-name="${escapeHtml(item.major)}"><strong>${escapeHtml(item.major)}</strong><small>${item.schoolCount}개 대학 · ${escapeHtml(item.regions.slice(0, 5).join(", "))}</small></button>`;
      })
      .join("");
    $("collegeList").innerHTML = html || '<div class="card">검색 조건에 맞는 학과가 없습니다.</div>';
    if (!state.selectedMajorName && majors.length) selectMajorName(majors[0].major);
    return;
  }

  const list = filterUniversities().slice(0, 220);
  const html = list
    .map((uni) => {
      const active = state.selectedUniversity?.school === uni.school ? " active" : "";
      const subtitle = `${uni.regions.join(", ")} · 학과 ${uni.majorCount}개`;
      return `<button class="uni${active}" data-school="${escapeHtml(uni.school)}"><strong>${escapeHtml(uni.school)}</strong><small>${escapeHtml(subtitle)}</small></button>`;
    })
    .join("");
  $("collegeList").innerHTML = html || '<div class="card">검색 조건에 맞는 대학이 없습니다.</div>';

  if (!state.selectedUniversity && list.length) {
    selectUniversity(list[0].school);
  }
}

function selectMajorName(majorName) {
  state.selectedMajorName = majorName;
  state.selectedMajorRegion = "";
  const universities = universitiesForSelectedMajor();
  state.selectedUniversity = universities[0] || null;
  renderCollegeList();
  renderCollegeInfo();
  const guides = findGuidesBySchool(state.selectedUniversity?.school);
  state.selectedGuide = guides[0] || admissionIndex.generalGuides?.[0] || null;
  renderGuideList(guides);
  renderGuidePreview();
}

function selectUniversity(school) {
  const universities = filterUniversities();
  state.selectedUniversity = universities.find((item) => item.school === school) || null;
  if (!state.selectedUniversity) return;
  const guides = findGuidesBySchool(state.selectedUniversity.school);
  state.selectedGuide = guides[0] || admissionIndex.generalGuides?.[0] || null;
  renderCollegeList();
  renderCollegeInfo();
  renderGuideList(guides);
  renderGuidePreview();
}

function renderCollegeInfo() {
  const uni = state.selectedUniversity;
  if (!uni) {
    $("collegeInfo").innerHTML = '<div class="card">대학 또는 학과를 선택하세요.</div>';
    return;
  }
  if (state.collegeMode === "major" && state.selectedMajorName) {
    const universities = universitiesForSelectedMajor();
    const regions = unique(universities.flatMap((item) => item.regions)).sort((a, b) => a.localeCompare(b, "ko"));
    const regionButtons = [`<button class="region-chip${!state.selectedMajorRegion ? " active" : ""}" data-major-region="">전체</button>`]
      .concat(regions.map((region) => `<button class="region-chip${state.selectedMajorRegion === region ? " active" : ""}" data-major-region="${escapeHtml(region)}">${escapeHtml(region)}</button>`))
      .join("");
    const universityRows = universities
      .slice(0, 80)
      .map((item) => `<button class="uni${state.selectedUniversity?.school === item.school ? " active" : ""}" data-major-school="${escapeHtml(item.school)}"><strong>${escapeHtml(item.school)}</strong><small>${escapeHtml(item.regions.join(", "))} · ${escapeHtml((item.majors.find((major) => major.includes(state.selectedMajorName)) || state.selectedMajorName))}</small></button>`)
      .join("");
    $("collegeInfo").innerHTML = `
      <div class="card">
        <strong>${escapeHtml(state.selectedMajorName)}</strong>
        <p>${universities.length}개 대학에서 관련 학과를 찾았습니다.</p>
      </div>
      <h3>지역</h3>
      <div class="region-chip-row">${regionButtons}</div>
      <h3>대학 목록</h3>
      <div class="mini-list">${universityRows || '<div class="card">선택 지역에 해당하는 대학이 없습니다.</div>'}</div>
    `;
    return;
  }
  const majorsPreview = (state.selectedMajorName ? uni.majors.filter((major) => major.includes(state.selectedMajorName)) : uni.majors).slice(0, 8).join(", ");
  $("collegeInfo").innerHTML = `
    <div class="card">
      <strong>${escapeHtml(uni.school)}</strong>
      <p>지역: ${escapeHtml(uni.regions.join(", "))}</p>
      <p>학위과정: ${escapeHtml(uni.degree.join(", ") || "학사")}</p>
      <p>학과 예시: ${escapeHtml(majorsPreview || "정보 없음")}</p>
    </div>
  `;
}

function renderGuideList(guides) {
  const docs = guides.length ? guides : admissionIndex.generalGuides || [];
  const html = docs
    .map((doc, index) => {
      const isActive = state.selectedGuide?.relativePath === doc.relativePath ? " active" : "";
      const label = doc.type === "university" ? `${doc.year} ${doc.school} (${doc.format.toUpperCase()})` : `${doc.year || "가이드"} ${doc.title}`;
      return `<button class="guide-btn${isActive}" data-guide-index="${index}">${escapeHtml(label)}</button>`;
    })
    .join("");
  $("guideList").innerHTML = html || '<div class="card">요강 파일이 없습니다.</div>';
}

async function renderGuidePreview() {
  const guide = state.selectedGuide;
  if (!guide) return;
  const rawPreview = compactText(guide.previewKo || "미리보기 텍스트가 없는 파일입니다. 파일 열기 버튼으로 원문을 확인하세요.", 2400);
  const foreignerPreview = extractForeignerAdmissionText(rawPreview);
  const previewKo = buildAdmissionBullets(foreignerPreview);
  const foreignerCore = buildForeignerAdmissionCore(foreignerPreview);
  $("guideCoreKo").textContent = foreignerCore;
  $("guidePreviewKo").textContent = previewKo;
  $("guideLangLabel").textContent = uiLangLabel[state.language] || "번역";
  $("guidePreviewLang").textContent = "번역 중...";
  const translated = await translateText(previewKo, state.language);
  const admissionAi = buildAdmissionAiPlan();
  const coreWithAi = `${foreignerCore}\n\n[AI 질문·추천]\n${admissionAi}`;
  const translatedCore = await translateText(coreWithAi, state.language);
  if (guide !== state.selectedGuide) return;
  $("guideCoreKo").textContent = state.language === "ko" ? coreWithAi : `${coreWithAi}\n\n${translatedCore}`;
  $("guidePreviewLang").textContent = translated;
  $("guideOpenLink").href = `./data/${guide.relativePath}`;
  $("downloadGuideTranslation").title = "기계 번역 초안 파일을 생성합니다. 제출 전 원문 확인이 필요합니다.";
}

function buildForeignerAdmissionCore(text = "") {
  const lower = text.replace(/\s+/g, " ");
  const found = [];
  const rules = [
    ["지원자격", /외국인|재외국민|부모.*외국|국적|체류|자격/],
    ["모집단위·모집인원", /모집단위|모집인원|정원|선발/],
    ["제출서류", /제출서류|서류|증명서|졸업|성적|여권|사본/],
    ["전형방법", /전형방법|서류평가|면접|실기|수능|학생부/],
    ["일정", /원서접수|접수|마감|등록|합격자|발표/],
  ];
  for (const [label, pattern] of rules) {
    if (pattern.test(lower)) found.push(label);
  }
  const basis = found.length ? found.join(", ") : "지원자격, 제출서류, 전형방법, 일정";
  return [
    `• 먼저 확인할 항목: ${basis}`,
    "• 외국인·재외국민 전형은 대학마다 국적, 부모 국적, 해외 수학 기간, 체류자격, 제출서류 기준이 다릅니다.",
    "• 학생 행동: 원문 요강의 지원자격 표와 제출서류 표를 확인하고, 입학처·담임·진로교사에게 최종 확인하세요.",
    "• 주의: 아래 번역은 기계 번역 초안이므로 제출·지원 판단은 원문 기준으로 해야 합니다.",
  ].join("\n");
}

function downloadGuideTranslation() {
  downloadGuideTranslationAsync();
}

async function downloadGuideTranslationAsync() {
  const guide = state.selectedGuide;
  if (!guide) return;
  const button = $("downloadGuideTranslation");
  const original = button.textContent;
  button.textContent = "전체 번역 생성 중";
  button.disabled = true;
  let originalText = "";
  try {
    const response = await fetch(`./data/${guide.relativePath}`);
    const blob = await response.blob();
    const file = new File([blob], guide.title || "admission.pdf", { type: blob.type || "application/pdf" });
    if ((guide.format || "").toLowerCase() === "pdf") originalText = await extractPdfText(file);
  } catch {
    originalText = "";
  }
  if (!originalText) {
    originalText = `${$("guideCoreKo").textContent || ""}\n\n${$("guidePreviewKo").textContent || ""}`;
  }
  const chunks = chunkText(originalText, 850).slice(0, 80);
  const translatedChunks = [];
  for (let i = 0; i < chunks.length; i += 1) {
    button.textContent = `전체 번역 생성 중 ${i + 1}/${chunks.length}`;
    translatedChunks.push(await translateText(chunks[i], state.language));
  }
  const text = [
    `TriOm admission guide translation`,
    `Language: ${uiLangLabel[state.language] || state.language}`,
    `File: ${guide.title || guide.school || "admission guide"}`,
    `Source: ${guide.relativePath || ""}`,
    "",
    "[외국인 전형 핵심]",
    $("guideCoreKo").textContent || "",
    "",
    "[전체 번역]",
    translatedChunks.join("\n\n"),
    "",
    "[원문 전체 추출]",
    originalText,
  ].join("\n");
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `triom_admission_${state.language}.txt`;
  a.click();
  URL.revokeObjectURL(url);
  button.textContent = original;
  button.disabled = false;
}

function selectGuideByIndex(index) {
  const uni = state.selectedUniversity;
  const guides = findGuidesBySchool(uni?.school);
  const docs = guides.length ? guides : admissionIndex.generalGuides || [];
  state.selectedGuide = docs[index] || docs[0] || null;
  renderGuideList(guides);
  renderGuidePreview();
}

function applyUiLanguage() {
  const pack = uiText[state.language] || uiText.ko;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = pack[key] || uiText.ko[key] || node.textContent;
  });
}

async function loadLessonSlides(payload) {
  state.lessonSource = payload.source || "업로드 수업";
  state.lessonSlides = (payload.slides || []).map((slide) => ({ ...slide, text: cleanLessonText(slide.text) }));
  state.selectedSlideIndex = 0;
  const firstText = state.lessonSlides[0]?.text || "";
  state.currentLessonTerms = inferLessonTerms(firstText);
  state.activeLessonTerm = state.currentLessonTerms[0]?.key || "summary";
  $("lessonMeta").textContent = `${state.lessonSource} · ${state.lessonSlides.length}개 슬라이드 분석`;
  renderLessonDocument();
  await renderLessonInsight();
  await renderLessonSupport();
}

async function loadSampleLesson() {
  $("lessonMeta").textContent = "샘플 수업 불러오는 중";
  const response = await fetch(LESSON_SAMPLE_URL);
  const payload = await response.json();
  await loadLessonSlides(payload);
}

async function handlePptUpload(file) {
  if (!file) return;
  $("lessonMeta").textContent = `${file.name} 분석 중`;
  const name = file.name.toLowerCase();
  let slides;
  if (name.endsWith(".pptx")) {
    slides = await extractPptxSlides(file);
  } else if (name.endsWith(".pdf")) {
    const text = await extractPdfText(file);
    slides = text
      .split(/\n+/)
      .map((line, index) => ({ slide: index + 1, text: line.replace(/^\d+쪽:\s*/, "") }))
      .filter((item) => item.text);
  } else if (name.endsWith(".docx")) {
    slides = [{ slide: 1, text: await extractDocxText(file) }];
  } else {
    slides = [{ slide: 1, text: await file.text() }];
  }
  await loadLessonSlides({ source: file.name, slides });
}

async function handleSupportUpload(file) {
  if (!file) return;
  $("lessonMeta").textContent = `${file.name} 추가 자료 분석 중`;
  state.supportSource = file.name;
  state.supportText = await extractSupportText(file);
  $("lessonMeta").textContent = `${state.lessonSource || "수업 자료"} · 추가 자료 ${file.name} 연결`;
  await renderLessonSupport();
}

async function handlePerformanceUpload(file) {
  if (!file) return;
  $("lessonMeta").textContent = `${file.name} 수행평가 자료 분석 중`;
  state.performanceSource = file.name;
  state.performanceText = await extractSupportText(file);
  incrementMetric("performanceUploads");
  pushSaved("performances", {
    title: file.name,
    detail: compactText(state.performanceText, 140),
  });
  $("lessonMeta").textContent = `${state.lessonSource || "수업 자료"} · 수행평가 ${file.name} 연결`;
  renderPerformanceCoach();
}

function renderPerformanceCoach() {
  const text = compactText(state.performanceText, 520);
  if ($("performanceMeta")) {
    $("performanceMeta").textContent = state.performanceText ? `${state.performanceSource} 분석 완료` : "통합사회 수행평가 양식 대기 중";
  }
  if ($("performanceSourceView")) {
    $("performanceSourceView").innerHTML = state.performanceText
      ? `<span class="doc-chip">${escapeHtml(state.performanceSource)}</span><p>${escapeHtml(state.performanceText)}</p>`
      : `<span class="doc-chip">수행평가 양식</span><p>수행평가 자료를 업로드하거나 샘플을 불러오면 원문과 작성 코치가 함께 열립니다.</p>`;
  }
  if (!state.performanceText) {
    if ($("performancePlan")) $("performancePlan").innerHTML = '<div class="card"><strong>자료를 먼저 넣어주세요.</strong><p>수행평가 양식이 들어오면 항목별 작성 순서를 만들어 줍니다.</p></div>';
    if ($("performanceChecklist")) $("performanceChecklist").innerHTML = "";
    return;
  }
  const terms = inferLessonTerms(`${getCurrentSlide()?.text || ""} ${state.performanceText}`).slice(0, 3).map((term) => term.label).join(", ");
  const coachHtml = `
    <div class="card"><strong>${escapeHtml(state.performanceSource)}</strong><p>${escapeHtml(text)}</p></div>
    <div class="check"><div><strong>선정 동기 500자</strong><small>왜 이 책을 골랐는지 내 경험과 수업 개념을 연결해 씁니다.</small></div></div>
    <div class="check"><div><strong>줄거리·요약 700자</strong><small>책 전체가 아니라 내가 세운 문제의식과 관련된 부분만 고릅니다.</small></div></div>
    <div class="check"><div><strong>생각·성찰 1300자</strong><small>${escapeHtml(terms || "문화 상대주의, 통합적 관점, 철학")} 같은 교과 개념을 활용해 내 생각을 씁니다.</small></div></div>
    <div class="check"><div><strong>추가 탐구 200자</strong><small>책을 읽고 새로 궁금해진 질문과 나중에 조사할 자료를 적습니다.</small></div></div>
  `;
  if ($("performancePlan")) {
    $("performancePlan").innerHTML = `
      <div class="ai-card"><strong>AI 주제 문장</strong><p>이 책을 읽으며 내가 궁금해진 사회 문제를 하나 고르고, 통합사회 개념으로 설명할 질문을 만듭니다.</p></div>
      <div class="ai-card"><strong>문단 구성</strong><p>선정 동기 → 핵심 요약 → 교과 개념으로 해석 → 나의 성찰 → 추가 탐구 순서로 씁니다.</p></div>
      <div class="ai-card"><strong>선생님께 물어볼 질문</strong><p>제가 고른 책과 연결되는 통합사회 개념은 무엇인가요? 근거 자료는 어디에서 찾으면 좋을까요?</p></div>
      ${coachHtml}
    `;
  }
  if ($("performanceChecklist")) {
    $("performanceChecklist").innerHTML = [
      ["분량", "2700~3300자 사이인지 확인합니다."],
      ["도서 정보", "도서명, 저자, 학번, 이름을 빠뜨리지 않습니다."],
      ["나의 경험", "선정 동기에 내 경험이나 수업 중 생긴 궁금증이 들어갑니다."],
      ["교과 개념", "문화 상대주의, 통합적 관점, 행복, 인권, 세계화 등 수업 개념을 1개 이상 씁니다."],
      ["추가 탐구", "마지막에 다음 탐구 질문과 찾을 자료를 남깁니다."],
    ]
      .map(([title, body]) => `<div class="check"><div><strong>${title}</strong><small>${body}</small></div></div>`)
      .join("");
  }
}

function loadPerformanceSample() {
  state.performanceSource = DEFAULT_PERFORMANCE_SOURCE;
  state.performanceText = DEFAULT_PERFORMANCE_TEXT;
  incrementMetric("performanceUploads");
  pushSaved("performances", {
    title: DEFAULT_PERFORMANCE_SOURCE,
    detail: "통합사회 독후록: 선정 동기 500자, 요약 700자, 생각·성찰 1300자, 추가 탐구 200자",
  });
  renderPerformanceCoach();
}

async function selectSlide(index) {
  state.selectedSlideIndex = Number(index) || 0;
  const slide = getCurrentSlide();
  state.currentLessonTerms = inferLessonTerms(slide?.text || "");
  state.activeLessonTerm = state.currentLessonTerms[0]?.key || "summary";
  renderLessonDocument();
  await renderLessonInsight();
  await renderLessonSupport();
  renderPerformanceCoach();
}

function pickCareerJobDetail(jobName) {
  const jobs = dataset.careerNet?.jobs || [];
  const exact = jobs.find((row) => row.job_nm === jobName);
  if (exact) return exact;
  const partial = jobs.find((row) => row.job_nm && (row.job_nm.includes(jobName) || jobName.includes(row.job_nm)));
  if (partial) return partial;
  const token = String(jobName).slice(0, 2);
  return jobs.find((row) => row.job_nm && row.job_nm.includes(token)) || null;
}

function pickQualifications(jobName) {
  const rows = dataset.qualifications || [];
  const name = String(jobName || "");
  const matched = rows.filter((row) => {
    const body = `${row.name} ${Object.values(row.items || {}).join(" ")}`;
    return body.includes(name) || body.includes(name.slice(0, 2));
  });
  if (matched.length) return matched.slice(0, 3);
  return rows.filter((row) => /조리|간호|전기|자동차|정비|용접|미용|요양|보건/.test(row.name)).slice(0, 3);
}

async function renderJobColumns() {
  const majorRows = await Promise.all((worknetData.majorGroups || []).map(async (major) => {
      const active = state.selectedMajorCode === major.code ? " active" : "";
      const label = state.language === "ko" ? major.name : await translateFast(major.name, state.language);
      return `<button class="pill${active}" data-major-code="${major.code}">${escapeHtml(label)}</button>`;
    }));
  $("majorGroupList").innerHTML = majorRows.join("");

  const middleList = (worknetData.middleClasses || []).filter((row) => row.majorCode === state.selectedMajorCode);
  if (!state.selectedMidCode || !middleList.some((row) => row.midCode === state.selectedMidCode)) {
    state.selectedMidCode = middleList[0]?.midCode || null;
  }
  const middleRows = await Promise.all(middleList.map(async (row) => {
      const active = state.selectedMidCode === row.midCode ? " active" : "";
      const label = state.language === "ko" ? row.midName : await translateFast(row.midName, state.language);
      return `<button class="pill${active}" data-mid-code="${row.midCode}">${escapeHtml(label)}</button>`;
    }));
  $("middleClassList").innerHTML = middleRows.join("") || '<div class="card">중분류가 없습니다.</div>';

  const detailList = (worknetData.jobDetails || []).filter((row) => row.majorCode === state.selectedMajorCode && row.midCode === state.selectedMidCode);
  if (!state.selectedJobName || !detailList.some((row) => row.jobName === state.selectedJobName)) {
    state.selectedJobName = detailList[0]?.jobName || null;
  }
  const detailRows = await Promise.all(detailList.map(async (row) => {
      const active = state.selectedJobName === row.jobName ? " active" : "";
      const label = state.language === "ko" ? row.jobName : await translateFast(row.jobName, state.language);
      return `<button class="pill${active}" data-job-name="${escapeHtml(row.jobName)}">${escapeHtml(label)}</button>`;
    }));
  $("jobDetailList").innerHTML = detailRows.join("") || '<div class="card">소분류 직업이 없습니다.</div>';
}

async function renderJobDetail() {
  const jobName = state.selectedJobName;
  if (!jobName) return;
  const career = pickCareerJobDetail(jobName);
  const descriptionKo =
    career?.work ||
    career?.interest ||
    `${jobName}에 대한 상세 설명은 관련 채용정보 링크와 자격 정보를 통해 확인할 수 있습니다.`;
  $("jobDescKo").textContent = compactText(descriptionKo, 1200);
  $("jobLangLabel").textContent = uiLangLabel[state.language] || "번역";
  $("jobDescLang").textContent = "번역 중...";
  const translated = await translateText(compactText(descriptionKo, 1200), state.language);
  if (jobName !== state.selectedJobName) return;
  $("jobDescLang").textContent = translated;

  const qualifications = pickQualifications(jobName);
  const qualRows = await Promise.all(qualifications.map(async (q) => {
      const summary = q.items?.["개요"] || q.items?.["수행직무"] || q.items?.["취득방법"] || "";
      const name = state.language === "ko" ? q.name : await translateFast(q.name, state.language);
      const translatedSummary = state.language === "ko" ? compactText(summary, 210) : await translateFast(compactText(summary, 210), state.language);
      return `<div class="card"><strong>${escapeHtml(name)}</strong><p>${escapeHtml(translatedSummary)}</p></div>`;
    }));
  $("jobQualifications").innerHTML = qualRows.join("") || '<div class="card">연결된 자격 정보가 없습니다.</div>';

  const query = encodeURIComponent(jobName);
  const pack = uiText[state.language] || uiText.ko;
  const links = [
    { label: pack.work24Search, url: `https://m.work24.go.kr/wk/a/b/1200/retriveDtlEmpSrchList.do?keywordJobCont=${query}&pageIndex=1` },
    { label: pack.work24Main, url: "https://www.work24.go.kr/cm/main.do" },
  ];
  $("jobSearchLinks").innerHTML = links
    .map((link) => `<a class="job-link" href="${link.url}" target="_blank" rel="noreferrer">${escapeHtml(link.label)} (${escapeHtml(jobName)})</a>`)
    .join("");
  renderJobExtras(jobName);
}

function reviewContractText(text = "") {
  const body = String(text || "").replace(/\s+/g, " ");
  const checks = [
    ["계약 당사자", /사업주|사용자|근로자|성명|회사|사업장/],
    ["근무 장소", /근무\s*장소|근무지|사업장|장소/],
    ["업무 내용", /업무|직무|담당|수행/],
    ["계약 기간", /계약\s*기간|근로\s*계약\s*기간|입사|근무\s*기간/],
    ["근로 시간", /근로\s*시간|근무\s*시간|시업|종업|휴게|휴식/],
    ["임금", /임금|시급|월급|급여|수당|상여|지급일/],
    ["휴일·휴가", /휴일|휴가|주휴|연차/],
    ["서명·날인", /서명|날인|인|싸인|signature/],
    ["외국인근로자/EPS", /외국인|E-9|H-2|체류|EPS|고용허가/],
  ];
  return checks.map(([label, pattern]) => ({
    label,
    ok: pattern.test(body),
    message: pattern.test(body) ? "확인됨" : "계약서에서 찾기 어렵습니다. 서명 전에 반드시 확인하세요.",
  }));
}

function renderContractReview(text = "") {
  const results = reviewContractText(text);
  incrementMetric("contracts");
  $("contractReviewResult").innerHTML = results
    .map((item) => `<div class="check"><div><strong>${item.ok ? "확인" : "주의"} · ${escapeHtml(item.label)}</strong><small>${escapeHtml(item.message)}</small></div></div>`)
    .join("");
}

function renderJobExtras(jobName) {
  const encoded = encodeURIComponent(jobName);
  const companyQueries = [
    `${jobName} 채용 기업`,
    `${jobName} 취업처`,
    `${jobName} 산업체`,
  ];
  $("jobCompanies").innerHTML = companyQueries
    .map((query) => `<a class="job-link" href="https://www.google.com/search?q=${encodeURIComponent(query)}" target="_blank" rel="noreferrer">${escapeHtml(query)}</a>`)
    .join("");
  $("jobNews").innerHTML = `
    <a class="job-link" href="https://news.google.com/search?q=${encoded}%20%EC%B1%84%EC%9A%A9&hl=ko&gl=KR&ceid=KR%3Ako" target="_blank" rel="noreferrer">${escapeHtml(jobName)} 채용 뉴스</a>
    <a class="job-link" href="https://news.google.com/search?q=${encoded}%20%EC%82%B0%EC%97%85%20%EC%A0%84%EB%A7%9D&hl=ko&gl=KR&ceid=KR%3Ako" target="_blank" rel="noreferrer">${escapeHtml(jobName)} 산업 전망 뉴스</a>
    <div class="ai-card"><strong>AI 취업 코치</strong><p>${escapeHtml(buildJobAiPlan(jobName))}</p></div>
  `;
  $("jobContract").innerHTML = [
    ["임금", "시급·월급, 지급일, 수당 포함 여부를 확인합니다."],
    ["시간", "근로시간, 휴게시간, 주휴일, 연장근로 조건을 확인합니다."],
    ["업무", "실제 담당 업무와 근무 장소가 계약서에 적혀 있는지 봅니다."],
    ["체류자격", "취업 가능 비자와 학교·기관 상담 필요 여부를 확인합니다."],
    ["서명 전 질문", "모르는 항목은 번역해서 확인하고, 바로 서명하지 않습니다."],
  ]
    .map(([title, body]) => `<div class="check"><div><strong>${title}</strong><small>${body}</small></div></div>`)
    .join("");
  if (!$("contractReviewResult").innerHTML.trim()) {
    $("contractReviewResult").innerHTML = '<div class="card"><strong>계약서 검토 대기</strong><p>표준근로계약서나 실제 계약서 내용을 업로드하거나 붙여넣으면 필수 항목 누락 여부를 확인합니다.</p></div>';
  }
}

async function rerenderLanguageSensitive() {
  applyUiLanguage();
  await renderLessonInsight();
  await renderLessonSupport();
  await renderGuidePreview();
  await renderJobColumns();
  await renderJobDetail();
}

function setDefaultJobState() {
  const firstMajor = "5";
  state.selectedMajorCode = firstMajor;
  const firstMid = (worknetData.middleClasses || []).find((row) => row.majorCode === firstMajor)?.midCode;
  state.selectedMidCode = firstMid || null;
  const firstJob = (worknetData.jobDetails || []).find((row) => row.majorCode === firstMajor && row.midCode === firstMid)?.jobName;
  state.selectedJobName = firstJob || null;
}

function loadSaved() {
  try {
    return ensureSavedShape(JSON.parse(localStorage.getItem("triomSaved") || localStorage.getItem("naviomSaved") || "{}"));
  } catch {
    return ensureSavedShape({});
  }
}

function saveSaved() {
  localStorage.setItem("triomSaved", JSON.stringify(state.saved));
}

function ensureSavedShape(saved) {
  const defaults = getDefaultDashboardExamples();
  return {
    lessons: (saved.lessons && saved.lessons.length ? saved.lessons : defaults.lessons),
    colleges: (saved.colleges && saved.colleges.length ? saved.colleges : defaults.colleges),
    jobs: (saved.jobs && saved.jobs.length ? saved.jobs : defaults.jobs),
    performances: (saved.performances && saved.performances.length ? saved.performances : defaults.performances),
    questions: (saved.questions && saved.questions.length ? saved.questions : defaults.questions),
    metrics: {
      questions: saved.metrics?.questions || defaults.metrics.questions,
      quizzes: saved.metrics?.quizzes || defaults.metrics.quizzes,
      contracts: saved.metrics?.contracts || defaults.metrics.contracts,
      performanceUploads: saved.metrics?.performanceUploads || defaults.metrics.performanceUploads,
    },
  };
}

function getDefaultDashboardExamples() {
  return {
    lessons: [
      { title: "[수업용] 통합사회 1학기 기말고사 · 1번 페이지", detail: "문화와 다양성: 문화, 생활양식, 종교, 언어 개념을 쉬운 설명으로 저장" },
      { title: "[수업용] 통합사회 1학기 중간고사 · 3번 페이지", detail: "문화권, 경계, 상호작용 개념을 다시 볼 페이지로 저장" },
    ],
    colleges: [
      { title: "간호학과 · 가야대학교 보건대학원(김해)", detail: "외국인 전형 요강, 제출서류, 면접 여부 확인 필요" },
      { title: "사회복지학과 · 가천대학교", detail: "경기·인천권 대학, 장학금과 상담 링크 저장" },
    ],
    jobs: [
      { title: "간호조무사", detail: "관련 자격, 실습, 채용 검색 링크 저장" },
      { title: "행정사무원", detail: "문서 작성, 한국어 문해력, 고용24 검색 키워드 저장" },
    ],
    performances: [
      { title: DEFAULT_PERFORMANCE_SOURCE, detail: "독후록 2700~3300자: 선정 동기, 요약, 생각·성찰, 추가 탐구 구조" },
    ],
    questions: [
      { question: "문화 상대주의를 독후감에 어떻게 자연스럽게 넣을 수 있나요?", context: "통합사회 독후록 수행평가", answer: "책 속 사례를 먼저 고르고, 그 사례를 다른 문화의 기준에서 이해해보려는 태도로 연결해 보세요." },
      { question: "외국인 특별전형에서 체류자격은 어디에서 확인해야 하나요?", context: "진학 · 가야대학교 보건계열", answer: "대학 요강의 지원자격 표와 Hi Korea 체류자격 안내를 같이 확인한 뒤 담임·진로 선생님과 체크하세요." },
    ],
    metrics: { questions: 2, quizzes: 6, contracts: 1, performanceUploads: 1 },
  };
}

function incrementMetric(key) {
  state.saved.metrics[key] = (state.saved.metrics[key] || 0) + 1;
  saveSaved();
  renderDashboard();
}

function pushSaved(type, item) {
  const list = state.saved[type] || [];
  const key = JSON.stringify(item);
  state.saved[type] = [item, ...list.filter((old) => JSON.stringify(old) !== key)].slice(0, 8);
  saveSaved();
  renderDashboard();
}

function renderSavedList(id, items, emptyText) {
  $(id).innerHTML = items.length
    ? items.map((item) => `<div class="card"><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.detail || "")}</p></div>`).join("")
    : `<div class="card"><p>${escapeHtml(emptyText)}</p></div>`;
}

function renderDashboard() {
  if (!$("savedLessons")) return;
  const metrics = state.saved.metrics || {};
  $("teacherMetrics").innerHTML = [
    ["질문 수", metrics.questions || 0],
    ["문제 풀이", metrics.quizzes || 0],
    ["관심 진학", (state.saved.colleges || []).length],
    ["관심 취업", (state.saved.jobs || []).length],
    ["수행평가 저장", (state.saved.performances || []).length],
    ["계약 점검", metrics.contracts || 0],
    ["자료 업로드", metrics.performanceUploads || 0],
  ]
    .map(([label, value]) => `<div class="metric"><strong>${value}</strong><span>${label}</span></div>`)
    .join("");
  renderSchoolTrendDashboard();
  renderSavedList("savedLessons", state.saved.lessons || [], "아직 담은 수업 페이지가 없습니다.");
  renderSavedList("savedColleges", state.saved.colleges || [], "아직 담은 대학·학과가 없습니다.");
  renderSavedList("savedJobs", state.saved.jobs || [], "아직 담은 직업이 없습니다.");
  renderSavedList("savedPerformances", state.saved.performances || [], "아직 담은 수행평가 자료가 없습니다.");
  $("teacherQuestions").innerHTML = (state.saved.questions || []).length
    ? state.saved.questions
        .map((item, index) => `<div class="card"><strong>Q. ${escapeHtml(item.question)}</strong><p>${escapeHtml(item.context)}</p><textarea data-teacher-answer="${index}" placeholder="교사용 답변을 입력하세요.">${escapeHtml(item.answer || "")}</textarea><button class="guide-btn" data-save-answer="${index}">답변 저장</button></div>`)
        .join("")
    : '<div class="card"><p>아직 학생 질문이 없습니다.</p></div>';
}

function renderSchoolTrendDashboard() {
  const target = $("schoolTrendDashboard");
  if (!target) return;
  const trend = [
    { label: "3월", questions: 8, quizzes: 18, saved: 6, support: 3 },
    { label: "4월", questions: 16, quizzes: 34, saved: 12, support: 5 },
    { label: "5월", questions: 27, quizzes: 58, saved: 21, support: 8 },
    { label: "6월", questions: 39, quizzes: 84, saved: 34, support: 11 },
  ];
  const max = Math.max(...trend.flatMap((item) => [item.questions, item.quizzes, item.saved, item.support]));
  const points = (key) =>
    trend
      .map((item, index) => {
        const x = 42 + index * 126;
        const y = 170 - (item[key] / max) * 126;
        return `${x},${y}`;
      })
      .join(" ");
  const axisLabels = trend.map((item, index) => `<text x="${42 + index * 126}" y="202" text-anchor="middle">${item.label}</text>`).join("");
  const bars = [
    ["교과 질문", "questions", "#198754"],
    ["문제 풀이", "quizzes", "#0f8f62"],
    ["관심 경로 저장", "saved", "#89c541"],
    ["집중 지원", "support", "#2f6b3f"],
  ];
  target.innerHTML = `
    <div class="school-dashboard">
      <div class="school-chart">
        <svg viewBox="0 0 450 220" role="img" aria-label="학교 누적 데이터 추이선">
          <line x1="34" y1="182" x2="430" y2="182"></line>
          <line x1="34" y1="30" x2="34" y2="182"></line>
          ${axisLabels}
          ${bars.map(([label, key, color]) => `<polyline points="${points(key)}" stroke="${color}"></polyline>`).join("")}
          ${trend
            .map((item, index) =>
              bars.map(([, key, color]) => {
                const x = 42 + index * 126;
                const y = 170 - (item[key] / max) * 126;
                return `<circle cx="${x}" cy="${y}" r="4" fill="${color}"></circle>`;
              }).join(""),
            )
            .join("")}
        </svg>
      </div>
      <div class="school-insight">
        <strong>학교가 축적하는 데이터</strong>
        <p>학생별 원문 이해 질문, 교과 확인문제 풀이, 관심 대학·직업 저장, 수행평가 자료 업로드를 월별로 모아 지원이 필요한 시점을 봅니다.</p>
        <div class="legend">
          ${bars.map(([label, , color]) => `<span><i style="background:${color}"></i>${label}</span>`).join("")}
        </div>
      </div>
      <div class="cohort-grid">
        <div class="cohort-card"><strong>한국어·교과문해 집중군</strong><span>11명</span><small>일상 대화는 가능하지만 추상 개념어 질문이 반복되는 학생</small></div>
        <div class="cohort-card"><strong>진학정보 탐색군</strong><span>18명</span><small>외국인 전형, 학과, 장학 정보를 저장한 학생</small></div>
        <div class="cohort-card"><strong>취업전환 준비군</strong><span>9명</span><small>직업·자격·근로계약 정보를 반복 확인한 학생</small></div>
      </div>
    </div>
  `;
}

function bindEvents() {
  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => switchTab(button.dataset.tab));
  });

  $("languageSelect").addEventListener("change", async (event) => {
    state.language = event.target.value;
    await rerenderLanguageSensitive();
  });

  $("regionSelect").addEventListener("change", (event) => {
    state.region = event.target.value;
    state.selectedUniversity = null;
    state.selectedMajorName = "";
    renderCollegeList();
  });

  $("loadSampleLesson").addEventListener("click", loadSampleLesson);

  $("pptUpload").addEventListener("change", async (event) => {
    await handlePptUpload(event.target.files?.[0]);
  });

  $("supportUpload").addEventListener("change", async (event) => {
    await handleSupportUpload(event.target.files?.[0]);
  });

  $("performanceUploadStandalone").addEventListener("change", async (event) => {
    await handlePerformanceUpload(event.target.files?.[0]);
  });
  $("loadPerformanceSample").addEventListener("click", loadPerformanceSample);

  $("saveLessonBtn").addEventListener("click", () => {
    const slide = getCurrentSlide();
    if (!slide) return;
    pushSaved("lessons", {
      title: `${state.lessonSource} · ${slide.slide}번 페이지`,
      detail: compactText(slide.text, 120),
    });
  });

  $("saveCollegeBtn").addEventListener("click", () => {
    if (!state.selectedUniversity) return;
    pushSaved("colleges", {
      title: state.selectedMajorName ? `${state.selectedMajorName} · ${state.selectedUniversity.school}` : state.selectedUniversity.school,
      detail: `${state.selectedUniversity.regions.join(", ")} · 학과 ${state.selectedUniversity.majorCount}개`,
    });
  });

  $("saveJobBtn").addEventListener("click", () => {
    if (!state.selectedJobName) return;
    pushSaved("jobs", {
      title: state.selectedJobName,
      detail: `${uiText[state.language]?.jobSearch || "채용 자리 찾기"} · ${state.selectedMidCode || ""}`,
    });
  });
  $("savePerformanceBtn").addEventListener("click", () => {
    if (!state.performanceText) return;
    pushSaved("performances", {
      title: state.performanceSource || "수행평가 자료",
      detail: compactText(state.performanceText, 140),
    });
  });

  $("downloadGuideTranslation").addEventListener("click", downloadGuideTranslation);

  $("contractUpload").addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const text = await extractSupportText(file);
    $("contractText").value = text;
    renderContractReview(text);
  });

  $("reviewContractBtn").addEventListener("click", () => {
    renderContractReview($("contractText").value);
  });

  $("slideSelect").addEventListener("change", async (event) => {
    await selectSlide(event.target.value);
  });

  $("collegeSearchInput").addEventListener("input", (event) => {
    state.collegeQuery = event.target.value;
    state.selectedUniversity = null;
    state.selectedMajorName = "";
    renderCollegeList();
  });

  $("lessonAskBtn").addEventListener("click", () => {
    const text = $("lessonQuestion").value.trim();
    if (!text) return;
    const slide = getCurrentSlide();
    state.saved.questions = [
      {
        question: text,
        context: `${state.lessonSource} · ${slide?.slide || "-"}번 페이지`,
        answer: "",
        createdAt: new Date().toISOString(),
      },
      ...(state.saved.questions || []),
    ].slice(0, 12);
    incrementMetric("questions");
    saveSaved();
    const found = [...state.currentLessonTerms, ...Object.entries(lessonTerms).map(([key, value]) => ({ key, ...value }))].find((term) => text.includes(term.label));
    state.activeLessonTerm = found ? found.key : state.currentLessonTerms[0]?.key || "summary";
    renderLessonDocument();
    renderLessonInsight();
  });

  $("lessonQuestion").addEventListener("keydown", (event) => {
    if (event.key === "Enter") $("lessonAskBtn").click();
  });

  document.body.addEventListener("click", (event) => {
    const termBtn = event.target.closest("[data-term]");
    if (termBtn) {
      state.activeLessonTerm = termBtn.dataset.term;
      renderLessonDocument();
      renderLessonInsight();
      return;
    }

    const schoolBtn = event.target.closest("[data-school]");
    if (schoolBtn) {
      selectUniversity(schoolBtn.dataset.school);
      return;
    }

    const collegeModeBtn = event.target.closest("[data-college-mode]");
    if (collegeModeBtn) {
      state.collegeMode = collegeModeBtn.dataset.collegeMode;
      state.selectedUniversity = null;
      state.selectedMajorName = "";
      state.collegeQuery = "";
      $("collegeSearchInput").value = "";
      renderCollegeList();
      return;
    }

    const majorNameBtn = event.target.closest("[data-major-name]");
    if (majorNameBtn) {
      selectMajorName(majorNameBtn.dataset.majorName);
      return;
    }

    const regionBtn = event.target.closest("[data-major-region]");
    if (regionBtn) {
      state.selectedMajorRegion = regionBtn.dataset.majorRegion || "";
      const universities = universitiesForSelectedMajor();
      state.selectedUniversity = universities[0] || null;
      renderCollegeInfo();
      const guides = findGuidesBySchool(state.selectedUniversity?.school);
      state.selectedGuide = guides[0] || admissionIndex.generalGuides?.[0] || null;
      renderGuideList(guides);
      renderGuidePreview();
      return;
    }

    const majorSchoolBtn = event.target.closest("[data-major-school]");
    if (majorSchoolBtn) {
      const school = majorSchoolBtn.dataset.majorSchool;
      const universities = universitiesForSelectedMajor();
      state.selectedUniversity = universities.find((item) => item.school === school) || state.selectedUniversity;
      renderCollegeInfo();
      const guides = findGuidesBySchool(state.selectedUniversity?.school);
      state.selectedGuide = guides[0] || admissionIndex.generalGuides?.[0] || null;
      renderGuideList(guides);
      renderGuidePreview();
      return;
    }

    const answerBtn = event.target.closest("[data-save-answer]");
    if (answerBtn) {
      const index = Number(answerBtn.dataset.saveAnswer);
      const input = document.querySelector(`[data-teacher-answer="${index}"]`);
      if (state.saved.questions?.[index]) {
        state.saved.questions[index].answer = input?.value || "";
        saveSaved();
        renderDashboard();
      }
      return;
    }

    const guideBtn = event.target.closest("[data-guide-index]");
    if (guideBtn) {
      selectGuideByIndex(Number(guideBtn.dataset.guideIndex));
      return;
    }

    const majorBtn = event.target.closest("[data-major-code]");
    if (majorBtn) {
      state.selectedMajorCode = majorBtn.dataset.majorCode;
      renderJobColumns().then(renderJobDetail);
      return;
    }

    const midBtn = event.target.closest("[data-mid-code]");
    if (midBtn) {
      state.selectedMidCode = midBtn.dataset.midCode;
      renderJobColumns().then(renderJobDetail);
      return;
    }

    const jobBtn = event.target.closest("[data-job-name]");
    if (jobBtn) {
      state.selectedJobName = jobBtn.dataset.jobName;
      renderJobColumns();
      renderJobDetail();
    }
  });
}

async function loadJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to load ${url}`);
  return response.json();
}

function mergeDatasetParts(parts) {
  const merged = {};
  const mergeInto = (target, source) => {
    Object.entries(source || {}).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        target[key] = [...(Array.isArray(target[key]) ? target[key] : []), ...value];
      } else if (value && typeof value === "object") {
        target[key] = target[key] && typeof target[key] === "object" && !Array.isArray(target[key]) ? target[key] : {};
        mergeInto(target[key], value);
      } else {
        target[key] = value;
      }
    });
  };
  parts.forEach((part) => mergeInto(merged, part));
  return merged;
}

async function loadDataset() {
  try {
    const manifestRes = await fetch(DATASET_MANIFEST_URL);
    if (manifestRes.ok) {
      const manifest = await manifestRes.json();
      const manifestUrl = new URL(DATASET_MANIFEST_URL, window.location.href);
      const parts = await Promise.all(
        (manifest.files || []).map((file) => {
          const partUrl = new URL(file, manifestUrl);
          return loadJson(partUrl.toString());
        })
      );
      return mergeDatasetParts(parts);
    }
  } catch (error) {
    console.warn("Dataset manifest fallback", error);
  }
  return loadJson(DATASET_URL);
}

async function init() {
  const params = new URLSearchParams(window.location.search);
  const tabParam = params.get("tab");
  const langParam = params.get("lang");
  if ((location.pathname === "/" || location.pathname === "/index.html") && !location.hash.includes("triom")) {
    history.replaceState(null, "", `${location.pathname}${location.search || ""}#/triom`);
  }
  if (["classroom", "performance", "college", "job", "sites", "dashboard"].includes(tabParam)) state.tab = tabParam;
  if (["ko", "vi", "zh", "en", "ru", "ja"].includes(langParam)) state.language = langParam;

  $("lessonEasyKo").textContent = "로딩 중...";
  const [baseData, admissionRes, worknetRes] = await Promise.all([
    loadDataset(),
    fetch(ADMISSION_URL),
    fetch(WORKNET_URL),
  ]);
  dataset = baseData;
  admissionIndex = await admissionRes.json();
  worknetData = await worknetRes.json();

  $("languageSelect").value = state.language;
  state.saved = loadSaved();
  applyUiLanguage();
  renderCollegeLinks();
  setDefaultJobState();
  await loadSampleLesson();
  if (!state.performanceText) {
    state.performanceSource = DEFAULT_PERFORMANCE_SOURCE;
    state.performanceText = DEFAULT_PERFORMANCE_TEXT;
  }
  renderPerformanceCoach();
  renderCollegeList();
  await renderJobColumns();
  await renderJobDetail();
  renderRelatedSites();
  renderDashboard();

  $("guideLangLabel").textContent = uiLangLabel[state.language];
  $("jobLangLabel").textContent = uiLangLabel[state.language];
  switchTab(state.tab);
  if (window.lucide) window.lucide.createIcons();
}

document.addEventListener("DOMContentLoaded", () => {
  bindEvents();
  init().catch((error) => {
    console.error(error);
    $("lessonEasyKo").textContent = `데이터 로딩 오류: ${error.message}`;
  });
});
