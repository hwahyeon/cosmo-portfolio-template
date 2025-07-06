fetch("./assets/categories.json")
  .then((res) => res.json())
  .then((data) => {
    createCategoryButtons(data.categories);
    fetchProjects(data.categories);
  });

function createCategoryButtons(categories) {
  const container = document.getElementById("project-buttons");
  container.innerHTML = "";

  for (const key in categories) {
    if (categories.hasOwnProperty(key)) {
      const btn = document.createElement("button");
      btn.id = `show-${key}`;
      btn.textContent = categories[key];

      btn.addEventListener("click", () => filterProjects(key, btn));

      container.appendChild(btn);

      if (key !== "all") {
        const divider = document.createElement("span");
        container.appendChild(divider);
      }
    }
  }
}

function fetchProjects(categories) {
  fetch("./assets/projects.json")
    .then((res) => res.json())
    .then((data) => {
      AppState.projectData = data;
      renderProjects();

      const firstKey = Object.keys(categories)[0];
      const firstBtn = document.getElementById(`show-${firstKey}`);
      if (firstBtn) filterProjects(firstKey, firstBtn);
    });
}

function renderProjects() {
  const container = document.getElementById("project-list");
  container.innerHTML = "";

  AppState.projectData.forEach((project) => {
    const lang = AppState.lang || "en";
    const title = project.title[lang] || project.title["en"];
    const desc = project.description[lang] || project.description["en"];
    const imagePath = `img/projects/${project.id}.png`;

    const hasGithub = !!project.github;
    const hasWebsite = !!project.website;

    const card = document.createElement("div");
    card.className = `project-card ${project.category}`;

    card.innerHTML = `
      <div class="project-image">
        <img src="${imagePath}" alt="project_picture" />
        ${
          hasGithub && hasWebsite
            ? `
            <a href="${project.github}" target="_blank" class="project-overlay project-overlay-north">
              <img src="img/icons/github.svg" alt="GitHub" class="project-image-icon" />
            </a>
            <a href="${project.website}" target="_blank" class="project-overlay project-overlay-south">
              <img src="img/icons/newwindow.svg" alt="Website" class="project-image-icon" />
            </a>
          `
            : hasGithub
            ? `
            <a href="${project.github}" target="_blank" class="project-overlay-single">
              <img src="img/icons/github.svg" alt="GitHub" class="project-image-icon" />
            </a>
          `
            : hasWebsite
            ? `
            <a href="${project.website}" target="_blank" class="project-overlay-single">
              <img src="img/icons/newwindow.svg" alt="Website" class="project-image-icon" />
            </a>
          `
            : ""
        }
      </div>
      <div class="project-description">
        <h3>${title}</h3>
        <p>${desc}</p>
        <div class="project-tech-stack">
          ${project.tech.map((tech) => `<span>${tech}</span>`).join("")}
        </div>
        <div class="project-icons">
          ${
            hasGithub
              ? `<a href="${project.github}" target="_blank">
                   <img src="img/icons/github.svg" alt="GitHub" />
                 </a>`
              : ""
          }
          ${
            hasWebsite
              ? `<a href="${project.website}" target="_blank">
                   <img src="img/icons/newwindow.svg" alt="Website" />
                 </a>`
              : ""
          }
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function filterProjects(category, clickedButton) {
  const projects = document.querySelectorAll(".project-card");

  document
    .querySelectorAll("#project-buttons button")
    .forEach((btn) => btn.classList.remove("active-button"));

  clickedButton.classList.add("active-button");

  projects.forEach((project) => {
    if (category === "all" || project.classList.contains(category)) {
      project.classList.remove("hidden");
    } else {
      project.classList.add("hidden");
    }
  });
}
