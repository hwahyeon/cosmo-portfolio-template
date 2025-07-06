function renderOpenSource(data) {
  const container = document.querySelector(".contribution-table tbody");
  container.innerHTML = "";

  data.forEach((item) => {
    const row = document.createElement("tr");

    const repoTd = document.createElement("td");
    repoTd.className = "repo";
    const repoLink = document.createElement("a");
    repoLink.href = `https://github.com/${item.repository}`;
    repoLink.textContent = item.repository;
    repoLink.target = "_blank";
    repoTd.appendChild(repoLink);

    const contribTd = document.createElement("td");
    contribTd.className = "contribute-number";
    contribTd.textContent = ": ";

    item.contributions.forEach((contribution) => {
      const link = document.createElement("a");
      const typePath = contribution.type === "pull" ? "pull" : "issues";
      link.href = `https://github.com/${item.repository}/${typePath}/${contribution.number}`;
      link.textContent = `#${contribution.number}`;
      link.target = "_blank";
      contribTd.appendChild(link);
      contribTd.appendChild(document.createTextNode(" "));
    });

    row.appendChild(repoTd);
    row.appendChild(contribTd);
    container.appendChild(row);
  });
}

fetch("./assets/opensource.json")
  .then((res) => res.json())
  .then(renderOpenSource);
