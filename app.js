const MODEL = "gemini-3-flash-preview";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

const apiKeyInput = document.getElementById("apiKey");
const templateFileInput = document.getElementById("templateFile");
const templateTextArea = document.getElementById("templateText");
const newInfoArea = document.getElementById("newInfo");
const generateBtn = document.getElementById("generateBtn");
const resultCard = document.getElementById("resultCard");
const resultArea = document.getElementById("result");
const copyBtn = document.getElementById("copyBtn");
const statusEl = document.getElementById("status");

const STORAGE_KEY = "gemini_api_key";

const savedKey = localStorage.getItem(STORAGE_KEY);
if (savedKey) apiKeyInput.value = savedKey;
apiKeyInput.addEventListener("change", () => {
  localStorage.setItem(STORAGE_KEY, apiKeyInput.value.trim());
});

templateFileInput.addEventListener("change", async () => {
  const file = templateFileInput.files[0];
  if (!file) return;
  const text = await file.text();
  templateTextArea.value = text;
});

function setStatus(message, isError = false) {
  statusEl.textContent = message;
  statusEl.classList.toggle("error", isError);
}

function buildPrompt(template, newInfo) {
  return `당신은 전문 제안서 작성 컨설턴트입니다. 아래 [참고 양식]의 구조, 형식, 어투, 항목 구성을 최대한 따르면서, [새 제안서 정보]를 반영한 새로운 제안서를 작성해주세요.

- 참고 양식의 섹션 구조와 형식을 유지하세요.
- 참고 양식에 없는 정보는 새 제안서 정보에 맞게 자연스럽게 채워주세요.
- 결과는 바로 사용할 수 있는 완성된 제안서 형태로 작성해주세요.

[참고 양식]
${template}

[새 제안서 정보]
${newInfo}`;
}

generateBtn.addEventListener("click", async () => {
  const apiKey = apiKeyInput.value.trim();
  const template = templateTextArea.value.trim();
  const newInfo = newInfoArea.value.trim();

  if (!apiKey) {
    setStatus("Gemini API Key를 입력해주세요.", true);
    return;
  }
  if (!template) {
    setStatus("참고할 제안서 양식을 입력하거나 파일을 업로드해주세요.", true);
    return;
  }
  if (!newInfo) {
    setStatus("새 제안서에 들어갈 정보를 입력해주세요.", true);
    return;
  }

  generateBtn.disabled = true;
  setStatus("제안서를 생성하는 중입니다...");
  resultCard.hidden = true;

  try {
    const response = await fetch(`${API_URL}?key=${encodeURIComponent(apiKey)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: buildPrompt(template, newInfo) }],
          },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      const message = data?.error?.message || `요청 실패 (HTTP ${response.status})`;
      throw new Error(message);
    }

    const text = data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join("") || "";
    if (!text) {
      throw new Error("응답에서 생성된 텍스트를 찾을 수 없습니다.");
    }

    resultArea.value = text;
    resultCard.hidden = false;
    setStatus("제안서 생성이 완료되었습니다.");
  } catch (err) {
    setStatus(`오류: ${err.message}`, true);
  } finally {
    generateBtn.disabled = false;
  }
});

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(resultArea.value);
    setStatus("결과가 클립보드에 복사되었습니다.");
  } catch {
    resultArea.select();
    document.execCommand("copy");
    setStatus("결과가 클립보드에 복사되었습니다.");
  }
});
