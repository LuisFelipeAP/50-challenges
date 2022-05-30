const jokeElement = document.querySelector("#joke");
const jokeButton = document.querySelector("#jokeBtn");

jokeButton.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await res.json();

  jokeElement.innerHTML = data.joke;
}
