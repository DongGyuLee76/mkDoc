// 1. Renderer 만들기
const renderer = new marked.Renderer();

// 2. code 블럭 커스텀
renderer.code = (code, infostring) => {
  const lang = (infostring || "").trim();
  const languageClass = lang ? `language-${lang}` : "";

  // HTML 반환: code-block + copy 버튼
  return `
    <div class="code-block">
      <button class="copy-btn">Copy code</button>
      <pre><code class="${languageClass}">${escapeHtml(code)}</code></pre>
    </div>
  `;
};

// 3. marked 기본 옵션 설정
marked.setOptions({
  renderer,
  breaks: true,
});

// HTML 특수문자 이스케이프
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// 4. Markdown 불러와서 렌더링
const MARKDOWN_FILE = "02_user_guide.md";

async function loadMarkdown() {
  const res = await fetch(MARKDOWN_FILE);
  const text = await res.text();

  const html = marked.parse(text);
  const app = document.getElementById("app");
  app.innerHTML = html;

  attachCopyEvents();
}

// 5. copy 버튼 이벤트 연결
function attachCopyEvents() {
  document.querySelectorAll(".code-block").forEach((block) => {
    const button = block.querySelector(".copy-btn");
    const codeElement = block.querySelector("pre code");

    if (!button || !codeElement) return;

    button.addEventListener("click", async () => {
      const text = codeElement.innerText;
      try {
        await navigator.clipboard.writeText(text);
        const original = button.textContent;
        button.textContent = "Copied!";
        setTimeout(() => (button.textContent = original), 1500);
      } catch (e) {
        console.error("Copy failed", e);
      }
    });
  });
}

loadMarkdown();