const API_KEY = "43fb350c982be4f8284733351d0ddfab";

const BASE_URL = "https://api.themoviedb.org/3";

export const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

export function getPoster(poster_path) {
  return IMG_PATH + poster_path;
}

export async function searchPopularMovies() {
  const res = await fetch(
    `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`
  );
  return res.json();
}

export async function searchMovies(query) {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return res.json();
}
