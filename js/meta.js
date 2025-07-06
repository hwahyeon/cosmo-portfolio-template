function applyMeta(meta) {
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
    .setAttribute("content", meta.ogImage);

  // Contact Me section
  const emailText = `${meta.contact.email}`;
  const locationText = `${meta.contact.location}`;

  document.getElementById("contact-name").textContent = meta.contact.name;
  document.getElementById("contact-email").textContent = meta.contact.email;
  document.getElementById("contact-location").textContent =
    meta.contact.location;

  document.getElementById("contact-linkedin").href = meta.contact.linkedin;
  document.getElementById("contact-github").href = meta.contact.github;
  document.getElementById("contact-npm").href = meta.contact.npm;
  document.getElementById("contact-codepen").href = meta.contact.codepen;

  // Footer section
  document.getElementById("footer-quote").textContent = meta.footer.quote;
  document.getElementById("footer-copyright").textContent =
    meta.footer.copyright;
}

fetch("./assets/meta.json")
  .then((res) => res.json())
  .then(applyMeta);
