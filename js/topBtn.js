window.addEventListener("scroll", () => {
  const scrollTopButton = document.getElementById("scrollTopButton");
  if (document.documentElement.scrollTop > 200) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
});

document.getElementById("scrollTopButton").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
