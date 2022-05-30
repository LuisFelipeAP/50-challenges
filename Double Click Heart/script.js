const times = document.querySelector("#times");
const loveMe = document.querySelector(".loveMe");

let timesClicked = 0;

loveMe.addEventListener("dblclick", (e) => createHeart(e));

function createHeart(e) {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;
  const leftOffSet = e.target.offsetLeft;
  const topOffSet = e.target.offsetTop;

  const xInside = x - leftOffSet;
  const yInside = y - topOffSet;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.append(heart);
  setTimeout(() => heart.remove(), 1000);

  times.innerHTML = ++timesClicked;
}
