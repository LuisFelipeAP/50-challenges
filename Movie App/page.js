import { searchPopularMovies, searchMovies } from "./api.js";
import { MovieCard } from "./components/MovieCard.js";

const main = document.querySelector("#main");
const form = document.querySelector("#form");
const search = document.querySelector("#search");

function showMovies(movies) {
  main.innerHTML = "";
  // for (const movie of movies) {
  //   const { title, poster_path, vote_average, overview } = movie;

  //   const movieElement = document.createElement("div");
  //   movieElement.classList.add("movie");
  //   movieElement.innerHTML = MovieCard({
  //     poster_path,
  //     title,
  //     vote_average,
  //     overview,
  //   });
  //   main.append(movieElement);
  // }

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = MovieCard({
      poster_path,
      title,
      vote_average,
      overview,
    });
    main.append(movieElement);
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    const data = await searchMovies(searchTerm);
    showMovies(data.results);

    search.value = "";
  } else {
    window.location.reload();
  }
});

const data = await searchPopularMovies();
showMovies(data.results);
