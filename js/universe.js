function createStar() {
  const space = document.getElementById("starContainer");
  const star = document.createElement("div");
  star.classList.add("star");

  const starSize = Math.random() * 3 + 1 + "px";
  star.style.width = starSize;
  star.style.height = starSize;

  const maxX = space.offsetWidth - parseInt(starSize);
  const maxY = space.offsetHeight - parseInt(starSize);

  star.style.left = Math.random() * maxX + "px";
  star.style.top = Math.random() * maxY + "px";

  space.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 2000);
}

setInterval(createStar, 400);

function createShootingStar() {
  const space = document.getElementById("starContainer");
  const shootingStar = document.createElement("div");
  shootingStar.classList.add("shooting-star");

  shootingStar.style.left = Math.random() * space.offsetWidth + "px";
  shootingStar.style.top = "0px";

  shootingStar.style.animation = "shootingStar 1s linear forwards";

  space.appendChild(shootingStar);

  setTimeout(() => {
    shootingStar.remove();
  }, 3000);
}

setInterval(createShootingStar, 3000);
