const header = document.querySelector("#header");
const title = document.querySelector("#title");
const excerpt = document.querySelector("#excerpt");
const profile_img = document.querySelector("#profile_img");
const name = document.querySelector("#name");
const date = document.querySelector("#date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

const headerCnt = '<img src="https://source.unsplash.com/random/" alt="" />';
const titleCnt = "Lorem ipsum dolor sit amet.";
const excerptCnt =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, porro?";
const profileImgCnt =
  '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
const nameCnt = "Lorem, ipsum.";
const dateCnt = "Oct 08, 2020";

function getData() {
  header.innerHTML = `${headerCnt}`;
  title.innerHTML = `${titleCnt}`;
  excerpt.innerHTML = `${excerptCnt}`;
  profile_img.innerHTML = `${profileImgCnt}`;
  name.innerHTML = `${nameCnt}`;
  date.innerHTML = `${dateCnt}`;
  for (const bg of animated_bgs)  bg.classList.remove("animated-bg");
  for (const bg of animated_bg_texts)  bg.classList.remove("animated-bg-text");
}
