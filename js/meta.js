function applyMeta(meta) {
  const origin = window.location.origin;
  const ogImagePath = meta.ogImage.startsWith("http")
    ? meta.ogImage
    : `${origin}/${meta.ogImage}`;

  // Basic meta tags
  document.title = meta.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", meta.description);
  document
    .querySelector('meta[property="og:title"]')
    .setAttribute("content", meta.ogTitle);
  document
    .querySelector('meta[property="og:description"]')
    .setAttribute("content", meta.ogDescription);
  document
    .querySelector('meta[property="og:image"]')
    .setAttribute("content", ogImagePath);

  // Contact Me section
  document.getElementById("contact-name").textContent = meta.contact.name || "";
  document.getElementById("contact-email").textContent =
    meta.contact.email || "";
  document.getElementById("contact-location").textContent =
    meta.contact.location || "";

  const linkedin = document.getElementById("contact-linkedin");
  const github = document.getElementById("contact-github");
  const npm = document.getElementById("contact-npm");
  const codepen = document.getElementById("contact-codepen");

  if (meta.contact.linkedin) {
    linkedin.href = meta.contact.linkedin;
    linkedin.style.display = "inline-flex";
  } else {
    linkedin.style.display = "none";
  }

  if (meta.contact.github) {
    github.href = meta.contact.github;
    github.style.display = "inline-flex";
  } else {
    github.style.display = "none";
  }

  if (meta.contact.npm) {
    npm.href = meta.contact.npm;
    npm.style.display = "inline-flex";
  } else {
    npm.style.display = "none";
  }

  if (meta.contact.codepen) {
    codepen.href = meta.contact.codepen;
    codepen.style.display = "inline-flex";
  } else {
    codepen.style.display = "none";
  }

  // Footer section
  document.getElementById("footer-quote").textContent = meta.footer.quote || "";
  document.getElementById("footer-copyright").textContent =
    meta.footer.copyright || "";
}

fetch("./assets/meta.json")
  .then((res) => res.json())
  .then(applyMeta);
