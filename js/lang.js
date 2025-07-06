function toggleLanguage() {
  AppState.lang = AppState.lang === "en" ? "ko" : "en";
  renderProjects();
  loadIntroduction();
  updateLangButton();
}

function updateLangButton() {
  const btn = document.getElementById("lang-toggle");
  btn.textContent = AppState.lang === "en" ? "한국어" : "English";
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("lang-toggle")
    .addEventListener("click", toggleLanguage);
  updateLangButton();
  loadIntroduction();
  renderProjects();
});
