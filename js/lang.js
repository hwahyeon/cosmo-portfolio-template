fetch("./assets/meta.json")
  .then((res) => res.json())
  .then((meta) => {
    extraLangLabel = meta.extraLang?.label || "Other Language";
    updateLangButton();
  });

function toggleLanguage() {
  AppState.lang = AppState.lang === "en" ? "ex" : "en";
  renderProjects();
  loadIntroduction();
  updateLangButton();
}

function updateLangButton() {
  const btn = document.getElementById("lang-toggle");
  if (!btn) return;
  btn.textContent = AppState.lang === "en" ? extraLangLabel : "English";
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("lang-toggle")
    .addEventListener("click", toggleLanguage);
  updateLangButton();
  loadIntroduction();
  renderProjects();
});
