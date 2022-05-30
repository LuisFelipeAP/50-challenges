const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

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
  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
