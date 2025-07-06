function toggleLanguage() {
  AppState.lang = (AppState.lang === "en") ? "ko" : "en";

  const projectContainer = document.getElementById("project-list");
  if (projectContainer) renderProjects();

  loadIntroduction();
  updateLangButton();
}

function updateLangButton() {
  const btn = document.getElementById("lang-toggle");
  btn.textContent = (AppState.lang === "en") ? "한국어" : "English";
}

document.addEventListener("DOMContentLoaded", () => {
  updateLangButton();
  loadIntroduction();

  const projectContainer = document.getElementById("project-list");
  if (projectContainer) renderProjects();

  document.getElementById("lang-toggle").addEventListener("click", toggleLanguage);
});
