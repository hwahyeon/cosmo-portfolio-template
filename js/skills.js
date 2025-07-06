function renderSkills(data) {
  const container = document.querySelector(".skills-container");
  container.innerHTML = "";

  data.forEach(skill => {
    const div = document.createElement("div");
    div.className = "skill";

    const img = document.createElement("img");
    img.src = `img/logo/${skill.id}.svg`;
    img.alt = `${skill.name} logo`;

    const p = document.createElement("p");
    p.textContent = skill.name;

    div.appendChild(img);
    div.appendChild(p);

    container.appendChild(div);
  });
}
