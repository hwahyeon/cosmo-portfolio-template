document.addEventListener("DOMContentLoaded", () => {
  loadIntroduction();
});

function loadIntroduction() {
  fetch("./assets/intro.json")
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch intro.json");
      return res.json();
    })
    .then(applyIntroduction)
    .catch((err) => console.error("Introduction loading error:", err));
}

function applyIntroduction(data) {
  const lang = AppState.lang || "en";

  const headlineEl = document.getElementById("headline");
  const subheadlineEl = document.getElementById("subheadline");
  const introEl = document.getElementById("introduction");

  if (headlineEl)
    headlineEl.textContent = data.headline[lang] || data.headline["en"];
  if (subheadlineEl)
    subheadlineEl.textContent =
      data.subheadline[lang] || data.subheadline["en"];
  if (introEl)
    introEl.innerHTML = DOMPurify.sanitize(
      data.description[lang] || data.description["en"]
    );
}
